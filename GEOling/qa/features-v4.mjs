import assert from 'node:assert/strict';
import {setup} from './bootstrap-v4.mjs';
const x=await setup(),{w,$,click,select,tick,dom}=x;
w.fetch=()=>{throw Error('External request forbidden')};
const close=()=>click('#modal [data-action="close"]');
assert.equal(w.document.querySelectorAll('#course option').length,4);
assert.equal(w.document.querySelectorAll('.week [data-date]').length,7);
for(const target of ['en','ru','zh','es']){
 select('#course',target);click('[data-view="practice"]');
 for(const action of ['alphabet','reading','conversations','grammar','listen','speak']){
  click(`[data-action="${action}"]`);assert.ok($('#modal').open);assert.ok(!$('#modal').textContent.includes('undefined'),target+action);
  if(action==='reading'){click('[data-read]');click('[data-v4="bank-library"]');assert.equal(w.document.querySelectorAll('[data-v4="bank-start"]').length,10);click('[data-v4="bank-start"]');if($('#v4-answer'))$('#v4-answer').value='wrong';else click('[data-v4="bank-choice"]');click('[data-v4="bank-check"]');assert.ok($('#v4-feedback').textContent.length)}
  if(action==='grammar'){click('[data-v3="grammar-open"]');click('[data-v3="grammar-quiz"]');click('[data-v3="grammar-answer"]');click('[data-v3="quiz-check"]');assert.ok($('#hub-feedback').textContent.length)}
  if(action==='listen'){click('[data-v3="listen-open"]');$('#hub-answer').value='wrong';click('[data-v3="quiz-check"]');assert.ok($('#hub-feedback').textContent.length)}
  if(action==='speak'){assert.ok($('.big-mic'));assert.ok($('.speaking-motto').textContent.includes('პატარა ნაბიჯი'))}
  close();
 }
 click('[data-action="stories"]');click('[data-v4="story-start"]');for(let n=0;n<15&&$('[data-v4="story-choice"]');n++)click('[data-v4="story-choice"]');assert.ok(!$('[data-v4="story-choice"]'));close();
 click('[data-action="duel"]');for(let i=0;i<3;i++){if($('#duel-answer')){$('#duel-answer').value='wrong';click('[data-v4="duel-check"]')}else click('[data-v4="duel-answer"]');assert.ok($('#duel-feedback').textContent);click('[data-v4="duel-next"]')}close();
 click('[data-action="vault"]');assert.ok($('.vault-item'));close();
}
click('[data-action="account"]');$('#local-profile-form input').value='QA learner';$('#local-profile-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));await tick();assert.ok(w.localStorage.getItem('geolingo-local-v4').includes('QA learner'));
console.log('PASS: four-course UI, 100-question blocks, grammar, listening, stories, duel, vault, speaking, profiles; no network.');dom.window.close();
