import { useLayoutEffect, useRef, useState } from 'react';
import { tr } from '../i18n';
export function editText(value, start, end, key) {
  if (key === 'Backspace') {
    if (start === end && start > 0) start -= Array.from(value.slice(0, start)).at(-1).length;
    return {
      value: value.slice(0, start) + value.slice(end),
      caret: start
    };
  }
  return {
    value: value.slice(0, start) + key + value.slice(end),
    caret: start + key.length
  };
}
export default function RussianKeyboard({
  value,
  onChange,
  inputRef,
  disabled = false
}) {
  const [upper, setUpper] = useState(false),
    [open, setOpen] = useState(true);
  const pendingCaret = useRef(null);
  useLayoutEffect(() => {
    if (pendingCaret.current === null) return;
    inputRef.current?.focus({
      preventScroll: true
    });
    inputRef.current?.setSelectionRange(pendingCaret.current, pendingCaret.current);
    pendingCaret.current = null;
  }, [value]);
  function type(key) {
    const input = inputRef.current;
    const start = input?.selectionStart ?? value.length,
      end = input?.selectionEnd ?? start;
    const next = editText(value, start, end, key);
    pendingCaret.current = next.caret;
    onChange(next.value);
  }
  return <section className="russian-keyboard" aria-label={tr('რუსული ვირტუალური კლავიატურა')}>
 <button type="button" className="keyboard-toggle" aria-expanded={open} onClick={() => setOpen(v => !v)}>{tr('რუსული კლავიატურა')} <span aria-hidden="true">{open ? '⌃' : '⌄'}</span></button>
 {open && <div className="keyboard-keys">{['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'].map(row => <div className="keyboard-row" key={row}>{Array.from(row).map(letter => <button type="button" disabled={disabled} key={letter} onPointerDown={event => event.preventDefault()} onClick={() => type(upper ? letter.toUpperCase() : letter)}>{upper ? letter.toUpperCase() : letter}</button>)}</div>)}<div className="keyboard-row keyboard-actions"><button type="button" disabled={disabled} aria-pressed={upper} aria-label={tr('დიდი ასოები')} onClick={() => setUpper(v => !v)}>⇧</button><button type="button" disabled={disabled} className="keyboard-space" onPointerDown={event => event.preventDefault()} onClick={() => type(' ')}>{tr('გამოტოვება')}</button><button type="button" disabled={disabled} aria-label={tr('წინა ასოს წაშლა')} onPointerDown={event => event.preventDefault()} onClick={() => type('Backspace')}>⌫</button></div></div>}
 </section>;
}
