import {units,questions} from '../public/curriculum.js';
import {writeFile,readFile} from 'node:fs/promises';
const quote=s=>"'"+s.replaceAll("'","''")+"'";
const rows=Object.entries(units).flatMap(([course,us])=>us.map(u=>`(${quote(u.id)},${quote(course)},${u.index},${quote(JSON.stringify(questions(u).map(q=>q.answer)))}::jsonb,${u.prerequisite?quote(u.prerequisite):'null'},${quote(u.level)},${questions(u).length})`));
const seed=`-- Generated from original GEOling curriculum v2.\ninsert into private.lesson_catalog(id,course,ordinal,answers,prerequisite,level,question_count) values\n${rows.join(',\n')}\non conflict(id) do update set ordinal=excluded.ordinal,answers=excluded.answers,prerequisite=excluded.prerequisite,level=excluded.level,question_count=excluded.question_count;\n`;
await writeFile('supabase/seed.sql',seed);
await writeFile('supabase/upgrade-v2.sql',await readFile('supabase/migration-v2-base.sql','utf8')+'\n'+seed+'\nnotify pgrst, \'reload schema\';\ncommit;\n');
console.log(`Created ${rows.length} lesson answer sets and non-destructive upgrade-v2.sql.`);
