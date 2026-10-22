import React from 'react';
import {afterEach,expect,test,vi} from 'vitest';
import {cleanup,fireEvent,render,screen,waitFor} from '@testing-library/react';
import {webcrypto} from 'node:crypto';
import AuthPanel from '../src/components/AuthPanel';
import {accountIdentity,accountLabel} from '../src/lib/accountIdentity';
import {setLocale} from '../src/i18n';
const api=vi.hoisted(()=>({signUp:vi.fn(),signInWithPassword:vi.fn()}));
vi.mock('../src/lib/supabase',()=>({supabase:{auth:api}}));
vi.mock('../src/state/ProgressContext',()=>({useProgress:()=>({user:null})}));
vi.stubGlobal('crypto',webcrypto);
afterEach(()=>{cleanup();vi.clearAllMocks();setLocale('ka');});
test('username identifiers are stable, Unicode-safe and reserved from email signup',async()=>{
 expect(await accountIdentity('username','  Giorgi_1 ')).toEqual(await accountIdentity('username','giorgi_1'));
 const georgian=await accountIdentity('username','გიორგი');expect(georgian.email.split('@')[0]).toHaveLength(64);
 await expect(accountIdentity('email',georgian.email)).rejects.toThrow('email_format');
 await expect(accountIdentity('username','a b')).rejects.toThrow('username_format');
 expect(accountLabel({email:georgian.email,user_metadata:{username:'გიორგი'}})).toBe('გიორგი');
});
test('username signup requires no email and immediately accepts the session',async()=>{
 setLocale('en');api.signUp.mockResolvedValue({data:{session:{user:{id:'test'}}}});render(<AuthPanel/>);
 fireEvent.click(screen.getByRole('button',{name:'Sign up',exact:true}));
 fireEvent.click(screen.getByRole('button',{name:'Username',exact:true}));
 fireEvent.change(screen.getByLabelText('Username'),{target:{value:'Giorgi_test'}});
 fireEvent.change(screen.getByLabelText('Password (at least 8 characters)'),{target:{value:'test-password'}});
 fireEvent.click(screen.getByRole('button',{name:'Create account',exact:true}));
 await waitFor(()=>expect(api.signUp).toHaveBeenCalledWith({email:expect.stringMatching(/@users.giolingo.invalid$/),password:'test-password',options:{data:{username:'giorgi_test'}}}));
 await screen.findByText('You are signed in.');
});
test('email login sends credentials without any OTP calls',async()=>{
 setLocale('en');api.signInWithPassword.mockResolvedValue({data:{session:{user:{id:'test'}}}});render(<AuthPanel/>);
 fireEvent.change(screen.getByLabelText('Email address'),{target:{value:'person@example.com'}});
 fireEvent.change(screen.getByLabelText('Password'),{target:{value:'test-password'}});
 fireEvent.submit(screen.getByLabelText('Password').closest('form'));
 await waitFor(()=>expect(api.signInWithPassword).toHaveBeenCalledWith({email:'person@example.com',password:'test-password'}));
 await screen.findByText('You are signed in.');
 expect(screen.queryByText(/confirmation code/i)).toBeNull();
});
test('signup without a session never claims success or shows verification UI',async()=>{
 setLocale('en');api.signUp.mockResolvedValue({data:{session:null}});render(<AuthPanel/>);
 fireEvent.click(screen.getByRole('button',{name:'Sign up',exact:true}));
 fireEvent.change(screen.getByLabelText('Email address'),{target:{value:'person@example.com'}});
 fireEvent.change(screen.getByLabelText('Password (at least 8 characters)'),{target:{value:'test-password'}});
 fireEvent.submit(screen.getByLabelText('Email address').closest('form'));
 expect(await screen.findByRole('alert')).toHaveProperty('textContent','Registration could not finish. Try signing in or retry later.');
 expect(screen.queryByText('You are signed in.')).toBeNull();
 expect(api.signUp.mock.calls[0][0].options).toEqual({data:{}});
});
