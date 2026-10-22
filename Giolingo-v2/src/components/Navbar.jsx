import { tr, trf } from "../i18n";
import SourceLanguageSwitch from './SourceLanguageSwitch';
import LanguageFlag from './LanguageFlag';
import { Flame, Heart, Zap, ChevronDown } from 'lucide-react';
import { useProgress } from '../state/ProgressContext';
import { getCourses } from '../data/curriculum';
export default function Navbar() {
  const {
    state,
    streak,
    chooseLanguage,
    refill
  } = useProgress();
  const courses = getCourses();
  return <header className="topbar"><a className="mobile-brand" href="#">giolingo<span>✦</span></a><div className="course-switch"><LanguageFlag language={state.language} size={32} /><select aria-label={tr("\u10E1\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10DD \u10D4\u10DC\u10D0")} value={state.language || 'en'} onChange={e => chooseLanguage(e.target.value)}>{Object.values(courses).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select><ChevronDown size={15} /></div><SourceLanguageSwitch /><div className="stats"><span className="orange" title={tr("\u10D3\u10E6\u10D8\u10E3\u10E0\u10D8 \u10E1\u10D4\u10E0\u10D8\u10D0")}><Flame size={23} />{streak}<small>{tr("\u10D3\u10E6\u10D4")}</small></span><span className="gold" title={tr("\u10D2\u10D0\u10DB\u10DD\u10EA\u10D3\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E5\u10E3\u10DA\u10D4\u10D1\u10D8")}><Zap size={23} />{state.xp}<small>XP</small></span><button className="red" title={tr("\u10D2\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E3\u10E4\u10D0\u10E1\u10DD\u10D3 \u10E8\u10D4\u10D5\u10E1\u10D4\u10D1\u10D0")} onClick={refill}><Heart size={23} fill="currentColor" />{state.hearts}</button></div></header>;
}
