# Giolingo

A complete React + Tailwind CSS language-learning website for Georgian speakers. No ads, subscriptions, paid hearts, or restricted paid units.

## Run locally

Install Node.js 20.19+ (or 22.12+), open a terminal in this directory, then:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). For a deployable static build:

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static HTTPS host. The application has no server secrets or backend requirements. Georgian and Latin web fonts load from Google Fonts; system fonts work offline.

## Complete project tree

```text
giolingo/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SkillPath.jsx
│   │   └── ExerciseEngine.jsx
│   ├── data/
│   │   └── curriculum.js
│   └── state/
│       ├── progress.js
│       └── ProgressContext.jsx
└── tests/
    └── core.test.js
```

## Architecture

`curriculum.js` is the mock database: six authored topic units per language, four distinct lessons per unit, and eight exercises per lesson. There are **48 lessons and 384 exercise instances**. Topics cover basics, phrases, food, travel, daily life, and shopping/colors/numbers. Each lesson has four authored Georgian/English/Russian vocabulary or phrase entries. The exercise factory deliberately revisits these entries in multiple modes: two multiple-choice questions, two translations, two word-bank builds, one four-pair matching activity, and one reverse translation. Single-word introductory builds teach recognition; phrase lessons require multiword ordering. This is an introductory A1 practice curriculum rather than a complete certified A1 syllabus.

Stable IDs follow `en-u1-l1` / `ru-u1-l1`. Add authored rows or units to expand the course; retain existing IDs so saved completions remain valid. Questions can also be replaced with manually authored objects using the same schema:

```js
{ id: 'choice-0', type: 'choice', prompt: '...', answer: '...', options: ['...', '...'] }
{ id: 'translate-0', type: 'translation', prompt: '...', answer: '...' }
{ id: 'build-0', type: 'build', prompt: '...', answer: '...', tokens: ['...'] }
{ id: 'match', type: 'match', prompt: '...', pairs: [{ka: '...', target: '...'}] }
```

`ProgressProvider` owns language selection, shared XP/hearts/streak, separate course completions, and daily XP. A versioned LocalStorage record persists across reloads. Writes fail gracefully with a visible alert. Progress is local to this browser profile; it does not synchronize devices, offer user accounts, or resist manual modification. Use a database and authenticated server-side awards if adding public leaderboards or account synchronization. Do not use browser progress as a trusted security boundary.

`SkillPath` unlocks a lesson when the previous lesson is completed, across unit boundaries. Unit tabs allow exploring all six units; locked nodes explain the prerequisite. Completed lessons remain replayable from the path or practice view.

`ExerciseEngine` owns the active exercise state. Submitted mistakes cost a heart and reveal the answer. Each matching mismatch also costs a heart. At zero hearts, a free refill returns to the current question. Completion awards `max(10, 40 - mistakes × 3)` XP exactly once per mounted lesson session. Replay awards XP again, intentionally. Abandoning a lesson preserves heart losses but gives no XP; an unfinished lesson restarts after reload. Displayed accuracy is a mistake-based score, clamped to zero: max(0, (8 - mistakes) / 8 × 100). Streaks use local calendar dates and continue across consecutive days, including daylight-saving changes.

Answer checking normalizes case, punctuation, spacing, and Russian ё/е. It accepts the authored answer only; alternative valid phrasing is not automatically recognized. Russian introductory first-person phrases use masculine forms. Speech playback uses optional browser speech synthesis and installed voices; lessons do not require it.

`Navbar` displays live course, XP, streak, and hearts; clicking hearts refills them freely. The dashboard includes real daily goals, a trailing seven-day calendar, course progress, practice, language switching, and a confirmed reset. The responsive layout supports mobile navigation, keyboard controls, visible focus, accessible dialog labels, live answer feedback, and reduced motion.

## Release validation

Automated tests cover curriculum counts, unique IDs, question solvability, normalization, streak continuity/reset, replay awards, storage recovery, and heart bounds. Before a public launch, perform native Georgian/Russian editorial review, browser/screen-reader testing, and real-device checks. The app is a functional browser-local application; no claim is made of a completed independent accessibility or security audit.

