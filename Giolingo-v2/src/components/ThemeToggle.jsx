import {useEffect,useState} from 'react';
import {Sun,Moon} from 'lucide-react';
import {getLocale} from '../i18n';
const read=()=>{try{return localStorage.getItem('giolingo.theme')==='dark';}catch{return false;}};
export default function ThemeToggle(){const [dark,setDark]=useState(read);useEffect(()=>{document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';try{localStorage.setItem('giolingo.theme',dark?'dark':'light');}catch{}},[dark]);return <button className="theme-toggle" type="button" aria-pressed={dark} aria-label={getLocale()==='en'?'Dark mode':'მუქი თემა'} onClick={()=>setDark(v=>!v)}>{dark?<Moon size={20}/>:<Sun size={20}/>}</button>;}
