import { tr, trf } from "../i18n";
import { useRef, useState } from 'react';
import RussianKeyboard from './RussianKeyboard';
import { useProgress } from '../state/ProgressContext';
import { allLessons, normalize } from '../data/curriculum';
import { AudioButton } from './AudioButton';
import { getGrammar } from '../data/grammar';
export function GrammarLibrary({
  units,
  language
}) {
  const [search, setSearch] = useState('');
  const level = units[0]?.level || 'A1';
  const rules = getGrammar(language, level).filter(([title, theory, examples]) => normalize([title, theory, ...examples].join(' ')).includes(normalize(search)));
  return <section className="grammar-library"><div className="panel"><h2>{level}{tr(" \xB7 \u10D2\u10E0\u10D0\u10DB\u10D0\u10E2\u10D8\u10D9\u10D8\u10E1 \u10D2\u10D6\u10D0\u10DB\u10D9\u10D5\u10DA\u10D4\u10D5\u10D8")}</h2><p>{tr("\u10EC\u10D4\u10E1\u10D8 \u10EC\u10D0\u10D8\u10D9\u10D8\u10D7\u10EE\u10D4, \u10DB\u10DD\u10E3\u10E1\u10DB\u10D8\u10DC\u10D4 \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10E1 \u10D3\u10D0 \u10E8\u10D4\u10E5\u10DB\u10D4\u10DC\u10D8 \u10E8\u10D4\u10DC\u10D8 \u10EC\u10D8\u10DC\u10D0\u10D3\u10D0\u10D3\u10D4\u10D1\u10D0. \u10D7\u10D8\u10D7\u10DD \u10D4\u10DC\u10D0\u10D6\u10D4 154 \u10D2\u10D0\u10DC\u10E1\u10EE\u10D5\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D7\u10D4\u10DB\u10D0.")}</p><input className="search-input" aria-label={tr("\u10D2\u10E0\u10D0\u10DB\u10D0\u10E2\u10D8\u10D9\u10D0\u10E8\u10D8 \u10EB\u10D4\u10D1\u10DC\u10D0")} placeholder={tr("\u10DB\u10DD\u10EB\u10D4\u10D1\u10DC\u10D4 \u10EC\u10D4\u10E1\u10D8 \u10D0\u10DC \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10D8\u2026")} value={search} onChange={e => setSearch(e.target.value)} /><small role="status">{tr("\u10DC\u10D0\u10DE\u10DD\u10D5\u10DC\u10D8\u10D0 ")}{rules.length}{tr(" \u10D7\u10D4\u10DB\u10D0")}</small></div>{rules.map(([title, theory, examples]) => <details className="panel grammar-unit" key={title}><summary><span>{title}</span><small>{level}{tr(" \xB7 \u10EC\u10D4\u10E1\u10D8 \u10D3\u10D0 \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10D8")}</small></summary><p>{theory}</p><div className="grammar-examples">{examples.map(e => <div key={e}><span lang={language}>{e}</span><AudioButton text={e} language={language} /></div>)}</div><p className="grammar-task">{tr("\u10E8\u10D4\u10DC\u10D8 \u10EF\u10D4\u10E0\u10D8\u10D0: \u10E8\u10D4\u10EA\u10D5\u10D0\u10DA\u10D4 \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10D8\u10E1 \u10DE\u10D8\u10E0\u10D8, \u10E1\u10D0\u10D2\u10D0\u10DC\u10D8 \u10D0\u10DC \u10D3\u10E0\u10DD \u10D3\u10D0 \u10D3\u10D0\u10EC\u10D4\u10E0\u10D4 \u10E1\u10D0\u10D9\u10E3\u10D7\u10D0\u10E0\u10D8 \u10EC\u10D8\u10DC\u10D0\u10D3\u10D0\u10D3\u10D4\u10D1\u10D0 \u10E0\u10D5\u10D4\u10E3\u10DA\u10E8\u10D8.")}</p></details>)}<details className="panel"><summary>{tr("\u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D4\u10D1\u10E8\u10D8 \u10DC\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8 \u10DB\u10D0\u10D2\u10D0\u10DA\u10D8\u10D7\u10D4\u10D1\u10D8")}</summary>{units.map(u => <details className="lesson-theory" key={u.id}><summary>{u.icon} {u.title}</summary>{u.lessons.map(l => <div key={l.id}><h3>{l.title}</h3>{l.entries.map(e => <div className="example-row" key={e.target}><div><b lang={language}>{e.target}</b><small>{e.ka}</small></div><AudioButton text={e.target} language={language} /></div>)}</div>)}</details>)}</details></section>;
}
export function VocabularyBank() {
  const {
    state
  } = useProgress();
  const [search, setSearch] = useState('');
  const entries = new Map(Object.entries(state.seenWords));
  for (const l of allLessons(state.language, state.mode).filter(l => state.completed.includes(l.id))) {
    for (const e of l.entries) entries.set(`${state.language}:${e.target}`, {
      ...e,
      language: state.language
    });
  }
  const sourceWords = new Map(allLessons(state.language, state.mode).flatMap(l => l.entries).map(e => [e.target, e]));
  const words = [...entries.values()].map(e => ({
    ...e,
    ...sourceWords.get(e.target)
  })).filter(e => e.language === state.language && normalize(`${e.target} ${e.ka}`).includes(normalize(search)));
  return <section className="panel"><h2>{tr("\u10E8\u10D4\u10DC\u10D8 \u10DA\u10D4\u10E5\u10E1\u10D8\u10D9\u10DD\u10DC\u10D8 \xB7 ")}{words.length}</h2><p>{tr("\u10D0\u10E5 \u10E9\u10DC\u10D3\u10D4\u10D1\u10D0 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10E1 \u10E4\u10D0\u10D6\u10D0\u10E8\u10D8 \u10D2\u10D0\u10D5\u10DA\u10D8\u10DA\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10E4\u10E0\u10D0\u10D6\u10D4\u10D1\u10D8. \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8 \u10EB\u10D5\u10D4\u10DA\u10D8 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D4\u10D1\u10D8\u10EA \u10D0\u10D5\u10E2\u10DD\u10DB\u10D0\u10E2\u10E3\u10E0\u10D0\u10D3 \u10D4\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0.")}</p><input className="search-input" aria-label={tr("\u10DA\u10D4\u10E5\u10E1\u10D8\u10D9\u10DD\u10DC\u10E8\u10D8 \u10EB\u10D4\u10D1\u10DC\u10D0")} placeholder={tr("\u10DB\u10DD\u10EB\u10D4\u10D1\u10DC\u10D4 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0 \u10D0\u10DC \u10D7\u10D0\u10E0\u10D2\u10DB\u10D0\u10DC\u10D8\u2026")} value={search} onChange={e => setSearch(e.target.value)} />{words.length === 0 ? <p>{tr("\u10EF\u10D4\u10E0 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0 \u10D0\u10E0 \u10D0\u10E0\u10D8\u10E1. \u10D3\u10D0\u10D8\u10EC\u10E7\u10D4 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10D0\u10DC \u10E8\u10D4\u10EA\u10D5\u10D0\u10DA\u10D4 \u10E1\u10D0\u10EB\u10D8\u10D4\u10D1\u10DD \u10E2\u10D4\u10E5\u10E1\u10E2\u10D8.")}</p> : words.map(e => <div className="example-row" key={`${e.language}:${e.target}`}><div><b lang={e.language}>{e.target}</b><small>{e.ka}</small></div><AudioButton text={e.target} language={e.language} /></div>)}</section>;
}
function ReviewInput({
  value,
  onChange,
  russian
}) {
  const input = useRef(null);
  return <div className="review-input"><input ref={input} required aria-label={tr('გამეორების პასუხი')} value={value} onChange={event => onChange(event.target.value)} />{russian && <RussianKeyboard value={value} onChange={onChange} inputRef={input} />}</div>;
}
export function SmartReview() {
  const {
    state,
    resolveMistake
  } = useProgress();
  const [answers, setAnswers] = useState({}),
    [feedback, setFeedback] = useState({});
  const mistakes = Object.entries(state.mistakes).filter(([, v]) => v.language === state.language);
  return <section className="panel"><h2>{tr("\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D4\u10D1\u10D8\u10E1 \u10E7\u10E3\u10DA\u10D0\u10D1\u10D0 \xB7 ")}{mistakes.length}</h2><p>{tr("\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10E1 \u10DC\u10D0\u10EC\u10D8\u10DA\u10D8\u10D0. \u10E1\u10EC\u10DD\u10E0\u10D0\u10D3 \u10D2\u10D0\u10DB\u10D4\u10DD\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D1\u10D0\u10E0\u10D0\u10D7\u10D8 \u10D0\u10DB \u10E1\u10D8\u10D8\u10D3\u10D0\u10DC \u10D2\u10D0\u10E5\u10E0\u10D4\u10D1\u10D0. \u10D0\u10E5 \u10D2\u10E3\u10DA\u10D4\u10D1\u10E1 \u10D0\u10E0 \u10D9\u10D0\u10E0\u10D2\u10D0\u10D5.")}</p>{mistakes.length === 0 && <div className="empty-state">🌟<p>{tr("\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D4\u10D1\u10D8\u10E1 \u10E1\u10D8\u10D0 \u10EA\u10D0\u10E0\u10D8\u10D4\u10DA\u10D8\u10D0!")}</p></div>}{mistakes.map(([key, m]) => {
      const q = allLessons(state.language, state.mode).find(l => l.id === m.lessonId)?.questions.find(q => q.id === m.question.id) || m.question,
        expected = q.answer || q.pairs[0].target;
      return <div className="review-card" key={key}><b>{q.type === 'match' ? trf("\u10D7\u10D0\u10E0\u10D2\u10DB\u10DC\u10D4: {0}", q.pairs[0].ka) : q.prompt}</b>{q.type === 'fill' && <p>{q.sentence}</p>}{q.audio && <AudioButton text={q.audio} language={state.language} />}<form onSubmit={e => {
          e.preventDefault();
          if (normalize(answers[key] || '') === normalize(expected)) resolveMistake(key);else setFeedback(f => ({
            ...f,
            [key]: trf("\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8: {0}. \u10E9\u10D0\u10EC\u10D4\u10E0\u10D4 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC.", expected)
          }));
        }}><ReviewInput value={answers[key] || ''} russian={state.language === 'ru' && q.id !== 'recall'} onChange={value => setAnswers(a => ({
            ...a,
            [key]: value
          }))} /><button className="secondary">{tr("\u10E8\u10D4\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0")}</button></form><small role="status">{feedback[key] || trf("\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0: {0}", m.count)}</small></div>;
    })}</section>;
}
