import React from 'react';
import {afterEach,beforeEach,expect,test,vi} from 'vitest';
import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import ExerciseEngine from '../src/components/ExerciseEngine';
import {courses} from '../src/data/curriculum.js';
const mock=vi.hoisted(()=>({value:null}));
vi.mock('../src/state/ProgressContext',()=>({useProgress:()=>mock.value}));
const lesson=courses.en.units[0].lessons[0];
beforeEach(()=>{mock.value={state:{hearts:5,mode:'adult',drafts:{}},loseHeart:vi.fn(),refill:vi.fn(),finish:vi.fn(),saveDraft:vi.fn(),seeEntry:vi.fn(),recordMistake:vi.fn(),resolveMistake:vi.fn()};});
afterEach(cleanup);
test('test questions cannot be reached before all four learning cards',()=>{render(<ExerciseEngine lesson={lesson} language="en" onClose={()=>{}}/>);expect(screen.queryByText('აირჩიე თარგმანი: „გამარჯობა“')).toBeNull();expect(screen.getByRole('heading',{name:'hello'})).toBeTruthy();for(let i=0;i<3;i++)fireEvent.click(screen.getByRole('button',{name:'გავეცანი · შემდეგი სიტყვა'}));expect(screen.queryByText('აირჩიე თარგმანი: „გამარჯობა“')).toBeNull();fireEvent.click(screen.getByRole('button',{name:'ვიცი სიტყვები · ტესტის დაწყება'}));expect(screen.getByRole('heading',{name:'აირჩიე თარგმანი: „გამარჯობა“'})).toBeTruthy();expect(mock.value.seeEntry).toHaveBeenCalledTimes(4);expect(mock.value.saveDraft.mock.lastCall[1].phase).toBe('test');});
test('saved draft resumes at the correct study card',()=>{mock.value.state.drafts[lesson.id]={phase:'study',card:2};render(<ExerciseEngine lesson={lesson} language="en" onClose={()=>{}}/>);expect(screen.getByRole('heading',{name:'thank you'})).toBeTruthy();});
test('wrong answer deducts one heart, enters Smart Review, and persists feedback',()=>{mock.value.state.drafts[lesson.id]={phase:'test',index:0};render(<ExerciseEngine lesson={lesson} language="en" onClose={()=>{}}/>);fireEvent.click(screen.getByRole('button',{name:'goodbye'}));fireEvent.click(screen.getByRole('button',{name:'შემოწმება'}));expect(mock.value.loseHeart).toHaveBeenCalledTimes(1);expect(mock.value.recordMistake).toHaveBeenCalledTimes(1);expect(mock.value.saveDraft.mock.lastCall[1].feedback).toBe(false);expect(screen.getByText('სწორი პასუხი: hello')).toBeTruthy();});
test('last question awards once and shows completion instead of awarding again',()=>{mock.value.state.drafts[lesson.id]={phase:'test',index:9,answer:'გთხოვ',feedback:true};render(<ExerciseEngine lesson={lesson} language="en" onClose={()=>{}}/>);fireEvent.click(screen.getByRole('button',{name:'გაგრძელება'}));expect(mock.value.finish).toHaveBeenCalledTimes(1);expect(mock.value.finish).toHaveBeenCalledWith(lesson.id,50);expect(screen.getByRole('heading',{name:'ყოჩაღ! გაკვეთილი დასრულდა'})).toBeTruthy();fireEvent.click(screen.getByRole('button',{name:'გაგრძელება'}));expect(mock.value.finish).toHaveBeenCalledTimes(1);});

