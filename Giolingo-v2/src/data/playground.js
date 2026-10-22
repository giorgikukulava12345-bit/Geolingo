// Original short dialogues and role-play models. ka | en | ru.
export const stories=[
 ['cafe','A1','კაფეში','At the cafe',[
 ['გამარჯობა! ჩაი მინდა.','Hello! I would like tea.','Здравствуйте! Я хочу чай.'],
 ['შაქრით თუ უშაქროდ?','With sugar or without sugar?','С сахаром или без сахара?'],
 ['უშაქროდ გთხოვთ.','Without sugar please.','Без сахара пожалуйста.'],
 ['აი თქვენი ჩაი.','Here is your tea.','Вот ваш чай.']],['ჩაი','tea','чай']],
 ['station','A1','სადგურში','At the station',[
 ['სად არის სადგური?','Where is the station?','Где станция?'],['სადგური მარჯვნივაა.','The station is on the right.','Станция справа.'],['ბილეთი მჭირდება.','I need a ticket.','Мне нужен билет.'],['მატარებელი ათზე გადის.','The train leaves at ten.','Поезд отправляется в десять.']],['ბილეთი','ticket','билет']],
 ['friend','A1','ახალი მეგობარი','A new friend',[
 ['გამარჯობა! მე ანა ვარ.','Hello! I am Anna.','Привет! Я Анна.'],['მე გიორგი ვარ.','I am Giorgi.','Я Георгий.'],['შენ აქ ცხოვრობ?','Do you live here?','Ты здесь живёшь?'],['დიახ აქ ვცხოვრობ.','Yes I live here.','Да я здесь живу.']],['მეგობარი','friend','друг']],
 ['market','A1','ბაზარში','At the market',[
 ['ვაშლები გაქვთ?','Do you have apples?','У вас есть яблоки?'],['დიახ ძალიან გემრიელია.','Yes they are delicious.','Да они очень вкусные.'],['ორი ვაშლი მინდა.','I would like two apples.','Я хочу два яблока.'],['აი თქვენი ვაშლები.','Here are your apples.','Вот ваши яблоки.']],['ვაშლები','apples','яблоки']],
 ['hotel','A2','სასტუმროში','At the hotel',[
 ['ოთახი დაჯავშნილი მაქვს.','I have booked a room.','Я забронировал номер.'],['თქვენი სახელი მითხარით.','Please tell me your name.','Скажите ваше имя пожалуйста.'],['საუზმე რომელ საათზეა?','What time is breakfast?','Во сколько завтрак?'],['საუზმე რვა საათზე იწყება.','Breakfast starts at eight.','Завтрак начинается в восемь.']],['საუზმე','breakfast','завтрак']],
 ['weekend','A2','შაბათის გეგმა','Saturday plans',[
 ['შაბათს რას აპირებ?','What are you planning for Saturday?','Что ты планируешь на субботу?'],['მუზეუმში მინდა წასვლა.','I would like to visit the museum.','Я хочу пойти в музей.'],['ერთად წავიდეთ?','Shall we go together?','Пойдём вместе?'],['შესასვლელთან შევხვდეთ.','Let us meet at the entrance.','Давай встретимся у входа.']],['მუზეუმი','museum','музей']],
 ['lost','A2','დაკარგული ჩანთა','The lost bag',[
 ['ჩემი ჩანთა ვერ ვიპოვე.','I could not find my bag.','Я не нашёл свою сумку.'],['რა ფერის იყო?','What colour was it?','Какого она была цвета?'],['ჩანთა ლურჯი იყო.','The bag was blue.','Сумка была синяя.'],['აი სკამთან დევს.','It is there by the chair.','Она там возле стула.']],['ჩანთა','bag','сумка']],
 ['help','A2','მეზობლის დახმარება','Helping a neighbour',[
 ['ეს ყუთი მძიმეა.','This box is heavy.','Эта коробка тяжёлая.'],['შემიძლია დაგეხმარო.','I can help you.','Я могу тебе помочь.'],['ერთად ავიტანოთ.','Let us carry it upstairs together.','Давай отнесём её наверх вместе.'],['დახმარებისთვის მადლობა.','Thank you for your help.','Спасибо за помощь.']],['ყუთი','box','коробка']]
].map(([id,level,ka,en,lines,word])=>({id,level,ka,en,lines,word}));
export const voiceScenes=[
 {id:'shop',ka:'მაღაზიაში',en:'At the shop',prompt:['თქვენ რა გსურთ?','What would you like?','Что вы хотите?'],reply:['ორი ვაშლი მინდა','I would like two apples','Я хочу два яблока']},
 {id:'coffee',ka:'ყავის შეკვეთა',en:'Ordering coffee',prompt:['რას დალევთ?','What would you like to drink?','Что вы будете пить?'],reply:['ყავა მინდა გთხოვთ','I would like coffee please','Я хочу кофе пожалуйста']},
 {id:'ticket',ka:'ბილეთის ყიდვა',en:'Buying a ticket',prompt:['სად მიდიხართ?','Where are you going?','Куда вы едете?'],reply:['თბილისში მივდივარ','I am going to Tbilisi','Я еду в Тбилиси']},
 {id:'name',ka:'ახალი ნაცნობი',en:'Meeting someone',prompt:['რა გქვია?','What is your name?','Как тебя зовут?'],reply:['მე ანა მქვია','My name is Anna','Меня зовут Анна']},
 {id:'hotel',ka:'სასტუმროს საუზმე',en:'Hotel breakfast',prompt:['კითხვა გაქვთ?','Do you have a question?','У вас есть вопрос?'],reply:['რომელ საათზეა საუზმე','What time is breakfast','Во сколько завтрак']},
 {id:'directions',ka:'გზის კითხვა',en:'Asking directions',prompt:['შემიძლია დაგეხმაროთ?','Can I help you?','Я могу вам помочь?'],reply:['სად არის სადგური','Where is the station','Где станция']}
];
export const pictures=[
 {id:'park',ka:'პარკი: აღწერე ხე, მზე და ბავშვი.',en:'The park: describe the tree, sun and child.',model:['ეს მწვანე ხეა','This is a green tree','Это зелёное дерево']},
 {id:'table',ka:'სუფრა: აღწერე მაგიდა და ხილი.',en:'The table: describe the table and the fruit.',model:['მაგიდაზე ვაშლია','There is an apple on the table','На столе яблоко']},
 {id:'home',ka:'სახლი: აღწერე სახლი, კარი და ფანჯარა.',en:'The house: describe the house, door and window.',model:['სახლს ლურჯი კარი აქვს','The house has a blue door','У дома синяя дверь']}
];
export const monologueTopics=[['ჩემი ჩვეულებრივი დღე','My usual day'],['ჩემი ოჯახი','My family'],['ჩემი საყვარელი საჭმელი','My favourite food'],['ადგილი სადაც მინდა მოგზაურობა','A place I would like to visit'],['ჩემი ჰობი','My hobby'],['ბოლო შაბათ-კვირა','Last weekend'],['ჩემი სწავლის მიზნები','My learning goals']];
const words=`здравствуйте|hello|გამარჯობა
привет|hello|გამარჯობა
я|I|მე
хочу|want|მინდა
чай|tea|ჩაი
с|with|თან
сахаром|sugar|შაქარი
или|or|ან
без|without|გარეშე
сахара|sugar|შაქარი
пожалуйста|please|გთხოვთ
вот|here|აი
ваш|your|თქვენი
где|where|სად
станция|station|სადგური
справа|on the right|მარჯვნივ
мне|to me|მე
нужен|needed|საჭიროა
билет|ticket|ბილეთი
поезд|train|მატარებელი
отправляется|leaves|გადის
в|at / in|ში / ზე
десять|ten|ათი
анна|Anna|ანა
георгий|Giorgi|გიორგი
ты|you|შენ
здесь|here|აქ
живёшь|live|ცხოვრობ
да|yes|დიახ
живу|live|ვცხოვრობ
у|at / with|თან
вас|you|თქვენ
есть|have / there is|არის
яблоки|apples|ვაშლები
они|they|ისინი
очень|very|ძალიან
вкусные|delicious|გემრიელი
два|two|ორი
яблока|apples|ვაშლი
ваши|your|თქვენი
забронировал|booked|დაჯავშნა
номер|room|ოთახი
скажите|tell|მითხარით
ваше|your|თქვენი
имя|name|სახელი
во|at|ზე
сколько|how much / what time|რამდენი / რომელ საათზე
завтрак|breakfast|საუზმე
начинается|starts|იწყება
восемь|eight|რვა
что|what|რა
планируешь|plan|გეგმავ
на|on / for|ზე / თვის
субботу|Saturday|შაბათი
пойти|to go|წასვლა
музей|museum|მუზეუმი
пойдём|let us go|წავიდეთ
вместе|together|ერთად
давай|let us|მოდი
встретимся|let us meet|შევხვდეთ
входа|entrance|შესასვლელი
не|not|არ
нашёл|found|იპოვა
свою|own|საკუთარი
сумку|bag|ჩანთა
какого|what|როგორი
она|she / it|ის
была|was|იყო
цвета|colour|ფერი
сумка|bag|ჩანთა
синяя|blue|ლურჯი
там|there|იქ
возле|by / near|გვერდით
стула|chair|სკამი
эта|this|ეს
коробка|box|ყუთი
тяжёлая|heavy|მძიმე
могу|can|შემიძლია
тебе|to you|შენ
помочь|help|დახმარება
отнесём|we will carry|ავიტანოთ
её|her / it|ის
наверх|upstairs|ზემოთ
спасибо|thank you|მადლობა
за|for|თვის
помощь|help|დახმარება`;
const dictionary=Object.fromEntries(words.split('\n').map(row=>{const [ru,en,ka]=row.split('|');return [ru,{en,ka}];}));
export function storyWordMeaning(word,language,source){const key=word.toLowerCase().replace(/[^\p{L}]/gu,'');if(language==='ru')return dictionary[key]?.[source];const found=Object.values(dictionary).find(row=>row.en.toLowerCase()===key);return found?.[source];}
