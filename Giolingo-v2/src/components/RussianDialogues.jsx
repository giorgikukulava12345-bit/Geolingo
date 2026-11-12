import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Coffee, Compass, Hotel, ShoppingBag, Thermometer, TrainFront } from "lucide-react";
import { getLocale } from "../i18n";
import dialogues from "../data/russianDialogues.json";
import timings from "../data/russianDialogueTimings.json";

const sceneIcons = { cafe: Coffee, directions: Compass, shopping: ShoppingBag, station: TrainFront, hotel: Hotel, pharmacy: Thermometer };

function ListeningPlayer({ scene, english }) {
  const audio = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const cues = timings[scene.id];
  const [russian, translation] = scene.lines[lineIndex];
  const speaker = scene.speakers[lineIndex % 2];
  const Icon = sceneIcons[scene.id];

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
  const [sceneId, setSceneId] = useState(dialogues[0].id);
  const english = getLocale() === "en";
  const scene = dialogues.find(({ id }) => id === sceneId);
  return (
    <section className="conversation-practice space-y-4" aria-labelledby="russian-dialogues-heading">
      <div>
        <h2 id="russian-dialogues-heading" className="text-xl font-extrabold">{english ? "Real Russian Conversations" : "რუსული დიალოგები ყოველდღიურ სიტუაციებში"}</h2>
        <p className="conversation-muted mt-1 text-sm">{english ? "Listen in Russian and read the English translation below each line." : "მოუსმინე რუსულ საუბარს და თითოეული ფრაზის ქვემოთ წაიკითხე ინგლისური თარგმანი."}</p>
      </div>
      <label className="block text-sm font-bold">
        {english ? "Choose a situation" : "აირჩიე სიტუაცია"}
        <select className="conversation-card mt-2 block w-full rounded-xl border px-3 py-3 text-sm" value={sceneId} onChange={(event) => setSceneId(event.target.value)}>
          {dialogues.map(({ id, title, english: label, level }) => <option key={id} value={id}>{level} · {english ? label : title}</option>)}
        </select>
      </label>
      <ListeningPlayer key={scene.id} scene={scene} english={english} />
    </section>
  );
}
