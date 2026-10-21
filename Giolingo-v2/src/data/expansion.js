// New authored bilingual material. Stable IDs are assigned in courseFactory.
// Each four consecutive rows form one lesson; no padded or cloned lessons.
const blocks = [
['A1','სახლი და ოთახები','🏠',['ოთახები','ავეჯი','საძინებელი','სახლში'],`
ოთახი|room|комната
სამზარეულო|kitchen|кухня
სააბაზანო|bathroom|ванная
საძინებელი|bedroom|спальня
მაგიდა|table|стол
სკამი|chair|стул
დივანი|sofa|диван
თარო|shelf|полка
საწოლი|bed|кровать
ბალიში|pillow|подушка
საბანი|blanket|одеяло
სარკე|mirror|зеркало
კარი ღიაა|The door is open|Дверь открыта
ფანჯარა დახურულია|The window is closed|Окно закрыто
ეს ჩემი ოთახია|This is my room|Это моя комната
გასაღები მაგიდაზეა|The key is on the table|Ключ на столе`],
['A1','ტანსაცმელი','👕',['ყოველდღიური სამოსი','ცივ ამინდში','აქსესუარები','ჩაცმა'],`
პერანგი|shirt|рубашка
შარვალი|trousers|брюки
კაბა|dress|платье
ქვედაბოლო|skirt|юбка
ქურთუკი|jacket|куртка
პალტო|coat|пальто
შარფი|scarf|шарф
ხელთათმანები|gloves|перчатки
ქუდი|hat|шапка
ქამარი|belt|ремень
წინდები|socks|носки
ფეხსაცმელი|shoes|обувь
ეს პერანგი ლურჯია|This shirt is blue|Эта рубашка синяя
თბილი პალტო მჭირდება|I need a warm coat|Мне нужно тёплое пальто
ჩემი ფეხსაცმელი აქაა|My shoes are here|Моя обувь здесь
ჩაიცვი ქურთუკი|Put on your jacket|Надень куртку`],
['A1','სხეული და შეგრძნებები','🖐️',['სახე','სხეულის ნაწილები','შეგრძნებები','როგორ ვგრძნობ თავს'],`
თავი|head|голова
პირი|mouth|рот
კბილი|tooth|зуб
თმა|hair|волосы
მხარი|shoulder|плечо
მუხლი|knee|колено
ფეხი|leg|нога
თითი|finger|палец
მშია|I am hungry|Я хочу есть
მწყურია|I am thirsty|Я хочу пить
მცივა|I am cold|Мне холодно
მცხელა|I am hot|Мне жарко
დაღლილი ვარ|I am tired|Я устал
კარგად ვარ|I feel well|Я чувствую себя хорошо
დასვენება მჭირდება|I need a rest|Мне нужен отдых
თავი მტკივა|My head hurts|У меня болит голова`],
['A1','კვირა და კალენდარი','📅',['კვირის დასაწყისი','კვირის ბოლო','სეზონები','თარიღზე საუბარი'],`
ორშაბათი|Monday|понедельник
სამშაბათი|Tuesday|вторник
ოთხშაბათი|Wednesday|среда
ხუთშაბათი|Thursday|четверг
პარასკევი|Friday|пятница
შაბათი|Saturday|суббота
კვირა|Sunday|воскресенье
შაბათ-კვირა|weekend|выходные
გაზაფხული|spring|весна
ზაფხული|summer|лето
შემოდგომა|autumn|осень
ზამთარი|winter|зима
დღეს ორშაბათია|Today is Monday|Сегодня понедельник
ხვალ სამშაბათია|Tomorrow is Tuesday|Завтра вторник
ჩემი დაბადების დღე მაისშია|My birthday is in May|Мой день рождения в мае
შაბათს თავისუფალი ვარ|I am free on Saturday|В субботу я свободен`],
['A1','სკოლა და სწავლა','✏️',['საკლასო ოთახი','სასკოლო ნივთები','სწავლის მოქმედებები','თხოვნა გაკვეთილზე'],`
მასწავლებელი|teacher|учитель
მოსწავლე|pupil|ученик
კლასი|classroom|класс
დაფა|board|доска
კალამი|pen|ручка
საშლელი|eraser|ластик
სახაზავი|ruler|линейка
ლექსიკონი|dictionary|словарь
მოსმენა|to listen|слушать
გამეორება|to repeat|повторять
გაგება|to understand|понимать
დამახსოვრება|to remember|запоминать
გთხოვ გაიმეორე|Please repeat|Повтори пожалуйста
კითხვა მაქვს|I have a question|У меня есть вопрос
ეს სიტყვა რას ნიშნავს?|What does this word mean?|Что означает это слово?
პასუხი არ ვიცი|I do not know the answer|Я не знаю ответа`],
['A1','ბუნება და ცხოველები','🌳',['პარკში','ველური ცხოველები','პატარა არსებები','ბუნების აღწერა'],`
ხე|tree|дерево
ყვავილი|flower|цветок
ბალახი|grass|трава
ფოთოლი|leaf|лист
ლომი|lion|лев
ვეფხვი|tiger|тигр
სპილო|elephant|слон
მაიმუნი|monkey|обезьяна
ჩიტი|bird|птица
პეპელა|butterfly|бабочка
ფუტკარი|bee|пчела
ჭიანჭველა|ant|муравей
პარკი მწვანეა|The park is green|Парк зелёный
ჩიტი ხეზეა|The bird is in the tree|Птица на дереве
ყვავილები ლამაზია|The flowers are beautiful|Цветы красивые
გარეთ თბილა|It is warm outside|На улице тепло`],
['A1','თავისუფალი დრო','🎵',['ჰობი','სპორტი','გართობა','ჩემი ინტერესები'],`
მუსიკა|music|музыка
ცეკვა|dancing|танцы
ხატვა|drawing|рисование
კითხვა|reading|чтение
ფეხბურთი|football|футбол
კალათბურთი|basketball|баскетбол
ცურვა|swimming|плавание
სირბილი|running|бег
კინო|cinema|кино
კონცერტი|concert|концерт
თეატრი|theatre|театр
თამაში|game|игра
მუსიკას ვუსმენ|I listen to music|Я слушаю музыку
შენ ცურვა მოგწონს?|Do you like swimming?|Тебе нравится плавать?
პარკში ვსეირნობთ|We walk in the park|Мы гуляем в парке
კვირაობით ფეხბურთს ვთამაშობ|I play football on Sundays|По воскресеньям я играю в футбол`],
['A2','ჯანმრთელობა და აფთიაქი','🩺',['ექიმთან ჩაწერა','სიმპტომები','აფთიაქში','გამოჯანმრთელება'],`
ექიმთან ჩაწერა მინდა|I would like to make a doctor appointment|Я хочу записаться к врачу
თავისუფალი დრო როდის გაქვთ?|When do you have an available appointment?|Когда у вас есть свободное время для приёма?
დაზღვევა მაქვს|I have insurance|У меня есть страховка
რეგისტრატურა სად არის?|Where is the reception desk?|Где регистратура?
ორი დღეა ვახველებ|I have had a cough for two days|Я кашляю два дня
ყელი მტკივა|I have a sore throat|У меня болит горло
სიცხე მაქვს|I have a fever|У меня температура
ამ წამალზე ალერგია მაქვს|I am allergic to this medicine|У меня аллергия на это лекарство
ეს წამალი დღეში ორჯერ მიიღეთ|Take this medicine twice a day|Принимайте это лекарство два раза в день
რეცეპტი გჭირდებათ?|Do you need a prescription?|Вам нужен рецепт?
აფთიაქი როდის იკეტება?|When does the pharmacy close?|Когда закрывается аптека?
წყალთან ერთად მიიღეთ|Take it with water|Принимайте с водой
დღეს უკეთ ვარ|I feel better today|Сегодня я чувствую себя лучше
სახლში უნდა დავრჩე|I should stay at home|Мне следует остаться дома
მეტი წყალი დალიე|Drink more water|Пей больше воды
ხვალ ისევ მოვალ|I will come back tomorrow|Я приду снова завтра`],
['A2','რესტორანში','🍽️',['მაგიდის დაჯავშნა','მენიუ','შეკვეთის დაზუსტება','გადახდა'],`
მაგიდა ორი ადამიანისთვის გვინდა|We would like a table for two|Нам нужен столик на двоих
დაჯავშნილი გვაქვს|We have a reservation|У нас забронирован столик
ფანჯარასთან შეგვიძლია დავსხდეთ?|Can we sit by the window?|Можно сесть у окна?
მენიუ მოგვიტანეთ გთხოვთ|Please bring us the menu|Принесите нам меню пожалуйста
რას გვირჩევთ?|What do you recommend?|Что вы рекомендуете?
დღის კერძი რა არის?|What is the dish of the day?|Какое сегодня блюдо дня?
ვეგეტარიანული კერძი გაქვთ?|Do you have a vegetarian dish?|У вас есть вегетарианское блюдо?
ეს წვნიანი ცხარეა?|Is this soup spicy?|Этот суп острый?
ხახვის გარეშე გთხოვთ|Without onions please|Без лука пожалуйста
შეგიძლიათ ცალკე მოიტანოთ?|Could you bring it separately?|Можете принести это отдельно?
სასმელი ჯერ არ მიგვიღია|We have not received our drinks yet|Нам ещё не принесли напитки
შეკვეთა შეცდომით მოიტანეთ|You brought the wrong order|Вы принесли не тот заказ
ანგარიში მოგვიტანეთ|Please bring us the bill|Принесите нам счёт
ერთად გადავიხდით|We will pay together|Мы заплатим вместе
ბარათით გადავიხდი|I will pay by card|Я заплачу картой
ყველაფერი ძალიან გემრიელი იყო|Everything was delicious|Всё было очень вкусно`],
['A2','მოგზაურობის ორგანიზება','🧳',['ბილეთები','ბარგი','სასტუმროს სერვისი','დაბრუნება'],`
ორმხრივი ბილეთი მინდა|I would like a return ticket|Мне нужен билет туда и обратно
შემდეგი რეისი როდისაა?|When is the next flight?|Когда следующий рейс?
ადგილი ფანჯარასთან მინდა|I would like a window seat|Мне нужно место у окна
ფასში ბარგი შედის?|Is baggage included in the price?|Багаж включён в стоимость?
ჩემი ჩემოდანი ვერ ვიპოვე|I could not find my suitcase|Я не нашёл свой чемодан
ხელბარგი სად დავდო?|Where should I put my hand luggage?|Куда положить ручную кладь?
ეს ჩანთა ჩემია|This bag belongs to me|Эта сумка принадлежит мне
ჩემოდნის სახელური გატეხილია|The suitcase handle is broken|Ручка чемодана сломана
დამატებითი პირსახოცი მჭირდება|I need an extra towel|Мне нужно дополнительное полотенце
ოთახში გათბობა არ მუშაობს|The heating in the room does not work|В номере не работает отопление
საუზმე რომელ საათზეა?|What time is breakfast?|Во сколько завтрак?
ტაქსი შეგიძლიათ გამოგვიძახოთ?|Could you call a taxi for us?|Вы можете вызвать нам такси?
ოთახს დილით დავტოვებთ|We will check out in the morning|Мы освободим номер утром
გასაღები აქ დავტოვო?|Should I leave the key here?|Оставить ключ здесь?
მოგზაურობით კმაყოფილი ვარ|I am happy with the trip|Я доволен поездкой
მალე ისევ ჩამოვალთ|We will come back soon|Мы скоро приедем снова`],
['A2','ციფრული ყოველდღიურობა','📱',['ტელეფონი','შეტყობინებები','კავშირის პრობლემა','ინტერნეტში'],`
ტელეფონის დამტენი მჭირდება|I need a phone charger|Мне нужно зарядное устройство
ბატარეა დაჯდა|The battery is flat|Батарея разрядилась
შეგიძლია დამირეკო?|Can you call me?|Можешь мне позвонить?
ნომერი შემინახე|Save my number|Сохрани мой номер
შეტყობინება გამოგიგზავნე|I sent you a message|Я отправил тебе сообщение
ელფოსტა შეამოწმე|Check your email|Проверь электронную почту
ფოტო მიმაგრებულია|The photo is attached|Фотография прикреплена
პასუხს მოგვიანებით მოგწერ|I will reply later|Я отвечу позже
კავშირი სუსტია|The connection is weak|Связь слабая
კარგად არ მესმის|I cannot hear you clearly|Я плохо тебя слышу
პაროლი თავიდან შეიყვანე|Enter the password again|Введи пароль ещё раз
ქსელს ვერ ვუერთდები|I cannot connect to the network|Я не могу подключиться к сети
ეს გვერდი გახსენი|Open this page|Открой эту страницу
ფაილი გადმოვწერე|I downloaded the file|Я скачал файл
ბმული არ მუშაობს|The link does not work|Ссылка не работает
ონლაინ შეხვედრა ხუთზე იწყება|The online meeting starts at five|Онлайн-встреча начинается в пять`],
['A2','სერვისები ქალაქში','🏙️',['ფოსტაში','ბანკში','სამრეცხაოში','შეკეთება'],`
ამანათის გაგზავნა მინდა|I would like to send a parcel|Я хочу отправить посылку
მარკა რა ღირს?|How much is a stamp?|Сколько стоит марка?
მისამართი აქ დაწერეთ|Write the address here|Напишите адрес здесь
მიწოდებას რამდენი დღე სჭირდება?|How many days does delivery take?|Сколько дней занимает доставка?
ანგარიშის გახსნა მინდა|I would like to open an account|Я хочу открыть счёт
თანხის გამოტანა მინდა|I would like to withdraw money|Я хочу снять деньги
ბანკომატი სად არის?|Where is the cash machine?|Где банкомат?
გაცვლის კურსი რა არის?|What is the exchange rate?|Какой обменный курс?
ეს ქურთუკი გასაწმენდია|This jacket needs cleaning|Эту куртку нужно почистить
როდის იქნება მზად?|When will it be ready?|Когда будет готово?
ლაქა არ ამოვიდა|The stain did not come out|Пятно не отстиралось
ქვითარი შეინახეთ|Keep the receipt|Сохраните квитанцию
ჩემი საათი გაჩერდა|My watch has stopped|Мои часы остановились
შეკეთება რა ეღირება?|How much will the repair cost?|Сколько будет стоить ремонт?
ახალი ნაწილი გვჭირდება|We need a new part|Нам нужна новая деталь
ხვალ შეგიძლიათ წაიღოთ|You can collect it tomorrow|Можете забрать это завтра`],
['A2','მეზობლები და სტუმრები','🤗',['გაცნობა','მოწვევა','სტუმრად','შეთანხმება'],`
ახლახან გადმოვედი აქ|I have just moved here|Я только что сюда переехал
ჩვენ მეზობლები ვართ|We are neighbours|Мы соседи
რომელ სართულზე ცხოვრობ?|Which floor do you live on?|На каком этаже ты живёшь?
შეგიძლია დამეხმარო?|Could you help me?|Ты можешь мне помочь?
შაბათს სტუმრად გვეწვიე|Come and visit us on Saturday|Приходи к нам в гости в субботу
ექვს საათზე გელოდებით|We are expecting you at six|Мы ждём вас в шесть
რამე მოვიტანო?|Should I bring anything?|Мне что-нибудь принести?
მოწვევისთვის მადლობა|Thank you for the invitation|Спасибо за приглашение
შემოდი და დაჯექი|Come in and sit down|Заходи и садись
ჩაი თუ ყავა გინდა?|Would you like tea or coffee?|Ты хочешь чай или кофе?
თავი ისე იგრძენი როგორც სახლში|Make yourself at home|Чувствуй себя как дома
ძალიან სასიამოვნო საღამოა|It is a lovely evening|Очень приятный вечер
ცოტა ჩუმად შეიძლება?|Could you be a little quieter?|Можно немного потише?
გასაღებს შენთან დავტოვებ|I will leave the key with you|Я оставлю ключ у тебя
ძაღლს საღამოს გავასეირნებ|I will walk the dog in the evening|Я выгуляю собаку вечером
შევთანხმდით ხვალამდე|Agreed see you tomorrow|Договорились до завтра`],
['A2','სამუშაო დღის გეგმა','🗓️',['გრაფიკი','ოფისში','დავალებები','სამუშაოს შემდეგ'],`
ცხრა საათზე ვიწყებ მუშაობას|I start work at nine|Я начинаю работать в девять
დღეს გვიან დავამთავრებ|I will finish late today|Сегодня я закончу поздно
შეხვედრა გადაიდო|The meeting was postponed|Встречу перенесли
შესვენება როდის გვაქვს?|When is our break?|Когда у нас перерыв?
პრინტერში ქაღალდი არ არის|There is no paper in the printer|В принтере нет бумаги
დოკუმენტი უნდა დავბეჭდო|I need to print the document|Мне нужно распечатать документ
მაგიდა გავასუფთავე|I cleared the desk|Я убрал со стола
კოლეგას ველოდები|I am waiting for a colleague|Я жду коллегу
ჯერ ეს დავალება დაასრულე|Finish this task first|Сначала закончи это задание
სიაში სამი საკითხია|There are three items on the list|В списке три пункта
შემიძლია ეს ხვალ გავაკეთო?|Can I do this tomorrow?|Можно сделать это завтра?
დახმარება აღარ მჭირდება|I do not need help any more|Мне больше не нужна помощь
დღეს პროდუქტიული დღე იყო|Today was a productive day|Сегодня был продуктивный день
გზაში მაღაზიაში შევივლი|I will stop at the shop on the way|По дороге я зайду в магазин
საღამოს მეგობრებს ვხვდები|I am meeting friends this evening|Вечером я встречаюсь с друзьями
ხვალ სახლიდან ვიმუშავებ|I will work from home tomorrow|Завтра я буду работать из дома`],
['B1','ბინის ქირაობა','🔑',['განცხადება','დათვალიერება','ხელშეკრულება','მოვლა'],`
ქირაში კომუნალური გადასახადები შედის?|Are utility bills included in the rent?|Коммунальные услуги включены в аренду?
ბინა საზოგადოებრივ ტრანსპორტთან ახლოსაა|The flat is close to public transport|Квартира находится рядом с общественным транспортом
ერთი წლით ქირაობას ვაპირებ|I intend to rent for a year|Я собираюсь снять квартиру на год
დეპოზიტის ოდენობა რამდენია?|How much is the deposit?|Каков размер залога?
შემიძლია ბინა შაბათს ვნახო?|Could I view the flat on Saturday?|Можно посмотреть квартиру в субботу?
ავეჯი კარგ მდგომარეობაშია|The furniture is in good condition|Мебель в хорошем состоянии
აქ საკმარისი ბუნებრივი სინათლეა|There is enough natural light here|Здесь достаточно естественного света
ამ კედელზე ნესტის კვალია|There are signs of damp on this wall|На этой стене следы сырости
პირობები ყურადღებით წავიკითხე|I read the terms carefully|Я внимательно прочитал условия
ხელშეკრულების ასლს გამოგიგზავნით|I will send you a copy of the contract|Я отправлю вам копию договора
ქირა ყოველი თვის დასაწყისში ირიცხება|The rent is paid at the start of each month|Аренда оплачивается в начале каждого месяца
შეწყვეტამდე წინასწარ უნდა შეგატყობინოთ|I must notify you before ending the agreement|Я должен предупредить вас перед расторжением договора
ნიჟარის ქვეშ წყალი ჟონავს|There is a leak under the sink|Под раковиной протекает вода
გთხოვთ ხელოსნის ვიზიტი დაგეგმოთ|Please arrange a visit from a repair worker|Пожалуйста организуйте визит мастера
პრობლემა ჯერ არ მოგვარებულა|The problem has not been resolved yet|Проблема ещё не решена
ზიანის შესახებ მაშინვე შეგატყობინეთ|I informed you about the damage immediately|Я сразу сообщил вам о повреждении`],
['B1','ფული და ბიუჯეტი','💰',['ხარჯები','დაზოგვა','საყიდლის შეფასება','ფინანსური ჩვევები'],`
ყოველთვიურ ხარჯებს ვიწერ|I keep a record of my monthly expenses|Я записываю ежемесячные расходы
ამ თვეში ბიუჯეტს გადავაჭარბე|I went over my budget this month|В этом месяце я превысил бюджет
მოულოდნელი ხარჯი გაჩნდა|An unexpected expense came up|Возник непредвиденный расход
გადასახადის გადახდის ვადა ხვალაა|The bill is due tomorrow|Срок оплаты счёта наступает завтра
მოგზაურობისთვის ფულს ვზოგავ|I am saving up for a trip|Я коплю на поездку
ყოველთვე მცირე თანხას გადავდებ|I put aside a small amount every month|Каждый месяц я откладываю небольшую сумму
ფასდაკლებას დაველოდები|I will wait for a discount|Я подожду скидки
ზედმეტი ნივთები აღარ მჭირდება|I no longer need unnecessary things|Мне больше не нужны лишние вещи
ეს ფასი ხარისხს შეესაბამება|The price matches the quality|Цена соответствует качеству
იაფი ყოველთვის უკეთესი არ არის|Cheaper is not always better|Дешевле не всегда значит лучше
სრული ღირებულება უნდა შევადაროთ|We should compare the total cost|Нам следует сравнить полную стоимость
შენაძენი არ გამიმართლა|The purchase did not meet my expectations|Покупка не оправдала моих ожиданий
გადაწყვეტილებამდე ფასებს ვადარებ|I compare prices before deciding|Я сравниваю цены прежде чем решить
შეთავაზების პირობები გადაამოწმე|Check the terms of the offer|Проверь условия предложения
ქვითრებს ცალკე ვინახავ|I keep receipts separately|Я храню чеки отдельно
გეგმა რეალისტური უნდა იყოს|The plan should be realistic|План должен быть реалистичным`],
['B1','სოციალური ურთიერთობები','💬',['მოსმენა','უთანხმოება','ბოდიში','მხარდაჭერა'],`
მინდა შენი აზრი უკეთ გავიგო|I want to understand your point better|Я хочу лучше понять твою точку зрения
რა მოხდა შემდეგ?|What happened next?|Что произошло потом?
თუ სწორად გავიგე დახმარება გჭირდება|If I understand correctly you need help|Если я правильно понял тебе нужна помощь
მომიყევი უფრო დაწვრილებით|Tell me in more detail|Расскажи мне подробнее
ამ საკითხზე ჩვენი აზრები არ ემთხვევა|We disagree on this issue|Мы расходимся во мнениях по этому вопросу
მოდით მშვიდად განვიხილოთ|Let us discuss it calmly|Давай обсудим это спокойно
შენი პოზიცია მესმის|I understand your position|Я понимаю твою позицию
შეიძლება ორივე ვცდებით|Perhaps we are both wrong|Возможно мы оба ошибаемся
არ მინდოდა შენი წყენინება|I did not mean to upset you|Я не хотел тебя расстроить
ჩემი სიტყვები არასწორად გაიგე|You misunderstood my words|Ты неправильно понял мои слова
ამაზე პასუხისმგებლობას ვიღებ|I take responsibility for this|Я беру на себя ответственность за это
შევეცდები აღარ განმეორდეს|I will try to make sure it does not happen again|Я постараюсь чтобы это не повторилось
შეგიძლია ჩემი იმედი გქონდეს|You can count on me|Ты можешь на меня рассчитывать
ამის მარტო გაკეთება არ გჭირდება|You do not have to do this alone|Тебе не нужно делать это в одиночку
შენს გადაწყვეტილებას პატივს ვცემ|I respect your decision|Я уважаю твоё решение
რთულ პერიოდშიც გვერდით ვიქნები|I will be there even during difficult times|Я буду рядом даже в трудные времена`],
['B1','კულტურა და მოგონებები','🎭',['გამოფენა','ტრადიციები','მოგონებები','შთაბეჭდილებები'],`
გამოფენა ადგილობრივ ხელოვნებას ეძღვნება|The exhibition is devoted to local art|Выставка посвящена местному искусству
ამ ნახატმა ჩემი ყურადღება მიიპყრო|This painting caught my attention|Эта картина привлекла моё внимание
აუდიოგიდის დაქირავება შეიძლება?|Can I hire an audio guide?|Можно взять аудиогид?
შესასვლელი სტუდენტებისთვის უფასოა|Admission is free for students|Для студентов вход бесплатный
ეს ტრადიცია თაობებს გადაეცემა|This tradition is passed down through generations|Эта традиция передаётся из поколения в поколение
ჩვენს ოჯახში ამ დღეს ერთად ვიკრიბებით|Our family gets together on this day|В нашей семье в этот день все собираются вместе
ყველა რეგიონს თავისი წეს-ჩვეულება აქვს|Each region has its own customs|У каждого региона свои обычаи
მნიშვნელოვანია სტუმრის პატივისცემა|It is important to respect a guest|Важно уважать гостя
ბავშვობაში აქ ხშირად მოვდიოდი|I used to come here often as a child|В детстве я часто сюда приходил
ეს სურნელი სახლს მახსენებს|This smell reminds me of home|Этот запах напоминает мне о доме
იმ საღამოს არასდროს დავივიწყებ|I will never forget that evening|Я никогда не забуду тот вечер
წლების შემდეგ ისევ შევხვდით|We met again years later|Мы снова встретились спустя годы
სპექტაკლმა ძლიერი შთაბეჭდილება მოახდინა|The play made a strong impression|Спектакль произвёл сильное впечатление
მსახიობების თამაში დამაჯერებელი იყო|The acting was convincing|Игра актёров была убедительной
მთავარი აზრი ბოლომდე ვერ გავიგე|I did not fully understand the main idea|Я не до конца понял главную мысль
სიამოვნებით ვნახავდი კიდევ ერთხელ|I would gladly watch it again|Я бы с удовольствием посмотрел ещё раз`],
['B1','სწავლა დამოუკიდებლად','📚',['მიზნის დასახვა','სწავლის სტრატეგია','სირთულეები','შედეგის შეფასება'],`
მიზანი მცირე ნაბიჯებად დავყავი|I divided the goal into small steps|Я разделил цель на небольшие шаги
კვირაში სამჯერ ვმეცადინეობ|I study three times a week|Я занимаюсь три раза в неделю
ჩემი გეგმა ყოველდღიურ პრაქტიკას მოიცავს|My plan includes daily practice|Мой план включает ежедневную практику
მინდა პროგრესი თვეში შევაფასო|I want to assess my progress in a month|Я хочу оценить свой прогресс через месяц
ახალ სიტყვებს კონტექსტში ვსწავლობ|I learn new words in context|Я учу новые слова в контексте
საკუთარ მაგალითებს ვწერ|I write my own examples|Я записываю собственные примеры
დავიწყებულ მასალას რეგულარულად ვიმეორებ|I regularly review material I have forgotten|Я регулярно повторяю забытый материал
მოკლე ტექსტებს ხმამაღლა ვკითხულობ|I read short texts aloud|Я читаю короткие тексты вслух
თავიდან გამოთქმა მიჭირდა|At first I found pronunciation difficult|Сначала мне было трудно произносить слова
სიტყვის მნიშვნელობა კონტექსტით გამოვიცანი|I guessed the meaning from the context|Я догадался о значении из контекста
შეცდომა სწავლის შესაძლებლობაა|A mistake is a chance to learn|Ошибка это возможность научиться
მცირე შესვენება კონცენტრაციაში მეხმარება|A short break helps me concentrate|Короткий перерыв помогает мне сосредоточиться
ახლა აზრს უფრო მკაფიოდ გამოვხატავ|I express my ideas more clearly now|Теперь я выражаю мысли яснее
მოსმენას ჯერ კიდევ მეტი ვარჯიში სჭირდება|Listening still needs more practice|Аудирование всё ещё требует больше практики
ჩემი ძლიერი მხარე კითხვა გახდა|Reading has become my strength|Чтение стало моей сильной стороной
შემდეგი მიზანი თავისუფალი საუბარია|My next goal is speaking fluently|Моя следующая цель свободно говорить`],
['B1','გარემოსდაცვითი მოქმედება','♻️',['ყოველდღიური არჩევანი','ადგილობრივი პროექტი','მიზეზები','მოქმედების გეგმა'],`
მრავალჯერად ბოთლს ვიყენებ|I use a reusable bottle|Я пользуюсь многоразовой бутылкой
ელექტროენერგიის მოხმარებას ვაკვირდები|I monitor my electricity use|Я слежу за потреблением электричества
ნივთს გადაგდების ნაცვლად ვაკეთებ|I repair things instead of throwing them away|Я чиню вещи вместо того чтобы выбрасывать их
საკვების ფუჭად ხარჯვას ვამცირებ|I reduce food waste|Я сокращаю пищевые отходы
უბნის დასუფთავებაში ვმონაწილეობ|I take part in cleaning the neighbourhood|Я участвую в уборке района
მოხალისეები ყოველ შაბათს იკრიბებიან|Volunteers meet every Saturday|Волонтёры собираются каждую субботу
ახალი ხეების დარგვას ვგეგმავთ|We plan to plant new trees|Мы планируем посадить новые деревья
მეზობლებს პროექტის შესახებ ვაცნობეთ|We informed the neighbours about the project|Мы сообщили соседям о проекте
დაბინძურება ჯანმრთელობაზე მოქმედებს|Pollution affects health|Загрязнение влияет на здоровье
სუფთა ჰაერი ყველას სჭირდება|Everyone needs clean air|Всем нужен чистый воздух
პატარა ცვლილებებიც მნიშვნელოვანია|Even small changes matter|Даже небольшие изменения важны
გრძელვადიანი შედეგი მოთმინებას მოითხოვს|Long-term results require patience|Долгосрочные результаты требуют терпения
ჯერ ყველაზე მარტივ ნაბიჯს გადავდგამთ|We will take the easiest step first|Сначала мы сделаем самый простой шаг
შედეგებს ერთად განვიხილავთ|We will review the results together|Мы вместе обсудим результаты
საჭირო ნივთების სია შევადგინეთ|We made a list of the things we need|Мы составили список необходимых вещей
შემდეგ შეხვედრაზე შემოგვიერთდი|Join us at the next meeting|Присоединяйся к нам на следующей встрече`],
['B2','მედიაწიგნიერება','🔎',['წყაროს შეფასება','სტატისტიკა','მიკერძოება','პასუხისმგებლიანი გაზიარება'],`
წყაროს სანდოობა უნდა დადგინდეს|The credibility of the source must be established|Необходимо установить достоверность источника
დამოუკიდებელმა წყარომ ინფორმაცია დაადასტურა|An independent source confirmed the information|Независимый источник подтвердил информацию
ციტატა კონტექსტიდან არის ამოღებული|The quotation has been taken out of context|Цитата вырвана из контекста
პირველწყაროზე წვდომა შეზღუდულია|Access to the original source is restricted|Доступ к первоисточнику ограничен
შერჩევა მთელ მოსახლეობას არ წარმოადგენს|The sample does not represent the entire population|Выборка не представляет всё население
საშუალო მაჩვენებელი განსხვავებებს მალავს|The average conceals differences|Средний показатель скрывает различия
პროცენტები საწყის რაოდენობასთან შეადარე|Compare the percentages with the original figures|Сравни проценты с исходными данными
ცდომილების ზღვარი მითითებული არ არის|The margin of error is not stated|Предел погрешности не указан
სათაური ემოციური რეაქციის გამოწვევას ცდილობს|The headline attempts to provoke an emotional response|Заголовок пытается вызвать эмоциональную реакцию
ავტორი ფაქტსა და შეფასებას ერთმანეთში ურევს|The author mixes facts with opinions|Автор смешивает факты и оценки
საპირისპირო მტკიცებულებაც გასათვალისწინებელია|Contrary evidence must also be considered|Следует учитывать и противоположные доказательства
ჩვენი მოლოდინები აღქმაზე მოქმედებს|Our expectations influence perception|Наши ожидания влияют на восприятие
გავრცელებამდე გამოქვეყნების თარიღი გადაამოწმე|Check the publication date before sharing|Проверь дату публикации перед распространением
შეცდომის შესწორება აშკარად უნდა გამოჩნდეს|The correction should be clearly visible|Исправление должно быть хорошо заметно
დაუდასტურებელი ბრალდება არ უნდა გავიმეოროთ|We should not repeat an unverified allegation|Не следует повторять неподтверждённое обвинение
საჯარო ინტერესს სიზუსტე ემსახურება|Accuracy serves the public interest|Точность служит общественным интересам`],
['B2','პროფესიული კომუნიკაცია','✉️',['მკაფიო წერილი','უკუკავშირი','პრიორიტეტები','მოლაპარაკების შეჯამება'],`
ამ წერილის მიზანი ვადების დაზუსტებაა|The purpose of this email is to clarify the deadlines|Цель этого письма уточнить сроки
გთხოვთ მიღება დაგვიდასტუროთ|Please acknowledge receipt|Пожалуйста подтвердите получение
დამატებითი ინფორმაცია დანართშია მოცემული|Further information is provided in the attachment|Дополнительная информация приведена в приложении
დაზუსტების შემთხვევაში დამიკავშირდით|Contact me if clarification is required|Свяжитесь со мной если потребуется уточнение
უკუკავშირი კონკრეტულ მაგალითს უნდა ეყრდნობოდეს|Feedback should be based on a specific example|Обратная связь должна опираться на конкретный пример
ამ ნაწილის გამარტივებას გთავაზობთ|I suggest simplifying this section|Предлагаю упростить этот раздел
შედეგს ვაფასებ თუმცა მიდგომა დასახვეწია|I appreciate the result although the approach needs refinement|Я ценю результат хотя подход требует доработки
შენი წვლილი გადამწყვეტი აღმოჩნდა|Your contribution proved crucial|Твой вклад оказался решающим
ვადებს შორის წინააღმდეგობა უნდა მოვაგვაროთ|We need to resolve the conflict between the deadlines|Нам нужно устранить противоречие между сроками
რესურსები პრიორიტეტების მიხედვით გავანაწილოთ|Let us allocate resources according to priorities|Давайте распределим ресурсы по приоритетам
ამ დავალებას დაუყოვნებელი ყურადღება სჭირდება|This task requires immediate attention|Эта задача требует немедленного внимания
ნაკლებად სასწრაფო საკითხები გადავდოთ|Let us postpone less urgent matters|Давайте отложим менее срочные вопросы
დღევანდელი შეთანხმება წერილობით დავაფიქსიროთ|Let us record today's agreement in writing|Давайте зафиксируем сегодняшнюю договорённость письменно
თითოეულ მხარეს თავისი ვალდებულება აქვს|Each party has its own obligation|У каждой стороны есть своё обязательство
დარჩენილი საკითხები ცალკე განიხილება|The remaining issues will be discussed separately|Оставшиеся вопросы будут обсуждаться отдельно
შემდეგ ნაბიჯებზე საერთო ხედვა გვაქვს|We share a view of the next steps|У нас общее видение дальнейших шагов`],
['B2','ტექნოლოგია და საზოგადოება','🤖',['ავტომატიზაცია','კონფიდენციალურობა','ხელმისაწვდომობა','ციფრული ჩვევები'],`
ავტომატიზაცია განმეორებად სამუშაოს ამცირებს|Automation reduces repetitive work|Автоматизация сокращает повторяющуюся работу
ადამიანის ზედამხედველობა მაინც აუცილებელია|Human oversight remains essential|Человеческий контроль остаётся необходимым
სისტემა შეცდომებისგან დაზღვეული არ არის|The system is not immune to errors|Система не застрахована от ошибок
გადაწყვეტილების ახსნა შესაძლებელი უნდა იყოს|The decision should be explainable|Решение должно поддаваться объяснению
მონაცემების შეგროვებას მკაფიო მიზანი სჭირდება|Data collection requires a clear purpose|Сбор данных требует чёткой цели
თანხმობა ნებისმიერ დროს შეიძლება გაუქმდეს|Consent can be withdrawn at any time|Согласие можно отозвать в любое время
ანგარიშზე წვდომა დამატებით დაცულია|Access to the account has additional protection|Доступ к учётной записи дополнительно защищён
კონფიდენციალურობა ნაგულისხმევად უნდა იყოს დაცული|Privacy should be protected by default|Конфиденциальность должна быть защищена по умолчанию
ინტერფეისი ყველა მომხმარებლისთვის გასაგები უნდა იყოს|The interface should be understandable to every user|Интерфейс должен быть понятен каждому пользователю
ვიდეოს სუბტიტრები სჭირდება|The video needs captions|Видео нужны субтитры
ფერი ინფორმაციის ერთადერთი მატარებელი არ უნდა იყოს|Colour should not be the only carrier of information|Цвет не должен быть единственным носителем информации
კლავიატურით მართვაც აუცილებელია|Keyboard navigation is also essential|Управление с клавиатуры тоже необходимо
შეტყობინებები ყურადღებას ხშირად გვიფანტავს|Notifications often distract us|Уведомления часто нас отвлекают
მუშაობის დროს არასაჭირო ჩანართებს ვხურავ|I close unnecessary tabs while working|Во время работы я закрываю ненужные вкладки
ტექნოლოგიას შეგნებულად ვიყენებ|I use technology deliberately|Я использую технологии осознанно
ციფრული ბალანსი ინდივიდუალურ მიდგომას მოითხოვს|Digital balance requires an individual approach|Цифровой баланс требует индивидуального подхода`],
['B2','საზოგადოებრივი დებატი','🏛️',['პოზიციის ჩამოყალიბება','დაშვების შემოწმება','სამართლიანი განხილვა','დასკვნა'],`
ჩემი პოზიცია ორ პრინციპს ეყრდნობა|My position rests on two principles|Моя позиция опирается на два принципа
საკითხი უფრო ფართო კონტექსტში განვიხილოთ|Let us consider the issue in a wider context|Давайте рассмотрим вопрос в более широком контексте
მიზანი და საშუალება ერთმანეთისგან განვასხვაოთ|Let us distinguish the goal from the means|Давайте различать цель и средства
ეს მიდგომა არსებულ შეზღუდვებს ითვალისწინებს|This approach takes existing constraints into account|Этот подход учитывает существующие ограничения
მთავარი დაშვება დასამტკიცებელია|The main assumption needs to be demonstrated|Основное предположение нуждается в доказательстве
სხვადასხვა მიზეზმა ერთი შედეგი შეიძლება გამოიწვიოს|Different causes may lead to the same outcome|Разные причины могут привести к одному результату
კორელაცია მიზეზობრივ კავშირს არ ამტკიცებს|Correlation does not prove causation|Корреляция не доказывает причинную связь
ალტერნატიული სცენარიც განვიხილოთ|Let us consider an alternative scenario|Давайте рассмотрим альтернативный сценарий
ოპონენტის არგუმენტი სამართლიანად წარმოადგინე|Present your opponent's argument fairly|Излагай аргумент оппонента добросовестно
გამონაკლისი ზოგად წესს ყოველთვის არ აუქმებს|An exception does not always invalidate a general rule|Исключение не всегда опровергает общее правило
პიროვნებაზე გადასვლა განხილვას არ ეხმარება|Personal attacks do not help the discussion|Переход на личности не помогает обсуждению
ემოციური გამოცდილებაც ყურადღებას იმსახურებს|Emotional experience also deserves attention|Эмоциональный опыт тоже заслуживает внимания
ამ ეტაპზე საბოლოო დასკვნას ვერ გამოვიტანთ|We cannot draw a final conclusion at this stage|На данном этапе нельзя сделать окончательный вывод
დამატებითი მონაცემები პოზიციას შეგვაცვლევინებს|Further data may lead us to revise our position|Дополнительные данные могут заставить нас пересмотреть позицию
სადავო საკითხები მკაფიოდ გამოვყოთ|Let us identify the disputed points clearly|Давайте чётко выделим спорные вопросы
კონსენსუსი ნაწილობრივ მაინც მიღწეულია|At least partial consensus has been reached|По крайней мере частичный консенсус достигнут`],
['C1','კვლევის მეთოდები','🔬',['კვლევის კითხვა','მეთოდოლოგია','მონაცემთა ინტერპრეტაცია','შეზღუდვები'],`
კვლევის კითხვა გაზომვად ცნებებად უნდა ჩამოყალიბდეს|The research question must be operationalised in measurable terms|Исследовательский вопрос необходимо выразить в измеримых понятиях
ჰიპოთეზა შემოწმებად პროგნოზს გვთავაზობს|The hypothesis yields a testable prediction|Гипотеза даёт проверяемый прогноз
ცვლადების განსაზღვრება წინასწარ შევათანხმეთ|We agreed on the definition of the variables in advance|Мы заранее согласовали определение переменных
კვლევის ფარგლები მკაფიოდ არის შემოსაზღვრული|The scope of the study is clearly delineated|Рамки исследования чётко очерчены
მეთოდოლოგიური არჩევანი დასაბუთებას საჭიროებს|The methodological choice requires justification|Методологический выбор требует обоснования
მონაწილეთა შერჩევა შემთხვევითი არ ყოფილა|The selection of participants was not random|Отбор участников не был случайным
განმეორებადობა სანდოობის მნიშვნელოვანი პირობაა|Reproducibility is an important condition for reliability|Воспроизводимость является важным условием надёжности
ეთიკური თანხმობა მონაცემთა შეგროვებამდე მივიღეთ|Ethical approval was obtained before data collection|Этическое одобрение было получено до сбора данных
მონაცემები რამდენიმე განსხვავებულ ინტერპრეტაციას უშვებს|The data permit several distinct interpretations|Данные допускают несколько различных интерпретаций
ეფექტის ზომა პრაქტიკულ მნიშვნელობაზე მიუთითებს|The effect size indicates practical significance|Величина эффекта указывает на практическую значимость
გამონაკლისი დაკვირვებები ცალკე გავაანალიზეთ|We analysed the outlying observations separately|Мы отдельно проанализировали нетипичные наблюдения
დასკვნა გამოყენებულ მეთოდზეა დამოკიდებული|The conclusion is contingent on the method employed|Вывод зависит от применённого метода
შედეგების განზოგადება სიფრთხილეს მოითხოვს|Generalising the findings calls for caution|Обобщение результатов требует осторожности
მცირე შერჩევა სტატისტიკურ ძალას ზღუდავს|The small sample limits statistical power|Малая выборка ограничивает статистическую мощность
დაუდგენელი ფაქტორების გავლენა ვერ გამოირიცხება|The influence of unidentified factors cannot be ruled out|Нельзя исключить влияние невыявленных факторов
მომავალი კვლევა ამ ხარვეზის შევსებას უნდა ემსახურებოდეს|Future research should address this gap|Будущие исследования должны восполнить этот пробел`],
['C1','ორგანიზაციული ცვლილება','🧭',['ცვლილების საფუძველი','ჩართულობა','განხორციელება','შეფასება'],`
ცვლილების საჭიროება მტკიცებულებებით უნდა დასაბუთდეს|The need for change must be substantiated by evidence|Необходимость перемен должна быть обоснована доказательствами
არსებული სტრუქტურა ახალ მოთხოვნებს ვეღარ პასუხობს|The existing structure no longer meets emerging demands|Существующая структура больше не отвечает новым требованиям
სტრატეგიული მიზნები ოპერაციულ გეგმას უნდა დაუკავშირდეს|Strategic objectives must be linked to an operational plan|Стратегические цели должны быть связаны с операционным планом
უმოქმედობის ფასი სათანადოდ არ შეფასებულა|The cost of inaction has not been adequately assessed|Цена бездействия не была должным образом оценена
დაინტერესებული მხარეების მონაწილეობა გადამწყვეტია|Stakeholder participation is pivotal|Участие заинтересованных сторон имеет решающее значение
წინააღმდეგობა ზოგჯერ გაურკვევლობით არის გამოწვეული|Resistance is sometimes driven by uncertainty|Сопротивление иногда вызвано неопределённостью
გამჭვირვალე კომუნიკაცია ნდობას აძლიერებს|Transparent communication strengthens trust|Прозрачная коммуникация укрепляет доверие
თანამშრომელთა შეშფოთება საფუძვლიან განხილვას იმსახურებს|Employees' concerns merit thorough consideration|Опасения сотрудников заслуживают тщательного рассмотрения
საპილოტე ეტაპი რისკის შემცირების საშუალებას იძლევა|The pilot phase enables risk mitigation|Пилотный этап позволяет снизить риски
დანერგვას სათანადო მხარდაჭერა უნდა ახლდეს|Implementation must be accompanied by appropriate support|Внедрение должно сопровождаться надлежащей поддержкой
პასუხისმგებლობის საზღვრები ცალსახად უნდა განისაზღვროს|The boundaries of responsibility must be unambiguously defined|Границы ответственности должны быть однозначно определены
უკუკავშირის მექანიზმი პროცესში ჩავაშენეთ|We embedded a feedback mechanism in the process|Мы встроили механизм обратной связи в процесс
წარმატების კრიტერიუმები წინასწარ განვსაზღვრეთ|We defined the criteria for success beforehand|Мы заранее определили критерии успеха
შუალედური შედეგები კორექტირების საფუძველს იძლევა|Interim results provide grounds for adjustment|Промежуточные результаты дают основания для корректировки
სარგებლის მდგრადობა რეგულარულად უნდა მოწმდებოდეს|The sustainability of the benefits must be reviewed regularly|Устойчивость полученных преимуществ необходимо регулярно проверять
გამოცდილება მომდევნო ეტაპის დაგეგმვაში გამოვიყენეთ|We incorporated the lessons learned into planning the next phase|Мы учли полученный опыт при планировании следующего этапа`],
['C1','ეთიკა და პასუხისმგებლობა','⚖️',['პრინციპები','ინტერესთა კონფლიქტი','დილემა','ანგარიშვალდებულება'],`
პრინციპი თანმიმდევრულად უნდა გამოიყენებოდეს|The principle must be applied consistently|Принцип должен применяться последовательно
სამართლიანობა პროცედურასაც და შედეგსაც ეხება|Fairness concerns both procedure and outcome|Справедливость касается и процедуры и результата
პიროვნების ღირსება უპირობო პატივისცემას მოითხოვს|Human dignity demands unconditional respect|Человеческое достоинство требует безусловного уважения
სარგებელი შესაძლო ზიანთან უნდა შეჯერდეს|The benefit must be weighed against potential harm|Пользу необходимо соотнести с возможным вредом
ინტერესთა კონფლიქტი დროულად უნდა გამჟღავნდეს|A conflict of interest must be disclosed promptly|О конфликте интересов необходимо сообщать своевременно
დამოუკიდებლობის აღქმაც ნდობაზე მოქმედებს|The perception of independence also affects trust|Восприятие независимости тоже влияет на доверие
გადაწყვეტილების მიმღები განხილვას ჩამოშორდა|The decision maker recused themselves from the deliberation|Лицо принимающее решение взяло самоотвод от обсуждения
ფარული ვალდებულებები შეფასებას ამახინჯებს|Undisclosed obligations distort judgement|Нераскрытые обязательства искажают оценку
ორი ლეგიტიმური ღირებულება ერთმანეთს ეწინააღმდეგება|Two legitimate values are in tension|Две правомерные ценности вступают в противоречие
სრულყოფილი გამოსავალი შეიძლება არ არსებობდეს|A perfect solution may not exist|Идеального решения может не существовать
კონტექსტი პრინციპის უგულებელყოფას არ ამართლებს|Context does not justify disregarding the principle|Контекст не оправдывает пренебрежение принципом
მინიმალური ჩარევა უპირატესი უნდა იყოს|The least intrusive intervention should be preferred|Следует предпочитать наименее вмешивающееся воздействие
პასუხისმგებლობა უფლებამოსილებას უნდა შეესაბამებოდეს|Responsibility should be commensurate with authority|Ответственность должна соответствовать полномочиям
შეცდომის აღიარება ნდობის აღდგენის წინაპირობაა|Acknowledging an error is a prerequisite for restoring trust|Признание ошибки является предпосылкой восстановления доверия
დამოუკიდებელი შემოწმება ანგარიშვალდებულებას უზრუნველყოფს|Independent scrutiny ensures accountability|Независимая проверка обеспечивает подотчётность
დასაბუთება საზოგადოებისთვის ხელმისაწვდომი უნდა იყოს|The rationale must be accessible to the public|Обоснование должно быть доступно общественности`],
['C1','ენა და რიტორიკა','🖋️',['რეგისტრი','ნიუანსი','დამაჯერებლობა','რედაქტირება'],`
რეგისტრი აუდიტორიის მოლოდინს უნდა შეესაბამებოდეს|The register should align with the audience's expectations|Регистр должен соответствовать ожиданиям аудитории
სასაუბრო ფორმულირება ოფიციალურ ტექსტში უხერხულია|The colloquial phrasing is inappropriate in a formal text|Разговорная формулировка неуместна в официальном тексте
თავაზიანობა ბუნდოვანებას არ უნდა ნიშნავდეს|Politeness should not entail ambiguity|Вежливость не должна подразумевать двусмысленность
ტონის მცირე ცვლილებაც აღქმაზე მოქმედებს|Even a subtle shift in tone affects perception|Даже небольшой сдвиг тона влияет на восприятие
ეს ორი ტერმინი სრულად ურთიერთჩანაცვლებადი არ არის|The two terms are not entirely interchangeable|Эти два термина не полностью взаимозаменяемы
მნიშვნელობა გამოყენების კონტექსტით ზუსტდება|Meaning is refined by the context of use|Значение уточняется контекстом употребления
დამატებითი კონოტაცია გაუთვალისწინებელი დარჩა|The additional connotation was overlooked|Дополнительная коннотация осталась незамеченной
აქცენტის შეცვლით ინტერპრეტაციაც იცვლება|A change in emphasis alters the interpretation|Смена акцента меняет интерпретацию
მეტაფორა რთულ იდეას ხელმისაწვდომს ხდის|A metaphor makes a complex idea accessible|Метафора делает сложную идею доступной
გამეორება ძირითად გზავნილს აძლიერებს|Repetition reinforces the central message|Повтор усиливает основную мысль
რიტორიკული კითხვა მსმენელს დაფიქრებას უბიძგებს|A rhetorical question prompts the listener to reflect|Риторический вопрос побуждает слушателя задуматься
შთამბეჭდავი ფორმა სუსტ არგუმენტს ვერ ჩაანაცვლებს|An impressive form cannot compensate for a weak argument|Впечатляющая форма не может компенсировать слабый аргумент
ზედმეტი სიტყვები აზრის სიმკვეთრეს ამცირებს|Redundant words diminish clarity|Лишние слова снижают ясность
ნაცვალსახელის მიმართება ცალსახა უნდა იყოს|The pronoun's reference must be unambiguous|Отсылка местоимения должна быть однозначной
აბზაცებს შორის ლოგიკური გადასვლა გაამყარე|Strengthen the logical transition between paragraphs|Укрепи логический переход между абзацами
საბოლოო ვერსია ხმამაღლა წაიკითხე|Read the final version aloud|Прочитай окончательную версию вслух`]
];
export const expansion=blocks.map(([level,title,icon,lessons,text])=>({level,title,icon,lessons,rows:text.trim().split('\n')}));

