import {getLocale} from '../i18n.js';
// Authored Georgian / English / Russian vocabulary. Stable IDs are persisted.
const topics = [
 ['საფუძვლები','🌱',[
 ['პირველი სიტყვები','გამარჯობა|hello|привет','ნახვამდის|goodbye|до свидания','მადლობა|thank you|спасибо','გთხოვ|please|пожалуйста'],
 ['ადამიანები','დედა|mother|мама','მამა|father|папа','მეგობარი|friend|друг','ბავშვი|child|ребёнок'],
 ['ჩემი სამყარო','სახლი|house|дом','წიგნი|book|книга','კალამი|pen|ручка','სკოლა|school|школа'],
 ['მარტივი წინადადებები','მე სტუდენტი ვარ|I am a student|Я студент','ეს წიგნია|This is a book|Это книга','მე სახლში ვარ|I am at home|Я дома','ეს ჩემი მეგობარია|This is my friend|Это мой друг']]],
 ['ყოველდღიური ფრაზები','💬',[
 ['გაცნობა','რა გქვია?|What is your name?|Как тебя зовут?','მე მქვია გიორგი|My name is Giorgi|Меня зовут Георгий','სასიამოვნოა შენი გაცნობა|Nice to meet you|Приятно познакомиться','საიდან ხარ?|Where are you from?|Откуда ты?'],
 ['როგორ ხარ?','როგორ ხარ?|How are you?|Как дела?','კარგად ვარ|I am well|У меня всё хорошо','დაღლილი ვარ|I am tired|Я устал','ბედნიერი ვარ|I am happy|Я счастлив'],
 ['ზრდილობა','ბოდიში|Sorry|Извини','არაფრის|You are welcome|Не за что','დახმარება მჭირდება|I need help|Мне нужна помощь','არ მესმის|I do not understand|Я не понимаю'],
 ['დღის დრო','დილა მშვიდობისა|Good morning|Доброе утро','საღამო მშვიდობისა|Good evening|Добрый вечер','ღამე მშვიდობისა|Good night|Спокойной ночи','ხვალამდე|See you tomorrow|До завтра']]],
 ['საჭმელი და სასმელი','🍋',[
 ['ხილი','ვაშლი|apple|яблоко','ბანანი|banana|банан','ფორთოხალი|orange|апельсин','ლიმონი|lemon|лимон'],
 ['სუფრასთან','პური|bread|хлеб','ყველი|cheese|сыр','კვერცხი|egg|яйцо','ბრინჯი|rice|рис'],
 ['სასმელები','წყალი|water|вода','ჩაი|tea|чай','ყავა|coffee|кофе','რძე|milk|молоко'],
 ['კაფეში','წყალი მინდა|I want water|Я хочу воды','მენიუ გთხოვთ|The menu please|Меню пожалуйста','ანგარიში გთხოვთ|The bill please|Счёт пожалуйста','ძალიან გემრიელია|It is very tasty|Это очень вкусно']]],
 ['მოგზაურობა','🧭',[
 ['ტრანსპორტი','ავტობუსი|bus|автобус','მატარებელი|train|поезд','თვითმფრინავი|airplane|самолёт','ტაქსი|taxi|такси'],
 ['ქალაქში','სადგური|station|станция','აეროპორტი|airport|аэропорт','სასტუმრო|hotel|отель','მუზეუმი|museum|музей'],
 ['მიმართულებები','მარცხნივ|left|налево','მარჯვნივ|right|направо','პირდაპირ|straight ahead|прямо','ახლოს|near|близко'],
 ['გზაში','სად არის სადგური?|Where is the station?|Где станция?','ბილეთი მჭირდება|I need a ticket|Мне нужен билет','სად არის სასტუმრო?|Where is the hotel?|Где отель?','ტაქსი მჭირდება|I need a taxi|Мне нужно такси']]],
 ['ყოველდღიური ცხოვრება','☀️',[
 ['დრო','დღეს|today|сегодня','ხვალ|tomorrow|завтра','გუშინ|yesterday|вчера','ახლა|now|сейчас'],
 ['საქმიანობა','მე ვკითხულობ|I read|Я читаю','მე ვწერ|I write|Я пишу','მე ვმუშაობ|I work|Я работаю','მე ვსწავლობ|I study|Я учусь'],
 ['ამინდი','მზე|sun|солнце','წვიმა|rain|дождь','თოვლი|snow|снег','ქარი|wind|ветер'],
 ['ჩემი დღე','დილით ვმუშაობ|I work in the morning|Я работаю утром','საღამოს ვკითხულობ|I read in the evening|Я читаю вечером','დღეს წვიმს|It is raining today|Сегодня идёт дождь','ხვალ სახლში ვარ|I am at home tomorrow|Завтра я дома']]],
 ['ახალი აღმოჩენები','🚀',[
 ['საყიდლები','ფასი|price|цена','ფული|money|деньги','მაღაზია|shop|магазин','ჩანთა|bag|сумка'],
 ['ფერები','წითელი|red|красный','ლურჯი|blue|синий','მწვანე|green|зелёный','ყვითელი|yellow|жёлтый'],
 ['რიცხვები','ერთი|one|один','ორი|two|два','სამი|three|три','ოთხი|four|четыре'],
 ['შემდეგი ნაბიჯი','რა ღირს?|How much does it cost?|Сколько это стоит?','ეს მომწონს|I like this|Мне это нравится','ქართულად ვლაპარაკობ|I speak Georgian|Я говорю по-грузински','ყოველდღე ვსწავლობ|I study every day|Я учусь каждый день']]]
];

import {createCourses} from './courseFactory.js';
export {normalize,LEVELS,isUnlocked} from './courseFactory.js';
export const BRAND='Giolingo';
export const courses=createCourses(topics);
const englishCourses=createCourses(topics,'en');
export const getCourses=(source=getLocale())=>source==='en'?englishCourses:courses;
export const allLessons=(id,mode='adult',source=getLocale())=>{const course=source==='en'?englishCourses[id]:courses[id];return (mode==='kids'?course.kidsUnits:course.units).flatMap(u=>u.lessons);};
