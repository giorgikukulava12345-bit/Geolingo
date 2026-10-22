import {messages} from './i18n/messages.js';
const key='giolingo.interfaceLanguage';
let locale='ka';
try{if(globalThis.localStorage?.getItem(key)==='en')locale='en';}catch{}
const listeners=new Set();
export const getLocale=()=>locale;
export const subscribeLocale=callback=>{listeners.add(callback);return()=>listeners.delete(callback);};
export function setLocale(next){if(!['ka','en'].includes(next))return;locale=next;try{localStorage.setItem(key,next);}catch{}listeners.forEach(fn=>fn());}
export function englishText(value){if(typeof value!=='string')return value;const trimmed=value.trim();if(messages[trimmed])return value.replace(trimmed,messages[trimmed]);return value;}
export const tr=value=>locale==='en'?englishText(value):value;
export function trf(pattern,...values){return tr(pattern).replace(/\{(\d+)\}/g,(_,index)=>String(values[index]??''));}
