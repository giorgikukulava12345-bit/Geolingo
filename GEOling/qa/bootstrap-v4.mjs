import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
export async function setup(seed={}){
 const root=fileURLToPath(new URL('../public/',import.meta.url)).replaceAll('\\','/');
 const dom=new JSDOM('<html lang="ka"><head><meta name="theme-color"></head><body><div id="app"></div><dialog id="modal"></dialog><div id="toast"></div></body></html>',{url:'http://localhost:3000',runScripts:'outside-only'}),w=dom.window;
 for(const [key,value]of Object.entries(seed))w.localStorage.setItem(key,typeof value==='string'?value:JSON.stringify(value));
 const files=['curriculum.js','alphabet.js','alphabet-support.js','alphabet-v4.js','reading-content.js','reading-support-v3.js','ui-en.js','topic-en.js','ui-ru.js','ui-ru-extra.js','topic-ru.js','support-v3.js','speech.js','characters.js','catalog-v4.js','content-v4.js','interactive-stories-v4.js','practice-bank-extra-v4.js'];
 for(const file of files)Object.assign(w,await import('file:///'+root+file));w.legacyBanks=(await import('file:///'+root+'practice-bank-v4.js')).practiceBanks;
 w.matchMedia=()=>({matches:false});w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
 const exports={'local-state.js':'createLocalStore,mondayWeek,currentStreak,localDay,questDefinitions','presentation.js':'getUiLanguage,setUiLanguage,getTheme,toggleTheme,startLocalization,celebrate,localize,interfaceText','learning-hub.js':'createLearningHub','offline-activities.js':'createOfflineActivities'};
 for(const [file,names]of Object.entries(exports)){let code=(await readFile(root+file,'utf8')).replace(/^import .*;\r?\n/gm,'').replace(/export /g,'');code+=';Object.assign(window,{'+names+'})';w.eval(code)}
 w.eval((await readFile(root+'app.js','utf8')).replace(/^import .*;\r?\n/gm,''));
 const $=s=>w.document.querySelector(s),click=s=>{if(!$(s))throw Error('Missing '+s);$(s).click()},tick=()=>new Promise(r=>setImmediate(r)),select=(s,value)=>{const el=$(s);el.value=value;el.dispatchEvent(new w.Event('change',{bubbles:true}))};
 await tick();return {dom,w,$,click,tick,select};
}

