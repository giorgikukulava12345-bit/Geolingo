import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Coffee, Compass, House, MessagesSquare, Search, ShoppingBag, Thermometer } from "lucide-react";
import { getLocale } from "../i18n";
import dialogues from "../data/russianDialogues.json";
import timings from "../data/russianDialogueTimings.json";

const categories = {
  people: { ka: "ადამიანები და საუბარი", en: "People and conversation", icon: MessagesSquare },
  food: { ka: "საკვები და შეკვეთა", en: "Food and ordering", icon: Coffee },
  travel: { ka: "გზა და მგზავრობა", en: "Directions and travel", icon: Compass },
  home: { ka: "სახლი და მეზობლები", en: "Home and neighbours", icon: House },
  services: { ka: "შოპინგი და მომსახურება", en: "Shopping and services", icon: ShoppingBag },
  work: { ka: "სამუშაო და სწავლა", en: "Work and study", icon: Briefcase },
  health: { ka: "ჯანმრთელობა და დახმარება", en: "Health and help", icon: Thermometer },
};
const pageSize = 8;
const phraseCount = dialogues.reduce((sum, { lines }) => sum + lines.length, 0);
const searchable = (text) => text.toLowerCase().replaceAll("ё", "е").trim();

function ListeningPlayer({ scene, english, initialLine }) {
  const audio = useRef(null);
  const [lineIndex, setLineIndex] = useState(initialLine);
  const [audioError, setAudioError] = useState(false);
  const cues = timings[scene.id];
  const [russian, translation] = scene.lines[lineIndex];
  const speaker = scene.speakers[lineIndex % 2];
  const Icon = categories[scene.category].icon;

  function syncSubtitle(event) {
    const index = cues.findLastIndex((start) => start <= event.currentTarget.currentTime);
    setLineIndex(Math.max(0, index));
  }

  function goToLine(index) {
    if (index < 0 || index >= scene.lines.length) return;
    setLineIndex(index);
    if (audio.current && !audioError) audio.current.currentTime = cues[index];
  }

  return (
    <div className="conversation-card overflow-hidden rounded-2xl border shadow-sm">
      <div className="bg-[#16483a] px-4 py-5 text-white sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15" aria-hidden="true"><Icon size={21} /></span>
            <div className="min-w-0">
              <h3 className="text-base font-extrabold sm:text-lg">{english ? scene.english : scene.title}</h3>
              {!english && <p lang="en" className="text-sm text-emerald-100">{scene.english}</p>}
            </div>
          </div>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold">{scene.level}</span>
        </div>
        <div className="mt-5 rounded-xl bg-black/20 px-4 py-4 sm:px-5" aria-live="polite">
          {!english && <p className="text-xs font-semibold text-emerald-200">{speaker}</p>}
          <p lang="ru" className="mt-1 text-lg leading-snug font-extrabold sm:text-2xl">{russian}</p>
          <p lang="en" className="mt-2 border-t border-white/20 pt-2 text-sm leading-relaxed text-emerald-50 sm:text-base">{translation}</p>
        </div>
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <audio
          ref={audio}
          src={`/russian-dialogues/${scene.id}.mp3`}
          controls
          preload="metadata"
          className="block w-full"
          aria-label={english ? "Play the Russian dialogue" : "რუსული დიალოგის მოსმენა"}
          onTimeUpdate={syncSubtitle}
          onSeeked={syncSubtitle}
          onLoadedMetadata={(event) => {
            if (initialLine > 0) event.currentTarget.currentTime = cues[initialLine];
          }}
          onError={() => setAudioError(true)}
        />
        {audioError && <p role="status" className="text-sm">{english ? "Audio could not load. You can still read the dialogue below." : "აუდიო ვერ ჩაიტვირთა. დიალოგის წაკითხვა ქვემოთ შეგიძლია."}</p>}
        <div className="flex items-center justify-between gap-2">
          <button type="button" className="secondary flex items-center gap-2" onClick={() => goToLine(lineIndex - 1)} disabled={lineIndex === 0}>
            <ArrowLeft size={16} aria-hidden="true" />{english ? "Previous" : "წინა"}
          </button>
          <span className="conversation-muted text-sm font-semibold">{lineIndex + 1} / {scene.lines.length}</span>
          <button type="button" className="secondary flex items-center gap-2" onClick={() => goToLine(lineIndex + 1)} disabled={lineIndex === scene.lines.length - 1}>
            {english ? "Next" : "შემდეგი"}<ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <details className="rounded-xl border border-[var(--conversation-line)] px-4 py-3">
          <summary className="cursor-pointer text-sm font-bold">{english ? "Full transcript" : "სრული დიალოგის ტექსტი"}</summary>
          <ol className="mt-3 divide-y divide-[var(--conversation-line)]">
            {scene.lines.map(([text, subtitle], index) => (
              <li key={text}>
                <button type="button" aria-current={index === lineIndex ? "step" : undefined} onClick={() => goToLine(index)} className="block w-full rounded-md px-2 py-2 text-left hover:bg-emerald-500/10 aria-current:bg-emerald-500/10">
                  <span lang="ru" className="block text-sm font-semibold">{text}</span>
                  <span lang="en" className="conversation-muted mt-1 block text-sm">{subtitle}</span>
                </button>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </div>
  );
}

export default function RussianDialogues() {
  const [selection, setSelection] = useState({ scene: dialogues[0], line: 0 });
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const playerHeading = useRef(null);
  const english = getLocale() === "en";
  const terms = searchable(query).split(/\s+/u).filter(Boolean);
  const matches = (text) => {
    const value = searchable(text);
    return terms.every((term) => value.includes(term));
  };
  const results = dialogues
    .filter((scene) => (!category || scene.category === category) && (!level || scene.level === level))
    .flatMap((scene) => {
      const match = terms.length ? scene.lines.findIndex((line) => matches(line.join(" "))) : -1;
      return match >= 0 || matches(`${scene.title} ${scene.english}`) ? [{ scene, match }] : [];
    });
  const pageCount = Math.ceil(results.length / pageSize);
  const nextDialogue = results[results.findIndex(({ scene }) => scene.id === selection.scene.id) + 1];

  function openDialogue(scene, line) {
    setSelection({ scene, line });
    requestAnimationFrame(() => {
      playerHeading.current?.focus({ preventScroll: true });
      playerHeading.current?.scrollIntoView({ block: "start" });
    });
  }

  return (
    <section className="conversation-practice @container space-y-4" aria-labelledby="russian-dialogues-heading">
      <div>
        <h2 id="russian-dialogues-heading" className="text-xl font-extrabold">{english ? "Real Russian Conversations" : "რუსული დიალოგები ყოველდღიურ სიტუაციებში"}</h2>
        <p className="conversation-muted mt-1 text-sm">{english ? "Listen in Russian and read the English translation below each line." : "მოუსმინე რუსულ საუბარს და თითოეული ფრაზის ქვემოთ წაიკითხე ინგლისური თარგმანი."}</p>
        <p className="mt-2 text-sm font-bold">{english ? `${dialogues.length} dialogues · ${phraseCount} lines with audio` : `${dialogues.length} დიალოგი · ${phraseCount} ფრაზა აუდიოთი`}</p>
      </div>
      <div className="grid gap-3 @xl:grid-cols-[2fr_1.4fr_1fr]">
        <label className="block min-w-0 text-sm font-bold">
          {english ? "Search dialogues and phrases" : "დიალოგებისა და ფრაზების ძიება"}
          <span className="conversation-card mt-2 flex min-h-11 items-center gap-2 rounded-xl border px-3">
            <Search size={17} aria-hidden="true" className="shrink-0" />
            <input type="search" className="min-w-0 flex-1 bg-transparent py-2 text-sm font-normal" placeholder={english ? "Try: train, спасибо…" : "მაგალითად: კაფე, спасибо…"} value={query} onChange={(event) => { setQuery(event.target.value); setPage(0); }} />
          </span>
        </label>
        <label className="block min-w-0 text-sm font-bold">
          {english ? "Topic" : "თემა"}
          <select className="conversation-card mt-2 block min-h-11 w-full rounded-xl border px-3 text-sm" value={category} onChange={(event) => { setCategory(event.target.value); setPage(0); }}>
            <option value="">{english ? "All topics" : "ყველა თემა"}</option>
            {Object.entries(categories).map(([id, label]) => <option key={id} value={id}>{english ? label.en : label.ka}</option>)}
          </select>
        </label>
        <label className="block min-w-0 text-sm font-bold">
          {english ? "Level" : "დონე"}
          <select className="conversation-card mt-2 block min-h-11 w-full rounded-xl border px-3 text-sm" value={level} onChange={(event) => { setLevel(event.target.value); setPage(0); }}>
            <option value="">{english ? "All levels" : "ყველა დონე"}</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
          </select>
        </label>
      </div>
      <p className="conversation-muted text-sm" aria-live="polite">
        {results.length ? (english ? `${results.length} dialogues found` : `ნაპოვნია ${results.length} დიალოგი`) : (english ? "No dialogues match. Try another word or filter." : "დიალოგი ვერ მოიძებნა. სცადე სხვა სიტყვა ან ფილტრი.")}
      </p>
      <ul className="grid gap-2 @lg:grid-cols-2 @3xl:grid-cols-3">
        {results.slice(page * pageSize, (page + 1) * pageSize).map(({ scene, match }) => {
          const Icon = categories[scene.category].icon;
          const selected = scene.id === selection.scene.id;
          return (
            <li key={scene.id} className="min-w-0">
              <button type="button" aria-pressed={selected} onClick={() => openDialogue(scene, Math.max(0, match))} className="conversation-card flex h-full w-full items-start gap-2.5 rounded-xl border p-3 text-left hover:ring-1 hover:ring-emerald-500 aria-pressed:ring-2 aria-pressed:ring-emerald-600">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-900"><Icon size={16} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold">{english ? scene.english : scene.title}</span>
                  <span lang="ru" className="conversation-muted mt-1 block text-xs leading-relaxed">{scene.lines[match >= 0 ? match : 1][0]}</span>
                </span>
                <span className="shrink-0 rounded-md bg-emerald-100 px-1.5 py-0.5 text-xs font-bold text-emerald-900">{scene.level}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {pageCount > 1 && <div className="flex items-center justify-between gap-2">
        <button type="button" className="secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>{english ? "Previous page" : "წინა გვერდი"}</button>
        <span className="conversation-muted text-sm font-semibold" aria-live="polite">{page + 1} / {pageCount}</span>
        <button type="button" className="secondary" disabled={page + 1 === pageCount} onClick={() => setPage(page + 1)}>{english ? "Next page" : "შემდეგი გვერდი"}</button>
      </div>}
      <h3 ref={playerHeading} tabIndex={-1} className="scroll-mt-24 pt-2 text-base font-extrabold">{english ? "Listen and follow along" : "მოუსმინე და წაიკითხე"}</h3>
      <ListeningPlayer key={`${selection.scene.id}:${selection.line}`} scene={selection.scene} initialLine={selection.line} english={english} />
      {nextDialogue && <button type="button" className="secondary" onClick={() => openDialogue(nextDialogue.scene, Math.max(0, nextDialogue.match))}>{english ? "Next dialogue" : "შემდეგი დიალოგი"}</button>}
    </section>
  );
}
