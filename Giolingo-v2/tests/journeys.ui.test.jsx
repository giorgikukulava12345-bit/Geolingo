import React from 'react';
import {afterEach,beforeEach,expect,test,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import ExerciseEngine from '../src/components/ExerciseEngine';
import {GrammarLibrary} from '../src/components/LearningLibrary';
import {allLessons,courses} from '../src/data/curriculum';
const mock=vi.hoisted(()=>({value:null}));
vi.mock('../src/state/ProgressContext',()=>({useProgress:()=>mock.value}));
beforeEach(()=>{mock.value={state:{hearts:5,mode:'adult',drafts:{}},loseHeart:vi.fn(),refill:vi.fn(),finish:vi.fn(),saveDraft:vi.fn(),seeEntry:vi.fn(),recordMistake:vi.fn(),resolveMistake:vi.fn()};});
afterEach(cleanup);
for(const [language,mode,level] of [['en','adult','C1'],['ru','adult','B2'],['en','kids','A1'],['ru','kids','A1']])test(`${language} ${mode} ${level}: full study and all six exercise formats complete`,()=>{
 const lesson=allLessons(language,mode).filter(l=>l.level===level).at(-1);mock.value.state.mode=mode;
 render(<ExerciseEngine lesson={lesson} language={language} onClose={()=>{}}/>);
 for(let i=0;i<3;i++)fireEvent.click(screen.getByRole('button',{name:'გავეცანი · შემდეგი სიტყვა'}));
 fireEvent.click(screen.getByRole('button',{name:'ვიცი სიტყვები · ტესტის დაწყება'}));
 for(const q of lesson.questions){
  if(q.type==='choice')fireEvent.click(screen.getByRole('button',{name:q.answer,exact:true}));
  else if(q.type==='build'){
   const available=[...q.tokens];for(const token of q.answer.split(' ')){const index=available.indexOf(token);expect(index).toBeGreaterThanOrEqual(0);const buttons=screen.getAllByRole('button',{name:token,exact:true}).filter(b=>!b.disabled);fireEvent.click(buttons.at(-1));available[index]=null;}
  }else if(q.type==='match')for(const pair of q.pairs){fireEvent.click(screen.getByRole('button',{name:pair.ka,exact:true}));fireEvent.click(screen.getByRole('button',{name:pair.target,exact:true}));}
  else fireEvent.change(screen.getByRole('textbox',{name:'შენი პასუხი'}),{target:{value:q.answer}});
  fireEvent.click(screen.getByRole('button',{name:'შემოწმება'}));expect(screen.getByText('შესანიშნავია!')).toBeTruthy();
  fireEvent.click(screen.getByRole('button',{name:'გაგრძელება'}));
 }
 expect(mock.value.finish).toHaveBeenCalledExactlyOnceWith(lesson.id,50);expect(mock.value.loseHeart).not.toHaveBeenCalled();expect(mock.value.seeEntry).toHaveBeenCalledTimes(4);
});
test('grammar search filters real rules and expanded content is available',()=>{
 render(<GrammarLibrary units={courses.en.units.filter(u=>u.level==='C1')} language="en"/>);
 expect(screen.getByRole('status').textContent).toContain('28');
 fireEvent.change(screen.getByRole('textbox',{name:'გრამატიკაში ძებნა'}),{target:{value:'ნომინალიზაცია'}});
 expect(screen.getByRole('status').textContent).toContain('2');
 fireEvent.change(screen.getByRole('textbox',{name:'გრამატიკაში ძებნა'}),{target:{value:'xyznotfound'}});
 expect(screen.getByRole('status').textContent).toContain('0');
});
