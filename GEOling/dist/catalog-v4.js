import {newCourses,newGrammar} from './new-courses-v4.js';
import {units as legacyUnits,courses as legacyCourses,questions as legacyQuestions} from './curriculum.js';
import {phraseBridge} from './support-v3.js';
export const courses={...legacyCourses,zh:{name:'ჩინური',flag:'🇨🇳',locale:'zh-CN'},es:{name:'ესპანური',flag:'🇪🇸',locale:'es-ES'}};
export const units={...legacyUnits,...Object.fromEntries(Object.entries(newCourses).map(([language,modules])=>[language,modules.map((m,index)=>({...m,title:m.title.ka,titles:m.title,index,level:m.level==='A0'?'საწყისი':m.level,note:m.explanation.ka,prerequisite:index===0||modules[index-1].level!==m.level?null:modules[index-1].id,items:m.items.map(i=>({...i,text:i.text}))}))]))};
export const bridges={...phraseBridge};for(const modules of Object.values(newCourses))for(const m of modules)for(const i of m.items)bridges[i.ka]={en:i.en,ru:i.ru};
export const questions=legacyQuestions;
export const splitWords=(text,language)=>language==='zh'&&typeof Intl.Segmenter==='function'?[...new Intl.Segmenter('zh',{granularity:'word'}).segment(text)].map(s=>s.segment).filter(s=>s.trim()):text.split(' ');
export const normalize=s=>String(s??'').normalize('NFKC').toLocaleLowerCase().replace(/[.,!?;:¿¡，。！？、：；„“”"'’—–-]/g,'').replace(/\s+/g,' ').trim();
export function equalAnswer(a,b,language){const norm=s=>language==='zh'?normalize(s).replace(/\s/g,''):normalize(s);return norm(a)===norm(b)}
export function grade(qs,answers,hints=[]){const ok=qs.map((q,i)=>equalAnswer(answers[i],q.answer,q.id?.startsWith('zh')?'zh':null)),score=ok.filter(Boolean).length;return {score,passed:score/qs.length>=.8,award:Math.round(ok.reduce((n,v,i)=>n+(v?(hints[i] ? 0.5 : 1):0),0)*40/qs.length)}}
export function accessible(index,completed,language){const u=units[language]?.[index];return !!u&&(completed.includes(u.id)||u.prerequisite===null||completed.includes(u.prerequisite))}
export const courseStats={lessons:Object.values(units).flat().length,phrases:Object.values(units).flat().reduce((n,u)=>n+u.items.length,0),exercises:Object.values(units).flat().reduce((n,u)=>n+u.items.length*4,0)};
export {newGrammar,newCourses};
