import {useEffect,useState} from 'react';
import {AudioButton} from './AudioButton';
import {observeVoices} from '../lib/speech';
export default function SpeechSettings(){
 const [voices,setVoices]=useState([]);
 useEffect(()=>observeVoices(setVoices),[]);
 return <section className="panel"><h2>მოსმენის შემოწმება</h2><p>აირჩიე ხმის ღილაკი. ხმა ირთვება მხოლოდ შენი დაჭერის შემდეგ. სხვა ღილაკზე გადასვლა წინა მოსმენას აჩერებს.</p>{[['en','Hello! Let us learn together.','ინგლისური'],['ru','Привет! Давайте учиться вместе.','რუსული']].map(([language,text,label])=><div className="example-row" key={language}><div><b>{label}</b><small>{voices.some(v=>v.lang.toLowerCase().startsWith(language))?'მოწყობილობის ხმა ხელმისაწვდომია':'ბრაუზერი ხმას ავტომატურად მოძებნის'}</small></div><AudioButton text={text} language={language}/></div>)}<details className="lesson-theory"><summary>თუ ხმა არ ისმის</summary><p>შეამოწმე მოწყობილობის ხმის დონე და გამორთული ხომ არ არის ჩანართის ხმა. Windows-ზე გახსენი Settings → Time & language → Speech → Manage voices და დაამატე English ან Russian. Android-ზე მოძებნე Text-to-Speech settings, iPhone-ზე — Accessibility → Spoken Content → Voices. ხმის დამატების შემდეგ ბრაუზერი თავიდან გახსენი. ზოგი ჩაშენებული ბრაუზერი მოსმენას არ უჭერს მხარს — ასეთ შემთხვევაში გამოიყენე Chrome, Edge ან Safari.</p></details></section>;
}
