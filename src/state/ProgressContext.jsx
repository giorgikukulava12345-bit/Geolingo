import {createContext,useContext,useEffect,useState} from 'react';
import {initialProgress,loadProgress,STORAGE_KEY,completeLesson,activeStreak} from './progress';
const Context=createContext(null);
export function ProgressProvider({children}){const [state,setState]=useState(()=>loadProgress(localStorage));const [storageError,setStorageError]=useState(false);useEffect(()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));setStorageError(false);}catch{setStorageError(true);}},[state]);return <Context.Provider value={{state,storageError,streak:activeStreak(state),chooseLanguage:language=>setState(s=>({...s,language})),loseHeart:()=>setState(s=>({...s,hearts:Math.max(0,s.hearts-1)})),refill:()=>setState(s=>({...s,hearts:5})),finish:(id,xp)=>setState(s=>completeLesson(s,id,xp)),reset:()=>setState({...initialProgress})}}>{children}</Context.Provider>;}
export const useProgress=()=>useContext(Context);
