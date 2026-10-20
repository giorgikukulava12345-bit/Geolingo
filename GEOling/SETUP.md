# GEOling: from this folder to a live website

Everything has been coded in `C:\Users\Administrator\Desktop\GEOling`. You do not have to build the frontend or design the database. You need accounts in your own name and two public project settings to activate cloud features.

## 1. Try the site immediately

1. Double-click `START.cmd` inside GEOling.
2. Leave that terminal window open.
3. Open **http://localhost:3000** in Edge, Chrome or another normal browser.
4. Choose English or Russian, start the first lesson, read the Georgian note and complete the 16 tasks.
5. Score at least 13/16 to unlock lesson two and earn 40 XP. The same lesson gives no more XP on repeats.
6. Use Practice for alphabet, listening, speaking and grammar. Guest progress stays on this browser.

If Windows says Node is missing, install the LTS version from https://nodejs.org/ and open START.cmd again. No `npm install` is needed for the website itself. If port 3000 is in use, close the earlier GEOling terminal using Ctrl+C before starting another.

## 2. Create Supabase — accounts and saved learning

1. Visit https://supabase.com/dashboard and create/sign into your own account. Complete any signup agreements yourself.
2. Create a **new project** called GEOling. Choose a nearby available region. Create and save the database password privately; the website does not need that password.
3. Wait until the database is ready.
4. Open the project's **SQL Editor** and create a new query.
5. Open `supabase/schema.sql` from this folder, copy its whole contents into that query and press **Run**. Use it once on a new project. It creates account profiles, progress tables, access rules and scoring functions. Do not repeatedly run this initial schema on a populated project; it is not a migration/reset script.
6. Create another SQL query. Paste the whole contents of `supabase/seed.sql` and run it. This supplies the original lesson answer catalog used for server grading. It is safe to rerun the seed after content edits.
7. Find your project's **Project URL** and **API Keys** settings. Copy the `https://YOUR-PROJECT.supabase.co` URL and the **publishable** key (starts `sb_publishable_`) or the legacy **anon public** key.
8. Double-click `CONNECT-SUPABASE.cmd`. Paste the URL and public key when requested. It writes `public/config.js` for you. These values identify the public API and are intended to be visible to browsers.
9. **Never enter a secret key or service_role key.** The helper rejects those. The database password also does not go here.
10. Reload the site. Account buttons now open the real signup/login forms. Do not send passwords or private service keys into chat.

Equivalent manual configuration:

```javascript
window.GEOLING_CONFIG = {
  supabaseUrl: 'https://YOUR-PROJECT.supabase.co',
  supabaseKey: 'sb_publishable_YOUR_PUBLIC_KEY'
};
```

This file is public configuration. There are no private server credentials to configure in Vercel, and Vercel environment variables are not automatically read by this static app.

