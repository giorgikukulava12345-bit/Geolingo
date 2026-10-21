import {PGlite} from '@electric-sql/pglite';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {units,questions,levels,grade} from '../public/curriculum.js';
const db=new PGlite();
await db.exec(`create role anon;create role authenticated;create schema auth;create table auth.users(id uuid primary key,raw_user_meta_data jsonb);create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;grant usage on schema auth to authenticated,anon;grant execute on function auth.uid() to authenticated,anon;`);
await db.exec(await readFile(new URL('./fixtures/schema-v1.sql',import.meta.url),'utf8'));
await db.exec(await readFile(new URL('./fixtures/seed-v1.sql',import.meta.url),'utf8'));
const id='11111111-1111-4111-8111-111111111111';
await db.query(`insert into auth.users values($1,'{"nickname":"Nino"}')`,[id]);
await db.query(`insert into public.completions(user_id,unit_id,score) values($1,'en-0',16)`,[id]);
const upgrade=await readFile(new URL('../supabase/upgrade-v2.sql',import.meta.url),'utf8');
await db.exec(upgrade);await db.exec(upgrade);
assert.equal((await db.query('select count(*) count from private.lesson_catalog')).rows[0].count,240);
assert.equal((await db.query('select xp from public.completions')).rows[0].xp,40);
await db.exec(`set role authenticated;select set_config('request.jwt.claim.sub','${id}',false);`);
const call=async(u,answers=questions(u).map(q=>q.answer),hints=[])=>(await db.query('select public.submit_lesson_v2($1,$2::jsonb,$3::jsonb) result',[u.id,JSON.stringify(answers),JSON.stringify(hints)])).rows[0].result;
let sum=40;
for(const lang of ['en','ru'])for(const level of levels){const [first,second]=units[lang].filter(u=>u.level===level);if(first.id!=='en-0')await assert.rejects(()=>call(second),/preceding/);const r=await call(first,undefined,Array(questions(first).length).fill(true));const expected=first.id==='en-0'?0:20;assert.equal(r.awarded,expected);assert.equal(r.passed,true);sum+=expected;assert.equal((await call(first)).awarded,0);}
const extended=units.en.find(u=>u.id==='en-x0');
const prereqs=[];let cur=extended;while(cur.prerequisite){cur=units.en.find(u=>u.id===cur.prerequisite);prereqs.unshift(cur)}
for(const u of prereqs){const r=await call(u);sum+=r.awarded}
let wrong=questions(extended).map(q=>q.answer);wrong.splice(0,5,'wrong','wrong','wrong','wrong','wrong');assert.equal((await call(extended,wrong)).passed,false);
const q=questions(extended),h=Array(q.length).fill(false);h[0]=true;
const r=await call(extended,undefined,h);assert.equal(r.score,24);assert.equal(r.awarded,grade(q,q.map(q=>q.answer),h).award);sum+=r.awarded;
await assert.rejects(()=>call(extended,undefined,[true]),/Hint count/);
await assert.rejects(()=>db.query('update public.completions set xp=999'),/permission/);
assert.equal((await db.query('select public.my_progress() result')).rows[0].result.xp,sum);
await db.exec('reset role;set role anon;');await assert.rejects(()=>db.query('select public.my_progress()'),/permission/);await assert.rejects(()=>db.query(`select public.submit_lesson_v2('en-0','[]','[]')`),/permission/);
assert.equal((await db.query('select public.course_version() version')).rows[0].version,2);
console.log('PASS: upgrade twice preserves old points, all 10 level entries open, next lessons locked, 16/24-answer scoring, 80% boundary, one/all hint penalties, duplicate rewards and auth permissions.');await db.close();

