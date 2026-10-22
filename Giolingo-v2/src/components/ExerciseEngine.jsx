import RussianKeyboard from './RussianKeyboard';
import { getLocale, tr, trf } from '../i18n';
import { useEffect, useRef, useState } from 'react';
import { X, Heart, Check, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { normalize } from '../data/curriculum.js';
import { useProgress } from '../state/ProgressContext';
import { AudioButton, SpeakingPractice } from './AudioButton';
import KidsLogo from './KidsLogo';
const emptyDraft = {
  phase: 'study',
  card: 0,
  index: 0,
  answer: '',
  tokens: [],
  feedback: null,
  mistakes: 0,
  matches: [],
  left: null,
  matchError: false
};
export default function ExerciseEngine({
  lesson,
  language,
  onClose
}) {
  const {
    state,
    loseHeart,
    refill,
    finish,
    saveDraft,
    seeEntry,
    recordMistake,
    resolveMistake
  } = useProgress();
  const [d, setD] = useState(() => ({
      ...emptyDraft,
      ...state.drafts[lesson.id],
      ...(state.drafts[lesson.id] && (state.drafts[lesson.id].sourceLanguage || 'ka') !== getLocale() ? {
        answer: '',
        feedback: null,
        tokens: [],
        matches: [],
        left: null
      } : {})
    })),
    [done, setDone] = useState(false);
  const shell = useRef(null),
    heading = useRef(null),
    answerInput = useRef(null),
    awarded = useRef(false);
  const index = Math.min(d.index, lesson.questions.length - 1),
    q = lesson.questions[index],
    entry = lesson.entries[Math.min(d.card, lesson.entries.length - 1)],
    total = lesson.questions.length,
    xp = Math.max(10, total * 5 - d.mistakes * 3);
  function update(patch) {
    setD(previous => {
      const next = {
        ...previous,
        ...patch
      };
      return next;
    });
    saveDraft(lesson.id, {
      ...d,
      ...patch,
      sourceLanguage: getLocale()
    });
  }
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    heading.current?.focus();
    const handler = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Tab') {
        const elements = [...shell.current.querySelectorAll('button:not(:disabled),input:not(:disabled),[tabindex="0"]')].filter(x => x.offsetParent !== null);
        const first = elements[0],
          last = elements.at(-1);
        if (e.shiftKey && (document.activeElement === first || !elements.includes(document.activeElement))) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !elements.includes(document.activeElement))) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', handler);
      previous?.focus();
      window.speechSynthesis?.cancel();
    };
  }, []);
  useEffect(() => {
    heading.current?.focus();
  }, [d.index, d.card, d.phase, done]);
  function learnNext() {
    seeEntry(language, entry);
    if (d.card === lesson.entries.length - 1) update({
      phase: 'test'
    });else update({
      card: d.card + 1
    });
  }
  function wrong() {
    loseHeart();
    recordMistake(lesson, q);
  }
  function check() {
    const valid = q.type === 'match' ? d.matches.length === q.pairs.length : normalize(q.type === 'build' ? d.tokens.map(i => q.tokens[i]).join(' ') : d.answer) === normalize(q.answer);
    update({
      feedback: valid,
      mistakes: d.mistakes + (valid ? 0 : 1)
    });
    if (!valid) wrong();else resolveMistake(`${lesson.id}:${q.id}`);
  }
  function next() {
    if (index === total - 1) {
      if (!awarded.current) {
        awarded.current = true;
        finish(lesson.id, xp);
      }
      setDone(true);
    } else update({
      index: index + 1,
      answer: '',
      tokens: [],
      matches: [],
      left: null,
      feedback: null,
      matchError: false
    });
  }
  const disabled = d.feedback !== null;
  return <div className="lesson-overlay" role="dialog" aria-modal="true" aria-label={`Giolingo · ${lesson.title}`}><div className="lesson-shell" ref={shell}><div className="lesson-top"><button aria-label={tr("\u10E8\u10D4\u10DC\u10D0\u10EE\u10D5\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0")} onClick={onClose}><X /></button><strong className="lesson-brand">giolingo{state.mode === 'kids' ? ' kids' : '✦'}</strong><div className="progress-track" role="progressbar" aria-label={tr("\u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8")} aria-valuenow={done ? total : d.phase === 'study' ? 0 : index} aria-valuemin={0} aria-valuemax={total}><i style={{
            width: `${done ? 100 : d.phase === 'study' ? 0 : index / total * 100}%`
          }} /></div><span className="red"><Heart fill="currentColor" size={21} /> {state.hearts}</span></div>
 {done ? <div className="completion"><div className="medal">🏆</div><h1 ref={heading} tabIndex={-1}>{tr("\u10E7\u10DD\u10E9\u10D0\u10E6! \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D3\u10D0")}</h1><p>{lesson.title}</p><div className="result-cards"><div>{tr("\u10E1\u10E3\u10DA XP")}<strong>+{xp}</strong></div><div>{tr("\u10E1\u10D8\u10D6\u10E3\u10E1\u10E2\u10D4")}<strong>{Math.max(0, Math.round((total - d.mistakes) / total * 100))}%</strong></div></div><button className="primary" onClick={onClose}>{tr("\u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0 ")}<ArrowRight size={18} /></button></div> : state.hearts === 0 ? <div className="completion"><div className="medal">💚</div><h1 ref={heading} tabIndex={-1}>{tr("\u10D2\u10D0\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D0")}</h1><p>{tr("\u10D2\u10E3\u10DA\u10D4\u10D1\u10D8 \u10E7\u10DD\u10D5\u10D4\u10DA\u10D7\u10D5\u10D8\u10E1 \u10E3\u10E4\u10D0\u10E1\u10DD\u10D0. \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10E8\u10D4\u10DC\u10D0\u10EE\u10E3\u10DA\u10D8\u10D0.")}</p><button className="primary" onClick={refill}>{tr("\u10E8\u10D4\u10D0\u10D5\u10E1\u10D4 5 \u10D2\u10E3\u10DA\u10D8 \xB7 \u10E3\u10E4\u10D0\u10E1\u10DD\u10D3")}</button></div> : d.phase === 'study' ? <main className="exercise study-phase"><span className="eyebrow">{tr("\u10D4\u10E2\u10D0\u10DE\u10D8 1 / 2 \xB7 \u10EF\u10D4\u10E0 \u10D5\u10D8\u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10D7 \xB7 ")}{d.card + 1} / {lesson.entries.length}</span><h1 ref={heading} tabIndex={-1}>{tr("\u10D2\u10D0\u10D8\u10EA\u10D0\u10DC\u10D8 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10D8")}</h1><p className="phase-description">{tr("\u10EC\u10D0\u10D8\u10D9\u10D8\u10D7\u10EE\u10D4, \u10DB\u10DD\u10E3\u10E1\u10DB\u10D8\u10DC\u10D4 \u10D3\u10D0 \u10D2\u10D0\u10D8\u10DB\u10D4\u10DD\u10E0\u10D4. \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D8\u10D5\u10D0\u10E0\u10EF\u10D8\u10E8\u10D4\u10D1.")}</p><div className="study-card"><span className="study-icon">{state.mode === 'kids' ? <KidsLogo size={64} /> : '📖'}</span><h2 lang={language}>{entry.target}</h2><p>{entry.ka}</p><div className="audio-row"><AudioButton text={entry.target} language={language} /><AudioButton text={entry.target} language={language} slow /></div><SpeakingPractice key={entry.target} text={entry.target} language={language} /></div><div className="study-rule"><BookOpen size={20} /><div><b>{lesson.grammar.title}</b><p>{lesson.grammar.theory}</p></div></div><div className="study-actions"><button disabled={d.card === 0} onClick={() => update({
            card: d.card - 1
          })}><ArrowLeft size={17} />{tr("\u10EC\u10D8\u10DC\u10D0 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0")}</button><button className="primary" onClick={learnNext}>{d.card === lesson.entries.length - 1 ? tr("\u10D5\u10D8\u10EA\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10D8 \xB7 \u10E2\u10D4\u10E1\u10E2\u10D8\u10E1 \u10D3\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0") : tr("\u10D2\u10D0\u10D5\u10D4\u10EA\u10D0\u10DC\u10D8 \xB7 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0")}<ArrowRight size={17} /></button></div></main> : <><main className="exercise"><span className="eyebrow">{tr("\u10D4\u10E2\u10D0\u10DE\u10D8 2 / 2 \xB7 ")}{lesson.title} · {index + 1} / {total}</span><h1 ref={heading} tabIndex={-1}>{q.prompt}</h1><div className="exercise-tip"><span className="mini-mascot">✦</span><p>{q.type === 'build' ? tr("\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10D8 \u10E1\u10EC\u10DD\u10E0\u10D8 \u10D7\u10D0\u10DC\u10DB\u10D8\u10DB\u10D3\u10D4\u10D5\u10E0\u10DD\u10D1\u10D8\u10D7") : q.type === 'match' ? tr("\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4 \u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0, \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10DB\u10D8\u10E1\u10D8 \u10D7\u10D0\u10E0\u10D2\u10DB\u10D0\u10DC\u10D8") : tr("\u10E8\u10D4\u10DC\u10D8 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D0\u10D5\u10E2\u10DD\u10DB\u10D0\u10E2\u10E3\u10E0\u10D0\u10D3 \u10D8\u10DC\u10D0\u10EE\u10D4\u10D1\u10D0.")}</p>{q.audio && <AudioButton text={q.audio} language={language} />}</div>
 {q.type === 'choice' && <div className="choices">{q.options.map((o, i) => <div className="choice-with-audio" key={o}><button aria-label={o} disabled={disabled} className={d.answer === o ? 'chosen' : ''} onClick={() => update({
                answer: o
              })}><kbd>{i + 1}</kbd><span lang={language}>{o}</span></button><AudioButton text={o} language={language} /></div>)}</div>}
 {q.type === 'fill' && <p className="gap-sentence" lang={language}>{q.sentence}</p>}
 {['translation', 'fill', 'listening'].includes(q.type) && <input ref={answerInput} className="translation" aria-label={tr("\u10E8\u10D4\u10DC\u10D8 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8")} placeholder={q.type === 'fill' ? tr("\u10E9\u10D0\u10EC\u10D4\u10E0\u10D4 \u10D2\u10D0\u10DB\u10DD\u10E2\u10DD\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DC\u10D0\u10EC\u10D8\u10DA\u10D8\u2026") : tr("\u10E9\u10D0\u10EC\u10D4\u10E0\u10D4 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8\u2026")} value={d.answer} disabled={disabled} onChange={e => update({
            answer: e.target.value
          })} onKeyDown={e => {
            if (e.key === 'Enter' && d.answer.trim() && !disabled) check();
          }} autoComplete="off" />}
 {language === 'ru' && ['translation', 'fill', 'listening'].includes(q.type) && q.id !== 'recall' && <RussianKeyboard value={d.answer} onChange={answer => update({
            answer
          })} inputRef={answerInput} disabled={disabled} />} 
 {q.type === 'build' && <><div className="answer-slots">{d.tokens.map((t, i) => <button disabled={disabled} key={t} onClick={() => update({
                tokens: d.tokens.filter((_, j) => j !== i)
              })}>{q.tokens[t]}</button>)}</div><div className="token-bank">{q.tokens.map((t, i) => <button key={i} disabled={d.tokens.includes(i) || disabled} onClick={() => update({
                tokens: [...d.tokens, i]
              })}>{t}</button>)}</div></>}
 {q.type === 'match' && <div className="matching"><div>{q.pairs.map((p, i) => <button key={i} disabled={d.matches.includes(i) || disabled} className={d.left === i ? 'chosen' : ''} onClick={() => update({
                left: i,
                matchError: false
              })}>{p.ka}{d.matches.includes(i) && ' ✓'}</button>)}</div><div>{[...q.pairs.keys()].sort((a, b) => (a + 2) % q.pairs.length - (b + 2) % q.pairs.length).map(i => <div className="match-with-audio" key={i}><button disabled={d.matches.includes(i) || d.left === null || disabled} onClick={() => {
                  if (i === d.left) update({
                    matches: [...d.matches, i],
                    left: null,
                    matchError: false
                  });else {
                    update({
                      left: null,
                      matchError: true,
                      mistakes: d.mistakes + 1
                    });
                    wrong();
                  }
                }}>{q.pairs[i].target}{d.matches.includes(i) && ' ✓'}</button><AudioButton text={q.pairs[i].target} language={language} /></div>)}</div></div>}
 {d.matchError && <p role="status" className="red">{tr("\u10D4\u10E1 \u10EC\u10E7\u10D5\u10D8\u10DA\u10D8 \u10D0\u10E0 \u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0. \u10E1\u10EA\u10D0\u10D3\u10D4 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC.")}</p>}
 </main><footer className={`exercise-footer ${d.feedback === true ? 'correct' : d.feedback === false ? 'incorrect' : ''}`}><div role="status">{disabled ? <><strong>{d.feedback ? tr("\u10E8\u10D4\u10E1\u10D0\u10DC\u10D8\u10E8\u10DC\u10D0\u10D5\u10D8\u10D0!") : tr("\u10D2\u10D0\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4, \u10E8\u10D4\u10DC \u10E8\u10D4\u10EB\u10DA\u10D4\u10D1!")}</strong>{!d.feedback && <p>{tr("\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8: ")}{q.answer}</p>}</> : <small>{tr("\u10D0\u10E0 \u10D8\u10E9\u10E5\u10D0\u10E0\u10DD \u2014 \u10E8\u10D4\u10DC \u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10D1.")}</small>}</div>{disabled ? <button className="primary" onClick={next}>{tr("\u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0 ")}<ArrowRight size={18} /></button> : <button className="primary" disabled={q.type === 'match' ? d.matches.length !== q.pairs.length : q.type === 'build' ? d.tokens.length === 0 : !d.answer.trim()} onClick={check}>{tr("\u10E8\u10D4\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0 ")}<Check size={18} /></button>}</footer></>}
 </div></div>;
}
