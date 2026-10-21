import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=fileURLToPath(new URL('../public/',import.meta.url));
export async function setup(){
 const dom=new JSDOM('<html lang="ka"><head><meta name="theme-color"></head><body><div id="app"></div><dialog id="modal"></dialog><div id="toast"></div></body></html>',{url:'http://localhost:3000',runScripts:'outside-only'}),w=dom.window;
 const files=['curriculum.js','alphabet.js','alphabet-support.js','reading-support-v3.js','reading-content.js','ui-en.js','topic-en.js','ui-ru.js','ui-ru-extra.js','topic-ru.js','support-v3.js','grammar-v3.js','listening-v3.js','conversations-v3.js','speech.js','crosswords.js'];
 for(const file of files)Object.assign(w,await import(pathToFileURL(root+file).href));
 w.GEOLING_CONFIG={};w.matchMedia=()=>({matches:false});w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
 for(const file of ['presentation.js','learning-hub.js']){let code=(await readFile(root+file,'utf8')).replace(/^import .*;\r?\n/gm,'').replace(/export /g,'');code+=';Object.assign(window,{'+(file==='presentation.js'?'getUiLanguage,setUiLanguage,getTheme,toggleTheme,startLocalization,celebrate,localize,interfaceText':'createLearningHub')+'})';w.eval(code)}
 w.eval((await readFile(root+'app.js','utf8')).replace(/^import .*;\r?\n/gm,''));
 const $=s=>w.document.querySelector(s),click=s=>{if(!$(s))throw Error('Missing '+s);$(s).click()},tick=()=>new Promise(r=>setImmediate(r)),select=(s,value)=>{const el=$(s);el.value=value;el.dispatchEvent(new w.Event('change',{bubbles:true}))};
 await tick();return {dom,w,$,click,tick,select};
}
