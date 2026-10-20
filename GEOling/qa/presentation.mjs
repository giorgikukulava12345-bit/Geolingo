import {JSDOM} from 'jsdom';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as curriculum from '../public/curriculum.js';
import {alphabet} from '../public/alphabet.js';
import {readingBank} from '../public/reading-content.js';
const dom=new JSDOM('<div id="app"></div><dialog id="modal"></dialog><div id="toast"></div>',{url:'http://localhost:3000',runScripts:'outside-only'});
const w=dom.window;Object.assign(w,curriculum,{alphabet,readingBank});w.GEOLING_CONFIG={};w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
for(const file of ['ui-en.js','topic-en.js','speech.js','presentation.js']){let code=await readFile(new URL('../public/'+file,import.meta.url),'utf8');code=code.replace(/^import .*;\r?\n/gm,'').replace(/export /g,'');if(file==='ui-en.js')code+=';window.uiEnglish=uiEnglish';if(file==='topic-en.js')code+=';window.topicEnglish=topicEnglish';if(file==='speech.js')code+=';Object.assign(window,{rankVoices,scoreSpeech})';if(file==='presentation.js')code+=';Object.assign(window,{getUiLanguage,setUiLanguage,getTheme,toggleTheme,startLocalization,celebrate,localize})';w.eval(code)}
const source=(await readFile(new URL('../public/app.js',import.meta.url),'utf8')).replace(/^import .*;\r?\n/gm,'');w.eval(source);
const $=s=>w.document.querySelector(s),click=s=>{assert.ok($(s),'Missing '+s);$(s).click()};

const tick=()=>new Promise(r=>setImmediate(r));
const select=(id,value)=>{const el=$(id);el.value=value;el.dispatchEvent(new w.Event('change',{bubbles:true}))};
await tick();assert.equal($('.brand').textContent.includes('Geolingo'),true);
select('#ui-language','en');await tick();assert.equal(w.document.documentElement.lang,'en');assert.ok($('[data-view="learn"]').textContent.includes('Learn'));assert.equal(w.localStorage.getItem('geolingo-ui-language'),'en');assert.ok($('.greeting').textContent.includes('Hello'));
click('[data-action="theme"]');await tick();assert.equal(w.document.documentElement.dataset.theme,'dark');assert.equal(w.localStorage.getItem('geolingo-theme'),'dark');
click('[data-start="0"]');await tick();assert.equal($('.study-phrase span').textContent,'გამარჯობა!');assert.ok($('.modal-pad').textContent.includes('Score 80% to pass'));
click('[data-action="begin"]');await tick();assert.ok(w.document.querySelector('[data-choice]').textContent.match(/[ა-ჰ]/));
w.setUiLanguage('ka');await tick();assert.ok($('.lesson-title').textContent.match(/[ა-ჰ]/));w.setUiLanguage('en');await tick();assert.equal($('#modal').open,true);
click('.modal-outside-close');select('#course','ru');await tick();assert.equal($('#course').value,'ru');assert.equal($('#ui-language').value,'en');
select('#ui-language','ka');await tick();assert.ok($('[data-view="learn"]').textContent.includes('ისწავლე'));assert.equal(w.document.documentElement.dataset.theme,'dark');
click('[data-action="theme"]');await tick();assert.equal(w.document.documentElement.dataset.theme,'light');
w.matchMedia=()=>({matches:true});w.celebrate();assert.equal($('.celebration'),null);
w.localStorage.setItem('geolingo-ui-language','en');w.localStorage.setItem('geolingo-theme','dark');w.eval(await readFile(new URL('../public/preferences.js',import.meta.url),'utf8'));assert.equal(w.document.documentElement.lang,'en');assert.equal(w.document.documentElement.dataset.theme,'dark');
console.log('PASS: bilingual UI, language persistence, independent Russian course, learning answers preserved, modal translation restoration, theme persistence, reduced motion.');dom.window.close();
