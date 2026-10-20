# GEOling

A playful Georgian-first English and Russian learning website. Built from scratch with plain HTML, CSS and JavaScript; no frontend dependencies or paid AI API required.

## Start

Double-click **START.cmd**, keep that window open, and open **http://localhost:3000** in your normal browser. Node.js 20+ is required; Node is already installed on this computer. Do not open index.html directly: the app uses JavaScript modules.

Alternatively:

```powershell
cd C:\Users\Administrator\Desktop\GEOling
npm.cmd run dev
```

For the existing live project, follow **UPDATE-v2.md**: apply supabase/upgrade-v2.sql before deploying this frontend. See **SETUP.md** for initial Supabase and Vercel setup. The public configuration now points to the owner-provided Supabase project. Production upgrade status must be checked separately.

## Included

- Georgian navigation, explanations, translations and approximate pronunciation hints.
- English and Russian courses, each with 120 lessons across starter, A1, A2, B1 and B2 themes.
- 1,360 authored phrase entries, expanded into 5,440 exercise instances: meaning, listening transcription, translation and word ordering. These are four variants of each phrase, not 5,440 independent learning objectives.
- 26 English and 33 Russian alphabet entries with Georgian letter names.
- 80% pass threshold (13/16 or 20/24), sequential unlocking within each level; every level entry is unlocked, up to 40 first-pass XP (hint use halves only its task share), daily goal, calendar and streak.
- Browser speech synthesis, slow playback, optional voice recording/playback and speech recognition.
- Grammar review, searchable unlocked phrase collection, mistake review, progress export, reading/listening library with Georgian translations and 90 comprehension questions.
- Guest progress saved in localStorage. Connected users have email/password signup, login, email confirmation, password recovery and cloud progress.
- Real, all-time leaderboard from database completions. No fictional players.
- Supabase schema, RLS policies, server-side grading RPCs and generated answer seed.
- Vercel build configuration. Zero runtime npm dependencies.

## Scope and limits

This is an expanded learning product with 240 lessons and 30 original reading/listening passages, **not a certified zero-to-B2 course**. B2 labels identify sampled grammar/topics. Completion does not demonstrate CEFR B2 proficiency. Full instruction needs much more vocabulary, longer original readings, dialogues, authentic listening, open-ended writing, spaced repetition, adaptive review, placement tests and expert assessment. Georgian explanations and pronunciation hints should receive a native-speaking language teacher's editorial review before broad public teaching use.

Speech audio is device/browser-generated, not recorded human narration. A suitable English or Russian voice may need to be installed in the operating system. Georgian hints approximate sounds and cannot replace audio or IPA. Recognition checks matching words, not phonetic pronunciation quality; it may use the browser vendor's remote service. Recordings are local, temporary and cleared on closing the practice dialog. Text fallback keeps audio limitations from blocking lessons.

Cloud sync stores completions, XP and study dates; mistake review stays on the current device. Guests do not get fake accounts; guest XP is not imported into authenticated rankings. Replay has no XP. Daily goal/streak use first-pass XP dates in Asia/Tbilisi; repeating a passed lesson does not extend a streak. No weekly leagues or public profiles are implemented.

The public site contains educational answer data. RPCs stop direct XP edits, duplicate rewards and prerequisite bypass, but a determined person can automate correct answers from the distributed content. This is a friendly learning leaderboard, not an exam or fraud-resistant reward system.

No copyrighted textbooks were copied. Lessons are original material, with external reference links in the Resources page. No claim is made to have collected every book or to be affiliated with Duolingo, British Council, Council of Europe or Pushkin Institute.

## Files

| Path | Purpose |
|---|---|
| public/index.html | App entry point |
| public/app.js | UI, exercise engine, audio and Supabase REST client |
| public/style.css | Responsive purple/lime/cream design |
| public/curriculum.js | Both courses, Georgian notes and phrase bank |
| public/alphabet.js | Alphabet references |
| public/config.js | Public Supabase URL/key; initially empty |
| supabase/schema.sql | Tables, RLS, account trigger and scoring functions |
| supabase/seed.sql | Answer catalog generated from curriculum |
| scripts/seed.mjs | Regenerate server catalog after content edits |
| scripts/build.mjs | Copy public files into dist |
| scripts/serve.mjs | Local static server |
| scripts/test.mjs | Dependency-free curriculum and gating tests |

## Development

```powershell
npm.cmd test
npm.cmd run build
node scripts/seed.mjs
```

If you edit course text, regenerate seed.sql and run the regenerated upgrade-v2.sql in Supabase before redeploying. Lesson counts, prerequisites and answer counts are generated dynamically. Original lessons retain their stable IDs; added lessons use new IDs. Changing answers of already completed lessons does not reset prior awards.

## Verification

- `npm test`: seven tests passed for curriculum completeness, 5,440 exercises, gating, normalization and seed parity.
- App logic checked with JSDOM: 16-step fail/pass flow, unlocked lessons, repeat reward prevention, independent Russian progression, alphabet, word search and account setup notice passed.
- Schema + seed executed using PGlite PostgreSQL with simulated Supabase auth identities: prerequisite checks, 13/16 threshold, answer grading, duplicate XP prevention, RLS owner isolation, denied direct edits/private catalog reads, and anonymous leaderboard passed.
- Static server returned HTTP 200.
- The previous live v1 interface was browser-tested. The v2 package has automated app and database migration checks; see UPDATE-v2.md for deployment checks. Supabase hosted email/auth flows, real devices/voices/microphone access, and Vercel deployment are unverified until the owner connects services. No v2 production deployment is claimed until database migration and publication are confirmed.

The extended verification sources are included in `qa/`. To rerun them with Node 24+, run `npm install --prefix qa`, then `npm test --prefix qa`. These optional QA libraries are not shipped to the website and are not needed to start or deploy it.

Privacy: no analytics, ads or cookies are added by the application. Account session tokens are stored in localStorage, so keep the deployed origin free of untrusted scripts. Google Fonts is an external request; system fonts are the fallback. Account deletion can be handled by the owner in Supabase Auth; database rows cascade-delete. Production operators should publish their own privacy/contact details and configure email delivery before accepting real learners.
