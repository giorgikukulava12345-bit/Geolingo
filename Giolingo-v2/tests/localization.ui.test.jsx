import React,{useRef,useState} from 'react';
import {afterEach,beforeEach,expect,test,vi} from 'vitest';
import {cleanup,fireEvent,render,screen,act} from '@testing-library/react';
import {ProgressProvider} from '../src/state/ProgressContext';
import LocaleRoot from '../src/components/LocaleRoot';
import RussianKeyboard,{editText} from '../src/components/RussianKeyboard';
import ExerciseEngine from '../src/components/ExerciseEngine';
import {getCourses,allLessons} from '../src/data/curriculum';
import {getGrammar} from '../src/data/grammar';
import {setLocale,getLocale} from '../src/i18n';
import {newRoot} from '../src/state/progress';
vi.mock('../src/lib/supabase',()=>({supabase:null}));
beforeEach(()=>{localStorage.clear();setLocale('ka');vi.stubGlobal('requestAnimationFrame',callback=>{callback();return 1;});});
afterEach(()=>{cleanup();setLocale('ka');vi.unstubAllGlobals();});
test('keyboard has all 33 Cyrillic letters and edits at selection boundaries',()=>{
 function Demo(){const [value,setValue]=useState('кот');const input=useRef(null);return <><input ref={input} aria-label="demo" value={value} onChange={e=>setValue(e.target.value)}/><RussianKeyboard value={value} onChange={setValue} inputRef={input}/></>;}
 render(<Demo/>);const input=screen.getByRole('textbox',{name:'demo'});
 for(const letter of 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя')expect(screen.getByRole('button',{name:letter,exact:true})).toBeTruthy();
 input.setSelectionRange(1,2);fireEvent.click(screen.getByRole('button',{name:'и',exact:true}));expect(input.value).toBe('кит');expect(input.selectionStart).toBe(2);
 fireEvent.click(screen.getByRole('button',{name:'წინა ასოს წაშლა'}));expect(input.value).toBe('кт');expect(input.selectionStart).toBe(1);
 fireEvent.click(screen.getByRole('button',{name:'დიდი ასოები'}));fireEvent.click(screen.getByRole('button',{name:'Я',exact:true}));expect(input.value).toBe('кЯт');
 expect(editText('cat',0,0,'Backspace')).toEqual({value:'cat',caret:0});expect(editText('abc',0,3,'ж')).toEqual({value:'ж',caret:1});
});
test('English source switch persists, selects Russian and preserves completed progress',()=>{
 const root=newRoot();root.profiles.adult.language='en';root.profiles.adult.xp=170;root.profiles.adult.completed=['ru-u1-l1'];localStorage.setItem('giolingo.v2.guest',JSON.stringify(root));
 render(<ProgressProvider><LocaleRoot/></ProgressProvider>);fireEvent.change(screen.getByRole('combobox',{name:'საწყისი ენა'}),{target:{value:'en'}});
 expect(getLocale()).toBe('en');expect(localStorage.getItem('giolingo.interfaceLanguage')).toBe('en');expect(screen.getByRole('combobox',{name:'Learning language'}).value).toBe('ru');expect(screen.getByText('170')).toBeTruthy();expect(screen.getByRole('button',{name:'People'}).disabled).toBe(false);
});
test('English interface covers all main sections and Russian grammar has no Georgian explanations',()=>{
 setLocale('en');const root=newRoot();root.profiles.adult.language='ru';root.profiles.adult.completed=['ru-u1-l1'];localStorage.setItem('giolingo.v2.guest',JSON.stringify(root));render(<ProgressProvider><LocaleRoot/></ProgressProvider>);
 for(const page of ['Grammar','Vocabulary','Smart Review','My progress','Settings','Practice']){
  fireEvent.click(screen.getByRole('button',{name:page,exact:true}));
  const text=[...document.querySelectorAll('body *')].filter(e=>e.children.length===0&&e.tagName!=='OPTION').map(e=>e.textContent).join(' ');expect(text).not.toMatch(/[\u10a0-\u10ff]/);
 }
 for(const level of ['A1','A2','B1','B2','C1'])for(const [title,theory]of getGrammar('ru',level,'en')){expect(title).not.toMatch(/[\u10a0-\u10ff]/);expect(theory.length).toBeGreaterThan(40);expect(theory).not.toMatch(/[\u10a0-\u10ff]/);}
});
test('every English to Russian lesson uses English source words and instructions',()=>{
 const en=allLessons('ru','adult','en'),ka=allLessons('ru','adult','ka');expect(en.length).toBe(200);
 for(let i=0;i<en.length;i++){expect(en[i].id).toBe(ka[i].id);expect(en[i].title).not.toMatch(/[\u10a0-\u10ff]/);for(const entry of en[i].entries){expect(entry.ka).not.toMatch(/[\u10a0-\u10ff]/);expect(entry.target).toMatch(/[а-яё]/i);}for(const q of en[i].questions){expect(q.prompt).not.toMatch(/[\u10a0-\u10ff]/);expect(q.answerLanguage).toBe(q.id==='recall'?'en':'ru');}}
});
test('keyboard is shown only for Russian target writing, not English or reverse translation',()=>{
 for(const [language,index,expected] of [['ru',2,true],['en',2,false],['ru',9,false],['ru',0,false]]){
  const root=newRoot();root.profiles.adult.language=language;const lesson=getCourses('ka')[language].units[0].lessons[0];root.profiles.adult.drafts[lesson.id]={phase:'test',index};localStorage.setItem('giolingo.v2.guest',JSON.stringify(root));const view=render(<ProgressProvider><ExerciseEngine lesson={lesson} language={language} onClose={()=>{}}/></ProgressProvider>);expect(!!screen.queryByRole('region',{name:'რუსული ვირტუალური კლავიატურა'})).toBe(expected);view.unmount();
 }
});
