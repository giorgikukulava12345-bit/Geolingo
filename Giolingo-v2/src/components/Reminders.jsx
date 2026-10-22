import { tr, trf } from "../i18n";
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { useProgress } from '../state/ProgressContext';
import { localDay } from '../state/progress';
export function useReminders() {
  const {
    root,
    state
  } = useProgress();
  useEffect(() => {
    if (!root.reminder.enabled) return;
    function tick() {
      const now = new Date(),
        day = localDay(now),
        [hour, minute] = root.reminder.time.split(':').map(Number);
      if (now.getHours() * 60 + now.getMinutes() < hour * 60 + minute || (root.profiles.adult.daily[day] || 0) + (root.profiles.kids.daily[day] || 0) > 0) return;
      try {
        if (localStorage.getItem(`giolingo.reminded.${day}`)) return;
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(tr("Giolingo \xB7 \u10E8\u10D4\u10DC\u10D8 5 \u10EC\u10E3\u10D7\u10D8"), {
            body: tr("\u10D3\u10E6\u10D4\u10E1 \u10D4\u10E0\u10D7\u10D8 \u10D2\u10D0\u10D9\u10D5\u10D4\u10D7\u10D8\u10DA\u10D8 \u10D2\u10D0\u10D8\u10D0\u10E0\u10D4 \u10D3\u10D0 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D8\u10D0 \u10D2\u10D0\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4!"),
            tag: `giolingo-${day}`
          });
          localStorage.setItem(`giolingo.reminded.${day}`, '1');
        }
      } catch {/* Some mobile browsers require a push worker; no false delivery status. */}
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [root.reminder, root.profiles.adult.daily, root.profiles.kids.daily, state.mode]);
}
export default function Reminders() {
  const {
    root,
    setReminder
  } = useProgress();
  const [message, setMessage] = useState('');
  async function enable() {
    if (!('Notification' in window)) {
      setMessage(tr("\u10D0\u10DB \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E1 \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10D0\u10E0 \u10D0\u10E5\u10D5\u10E1."));
      return;
    }
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setReminder({
          ...root.reminder,
          enabled: true
        });
        setMessage(tr("\u10E8\u10D4\u10EE\u10E1\u10D4\u10DC\u10D4\u10D1\u10D0 \u10E9\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8\u10D0."));
      } else setMessage(tr("\u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E8\u10D8 \u10DC\u10D4\u10D1\u10D0\u10E0\u10D7\u10D5\u10D0 \u10E9\u10D0\u10E0\u10D7\u10D4."));
    } catch {
      setMessage(tr("\u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10D0\u10DB \u10D2\u10D0\u10E0\u10D4\u10DB\u10DD\u10E8\u10D8 \u10D5\u10D4\u10E0 \u10E9\u10D0\u10D8\u10E0\u10D7\u10DD."));
    }
  }
  return <section className="panel"><h2><Bell size={22} />{tr(" \u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10E1 \u10E8\u10D4\u10EE\u10E1\u10D4\u10DC\u10D4\u10D1\u10D0")}</h2><p>{tr("\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4 \u10D3\u10E0\u10DD. \u10E8\u10D4\u10EE\u10E1\u10D4\u10DC\u10D4\u10D1\u10D0 \u10D2\u10D0\u10DB\u10DD\u10E9\u10DC\u10D3\u10D4\u10D1\u10D0, \u10D7\u10E3 \u10D3\u10E6\u10D4\u10E1 \u10EF\u10D4\u10E0 \u10D0\u10E0 \u10D2\u10D8\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10D0 \u10D3\u10D0 \u10E1\u10D0\u10D8\u10E2\u10D8 \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E8\u10D8 \u10D2\u10D0\u10EE\u10E1\u10DC\u10D8\u10DA\u10D8\u10D0. \u10D3\u10D0\u10EE\u10E3\u10E0\u10E3\u10DA \u10D1\u10E0\u10D0\u10E3\u10D6\u10D4\u10E0\u10E8\u10D8 \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0 \u10D0\u10DB \u10D5\u10D4\u10E0\u10E1\u10D8\u10D0\u10E8\u10D8 \u10D0\u10E0 \u10D8\u10D2\u10D6\u10D0\u10D5\u10DC\u10D4\u10D1\u10D0.")}</p><label className="time-label">{tr("\u10E8\u10D4\u10DC\u10D8 \u10D0\u10D3\u10D2\u10D8\u10DA\u10DD\u10D1\u10E0\u10D8\u10D5\u10D8 \u10D3\u10E0\u10DD ")}<input type="time" value={root.reminder.time} onChange={e => {
        if (e.target.value) setReminder({
          ...root.reminder,
          time: e.target.value
        });
      }} /></label><button className="secondary" onClick={root.reminder.enabled ? () => setReminder({
      ...root.reminder,
      enabled: false
    }) : enable}>{root.reminder.enabled ? tr("\u10E8\u10D4\u10EE\u10E1\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E0\u10D7\u10D5\u10D0") : tr("\u10E8\u10D4\u10EE\u10E1\u10D4\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E9\u10D0\u10E0\u10D7\u10D5\u10D0")}</button><p role="status">{message}</p></section>;
}
