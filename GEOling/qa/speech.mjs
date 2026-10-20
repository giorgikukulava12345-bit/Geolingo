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

let active;
w.SpeechRecognition=class{constructor(){active=this}start(){this.onstart?.()}stop(){this.onend?.()}abort(){this.onend?.()}};
click('[data-action="speak"]');click('[data-speech-index="0"]');assert.equal($('.speech-mic').getAttribute('aria-pressed'),'true');
const expected=$('.speak-item strong').textContent;
active.onresult({resultIndex:0,results:[Object.assign([{transcript:expected}],{isFinal:true})]});active.onend();assert.ok($('.speech-score').textContent.includes('100%'));assert.equal($('.speech-mic').getAttribute('aria-pressed'),'false');
click('[data-speech-index="0"]');active.onresult({resultIndex:0,results:[Object.assign([{transcript:'unrelated words'}],{isFinal:true})]});active.onend();assert.ok($('.speech-score').textContent.includes('0%'));
click('[data-speech-index="0"]');active.onerror({error:'not-allowed'});active.onend();assert.ok($('#speech-result-0').textContent.includes('დაბლოკილია'));
click('[data-speech-index="0"]');const stale=active;click('.modal-outside-close');stale.onresult({resultIndex:0,results:[Object.assign([{transcript:expected}],{isFinal:true})]});assert.equal($('#modal').open,false);
assert.equal(w.scoreSpeech('I drink water','I drink water water').percent,75);assert.equal(w.scoreSpeech('Я живу здесь.','я живу здесь').percent,100);assert.equal(w.scoreSpeech('a a b','a b').words.filter(x=>x.matched).length,2);assert.equal(w.scoreSpeech('one two','two one').percent,50);
assert.equal(w.rankVoices([{name:'Basic',lang:'en-US'},{name:'Natural',lang:'en-GB'},{name:'Russian',lang:'ru-RU'}],'en-US')[0].name,'Natural');
console.log('PASS: speech match scoring, repeated words/order/extra words, Russian, natural voice ranking, final recognition result, mic state, permissions errors and stale callbacks.');dom.window.close();
