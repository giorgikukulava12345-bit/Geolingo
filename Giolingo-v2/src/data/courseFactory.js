import {advanced,kidsTopics} from './advanced.js';
import {grammarFor} from './grammar.js';
export const LEVELS=['A1','A2','B1','B2','C1'];
export function shuffled(items,seed){const copy=[...items];let n=2166136261;for(const c of seed)n=Math.imul(n^c.codePointAt(0),16777619)>>>0;for(let i=copy.length-1;i>0;i--){n=(Math.imul(n,1664525)+1013904223)>>>0;const j=n%(i+1);[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
export const normalize = s => String(s).normalize('NFKC').toLocaleLowerCase().replace(/ё/g,'е').replace(/[.,!?;:«»“”"]/g,'').replace(/\s+/g,' ').trim();
export function makeQuestions(entries,kids=false){const e=entries;const word=e[2].target.split(' '),gapIndex=Math.max(0,Math.floor(word.length/2));return [
 ...e.slice(0,2).map((x,i)=>({id:`choice-${i}`,type:'choice',prompt:`აირჩიე თარგმანი: „${x.ka}“`,answer:x.target,audio:x.target,options:shuffled(e.map(y=>y.target),x.target)})),
 ...e.slice(2).map((x,i)=>({id:`translation-${i}`,type:'translation',prompt:`თარგმნე: „${x.ka}“`,answer:x.target,audio:x.target})),
 ...e.slice(0,2).map((x,i)=>({id:`build-${i}`,type:'build',prompt:`ააწყვე: „${x.ka}“`,answer:x.target,audio:x.target,tokens:shuffled([...x.target.split(' '),e[3-i].target],x.target)})),
 {id:'match',type:'match',prompt:'შეუსაბამე სიტყვები ერთმანეთს',pairs:e},
 {id:'fill',type:'fill',prompt:word.length===1?`შეავსე გამოტოვებული ასო: „${e[2].ka}“`:`შეავსე გამოტოვებული სიტყვა: „${e[2].ka}“`,sentence:word.length===1?Array.from(word[0]).map((c,i)=>i===1?'_':c).join(''):word.map((w,i)=>i===gapIndex?'_____':w).join(' '),answer:word.length===1?Array.from(word[0])[1]||word[0]:word[gapIndex],audio:e[2].target},
 {id:'listening',type:'listening',prompt:'მოუსმინე და ჩაწერე რაც გაიგე',answer:e[1].target,audio:e[1].target},
 {id:'recall',type:'translation',prompt:`თარგმნე ქართულად: „${e[3].target}“`,answer:e[3].ka,audio:e[3].target}
 ];}
export function createCourses(topics){return Object.fromEntries(['en','ru'].map((language,languageIndex)=>{
 const entriesFrom=rows=>rows.map(row=>{const p=row.split('|');return {ka:p[0],target:p[languageIndex+1]};});
 function makeUnit({id,title,icon,level,lessonTitles,rows,lessons,unitIndex,mode='adult'}){const rule=grammarFor(language,level,unitIndex);return {id,title,icon,level,mode,description:`${level} · ${rule.title}`,grammar:rule,lessons:(lessons||lessonTitles.map((t,i)=>[t,...rows.slice(i*4,i*4+4)])).map(([name,...data],li)=>{const entries=entriesFrom(data);return {id:level==='A1'&&mode==='adult'?`${language}-u${unitIndex+1}-l${li+1}`:`${language}-${mode}-${level}-u${unitIndex+1}-l${li+1}`,title:name,level,mode,unitId:id,grammar:rule,entries,questions:makeQuestions(entries,mode==='kids')};})};}
 const base=topics.map(([title,icon,lessons],i)=>makeUnit({id:`${language}-u${i+1}`,title,icon,lessons,level:'A1',unitIndex:i}));
 const extra=advanced.map((u,i)=>makeUnit({id:`${language}-${u.level}-u${i%4+1}`,title:u.title,icon:u.icon,level:u.level,rows:u.rows,lessonTitles:u.lessons,unitIndex:i%4}));
 const kids=kidsTopics.map(([title,icon,lessonTitles,rows],i)=>makeUnit({id:`${language}-kids-u${i+1}`,title,icon,lessonTitles,rows,level:'A1',mode:'kids',unitIndex:i}));
 return [language,{id:language,name:language==='en'?'ინგლისური':'რუსული',flag:language==='en'?'🇬🇧':'🇷🇺',native:language==='en'?'English':'Русский',units:[...base,...extra],kidsUnits:kids}];
}));}
export function isUnlocked(lesson,course,state){const units=state.mode==='kids'?course.kidsUnits:course.units;const flat=units.flatMap(u=>u.lessons);const i=flat.findIndex(l=>l.id===lesson.id);if(i<0)return false;if(state.completed.includes(lesson.id))return true;const start=state.placements?.[course.id]?.level||'A1';if(state.mode!=='kids'&&LEVELS.indexOf(lesson.level)<LEVELS.indexOf(start))return true;const same=flat.filter(l=>l.level===lesson.level);if(lesson.id===same[0]?.id&&(lesson.level===start||lesson.level==='A1'))return true;return i===0||state.completed.includes(flat[i-1]?.id);}
