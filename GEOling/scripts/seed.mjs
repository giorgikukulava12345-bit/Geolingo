import {units,questions} from '../public/curriculum.js';
import {writeFile} from 'node:fs/promises';
const quote=s=>"'"+s.replaceAll("'","''")+"'";
const rows=Object.entries(units).flatMap(([course,us])=>us.map(u=>`(${quote(u.id)},${quote(course)},${u.index},${quote(JSON.stringify(questions(u).map(q=>q.answer)))}::jsonb)`));
await writeFile('supabase/seed.sql',`-- Generated from original GEOling curriculum. Run after schema.sql.\ninsert into private.lesson_catalog(id,course,ordinal,answers) values\n${rows.join(',\n')}\non conflict(id) do update set answers=excluded.answers;\n`);
console.log('Created 40 server-verified lesson answer sets.');
