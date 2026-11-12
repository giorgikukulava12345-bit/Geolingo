import React, { useEffect, useRef, useState } from "react";
import { MessagesSquare } from "lucide-react";
import { historyLimit, languages, levels, parseTurn } from "../lib/conversation/shared.js";
import "./conversation.css";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-700";
const letters = ["A", "B", "C"];

function ChoiceGroup({ label, value, onChange, choices, disabled }) {
  return (
    <fieldset disabled={disabled}>
      <legend className="mb-3 text-sm font-bold">{label}</legend>
      <div className="grid grid-cols-2 gap-2.5">
        {Object.entries(choices).map(([code, name]) => (
          <label key={code} className="conversation-choice relative min-w-0">
            <input
              className="peer sr-only"
              type="radio"
              name={label}
              value={code}
              checked={value === code}
              onChange={() => onChange(code)}
            />
            <span className="conversation-option flex h-full min-h-20 cursor-pointer flex-col justify-center gap-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-500 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-emerald-700 peer-disabled:cursor-default">
              <span className="conversation-code text-xs font-extrabold tracking-wider">{code.toUpperCase()}</span>
              <span>{name}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function PartnerMark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-10 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-800"
    >
      <MessagesSquare size={20} />
    </span>
  );
}

function DialogueBubble({ message, language, headingRef }) {
  return (
    <div className="flex items-start gap-3">
      <PartnerMark />
      <div className="conversation-bubble min-w-0 rounded-2xl rounded-tl-sm px-4 py-3.5 sm:px-5">
        <p className="mb-1.5 conversation-muted text-xs font-semibold">სასაუბრო პარტნიორი</p>
        <p
          ref={headingRef}
          tabIndex={headingRef ? -1 : undefined}
          lang={language}
          className={`wrap-break-word text-base leading-relaxed font-semibold ${focusRing}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

function Exchange({ exchange, language, feedbackRef }) {
  const { message, answer, feedback } = exchange;
  return (
    <div className="space-y-3">
      <DialogueBubble message={message} language={language} />
      <p lang={language} className="ml-auto w-fit max-w-[90%] wrap-break-word rounded-2xl rounded-tr-sm bg-[#167750] px-4 py-3 text-sm leading-relaxed font-medium text-white">
        {answer}
      </p>
      <div
        ref={feedbackRef}
        tabIndex={feedbackRef ? -1 : undefined}
        className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${focusRing} ${feedback.correct ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-amber-200 bg-amber-50 text-amber-950"}`}
      >
        <p className="mb-1 font-extrabold">{feedback.correct ? "კარგი პასუხია" : "უკეთესი პასუხი"}</p>
        <p>{feedback.text}</p>
      </div>
    </div>
  );
}

export default function ConversationPractice({ initialLanguage, initialLevel }) {
  const [language, setLanguage] = useState(initialLanguage === "ru" ? "ru" : "en");
  const [level, setLevel] = useState(initialLevel === "A2" ? "A2" : "A1");
  const [turn, setTurn] = useState(null);
  const [exchanges, setExchanges] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(null);
  const currentMessage = useRef(null);
  const latestFeedback = useRef(null);
  const startButton = useRef(null);
  const lastExchange = exchanges.at(-1);

  useEffect(() => () => inFlight.current?.abort(), []);
  useEffect(() => {
    if (turn) (latestFeedback.current ?? currentMessage.current)?.focus();
  }, [turn]);

  async function requestTurn(answer) {
    if (inFlight.current) return;
    const controller = new AbortController();
    inFlight.current = controller;
    const previous = turn && answer ? { message: turn.message, answer } : null;
    const history = previous
      ? [...exchanges.slice(1 - historyLimit), previous].map(({ message, answer }) => ({ message, answer }))
      : [];

    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, level, history }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (controller.signal.aborted) return;

      if (!response.ok) {
        setError(result?.error || "დიალოგის მიღება ვერ მოხერხდა. სცადე ხელახლა.");
        return;
      }
      const nextTurn = parseTurn(result, Boolean(previous));
      if (!nextTurn) {
        setError("დიალოგის პასუხი ვერ დამუშავდა. სცადე ხელახლა.");
        return;
      }
      if (previous) {
        setExchanges((items) => [...items, { ...previous, feedback: nextTurn.feedback }]);
      }
      setTurn(nextTurn);
    } catch {
      if (!controller.signal.aborted) {
        setError("კავშირი ვერ დამყარდა. სცადე ხელახლა.");
      }
    } finally {
      inFlight.current = null;
      if (!controller.signal.aborted) setPending(false);
    }
  }

  function reset() {
    setTurn(null);
    setExchanges([]);
    setError("");
    requestAnimationFrame(() => startButton.current?.focus());
  }

  return (
    <section lang="ka" className="conversation-practice @container w-full">
      <div className="grid items-start gap-4 @2xl:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.3fr)]">
        <section aria-labelledby="conversation-settings" className="conversation-card rounded-2xl border p-4 shadow-sm sm:p-5">
          <h2 id="conversation-settings" className="text-lg font-extrabold">პარამეტრები</h2>
          <div className="mt-5 space-y-5">
            <ChoiceGroup label="ენა" value={language} onChange={setLanguage} choices={languages} disabled={pending || !!turn} />
            <ChoiceGroup label="დონე" value={level} onChange={setLevel} choices={levels} disabled={pending || !!turn} />
          </div>
          {turn ? (
            <button
              type="button"
              disabled={pending}
              onClick={reset}
              className={`mt-6 min-h-12 w-full rounded-xl border border-emerald-700 px-4 py-3 text-sm font-bold transition-colors hover:bg-emerald-500/10 disabled:opacity-60 ${focusRing}`}
            >
              ახალი დიალოგი
            </button>
          ) : (
            <button
              ref={startButton}
              type="button"
              disabled={pending}
              onClick={() => requestTurn()}
              className={`mt-6 min-h-12 w-full rounded-xl bg-[#167750] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-900 disabled:cursor-wait disabled:opacity-70 ${focusRing}`}
            >
              დიალოგის დაწყება <span aria-hidden="true" className="ml-1">→</span>
            </button>
          )}
        </section>

        <section aria-labelledby="conversation-dialogue" className="conversation-card min-w-0 overflow-hidden rounded-2xl border shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
            <h2 id="conversation-dialogue" className="text-lg font-extrabold">დიალოგი</h2>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900">
              {languages[language]} · {level}
            </span>
          </div>
          <div className="space-y-5 p-5 sm:p-6">
            {turn ? (
              <>
                {exchanges.length > 1 && (
                  <details className="rounded-xl border border-slate-200 px-4 py-3">
                    <summary className={`cursor-pointer text-sm font-bold ${focusRing}`}>წინა პასუხები</summary>
                    <ol className="mt-4 space-y-5">
                      {exchanges.slice(0, -1).map((exchange, index) => (
                        <li key={index}><Exchange exchange={exchange} language={language} /></li>
                      ))}
                    </ol>
                  </details>
                )}
                {lastExchange && <Exchange exchange={lastExchange} language={language} feedbackRef={latestFeedback} />}
                <DialogueBubble message={turn.message} language={language} headingRef={currentMessage} />
                <fieldset disabled={pending} className="space-y-2.5">
                  <legend className="mb-3 text-sm font-bold">აირჩიე პასუხი</legend>
                  {turn.options.map((option, index) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => requestTurn(option)}
                      className={`group flex min-h-14 w-full items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 text-left transition-colors enabled:hover:border-emerald-500 enabled:hover:bg-emerald-500/10 disabled:opacity-65 ${focusRing}`}
                    >
                      <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-xs font-extrabold text-emerald-900 group-enabled:group-hover:bg-emerald-100">{letters[index]}</span>
                      <span lang={language} className="min-w-0 flex-1 wrap-break-word text-sm leading-relaxed font-semibold">{option}</span>
                      <span aria-hidden="true" className="text-emerald-800">→</span>
                    </button>
                  ))}
                </fieldset>
              </>
            ) : (
              <div className="grid min-h-56 place-items-center rounded-xl border border-dashed border-emerald-200 conversation-bubble px-5 py-9 text-center">
                <div className="flex max-w-sm flex-col items-center">
                  <PartnerMark />
                  <p className="mt-4 font-bold">დაიწყე საუბარი</p>
                  <p className="conversation-muted mt-2 text-sm leading-relaxed">
                    აირჩიე ენა და დონე. თითოეულ შეკითხვაზე სამი პასუხიდან ერთს აირჩევ.
                  </p>
                </div>
              </div>
            )}
            {pending && <p role="status" className="conversation-muted text-sm font-medium">პასუხი მზადდება…</p>}
            {error && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{error}</p>}
          </div>
        </section>
      </div>
    </section>
  );
}
