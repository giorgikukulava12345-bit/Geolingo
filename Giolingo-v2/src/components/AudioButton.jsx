import {useEffect,useRef,useState} from 'react';
import {Volume2,Mic} from 'lucide-react';
import {speakText,observeVoices} from '../lib/speech.js';
import {normalize} from '../data/curriculum.js';
export function AudioButton({text,language='en',slow=false}){
 const [status,setStatus]=useState('');const stop=useRef(null);
 useEffect(()=>observeVoices(()=>{}),[]);
 useEffect(()=>()=>stop.current?.(),[text,language]);
 return <span className="audio-control"><button type="button" className="audio-button" aria-label={`${slow?'ნელა მოსმენა':'მოსმენა'}: ${text}`} onClick={()=>{stop.current=speakText(text,language,slow,setStatus);}}><Volume2 size={19}/>{slow&&<small>ნელა</small>}</button>{status&&<small role="status">{status}</small>}</span>;
}export function SpeakingPractice({text,language}){const [status,setStatus]=useState(''),[busy,setBusy]=useState(false);const recognition=useRef(null);useEffect(()=>()=>recognition.current?.abort(),[]);const supported=typeof window!=='undefined'&&(window.SpeechRecognition||window.webkitSpeechRecognition);function start(){if(!supported)return;const r=new supported();recognition.current=r;r.lang=language==='en'?'en-GB':'ru-RU';r.interimResults=false;r.maxAlternatives=1;r.onstart=()=>{setBusy(true);setStatus('გისმენ…');};r.onend=()=>setBusy(false);r.onerror=e=>setStatus(e.error==='not-allowed'?'მიკროფონის ნებართვა არ არის ჩართული.':'ხმა ვერ ამოვიცანი. შეგიძლია თავიდან სცადო.');r.onresult=e=>{const heard=e.results[0][0].transcript;setStatus(normalize(heard)===normalize(text)?`შესანიშნავია! ამოცნობილია: ${heard}`:`ამოცნობილია: ${heard}. მოუსმინე ნიმუშს და სცადე თავიდან.`);};try{r.start();}catch{setBusy(false);setStatus('მიკროფონი ვერ ჩაირთო.');}}
return <div className="speaking"><button type="button" disabled={!supported||busy} onClick={start}><Mic size={17}/>{busy?'გისმენ…':'ხმამაღლა გაიმეორე'}</button><small>{supported?'სურვილისამებრ: მიკროფონის ღილაკი ხმის ამოცნობას რთავს. ხმა შესაძლოა ბრაუზერის სერვისმა დაამუშაოს.':'ხმის ამოცნობა ამ ბრაუზერს არ აქვს. მოსმენა და წერითი სავარჯიშოები ხელმისაწვდომია.'}</small><p role="status">{status}</p></div>;}

