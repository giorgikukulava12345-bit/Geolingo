import { useEffect, useSyncExternalStore } from 'react';
import App from '../App';
import { getLocale, subscribeLocale } from '../i18n';
export default function LocaleRoot() {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = locale === 'en' ? 'Giolingo — learn every day' : 'Giolingo — ისწავლე ყოველდღე';
  }, [locale]);
  return <App key={locale} />;
}
