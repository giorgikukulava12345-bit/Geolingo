import { tr, getLocale } from "../i18n";
import { useState } from 'react';
import { UserRound, LogOut } from 'lucide-react';
import { accountIdentity, accountLabel } from '../lib/accountIdentity';
import { supabase } from '../lib/supabase';
import { useProgress } from '../state/ProgressContext';
export default function AuthPanel() {
  const {
    user,
    signOut,
    sync,
    importGuest,
    saveAgain,
    retrySync,
    authError
  } = useProgress();
  const text = (ka, en) => getLocale() === 'en' ? en : ka;
  const [tab, setTab] = useState('login'),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [kind, setKind] = useState('email'),
    [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false),
    [failed, setFailed] = useState(false);
  async function submit(e) {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setMessage('');
    setFailed(false);
    try {
      const identity = await accountIdentity(kind, email);
      const credentials = {email: identity.email, password};
      const result = tab === 'signup'
        ? await supabase.auth.signUp({...credentials, options: {data: identity.username ? {username: identity.username} : {}}})
        : await supabase.auth.signInWithPassword(credentials);
      if (result.error) throw result.error;
      if (!result.data.session) throw new Error('session_missing');
      setMessage(text('ანგარიშში შესვლა წარმატებულია.', 'You are signed in.'));
      setPassword('');
    } catch (error) {
      setFailed(true);
      setMessage(error.message === 'username_format' ? text('სახელი: 3–24 ასო, ციფრი ან ქვედა ტირე.', 'Username: 3–24 letters, numbers or underscores.')
        : error.message === 'email_format' ? text('შეიყვანე სწორი ელფოსტა.', 'Enter a valid email address.')
        : error.message === 'session_missing' ? text('რეგისტრაცია დროებით ვერ დასრულდა. სცადე შესვლა ან მოგვიანებით გაიმეორე.', 'Registration could not finish. Try signing in or retry later.')
        : error.code === 'invalid_credentials' ? text('სახელი / ელფოსტა ან პაროლი არასწორია.', 'Incorrect username / email or password.')
        : ['user_already_exists', 'email_exists'].includes(error.code) ? text('ეს ანგარიში უკვე არსებობს. სცადე შესვლა.', 'This account already exists. Try signing in.')
        : error.status === 429 ? text('ცოტა ხანში სცადე თავიდან.', 'Please try again shortly.')
        : text('ვერ შესრულდა. გადაამოწმე მონაცემები და ინტერნეტი.', 'Unable to continue. Check your details and connection.'));

    } finally {
      setBusy(false);
    }
  }
  return <section className="panel account-panel"><h2><UserRound size={23} /> {user ? tr("\u10E8\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8") : tr("\u10E8\u10D4\u10D8\u10DC\u10D0\u10EE\u10D4 \u10E8\u10D4\u10DC\u10D8 \u10D7\u10D0\u10D5\u10D2\u10D0\u10D3\u10D0\u10E1\u10D0\u10D5\u10D0\u10DA\u10D8")}</h2>{user ? <><p>{accountLabel(user)}</p><div className="sync-status" role="status">{{
          saved: tr("\u2713 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10E8\u10D8 \u10E8\u10D4\u10DC\u10D0\u10EE\u10E3\u10DA\u10D8\u10D0"),
          pending: tr("\u10D8\u10DC\u10D0\u10EE\u10D4\u10D1\u10D0\u2026"),
          saving: tr("\u10D8\u10DC\u10D0\u10EE\u10D4\u10D1\u10D0\u2026"),
          loading: tr("\u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D4\u10D1\u10D0\u2026"),
          error: tr("\u10E8\u10D4\u10DC\u10D0\u10EE\u10D5\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0. \u10D0\u10D3\u10D2\u10D8\u10DA\u10DD\u10D1\u10E0\u10D8\u10D5\u10D8 \u10D0\u10E1\u10DA\u10D8 \u10D3\u10D0\u10EA\u10E3\u10DA\u10D8\u10D0."),
          conflict: tr("\u10E1\u10EE\u10D5\u10D0 \u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10DD\u10D1\u10D0\u10D6\u10D4 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0. \u10E9\u10D0\u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D4 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10D0\u10E1\u10DA\u10D8."),
          'load-error': tr("\u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D5\u10D4\u10E0 \u10E9\u10D0\u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D0.")
        }[sync]}</div>{['error', 'pending'].includes(sync) && <button className="secondary" onClick={saveAgain}>{tr("\u10E8\u10D4\u10DC\u10D0\u10EE\u10D5\u10D8\u10E1 \u10EE\u10D4\u10DA\u10D0\u10EE\u10DA\u10D0 \u10EA\u10D3\u10D0")}</button>}{['conflict', 'load-error'].includes(sync) && <button className="secondary" onClick={() => {
        if (window.confirm(tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10D0\u10E1\u10DA\u10D8\u10E1 \u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0 \u10D0\u10D3\u10D2\u10D8\u10DA\u10DD\u10D1\u10E0\u10D8\u10D5 \u10E8\u10D4\u10E3\u10DC\u10D0\u10EE\u10D0\u10D5 \u10EA\u10D5\u10DA\u10D8\u10DA\u10D4\u10D1\u10D4\u10D1\u10E1 \u10E9\u10D0\u10D0\u10DC\u10D0\u10EA\u10D5\u10DA\u10D4\u10D1\u10E1. \u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0?"))) retrySync();
      }}>{tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10D3\u10D0\u10DC \u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0")}</button>}<p>{tr("\u10DE\u10D8\u10E0\u10D5\u10D4\u10DA\u10D0\u10D3 \u10E8\u10D4\u10DB\u10DD\u10EE\u10D5\u10D4\u10D3\u10D8? \u10E8\u10D4\u10D2\u10D8\u10EB\u10DA\u10D8\u10D0 \u10D0\u10DB \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10D8\u10E1 \u10E1\u10E2\u10E3\u10DB\u10E0\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10E8\u10D8 \u10D2\u10D0\u10D3\u10D0\u10D8\u10E2\u10D0\u10DC\u10DD.")}</p><button className="secondary" onClick={() => {
        if (window.confirm(tr("\u10E1\u10E2\u10E3\u10DB\u10E0\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10E1 \u10E9\u10D0\u10D0\u10DC\u10D0\u10EA\u10D5\u10DA\u10D4\u10D1\u10E1. \u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0?"))) importGuest();
      }}>{tr("\u10E1\u10E2\u10E3\u10DB\u10E0\u10D8\u10E1 \u10DE\u10E0\u10DD\u10D2\u10E0\u10D4\u10E1\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E2\u10D0\u10DC\u10D0")}</button><button className="text-button" onClick={async () => {
        try {
          await signOut();
        } catch {
          setMessage(tr("\u10D2\u10D0\u10E1\u10D5\u10DA\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0. \u10E1\u10EA\u10D0\u10D3\u10D4 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC."));
        }
      }}><LogOut size={17} />{tr(" \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10D3\u10D0\u10DC \u10D2\u10D0\u10E1\u10D5\u10DA\u10D0")}</button></> : <><p>{text('ანგარიში ინახავს ქულებს, სიტყვებსა და გაკვეთილის მიმდინარე ეტაპს. Kids სივრცეში გამოიყენე მშობლის ანგარიში.', 'Your account saves XP, vocabulary and lesson progress. Use a parent account in Kids.')}</p>{!supabase ? <p role="alert">{tr("\u10E8\u10D4\u10D0\u10D5\u10E1\u10D4 .env \u10E4\u10D0\u10D8\u10DA\u10D8 \u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D8\u10E1 \u10E9\u10D0\u10E1\u10D0\u10E0\u10D7\u10D0\u10D5\u10D0\u10D3.")}</p> : <><div className="auth-tabs"><button className={tab === 'login' ? 'selected' : ''} onClick={() => {
            setTab('login');
            setMessage('');
          }}>{tr("\u10E8\u10D4\u10E1\u10D5\u10DA\u10D0")}</button><button className={tab === 'signup' ? 'selected' : ''} onClick={() => {
            setTab('signup');
            setMessage('');
          }}>{tr("\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0")}</button></div><div className="auth-tabs" role="group" aria-label={text('რეგისტრაციის მეთოდი', 'Account method')}>
<button aria-pressed={kind === 'email'} disabled={busy} onClick={() => {setKind('email');setEmail('');setMessage('');}}>{text('ელფოსტით', 'Email')}</button>
<button aria-pressed={kind === 'username'} disabled={busy} onClick={() => {setKind('username');setEmail('');setMessage('');}}>{text('მომხმარებლის სახელით', 'Username')}</button>
</div><p>{text('რეგისტრაციის შემდეგ მაშინვე შეხვალ. ორივე მეთოდისთვის საჭიროა პაროლი.', 'Sign in immediately after registration. Both methods require a password.')}</p>
{kind === 'username' && <p>{text('შეინახე სახელი და პაროლი — ელფოსტის გარეშე პაროლის აღდგენა ვერ მოხდება.', 'Keep your username and password safe: email recovery is unavailable without an email.')}</p>}
<form onSubmit={submit} className="auth-form"><fieldset disabled={busy} style={{border:0,padding:0,margin:0,display:'grid',gap:'1rem',minWidth:0}}>
<label>{kind === 'email' ? text('ელფოსტა', 'Email address') : text('მომხმარებლის სახელი', 'Username')}<input type={kind === 'email' ? 'email' : 'text'} autoComplete="username" autoCapitalize="none" spellCheck={false} required maxLength={kind === 'username' ? 24 : 254} value={email} onChange={e => setEmail(e.target.value)} /></label>
<label>{text('პაროლი', 'Password')}{tab === 'signup' && text(' (მინიმუმ 8 სიმბოლო)', ' (at least 8 characters)')}<input type="password" minLength={tab === 'signup' ? 8 : 1} maxLength={128} autoComplete={tab === 'signup' ? 'new-password' : 'current-password'} required value={password} onChange={e => setPassword(e.target.value)} /></label>
<button className="primary" disabled={busy}><UserRound size={17}/>{busy ? text('დაელოდე…', 'Please wait…') : tab === 'signup' ? text('ანგარიშის შექმნა', 'Create account') : text('შესვლა', 'Sign in')}</button></fieldset></form></>}{authError && <p role="alert">{authError}</p>}</>}{message && <p role={failed ? 'alert' : 'status'}>{message}</p>}</section>;
}
