import { tr, trf } from "../i18n";
import { Check, Lock, Star, BookOpen } from 'lucide-react';
import { isUnlocked } from '../data/curriculum';
import { useProgress } from '../state/ProgressContext';
export default function SkillPath({
  course,
  units,
  onStart,
  unitIndex,
  setUnitIndex
}) {
  const {
    state
  } = useProgress();
  const unit = units[Math.min(unitIndex, units.length - 1)];
  return <section className="path-section"><div className="unit-banner"><div><span className="eyebrow">{state.mode === 'kids' ? 'GIOLINGO KIDS' : unit.level}{tr(" \xB7 \u10D7\u10D0\u10D5\u10D8 ")}{unitIndex + 1}</span><h2>{unit.title}</h2><p>{unit.description}</p></div><span className="unit-art">{unit.icon}</span></div><div className="unit-tabs" aria-label={tr("\u10D7\u10D0\u10D5\u10D4\u10D1\u10D8")}>{units.map((u, i) => <button key={u.id} title={u.title} className={i === unitIndex ? 'selected' : ''} onClick={() => setUnitIndex(i)}>{i + 1}<span>{u.title}</span></button>)}</div><div className="path"><div className="path-line" />{unit.lessons.map((l, i) => {
        const done = state.completed.includes(l.id),
          unlocked = isUnlocked(l, course, state),
          current = unlocked && !done;
        return <div key={l.id} className={`path-stop stop-${i} ${current ? 'current' : ''}`}><div className="node-wrap">{current && <span className="start-tag">{state.drafts[l.id] ? tr("\u10D2\u10D0\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4 \u2193") : tr("\u10D3\u10D0\u10D8\u10EC\u10E7\u10D4 \u10D0\u10E5 \u2193")}</span>}<button disabled={!unlocked} className={`lesson-node ${done ? 'done' : current ? 'active' : 'locked'}`} aria-label={`${l.title}${!unlocked ? tr(" \u2014 \u10EF\u10D4\u10E0 \u10EC\u10D8\u10DC\u10D0 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10D0\u10DC \u10D3\u10DD\u10DC\u10D8\u10E1 \u10E2\u10D4\u10E1\u10E2\u10D8 \u10D2\u10D0\u10D8\u10D0\u10E0\u10D4") : ''}`} onClick={() => onStart(l)}>{done ? <Check size={32} /> : unlocked ? <Star size={32} fill="currentColor" /> : <Lock size={26} />}</button></div><div className="node-label"><b>{l.title}</b><small>{done ? tr("\u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0 \xB7 \u10D2\u10D0\u10D8\u10DB\u10D4\u10DD\u10E0\u10D4") : unlocked ? trf("{0} \u10D0\u10EE\u10D0\u10DA\u10D8 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0/\u10E4\u10E0\u10D0\u10D6\u10D0 \xB7 {1} \u10E1\u10D0\u10D5\u10D0\u10E0\u10EF\u10D8\u10E8\u10DD", l.entries.length, l.questions.length) : tr("\u10D3\u10D0\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4 \u10EC\u10D8\u10DC\u10D0 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8")}</small></div></div>;
      })}<div className="path-end"><span>🏆</span><b>{tr("\u10EA\u10DD\u10D3\u10DC\u10D0 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0 \u10DC\u10D0\u10D1\u10D8\u10EF\u10D4\u10D1\u10D8\u10D7 \u10D8\u10D6\u10E0\u10D3\u10D4\u10D1\u10D0")}</b><small>{tr("\u10EF\u10D4\u10E0 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10D8, \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D5\u10D0\u10E0\u10EF\u10D8\u10E8\u10D8.")}</small></div></div><div className="unit-pager"><button disabled={unitIndex === 0} onClick={() => setUnitIndex(i => i - 1)}>{tr("\u2190 \u10EC\u10D8\u10DC\u10D0 \u10D7\u10D0\u10D5\u10D8")}</button><button disabled={unitIndex >= units.length - 1} onClick={() => setUnitIndex(i => i + 1)}>{tr("\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8 \u10D7\u10D0\u10D5\u10D8 \u2192")}</button></div><div className="note"><BookOpen size={21} /><span>{tr("\u10E8\u10D4\u10DC\u10D8 \u10E2\u10D4\u10DB\u10DE\u10D8\u10D7, \u10E7\u10DD\u10D5\u10D4\u10DA\u10D3\u10E6\u10D4. \u10E7\u10D5\u10D4\u10DA\u10D0 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10E3\u10E4\u10D0\u10E1\u10DD\u10D0.")}</span></div></section>;
}
