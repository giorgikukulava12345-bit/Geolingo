import { tr, trf } from "../i18n";
import { useEffect, useRef, useState } from 'react';
import { Volume2, Mic } from 'lucide-react';
import { speakText, observeVoices } from '../lib/speech.js';
import { normalize } from '../data/curriculum.js';
export function AudioButton({
  text,
  language = 'en',
  slow = false
}) {
  const [status, setStatus] = useState('');
  const stop = useRef(null);
  useEffect(() => observeVoices(() => {}), []);
  useEffect(() => () => stop.current?.(), [text, language]);
  return <span className="audio-control"><button type="button" className="audio-button" aria-label={`${slow ? tr("\u10DC\u10D4\u10DA\u10D0 \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0") : tr("\u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0")}: ${text}`} onClick={() => {
      stop.current = speakText(text, language, slow, setStatus);
    }}><Volume2 size={19} />{slow && <small>{tr("\u10DC\u10D4\u10DA\u10D0")}</small>}</button>{status && <small role="status">{status}</small>}</span>;
}
export function SpeakingPractice({
  text,
  language
}) {
  const [status, setStatus] = useState(''),
    [busy, setBusy] = useState(false);
  const recognition = useRef(null);
  useEffect(() => () => recognition.current?.abort(), []);
  const supported = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
  function start() {
    if (!supported) return;
    const r = new supported();
    recognition.current = r;
    r.lang = language === 'en' ? 'en-GB' : 'ru-RU';
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.onstart = () => {
      setBusy(true);
      setStatus(tr("\u10D2\u10D8\u10E1\u10DB\u10D4\u10DC\u2026"));
    };
    r.onend = () => setBusy(false);
    r.onerror = e => setStatus(e.error === 'not-allowed' ? tr("\u10DB\u10D8\u10D9\u10E0\u10DD\u10E4\u10DD\u10DC\u10D8\u10E1 \u10DC\u10D4\u10D1\u10D0\u10E0\u10D7\u10D5\u10D0 \u10D0\u10E0 \u10D0\u10E0\u10D8\u10E1 \u10E9\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8.") : tr("\u10EE\u10DB\u10D0 \u10D5\u10D4\u10E0 \u10D0\u10DB\u10DD\u10D5\u10D8\u10EA\u10D0\u10DC\u10D8. \u10E8\u10D4\u10D2\u10D8\u10EB\u10DA\u10D8\u10D0 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC \u10E1\u10EA\u10D0\u10D3\u10DD."));
    r.onresult = e => {
      const heard = e.results[0][0].transcript;
      setStatus(normalize(heard) === normalize(text) ? trf("\u10E8\u10D4\u10E1\u10D0\u10DC\u10D8\u10E8\u10DC\u10D0\u10D5\u10D8\u10D0! \u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10D8\u10D0: {0}", heard) : trf("\u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10D8\u10D0: {0}. \u10DB\u10DD\u10E3\u10E1\u10DB\u10D8\u10DC\u10D4 \u10DC\u10D8\u10DB\u10E3\u10E8\u10E1 \u10D3\u10D0 \u10E1\u10EA\u10D0\u10D3\u10D4 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC.", heard));
    };
    try {
      r.start();
    } catch {
      setBusy(false);
      setStatus(tr("\u10DB\u10D8\u10D9\u10E0\u10DD\u10E4\u10DD\u10DC\u10D8 \u10D5\u10D4\u10E0 \u10E9\u10D0\u10D8\u10E0\u10D7\u10DD."));
    }
  }
  return <div className="speaking"><button type="button" disabled={!supported || busy} onClick={start}><Mic size={17} />{busy ? tr("\u10D2\u10D8\u10E1\u10DB\u10D4\u10DC\u2026") : tr("\u10EE\u10DB\u10D0\u10DB\u10D0\u10E6\u10DA\u10D0 \u10D2\u10D0\u10D8\u10DB\u10D4\u10DD\u10E0\u10D4")}</button><small>{supported ? tr("\u10E1\u10E3\u10E0\u10D5\u10D8\u10DA\u10D8\u10E1\u10D0\u10DB\u10D4\u10D1\u10E0: \u10DB\u10D8\u10D9\u10E0\u10DD\u10E4\u10DD\u10DC\u10D8\u10E1 \u10E6\u10D8\u10DA\u10D0\u10D9\u10D8 \u10EE\u10DB\u10D8\u10E1 \u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D0\u10E1 \u10E0\u10D7\u10D0\u10D5\u10E1. \u10EE\u10DB\u10D0 \u10E8\u10D4\u10E1\u10D0\u10EB\u10DA\u10DD\u10D0 \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10DB\u10D0 \u10D3\u10D0\u10D0\u10DB\u10E3\u10E8\u10D0\u10DD\u10E1.") : tr("\u10EE\u10DB\u10D8\u10E1 \u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D0 \u10D0\u10DB \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E1 \u10D0\u10E0 \u10D0\u10E5\u10D5\u10E1. \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0 \u10D3\u10D0 \u10EC\u10D4\u10E0\u10D8\u10D7\u10D8 \u10E1\u10D0\u10D5\u10D0\u10E0\u10EF\u10D8\u10E8\u10DD\u10D4\u10D1\u10D8 \u10EE\u10D4\u10DA\u10DB\u10D8\u10E1\u10D0\u10EC\u10D5\u10D3\u10DD\u10DB\u10D8\u10D0.")}</small><p role="status">{status}</p></div>;
}
