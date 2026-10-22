import { tr, trf } from "../i18n";
import { useMemo, useState } from 'react';
import { placementQuestions, recommendLevel } from '../data/placement';
import { useProgress } from '../state/ProgressContext';
export default function PlacementTest({
  onComplete
}) {
  const {
    state,
    setPlacement
  } = useProgress();
  const questions = useMemo(() => placementQuestions(state.language), [state.language]);
  const [results, setResults] = useState([]),
    [answer, setAnswer] = useState(''),
    [started, setStarted] = useState(false);
  const q = questions[results.length],
    done = results.length === questions.length;
  function submit() {
    setResults(r => [...r, {
      level: q.level,
      correct: answer === q.answer
    }]);
    setAnswer('');
  }
  return <section className="panel placement"><h2>{tr("\u10D8\u10DE\u10DD\u10D5\u10D4 \u10E8\u10D4\u10DC\u10D8 \u10E1\u10D0\u10EC\u10E7\u10D8\u10E1\u10D8 \u10D3\u10DD\u10DC\u10D4")}</h2><p>{tr("20 \u10DB\u10DD\u10D9\u10DA\u10D4 \u10D9\u10D8\u10D7\u10EE\u10D5\u10D0 \xB7 A1\u2013C1. \u10D4\u10E1 \u10E1\u10D0\u10DD\u10E0\u10D8\u10D4\u10DC\u10E2\u10D0\u10EA\u10D8\u10DD \u10D2\u10E0\u10D0\u10DB\u10D0\u10E2\u10D8\u10D9\u10E3\u10DA\u10D8 \u10E2\u10D4\u10E1\u10E2\u10D8\u10D0 \u10D3\u10D0 \u10D0\u10E0\u10D0 CEFR \u10E1\u10D4\u10E0\u10E2\u10D8\u10E4\u10D8\u10D9\u10D0\u10E2\u10D8. \u10D6\u10D4\u10DE\u10D8\u10E0 \u10DB\u10D4\u10E2\u10E7\u10D5\u10D4\u10DA\u10D4\u10D1\u10D0\u10E1\u10D0 \u10D3\u10D0 \u10D7\u10D0\u10D5\u10D8\u10E1\u10E3\u10E4\u10D0\u10DA \u10EC\u10D4\u10E0\u10D0\u10E1 \u10D0\u10E0 \u10D0\u10E4\u10D0\u10E1\u10D4\u10D1\u10E1. \u10E5\u10E3\u10DA\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10D2\u10E3\u10DA\u10D4\u10D1\u10D8 \u10D0\u10E0 \u10D8\u10EA\u10D5\u10DA\u10D4\u10D1\u10D0.")}</p>{!started ? <button className="primary" onClick={() => setStarted(true)}>{tr("\u10D3\u10DD\u10DC\u10D8\u10E1 \u10E8\u10D4\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0")}</button> : done ? <><div className="placement-result">{tr("\u10E0\u10D4\u10D9\u10DD\u10DB\u10D4\u10DC\u10D3\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D3\u10D0\u10E1\u10D0\u10EC\u10E7\u10D8\u10E1\u10D8")}<strong>{recommendLevel(results)}</strong><span>{results.filter(r => r.correct).length}{tr(" / 20 \u10E1\u10EC\u10DD\u10E0\u10D8 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8")}</span></div><p>{tr("C1-\u10D8\u10E1 \u10D1\u10DA\u10DD\u10D9\u10D8 \u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D8\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10E1 \u10DB\u10D0\u10E6\u10D0\u10DA \u10D3\u10DD\u10DC\u10D4\u10D6\u10D4 \u10D2\u10E0\u10D0\u10DB\u10D0\u10E2\u10D8\u10D9\u10D8\u10E1 \u10EA\u10DD\u10D3\u10DC\u10D0\u10E1: ")}{results.filter(r => r.level === 'C1' && r.correct).length}/4.</p><button className="primary" onClick={() => {
        setPlacement(state.language, {
          level: recommendLevel(results),
          score: results.filter(r => r.correct).length,
          at: Date.now()
        });
        setStarted(false);
        setResults([]);
        onComplete?.();
      }}>{tr("\u10D0\u10DB \u10D3\u10DD\u10DC\u10D8\u10D3\u10D0\u10DC \u10D3\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0")}</button></> : <><span className="eyebrow">{results.length + 1} / 20</span><h3>{q.prompt}</h3><div className="choices">{q.options.map(o => <button key={o} className={answer === o ? 'chosen' : ''} onClick={() => setAnswer(o)}>{o}</button>)}</div><button className="primary" disabled={!answer} onClick={submit}>{tr("\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8")}</button></>}</section>;
}
