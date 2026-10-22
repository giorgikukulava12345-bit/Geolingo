import { tr, trf } from "../i18n";
let active;
export function stopSpeech() {
  if (active) {
    active.utterance.onend = null;
    active.utterance.onerror = null;
    active.notify('');
    clearTimeout(active.timer);
    active = null;
  }
  window.speechSynthesis?.cancel();
}
export function observeVoices(listener) {
  const synth = window.speechSynthesis;
  if (!synth) return () => {};
  const changed = () => listener(synth.getVoices());
  changed();
  synth.addEventListener('voiceschanged', changed);
  return () => synth.removeEventListener('voiceschanged', changed);
}
export function speakText(text, language, slow, notify) {
  const synth = window.speechSynthesis;
  if (!synth || !window.SpeechSynthesisUtterance) {
    notify(tr("\u10D0\u10DB \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E1 \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0 \u10D0\u10E0 \u10D0\u10E5\u10D5\u10E1. \u10D2\u10D0\u10DB\u10DD\u10D8\u10E7\u10D4\u10DC\u10D4 Chrome, Edge \u10D0\u10DC Safari."));
    return;
  }
  stopSpeech();
  const utterance = new window.SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  const matching = voices.filter(v => v.lang.toLowerCase().split(/[-_]/)[0] === language);
  utterance.lang = language === 'ru' ? 'ru-RU' : 'en-US';
  utterance.voice = matching.find(v => v.lang === utterance.lang) || matching.find(v => v.localService) || matching[0] || null;
  utterance.rate = slow ? .7 : .9;
  const session = {
    utterance,
    notify,
    timer: null
  };
  active = session;
  const finish = message => {
    if (active !== session) return;
    clearTimeout(session.timer);
    active = null;
    notify(message);
  };
  utterance.onstart = () => {
    clearTimeout(session.timer);
    notify(tr("\u10DB\u10D8\u10DB\u10D3\u10D8\u10DC\u10D0\u10E0\u10D4\u10DD\u10D1\u10E1 \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0\u2026"));
  };
  utterance.onend = () => finish('');
  utterance.onerror = event => {
    if (['canceled', 'interrupted'].includes(event.error)) {
      finish('');
      return;
    }
    finish(['language-unavailable', 'voice-unavailable', 'synthesis-unavailable'].includes(event.error) ? tr("\u10D0\u10DB \u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10DD\u10D1\u10D0\u10D6\u10D4 \u10E8\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D8\u10E1\u10D8 \u10EE\u10DB\u10D0 \u10DB\u10D8\u10E3\u10EC\u10D5\u10D3\u10DD\u10DB\u10D4\u10DA\u10D8\u10D0. \u10D3\u10D0\u10D0\u10DB\u10D0\u10E2\u10D4 \u10D8\u10DC\u10D2\u10DA\u10D8\u10E1\u10E3\u10E0\u10D8 \u10D0\u10DC \u10E0\u10E3\u10E1\u10E3\u10DA\u10D8 \u10EE\u10DB\u10D0 \u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10DD\u10D1\u10D8\u10E1 Speech / Text-to-Speech \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8\u10D3\u10D0\u10DC \u10D3\u10D0 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC \u10E1\u10EA\u10D0\u10D3\u10D4.") : event.error === 'not-allowed' ? tr("\u10DB\u10DD\u10E1\u10D0\u10E1\u10DB\u10D4\u10DC\u10D0\u10D3 \u10D8\u10E1\u10D4\u10D5 \u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4 \u10EE\u10DB\u10D8\u10E1 \u10E6\u10D8\u10DA\u10D0\u10D9\u10E1. \u10E8\u10D4\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4 \u10E1\u10D0\u10D8\u10E2\u10D8\u10E1 \u10EE\u10DB\u10D8\u10E1 \u10DC\u10D4\u10D1\u10D0\u10E0\u10D7\u10D5\u10D0.") : tr("\u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0 \u10D5\u10D4\u10E0 \u10D3\u10D0\u10D8\u10EC\u10E7\u10DD. \u10D2\u10D0\u10D3\u10D0\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4 \u10EE\u10DB\u10D0 \u10D3\u10D0 \u10D8\u10DC\u10E2\u10D4\u10E0\u10DC\u10D4\u10E2\u10D8, \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC \u10E1\u10EA\u10D0\u10D3\u10D4."));
  };
  notify(tr("\u10EE\u10DB\u10D0 \u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D4\u10D1\u10D0\u2026"));
  session.timer = setTimeout(() => {
    if (active === session) {
      stopSpeech();
      notify(tr("\u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10DD\u10D1\u10D0 \u10EE\u10DB\u10D0\u10E1 \u10D5\u10D4\u10E0 \u10E0\u10D7\u10D0\u10D5\u10E1. \u10D3\u10D0\u10D0\u10DB\u10D0\u10E2\u10D4 \u10E8\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D8\u10E1\u10D8 \u10D4\u10DC\u10D8\u10E1 \u10EE\u10DB\u10D0 Speech / Text-to-Speech \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8\u10D3\u10D0\u10DC \u10D0\u10DC \u10E1\u10EA\u10D0\u10D3\u10D4 \u10E1\u10EE\u10D5\u10D0 \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10D8."));
    }
  }, 12000);
  try {
    synth.resume();
    synth.speak(utterance);
  } catch {
    finish(tr("\u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D0 \u10D5\u10D4\u10E0 \u10D3\u10D0\u10D8\u10EC\u10E7\u10DD. \u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4 \u10E6\u10D8\u10DA\u10D0\u10D9\u10E1 \u10D7\u10D0\u10D5\u10D8\u10D3\u10D0\u10DC."));
  }
  return () => {
    if (active === session) stopSpeech();
  };
}
