let active;

export function stopSpeech(){
 if(active){active.utterance.onend=null;active.utterance.onerror=null;active.notify('');clearTimeout(active.timer);active=null;}
 window.speechSynthesis?.cancel();
}
export function observeVoices(listener){
 const synth=window.speechSynthesis;if(!synth)return()=>{};
 const changed=()=>listener(synth.getVoices());changed();
 synth.addEventListener('voiceschanged',changed);
 return()=>synth.removeEventListener('voiceschanged',changed);
}
export function speakText(text,language,slow,notify){
 const synth=window.speechSynthesis;
 if(!synth||!window.SpeechSynthesisUtterance){notify('ამ ბრაუზერს მოსმენა არ აქვს. გამოიყენე Chrome, Edge ან Safari.');return;}
 stopSpeech();
 const utterance=new window.SpeechSynthesisUtterance(text);
 const voices=synth.getVoices();
 const matching=voices.filter(v=>v.lang.toLowerCase().split(/[-_]/)[0]===language);
 utterance.lang=language==='ru'?'ru-RU':'en-US';
 utterance.voice=matching.find(v=>v.lang===utterance.lang)||matching.find(v=>v.localService)||matching[0]||null;
 utterance.rate=slow?.7:.9;
 const session={utterance,notify,timer:null};active=session;
 const finish=message=>{if(active!==session)return;clearTimeout(session.timer);active=null;notify(message);};
 utterance.onstart=()=>{clearTimeout(session.timer);notify('მიმდინარეობს მოსმენა…');};
 utterance.onend=()=>finish('');
 utterance.onerror=event=>{
  if(['canceled','interrupted'].includes(event.error)){finish('');return;}
  finish(['language-unavailable','voice-unavailable','synthesis-unavailable'].includes(event.error)?'ამ მოწყობილობაზე შესაბამისი ხმა მიუწვდომელია. დაამატე ინგლისური ან რუსული ხმა მოწყობილობის Speech / Text-to-Speech პარამეტრებიდან და თავიდან სცადე.':event.error==='not-allowed'?'მოსასმენად ისევ დააჭირე ხმის ღილაკს. შეამოწმე საიტის ხმის ნებართვა.':'მოსმენა ვერ დაიწყო. გადაამოწმე ხმა და ინტერნეტი, შემდეგ თავიდან სცადე.');
 };
 notify('ხმა იტვირთება…');
 session.timer=setTimeout(()=>{if(active===session){stopSpeech();notify('მოწყობილობა ხმას ვერ რთავს. დაამატე შესაბამისი ენის ხმა Speech / Text-to-Speech პარამეტრებიდან ან სცადე სხვა ბრაუზერი.');}},12000);
 try{synth.resume();synth.speak(utterance);}catch{finish('მოსმენა ვერ დაიწყო. დააჭირე ღილაკს თავიდან.');}
 return()=>{if(active===session)stopSpeech();};
}

