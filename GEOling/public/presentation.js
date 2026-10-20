import {uiEnglish} from './ui-en.js';
import {topicEnglish} from './topic-en.js';
const dictionary={...uiEnglish,...topicEnglish,'ინტერფეისის ენა':'Interface language','ნათელი თემა':'Light theme','მუქი თემა':'Dark theme','ლინგოს მიესალმე':'Say hello to Lingo','ერთად გამოგვივა!':'We’ve got this!'};
let language=document.documentElement.lang==='en'?'en':'ka';
const entries=Object.entries(dictionary).sort((a,b)=>b[0].length-a[0].length);
const texts=new WeakMap(),attributes=new WeakMap();
export const getUiLanguage=()=>language;
export const getTheme=()=>document.documentElement.dataset.theme||'light';
function remember(key,value){try{localStorage.setItem(key,value)}catch{}}
export function setUiLanguage(value){language=value==='en'?'en':'ka';document.documentElement.lang=language;remember('geolingo-ui-language',language);localize();}
export function toggleTheme(){const theme=getTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;remember('geolingo-theme',theme);document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#15151c':'#7963d7');}
function translated(raw){
 const s=raw.trim();let result=dictionary[s];
 if(!result){
 result=s.replace(/გამარჯობა, (მეგობარო|მომავალო პოლიგლოტო)!/g,(_,a)=>`Hello, ${a==='მეგობარო'?'friend':'future polyglot'}!`)
 .replace(/(\d+) \/ (\d+) გაკვეთილი/g,'$1 / $2 lessons').replace(/(\d+) დავალება/g,'$1 exercises')
 .replace(/^(GB|RU|🇬🇧|🇷🇺)?\s*(ინგლისური|რუსული)( •)? ქართულად$/,(_,flag,name,bullet)=>`${flag||''} ${name==='ინგლისური'?'English':'Russian'}${bullet||''} with Georgian support`.trim());
 for(const [key,value] of entries){
  if(result===key)result=value;
  else if(result.startsWith(key+' • ')||result.endsWith(' • '+key)||result.startsWith(key+': ')||result.endsWith(' '+key))result=result.replace(key,value);
 }
 }
 result=result.replace(/გა[ს]ავლელად საჭიროა 80% • მაქსიმუმ 40 XP პირველად გავლისას/g,'Score 80% to pass • Up to 40 XP for the first completion')
 .replace(/(\d+) მინიშნება • თითოეულის ქულა განახევრდა • ჯამი მრგვალდება მთელ XP-მდე\./g,'$1 hints • Hinted exercises earn half points • Total rounded to whole XP.')
 .replace(/(\d+) გაკვეთილი • (\d+) სავარჯიშო • (\d+) სიტყვა და ფრაზა • (\d+) ტექსტი\./g,'$1 lessons • $2 exercises • $3 words and phrases • $4 reading texts.')
 .replace(/კითხვა (\d+)\/(\d+)/g,'Question $1/$2').replace(/(\d+) კითხვა/g,'$1 questions');
 for(const [key,value] of entries){if(result.startsWith(key+' '))result=value+result.slice(key.length)}
 return raw.replace(s,result);
}
const protectedContent='[data-learning],[data-choice],[data-read-choice],[data-word],.prompt,.study-phrase strong,.study-phrase span,.study-phrase small,.reading-passage,.translation p,.word-card strong,.word-card>span,.word-card small,.speak-item strong,.speak-item p,.speak-item small,.clue-content p,.clue-content>span';
export function localize(){
 document.title=language==='en'?'Geolingo — Your next language adventure':'Geolingo — შენი გზა ახალი ენისკენ';
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let n;while(n=walker.nextNode()){
  if(n.parentElement?.closest('script,style,#ui-language,'+protectedContent))continue;
  const old=texts.get(n),source=old&&n.nodeValue===old.last?old.source:n.nodeValue;
  if(!source.trim())continue;
  const next=language==='en'?translated(source):source;
  if(next!==n.nodeValue)n.nodeValue=next;texts.set(n,{source,last:next});
 }
 document.querySelectorAll('[aria-label],[title],[placeholder]').forEach(el=>{
  const state=attributes.get(el)||{};
  for(const key of ['aria-label','title','placeholder']){if(!el.hasAttribute(key))continue;const value=el.getAttribute(key),old=state[key],source=old&&value===old.last?old.source:value;const next=language==='en'?translated(source):source;if(value!==next)el.setAttribute(key,next);state[key]={source,last:next}}
  attributes.set(el,state);
 });
}
export function startLocalization(){localize();let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;localize()})}).observe(document.body,{childList:true,subtree:true,characterData:true});}
export function celebrate(){
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
 const layer=document.createElement('div');layer.className='celebration';layer.setAttribute('aria-hidden','true');
 for(let i=0;i<28;i++){const piece=document.createElement('i');piece.style.cssText=`--x:${Math.random()*100}vw;--drift:${Math.random()*160-80}px;--turn:${Math.random()*720}deg;--delay:${Math.random()*.4}s;background:${['#b4d96a','#a891f5','#ffc866','#f397ae'][i%4]}`;layer.append(piece)}
 document.body.append(layer);setTimeout(()=>layer.remove(),2400);
}
