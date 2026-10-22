import { tr, trf } from "../i18n";
import { useState } from 'react';
import { Mail, UserRound, LogOut } from 'lucide-react';
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
  const [tab, setTab] = useState('login'),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [otp, setOtp] = useState(''),
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
      let result;
      if (tab === 'signup') result = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });else if (tab === 'verify') result = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: otp,
        type: 'signup'
      });else result = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });
      if (result.error) throw result.error;
      if (tab === 'signup' && !result.data.session) {
        setMessage(tr("\u10D2\u10D0\u10D3\u10D0\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0 \u10D3\u10D0 \u10D2\u10D0\u10EE\u10E1\u10D4\u10DC\u10D8 \u10D3\u10D0\u10DB\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10D1\u10DB\u10E3\u10DA\u10D8. \u10D7\u10E3 \u10EC\u10D4\u10E0\u10D8\u10DA\u10E8\u10D8 \u10D9\u10DD\u10D3\u10D8\u10D0, \u10E9\u10D0\u10EC\u10D4\u10E0\u10D4 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7."));
        setTab('verify');
      } else setMessage(tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10E8\u10D8 \u10E8\u10D4\u10E1\u10D5\u10DA\u10D0 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0."));
      setPassword('');
    } catch (error) {
      setFailed(true);
      setMessage(error.code === 'invalid_credentials' ? tr("\u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0 \u10D0\u10DC \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8 \u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8\u10D0.") : error.code === 'email_not_confirmed' ? tr("\u10D2\u10D7\u10EE\u10DD\u10D5 \u10EF\u10D4\u10E0 \u10D3\u10D0\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0.") : error.status === 429 ? tr("\u10EB\u10D0\u10DA\u10D8\u10D0\u10DC \u10D1\u10D4\u10D5\u10E0\u10D8 \u10DB\u10EA\u10D3\u10D4\u10DA\u10DD\u10D1\u10D0\u10D0. \u10EA\u10DD\u10E2\u10D0 \u10EE\u10D0\u10DC\u10E8\u10D8 \u10E1\u10EA\u10D0\u10D3\u10D4.") : trf("\u10D5\u10D4\u10E0 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D3\u10D0: {0}", error.message));
    } finally {
      setBusy(false);
    }
  }
  return <section className="panel account-panel"><h2><UserRound size={23} /> {user ? tr("\u10E8\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8") : tr("\u10E8\u10D4\u10D8\u10DC\u10D0\u10EE\u10D4 \u10E8\u10D4\u10DC\u10D8 \u10D7\u10D0\u10D5\u10D2\u10D0\u10D3\u10D0\u10E1\u10D0\u10D5\u10D0\u10DA\u10D8")}</h2>{user ? <><p>{user.email}</p><div className="sync-status" role="status">{{
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
      }}><LogOut size={17} />{tr(" \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10D3\u10D0\u10DC \u10D2\u10D0\u10E1\u10D5\u10DA\u10D0")}</button></> : <><p>{tr("\u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10D7 \u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0 \u10D8\u10DC\u10D0\u10EE\u10D0\u10D5\u10E1 \u10E5\u10E3\u10DA\u10D4\u10D1\u10E1, \u10E1\u10D8\u10E2\u10E7\u10D5\u10D4\u10D1\u10E1\u10D0 \u10D3\u10D0 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8\u10E1 \u10DB\u10D8\u10DB\u10D3\u10D8\u10DC\u10D0\u10E0\u10D4 \u10D4\u10E2\u10D0\u10DE\u10E1. Kids \u10E1\u10D8\u10D5\u10E0\u10EA\u10D4\u10E8\u10D8 \u10D2\u10D0\u10DB\u10DD\u10D8\u10E7\u10D4\u10DC\u10D4 \u10DB\u10E8\u10DD\u10D1\u10DA\u10D8\u10E1 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8.")}</p>{!supabase ? <p role="alert">{tr("\u10E8\u10D4\u10D0\u10D5\u10E1\u10D4 .env \u10E4\u10D0\u10D8\u10DA\u10D8 \u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D8\u10E1 \u10E9\u10D0\u10E1\u10D0\u10E0\u10D7\u10D0\u10D5\u10D0\u10D3.")}</p> : <><div className="auth-tabs"><button className={tab === 'login' ? 'selected' : ''} onClick={() => {
            setTab('login');
            setMessage('');
          }}>{tr("\u10E8\u10D4\u10E1\u10D5\u10DA\u10D0")}</button><button className={tab === 'signup' ? 'selected' : ''} onClick={() => {
            setTab('signup');
            setMessage('');
          }}>{tr("\u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0")}</button></div><form onSubmit={submit} className="auth-form"><label>{tr("\u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0")}<input type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} /></label>{tab !== 'verify' ? <label>{tr("\u10DE\u10D0\u10E0\u10DD\u10DA\u10D8 ")}{tab === 'signup' && tr("(\u10DB\u10D8\u10DC\u10D8\u10DB\u10E3\u10DB 8 \u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD)")}<input type="password" minLength={tab === 'signup' ? 8 : 1} maxLength={128} autoComplete={tab === 'signup' ? 'new-password' : 'current-password'} required value={password} onChange={e => setPassword(e.target.value)} /></label> : <label>{tr("\u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10D7 \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D9\u10DD\u10D3\u10D8")}<input inputMode="numeric" autoComplete="one-time-code" required value={otp} onChange={e => setOtp(e.target.value)} /></label>}<button className="primary" disabled={busy}><Mail size={17} />{busy ? tr("\u10D3\u10D0\u10D4\u10DA\u10DD\u10D3\u10D4\u2026") : tab === 'signup' ? tr("\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10E8\u10D4\u10E5\u10DB\u10DC\u10D0") : tab === 'verify' ? tr("\u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10D3\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10D0") : tr("\u10E8\u10D4\u10E1\u10D5\u10DA\u10D0")}</button></form></>}{authError && <p role="alert">{authError}</p>}</>}{message && <p role={failed ? 'alert' : 'status'}>{message}</p>}</section>;
}
