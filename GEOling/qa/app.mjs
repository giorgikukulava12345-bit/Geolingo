import {JSDOM} from 'jsdom';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as curriculum from '../public/curriculum.js';
import {alphabet} from '../public/alphabet.js';
const dom=new JSDOM('<div id="app"></div><dialog id="modal"></dialog><div id="toast"></div>',{url:'http://localhost:3000',runScripts:'outside-only'});
const w=dom.window;Object.assign(w,curriculum,{alphabet});w.GEOLING_CONFIG={};w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
const source=(await readFile(new URL('../public/app.js',import.meta.url),'utf8')).replace(/^import .*;\r?\n/gm,'');w.eval(source);
const $=s=>w.document.querySelector(s),click=s=>{assert.ok($(s),'Missing '+s);$(s).click()};
assert.ok(w.document.body.textContent.includes('შენი სასწავლო გზა'));assert.equal($('[data-start="1"]').disabled,true);
async function complete(index,wrong=0){click(`[data-start="${index}"]`);click('[data-action="begin"]');for(const [i,q]of curriculum.questions(curriculum.units.en[index]).entries()){if(q.type==='meaning'){const bs=[...w.document.querySelectorAll('[data-choice]')];bs.find(b=>i<wrong?b.dataset.choice!==q.answer:b.dataset.choice===q.answer).click()}else if(q.type==='order'){for(const text of q.item.text.split(' ')){const b=[...w.document.querySelectorAll('#bank [data-word]')].find(b=>b.textContent===text);assert.ok(b);b.click()}}else $('#answer').value=q.answer;click('[data-action="check"]');click('[data-action="next"]');await new Promise(r=>setImmediate(r))}assert.ok($('#modal').textContent.includes('XP'));click('[data-action="close"]')}
await complete(0,4);assert.equal(JSON.parse(w.localStorage.getItem('geo-guest')||'{"xp":0}').xp,0);assert.equal($('[data-start="1"]').disabled,true);
await complete(0);assert.equal(JSON.parse(w.localStorage.getItem('geo-guest')).xp,40);assert.equal($('[data-start="1"]').disabled,false);
await complete(0);assert.equal(JSON.parse(w.localStorage.getItem('geo-guest')).xp,40);
const c=$('#course');c.value='ru';c.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal($('[data-start="1"]').disabled,true);
click('[data-view="practice"]');click('[data-action="alphabet"]');assert.ok($('#modal').textContent.includes('Ы'));click('[data-action="close"]');
click('[data-view="words"]');$('#search').value='несуществующее';$('#search').dispatchEvent(new w.Event('input',{bubbles:true}));assert.ok($('#content').textContent.includes('ვერ მოიძებნა'));
click('[data-action="account"]');assert.ok($('#modal').textContent.includes('სტუმრის რეჟიმში'));
console.log('PASS: app DOM renders, fail/pass threshold, 16-step exercise flow, unlocks, duplicate XP prevention, independent Russian locks, alphabet, word search and account setup notice.');dom.window.close();

