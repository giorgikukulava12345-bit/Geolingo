import {activeStreak,localDay} from './progress.js';
export const quests=[{id:'lesson',reward:15},{id:'speaking',reward:10},{id:'explore',reward:10}];
export function questReady(state,id,date=new Date()){const a=state.activities?.[localDay(date)]||{};return id==='explore'?!!(a.story?.length||a.match?.length):!!a[id]?.length;}
export function recordActivity(state,type,id,date=new Date()){
 if(!['lesson','story','match','speaking'].includes(type)||!id)return state;
 const day=localDay(date),current=state.activities?.[day]||{},seen=current[type]||[];
 if(seen.includes(id))return state;
 const streak=state.lastDay===day?state.streak:activeStreak(state,date)+1;
 const claims={...state.claims},key=`streak:${day}`,bonus=claims[key]?0:5+(streak%7===0?20:0);
 claims[key]=true;const xp=({lesson:0,story:15,match:15,speaking:10})[type]+bonus;
 return {...state,activities:{...state.activities,[day]:{...current,[type]:[...seen,id]}},claims,streak,lastDay:day,xp:state.xp+xp,daily:{...state.daily,[day]:(state.daily[day]||0)+xp}};
}
export function claimQuest(state,id,date=new Date()){const quest=quests.find(q=>q.id===id),day=localDay(date),key=`quest:${day}:${id}`;if(!quest||state.claims?.[key]||!questReady(state,id,date))return state;return {...state,claims:{...state.claims,[key]:true},xp:state.xp+quest.reward,daily:{...state.daily,[day]:(state.daily[day]||0)+quest.reward}};}
