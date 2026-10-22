import React from 'react';
import {afterEach,beforeEach,expect,test,vi} from 'vitest';
import {act,cleanup,fireEvent,render,screen} from '@testing-library/react';
import {AudioButton} from '../src/components/AudioButton';
import {observeVoices,stopSpeech} from '../src/lib/speech';
let spoken,voices,listeners,synth;
beforeEach(()=>{
 spoken=[];voices=[{lang:'en-US',localService:true},{lang:'ru-RU',localService:true}];listeners={};
 synth={getVoices:()=>voices,cancel:vi.fn(()=>{spoken.at(-1)?.onerror?.({error:'interrupted'});}),resume:vi.fn(),speak:vi.fn(u=>spoken.push(u)),addEventListener:vi.fn((name,fn)=>listeners[name]=fn),removeEventListener:vi.fn()};
 vi.stubGlobal('speechSynthesis',synth);vi.stubGlobal('SpeechSynthesisUtterance',class{constructor(text){this.text=text;}});
});
afterEach(()=>{cleanup();stopSpeech();vi.useRealTimers();vi.unstubAllGlobals();});
test('English and Russian select their own voices and slow speed',()=>{
 render(<><AudioButton text="Hello" language="en"/><AudioButton text="Привет" language="ru" slow/></>);
 fireEvent.click(screen.getByRole('button',{name:'მოსმენა: Hello'}));expect(spoken[0].voice.lang).toBe('en-US');
 fireEvent.click(screen.getByRole('button',{name:'ნელა მოსმენა: Привет'}));expect(spoken[1].lang).toBe('ru-RU');expect(spoken[1].voice.lang).toBe('ru-RU');expect(spoken[1].rate).toBe(.5);
 expect(screen.queryByText(/ვერ დაიწყო/)).toBeNull();expect(synth.resume).toHaveBeenCalled();
});
test('canceling previous speech does not show a false failure',()=>{
 render(<AudioButton text="Hello"/>);const button=screen.getByRole('button',{name:/მოსმენა:/});fireEvent.click(button);const old=spoken[0];fireEvent.click(button);
 expect(old.onerror).toBeNull();act(()=>spoken[1].onerror({error:'canceled'}));expect(screen.queryByRole('status')).toBeNull();
});
test('real missing voice failure gives actionable help',()=>{
 render(<AudioButton text="Привет" language="ru"/>);fireEvent.click(screen.getByRole('button',{name:/მოსმენა:/}));act(()=>spoken[0].onerror({error:'language-unavailable'}));
 expect(screen.getByRole('status').textContent).toContain('Text-to-Speech');
});
test('late voice list is observed and used on the next click',()=>{
 voices=[];const listener=vi.fn();const unsubscribe=observeVoices(listener);voices=[{lang:'ru-RU',localService:true}];listeners.voiceschanged();expect(listener).toHaveBeenLastCalledWith(voices);unsubscribe();expect(synth.removeEventListener).toHaveBeenCalled();
 render(<AudioButton text="Да" language="ru"/>);fireEvent.click(screen.getByRole('button',{name:/მოსმენა:/}));expect(spoken[0].voice.lang).toBe('ru-RU');
});
test('silent native engine times out without blocking lessons',()=>{
 vi.useFakeTimers();render(<AudioButton text="Hello"/>);fireEvent.click(screen.getByRole('button',{name:/მოსმენა:/}));act(()=>vi.advanceTimersByTime(12000));
 expect(synth.cancel).toHaveBeenCalled();
});
test('unmount cancels speech and detaches voice listener',()=>{
 const view=render(<AudioButton text="Hello"/>);fireEvent.click(screen.getByRole('button',{name:/მოსმენა:/}));const u=spoken[0];view.unmount();expect(u.onerror).toBeNull();expect(synth.removeEventListener).toHaveBeenCalled();
});


