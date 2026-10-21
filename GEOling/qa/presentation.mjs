import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {setup} from './bootstrap-v3.mjs';
const {dom,w,$,click,tick,select}=await setup();
select('#ui-language','en');await tick();assert.equal($('#course').value,'ru');assert.equal(w.localStorage.getItem('geolingo-ui-language'),'en');click('[data-action="theme"]');assert.equal(w.document.documentElement.dataset.theme,'dark');assert.equal(w.localStorage.getItem('geolingo-theme'),'dark');
select('#ui-language','ru');await tick();assert.equal($('#course').value,'en');assert.equal(w.document.documentElement.dataset.theme,'dark');assert.ok($('[data-view="learn"]').textContent.includes('Учиться'));click('[data-start="0"]');await tick();assert.ok(!/[ა-ჰ]/u.test($('.study-phrase span').textContent));w.setUiLanguage('ka');await tick();assert.ok($('.lesson-title').textContent.includes('პირველი'));w.setUiLanguage('ru');await tick();assert.equal($('#modal').open,true);click('.modal-outside-close');
select('#ui-language','ka');await tick();assert.equal($('#course').querySelectorAll('option').length,2);select('#course','ru');assert.equal($('#course').value,'ru');click('[data-action="theme"]');assert.equal(w.document.documentElement.dataset.theme,'light');
w.matchMedia=()=>({matches:true});w.celebrate();assert.equal($('.celebration'),null);w.localStorage.setItem('geolingo-ui-language','ru');w.localStorage.setItem('geolingo-theme','dark');w.eval(await readFile(new URL('../public/preferences.js',import.meta.url),'utf8'));assert.equal(w.document.documentElement.lang,'ru');assert.equal(w.document.documentElement.dataset.theme,'dark');
console.log('PASS: all source/course routes, restored trilingual modal UI, theme/language persistence, reduced motion.');dom.window.close();
