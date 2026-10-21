// Original branching adventures. Local static content: no API or generated live dialogue.
export const interactiveStories = [
  {
    "id": "story-en-cafe",
    "target": "en",
    "title": {
      "ka": "წვიმიანი დღის კაფე",
      "en": "The Rainy-Day Cafe",
      "ru": "Кафе в дождливый день"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "It is raining. You enter a small cafe. Mari, the server, asks, “Is that for here or to go?”",
        "translation": {
          "ka": "წვიმს. შენ პატარა კაფეში შედიხარ. მიმტანი მარი გეკითხება: „აქ მიირთმევთ თუ თან წაიღებთ?“",
          "en": "It is raining. You enter a small cafe. Mari, the server, asks, “Is that for here or to go?”",
          "ru": "Идёт дождь. Вы заходите в небольшое кафе. Официантка Мари спрашивает: «Здесь или с собой?»"
        },
        "choices": [
          {
            "text": "For here, please.",
            "translation": {
              "ka": "აქ მივირთმევ, გთხოვთ.",
              "en": "For here, please.",
              "ru": "Здесь, пожалуйста."
            },
            "next": "help"
          },
          {
            "text": "To go. I am in a hurry.",
            "translation": {
              "ka": "თან წავიღებ. ძალიან მეჩქარება.",
              "en": "To go. I am in a hurry.",
              "ru": "С собой. Я очень спешу."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "Mari shows you a table by the window. “Would you like coffee or tea?”",
        "translation": {
          "ka": "მარი ფანჯარასთან მაგიდას გაჩვენებს. „ყავა გნებავთ თუ ჩაი?“",
          "en": "Mari shows you a table by the window. “Would you like coffee or tea?”",
          "ru": "Мари показывает столик у окна. «Вам кофе или чай?»"
        },
        "choices": [
          {
            "text": "Tea and apple pie, please.",
            "translation": {
              "ka": "ჩაი და ვაშლის ღვეზელი, გთხოვთ.",
              "en": "Tea and apple pie, please.",
              "ru": "Чай и яблочный пирог, пожалуйста."
            },
            "next": "plan"
          },
          {
            "text": "Does the pie contain nuts?",
            "translation": {
              "ka": "ღვეზელში თხილი ხომ არ არის?",
              "en": "Does the pie contain nuts?",
              "ru": "В пироге есть орехи?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "You are rushing for a train. Mari says, “A takeaway coffee takes five minutes.”",
        "translation": {
          "ka": "შენ მატარებელზე გეჩქარება. მარი ამბობს: „თან წასაღებ ყავას ხუთი წუთი სჭირდება.“",
          "en": "You are rushing for a train. Mari says, “A takeaway coffee takes five minutes.”",
          "ru": "Вы спешите на поезд. Мари говорит: «Кофе с собой будет готов через пять минут»."
        },
        "choices": [
          {
            "text": "I will wait five minutes.",
            "translation": {
              "ka": "ხუთ წუთს დაველოდები.",
              "en": "I will wait five minutes.",
              "ru": "Я подожду пять минут."
            },
            "next": "wait"
          },
          {
            "text": "I have already asked twice!",
            "translation": {
              "ka": "უკვე ორჯერ გკითხეთ!",
              "en": "I have already asked twice!",
              "ru": "Я уже дважды спрашивал!"
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "“Tea and apple pie cost eight euros,” says Mari. The menu does not list the pie’s ingredients.",
        "translation": {
          "ka": "„ჩაი და ვაშლის ღვეზელი რვა ევრო ღირს“, — ამბობს მარი. მენიუში ღვეზელის შემადგენლობა არ წერია.",
          "en": "“Tea and apple pie cost eight euros,” says Mari. The menu does not list the pie’s ingredients.",
          "ru": "«Чай и яблочный пирог стоят восемь евро», — говорит Мари. В меню нет состава пирога."
        },
        "choices": [
          {
            "text": "Please check the ingredients first.",
            "translation": {
              "ka": "ჯერ შემადგენლობა შეამოწმეთ, გთხოვთ.",
              "en": "Please check the ingredients first.",
              "ru": "Сначала проверьте состав, пожалуйста."
            },
            "next": "success"
          },
          {
            "text": "I have an allergy. Could you tell me the ingredients?",
            "translation": {
              "ka": "ალერგია მაქვს. შემადგენლობას მეტყვით?",
              "en": "I have an allergy. Could you tell me the ingredients?",
              "ru": "У меня аллергия. Подскажете состав?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "You explain that you have a nut allergy. Mari checks: “The pie contains walnuts, but we have plain yogurt.”",
        "translation": {
          "ka": "შენ ამბობ, რომ თხილზე ალერგია გაქვს. მარი ამოწმებს: „ღვეზელში ნიგოზია, მაგრამ უბრალო იოგურტი გვაქვს.“",
          "en": "You explain that you have a nut allergy. Mari checks: “The pie contains walnuts, but we have plain yogurt.”",
          "ru": "Вы объясняете, что у вас аллергия на орехи. Мари проверяет: «В пироге грецкие орехи, но есть натуральный йогурт»."
        },
        "choices": [
          {
            "text": "Then tea and the safe yogurt, please.",
            "translation": {
              "ka": "მაშინ ჩაი და უსაფრთხო იოგურტი, გთხოვთ.",
              "en": "Then tea and the safe yogurt, please.",
              "ru": "Тогда чай и безопасный йогурт, пожалуйста."
            },
            "next": "success"
          },
          {
            "text": "I will take only sealed yogurt and water.",
            "translation": {
              "ka": "მხოლოდ დალუქულ იოგურტს და წყალს წავიღებ.",
              "en": "I will take only sealed yogurt and water.",
              "ru": "Я возьму только закрытый йогурт и воду."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "Five minutes pass. The coffee is not ready yet. Your train leaves in ten minutes.",
        "translation": {
          "ka": "ხუთი წუთი გავიდა. ყავა ჯერ მზად არ არის. მატარებლის გასვლამდე ათი წუთია დარჩენილი.",
          "en": "Five minutes pass. The coffee is not ready yet. Your train leaves in ten minutes.",
          "ru": "Прошло пять минут. Кофе ещё не готов. Ваш поезд отправляется через десять минут."
        },
        "choices": [
          {
            "text": "Could I have tea here instead?",
            "translation": {
              "ka": "შეიძლება ადგილზე ჩაი დავლიო?",
              "en": "Could I have tea here instead?",
              "ru": "Можно вместо этого выпить чай здесь?"
            },
            "next": "help"
          },
          {
            "text": "I will take water and leave now.",
            "translation": {
              "ka": "წყალს წავიღებ და ახლა წავალ.",
              "en": "I will take water and leave now.",
              "ru": "Я возьму воду и уйду сейчас."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "You complain loudly. Mari says, “I’m sorry, the machine has stopped. I can give you a refund.”",
        "translation": {
          "ka": "შენ უკმაყოფილებას ხმამაღლა გამოთქვამ. მარი ამბობს: „ბოდიში, აპარატი გაჩერდა. ფულის დაბრუნება შემიძლია.“",
          "en": "You complain loudly. Mari says, “I’m sorry, the machine has stopped. I can give you a refund.”",
          "ru": "Вы громко жалуетесь. Мари говорит: «Извините, кофемашина остановилась. Я могу вернуть деньги»."
        },
        "choices": [
          {
            "text": "Sorry. I will take water and yogurt instead.",
            "translation": {
              "ka": "მაპატიეთ. მაშინ წყალსა და იოგურტს ავიღებ.",
              "en": "Sorry. I will take water and yogurt instead.",
              "ru": "Извините. Тогда я возьму воду и йогурт."
            },
            "next": "alternate"
          },
          {
            "text": "Please cancel my order.",
            "translation": {
              "ka": "გთხოვთ, შეკვეთა გააუქმეთ.",
              "en": "Please cancel my order.",
              "ru": "Пожалуйста, отмените заказ."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "You enjoy your safe order and ask for the bill. The rain has stopped. You leave the cafe feeling pleased.",
        "translation": {
          "ka": "შენ მშვიდად მიირთმევ უსაფრთხო შეკვეთას და ანგარიშს ითხოვ. წვიმაც გადაიღო. კაფედან კმაყოფილი გამოდიხარ.",
          "en": "You enjoy your safe order and ask for the bill. The rain has stopped. You leave the cafe feeling pleased.",
          "ru": "Вы спокойно съедаете безопасный заказ и просите счёт. Дождь закончился. Вы уходите довольными."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "You choose a different option. Mari gives you water and sealed yogurt. You leave on time and say a polite goodbye.",
        "translation": {
          "ka": "შენ სხვა ვარიანტს ირჩევ. მარი წყალსა და დალუქულ იოგურტს გაძლევს. შენ დროულად მიდიხარ და თავაზიანად ემშვიდობები.",
          "en": "You choose a different option. Mari gives you water and sealed yogurt. You leave on time and say a polite goodbye.",
          "ru": "Вы выбираете другой вариант. Мари даёт воду и закрытый йогурт. Вы уходите вовремя и вежливо прощаетесь."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "You cancel your order and leave the cafe. You have not eaten, but you now have time to reach the train.",
        "translation": {
          "ka": "შენ შეკვეთას აუქმებ და კაფედან გამოდიხარ. საჭმელი არ მიგიღია, მაგრამ ახლა მატარებლამდე მისასვლელად დრო გაქვს.",
          "en": "You cancel your order and leave the cafe. You have not eaten, but you now have time to reach the train.",
          "ru": "Вы отменяете заказ и уходите. Вы не поели, зато теперь успеете на поезд."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-en-airport",
    "target": "en",
    "title": {
      "ka": "დაკარგული ჩასხდომის ბარათი",
      "en": "The Missing Boarding Pass",
      "ru": "Пропавший посадочный талон"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "You are at the airport and your phone battery is dead. Your boarding pass is on it. Dan is at the information desk.",
        "translation": {
          "ka": "აეროპორტში ხარ და ტელეფონი დაჯდა. ჩასხდომის ბარათი მასში ინახება. საინფორმაციო მაგიდასთან თანამშრომელი დანი დგას.",
          "en": "You are at the airport and your phone battery is dead. Your boarding pass is on it. Dan is at the information desk.",
          "ru": "Вы в аэропорту, и телефон разрядился. Посадочный талон остался в нём. За стойкой информации работает Дэн."
        },
        "choices": [
          {
            "text": "Could you help me? My phone is dead.",
            "translation": {
              "ka": "შეგიძლიათ დამეხმაროთ? ტელეფონი დაჯდა.",
              "en": "Could you help me? My phone is dead.",
              "ru": "Поможете? Телефон разрядился."
            },
            "next": "help"
          },
          {
            "text": "I will go straight to security.",
            "translation": {
              "ka": "კონტროლთან პირდაპირ წავალ.",
              "en": "I will go straight to security.",
              "ru": "Пойду прямо на досмотр."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "Dan asks, “Which airline are you flying with, and do you have identification?”",
        "translation": {
          "ka": "დანი გეკითხება: „რომელი ავიაკომპანიით მიფრინავთ და პირადობის საბუთი გაქვთ?“",
          "en": "Dan asks, “Which airline are you flying with, and do you have identification?”",
          "ru": "Дэн спрашивает: «Какой авиакомпанией вы летите и есть ли у вас документ?»"
        },
        "choices": [
          {
            "text": "I can show you the airline and my passport.",
            "translation": {
              "ka": "ავიაკომპანიას და პასპორტს გაჩვენებთ.",
              "en": "I can show you the airline and my passport.",
              "ru": "Я назову авиакомпанию и покажу паспорт."
            },
            "next": "plan"
          },
          {
            "text": "Let us check the gate and flight number first.",
            "translation": {
              "ka": "ჯერ კარიბჭე და ფრენის ნომერი შევამოწმოთ.",
              "en": "Let us check the gate and flight number first.",
              "ru": "Давайте сначала проверим выход и номер рейса."
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "You go straight to security. The officer says, “I need to see your boarding pass.”",
        "translation": {
          "ka": "შენ პირდაპირ უსაფრთხოების კონტროლთან მიდიხარ. თანამშრომელი ამბობს: „ჩასხდომის ბარათი უნდა მაჩვენოთ.“",
          "en": "You go straight to security. The officer says, “I need to see your boarding pass.”",
          "ru": "Вы идёте прямо на досмотр. Сотрудник говорит: «Нужно показать посадочный талон»."
        },
        "choices": [
          {
            "text": "I will wait at a charger.",
            "translation": {
              "ka": "დამტენთან დაველოდები.",
              "en": "I will wait at a charger.",
              "ru": "Я подожду у зарядки."
            },
            "next": "wait"
          },
          {
            "text": "Let me through anyway!",
            "translation": {
              "ka": "მაინც გამატარეთ!",
              "en": "Let me through anyway!",
              "ru": "Всё равно пропустите меня!"
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "Dan sends you to the airline desk. The agent finds your booking and prints the pass. It shows gate B12.",
        "translation": {
          "ka": "დანი ავიაკომპანიის მაგიდასთან გიგზავნის. თანამშრომელი ჯავშანს პოულობს და ბარათს გიბეჭდავს. მასზე კარიბჭე B12 წერია.",
          "en": "Dan sends you to the airline desk. The agent finds your booking and prints the pass. It shows gate B12.",
          "ru": "Дэн направляет вас к стойке авиакомпании. Агент находит бронь и печатает талон. На нём указан выход B12."
        },
        "choices": [
          {
            "text": "I will check the board and go to C4.",
            "translation": {
              "ka": "ტაბლოს შევამოწმებ და C4-სკენ წავალ.",
              "en": "I will check the board and go to C4.",
              "ru": "Проверю табло и пойду к C4."
            },
            "next": "success"
          },
          {
            "text": "Is the gate definitely B12?",
            "translation": {
              "ka": "კარიბჭე ნამდვილად B12-ია?",
              "en": "Is the gate definitely B12?",
              "ru": "Выход точно B12?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "A staff member checks the flight number and prints a replacement boarding pass. The board says, “Gate changed: C4.” There is an airport map nearby.",
        "translation": {
          "ka": "თანამშრომელი ფრენის ნომერს ამოწმებს და ბარათის ახალ ასლს გიბეჭდავს. ტაბლოზე წერია: „კარიბჭე შეიცვალა: C4“. ახლოს აეროპორტის რუკაა.",
          "en": "A staff member checks the flight number and prints a replacement boarding pass. The board says, “Gate changed: C4.” There is an airport map nearby.",
          "ru": "Сотрудник проверяет номер рейса и печатает новый посадочный талон. На табло написано: «Выход изменён: C4». Рядом карта аэропорта."
        },
        "choices": [
          {
            "text": "What is the quickest way to C4?",
            "translation": {
              "ka": "რომელი გზაა C4-მდე ყველაზე მოკლე?",
              "en": "What is the quickest way to C4?",
              "ru": "Как быстрее пройти к C4?"
            },
            "next": "success"
          },
          {
            "text": "I am late. I will ask an agent about other options.",
            "translation": {
              "ka": "ვაგვიანებ. აგენტს სხვა ვარიანტებზე ვკითხავ.",
              "en": "I am late. I will ask an agent about other options.",
              "ru": "Я опаздываю. Спрошу агента о других вариантах."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "You wait ten minutes at a charger. The phone turns on, but it still shows the old gate.",
        "translation": {
          "ka": "შენ დამტენთან ათ წუთს ელოდები. ტელეფონი ჩაირთო, მაგრამ ძველი კარიბჭე ისევ ჩანს.",
          "en": "You wait ten minutes at a charger. The phone turns on, but it still shows the old gate.",
          "ru": "Вы ждёте у зарядки десять минут. Телефон включается, но показывает старый выход."
        },
        "choices": [
          {
            "text": "I will go back to the information desk.",
            "translation": {
              "ka": "საინფორმაციო მაგიდასთან დავბრუნდები.",
              "en": "I will go back to the information desk.",
              "ru": "Вернусь к стойке информации."
            },
            "next": "help"
          },
          {
            "text": "I will ask an agent about alternatives now.",
            "translation": {
              "ka": "ახლა აგენტთან სხვა ვარიანტებს გავარკვევ.",
              "en": "I will ask an agent about alternatives now.",
              "ru": "Сейчас узнаю у агента другие варианты."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "You argue at security. The officer calmly says, “You cannot pass without a boarding pass. Please speak to the airline.”",
        "translation": {
          "ka": "შენ კონტროლთან კამათობ. თანამშრომელი მშვიდად გეუბნება: „ბარათის გარეშე ვერ გაგატარებთ. ავიაკომპანიას მიმართეთ.“",
          "en": "You argue at security. The officer calmly says, “You cannot pass without a boarding pass. Please speak to the airline.”",
          "ru": "Вы спорите на досмотре. Сотрудник спокойно говорит: «Без талона нельзя пройти. Обратитесь к авиакомпании»."
        },
        "choices": [
          {
            "text": "Sorry. I will speak to the airline agent.",
            "translation": {
              "ka": "მაპატიეთ. ავიაკომპანიის თანამშრომელს დაველაპარაკები.",
              "en": "Sorry. I will speak to the airline agent.",
              "ru": "Извините. Поговорю с сотрудником авиакомпании."
            },
            "next": "alternate"
          },
          {
            "text": "I do not want help. I will leave.",
            "translation": {
              "ka": "დახმარება არ მინდა. წავალ.",
              "en": "I do not want help. I will leave.",
              "ru": "Помощь не нужна. Я уйду."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "You reach C4 on time. The agent checks the pass and lets you board. Asking for help saved time.",
        "translation": {
          "ka": "შენ C4-ს დროულად აღწევ. თანამშრომელი ბარათს ამოწმებს და თვითმფრინავში გატარებს. დახმარების თხოვნამ დრო დაგიზოგა.",
          "en": "You reach C4 on time. The agent checks the pass and lets you board. Asking for help saved time.",
          "ru": "Вы вовремя приходите к C4. Сотрудник проверяет талон и пропускает вас. Просьба о помощи сэкономила время."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "You speak to an agent. Boarding has closed, but the agent explains other options. You clarify the next steps and make a new plan.",
        "translation": {
          "ka": "შენ აგენტს მიმართავ. ფრენაზე ჩასხდომა დაიხურა, მაგრამ ის სხვა ვარიანტებს გიხსნის. შენ შემდეგ ნაბიჯებს აზუსტებ და ახალ გეგმას ადგენ.",
          "en": "You speak to an agent. Boarding has closed, but the agent explains other options. You clarify the next steps and make a new plan.",
          "ru": "Вы обращаетесь к агенту. Посадка закончилась, но вам объясняют другие варианты. Вы уточняете действия и составляете новый план."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "You decline help and leave. You miss the flight. For your next journey, you will prepare a backup pass.",
        "translation": {
          "ka": "შენ დახმარებაზე უარს ამბობ და მიდიხარ. რეისს ვერ ასწრებ. შემდეგ მგზავრობაზე ბარათის ასლს წინასწარ მოამზადებ.",
          "en": "You decline help and leave. You miss the flight. For your next journey, you will prepare a backup pass.",
          "ru": "Вы отказываетесь от помощи и уходите. Рейс пропущен. Для следующей поездки вы заранее подготовите копию талона."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-ru-cafe",
    "target": "ru",
    "title": {
      "ka": "სადილი სადგურის კაფეში",
      "en": "Lunch at the Station Cafe",
      "ru": "Обед в кафе у вокзала"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "Вы заходите в кафе у вокзала. Меню на русском. Официантка Лена спрашивает, готовы ли вы сделать заказ.",
        "translation": {
          "ka": "სადგურის გვერდით კაფეში შედიხარ. მენიუ რუსულადაა. მიმტანი ლენა გეკითხება, მზად ხარ თუ არა შეკვეთისთვის.",
          "en": "You enter a cafe beside the station. The menu is in Russian. Lena asks if you are ready to order.",
          "ru": "Вы заходите в кафе у вокзала. Меню на русском. Официантка Лена спрашивает, готовы ли вы сделать заказ."
        },
        "choices": [
          {
            "text": "Поможете разобраться в меню?",
            "translation": {
              "ka": "მენიუს ახსნაში დამეხმარებით?",
              "en": "Could you help me understand the menu?",
              "ru": "Поможете разобраться в меню?"
            },
            "next": "help"
          },
          {
            "text": "Я возьму этот сэндвич.",
            "translation": {
              "ka": "ამ სენდვიჩს ავიღებ.",
              "en": "I will have this sandwich.",
              "ru": "Я возьму этот сэндвич."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "Лена говорит: «Сегодня есть овощной суп и сэндвич с курицей. Вы едите мясо?»",
        "translation": {
          "ka": "ლენა ამბობს: „დღეს ბოსტნეულის სუპი და ქათმის სენდვიჩი გვაქვს. ხორცს ჭამთ?“",
          "en": "Lena says, “Today we have vegetable soup and a chicken sandwich. Do you eat meat?”",
          "ru": "Лена говорит: «Сегодня есть овощной суп и сэндвич с курицей. Вы едите мясо?»"
        },
        "choices": [
          {
            "text": "Я не ем мясо. Что вы посоветуете?",
            "translation": {
              "ka": "ხორცს არ ვჭამ. რას მირჩევთ?",
              "en": "I do not eat meat. What do you recommend?",
              "ru": "Я не ем мясо. Что вы посоветуете?"
            },
            "next": "plan"
          },
          {
            "text": "Суп на мясном бульоне?",
            "translation": {
              "ka": "სუპი ხორცის ბულიონზეა?",
              "en": "Is the soup made with meat stock?",
              "ru": "Суп на мясном бульоне?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "Вы видите знакомое слово и заказываете сэндвич без уточнений. Лена передаёт заказ на кухню.",
        "translation": {
          "ka": "მენიუში ნაცნობ სიტყვას ხედავ და დაუფიქრებლად სენდვიჩს უკვეთავ. ლენა შეკვეთას სამზარეულოში აგზავნის.",
          "en": "You see a familiar word and order the sandwich without checking. Lena sends the order to the kitchen.",
          "ru": "Вы видите знакомое слово и заказываете сэндвич без уточнений. Лена передаёт заказ на кухню."
        },
        "choices": [
          {
            "text": "Сначала уточню состав.",
            "translation": {
              "ka": "შემადგენლობას ჯერ გავარკვევ.",
              "en": "I will check the ingredients first.",
              "ru": "Сначала уточню состав."
            },
            "next": "wait"
          },
          {
            "text": "Зачем вы мне это принесли?",
            "translation": {
              "ka": "რატომ მომიტანეთ ეს?",
              "en": "Why did you bring me this?",
              "ru": "Зачем вы мне это принесли?"
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "Вы объясняете, что не едите мясо. Лена предлагает овощной суп: «Он без мясного бульона».",
        "translation": {
          "ka": "შენ უხსნი, რომ ხორცს არ ჭამ. ლენა ბოსტნეულის სუპს გთავაზობს და ამბობს: „ეს ხორცის ბულიონის გარეშეა.“",
          "en": "You explain that you do not eat meat. Lena offers vegetable soup: “It is made without meat stock.”",
          "ru": "Вы объясняете, что не едите мясо. Лена предлагает овощной суп: «Он без мясного бульона»."
        },
        "choices": [
          {
            "text": "Тогда суп и хлеб, пожалуйста.",
            "translation": {
              "ka": "მაშინ სუპი და პური, გთხოვთ.",
              "en": "Then soup and bread, please.",
              "ru": "Тогда суп и хлеб, пожалуйста."
            },
            "next": "success"
          },
          {
            "text": "Можете проверить состав?",
            "translation": {
              "ka": "შეგიძლიათ შემადგენლობა გადაამოწმოთ?",
              "en": "Could you double-check the ingredients?",
              "ru": "Можете проверить состав?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "Вы спрашиваете о бульоне. Лена уточняет у повара. И суп, и хлеб вам подходят.",
        "translation": {
          "ka": "შენ ბულიონზე კითხულობ. ლენა მზარეულთან ამოწმებს. სუპიც და პურიც შენთვის შესაფერისია.",
          "en": "You ask about the stock. Lena checks with the cook. Both the soup and bread suit your needs.",
          "ru": "Вы спрашиваете о бульоне. Лена уточняет у повара. И суп, и хлеб вам подходят."
        },
        "choices": [
          {
            "text": "Спасибо. Я возьму суп.",
            "translation": {
              "ka": "დიდი მადლობა. სუპს ავიღებ.",
              "en": "Thank you. I will have the soup.",
              "ru": "Спасибо. Я возьму суп."
            },
            "next": "success"
          },
          {
            "text": "Я хочу изменить заказ. Сколько это будет стоить?",
            "translation": {
              "ka": "შეკვეთის შეცვლა მინდა. რა დაჯდება?",
              "en": "I would like to change my order. What will it cost?",
              "ru": "Я хочу изменить заказ. Сколько это будет стоить?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "Пока сэндвич готовят, вы спрашиваете о составе. Лена отвечает: «Курица и салат».",
        "translation": {
          "ka": "სანამ სენდვიჩი მზადდება, შენ კითხულობ, რა არის შიგნით. ლენა პასუხობს: „ქათამი და სალათი.“",
          "en": "While the sandwich is being prepared, you ask what is inside. Lena answers, “Chicken and salad.”",
          "ru": "Пока сэндвич готовят, вы спрашиваете о составе. Лена отвечает: «Курица и салат»."
        },
        "choices": [
          {
            "text": "Я спрошу о варианте с супом.",
            "translation": {
              "ka": "სუპზე სხვა ვარიანტს ვკითხავ.",
              "en": "I will ask about a soup option.",
              "ru": "Я спрошу о варианте с супом."
            },
            "next": "help"
          },
          {
            "text": "Можно изменить заказ?",
            "translation": {
              "ka": "შეიძლება შეკვეთა შევცვალო?",
              "en": "May I change my order?",
              "ru": "Можно изменить заказ?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "Приносят сэндвич. Вы говорите: «Я это не хочу!» Лена спрашивает, что вы хотите изменить.",
        "translation": {
          "ka": "სენდვიჩი მოაქვთ. შენ ამბობ: „ეს არ მინდა!“ ლენა გეკითხება, რისი შეცვლა გსურს.",
          "en": "The sandwich arrives. You say, “I do not want this!” Lena asks what you would like to change.",
          "ru": "Приносят сэндвич. Вы говорите: «Я это не хочу!» Лена спрашивает, что вы хотите изменить."
        },
        "choices": [
          {
            "text": "Извините, я не объяснил свои пожелания. Можно заменить?",
            "translation": {
              "ka": "მაპატიეთ, ჩემი საჭიროება არ ამიხსნია. შეცვლა შეიძლება?",
              "en": "Sorry, I did not explain my needs. Could I change it?",
              "ru": "Извините, я не объяснил свои пожелания. Можно заменить?"
            },
            "next": "alternate"
          },
          {
            "text": "Только счёт, пожалуйста.",
            "translation": {
              "ka": "მხოლოდ ანგარიში, გთხოვთ.",
              "en": "Just the bill, please.",
              "ru": "Только счёт, пожалуйста."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "Вы спокойно едите суп и просите счёт. Заказ понят правильно, потому что вы объяснили свои пожелания.",
        "translation": {
          "ka": "შენ სუპს მშვიდად მიირთმევ და ანგარიშს ითხოვ. შეკვეთა სწორად გაიგეს, რადგან შენი საჭიროება ახსენი.",
          "en": "You enjoy the soup and ask for the bill. Your order was understood because you explained your needs.",
          "ru": "Вы спокойно едите суп и просите счёт. Заказ понят правильно, потому что вы объяснили свои пожелания."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "Вы вежливо просите изменить заказ. Лена объясняет, возможна ли замена и сколько она стоит. Вы уточняете цену и договариваетесь.",
        "translation": {
          "ka": "შენ ცვლილებას თავაზიანად ითხოვ. ლენა გეუბნება, შესაძლებელია თუ არა ჩანაცვლება და რა ღირს. შენ თანხას აზუსტებ და შეთანხმდები.",
          "en": "You politely ask for a change. Lena explains whether a replacement is possible and what it costs. You confirm the price and agree.",
          "ru": "Вы вежливо просите изменить заказ. Лена объясняет, возможна ли замена и сколько она стоит. Вы уточняете цену и договариваетесь."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "Вы просите счёт и уходите, не поев. В следующий раз уточните состав до заказа.",
        "translation": {
          "ka": "შენ ანგარიშს ითხოვ და შეუჭმელად მიდიხარ. შემდეგ ჯერზე შეკვეთამდე შემადგენლობას გაარკვევ.",
          "en": "You ask for the bill and leave without eating. Next time you will check the ingredients before ordering.",
          "ru": "Вы просите счёт и уходите, не поев. В следующий раз уточните состав до заказа."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-ru-hotel",
    "target": "ru",
    "title": {
      "ka": "ჩემი ჯავშანი სად არის?",
      "en": "Where Is My Booking?",
      "ru": "Где моя бронь?"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "Вы приходите в гостиницу вечером. Администратор Ира говорит: «Я не нахожу бронь на ваше имя».",
        "translation": {
          "ka": "სასტუმროში საღამოს მიდიხარ. ადმინისტრატორი ირა ამბობს: „თქვენს სახელზე ჯავშანს ვერ ვპოულობ.“",
          "en": "You arrive at the hotel in the evening. Ira at reception says, “I cannot find a booking under your name.”",
          "ru": "Вы приходите в гостиницу вечером. Администратор Ира говорит: «Я не нахожу бронь на ваше имя»."
        },
        "choices": [
          {
            "text": "Я покажу подтверждение. Давайте проверим вместе.",
            "translation": {
              "ka": "დასტურს გაჩვენებთ. ერთად შევამოწმოთ.",
              "en": "I will show the confirmation. Let us check together.",
              "ru": "Я покажу подтверждение. Давайте проверим вместе."
            },
            "next": "help"
          },
          {
            "text": "Просто дайте мне ключ.",
            "translation": {
              "ka": "მხოლოდ გასაღები მომეცით.",
              "en": "Just give me the key.",
              "ru": "Просто дайте мне ключ."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "Ира просит показать подтверждение и даты. Вы находите письмо в телефоне.",
        "translation": {
          "ka": "ირა გთხოვს ჯავშნის დასტურსა და თარიღების ჩვენებას. შენ ტელეფონში წერილს პოულობ.",
          "en": "Ira asks to see your confirmation and dates. You find the email on your phone.",
          "ru": "Ира просит показать подтверждение и даты. Вы находите письмо в телефоне."
        },
        "choices": [
          {
            "text": "Вот подтверждение. Я планировал приехать сегодня.",
            "translation": {
              "ka": "აი დასტური. დღეს მოსვლას ვაპირებდი.",
              "en": "Here is the confirmation. I meant to arrive today.",
              "ru": "Вот подтверждение. Я планировал приехать сегодня."
            },
            "next": "plan"
          },
          {
            "text": "Сколько стоит номер сегодня и что входит в цену?",
            "translation": {
              "ka": "რა ღირს დღევანდელი ოთახი და რა შედის ფასში?",
              "en": "What is tonight’s price, and what does it include?",
              "ru": "Сколько стоит номер сегодня и что входит в цену?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "Вы сразу просите ключ от номера. Ира объясняет: «Сначала нужно проверить бронь».",
        "translation": {
          "ka": "შენ პირდაპირ ოთახის გასაღებს ითხოვ. ირა განმარტავს: „ჯერ ჯავშანი უნდა შევამოწმოთ.“",
          "en": "You ask directly for a room key. Ira explains, “First we need to check the booking.”",
          "ru": "Вы сразу просите ключ от номера. Ира объясняет: «Сначала нужно проверить бронь»."
        },
        "choices": [
          {
            "text": "Дайте две минуты проверить письмо.",
            "translation": {
              "ka": "ორი წუთი მომეცით წერილის შესამოწმებლად.",
              "en": "Give me two minutes to check the email.",
              "ru": "Дайте две минуты проверить письмо."
            },
            "next": "wait"
          },
          {
            "text": "У меня есть бронь! Больше ничего не интересует!",
            "translation": {
              "ka": "ჯავშანი მაქვს! მეტი არაფერი მაინტერესებს!",
              "en": "I have a booking! That is all I care about!",
              "ru": "У меня есть бронь! Больше ничего не интересует!"
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "В брони указано завтра. Ира говорит: «На сегодня есть свободный номер, но цена другая».",
        "translation": {
          "ka": "ჯავშანში ხვალინდელი თარიღი წერია. ირა ამბობს: „დღეს თავისუფალი ოთახი გვაქვს, მაგრამ ფასი განსხვავდება.“",
          "en": "The booking is for tomorrow. Ira says, “We have a room tonight, but the price is different.”",
          "ru": "В брони указано завтра. Ира говорит: «На сегодня есть свободный номер, но цена другая»."
        },
        "choices": [
          {
            "text": "Я согласен на 80. Сохраните и завтрашнюю бронь.",
            "translation": {
              "ka": "80-ს ვეთანხმები. ხვალინდელი ჯავშანიც შემინარჩუნეთ.",
              "en": "I accept 80. Please keep tomorrow’s booking too.",
              "ru": "Я согласен на 80. Сохраните и завтрашнюю бронь."
            },
            "next": "success"
          },
          {
            "text": "А что с завтраком и завтрашней бронью?",
            "translation": {
              "ka": "საუზმე და ხვალინდელი ჯავშანი როგორ იქნება?",
              "en": "What about breakfast and tomorrow’s booking?",
              "ru": "А что с завтраком и завтрашней бронью?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "Вы уточняете условия. Сегодня номер стоит 80, завтрак отдельно 10. Завтрашняя бронь сохраняется, если оплатить сегодня отдельно.",
        "translation": {
          "ka": "შენ პირობებს აზუსტებ. დღევანდელი ოთახი 80 ღირს, საუზმე ცალკე 10. ხვალინდელი ჯავშანი შენარჩუნდება, თუ დღეს ცალკე გადაიხდი.",
          "en": "You clarify the terms. Tonight costs 80, breakfast another 10. Tomorrow’s booking stays if you pay separately tonight.",
          "ru": "Вы уточняете условия. Сегодня номер стоит 80, завтрак отдельно 10. Завтрашняя бронь сохраняется, если оплатить сегодня отдельно."
        },
        "choices": [
          {
            "text": "Понятно. Я возьму номер на сегодня.",
            "translation": {
              "ka": "გასაგებია. დღევანდელ ოთახს ავიღებ.",
              "en": "Understood. I will take tonight’s room.",
              "ru": "Понятно. Я возьму номер на сегодня."
            },
            "next": "success"
          },
          {
            "text": "Поможете найти другую гостиницу на сегодня?",
            "translation": {
              "ka": "დღეს სხვა სასტუმროს პოვნაში დამეხმარებით?",
              "en": "Could you help me find another hotel tonight?",
              "ru": "Поможете найти другую гостиницу на сегодня?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "Вы просите несколько минут, чтобы проверить письмо. Сверяете адрес и дату. Гостиница верная, но дата завтрашняя.",
        "translation": {
          "ka": "შენ რამდენიმე წუთით წერილის შემოწმებას ითხოვ. ადარებ სასტუმროს მისამართსა და თარიღს. სასტუმრო სწორია, თარიღი კი — ხვალ.",
          "en": "You ask for a few minutes to check the email. You compare the hotel address and date. The hotel is right, but the date is tomorrow.",
          "ru": "Вы просите несколько минут, чтобы проверить письмо. Сверяете адрес и дату. Гостиница верная, но дата завтрашняя."
        },
        "choices": [
          {
            "text": "Дата действительно завтрашняя. Какие есть варианты?",
            "translation": {
              "ka": "თარიღი ნამდვილად ხვალაა. რა ვარიანტები მაქვს?",
              "en": "The date is tomorrow. What options do I have?",
              "ru": "Дата действительно завтрашняя. Какие есть варианты?"
            },
            "next": "help"
          },
          {
            "text": "Посоветуете другую гостиницу рядом?",
            "translation": {
              "ka": "ახლოს სხვა სასტუმროს ხომ ვერ მირჩევთ?",
              "en": "Could you recommend another hotel nearby?",
              "ru": "Посоветуете другую гостиницу рядом?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "Вы повышаете голос. Ира говорит: «Я хочу помочь, но подтверждённая дата — завтра».",
        "translation": {
          "ka": "შენ ხმას უწევ. ირა ამბობს: „მინდა დაგეხმაროთ, მაგრამ დადასტურებული თარიღი ხვალ არის.“",
          "en": "You raise your voice. Ira says, “I want to help, but the confirmed date is tomorrow.”",
          "ru": "Вы повышаете голос. Ира говорит: «Я хочу помочь, но подтверждённая дата — завтра»."
        },
        "choices": [
          {
            "text": "Извините. Я рассмотрю другой вариант.",
            "translation": {
              "ka": "მაპატიეთ. სხვა ვარიანტს განვიხილავ.",
              "en": "Sorry. I will consider another option.",
              "ru": "Извините. Я рассмотрю другой вариант."
            },
            "next": "alternate"
          },
          {
            "text": "Больше ничего проверять не буду. Я уйду.",
            "translation": {
              "ka": "აღარაფერს შევამოწმებ. წავალ.",
              "en": "I will not check anything else. I will leave.",
              "ru": "Больше ничего проверять не буду. Я уйду."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "Вы соглашаетесь с ценой и условиями. Ира оформляет сегодняшнее размещение и подтверждает завтрашнюю бронь. Теперь можно отдохнуть.",
        "translation": {
          "ka": "შენ ფასსა და პირობებს ეთანხმები. ირა დღევანდელ განთავსებას გაფორმებს და ხვალინდელ ჯავშანსაც გიდასტურებს. ახლა დასვენება შეგიძლია.",
          "en": "You accept the price and terms. Ira checks you in for tonight and confirms tomorrow’s booking too. You can finally rest.",
          "ru": "Вы соглашаетесь с ценой и условиями. Ира оформляет сегодняшнее размещение и подтверждает завтрашнюю бронь. Теперь можно отдохнуть."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "Вы просите другой вариант. Ира даёт номер соседней гостиницы и подтверждает время завтрашнего заселения. Вы составляете новый план.",
        "translation": {
          "ka": "შენ სხვა ვარიანტს ითხოვ. ირა ახლომდებარე სასტუმროს ნომერს გაძლევს და ხვალ მოსვლის დროს გიდასტურებს. შენ ახალ გეგმას ადგენ.",
          "en": "You ask for another option. Ira gives you a nearby hotel’s number and confirms tomorrow’s check-in time. You make a new plan.",
          "ru": "Вы просите другой вариант. Ира даёт номер соседней гостиницы и подтверждает время завтрашнего заселения. Вы составляете новый план."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "Вы прекращаете проверку и уходите. Сегодня номер не получен. В следующий раз полезно внимательно проверить даты до поездки.",
        "translation": {
          "ka": "შენ შემოწმებას წყვეტ და მიდიხარ. დღეს ოთახი არ მიგიღია. გამგზავრებამდე შენახული თარიღების ყურადღებით შემოწმება სასარგებლო იქნება.",
          "en": "You stop checking and leave. You do not get a room tonight. Checking saved dates carefully before travel would help next time.",
          "ru": "Вы прекращаете проверку и уходите. Сегодня номер не получен. В следующий раз полезно внимательно проверить даты до поездки."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-zh-noodles",
    "target": "zh",
    "title": {
      "ka": "ლაფშის პატარა მაღაზია",
      "en": "The Little Noodle Shop",
      "ru": "Маленькая лапшичная"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "你走进一家面馆。服务员小林问：“你想吃什么？菜单在这里。”",
        "translation": {
          "ka": "შენ ლაფშის პატარა რესტორანში შედიხარ. მიმტანი სიაოლინი გეკითხება: „რისი ჭამა გსურთ? მენიუ აქაა.“",
          "en": "You enter a little noodle shop. Xiaolin asks, “What would you like to eat? The menu is here.”",
          "ru": "Вы заходите в небольшую лапшичную. Сяолинь спрашивает: «Что хотите поесть? Меню здесь»."
        },
        "choices": [
          {
            "text": "请帮我看一下菜单。",
            "translation": {
              "ka": "მენიუს გაგებაში დამეხმარეთ, გთხოვთ.",
              "en": "Please help me understand the menu.",
              "ru": "Помогите разобраться в меню, пожалуйста."
            },
            "next": "help"
          },
          {
            "text": "我要照片上的这个。",
            "translation": {
              "ka": "ფოტოზე რაცაა, ის მინდა.",
              "en": "I want this one in the photo.",
              "ru": "Хочу вот это на фотографии."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "小林说：“这碗面有牛肉。你吃肉吗？”",
        "translation": {
          "ka": "სიაოლინი ამბობს: „ლაფშის ამ პორციაში საქონლის ხორცია. ხორცს ჭამთ?“",
          "en": "Xiaolin says, “This bowl has beef. Do you eat meat?”",
          "ru": "Сяолинь говорит: «В этой лапше говядина. Вы едите мясо?»"
        },
        "choices": [
          {
            "text": "我不吃肉。有蔬菜面吗？",
            "translation": {
              "ka": "ხორცს არ ვჭამ. ბოსტნეულის ლაფში გაქვთ?",
              "en": "I do not eat meat. Do you have vegetable noodles?",
              "ru": "Я не ем мясо. Есть овощная лапша?"
            },
            "next": "plan"
          },
          {
            "text": "这个辣不辣？",
            "translation": {
              "ka": "ეს ცხარეა?",
              "en": "Is this spicy?",
              "ru": "Это острое?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "你指着一张照片说：“我要这个。”小林写下了牛肉面。",
        "translation": {
          "ka": "შენ ფოტოზე მიუთითებ: „ეს მინდა.“ სიაოლინი საქონლისხორციან ლაფშს იწერს.",
          "en": "You point to a photo and say, “I want this.” Xiaolin writes down beef noodles.",
          "ru": "Вы указываете на фото: «Хочу это». Сяолинь записывает лапшу с говядиной."
        },
        "choices": [
          {
            "text": "我先问一下里面有什么。",
            "translation": {
              "ka": "ჯერ ვიკითხავ, შიგნით რა არის.",
              "en": "I will ask what is in it first.",
              "ru": "Сначала спрошу, что внутри."
            },
            "next": "wait"
          },
          {
            "text": "这不是我想要的！",
            "translation": {
              "ka": "ეს ის არ არის, რაც მინდოდა!",
              "en": "This is not what I wanted!",
              "ru": "Это не то, что я хотел!"
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "你说明自己不吃肉。小林说：“我们有蔬菜面，汤里也没有肉。”",
        "translation": {
          "ka": "შენ უხსნი, რომ ხორცს არ ჭამ. სიაოლინი ამბობს: „ბოსტნეულის ლაფშიც გვაქვს და ბულიონშიც ხორცი არაა.“",
          "en": "You explain you do not eat meat. Xiaolin says, “We have vegetable noodles, with no meat in the soup either.”",
          "ru": "Вы объясняете, что не едите мясо. Сяолинь говорит: «Есть овощная лапша, и в бульоне тоже нет мяса»."
        },
        "choices": [
          {
            "text": "我要蔬菜面，不要辣。",
            "translation": {
              "ka": "ბოსტნეულის ლაფში მინდა, უცხარო.",
              "en": "Vegetable noodles, not spicy, please.",
              "ru": "Овощную лапшу, неострую, пожалуйста."
            },
            "next": "success"
          },
          {
            "text": "请问，可以做不辣的吗？",
            "translation": {
              "ka": "მითხარით, შეიძლება უცხაროდ მომზადება?",
              "en": "Could you make it not spicy?",
              "ru": "Подскажите, можно приготовить неострое?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "你问面辣不辣。小林说：“可以做不辣的。你要加鸡蛋吗？”",
        "translation": {
          "ka": "შენ კითხულობ, ცხარეა თუ არა ლაფში. სიაოლინი ამბობს: „შეგვიძლია უცხაროდ მოვამზადოთ. კვერცხის დამატება გინდათ?“",
          "en": "You ask whether the noodles are spicy. Xiaolin says, “We can make them mild. Would you like an egg?”",
          "ru": "Вы спрашиваете, острая ли лапша. Сяолинь говорит: «Можно приготовить неострую. Добавить яйцо?»"
        },
        "choices": [
          {
            "text": "不要鸡蛋，谢谢。就要不辣的蔬菜面。",
            "translation": {
              "ka": "კვერცხი არა, მადლობა. მხოლოდ უცხარო ბოსტნეულის ლაფში.",
              "en": "No egg, thank you. Just mild vegetable noodles.",
              "ru": "Без яйца, спасибо. Только неострую овощную лапшу."
            },
            "next": "success"
          },
          {
            "text": "我想换一个。请问多少钱？",
            "translation": {
              "ka": "შეცვლა მინდა. რა ეღირება?",
              "en": "I would like to change it. How much would it cost?",
              "ru": "Я хочу заменить заказ. Сколько это будет стоить?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "你等了几分钟，又看了看照片。你发现照片下面写着“牛肉”。",
        "translation": {
          "ka": "რამდენიმე წუთს ელოდები და ფოტოს ისევ უყურებ. შენ ამჩნევ, რომ ქვემოთ „საქონლის ხორცი“ წერია.",
          "en": "You wait a few minutes and look at the photo again. Under it you notice the word “beef.”",
          "ru": "Вы ждёте несколько минут и снова смотрите на фото. Под ним замечаете слово «говядина»."
        },
        "choices": [
          {
            "text": "请帮我选一个没有肉的。",
            "translation": {
              "ka": "ხორცის გარეშე ვარიანტის არჩევაში დამეხმარეთ.",
              "en": "Please help me choose one without meat.",
              "ru": "Помогите выбрать вариант без мяса."
            },
            "next": "help"
          },
          {
            "text": "可以改成蔬菜面吗？",
            "translation": {
              "ka": "შეიძლება ბოსტნეულის ლაფშით შეცვლა?",
              "en": "Could I change it to vegetable noodles?",
              "ru": "Можно заменить на овощную лапшу?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "面已经做好了。你说不想吃肉。小林说：“这碗已经做好了，我先问问能不能换。”",
        "translation": {
          "ka": "ლაფში უკვე მზადაა. შენ ამბობ, რომ ხორცი არ გინდა. სიაოლინი პასუხობს: „ეს პორცია უკვე მზადაა. ვიკითხავ, შეცვლა შეიძლება თუ არა.“",
          "en": "The noodles are ready. You say you do not want meat. Xiaolin says, “This bowl is already made. I will check whether we can change it.”",
          "ru": "Лапша готова. Вы говорите, что не хотите мясо. Сяолинь отвечает: «Эта порция уже готова. Я уточню, можно ли заменить»."
        },
        "choices": [
          {
            "text": "对不起，我没说清楚。可以换吗？",
            "translation": {
              "ka": "ბოდიში, ნათლად არ მითქვამს. შეცვლა შეიძლება?",
              "en": "Sorry, I was not clear. Could I change it?",
              "ru": "Извините, я не объяснил ясно. Можно заменить?"
            },
            "next": "alternate"
          },
          {
            "text": "不用了，请结账。",
            "translation": {
              "ka": "აღარ მინდა. ანგარიში, გთხოვთ.",
              "en": "No, thank you. The bill, please.",
              "ru": "Не нужно. Счёт, пожалуйста."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "你点了不辣的蔬菜面。吃完以后，你说：“很好吃，谢谢！请结账。”你吃得很开心。",
        "translation": {
          "ka": "შენ უცხარო ბოსტნეულის ლაფშს უკვეთავ. ჭამის შემდეგ ამბობ: „ძალიან გემრიელი იყო, მადლობა! ანგარიში, გთხოვთ.“ კმაყოფილი ხარ.",
          "en": "You order mild vegetable noodles. After eating, you say, “That was delicious, thank you! The bill, please.” You are happy with the meal.",
          "ru": "Вы заказываете неострую овощную лапшу. После еды говорите: «Очень вкусно, спасибо! Счёт, пожалуйста». Вы довольны обедом."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "你礼貌地询问能不能换。小林说明新订单的价格。你确认价格后，选择了适合自己的食物。",
        "translation": {
          "ka": "შენ თავაზიანად კითხულობ, შესაძლებელია თუ არა შეცვლა. სიაოლინი ახალი შეკვეთის ფასს გიხსნის. შენ ფასს აზუსტებ და შესაფერის საჭმელს ირჩევ.",
          "en": "You politely ask about a change. Xiaolin explains the new order’s price. You confirm it and choose food that suits you.",
          "ru": "Вы вежливо спрашиваете о замене. Сяолинь объясняет цену нового заказа. Вы уточняете её и выбираете подходящую еду."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "你付了已经确认的账单，然后离开。你没有吃午饭，但记住了：下次先问清楚。",
        "translation": {
          "ka": "შენ შეთანხმებულ ანგარიშს იხდი და მიდიხარ. სადილი ვერ შეჭამე, მაგრამ დაიმახსოვრე: შემდეგ ჯერზე ჯერ ყველაფერი გაარკვიე.",
          "en": "You pay the agreed bill and leave. You have not eaten lunch, but remember to check first next time.",
          "ru": "Вы оплачиваете согласованный счёт и уходите. Вы не пообедали, зато запомнили: в следующий раз сначала уточнить."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-zh-airport",
    "target": "zh",
    "title": {
      "ka": "რომელი გასასვლელი?",
      "en": "Which Gate?",
      "ru": "Какой выход?"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "你在机场等飞机。登机牌上写着A8，但广播太快，你没听清楚。旁边有一个服务台。",
        "translation": {
          "ka": "აეროპორტში ფრენას ელოდები. ბარათზე A8 წერია, მაგრამ განცხადება სწრაფი იყო და ვერ გაიგე. ახლოს საინფორმაციო მაგიდაა.",
          "en": "You are waiting at the airport. Your pass says A8, but the announcement was too fast to understand. There is a help desk nearby.",
          "ru": "Вы ждёте рейс в аэропорту. На талоне A8, но объявление прозвучало слишком быстро. Рядом справочная стойка."
        },
        "choices": [
          {
            "text": "请问，我的登机口在哪里？",
            "translation": {
              "ka": "მითხარით, ჩემი გასასვლელი სად არის?",
              "en": "Excuse me, where is my gate?",
              "ru": "Подскажите, где мой выход?"
            },
            "next": "help"
          },
          {
            "text": "我先去A8。",
            "translation": {
              "ka": "ჯერ A8-ზე წავალ.",
              "en": "I will go to A8 first.",
              "ru": "Сначала пойду к A8."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "工作人员问：“请问你的航班号是多少？我帮你查一下。”",
        "translation": {
          "ka": "თანამშრომელი გეკითხება: „თქვენი ფრენის ნომერი რა არის? შევამოწმებ.“",
          "en": "The staff member asks, “What is your flight number? I will check it for you.”",
          "ru": "Сотрудник спрашивает: «Какой номер вашего рейса? Я проверю»."
        },
        "choices": [
          {
            "text": "这是我的航班号，请帮我查一下。",
            "translation": {
              "ka": "ეს ჩემი ფრენის ნომერია. შეამოწმეთ, გთხოვთ.",
              "en": "Here is my flight number. Please check it.",
              "ru": "Вот номер моего рейса. Проверьте, пожалуйста."
            },
            "next": "plan"
          },
          {
            "text": "请您说慢一点。",
            "translation": {
              "ka": "ნელა თქვით, გთხოვთ.",
              "en": "Please speak more slowly.",
              "ru": "Говорите медленнее, пожалуйста."
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "你没有问，直接去了A8。那里很安静，屏幕上显示的是另一班飞机。",
        "translation": {
          "ka": "შენ უკითხავად პირდაპირ A8-სკენ მიდიხარ. იქ სიწყნარეა და ეკრანზე სხვა რეისი წერია.",
          "en": "Without asking, you go straight to A8. It is quiet, and the screen shows another flight.",
          "ru": "Не спрашивая, вы идёте к A8. Там тихо, а экран показывает другой рейс."
        },
        "choices": [
          {
            "text": "我再等一会儿。",
            "translation": {
              "ka": "ცოტას კიდევ დაველოდები.",
              "en": "I will wait a little longer.",
              "ru": "Я ещё немного подожду."
            },
            "next": "wait"
          },
          {
            "text": "登机牌没错，不用查了。",
            "translation": {
              "ka": "ბარათი სწორია. შემოწმება საჭირო არაა.",
              "en": "The pass is right. There is no need to check.",
              "ru": "Талон верный. Проверять не нужно."
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "工作人员查了航班，说：“现在是B3。往前走，然后向右转。”",
        "translation": {
          "ka": "თანამშრომელი რეისს ამოწმებს: „ახლა B3-ია. წინ იარეთ, მერე მარჯვნივ მოუხვიეთ.“",
          "en": "The staff member checks: “It is B3 now. Go straight, then turn right.”",
          "ru": "Сотрудник проверяет: «Теперь B3. Идите прямо, потом направо»."
        },
        "choices": [
          {
            "text": "我先核对屏幕，再去B3。",
            "translation": {
              "ka": "ჯერ ეკრანს შევამოწმებ, მერე B3-ზე წავალ.",
              "en": "I will check the screen, then go to B3.",
              "ru": "Сначала проверю экран, затем пойду к B3."
            },
            "next": "success"
          },
          {
            "text": "您能在地图上指一下吗？",
            "translation": {
              "ka": "რუკაზე შეგიძლიათ მაჩვენოთ?",
              "en": "Could you show me on the map?",
              "ru": "Покажете на карте?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "你请他慢一点说。他指着地图说：“先到书店，再右转。大约五分钟。”",
        "translation": {
          "ka": "შენ სთხოვ, ნელა გაიმეოროს. ის რუკაზე გიჩვენებს: „ჯერ წიგნის მაღაზიასთან მიდით, მერე მარჯვნივ. დაახლოებით ხუთი წუთია.“",
          "en": "You ask him to speak slowly. Pointing at a map, he says, “First reach the bookshop, then turn right. About five minutes.”",
          "ru": "Вы просите говорить медленнее. Он показывает на карте: «Сначала до книжного, затем направо. Около пяти минут»."
        },
        "choices": [
          {
            "text": "明白了，谢谢。我现在去B3。",
            "translation": {
              "ka": "გასაგებია, მადლობა. ახლა B3-ზე წავალ.",
              "en": "Understood, thank you. I will go to B3 now.",
              "ru": "Понятно, спасибо. Сейчас пойду к B3."
            },
            "next": "success"
          },
          {
            "text": "如果来不及了，我应该找谁？",
            "translation": {
              "ka": "თუ ვერ ვასწრებ, ვის მივმართო?",
              "en": "Who should I contact if I am too late?",
              "ru": "К кому обратиться, если я не успею?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "你在A8等了一会儿。还没有人来。你看看时间，离登机结束只有十分钟。",
        "translation": {
          "ka": "A8-თან ცოტა ხანს ელოდები. არავინ მოდის. დროს ამოწმებ: ჩასხდომის დასრულებამდე მხოლოდ ათი წუთია.",
          "en": "You wait at A8 for a while. Nobody arrives. You check the time: boarding closes in ten minutes.",
          "ru": "Вы немного ждёте у A8. Никто не приходит. Вы смотрите на часы: до конца посадки десять минут."
        },
        "choices": [
          {
            "text": "我回服务台确认一下。",
            "translation": {
              "ka": "მაგიდასთან დავბრუნდები და გადავამოწმებ.",
              "en": "I will return to the desk to confirm.",
              "ru": "Вернусь к стойке и уточню."
            },
            "next": "help"
          },
          {
            "text": "可能来不及了，请帮我联系航空公司。",
            "translation": {
              "ka": "შეიძლება ვერ ვასწრებ. ავიაკომპანიასთან დამაკავშირეთ, გთხოვთ.",
              "en": "I may be too late. Please help me contact the airline.",
              "ru": "Возможно, не успею. Помогите связаться с авиакомпанией."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "你说：“我的登机牌是A8，为什么要改？”工作人员回答：“登机口会变，请看最新的屏幕。”",
        "translation": {
          "ka": "შენ ამბობ: „ბარათზე A8 მაქვს. რატომ შეიცვალა?“ თანამშრომელი პასუხობს: „გასასვლელი შეიძლება შეიცვალოს. ბოლო ინფორმაციას ეკრანზე შეხედეთ.“",
          "en": "You say, “My pass says A8. Why change it?” The staff member replies, “Gates can change. Check the latest screen.”",
          "ru": "Вы говорите: «На талоне A8. Зачем менять?» Сотрудник отвечает: «Выход может измениться. Смотрите последнюю информацию на экране»."
        },
        "choices": [
          {
            "text": "好的，请告诉我下一步怎么办。",
            "translation": {
              "ka": "კარგი. მითხარით, შემდეგ რა გავაკეთო.",
              "en": "All right. Please tell me the next step.",
              "ru": "Хорошо. Подскажите, что делать дальше."
            },
            "next": "alternate"
          },
          {
            "text": "我就在A8等，不改了。",
            "translation": {
              "ka": "A8-ზე დაველოდები. არაფერს შევცვლი.",
              "en": "I will wait at A8. I will not change my plan.",
              "ru": "Я буду ждать у A8. Ничего менять не стану."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "你核对航班号，及时到了B3。工作人员检查登机牌，请你登机。你学会了主动确认信息。",
        "translation": {
          "ka": "შენ ფრენის ნომერს ადარებ და B3-ზე დროულად მიდიხარ. თანამშრომელი ბარათს ამოწმებს და გატარებს. ინფორმაციის გადამოწმება გამოგადგა.",
          "en": "You match the flight number and reach B3 on time. The agent checks your pass and lets you board. Checking information helped.",
          "ru": "Вы сверяете номер рейса и вовремя приходите к B3. Сотрудник проверяет талон и пропускает вас. Проверка информации помогла."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "你到服务台说明情况。工作人员说登机已经结束，但可以帮你联系航空公司。你询问下一步。",
        "translation": {
          "ka": "შენ საინფორმაციო მაგიდასთან სიტუაციას ხსნი. თანამშრომელი ამბობს, ჩასხდომა დასრულდა, მაგრამ ავიაკომპანიასთან დაკავშირებაში დაგეხმარება. შემდეგ ნაბიჯს აზუსტებ.",
          "en": "You explain the situation at the help desk. Boarding has closed, but the staff member can help contact the airline. You ask what to do next.",
          "ru": "Вы объясняете ситуацию в справочной. Посадка закончилась, но сотрудник поможет связаться с авиакомпанией. Вы уточняете следующий шаг."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "你继续在A8等。后来你发现飞机已经起飞。下次，你会及时看屏幕或询问工作人员。",
        "translation": {
          "ka": "შენ A8-ზე ლოდინს აგრძელებ. მერე იგებ, რომ თვითმფრინავი უკვე გაფრინდა. შემდეგ ჯერზე ეკრანს დროულად შეამოწმებ ან თანამშრომელს ჰკითხავ.",
          "en": "You keep waiting at A8. Later you learn the plane has departed. Next time you will check the screen or ask staff promptly.",
          "ru": "Вы продолжаете ждать у A8. Позже выясняется, что самолёт улетел. В следующий раз вовремя проверите экран или спросите сотрудника."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-es-shopping",
    "target": "es",
    "title": {
      "ka": "ლურჯი ქურთუკის ძებნა",
      "en": "The Search for a Blue Jacket",
      "ru": "В поисках синей куртки"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "Entras en una tienda pequeña. Buscas una chaqueta para un viaje. La dependienta, Lucía, te pregunta: «¿Te ayudo?»",
        "translation": {
          "ka": "პატარა მაღაზიაში შედიხარ. მგზავრობისთვის ქურთუკს ეძებ. კონსულტანტი ლუსია გეკითხება: „დაგეხმარო?“",
          "en": "You enter a small shop, looking for a jacket for a trip. Lucía, the assistant, asks, “Can I help?”",
          "ru": "Вы заходите в маленький магазин и ищете куртку для поездки. Консультант Лусия спрашивает: «Помочь?»"
        },
        "choices": [
          {
            "text": "Sí, busco una chaqueta para viajar.",
            "translation": {
              "ka": "დიახ, მგზავრობისთვის ქურთუკს ვეძებ.",
              "en": "Yes, I am looking for a travel jacket.",
              "ru": "Да, ищу куртку для поездки."
            },
            "next": "help"
          },
          {
            "text": "Me llevo esta, sin probarla.",
            "translation": {
              "ka": "ამას მოუსინჯავად წავიღებ.",
              "en": "I will take this without trying it on.",
              "ru": "Возьму эту без примерки."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "Lucía pregunta: «¿Qué talla y qué color buscas? Tenemos azul y verde».",
        "translation": {
          "ka": "ლუსია გეკითხება: „რა ზომასა და ფერს ეძებ? ლურჯი და მწვანე გვაქვს.“",
          "en": "Lucía asks, “What size and colour are you looking for? We have blue and green.”",
          "ru": "Лусия спрашивает: «Какой размер и цвет ищешь? Есть синий и зелёный»."
        },
        "choices": [
          {
            "text": "Busco una M azul. ¿Puedo probármela?",
            "translation": {
              "ka": "ლურჯ M-ს ვეძებ. შეიძლება მოვისინჯო?",
              "en": "I want a blue M. May I try it on?",
              "ru": "Ищу синюю M. Можно примерить?"
            },
            "next": "plan"
          },
          {
            "text": "¿Se puede cambiar después?",
            "translation": {
              "ka": "მოგვიანებით გამოცვლა შეიძლება?",
              "en": "Can I exchange it later?",
              "ru": "Можно потом обменять?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "Ves una chaqueta azul y la llevas a la caja sin probártela. La etiqueta dice «talla S».",
        "translation": {
          "ka": "ლურჯ ქურთუკს ხედავ და მოუსინჯავად სალაროსთან მიგაქვს. ეტიკეტზე „S ზომა“ წერია.",
          "en": "You take a blue jacket to the till without trying it on. The label says size S.",
          "ru": "Вы несёте синюю куртку к кассе, не примерив. На этикетке размер S."
        },
        "choices": [
          {
            "text": "Voy a comprobar la talla primero.",
            "translation": {
              "ka": "ჯერ ზომას შევამოწმებ.",
              "en": "I will check the size first.",
              "ru": "Сначала проверю размер."
            },
            "next": "wait"
          },
          {
            "text": "Pago ahora y me la pruebo después.",
            "translation": {
              "ka": "ახლა გადავიხდი და მერე მოვისინჯავ.",
              "en": "I will pay now and try it later.",
              "ru": "Сейчас заплачу, потом примерю."
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "Pides una talla M. Lucía te la trae y señala el probador. La chaqueta cuesta cuarenta euros.",
        "translation": {
          "ka": "M ზომას ითხოვ. ლუსია მოგიტანს და გასახდელს გაჩვენებს. ქურთუკი ორმოცი ევრო ღირს.",
          "en": "You ask for M. Lucía brings it and points to the fitting room. The jacket costs forty euros.",
          "ru": "Вы просите M. Лусия приносит куртку и показывает примерочную. Цена — сорок евро."
        },
        "choices": [
          {
            "text": "Me queda bien. La llevo.",
            "translation": {
              "ka": "კარგად მაქვს. ავიღებ.",
              "en": "It fits. I will take it.",
              "ru": "Подходит. Беру."
            },
            "next": "success"
          },
          {
            "text": "Antes de pagar, quiero saber las condiciones.",
            "translation": {
              "ka": "გადახდამდე პირობების გაგება მინდა.",
              "en": "I want to know the conditions before paying.",
              "ru": "До оплаты хочу узнать условия."
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "Preguntas por los cambios. Lucía explica: «Puedes cambiarla con el recibo y las etiquetas durante catorce días».",
        "translation": {
          "ka": "დაბრუნება-გაცვლაზე კითხულობ. ლუსია გიხსნის: „თოთხმეტი დღის განმავლობაში ქვითრითა და ეტიკეტებით გამოცვლა შეგიძლია.“",
          "en": "You ask about exchanges. Lucía explains, “You can exchange it within fourteen days with the receipt and tags.”",
          "ru": "Вы спрашиваете об обмене. Лусия объясняет: «Можно обменять в течение четырнадцати дней с чеком и бирками»."
        },
        "choices": [
          {
            "text": "Perfecto. Me pruebo la M y guardo el recibo.",
            "translation": {
              "ka": "კარგი. M-ს მოვისინჯავ და ქვითარს შევინახავ.",
              "en": "Great. I will try M and keep the receipt.",
              "ru": "Отлично. Примерю M и сохраню чек."
            },
            "next": "success"
          },
          {
            "text": "¿Hay otra talla o color disponible?",
            "translation": {
              "ka": "სხვა ზომა ან ფერი ხელმისაწვდომია?",
              "en": "Is another size or colour available?",
              "ru": "Есть другой размер или цвет?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "Antes de pagar, miras la talla otra vez. Normalmente llevas M, pero esta chaqueta es S.",
        "translation": {
          "ka": "გადახდამდე ზომას ისევ ამოწმებ. ჩვეულებრივ M გაცვია, ეს ქურთუკი კი S-ია.",
          "en": "Before paying, you check the size again. You usually wear M, but this jacket is S.",
          "ru": "Перед оплатой вы снова проверяете размер. Обычно вы носите M, а эта куртка — S."
        },
        "choices": [
          {
            "text": "Necesito ayuda con la talla M.",
            "translation": {
              "ka": "M ზომის შერჩევაში დახმარება მჭირდება.",
              "en": "I need help with size M.",
              "ru": "Нужна помощь с размером M."
            },
            "next": "help"
          },
          {
            "text": "¿Tiene la verde en talla M?",
            "translation": {
              "ka": "მწვანე M ზომა გაქვთ?",
              "en": "Do you have the green one in M?",
              "ru": "Есть зелёная M?"
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "Pagas y luego te pruebas la chaqueta. Te queda pequeña. Vuelves a la caja y pides ayuda.",
        "translation": {
          "ka": "იხდი და შემდეგ ქურთუკს ისინჯავ. პატარა გაქვს. სალაროსთან ბრუნდები და დახმარებას ითხოვ.",
          "en": "You pay and then try the jacket. It is too small. You return to the till and ask for help.",
          "ru": "Вы платите, затем примеряете куртку. Она мала. Вы возвращаетесь к кассе и просите помощи."
        },
        "choices": [
          {
            "text": "Me queda pequeña. ¿Qué opciones tengo?",
            "translation": {
              "ka": "პატარა მაქვს. რა ვარიანტები არსებობს?",
              "en": "It is too small. What options do I have?",
              "ru": "Мала. Какие есть варианты?"
            },
            "next": "alternate"
          },
          {
            "text": "No quiero preguntar más. Me voy.",
            "translation": {
              "ka": "მეტის კითხვა აღარ მინდა. მივდივარ.",
              "en": "I do not want to ask more. I am leaving.",
              "ru": "Больше спрашивать не хочу. Ухожу."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "Te pruebas la talla M y te queda bien. Pagas, guardas el recibo y sales con una chaqueta adecuada para el viaje.",
        "translation": {
          "ka": "M ზომას ისინჯავ და კარგად გაქვს. იხდი, ქვითარს ინახავ და მგზავრობისთვის შესაფერისი ქურთუკით გამოდიხარ.",
          "en": "You try M and it fits. You pay, keep the receipt and leave with a suitable jacket for your trip.",
          "ru": "Вы примеряете M, она подходит. Вы платите, сохраняете чек и уходите с подходящей курткой."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "Preguntas por otra talla. No queda azul en M, pero hay verde. Confirmas las condiciones y eliges la verde sin prisa.",
        "translation": {
          "ka": "სხვა ზომას კითხულობ. ლურჯი M აღარ არის, მაგრამ მწვანე აქვთ. პირობებს აზუსტებ და მშვიდად მწვანეს ირჩევ.",
          "en": "You ask about another size. There is no blue M left, but green is available. You check the conditions and choose green calmly.",
          "ru": "Вы спрашиваете другой размер. Синей M нет, но есть зелёная. Вы уточняете условия и спокойно выбираете зелёную."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "Decides no seguir preguntando y te vas con la chaqueta pequeña. Antes de otro viaje, tendrás que buscar una solución.",
        "translation": {
          "ka": "კითხვების გაგრძელებას აღარ აპირებ და პატარა ქურთუკით მიდიხარ. მგზავრობამდე სხვა გამოსავლის პოვნა დაგჭირდება.",
          "en": "You stop asking and leave with the small jacket. Before the trip, you will need another solution.",
          "ru": "Вы прекращаете спрашивать и уходите с маленькой курткой. До поездки придётся искать другое решение."
        },
        "choices": [],
        "ending": true
      }
    }
  },
  {
    "id": "story-es-city",
    "target": "es",
    "title": {
      "ka": "მუზეუმამდე როგორ მივიდე?",
      "en": "The Way to the Museum",
      "ru": "Как добраться до музея?"
    },
    "start": "start",
    "nodes": {
      "start": {
        "scene": "Estás en una plaza y quieres visitar un museo. Tu mapa no carga. Hay una oficina de información al otro lado de la calle.",
        "translation": {
          "ka": "მოედანზე ხარ და მუზეუმის მონახულება გინდა. რუკა არ იტვირთება. ქუჩის მეორე მხარეს საინფორმაციო ოფისია.",
          "en": "You are in a square and want to visit a museum. Your map will not load. There is a tourist office across the street.",
          "ru": "Вы на площади и хотите посетить музей. Карта не загружается. Через дорогу туристический офис."
        },
        "choices": [
          {
            "text": "¿Me puede indicar cómo llegar al museo?",
            "translation": {
              "ka": "მუზეუმამდე გზას ხომ ვერ მიმასწავლით?",
              "en": "Could you tell me how to reach the museum?",
              "ru": "Не подскажете дорогу к музею?"
            },
            "next": "help"
          },
          {
            "text": "Subo a este autobús; seguro que sirve.",
            "translation": {
              "ka": "ამ ავტობუსში ავალ, ალბათ გამომადგება.",
              "en": "I will take this bus; it must be fine.",
              "ru": "Сяду в этот автобус, наверняка подойдёт."
            },
            "next": "rush"
          }
        ],
        "ending": false
      },
      "help": {
        "scene": "En la oficina, Pablo pregunta: «¿Quieres ir andando o en autobús? Andando son veinte minutos».",
        "translation": {
          "ka": "ოფისში პაბლო გეკითხება: „ფეხით გინდა წასვლა თუ ავტობუსით? ფეხით ოცი წუთია.“",
          "en": "At the office, Pablo asks, “Would you like to walk or take a bus? Walking takes twenty minutes.”",
          "ru": "В офисе Пабло спрашивает: «Пешком или на автобусе? Пешком двадцать минут»."
        },
        "choices": [
          {
            "text": "Prefiero ir andando. ¿Por dónde voy?",
            "translation": {
              "ka": "ფეხით მირჩევნია. საით წავიდე?",
              "en": "I would rather walk. Which way should I go?",
              "ru": "Предпочитаю пешком. Куда идти?"
            },
            "next": "plan"
          },
          {
            "text": "¿A qué hora cierra? ¿Qué autobús llega allí?",
            "translation": {
              "ka": "რომელ საათზე იკეტება? რომელი ავტობუსი მიდის?",
              "en": "When does it close? Which bus goes there?",
              "ru": "Во сколько закрывается? Какой автобус туда идёт?"
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "rush": {
        "scene": "Ves un autobús y subes sin preguntar. El conductor te dice: «Este va al hospital».",
        "translation": {
          "ka": "ავტობუსს ხედავ და უკითხავად ადიხარ. მძღოლი გეუბნება: „ეს საავადმყოფოსთან მიდის.“",
          "en": "You see a bus and board without asking. The driver says, “This one goes to the hospital.”",
          "ru": "Вы видите автобус и садитесь, не спросив. Водитель говорит: «Этот идёт к больнице»."
        },
        "choices": [
          {
            "text": "Voy a bajar y comprobar la parada correcta.",
            "translation": {
              "ka": "ჩავალ და სწორ გაჩერებას შევამოწმებ.",
              "en": "I will get off and find the correct stop.",
              "ru": "Выйду и проверю нужную остановку."
            },
            "next": "wait"
          },
          {
            "text": "Me quedo; quizá pase por el museo.",
            "translation": {
              "ka": "დავრჩები, იქნებ მუზეუმთანაც გაიაროს.",
              "en": "I will stay; perhaps it passes the museum too.",
              "ru": "Останусь, может, пройдёт и мимо музея."
            },
            "next": "problem"
          }
        ],
        "ending": false
      },
      "plan": {
        "scene": "Pablo señala el camino: «Sigue recto hasta el puente y gira a la izquierda. El museo está junto al parque».",
        "translation": {
          "ka": "პაბლო გზას გიჩვენებს: „ხიდამდე პირდაპირ იარე და მარცხნივ მოუხვიე. მუზეუმი პარკის გვერდითაა.“",
          "en": "Pablo points out the route: “Go straight to the bridge and turn left. The museum is beside the park.”",
          "ru": "Пабло показывает путь: «Прямо до моста, затем налево. Музей рядом с парком»."
        },
        "choices": [
          {
            "text": "Entendido: recto hasta el puente y luego a la izquierda.",
            "translation": {
              "ka": "გასაგებია: ხიდამდე პირდაპირ, მერე მარცხნივ.",
              "en": "Understood: straight to the bridge, then left.",
              "ru": "Понятно: прямо до моста, затем налево."
            },
            "next": "success"
          },
          {
            "text": "Antes de salir, quiero confirmar el horario.",
            "translation": {
              "ka": "წასვლამდე სამუშაო საათები მინდა გადავამოწმო.",
              "en": "Before leaving, I want to confirm the hours.",
              "ru": "До выхода хочу уточнить часы работы."
            },
            "next": "detail"
          }
        ],
        "ending": false
      },
      "detail": {
        "scene": "Preguntas por el horario. Pablo responde: «Hoy cierra a las cinco. El autobús doce para frente al museo».",
        "translation": {
          "ka": "სამუშაო საათებს კითხულობ. პაბლო პასუხობს: „დღეს ხუთზე იკეტება. თორმეტი ნომერი ავტობუსი მუზეუმის წინ ჩერდება.“",
          "en": "You ask about opening hours. Pablo answers, “It closes at five today. Bus twelve stops in front of the museum.”",
          "ru": "Вы спрашиваете часы работы. Пабло отвечает: «Сегодня закрывается в пять. Двенадцатый автобус останавливается перед музеем»."
        },
        "choices": [
          {
            "text": "Tomaré el doce y confirmaré la parada con el conductor.",
            "translation": {
              "ka": "თორმეტში ავალ და გაჩერებას მძღოლთან შევამოწმებ.",
              "en": "I will take the twelve and confirm the stop with the driver.",
              "ru": "Сяду на двенадцатый и уточню остановку у водителя."
            },
            "next": "success"
          },
          {
            "text": "Si ya es tarde, visitaré el parque hoy.",
            "translation": {
              "ka": "თუ უკვე გვიანაა, დღეს პარკს ვნახავ.",
              "en": "If it is too late, I will visit the park today.",
              "ru": "Если уже поздно, сегодня посмотрю парк."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "wait": {
        "scene": "Bajas antes de que salga el autobús y miras el cartel. La parada del doce está enfrente. Puedes preguntar antes de subir.",
        "translation": {
          "ka": "ავტობუსის გასვლამდე ჩამოდიხარ და აბრას უყურებ. თორმეტის გაჩერება მოპირდაპირე მხარესაა. ასვლამდე შეგიძლია იკითხო.",
          "en": "You get off before the bus leaves and read the sign. The twelve stops opposite. You can ask before boarding.",
          "ru": "Вы выходите до отправления и читаете табличку. Остановка двенадцатого напротив. Перед посадкой можно спросить."
        },
        "choices": [
          {
            "text": "Voy a volver a información para confirmar.",
            "translation": {
              "ka": "ინფორმაციასთან დავბრუნდები გადასამოწმებლად.",
              "en": "I will return to information to confirm.",
              "ru": "Вернусь в справочную и уточню."
            },
            "next": "help"
          },
          {
            "text": "Preguntaré cómo volver al centro.",
            "translation": {
              "ka": "ცენტრში დაბრუნების გზას ვიკითხავ.",
              "en": "I will ask how to get back to the centre.",
              "ru": "Спрошу, как вернуться в центр."
            },
            "next": "alternate"
          }
        ],
        "ending": false
      },
      "problem": {
        "scene": "Te quedas en el autobús. Después de varias paradas, ves el hospital. Estás lejos del museo y empieza a llover.",
        "translation": {
          "ka": "ავტობუსში რჩები. რამდენიმე გაჩერების შემდეგ საავადმყოფოს ხედავ. მუზეუმიდან შორს ხარ და წვიმას იწყებს.",
          "en": "You stay on the bus. After several stops you see the hospital. You are far from the museum and it starts raining.",
          "ru": "Вы остаётесь в автобусе. Через несколько остановок видите больницу. До музея далеко, начинается дождь."
        },
        "choices": [
          {
            "text": "¿Cómo vuelvo al centro? Puedo ir mañana.",
            "translation": {
              "ka": "ცენტრში როგორ დავბრუნდე? ხვალ შემიძლია წასვლა.",
              "en": "How do I get back to the centre? I can go tomorrow.",
              "ru": "Как вернуться в центр? Могу пойти завтра."
            },
            "next": "alternate"
          },
          {
            "text": "No pregunto más. Seguiré andando.",
            "translation": {
              "ka": "მეტს არ ვიკითხავ. ფეხით გავაგრძელებ.",
              "en": "I will not ask again. I will keep walking.",
              "ru": "Больше не спрошу. Продолжу пешком."
            },
            "next": "exit"
          }
        ],
        "ending": false
      },
      "success": {
        "scene": "Confirmas la ruta y llegas antes de las cinco. Compras una entrada y visitas el museo. Pedir indicaciones claras te ayudó.",
        "translation": {
          "ka": "მარშრუტს აზუსტებ და ხუთამდე მიდიხარ. ბილეთს ყიდულობ და მუზეუმს ათვალიერებ. გასაგები მიმართულებების თხოვნა გამოგადგა.",
          "en": "You confirm the route and arrive before five. You buy a ticket and visit the museum. Asking for clear directions helped.",
          "ru": "Вы уточняете маршрут и приходите до пяти. Покупаете билет и осматриваете музей. Чёткие указания помогли."
        },
        "choices": [],
        "ending": true
      },
      "alternate": {
        "scene": "Preguntas cómo volver al centro. El museo ya va a cerrar, así que eliges visitar el parque y volver al museo mañana.",
        "translation": {
          "ka": "ცენტრში დაბრუნების გზას კითხულობ. მუზეუმი მალე იკეტება, ამიტომ პარკში გასეირნებას ირჩევ და მუზეუმში ხვალ მიხვალ.",
          "en": "You ask how to return to the centre. The museum is about to close, so you visit the park and plan the museum for tomorrow.",
          "ru": "Вы спрашиваете путь в центр. Музей скоро закрывается, поэтому выбираете парк, а музей оставляете на завтра."
        },
        "choices": [],
        "ending": true
      },
      "exit": {
        "scene": "No preguntas y sigues caminando sin mapa. Cuando llegas al museo, está cerrado. Tendrás que intentarlo otro día.",
        "translation": {
          "ka": "არ კითხულობ და ურუკოდ აგრძელებ სიარულს. მუზეუმთან მისვლისას ის დაკეტილია. სხვა დღეს მოგიწევს ცდა.",
          "en": "You do not ask and keep walking without a map. When you reach the museum, it is closed. You will need to try another day.",
          "ru": "Вы не спрашиваете и идёте без карты. Когда доходите до музея, он закрыт. Придётся попробовать в другой день."
        },
        "choices": [],
        "ending": true
      }
    }
  }
];