Official references: [Supabase password auth](https://supabase.com/docs/guides/auth/passwords), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).

## 3. Configure email and sign-in URLs

1. In Supabase **Authentication**, make sure the Email provider is enabled.
2. Keep email confirmation enabled. A learner signs up, clicks the link in the confirmation email, then signs in.
3. Under **Authentication → URL Configuration**, set **Site URL** to `http://localhost:3000` while testing.
4. Add `http://localhost:3000` to the allowed redirect URLs.
5. Later, change Site URL to your exact production Vercel HTTPS URL and add that URL to the redirect allowlist. Keep localhost if you still want local testing.
6. Configure your own SMTP provider in Supabase before opening registration to the general public. The default email service has testing restrictions; check the dashboard's current email limits and provider requirements. A hosted project can exist without emails reaching arbitrary learners until this is configured.
7. The app includes “პაროლი დაგავიწყდა?” (forgot password). Its email returns the learner to the site and opens a new-password form. The production origin must be allowed in Supabase.

Use a test email you control. Creating a learner account is separate from creating your Supabase owner account.

Official reference: [Supabase redirect URL configuration](https://supabase.com/docs/guides/auth/redirect-urls).

## 4. Put the site on Vercel

Vercel serves the frontend; Supabase serves authentication and the database. The browser connects them through config.js. No separate server deployment is necessary.

### Simple upload from your computer (no GitHub needed)

1. Create/sign into your own account at https://vercel.com/.
2. Open a PowerShell terminal inside the GEOling folder. You can type `powershell` in File Explorer's address bar while viewing this folder.
3. Run:

```powershell
cd C:\Users\Administrator\Desktop\GEOling
npm.cmd test
npm.cmd run build
npx.cmd vercel@latest login
npx.cmd vercel@latest
```

4. Follow the official Vercel sign-in link. Select your account/team, create a **new** project and choose the current folder (`./`). Do not link an unrelated existing project.
5. If it asks for a framework, choose **Other**. `vercel.json` already declares build command `npm run build` and output directory `dist`.
6. It prints a preview deployment URL. Open it and verify lesson one.
7. Publish your production version:

```powershell
npx.cmd vercel@latest --prod
```

8. Copy the exact HTTPS production URL into Supabase Site URL and redirect allowlist (step 3 above).
9. Test a new signup, email confirmation, login, one passing lesson, logout/login and the leaderboard. Saved points should survive on a second device after login.

Service plans and dashboards can change. Review the plan Vercel/Supabase offers before accepting any paid upgrade; this project does not require a paid subscription to the app itself. The CLI may ask to download the official `vercel` npm package; accept that if you want to use this path.

### Optional GitHub connection for automatic deployments

1. Create a GitHub repository named GEOling in your own account.
2. Upload the project source files and folders. Include public/, scripts/, supabase/, package.json and vercel.json. Keep README and SETUP for reference. Do not upload node_modules, .vercel, private .env files or private credentials. dist is generated at build time.
3. In Vercel choose **Add New → Project → Import Git Repository**, connect GitHub and choose GEOling.
4. Framework: **Other**. Build: `npm run build`. Output: `dist`. Root: the folder containing package.json.
5. Deploy, then set Supabase Site URL/redirect URLs to the production address.
6. Later changes pushed to the connected branch trigger new deployments.

Official references: [Vercel deployments](https://vercel.com/docs/deployments/overview), [Vercel CLI deploy](https://vercel.com/docs/cli/deploy).

## 5. Confirm everything works

- Mobile and desktop: navigation, lesson text and word choices fit the screen.
- English: complete the first lesson; XP goes to 40 and lesson two unlocks.
- Repeat lesson one: XP stays at 40.
- Russian: lesson two remains locked until Russian lesson one is passed.
- Below 80%: no XP or next lesson unlock.
- After logout/login: cloud completions and XP return.
- Second learner: only their own progress appears; public leaderboard shows nicknames and totals, never emails.
- Listening: choose a device with English/Russian voices installed. Slow playback works. If no voice is available, the text fallback lets the lesson continue.
- Speaking: allow microphone only if you choose recording; play back your voice. Speech recognition availability depends on the browser. It checks recognized words, not pronunciation quality.
- Recovery: request a reset email and set a new password using the link.

Cloud and guest progress are deliberately separate. An existing guest's local XP is not copied into the real ranking. Mistake-review lists are local per account/device; cloud sync covers completed lessons, XP and dates.

## 6. Updating later

For a design-only edit, change public/style.css or public/app.js, run tests/build and redeploy. For learning-content edits:

```powershell
node scripts/seed.mjs
npm.cmd test
npm.cmd run build
```

Run the refreshed seed.sql in Supabase, then redeploy. Keep client phrases and server answers in sync. Expansion beyond 20 lessons per language requires updating fixed counts and server validation too. Do not edit server secrets into the source.

To update a CLI deployment from this same folder:

```powershell
npx.cmd vercel@latest --prod
```

## 7. What still needs development for a complete 0–B2 school

The delivered product has 40 short lessons sampling beginner through B2 themes, not a full B2 education. Next curriculum work needs substantially more vocabulary and skills coverage, original longer readings/dialogues, listening comprehension, writing and speaking assessments, systematic spaced repetition, broader acceptable answer variants and Georgian teacher review. Browsers generate the current audio; professional human recordings are not included. There is no official certificate or validated placement test.

Before launching broadly, set your site's owner/contact and privacy terms, configure reliable email sending, and complete real-device testing. The source already contains the functional app and database setup; it has not been deployed to a live Vercel or Supabase project on your behalf.
