import { getLocale, setLocale, tr } from '../i18n';
import { useProgress } from '../state/ProgressContext';
export default function SourceLanguageSwitch() {
  const {
    chooseLanguage
  } = useProgress();
  return <label className="source-language-switch"><span>{tr('საწყისი ენა')}</span><select aria-label={tr('საწყისი ენა')} value={getLocale()} onChange={event => {
      const next = event.target.value;
      
      setLocale(next);
    }}><option value="ka">ქართული</option><option value="en">English</option></select></label>;
}
