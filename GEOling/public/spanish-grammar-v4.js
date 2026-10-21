// Original Spanish grammar instruction and meaning-disambiguated practice.
export const spanishGrammar = [
  {
    "id": "grammar-es-a0-1",
    "level": "A0",
    "title": {
      "ka": "ნაცვალსახელები და ser",
      "en": "Subject pronouns and ser",
      "ru": "Личные местоимения и ser"
    },
    "explanation": {
      "ka": "ესპანური ზმნა პირს გამოხატავს, ამიტომ ნაცვალსახელი ხშირად გამოტოვებულია. yo soy და soy ორივე „მე ვარ“-ს ნიშნავს; ნაცვალსახელი განსაკუთრებით სასარგებლოა კონტრასტისას. ser ხშირად ვინაობას, პროფესიასა და წარმოშობას აღნიშნავს. tú არაფორმალური ერთობითია, usted თავაზიანი მიმართვაა და მესამე პირის ფორმას იღებს. nosotros ჯგუფში მოსაუბრესაც მოიცავს. vosotros ესპანეთში არაფორმალური მრავლობითია; ლათინურ ამერიკაში ustedes ჩვეულებრივ ორივე სტილში გამოიყენება. პროფესიის უბრალო დასახელება ser-ის შემდეგ ხშირად არტიკლის გარეშეა. წარმოშობას de უკავშირებს; ser-ის ნაცვლად estar აქ არ გამოიყენება.",
      "en": "Spanish verbs identify the person, so subject pronouns are often omitted. Yo soy and soy both mean I am; an explicit pronoun is particularly useful for contrast. Ser commonly identifies people, professions and origin. Tú is informal singular; polite usted takes a third-person verb. Nosotros includes the speaker. Vosotros is informal plural in Spain; in Latin America ustedes normally serves both registers. A plain profession after ser commonly has no article. Origin takes de; do not replace ser with estar here.",
      "ru": "Испанский глагол выражает лицо, поэтому подлежащее часто опускается. Yo soy и soy означают «я есть»; местоимение особенно полезно для противопоставления. Ser часто обозначает личность, профессию и происхождение. Tú — неофициальное единственное, вежливое usted требует третьего лица. Nosotros включает говорящего. Vosotros — неофициальное множественное в Испании; в Латинской Америке ustedes обычно используется в обоих регистрах. Простое название профессии после ser обычно без артикля. Происхождение вводится через de; estar здесь не заменяет ser."
    },
    "rules": [
      {
        "form": "yo soy / tú eres / él, ella, usted es",
        "detail": {
          "ka": "ser ხშირად ვინაობას, პროფესიასა და წარმოშობას აღნიშნავს. tú არაფორმალური ერთობითია, usted თავაზიანი მიმართვაა და მესამე პირის ფორმას იღებს.",
          "en": "Ser commonly identifies people, professions and origin. Tú is informal singular; polite usted takes a third-person verb.",
          "ru": "Ser часто обозначает личность, профессию и происхождение. Tú — неофициальное единственное, вежливое usted требует третьего лица."
        }
      },
      {
        "form": "nosotros somos / vosotros sois / ellos, ustedes son",
        "detail": {
          "ka": "nosotros ჯგუფში მოსაუბრესაც მოიცავს. vosotros ესპანეთში არაფორმალური მრავლობითია; ლათინურ ამერიკაში ustedes ჩვეულებრივ ორივე სტილში გამოიყენება.",
          "en": "Nosotros includes the speaker. Vosotros is informal plural in Spain; in Latin America ustedes normally serves both registers.",
          "ru": "Nosotros включает говорящего. Vosotros — неофициальное множественное в Испании; в Латинской Америке ustedes обычно используется в обоих регистрах."
        }
      },
      {
        "form": "Soy médica. / Es de Georgia.",
        "detail": {
          "ka": "პროფესიის უბრალო დასახელება ser-ის შემდეგ ხშირად არტიკლის გარეშეა. წარმოშობას de უკავშირებს; ser-ის ნაცვლად estar აქ არ გამოიყენება.",
          "en": "A plain profession after ser commonly has no article. Origin takes de; do not replace ser with estar here.",
          "ru": "Простое название профессии после ser обычно без артикля. Происхождение вводится через de; estar здесь не заменяет ser."
        }
      }
    ],
    "examples": [
      {
        "es": "Yo soy Ana.",
        "ka": "მე ანა ვარ.",
        "en": "I am Ana.",
        "ru": "Я Анна."
      },
      {
        "es": "Tú eres estudiante.",
        "ka": "შენ სტუდენტი ხარ.",
        "en": "You are a student, informally.",
        "ru": "Ты студент."
      },
      {
        "es": "Nosotros somos de Georgia.",
        "ka": "ჩვენ საქართველოდან ვართ.",
        "en": "We are from Georgia.",
        "ru": "Мы из Грузии."
      },
      {
        "es": "Usted es médico.",
        "ka": "თქვენ ექიმი ხართ, თავაზიანად.",
        "en": "You are a doctor, politely.",
        "ru": "Вы врач, вежливое обращение."
      }
    ],
    "pitfalls": {
      "ka": "usted-ს ფორმალური მიმართვის მიუხედავად eres არ შეუთანხმო: usted es. él ნაცვალსახელს მახვილი აქვს, el არტიკლს — არა.",
      "en": "Despite addressing the listener, usted takes es, not eres. Pronoun él has an accent; article el does not.",
      "ru": "Хотя usted обращено к слушателю, нужна форма es, не eres. Местоимение él пишется с ударением, артикль el — без."
    },
    "quiz": [
      {
        "id": "grammar-es-a0-1-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ანა ვარ.",
          "en": "Complete the sentence to express: I am Ana.",
          "ru": "Заполните предложение со значением: Я Анна."
        },
        "sentence": "Yo ____ Ana.",
        "answer": "soy",
        "options": [
          "soy",
          "eres",
          "somos"
        ]
      },
      {
        "id": "grammar-es-a0-1-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მე ანა ვარ.",
          "en": "Choose the complete correct sentence expressing: I am Ana.",
          "ru": "Выберите полное правильное предложение со значением: Я Анна."
        },
        "sentence": "____",
        "answer": "Yo soy Ana.",
        "options": [
          "Yo soy Ana.",
          "Yo eres Ana.",
          "Yo somos Ana."
        ]
      },
      {
        "id": "grammar-es-a0-1-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მე ანა ვარ.",
          "en": "Correct the learner error. Intended meaning: I am Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я Анна."
        },
        "sentence": "Yo eres Ana. → ____",
        "answer": "Yo soy Ana.",
        "options": [
          "Yo soy Ana.",
          "Yo somos Ana.",
          "Yo eres Ana."
        ]
      },
      {
        "id": "grammar-es-a0-1-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შენ სტუდენტი ხარ.",
          "en": "Complete the sentence to express: You are a student, informally.",
          "ru": "Заполните предложение со значением: Ты студент."
        },
        "sentence": "Tú ____ estudiante.",
        "answer": "eres",
        "options": [
          "eres",
          "es",
          "son"
        ]
      },
      {
        "id": "grammar-es-a0-1-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შენ სტუდენტი ხარ.",
          "en": "Choose the complete correct sentence expressing: You are a student, informally.",
          "ru": "Выберите полное правильное предложение со значением: Ты студент."
        },
        "sentence": "____",
        "answer": "Tú eres estudiante.",
        "options": [
          "Tú eres estudiante.",
          "Tú es estudiante.",
          "Tú son estudiante."
        ]
      },
      {
        "id": "grammar-es-a0-1-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შენ სტუდენტი ხარ.",
          "en": "Correct the learner error. Intended meaning: You are a student, informally.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Ты студент."
        },
        "sentence": "Tú es estudiante. → ____",
        "answer": "Tú eres estudiante.",
        "options": [
          "Tú eres estudiante.",
          "Tú son estudiante.",
          "Tú es estudiante."
        ]
      },
      {
        "id": "grammar-es-a0-1-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ საქართველოდან ვართ.",
          "en": "Complete the sentence to express: We are from Georgia.",
          "ru": "Заполните предложение со значением: Мы из Грузии."
        },
        "sentence": "Nosotros ____ de Georgia.",
        "answer": "somos",
        "options": [
          "somos",
          "soy",
          "son"
        ]
      },
      {
        "id": "grammar-es-a0-1-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ საქართველოდან ვართ.",
          "en": "Choose the complete correct sentence expressing: We are from Georgia.",
          "ru": "Выберите полное правильное предложение со значением: Мы из Грузии."
        },
        "sentence": "____",
        "answer": "Nosotros somos de Georgia.",
        "options": [
          "Nosotros somos de Georgia.",
          "Nosotros soy de Georgia.",
          "Nosotros son de Georgia."
        ]
      },
      {
        "id": "grammar-es-a0-1-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ საქართველოდან ვართ.",
          "en": "Correct the learner error. Intended meaning: We are from Georgia.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мы из Грузии."
        },
        "sentence": "Nosotros soy de Georgia. → ____",
        "answer": "Nosotros somos de Georgia.",
        "options": [
          "Nosotros somos de Georgia.",
          "Nosotros son de Georgia.",
          "Nosotros soy de Georgia."
        ]
      },
      {
        "id": "grammar-es-a0-1-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: თქვენ ექიმი ხართ, თავაზიანად.",
          "en": "Complete the sentence to express: You are a doctor, politely.",
          "ru": "Заполните предложение со значением: Вы врач, вежливое обращение."
        },
        "sentence": "Usted ____ médico.",
        "answer": "es",
        "options": [
          "es",
          "eres",
          "sois"
        ]
      },
      {
        "id": "grammar-es-a0-1-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: თქვენ ექიმი ხართ, თავაზიანად.",
          "en": "Choose the complete correct sentence expressing: You are a doctor, politely.",
          "ru": "Выберите полное правильное предложение со значением: Вы врач, вежливое обращение."
        },
        "sentence": "____",
        "answer": "Usted es médico.",
        "options": [
          "Usted es médico.",
          "Usted eres médico.",
          "Usted sois médico."
        ]
      },
      {
        "id": "grammar-es-a0-1-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: თქვენ ექიმი ხართ, თავაზიანად.",
          "en": "Correct the learner error. Intended meaning: You are a doctor, politely.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Вы врач, вежливое обращение."
        },
        "sentence": "Usted eres médico. → ____",
        "answer": "Usted es médico.",
        "options": [
          "Usted es médico.",
          "Usted sois médico.",
          "Usted eres médico."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a0-2",
    "level": "A0",
    "title": {
      "ka": "სქესი და არტიკლები",
      "en": "Gender and articles",
      "ru": "Род и артикли"
    },
    "explanation": {
      "ka": "არსებითი სახელის სქესი სიტყვასთან ერთად ისწავლე. -o ხშირად მამრობითია, -a ხშირად მდედრობითი, მაგრამ la mano და el día გამონაკლისებია. განსაზღვრული არტიკლი კონკრეტულ ან ცნობილ საგანთანაა. el მამრობითი ერთობითია, la — მდედრობითი; ქართული თარგმანი არტიკლს ყოველთვის ცალკე არ გამოხატავს. განუსაზღვრელი არტიკლი ახალ ერთეულს წარადგენს. una libro არასწორია, რადგან არტიკლი წიგნის გრამატიკულ სქესს უნდა ეთანხმებოდეს. მრავლობითში არტიკლიც იცვლება. los და las განსაზღვრულია; unos და unas განუსაზღვრელ მრავლობითს აღნიშნავს, ხშირად „რამდენიმე“-ს მნიშვნელობით.",
      "en": "Learn a noun’s gender with the word. -O is often masculine and -a feminine, but la mano and el día are exceptions. A definite article marks a particular or known referent. El is masculine singular, la feminine; Georgian does not always translate it separately. An indefinite article introduces one new item. Una libro is incorrect because the article must agree with the noun’s grammatical gender. The article also changes in plurals. Los and las are definite; unos and unas mark an indefinite plural, often meaning some.",
      "ru": "Учите род вместе со словом. -O часто указывает на мужской, -a на женский род, но la mano и el día — исключения. Определённый артикль обозначает конкретный или известный предмет. El — мужское единственное, la — женское; грузинский не всегда передаёт артикль отдельно. Неопределённый артикль вводит один новый предмет. Una libro неверно: артикль согласуется с грамматическим родом существительного. Во множественном числе артикль тоже меняется. Los и las — определённые; unos и unas — неопределённые, часто со значением «несколько»."
    },
    "rules": [
      {
        "form": "el libro / la mesa",
        "detail": {
          "ka": "განსაზღვრული არტიკლი კონკრეტულ ან ცნობილ საგანთანაა. el მამრობითი ერთობითია, la — მდედრობითი; ქართული თარგმანი არტიკლს ყოველთვის ცალკე არ გამოხატავს.",
          "en": "A definite article marks a particular or known referent. El is masculine singular, la feminine; Georgian does not always translate it separately.",
          "ru": "Определённый артикль обозначает конкретный или известный предмет. El — мужское единственное, la — женское; грузинский не всегда передаёт артикль отдельно."
        }
      },
      {
        "form": "un libro / una mesa",
        "detail": {
          "ka": "განუსაზღვრელი არტიკლი ახალ ერთეულს წარადგენს. una libro არასწორია, რადგან არტიკლი წიგნის გრამატიკულ სქესს უნდა ეთანხმებოდეს.",
          "en": "An indefinite article introduces one new item. Una libro is incorrect because the article must agree with the noun’s grammatical gender.",
          "ru": "Неопределённый артикль вводит один новый предмет. Una libro неверно: артикль согласуется с грамматическим родом существительного."
        }
      },
      {
        "form": "los libros / las mesas",
        "detail": {
          "ka": "მრავლობითში არტიკლიც იცვლება. los და las განსაზღვრულია; unos და unas განუსაზღვრელ მრავლობითს აღნიშნავს, ხშირად „რამდენიმე“-ს მნიშვნელობით.",
          "en": "The article also changes in plurals. Los and las are definite; unos and unas mark an indefinite plural, often meaning some.",
          "ru": "Во множественном числе артикль тоже меняется. Los и las — определённые; unos и unas — неопределённые, часто со значением «несколько»."
        }
      }
    ],
    "examples": [
      {
        "es": "Necesito un libro.",
        "ka": "ერთი წიგნი მჭირდება.",
        "en": "I need a book.",
        "ru": "Мне нужна книга."
      },
      {
        "es": "La mesa es grande.",
        "ka": "მაგიდა დიდია.",
        "en": "The table is big.",
        "ru": "Стол большой."
      },
      {
        "es": "Los libros están aquí.",
        "ka": "წიგნები აქ არის.",
        "en": "The books are here.",
        "ru": "Книги здесь."
      },
      {
        "es": "Tengo una pregunta.",
        "ka": "ერთი კითხვა მაქვს.",
        "en": "I have a question.",
        "ru": "У меня вопрос."
      }
    ],
    "pitfalls": {
      "ka": "სიტყვის დაბოლოება მხოლოდ მინიშნებაა და არა უგამონაკლისო წესი. არტიკლი მოსაუბრის სქესს კი არა, სახელის სქესს ეთანხმება.",
      "en": "An ending is a clue, not an exceptionless rule. The article agrees with the noun, not with the speaker’s gender.",
      "ru": "Окончание — подсказка, не правило без исключений. Артикль согласуется с существительным, а не с родом говорящего."
    },
    "quiz": [
      {
        "id": "grammar-es-a0-2-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ერთი წიგნი მჭირდება.",
          "en": "Complete the sentence to express: I need a book.",
          "ru": "Заполните предложение со значением: Мне нужна книга."
        },
        "sentence": "Necesito ____ libro.",
        "answer": "un",
        "options": [
          "un",
          "una",
          "unos"
        ]
      },
      {
        "id": "grammar-es-a0-2-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ერთი წიგნი მჭირდება.",
          "en": "Choose the complete correct sentence expressing: I need a book.",
          "ru": "Выберите полное правильное предложение со значением: Мне нужна книга."
        },
        "sentence": "____",
        "answer": "Necesito un libro.",
        "options": [
          "Necesito un libro.",
          "Necesito una libro.",
          "Necesito unos libro."
        ]
      },
      {
        "id": "grammar-es-a0-2-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ერთი წიგნი მჭირდება.",
          "en": "Correct the learner error. Intended meaning: I need a book.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мне нужна книга."
        },
        "sentence": "Necesito una libro. → ____",
        "answer": "Necesito un libro.",
        "options": [
          "Necesito un libro.",
          "Necesito unos libro.",
          "Necesito una libro."
        ]
      },
      {
        "id": "grammar-es-a0-2-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მაგიდა დიდია.",
          "en": "Complete the sentence to express: The table is big.",
          "ru": "Заполните предложение со значением: Стол большой."
        },
        "sentence": "____ mesa es grande.",
        "answer": "La",
        "options": [
          "La",
          "El",
          "Los"
        ]
      },
      {
        "id": "grammar-es-a0-2-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მაგიდა დიდია.",
          "en": "Choose the complete correct sentence expressing: The table is big.",
          "ru": "Выберите полное правильное предложение со значением: Стол большой."
        },
        "sentence": "____",
        "answer": "La mesa es grande.",
        "options": [
          "La mesa es grande.",
          "El mesa es grande.",
          "Los mesa es grande."
        ]
      },
      {
        "id": "grammar-es-a0-2-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მაგიდა დიდია.",
          "en": "Correct the learner error. Intended meaning: The table is big.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Стол большой."
        },
        "sentence": "El mesa es grande. → ____",
        "answer": "La mesa es grande.",
        "options": [
          "La mesa es grande.",
          "Los mesa es grande.",
          "El mesa es grande."
        ]
      },
      {
        "id": "grammar-es-a0-2-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნები აქ არის.",
          "en": "Complete the sentence to express: The books are here.",
          "ru": "Заполните предложение со значением: Книги здесь."
        },
        "sentence": "____ libros están aquí.",
        "answer": "Los",
        "options": [
          "Los",
          "Las",
          "El"
        ]
      },
      {
        "id": "grammar-es-a0-2-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წიგნები აქ არის.",
          "en": "Choose the complete correct sentence expressing: The books are here.",
          "ru": "Выберите полное правильное предложение со значением: Книги здесь."
        },
        "sentence": "____",
        "answer": "Los libros están aquí.",
        "options": [
          "Los libros están aquí.",
          "Las libros están aquí.",
          "El libros están aquí."
        ]
      },
      {
        "id": "grammar-es-a0-2-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წიგნები აქ არის.",
          "en": "Correct the learner error. Intended meaning: The books are here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Книги здесь."
        },
        "sentence": "Las libros están aquí. → ____",
        "answer": "Los libros están aquí.",
        "options": [
          "Los libros están aquí.",
          "El libros están aquí.",
          "Las libros están aquí."
        ]
      },
      {
        "id": "grammar-es-a0-2-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ერთი კითხვა მაქვს.",
          "en": "Complete the sentence to express: I have a question.",
          "ru": "Заполните предложение со значением: У меня вопрос."
        },
        "sentence": "Tengo ____ pregunta.",
        "answer": "una",
        "options": [
          "una",
          "un",
          "unas"
        ]
      },
      {
        "id": "grammar-es-a0-2-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ერთი კითხვა მაქვს.",
          "en": "Choose the complete correct sentence expressing: I have a question.",
          "ru": "Выберите полное правильное предложение со значением: У меня вопрос."
        },
        "sentence": "____",
        "answer": "Tengo una pregunta.",
        "options": [
          "Tengo una pregunta.",
          "Tengo un pregunta.",
          "Tengo unas pregunta."
        ]
      },
      {
        "id": "grammar-es-a0-2-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ერთი კითხვა მაქვს.",
          "en": "Correct the learner error. Intended meaning: I have a question.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У меня вопрос."
        },
        "sentence": "Tengo un pregunta. → ____",
        "answer": "Tengo una pregunta.",
        "options": [
          "Tengo una pregunta.",
          "Tengo unas pregunta.",
          "Tengo un pregunta."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a0-3",
    "level": "A0",
    "title": {
      "ka": "ser და estar: ვინაობა და მდგომარეობა",
      "en": "Ser versus estar",
      "ru": "Ser и estar"
    },
    "explanation": {
      "ka": "ser და estar ორივე შეიძლება „არის“-ად ითარგმნოს, მაგრამ ურთიერთჩანაცვლებადი არ არის. დროებითი/მუდმივი განსხვავება მხოლოდ ზოგადი მინიშნებაა; მდებარეობა ხშირად estar-ითაა, ღონისძიების ადგილი კი ser-ით. ser განსაზღვრავს ვინაობას და ტიპურ თვისებას: Es profesora, Es alto. მახასიათებლის შეცვლის შესაძლებლობა თავისთავად estar-ს არ მოითხოვს. estar აღწერს მდებარეობასა და განცდილ მდგომარეობას: Estoy en casa, Está cansada. ზმნის პირიც და წერილობითი მახვილიც შეინარჩუნე. ერთი ზედსართავი ზმნის მიხედვით აზრს ცვლის: ser aburrido მოსაწყენ პიროვნებას ნიშნავს, estar aburrido — მოწყენილ მდგომარეობას.",
      "en": "Ser and estar can both translate as be, but they are not interchangeable. Temporary versus permanent is only a rough guide: location normally uses estar, while an event’s location uses ser. Ser identifies someone or gives a characteristic: Es profesora, Es alto. A characteristic’s ability to change does not automatically require estar. Estar gives location and experienced states: Estoy en casa, Está cansada. Keep both the correct person and written accent. One adjective can change meaning with the verb: ser aburrido means to be boring, estar aburrido to be bored.",
      "ru": "Ser и estar оба переводятся как «быть», но не взаимозаменяемы. Временность и постоянство — лишь приблизительная подсказка: местонахождение обычно с estar, место события — с ser. Ser обозначает личность или характеристику: Es profesora, Es alto. Возможность изменения признака сама по себе не требует estar. Estar обозначает местонахождение и состояние: Estoy en casa, Está cansada. Сохраняйте правильное лицо и письменное ударение. Одно прилагательное меняет значение с глаголом: ser aburrido — быть скучным, estar aburrido — скучать."
    },
    "rules": [
      {
        "form": "soy / eres / es / somos / sois / son",
        "detail": {
          "ka": "ser განსაზღვრავს ვინაობას და ტიპურ თვისებას: Es profesora, Es alto. მახასიათებლის შეცვლის შესაძლებლობა თავისთავად estar-ს არ მოითხოვს.",
          "en": "Ser identifies someone or gives a characteristic: Es profesora, Es alto. A characteristic’s ability to change does not automatically require estar.",
          "ru": "Ser обозначает личность или характеристику: Es profesora, Es alto. Возможность изменения признака сама по себе не требует estar."
        }
      },
      {
        "form": "estoy / estás / está / estamos / estáis / están",
        "detail": {
          "ka": "estar აღწერს მდებარეობასა და განცდილ მდგომარეობას: Estoy en casa, Está cansada. ზმნის პირიც და წერილობითი მახვილიც შეინარჩუნე.",
          "en": "Estar gives location and experienced states: Estoy en casa, Está cansada. Keep both the correct person and written accent.",
          "ru": "Estar обозначает местонахождение и состояние: Estoy en casa, Está cansada. Сохраняйте правильное лицо и письменное ударение."
        }
      },
      {
        "form": "Es aburrido. / Está aburrido.",
        "detail": {
          "ka": "ერთი ზედსართავი ზმნის მიხედვით აზრს ცვლის: ser aburrido მოსაწყენ პიროვნებას ნიშნავს, estar aburrido — მოწყენილ მდგომარეობას.",
          "en": "One adjective can change meaning with the verb: ser aburrido means to be boring, estar aburrido to be bored.",
          "ru": "Одно прилагательное меняет значение с глаголом: ser aburrido — быть скучным, estar aburrido — скучать."
        }
      }
    ],
    "examples": [
      {
        "es": "Estoy en casa.",
        "ka": "მე სახლში ვარ.",
        "en": "I am at home.",
        "ru": "Я дома."
      },
      {
        "es": "Ana es profesora.",
        "ka": "ანა მასწავლებელია.",
        "en": "Ana is a teacher.",
        "ru": "Анна учительница."
      },
      {
        "es": "Estamos cansados.",
        "ka": "ჩვენ დაღლილები ვართ.",
        "en": "We are tired.",
        "ru": "Мы устали."
      },
      {
        "es": "La reunión es aquí.",
        "ka": "შეხვედრა აქ ტარდება.",
        "en": "The meeting takes place here.",
        "ru": "Встреча проходит здесь."
      }
    ],
    "pitfalls": {
      "ka": "Es en casa მდებარეობის ჩვეულებრივი თარგმანი არ არის: Está en casa თქვი. მაგრამ შეკრების ადგილისთვის La reunión es aquí სწორია.",
      "en": "Es en casa is not the normal location pattern: say Está en casa. However, an event can use La reunión es aquí.",
      "ru": "Es en casa — не обычная модель местонахождения: нужно Está en casa. Но для события верно La reunión es aquí."
    },
    "quiz": [
      {
        "id": "grammar-es-a0-3-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სახლში ვარ.",
          "en": "Complete the sentence to express: I am at home.",
          "ru": "Заполните предложение со значением: Я дома."
        },
        "sentence": "____ en casa.",
        "answer": "Estoy",
        "options": [
          "Estoy",
          "Soy",
          "Somos"
        ]
      },
      {
        "id": "grammar-es-a0-3-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მე სახლში ვარ.",
          "en": "Choose the complete correct sentence expressing: I am at home.",
          "ru": "Выберите полное правильное предложение со значением: Я дома."
        },
        "sentence": "____",
        "answer": "Estoy en casa.",
        "options": [
          "Estoy en casa.",
          "Soy en casa.",
          "Somos en casa."
        ]
      },
      {
        "id": "grammar-es-a0-3-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მე სახლში ვარ.",
          "en": "Correct the learner error. Intended meaning: I am at home.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я дома."
        },
        "sentence": "Soy en casa. → ____",
        "answer": "Estoy en casa.",
        "options": [
          "Estoy en casa.",
          "Somos en casa.",
          "Soy en casa."
        ]
      },
      {
        "id": "grammar-es-a0-3-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ანა მასწავლებელია.",
          "en": "Complete the sentence to express: Ana is a teacher.",
          "ru": "Заполните предложение со значением: Анна учительница."
        },
        "sentence": "Ana ____ profesora.",
        "answer": "es",
        "options": [
          "es",
          "está",
          "están"
        ]
      },
      {
        "id": "grammar-es-a0-3-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ანა მასწავლებელია.",
          "en": "Choose the complete correct sentence expressing: Ana is a teacher.",
          "ru": "Выберите полное правильное предложение со значением: Анна учительница."
        },
        "sentence": "____",
        "answer": "Ana es profesora.",
        "options": [
          "Ana es profesora.",
          "Ana está profesora.",
          "Ana están profesora."
        ]
      },
      {
        "id": "grammar-es-a0-3-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ანა მასწავლებელია.",
          "en": "Correct the learner error. Intended meaning: Ana is a teacher.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Анна учительница."
        },
        "sentence": "Ana está profesora. → ____",
        "answer": "Ana es profesora.",
        "options": [
          "Ana es profesora.",
          "Ana están profesora.",
          "Ana está profesora."
        ]
      },
      {
        "id": "grammar-es-a0-3-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ დაღლილები ვართ.",
          "en": "Complete the sentence to express: We are tired.",
          "ru": "Заполните предложение со значением: Мы устали."
        },
        "sentence": "____ cansados.",
        "answer": "Estamos",
        "options": [
          "Estamos",
          "Somos",
          "Estoy"
        ]
      },
      {
        "id": "grammar-es-a0-3-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ დაღლილები ვართ.",
          "en": "Choose the complete correct sentence expressing: We are tired.",
          "ru": "Выберите полное правильное предложение со значением: Мы устали."
        },
        "sentence": "____",
        "answer": "Estamos cansados.",
        "options": [
          "Estamos cansados.",
          "Somos cansados.",
          "Estoy cansados."
        ]
      },
      {
        "id": "grammar-es-a0-3-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ დაღლილები ვართ.",
          "en": "Correct the learner error. Intended meaning: We are tired.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мы устали."
        },
        "sentence": "Somos cansados. → ____",
        "answer": "Estamos cansados.",
        "options": [
          "Estamos cansados.",
          "Estoy cansados.",
          "Somos cansados."
        ]
      },
      {
        "id": "grammar-es-a0-3-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეხვედრა აქ ტარდება.",
          "en": "Complete the sentence to express: The meeting takes place here.",
          "ru": "Заполните предложение со значением: Встреча проходит здесь."
        },
        "sentence": "La reunión ____ aquí.",
        "answer": "es",
        "options": [
          "es",
          "está",
          "están"
        ]
      },
      {
        "id": "grammar-es-a0-3-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შეხვედრა აქ ტარდება.",
          "en": "Choose the complete correct sentence expressing: The meeting takes place here.",
          "ru": "Выберите полное правильное предложение со значением: Встреча проходит здесь."
        },
        "sentence": "____",
        "answer": "La reunión es aquí.",
        "options": [
          "La reunión es aquí.",
          "La reunión está aquí.",
          "La reunión están aquí."
        ]
      },
      {
        "id": "grammar-es-a0-3-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შეხვედრა აქ ტარდება.",
          "en": "Correct the learner error. Intended meaning: The meeting takes place here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Встреча проходит здесь."
        },
        "sentence": "La reunión está aquí. → ____",
        "answer": "La reunión es aquí.",
        "options": [
          "La reunión es aquí.",
          "La reunión están aquí.",
          "La reunión está aquí."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a0-4",
    "level": "A0",
    "title": {
      "ka": "რიცხვი, ზედსართავი და კუთვნილება",
      "en": "Number, adjectives and possession",
      "ru": "Число, прилагательные и принадлежность"
    },
    "explanation": {
      "ka": "ესპანურში მთელი სახელური ჯგუფი ეთანხმება რიცხვსა და ხშირად სქესს. ზედსართავი ხშირად სახელის შემდეგ დგას; ინგლისური სიტყვების რიგი მექანიკურად არ გადაიტანო. ხმოვანზე დაბოლოებულ სახელს ხშირად -s ემატება, თანხმოვანზე — -es. -o ზედსართავი მდედრობითში -a ხდება, მრავლობითში კი -s ემატება. mi და tu მხოლოდ რიცხვში იცვლება: mis, tus. მახვილიანი tú ნიშნავს „შენ“, უმახვილო tu კი „შენი“-ა. nuestro და vuestro სქესსა და რიცხვშიც იცვლება. სქესი მფლობელს კი არა, კუთვნილ სახელს ეკუთვნის: nuestra casa, ვინც არ უნდა იყოს მფლობელი.",
      "en": "The Spanish noun phrase agrees in number and often gender. An adjective commonly follows its noun; do not mechanically transfer English word order. Nouns ending in a vowel often add -s; consonant endings often add -es. An -o adjective normally changes to -a in feminine and adds -s in plural. Mi and tu change only for number: mis, tus. Accented tú means you; unaccented tu means your. Nuestro and vuestro change for gender and number. Gender belongs to the possessed noun, not the owner: nuestra casa regardless of who owns it.",
      "ru": "Испанская именная группа согласуется в числе и часто в роде. Прилагательное обычно следует за существительным; не переносите английский порядок автоматически. Слова на гласную часто добавляют -s, на согласную — -es. Прилагательное на -o обычно меняет его на -a в женском и добавляет -s во множественном. Mi и tu изменяются только по числу: mis, tus. Tú с ударением — «ты», tu без ударения — «твой». Nuestro и vuestro меняются по роду и числу. Род определяется предметом, не владельцем: nuestra casa независимо от владельца."
    },
    "rules": [
      {
        "form": "libro nuevo / libros nuevos",
        "detail": {
          "ka": "ხმოვანზე დაბოლოებულ სახელს ხშირად -s ემატება, თანხმოვანზე — -es. -o ზედსართავი მდედრობითში -a ხდება, მრავლობითში კი -s ემატება.",
          "en": "Nouns ending in a vowel often add -s; consonant endings often add -es. An -o adjective normally changes to -a in feminine and adds -s in plural.",
          "ru": "Слова на гласную часто добавляют -s, на согласную — -es. Прилагательное на -o обычно меняет его на -a в женском и добавляет -s во множественном."
        }
      },
      {
        "form": "mi libro / mis libros",
        "detail": {
          "ka": "mi და tu მხოლოდ რიცხვში იცვლება: mis, tus. მახვილიანი tú ნიშნავს „შენ“, უმახვილო tu კი „შენი“-ა.",
          "en": "Mi and tu change only for number: mis, tus. Accented tú means you; unaccented tu means your.",
          "ru": "Mi и tu изменяются только по числу: mis, tus. Tú с ударением — «ты», tu без ударения — «твой»."
        }
      },
      {
        "form": "nuestro libro / nuestra casa",
        "detail": {
          "ka": "nuestro და vuestro სქესსა და რიცხვშიც იცვლება. სქესი მფლობელს კი არა, კუთვნილ სახელს ეკუთვნის: nuestra casa, ვინც არ უნდა იყოს მფლობელი.",
          "en": "Nuestro and vuestro change for gender and number. Gender belongs to the possessed noun, not the owner: nuestra casa regardless of who owns it.",
          "ru": "Nuestro и vuestro меняются по роду и числу. Род определяется предметом, не владельцем: nuestra casa независимо от владельца."
        }
      }
    ],
    "examples": [
      {
        "es": "Tengo dos libros nuevos.",
        "ka": "ორი ახალი წიგნი მაქვს.",
        "en": "I have two new books.",
        "ru": "У меня две новые книги."
      },
      {
        "es": "Mi casa es pequeña.",
        "ka": "ჩემი სახლი პატარაა.",
        "en": "My house is small.",
        "ru": "Мой дом маленький."
      },
      {
        "es": "Mis amigas están aquí.",
        "ka": "ჩემი მეგობარი გოგოები აქ არიან.",
        "en": "My female friends are here.",
        "ru": "Мои подруги здесь."
      },
      {
        "es": "Nuestra casa es blanca.",
        "ka": "ჩვენი სახლი თეთრია.",
        "en": "Our house is white.",
        "ru": "Наш дом белый."
      }
    ],
    "pitfalls": {
      "ka": "mi casa სწორია ყველა სქესის მფლობელთან; mío/mía სხვა, დამოუკიდებელი ან სახელის შემდგომი მოდელია. ეს ორი პოზიცია არ აურიო.",
      "en": "Mi casa works for owners of any gender; mío/mía belongs to another, independent or post-noun pattern. Keep these positions distinct.",
      "ru": "Mi casa подходит владельцу любого рода; mío/mía относится к другой, самостоятельной или послеложной модели. Не смешивайте позиции."
    },
    "quiz": [
      {
        "id": "grammar-es-a0-4-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ორი ახალი წიგნი მაქვს.",
          "en": "Complete the sentence to express: I have two new books.",
          "ru": "Заполните предложение со значением: У меня две новые книги."
        },
        "sentence": "Tengo dos libros ____.",
        "answer": "nuevos",
        "options": [
          "nuevos",
          "nuevo",
          "nuevas"
        ]
      },
      {
        "id": "grammar-es-a0-4-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ორი ახალი წიგნი მაქვს.",
          "en": "Choose the complete correct sentence expressing: I have two new books.",
          "ru": "Выберите полное правильное предложение со значением: У меня две новые книги."
        },
        "sentence": "____",
        "answer": "Tengo dos libros nuevos.",
        "options": [
          "Tengo dos libros nuevos.",
          "Tengo dos libros nuevo.",
          "Tengo dos libros nuevas."
        ]
      },
      {
        "id": "grammar-es-a0-4-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ორი ახალი წიგნი მაქვს.",
          "en": "Correct the learner error. Intended meaning: I have two new books.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У меня две новые книги."
        },
        "sentence": "Tengo dos libros nuevo. → ____",
        "answer": "Tengo dos libros nuevos.",
        "options": [
          "Tengo dos libros nuevos.",
          "Tengo dos libros nuevas.",
          "Tengo dos libros nuevo."
        ]
      },
      {
        "id": "grammar-es-a0-4-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩემი სახლი პატარაა.",
          "en": "Complete the sentence to express: My house is small.",
          "ru": "Заполните предложение со значением: Мой дом маленький."
        },
        "sentence": "____ casa es pequeña.",
        "answer": "Mi",
        "options": [
          "Mi",
          "Mis",
          "Míos"
        ]
      },
      {
        "id": "grammar-es-a0-4-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩემი სახლი პატარაა.",
          "en": "Choose the complete correct sentence expressing: My house is small.",
          "ru": "Выберите полное правильное предложение со значением: Мой дом маленький."
        },
        "sentence": "____",
        "answer": "Mi casa es pequeña.",
        "options": [
          "Mi casa es pequeña.",
          "Mis casa es pequeña.",
          "Míos casa es pequeña."
        ]
      },
      {
        "id": "grammar-es-a0-4-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩემი სახლი პატარაა.",
          "en": "Correct the learner error. Intended meaning: My house is small.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мой дом маленький."
        },
        "sentence": "Mis casa es pequeña. → ____",
        "answer": "Mi casa es pequeña.",
        "options": [
          "Mi casa es pequeña.",
          "Míos casa es pequeña.",
          "Mis casa es pequeña."
        ]
      },
      {
        "id": "grammar-es-a0-4-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩემი მეგობარი გოგოები აქ არიან.",
          "en": "Complete the sentence to express: My female friends are here.",
          "ru": "Заполните предложение со значением: Мои подруги здесь."
        },
        "sentence": "____ amigas están aquí.",
        "answer": "Mis",
        "options": [
          "Mis",
          "Mi",
          "Mía"
        ]
      },
      {
        "id": "grammar-es-a0-4-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩემი მეგობარი გოგოები აქ არიან.",
          "en": "Choose the complete correct sentence expressing: My female friends are here.",
          "ru": "Выберите полное правильное предложение со значением: Мои подруги здесь."
        },
        "sentence": "____",
        "answer": "Mis amigas están aquí.",
        "options": [
          "Mis amigas están aquí.",
          "Mi amigas están aquí.",
          "Mía amigas están aquí."
        ]
      },
      {
        "id": "grammar-es-a0-4-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩემი მეგობარი გოგოები აქ არიან.",
          "en": "Correct the learner error. Intended meaning: My female friends are here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мои подруги здесь."
        },
        "sentence": "Mi amigas están aquí. → ____",
        "answer": "Mis amigas están aquí.",
        "options": [
          "Mis amigas están aquí.",
          "Mía amigas están aquí.",
          "Mi amigas están aquí."
        ]
      },
      {
        "id": "grammar-es-a0-4-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენი სახლი თეთრია.",
          "en": "Complete the sentence to express: Our house is white.",
          "ru": "Заполните предложение со значением: Наш дом белый."
        },
        "sentence": "____ casa es blanca.",
        "answer": "Nuestra",
        "options": [
          "Nuestra",
          "Nuestro",
          "Nuestros"
        ]
      },
      {
        "id": "grammar-es-a0-4-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენი სახლი თეთრია.",
          "en": "Choose the complete correct sentence expressing: Our house is white.",
          "ru": "Выберите полное правильное предложение со значением: Наш дом белый."
        },
        "sentence": "____",
        "answer": "Nuestra casa es blanca.",
        "options": [
          "Nuestra casa es blanca.",
          "Nuestro casa es blanca.",
          "Nuestros casa es blanca."
        ]
      },
      {
        "id": "grammar-es-a0-4-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენი სახლი თეთრია.",
          "en": "Correct the learner error. Intended meaning: Our house is white.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Наш дом белый."
        },
        "sentence": "Nuestro casa es blanca. → ____",
        "answer": "Nuestra casa es blanca.",
        "options": [
          "Nuestra casa es blanca.",
          "Nuestros casa es blanca.",
          "Nuestro casa es blanca."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a1-1",
    "level": "A1",
    "title": {
      "ka": "აწმყოს რეგულარული უღლება",
      "en": "Regular present conjugation",
      "ru": "Правильное спряжение в настоящем"
    },
    "explanation": {
      "ka": "ინფინიტივის -ar, -er ან -ir დაბოლოება ზმნის ჯგუფს აჩვენებს. აწმყო შეიძლება ნიშნავდეს ჩვევას, ზოგად ფაქტს ან ახლანდელ მდგომარეობას. რეგულარულ -ar ზმნას ჯგუფის შესაბამისი დაბოლოებები დაურთე. él, ella და usted ერთ ფორმას იღებს, ellos და ustedes კი სხვა საერთო ფორმას. რეგულარულ -er ჯგუფში tú-ს დაბოლოებაა -es, nosotros-ს — -emos. საწყისი comer სრულ პირიან წინადადებაში como-ს არ ცვლის. რეგულარული -ir და -er ფორმები რამდენიმე პირში ემთხვევა, მაგრამ nosotros/vosotros განსხვავდება. ზმნა ქვემდებარეს შეუთანხმე მაშინაც, როცა ნაცვალსახელი გამოტოვებულია.",
      "en": "The infinitive ending -ar, -er or -ir identifies a verb’s group. Present tense can describe habits, general facts and current situations. Regular -ar verbs use these person endings. Él, ella and usted share one form; ellos and ustedes share another. For regular -er verbs, tú takes -es and nosotros -emos. Infinitive comer does not replace como in a full finite clause. Regular -ir and -er verbs share several endings but differ in nosotros/vosotros. Match the verb to its subject even when the pronoun is omitted.",
      "ru": "Окончание инфинитива -ar, -er или -ir указывает группу. Настоящее время описывает привычки, общие факты и текущие ситуации. Правильные глаголы на -ar получают эти личные окончания. Él, ella и usted имеют общую форму; ellos и ustedes — другую общую форму. У правильных глаголов на -er форма tú оканчивается на -es, nosotros — на -emos. Инфинитив comer не заменяет como в полном личном предложении. Правильные -ir и -er совпадают в нескольких лицах, но отличаются в nosotros/vosotros. Согласуйте глагол с подлежащим и при опущенном местоимении."
    },
    "rules": [
      {
        "form": "hablo, hablas, habla, hablamos, habláis, hablan",
        "detail": {
          "ka": "რეგულარულ -ar ზმნას ჯგუფის შესაბამისი დაბოლოებები დაურთე. él, ella და usted ერთ ფორმას იღებს, ellos და ustedes კი სხვა საერთო ფორმას.",
          "en": "Regular -ar verbs use these person endings. Él, ella and usted share one form; ellos and ustedes share another.",
          "ru": "Правильные глаголы на -ar получают эти личные окончания. Él, ella и usted имеют общую форму; ellos и ustedes — другую общую форму."
        }
      },
      {
        "form": "como, comes, come, comemos, coméis, comen",
        "detail": {
          "ka": "რეგულარულ -er ჯგუფში tú-ს დაბოლოებაა -es, nosotros-ს — -emos. საწყისი comer სრულ პირიან წინადადებაში como-ს არ ცვლის.",
          "en": "For regular -er verbs, tú takes -es and nosotros -emos. Infinitive comer does not replace como in a full finite clause.",
          "ru": "У правильных глаголов на -er форма tú оканчивается на -es, nosotros — на -emos. Инфинитив comer не заменяет como в полном личном предложении."
        }
      },
      {
        "form": "vivo, vives, vive, vivimos, vivís, viven",
        "detail": {
          "ka": "რეგულარული -ir და -er ფორმები რამდენიმე პირში ემთხვევა, მაგრამ nosotros/vosotros განსხვავდება. ზმნა ქვემდებარეს შეუთანხმე მაშინაც, როცა ნაცვალსახელი გამოტოვებულია.",
          "en": "Regular -ir and -er verbs share several endings but differ in nosotros/vosotros. Match the verb to its subject even when the pronoun is omitted.",
          "ru": "Правильные -ir и -er совпадают в нескольких лицах, но отличаются в nosotros/vosotros. Согласуйте глагол с подлежащим и при опущенном местоимении."
        }
      }
    ],
    "examples": [
      {
        "es": "Yo hablo español.",
        "ka": "მე ესპანურად ვლაპარაკობ.",
        "en": "I speak Spanish.",
        "ru": "Я говорю по-испански."
      },
      {
        "es": "Ella come pan.",
        "ka": "ის პურს ჭამს.",
        "en": "She eats bread.",
        "ru": "Она ест хлеб."
      },
      {
        "es": "Nosotros vivimos aquí.",
        "ka": "ჩვენ აქ ვცხოვრობთ.",
        "en": "We live here.",
        "ru": "Мы живём здесь."
      },
      {
        "es": "Tú trabajas en un café.",
        "ka": "შენ კაფეში მუშაობ.",
        "en": "You work in a cafe, informally.",
        "ru": "Ты работаешь в кафе."
      }
    ],
    "pitfalls": {
      "ka": "ინგლისური მოდელის მსგავსი დამხმარე do/does ესპანურ მარტივ კითხვაში არ ემატება. ¿Hablas español? უკვე სრული კითხვაა.",
      "en": "Do not add an English-style do/does to a simple Spanish question. ¿Hablas español? is already a complete question.",
      "ru": "Не добавляйте английское do/does к простому испанскому вопросу. ¿Hablas español? уже полный вопрос."
    },
    "quiz": [
      {
        "id": "grammar-es-a1-1-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ესპანურად ვლაპარაკობ.",
          "en": "Complete the sentence to express: I speak Spanish.",
          "ru": "Заполните предложение со значением: Я говорю по-испански."
        },
        "sentence": "Yo ____ español.",
        "answer": "hablo",
        "options": [
          "hablo",
          "hablas",
          "hablan"
        ]
      },
      {
        "id": "grammar-es-a1-1-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მე ესპანურად ვლაპარაკობ.",
          "en": "Choose the complete correct sentence expressing: I speak Spanish.",
          "ru": "Выберите полное правильное предложение со значением: Я говорю по-испански."
        },
        "sentence": "____",
        "answer": "Yo hablo español.",
        "options": [
          "Yo hablo español.",
          "Yo hablas español.",
          "Yo hablan español."
        ]
      },
      {
        "id": "grammar-es-a1-1-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მე ესპანურად ვლაპარაკობ.",
          "en": "Correct the learner error. Intended meaning: I speak Spanish.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я говорю по-испански."
        },
        "sentence": "Yo hablas español. → ____",
        "answer": "Yo hablo español.",
        "options": [
          "Yo hablo español.",
          "Yo hablan español.",
          "Yo hablas español."
        ]
      },
      {
        "id": "grammar-es-a1-1-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის პურს ჭამს.",
          "en": "Complete the sentence to express: She eats bread.",
          "ru": "Заполните предложение со значением: Она ест хлеб."
        },
        "sentence": "Ella ____ pan.",
        "answer": "come",
        "options": [
          "come",
          "comes",
          "comemos"
        ]
      },
      {
        "id": "grammar-es-a1-1-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ის პურს ჭამს.",
          "en": "Choose the complete correct sentence expressing: She eats bread.",
          "ru": "Выберите полное правильное предложение со значением: Она ест хлеб."
        },
        "sentence": "____",
        "answer": "Ella come pan.",
        "options": [
          "Ella come pan.",
          "Ella comes pan.",
          "Ella comemos pan."
        ]
      },
      {
        "id": "grammar-es-a1-1-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ის პურს ჭამს.",
          "en": "Correct the learner error. Intended meaning: She eats bread.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Она ест хлеб."
        },
        "sentence": "Ella comes pan. → ____",
        "answer": "Ella come pan.",
        "options": [
          "Ella come pan.",
          "Ella comemos pan.",
          "Ella comes pan."
        ]
      },
      {
        "id": "grammar-es-a1-1-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ აქ ვცხოვრობთ.",
          "en": "Complete the sentence to express: We live here.",
          "ru": "Заполните предложение со значением: Мы живём здесь."
        },
        "sentence": "Nosotros ____ aquí.",
        "answer": "vivimos",
        "options": [
          "vivimos",
          "viven",
          "vivo"
        ]
      },
      {
        "id": "grammar-es-a1-1-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ აქ ვცხოვრობთ.",
          "en": "Choose the complete correct sentence expressing: We live here.",
          "ru": "Выберите полное правильное предложение со значением: Мы живём здесь."
        },
        "sentence": "____",
        "answer": "Nosotros vivimos aquí.",
        "options": [
          "Nosotros vivimos aquí.",
          "Nosotros viven aquí.",
          "Nosotros vivo aquí."
        ]
      },
      {
        "id": "grammar-es-a1-1-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ აქ ვცხოვრობთ.",
          "en": "Correct the learner error. Intended meaning: We live here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мы живём здесь."
        },
        "sentence": "Nosotros viven aquí. → ____",
        "answer": "Nosotros vivimos aquí.",
        "options": [
          "Nosotros vivimos aquí.",
          "Nosotros vivo aquí.",
          "Nosotros viven aquí."
        ]
      },
      {
        "id": "grammar-es-a1-1-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შენ კაფეში მუშაობ.",
          "en": "Complete the sentence to express: You work in a cafe, informally.",
          "ru": "Заполните предложение со значением: Ты работаешь в кафе."
        },
        "sentence": "Tú ____ en un café.",
        "answer": "trabajas",
        "options": [
          "trabajas",
          "trabajo",
          "trabajan"
        ]
      },
      {
        "id": "grammar-es-a1-1-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შენ კაფეში მუშაობ.",
          "en": "Choose the complete correct sentence expressing: You work in a cafe, informally.",
          "ru": "Выберите полное правильное предложение со значением: Ты работаешь в кафе."
        },
        "sentence": "____",
        "answer": "Tú trabajas en un café.",
        "options": [
          "Tú trabajas en un café.",
          "Tú trabajo en un café.",
          "Tú trabajan en un café."
        ]
      },
      {
        "id": "grammar-es-a1-1-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შენ კაფეში მუშაობ.",
          "en": "Correct the learner error. Intended meaning: You work in a cafe, informally.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Ты работаешь в кафе."
        },
        "sentence": "Tú trabajo en un café. → ____",
        "answer": "Tú trabajas en un café.",
        "options": [
          "Tú trabajas en un café.",
          "Tú trabajan en un café.",
          "Tú trabajo en un café."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a1-2",
    "level": "A1",
    "title": {
      "ka": "არარეგულარული აწმყო და გეგმები",
      "en": "Irregular present and plans",
      "ru": "Неправильное настоящее и планы"
    },
    "explanation": {
      "ka": "ხშირი ზმნები tener, ir და querer რეგულარულ მოდელს სრულად არ მიჰყვება. ფორმა პირდაპირ ისწავლე და გამოყენებისთანავე პირს შეუთანხმე. tener კუთვნილებასთან ერთად ასაკსაც გამოხატავს: Tengo veinte años. ასაკთან ser-ის გამოყენება ინგლისური პირდაპირი გადატანაა. ir მოძრაობას ნიშნავს. ir a + ინფინიტივი გეგმას ან მოახლოებულ მოქმედებას გამოხატავს; a არ გამოტოვო. querer-ში e→ie ხდება მახვილიან ფუძეში, მაგრამ queremos/queréis ინარჩუნებს e-ს. სურვილის შემდეგ პირდაპირ ინფინიტივია: quiero aprender, არა quiero a aprender.",
      "en": "Frequent verbs tener, ir and querer do not fully follow regular patterns. Learn their forms directly and match them to the subject. Tener expresses age as well as possession: Tengo veinte años. Using ser for age transfers English too literally. Ir means go. Ir a + infinitive expresses a plan or upcoming action; do not omit a. Querer changes e→ie in the stressed stem, but queremos/queréis keep e. A desired action follows as an infinitive: quiero aprender, not quiero a aprender.",
      "ru": "Частые tener, ir и querer не полностью следуют правильным моделям. Учите формы непосредственно и согласуйте их с подлежащим. Tener выражает не только обладание, но и возраст: Tengo veinte años. Ser при обозначении возраста — слишком буквальный перенос английского. Ir означает «идти/ехать». Ir a + инфинитив обозначает план или ближайшее действие; не пропускайте a. В querer ударная основа меняет e→ie, но queremos/queréis сохраняют e. Желание действия требует инфинитив: quiero aprender, не quiero a aprender."
    },
    "rules": [
      {
        "form": "tengo / tienes / tiene / tenemos / tenéis / tienen",
        "detail": {
          "ka": "tener კუთვნილებასთან ერთად ასაკსაც გამოხატავს: Tengo veinte años. ასაკთან ser-ის გამოყენება ინგლისური პირდაპირი გადატანაა.",
          "en": "Tener expresses age as well as possession: Tengo veinte años. Using ser for age transfers English too literally.",
          "ru": "Tener выражает не только обладание, но и возраст: Tengo veinte años. Ser при обозначении возраста — слишком буквальный перенос английского."
        }
      },
      {
        "form": "voy / vas / va / vamos / vais / van",
        "detail": {
          "ka": "ir მოძრაობას ნიშნავს. ir a + ინფინიტივი გეგმას ან მოახლოებულ მოქმედებას გამოხატავს; a არ გამოტოვო.",
          "en": "Ir means go. Ir a + infinitive expresses a plan or upcoming action; do not omit a.",
          "ru": "Ir означает «идти/ехать». Ir a + инфинитив обозначает план или ближайшее действие; не пропускайте a."
        }
      },
      {
        "form": "quiero / quieres / quiere / queremos / queréis / quieren",
        "detail": {
          "ka": "querer-ში e→ie ხდება მახვილიან ფუძეში, მაგრამ queremos/queréis ინარჩუნებს e-ს. სურვილის შემდეგ პირდაპირ ინფინიტივია: quiero aprender, არა quiero a aprender.",
          "en": "Querer changes e→ie in the stressed stem, but queremos/queréis keep e. A desired action follows as an infinitive: quiero aprender, not quiero a aprender.",
          "ru": "В querer ударная основа меняет e→ie, но queremos/queréis сохраняют e. Желание действия требует инфинитив: quiero aprender, не quiero a aprender."
        }
      }
    ],
    "examples": [
      {
        "es": "Yo tengo veinte años.",
        "ka": "მე ოცი წლის ვარ.",
        "en": "I am twenty years old.",
        "ru": "Мне двадцать лет."
      },
      {
        "es": "Ella va a estudiar.",
        "ka": "ის სწავლას აპირებს.",
        "en": "She is going to study.",
        "ru": "Она собирается учиться."
      },
      {
        "es": "Nosotros queremos aprender.",
        "ka": "ჩვენ სწავლა გვინდა.",
        "en": "We want to learn.",
        "ru": "Мы хотим учиться."
      },
      {
        "es": "Tú tienes un billete.",
        "ka": "შენ ბილეთი გაქვს.",
        "en": "You have a ticket, informally.",
        "ru": "У тебя есть билет."
      }
    ],
    "pitfalls": {
      "ka": "tienes და tienes que განსხვავდება: მეორე მოვალეობას გამოხატავს. Tengo hambre ნიშნავს „მშია“ და არა ფლობას ინგლისური სიტყვასიტყვით.",
      "en": "Tienes and tienes que differ: the latter expresses obligation. Tengo hambre means I am hungry; learn it as an expression.",
      "ru": "Tienes и tienes que различаются: второе выражает необходимость. Tengo hambre означает «я голоден»; учите выражение целиком."
    },
    "quiz": [
      {
        "id": "grammar-es-a1-2-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ოცი წლის ვარ.",
          "en": "Complete the sentence to express: I am twenty years old.",
          "ru": "Заполните предложение со значением: Мне двадцать лет."
        },
        "sentence": "Yo ____ veinte años.",
        "answer": "tengo",
        "options": [
          "tengo",
          "soy",
          "tiene"
        ]
      },
      {
        "id": "grammar-es-a1-2-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მე ოცი წლის ვარ.",
          "en": "Choose the complete correct sentence expressing: I am twenty years old.",
          "ru": "Выберите полное правильное предложение со значением: Мне двадцать лет."
        },
        "sentence": "____",
        "answer": "Yo tengo veinte años.",
        "options": [
          "Yo tengo veinte años.",
          "Yo soy veinte años.",
          "Yo tiene veinte años."
        ]
      },
      {
        "id": "grammar-es-a1-2-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მე ოცი წლის ვარ.",
          "en": "Correct the learner error. Intended meaning: I am twenty years old.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мне двадцать лет."
        },
        "sentence": "Yo soy veinte años. → ____",
        "answer": "Yo tengo veinte años.",
        "options": [
          "Yo tengo veinte años.",
          "Yo tiene veinte años.",
          "Yo soy veinte años."
        ]
      },
      {
        "id": "grammar-es-a1-2-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის სწავლას აპირებს.",
          "en": "Complete the sentence to express: She is going to study.",
          "ru": "Заполните предложение со значением: Она собирается учиться."
        },
        "sentence": "Ella ____ a estudiar.",
        "answer": "va",
        "options": [
          "va",
          "voy",
          "van"
        ]
      },
      {
        "id": "grammar-es-a1-2-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ის სწავლას აპირებს.",
          "en": "Choose the complete correct sentence expressing: She is going to study.",
          "ru": "Выберите полное правильное предложение со значением: Она собирается учиться."
        },
        "sentence": "____",
        "answer": "Ella va a estudiar.",
        "options": [
          "Ella va a estudiar.",
          "Ella voy a estudiar.",
          "Ella van a estudiar."
        ]
      },
      {
        "id": "grammar-es-a1-2-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ის სწავლას აპირებს.",
          "en": "Correct the learner error. Intended meaning: She is going to study.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Она собирается учиться."
        },
        "sentence": "Ella voy a estudiar. → ____",
        "answer": "Ella va a estudiar.",
        "options": [
          "Ella va a estudiar.",
          "Ella van a estudiar.",
          "Ella voy a estudiar."
        ]
      },
      {
        "id": "grammar-es-a1-2-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ სწავლა გვინდა.",
          "en": "Complete the sentence to express: We want to learn.",
          "ru": "Заполните предложение со значением: Мы хотим учиться."
        },
        "sentence": "Nosotros ____ aprender.",
        "answer": "queremos",
        "options": [
          "queremos",
          "quieremos",
          "quieren"
        ]
      },
      {
        "id": "grammar-es-a1-2-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ სწავლა გვინდა.",
          "en": "Choose the complete correct sentence expressing: We want to learn.",
          "ru": "Выберите полное правильное предложение со значением: Мы хотим учиться."
        },
        "sentence": "____",
        "answer": "Nosotros queremos aprender.",
        "options": [
          "Nosotros queremos aprender.",
          "Nosotros quieremos aprender.",
          "Nosotros quieren aprender."
        ]
      },
      {
        "id": "grammar-es-a1-2-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ სწავლა გვინდა.",
          "en": "Correct the learner error. Intended meaning: We want to learn.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мы хотим учиться."
        },
        "sentence": "Nosotros quieremos aprender. → ____",
        "answer": "Nosotros queremos aprender.",
        "options": [
          "Nosotros queremos aprender.",
          "Nosotros quieren aprender.",
          "Nosotros quieremos aprender."
        ]
      },
      {
        "id": "grammar-es-a1-2-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შენ ბილეთი გაქვს.",
          "en": "Complete the sentence to express: You have a ticket, informally.",
          "ru": "Заполните предложение со значением: У тебя есть билет."
        },
        "sentence": "Tú ____ un billete.",
        "answer": "tienes",
        "options": [
          "tienes",
          "tengo",
          "tienen"
        ]
      },
      {
        "id": "grammar-es-a1-2-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შენ ბილეთი გაქვს.",
          "en": "Choose the complete correct sentence expressing: You have a ticket, informally.",
          "ru": "Выберите полное правильное предложение со значением: У тебя есть билет."
        },
        "sentence": "____",
        "answer": "Tú tienes un billete.",
        "options": [
          "Tú tienes un billete.",
          "Tú tengo un billete.",
          "Tú tienen un billete."
        ]
      },
      {
        "id": "grammar-es-a1-2-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შენ ბილეთი გაქვს.",
          "en": "Correct the learner error. Intended meaning: You have a ticket, informally.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У тебя есть билет."
        },
        "sentence": "Tú tengo un billete. → ____",
        "answer": "Tú tienes un billete.",
        "options": [
          "Tú tienes un billete.",
          "Tú tienen un billete.",
          "Tú tengo un billete."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a1-3",
    "level": "A1",
    "title": {
      "ka": "კითხვა, უარყოფა და კითხვითი სიტყვები",
      "en": "Questions and negation",
      "ru": "Вопросы и отрицание"
    },
    "explanation": {
      "ka": "ესპანურ კითხვას საწყისი ¿ და ბოლო ? აქვს. კითხვა შეიძლება მხოლოდ ინტონაციით შეიქმნას; ინგლისურის დამხმარე ზმნა საჭირო არ არის. კითხვითი სიტყვები წერილობით მახვილს იღებს, მათ შორის ირიბ კითხვაშიც. dónde ადგილს ეკითხება, cuándo — დროს, quién — ადამიანს. ჩვეულებრივ უარყოფაში no ზმნის წინ დგას. არ ჩასვა ცალკე დამხმარე do: No trabajo უკვე „არ ვმუშაობ“-ს ნიშნავს. ზმნის შემდგომი nada/nadie ჩვეულებრივ წინ მდგომ no-ს ეწყობა. თუ უარყოფითი სიტყვა წინ დგას, no ჩვეულებრივ აღარ არის: Nunca voy.",
      "en": "Spanish questions use opening ¿ and closing ?. Intonation alone can create a question; no English-style auxiliary is required. Question words carry written accents, including in indirect questions. Dónde asks place, cuándo time and quién a person. Ordinary negation places no before the verb. Do not insert auxiliary do: No trabajo already means I do not work. Postverbal nada/nadie normally combines with earlier no. If the negative word comes first, no is normally absent: Nunca voy.",
      "ru": "Испанский вопрос имеет начальный ¿ и конечный ?. Вопрос можно образовать одной интонацией, без английского вспомогательного глагола. Вопросительные слова имеют письменное ударение, в том числе в косвенном вопросе. Dónde — место, cuándo — время, quién — человек. Обычное отрицание ставит no перед глаголом. Не вставляйте do: No trabajo уже значит «я не работаю». Nada/nadie после глагола обычно сочетается с предшествующим no. Если отрицательное слово впереди, no обычно не нужно: Nunca voy."
    },
    "rules": [
      {
        "form": "¿Dónde? / ¿Cuándo? / ¿Qué? / ¿Quién?",
        "detail": {
          "ka": "კითხვითი სიტყვები წერილობით მახვილს იღებს, მათ შორის ირიბ კითხვაშიც. dónde ადგილს ეკითხება, cuándo — დროს, quién — ადამიანს.",
          "en": "Question words carry written accents, including in indirect questions. Dónde asks place, cuándo time and quién a person.",
          "ru": "Вопросительные слова имеют письменное ударение, в том числе в косвенном вопросе. Dónde — место, cuándo — время, quién — человек."
        }
      },
      {
        "form": "no + verbo",
        "detail": {
          "ka": "ჩვეულებრივ უარყოფაში no ზმნის წინ დგას. არ ჩასვა ცალკე დამხმარე do: No trabajo უკვე „არ ვმუშაობ“-ს ნიშნავს.",
          "en": "Ordinary negation places no before the verb. Do not insert auxiliary do: No trabajo already means I do not work.",
          "ru": "Обычное отрицание ставит no перед глаголом. Не вставляйте do: No trabajo уже значит «я не работаю»."
        }
      },
      {
        "form": "No tengo nada. / Nunca voy.",
        "detail": {
          "ka": "ზმნის შემდგომი nada/nadie ჩვეულებრივ წინ მდგომ no-ს ეწყობა. თუ უარყოფითი სიტყვა წინ დგას, no ჩვეულებრივ აღარ არის: Nunca voy.",
          "en": "Postverbal nada/nadie normally combines with earlier no. If the negative word comes first, no is normally absent: Nunca voy.",
          "ru": "Nada/nadie после глагола обычно сочетается с предшествующим no. Если отрицательное слово впереди, no обычно не нужно: Nunca voy."
        }
      }
    ],
    "examples": [
      {
        "es": "¿Dónde está el hotel?",
        "ka": "სასტუმრო სად არის?",
        "en": "Where is the hotel?",
        "ru": "Где гостиница?"
      },
      {
        "es": "¿Cuándo sale el tren?",
        "ka": "მატარებელი როდის გადის?",
        "en": "When does the train leave?",
        "ru": "Когда отправляется поезд?"
      },
      {
        "es": "No tengo nada.",
        "ka": "არაფერი მაქვს.",
        "en": "I have nothing.",
        "ru": "У меня ничего нет."
      },
      {
        "es": "¿Quién es ella?",
        "ka": "ის ვინ არის?",
        "en": "Who is she?",
        "ru": "Кто она?"
      }
    ],
    "pitfalls": {
      "ka": "ესპანური უარყოფითი შეთანხმება ინგლისური double negative-ის წესით არ განსაჯო. No tengo nada სტანდარტულია; ფორმა No no trabajo სხვა აქცენტს ან შესწორებას მოითხოვდა.",
      "en": "Do not judge Spanish negative concord by English double-negative rules. No tengo nada is standard; No no trabajo would require a different corrective context.",
      "ru": "Не оценивайте испанское согласование отрицаний по английским правилам. No tengo nada нормативно; No no trabajo потребовало бы другого контекста исправления."
    },
    "quiz": [
      {
        "id": "grammar-es-a1-3-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: სასტუმრო სად არის?",
          "en": "Complete the sentence to express: Where is the hotel?",
          "ru": "Заполните предложение со значением: Где гостиница?"
        },
        "sentence": "¿____ está el hotel?",
        "answer": "Dónde",
        "options": [
          "Dónde",
          "Cuándo",
          "Quién"
        ]
      },
      {
        "id": "grammar-es-a1-3-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: სასტუმრო სად არის?",
          "en": "Choose the complete correct sentence expressing: Where is the hotel?",
          "ru": "Выберите полное правильное предложение со значением: Где гостиница?"
        },
        "sentence": "____",
        "answer": "¿Dónde está el hotel?",
        "options": [
          "¿Dónde está el hotel?",
          "¿Cuándo está el hotel?",
          "¿Quién está el hotel?"
        ]
      },
      {
        "id": "grammar-es-a1-3-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: სასტუმრო სად არის?",
          "en": "Correct the learner error. Intended meaning: Where is the hotel?",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Где гостиница?"
        },
        "sentence": "¿Cuándo está el hotel? → ____",
        "answer": "¿Dónde está el hotel?",
        "options": [
          "¿Dónde está el hotel?",
          "¿Quién está el hotel?",
          "¿Cuándo está el hotel?"
        ]
      },
      {
        "id": "grammar-es-a1-3-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მატარებელი როდის გადის?",
          "en": "Complete the sentence to express: When does the train leave?",
          "ru": "Заполните предложение со значением: Когда отправляется поезд?"
        },
        "sentence": "¿____ sale el tren?",
        "answer": "Cuándo",
        "options": [
          "Cuándo",
          "Dónde",
          "Quién"
        ]
      },
      {
        "id": "grammar-es-a1-3-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მატარებელი როდის გადის?",
          "en": "Choose the complete correct sentence expressing: When does the train leave?",
          "ru": "Выберите полное правильное предложение со значением: Когда отправляется поезд?"
        },
        "sentence": "____",
        "answer": "¿Cuándo sale el tren?",
        "options": [
          "¿Cuándo sale el tren?",
          "¿Dónde sale el tren?",
          "¿Quién sale el tren?"
        ]
      },
      {
        "id": "grammar-es-a1-3-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მატარებელი როდის გადის?",
          "en": "Correct the learner error. Intended meaning: When does the train leave?",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Когда отправляется поезд?"
        },
        "sentence": "¿Dónde sale el tren? → ____",
        "answer": "¿Cuándo sale el tren?",
        "options": [
          "¿Cuándo sale el tren?",
          "¿Quién sale el tren?",
          "¿Dónde sale el tren?"
        ]
      },
      {
        "id": "grammar-es-a1-3-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: არაფერი მაქვს.",
          "en": "Complete the sentence to express: I have nothing.",
          "ru": "Заполните предложение со значением: У меня ничего нет."
        },
        "sentence": "No tengo ____.",
        "answer": "nada",
        "options": [
          "nada",
          "algo",
          "alguien"
        ]
      },
      {
        "id": "grammar-es-a1-3-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: არაფერი მაქვს.",
          "en": "Choose the complete correct sentence expressing: I have nothing.",
          "ru": "Выберите полное правильное предложение со значением: У меня ничего нет."
        },
        "sentence": "____",
        "answer": "No tengo nada.",
        "options": [
          "No tengo nada.",
          "No tengo algo.",
          "No tengo alguien."
        ]
      },
      {
        "id": "grammar-es-a1-3-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: არაფერი მაქვს.",
          "en": "Correct the learner error. Intended meaning: I have nothing.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У меня ничего нет."
        },
        "sentence": "No tengo algo. → ____",
        "answer": "No tengo nada.",
        "options": [
          "No tengo nada.",
          "No tengo alguien.",
          "No tengo algo."
        ]
      },
      {
        "id": "grammar-es-a1-3-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ვინ არის?",
          "en": "Complete the sentence to express: Who is she?",
          "ru": "Заполните предложение со значением: Кто она?"
        },
        "sentence": "¿____ es ella?",
        "answer": "Quién",
        "options": [
          "Quién",
          "Dónde",
          "Cuándo"
        ]
      },
      {
        "id": "grammar-es-a1-3-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ის ვინ არის?",
          "en": "Choose the complete correct sentence expressing: Who is she?",
          "ru": "Выберите полное правильное предложение со значением: Кто она?"
        },
        "sentence": "____",
        "answer": "¿Quién es ella?",
        "options": [
          "¿Quién es ella?",
          "¿Dónde es ella?",
          "¿Cuándo es ella?"
        ]
      },
      {
        "id": "grammar-es-a1-3-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ის ვინ არის?",
          "en": "Correct the learner error. Intended meaning: Who is she?",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Кто она?"
        },
        "sentence": "¿Dónde es ella? → ____",
        "answer": "¿Quién es ella?",
        "options": [
          "¿Quién es ella?",
          "¿Cuándo es ella?",
          "¿Dónde es ella?"
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a1-4",
    "level": "A1",
    "title": {
      "ka": "დაბრუნებითი ზმნები და gustar",
      "en": "Reflexives and gustar",
      "ru": "Возвратные глаголы и gustar"
    },
    "explanation": {
      "ka": "დაბრუნებითი ნაცვალსახელი მოქმედ პირს ეთანხმება: me, te, se, nos, os, se. gustar სხვა მოდელია: მოწონებული რამ ზმნის ქვემდებარეა, მომწონებელი კი მიმღები. პირიან ზმნამდე დაბრუნებითი ნაცვალსახელი ცალკე დგას. levantar საგნის აწევაც შეიძლება იყოს, levantarse კი ადგომაა; მნიშვნელობა ზმნასთან ერთად ისწავლე. ინფინიტივზე ნაცვალსახელი შეიძლება მიერთდეს. ir a კონსტრუქციაში voy a levantarme და me voy a levantar ორივე დასაშვებია, მაგრამ ნაცვალსახელი ორჯერ არ დაწერო. gusta ერთობით საგანს ან ინფინიტივს ეთანხმება; gustan — მრავლობით საგანს. აქ me „მე“-ს კი არა, „ჩემთვის“-ს მსგავს ფუნქციას ასრულებს.",
      "en": "Reflexive pronouns match the subject: me, te, se, nos, os, se. Gustar uses another pattern: the liked thing is the subject and the person is the experiencer. A reflexive pronoun stands separately before a finite verb. Levantar may mean lift an object, while levantarse means get up; learn the meaning with the verb. A pronoun can attach to an infinitive. Both voy a levantarme and me voy a levantar are possible, but do not write the pronoun twice. Gusta agrees with a singular item or infinitive; gustan agrees with plural items. Me functions as an experiencer, not as subject I.",
      "ru": "Возвратные местоимения согласуются с подлежащим: me, te, se, nos, os, se. Gustar устроен иначе: то, что нравится, — подлежащее, человек — испытывающее лицо. Перед личным глаголом возвратное местоимение стоит отдельно. Levantar может означать «поднять предмет», levantarse — «встать»; учите значение с глаголом. Местоимение может присоединяться к инфинитиву. Возможны voy a levantarme и me voy a levantar, но не дублируйте местоимение. Gusta согласуется с единственным предметом или инфинитивом; gustan — с множественными предметами. Me обозначает испытывающее лицо, не подлежащее «я»."
    },
    "rules": [
      {
        "form": "me levanto / te levantas / se levanta",
        "detail": {
          "ka": "პირიან ზმნამდე დაბრუნებითი ნაცვალსახელი ცალკე დგას. levantar საგნის აწევაც შეიძლება იყოს, levantarse კი ადგომაა; მნიშვნელობა ზმნასთან ერთად ისწავლე.",
          "en": "A reflexive pronoun stands separately before a finite verb. Levantar may mean lift an object, while levantarse means get up; learn the meaning with the verb.",
          "ru": "Перед личным глаголом возвратное местоимение стоит отдельно. Levantar может означать «поднять предмет», levantarse — «встать»; учите значение с глаголом."
        }
      },
      {
        "form": "nos levantamos / voy a levantarme",
        "detail": {
          "ka": "ინფინიტივზე ნაცვალსახელი შეიძლება მიერთდეს. ir a კონსტრუქციაში voy a levantarme და me voy a levantar ორივე დასაშვებია, მაგრამ ნაცვალსახელი ორჯერ არ დაწერო.",
          "en": "A pronoun can attach to an infinitive. Both voy a levantarme and me voy a levantar are possible, but do not write the pronoun twice.",
          "ru": "Местоимение может присоединяться к инфинитиву. Возможны voy a levantarme и me voy a levantar, но не дублируйте местоимение."
        }
      },
      {
        "form": "me gusta el café / me gustan los libros",
        "detail": {
          "ka": "gusta ერთობით საგანს ან ინფინიტივს ეთანხმება; gustan — მრავლობით საგანს. აქ me „მე“-ს კი არა, „ჩემთვის“-ს მსგავს ფუნქციას ასრულებს.",
          "en": "Gusta agrees with a singular item or infinitive; gustan agrees with plural items. Me functions as an experiencer, not as subject I.",
          "ru": "Gusta согласуется с единственным предметом или инфинитивом; gustan — с множественными предметами. Me обозначает испытывающее лицо, не подлежащее «я»."
        }
      }
    ],
    "examples": [
      {
        "es": "Yo me levanto a las siete.",
        "ka": "მე შვიდზე ვდგები.",
        "en": "I get up at seven.",
        "ru": "Я встаю в семь."
      },
      {
        "es": "Ella se llama Ana.",
        "ka": "მას ანა ჰქვია.",
        "en": "Her name is Ana.",
        "ru": "Её зовут Анна."
      },
      {
        "es": "Me gusta el café.",
        "ka": "ყავა მომწონს.",
        "en": "I like coffee.",
        "ru": "Мне нравится кофе."
      },
      {
        "es": "Me gustan los libros.",
        "ka": "წიგნები მომწონს.",
        "en": "I like books.",
        "ru": "Мне нравятся книги."
      }
    ],
    "pitfalls": {
      "ka": "Yo gusto el café ჩვეულებრივი „ყავა მომწონს“ არ არის. სხეულის ყოველდღიური მოქმედებებისას არტიკლი ხშირია: me lavo las manos და არა my-ის პირდაპირი გადატანა.",
      "en": "Yo gusto el café is not the ordinary expression for I like coffee. Daily body actions often use an article: me lavo las manos rather than a literal my.",
      "ru": "Yo gusto el café — не обычное «мне нравится кофе». В действиях с частями тела часто нужен артикль: me lavo las manos, не буквальный перенос my."
    },
    "quiz": [
      {
        "id": "grammar-es-a1-4-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე შვიდზე ვდგები.",
          "en": "Complete the sentence to express: I get up at seven.",
          "ru": "Заполните предложение со значением: Я встаю в семь."
        },
        "sentence": "Yo ____ levanto a las siete.",
        "answer": "me",
        "options": [
          "me",
          "te",
          "se"
        ]
      },
      {
        "id": "grammar-es-a1-4-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მე შვიდზე ვდგები.",
          "en": "Choose the complete correct sentence expressing: I get up at seven.",
          "ru": "Выберите полное правильное предложение со значением: Я встаю в семь."
        },
        "sentence": "____",
        "answer": "Yo me levanto a las siete.",
        "options": [
          "Yo me levanto a las siete.",
          "Yo te levanto a las siete.",
          "Yo se levanto a las siete."
        ]
      },
      {
        "id": "grammar-es-a1-4-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მე შვიდზე ვდგები.",
          "en": "Correct the learner error. Intended meaning: I get up at seven.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я встаю в семь."
        },
        "sentence": "Yo te levanto a las siete. → ____",
        "answer": "Yo me levanto a las siete.",
        "options": [
          "Yo me levanto a las siete.",
          "Yo se levanto a las siete.",
          "Yo te levanto a las siete."
        ]
      },
      {
        "id": "grammar-es-a1-4-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას ანა ჰქვია.",
          "en": "Complete the sentence to express: Her name is Ana.",
          "ru": "Заполните предложение со значением: Её зовут Анна."
        },
        "sentence": "Ella ____ llama Ana.",
        "answer": "se",
        "options": [
          "se",
          "me",
          "nos"
        ]
      },
      {
        "id": "grammar-es-a1-4-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მას ანა ჰქვია.",
          "en": "Choose the complete correct sentence expressing: Her name is Ana.",
          "ru": "Выберите полное правильное предложение со значением: Её зовут Анна."
        },
        "sentence": "____",
        "answer": "Ella se llama Ana.",
        "options": [
          "Ella se llama Ana.",
          "Ella me llama Ana.",
          "Ella nos llama Ana."
        ]
      },
      {
        "id": "grammar-es-a1-4-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მას ანა ჰქვია.",
          "en": "Correct the learner error. Intended meaning: Her name is Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Её зовут Анна."
        },
        "sentence": "Ella me llama Ana. → ____",
        "answer": "Ella se llama Ana.",
        "options": [
          "Ella se llama Ana.",
          "Ella nos llama Ana.",
          "Ella me llama Ana."
        ]
      },
      {
        "id": "grammar-es-a1-4-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ყავა მომწონს.",
          "en": "Complete the sentence to express: I like coffee.",
          "ru": "Заполните предложение со значением: Мне нравится кофе."
        },
        "sentence": "Me ____ el café.",
        "answer": "gusta",
        "options": [
          "gusta",
          "gustan",
          "gusto"
        ]
      },
      {
        "id": "grammar-es-a1-4-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ყავა მომწონს.",
          "en": "Choose the complete correct sentence expressing: I like coffee.",
          "ru": "Выберите полное правильное предложение со значением: Мне нравится кофе."
        },
        "sentence": "____",
        "answer": "Me gusta el café.",
        "options": [
          "Me gusta el café.",
          "Me gustan el café.",
          "Me gusto el café."
        ]
      },
      {
        "id": "grammar-es-a1-4-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ყავა მომწონს.",
          "en": "Correct the learner error. Intended meaning: I like coffee.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мне нравится кофе."
        },
        "sentence": "Me gustan el café. → ____",
        "answer": "Me gusta el café.",
        "options": [
          "Me gusta el café.",
          "Me gusto el café.",
          "Me gustan el café."
        ]
      },
      {
        "id": "grammar-es-a1-4-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნები მომწონს.",
          "en": "Complete the sentence to express: I like books.",
          "ru": "Заполните предложение со значением: Мне нравятся книги."
        },
        "sentence": "Me ____ los libros.",
        "answer": "gustan",
        "options": [
          "gustan",
          "gusta",
          "gusto"
        ]
      },
      {
        "id": "grammar-es-a1-4-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წიგნები მომწონს.",
          "en": "Choose the complete correct sentence expressing: I like books.",
          "ru": "Выберите полное правильное предложение со значением: Мне нравятся книги."
        },
        "sentence": "____",
        "answer": "Me gustan los libros.",
        "options": [
          "Me gustan los libros.",
          "Me gusta los libros.",
          "Me gusto los libros."
        ]
      },
      {
        "id": "grammar-es-a1-4-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წიგნები მომწონს.",
          "en": "Correct the learner error. Intended meaning: I like books.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мне нравятся книги."
        },
        "sentence": "Me gusta los libros. → ____",
        "answer": "Me gustan los libros.",
        "options": [
          "Me gustan los libros.",
          "Me gusto los libros.",
          "Me gusta los libros."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a2-1",
    "level": "A2",
    "title": {
      "ka": "დასრულებული წარსული: pretérito",
      "en": "Completed past: preterite",
      "ru": "Завершённое прошлое: pretérito"
    },
    "explanation": {
      "ka": "pretérito indefinido წარსულში საზღვრიან მოვლენას გადმოსცემს. ayer, el lunes და el año pasado ხშირად დასრულებულ პერიოდს აღნიშნავს; მთავარი არჩევანი მაინც მოვლენაზე ხედვაა. რეგულარული -ar წარსულში yo-ს დაბოლოება -é არის, él/ella-ს — -ó. წერილობითი მახვილი დროსა და პირს ასხვავებს. რეგულარული -er და -ir ჯგუფები pretérito-ში ერთ დაბოლოებებს იღებს. ზოგი nosotros ფორმა აწმყოს ემთხვევა და კონტექსტი გჭირდება. ir და ser-ს წარსულის ეს ფორმები საერთო აქვს; აზრს კონტექსტი ადგენს. ფორმები tuve, hice და estuve არარეგულარულია და ცალკე ისწავლება.",
      "en": "The preterite presents a bounded past event. Ayer, el lunes and el año pasado often mark finished periods, but the central distinction is how the event is viewed. Regular -ar preterite uses yo -é and él/ella -ó. Written accents help distinguish tense and person. Regular -er and -ir verbs share preterite endings. Some nosotros forms match the present, so context is necessary. Ir and ser share these past forms; context determines meaning. Tuve, hice and estuve are irregular and must be learned separately.",
      "ru": "Pretérito indefinido представляет ограниченное событие в прошлом. Ayer, el lunes и el año pasado часто обозначают завершённый период, но основное различие — взгляд на событие. В правильном прошедшем -ar форма yo имеет -é, él/ella — -ó. Письменное ударение различает время и лицо. Правильные -er и -ir имеют общие окончания pretérito. Некоторые формы nosotros совпадают с настоящим и требуют контекста. Ir и ser имеют эти общие формы прошлого; значение определяет контекст. Tuve, hice и estuve неправильные и учатся отдельно."
    },
    "rules": [
      {
        "form": "hablé / hablaste / habló / hablamos / hablasteis / hablaron",
        "detail": {
          "ka": "რეგულარული -ar წარსულში yo-ს დაბოლოება -é არის, él/ella-ს — -ó. წერილობითი მახვილი დროსა და პირს ასხვავებს.",
          "en": "Regular -ar preterite uses yo -é and él/ella -ó. Written accents help distinguish tense and person.",
          "ru": "В правильном прошедшем -ar форма yo имеет -é, él/ella — -ó. Письменное ударение различает время и лицо."
        }
      },
      {
        "form": "comí / comiste / comió / comimos / comisteis / comieron",
        "detail": {
          "ka": "რეგულარული -er და -ir ჯგუფები pretérito-ში ერთ დაბოლოებებს იღებს. ზოგი nosotros ფორმა აწმყოს ემთხვევა და კონტექსტი გჭირდება.",
          "en": "Regular -er and -ir verbs share preterite endings. Some nosotros forms match the present, so context is necessary.",
          "ru": "Правильные -er и -ir имеют общие окончания pretérito. Некоторые формы nosotros совпадают с настоящим и требуют контекста."
        }
      },
      {
        "form": "fui / fuiste / fue / fuimos / fuisteis / fueron",
        "detail": {
          "ka": "ir და ser-ს წარსულის ეს ფორმები საერთო აქვს; აზრს კონტექსტი ადგენს. ფორმები tuve, hice და estuve არარეგულარულია და ცალკე ისწავლება.",
          "en": "Ir and ser share these past forms; context determines meaning. Tuve, hice and estuve are irregular and must be learned separately.",
          "ru": "Ir и ser имеют эти общие формы прошлого; значение определяет контекст. Tuve, hice и estuve неправильные и учатся отдельно."
        }
      }
    ],
    "examples": [
      {
        "es": "Ayer hablé con Ana.",
        "ka": "გუშინ ანას ვესაუბრე.",
        "en": "Yesterday I spoke to Ana.",
        "ru": "Вчера я поговорил с Анной."
      },
      {
        "es": "Ella comió a las dos.",
        "ka": "მან ორ საათზე ჭამა.",
        "en": "She ate at two.",
        "ru": "Она поела в два."
      },
      {
        "es": "Ayer fuimos al museo.",
        "ka": "გუშინ მუზეუმში წავედით.",
        "en": "Yesterday we went to the museum.",
        "ru": "Вчера мы пошли в музей."
      },
      {
        "es": "Yo tuve una idea.",
        "ka": "ერთი იდეა მომივიდა.",
        "en": "I had an idea.",
        "ru": "У меня появилась идея."
      }
    ],
    "pitfalls": {
      "ka": "Yo hablo აწმყოა, yo hablé წარსული. მახვილის დაკარგვა ზოგჯერ სხვა სიტყვასა ან პირს ქმნის: habló და hablo ერთმანეთს არ უდრის.",
      "en": "Yo hablo is present, yo hablé past. Dropping an accent can create another person or tense: habló and hablo differ.",
      "ru": "Yo hablo — настоящее, yo hablé — прошлое. Потеря ударения иногда создаёт другое лицо или время: habló и hablo различаются."
    },
    "quiz": [
      {
        "id": "grammar-es-a2-1-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: გუშინ ანას ვესაუბრე.",
          "en": "Complete the sentence to express: Yesterday I spoke to Ana.",
          "ru": "Заполните предложение со значением: Вчера я поговорил с Анной."
        },
        "sentence": "Ayer ____ con Ana.",
        "answer": "hablé",
        "options": [
          "hablé",
          "hablo",
          "hablas"
        ]
      },
      {
        "id": "grammar-es-a2-1-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: გუშინ ანას ვესაუბრე.",
          "en": "Choose the complete correct sentence expressing: Yesterday I spoke to Ana.",
          "ru": "Выберите полное правильное предложение со значением: Вчера я поговорил с Анной."
        },
        "sentence": "____",
        "answer": "Ayer hablé con Ana.",
        "options": [
          "Ayer hablé con Ana.",
          "Ayer hablo con Ana.",
          "Ayer hablas con Ana."
        ]
      },
      {
        "id": "grammar-es-a2-1-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: გუშინ ანას ვესაუბრე.",
          "en": "Correct the learner error. Intended meaning: Yesterday I spoke to Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Вчера я поговорил с Анной."
        },
        "sentence": "Ayer hablo con Ana. → ____",
        "answer": "Ayer hablé con Ana.",
        "options": [
          "Ayer hablé con Ana.",
          "Ayer hablas con Ana.",
          "Ayer hablo con Ana."
        ]
      },
      {
        "id": "grammar-es-a2-1-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან ორ საათზე ჭამა.",
          "en": "Complete the sentence to express: She ate at two.",
          "ru": "Заполните предложение со значением: Она поела в два."
        },
        "sentence": "Ella ____ a las dos.",
        "answer": "comió",
        "options": [
          "comió",
          "comí",
          "comiste"
        ]
      },
      {
        "id": "grammar-es-a2-1-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მან ორ საათზე ჭამა.",
          "en": "Choose the complete correct sentence expressing: She ate at two.",
          "ru": "Выберите полное правильное предложение со значением: Она поела в два."
        },
        "sentence": "____",
        "answer": "Ella comió a las dos.",
        "options": [
          "Ella comió a las dos.",
          "Ella comí a las dos.",
          "Ella comiste a las dos."
        ]
      },
      {
        "id": "grammar-es-a2-1-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მან ორ საათზე ჭამა.",
          "en": "Correct the learner error. Intended meaning: She ate at two.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Она поела в два."
        },
        "sentence": "Ella comí a las dos. → ____",
        "answer": "Ella comió a las dos.",
        "options": [
          "Ella comió a las dos.",
          "Ella comiste a las dos.",
          "Ella comí a las dos."
        ]
      },
      {
        "id": "grammar-es-a2-1-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: გუშინ მუზეუმში წავედით.",
          "en": "Complete the sentence to express: Yesterday we went to the museum.",
          "ru": "Заполните предложение со значением: Вчера мы пошли в музей."
        },
        "sentence": "Ayer ____ al museo.",
        "answer": "fuimos",
        "options": [
          "fuimos",
          "fui",
          "fueron"
        ]
      },
      {
        "id": "grammar-es-a2-1-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: გუშინ მუზეუმში წავედით.",
          "en": "Choose the complete correct sentence expressing: Yesterday we went to the museum.",
          "ru": "Выберите полное правильное предложение со значением: Вчера мы пошли в музей."
        },
        "sentence": "____",
        "answer": "Ayer fuimos al museo.",
        "options": [
          "Ayer fuimos al museo.",
          "Ayer fui al museo.",
          "Ayer fueron al museo."
        ]
      },
      {
        "id": "grammar-es-a2-1-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: გუშინ მუზეუმში წავედით.",
          "en": "Correct the learner error. Intended meaning: Yesterday we went to the museum.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Вчера мы пошли в музей."
        },
        "sentence": "Ayer fui al museo. → ____",
        "answer": "Ayer fuimos al museo.",
        "options": [
          "Ayer fuimos al museo.",
          "Ayer fueron al museo.",
          "Ayer fui al museo."
        ]
      },
      {
        "id": "grammar-es-a2-1-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ერთი იდეა მომივიდა.",
          "en": "Complete the sentence to express: I had an idea.",
          "ru": "Заполните предложение со значением: У меня появилась идея."
        },
        "sentence": "Yo ____ una idea.",
        "answer": "tuve",
        "options": [
          "tuve",
          "tení",
          "tuvieron"
        ]
      },
      {
        "id": "grammar-es-a2-1-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ერთი იდეა მომივიდა.",
          "en": "Choose the complete correct sentence expressing: I had an idea.",
          "ru": "Выберите полное правильное предложение со значением: У меня появилась идея."
        },
        "sentence": "____",
        "answer": "Yo tuve una idea.",
        "options": [
          "Yo tuve una idea.",
          "Yo tení una idea.",
          "Yo tuvieron una idea."
        ]
      },
      {
        "id": "grammar-es-a2-1-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ერთი იდეა მომივიდა.",
          "en": "Correct the learner error. Intended meaning: I had an idea.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У меня появилась идея."
        },
        "sentence": "Yo tení una idea. → ____",
        "answer": "Yo tuve una idea.",
        "options": [
          "Yo tuve una idea.",
          "Yo tuvieron una idea.",
          "Yo tení una idea."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a2-2",
    "level": "A2",
    "title": {
      "ka": "წარსულის ფონი და ჩვევა",
      "en": "Imperfect and past background",
      "ru": "Imperfecto и фон прошлого"
    },
    "explanation": {
      "ka": "imperfecto წარსულის ჩვევას, აღწერას ან პროცესის შიდა ხედვას ქმნის. pretérito მოვლენის საზღვარს აჩვენებს. ერთი და იგივე სიტუაცია ორივე ხედვით შეიძლება ითქვას, მაგრამ აზრის აქცენტი იცვლება. რეგულარულ -ar ზმნებთან -aba ჯგუფი გამოიყენება. yo და él/ella ფორმები ხშირად ერთნაირია, ამიტომ საჭიროებისას ნაცვალსახელი დაამატე. რეგულარული -er/-ir imperfecto-ში -ía ჯგუფს იყენებს. ხშირად აღწერს ყოველდღიურ ქცევას: de niño leía. ზუსტი ხანგრძლივობის არსებობა თავისთავად დროს არ განსაზღვრავს. ძირითადი არარეგულარული imperfecto ფორმებია ser, ir და ver. ფონისა და ახალი მოვლენის მაგალითია Leía cuando llamó: კითხვის პროცესი ზარმა გადაკვეთა.",
      "en": "The imperfect describes past habits, background and an internal view of a process. The preterite bounds the event. The same situation may allow both perspectives with different emphasis. Regular -ar verbs use the -aba series. Yo and él/ella forms often coincide, so add a pronoun when needed. Regular -er/-ir use the -ía series. It often describes repeated childhood behaviour: de niño leía. A stated duration alone does not determine the tense. The principal irregular imperfect verbs are ser, ir and ver. Leía cuando llamó combines a reading background with a call as a new event.",
      "ru": "Imperfecto описывает привычки, фон и взгляд изнутри процесса в прошлом. Pretérito ограничивает событие. Одна ситуация может передаваться обоими видами взгляда с разным акцентом. Правильные -ar используют ряд -aba. Формы yo и él/ella часто совпадают, поэтому при необходимости добавляйте местоимение. Правильные -er/-ir используют ряд -ía. Часто описывается повторение в детстве: de niño leía. Сама указанная длительность не определяет время. Основные неправильные imperfecto — ser, ir и ver. Leía cuando llamó сочетает фон чтения с новым событием звонка."
    },
    "rules": [
      {
        "form": "hablaba / hablabas / hablábamos / hablaban",
        "detail": {
          "ka": "რეგულარულ -ar ზმნებთან -aba ჯგუფი გამოიყენება. yo და él/ella ფორმები ხშირად ერთნაირია, ამიტომ საჭიროებისას ნაცვალსახელი დაამატე.",
          "en": "Regular -ar verbs use the -aba series. Yo and él/ella forms often coincide, so add a pronoun when needed.",
          "ru": "Правильные -ar используют ряд -aba. Формы yo и él/ella часто совпадают, поэтому при необходимости добавляйте местоимение."
        }
      },
      {
        "form": "comía / vivía / comíamos / vivían",
        "detail": {
          "ka": "რეგულარული -er/-ir imperfecto-ში -ía ჯგუფს იყენებს. ხშირად აღწერს ყოველდღიურ ქცევას: de niño leía. ზუსტი ხანგრძლივობის არსებობა თავისთავად დროს არ განსაზღვრავს.",
          "en": "Regular -er/-ir use the -ía series. It often describes repeated childhood behaviour: de niño leía. A stated duration alone does not determine the tense.",
          "ru": "Правильные -er/-ir используют ряд -ía. Часто описывается повторение в детстве: de niño leía. Сама указанная длительность не определяет время."
        }
      },
      {
        "form": "era / iba / veía",
        "detail": {
          "ka": "ძირითადი არარეგულარული imperfecto ფორმებია ser, ir და ver. ფონისა და ახალი მოვლენის მაგალითია Leía cuando llamó: კითხვის პროცესი ზარმა გადაკვეთა.",
          "en": "The principal irregular imperfect verbs are ser, ir and ver. Leía cuando llamó combines a reading background with a call as a new event.",
          "ru": "Основные неправильные imperfecto — ser, ir и ver. Leía cuando llamó сочетает фон чтения с новым событием звонка."
        }
      }
    ],
    "examples": [
      {
        "es": "De niño, yo jugaba aquí.",
        "ka": "ბავშვობაში აქ ვთამაშობდი.",
        "en": "As a child, I used to play here.",
        "ru": "В детстве я играл здесь."
      },
      {
        "es": "Antes vivíamos en Madrid.",
        "ka": "ადრე მადრიდში ვცხოვრობდით.",
        "en": "We used to live in Madrid.",
        "ru": "Раньше мы жили в Мадриде."
      },
      {
        "es": "Yo leía cuando llamó Ana.",
        "ka": "ვკითხულობდი, როცა ანამ დარეკა.",
        "en": "I was reading when Ana called.",
        "ru": "Я читал, когда позвонила Анна."
      },
      {
        "es": "Cuando era niña, iba al parque cada día.",
        "ka": "როცა პატარა გოგო ვიყავი, პარკში ყოველდღე დავდიოდი.",
        "en": "When I was a girl, I went to the park every day.",
        "ru": "Когда я была девочкой, каждый день ходила в парк."
      }
    ],
    "pitfalls": {
      "ka": "ყოველი წარსული წინადადება pretérito-ს არ ითხოვს. მაგრამ ყოველი ხანგრძლივი მოქმედებაც imperfecto არაა: გრძელ მოვლენასაც შეუძლია მთლიანად წარმოდგენა.",
      "en": "Not every past sentence requires preterite. Nor does every long action require imperfect: a long event can be viewed as a bounded whole.",
      "ru": "Не всякое прошлое предложение требует pretérito. Не всякое длительное действие требует imperfecto: долгое событие можно представить целиком."
    },
    "quiz": [
      {
        "id": "grammar-es-a2-2-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ბავშვობაში აქ ვთამაშობდი.",
          "en": "Complete the sentence to express: As a child, I used to play here.",
          "ru": "Заполните предложение со значением: В детстве я играл здесь."
        },
        "sentence": "De niño, yo ____ aquí.",
        "answer": "jugaba",
        "options": [
          "jugaba",
          "jugaré",
          "juego"
        ]
      },
      {
        "id": "grammar-es-a2-2-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ბავშვობაში აქ ვთამაშობდი.",
          "en": "Choose the complete correct sentence expressing: As a child, I used to play here.",
          "ru": "Выберите полное правильное предложение со значением: В детстве я играл здесь."
        },
        "sentence": "____",
        "answer": "De niño, yo jugaba aquí.",
        "options": [
          "De niño, yo jugaba aquí.",
          "De niño, yo jugaré aquí.",
          "De niño, yo juego aquí."
        ]
      },
      {
        "id": "grammar-es-a2-2-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ბავშვობაში აქ ვთამაშობდი.",
          "en": "Correct the learner error. Intended meaning: As a child, I used to play here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: В детстве я играл здесь."
        },
        "sentence": "De niño, yo jugaré aquí. → ____",
        "answer": "De niño, yo jugaba aquí.",
        "options": [
          "De niño, yo jugaba aquí.",
          "De niño, yo juego aquí.",
          "De niño, yo jugaré aquí."
        ]
      },
      {
        "id": "grammar-es-a2-2-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადრე მადრიდში ვცხოვრობდით.",
          "en": "Complete the sentence to express: We used to live in Madrid.",
          "ru": "Заполните предложение со значением: Раньше мы жили в Мадриде."
        },
        "sentence": "Antes ____ en Madrid.",
        "answer": "vivíamos",
        "options": [
          "vivíamos",
          "vivíais",
          "vivían"
        ]
      },
      {
        "id": "grammar-es-a2-2-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ადრე მადრიდში ვცხოვრობდით.",
          "en": "Choose the complete correct sentence expressing: We used to live in Madrid.",
          "ru": "Выберите полное правильное предложение со значением: Раньше мы жили в Мадриде."
        },
        "sentence": "____",
        "answer": "Antes vivíamos en Madrid.",
        "options": [
          "Antes vivíamos en Madrid.",
          "Antes vivíais en Madrid.",
          "Antes vivían en Madrid."
        ]
      },
      {
        "id": "grammar-es-a2-2-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ადრე მადრიდში ვცხოვრობდით.",
          "en": "Correct the learner error. Intended meaning: We used to live in Madrid.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Раньше мы жили в Мадриде."
        },
        "sentence": "Antes vivíais en Madrid. → ____",
        "answer": "Antes vivíamos en Madrid.",
        "options": [
          "Antes vivíamos en Madrid.",
          "Antes vivían en Madrid.",
          "Antes vivíais en Madrid."
        ]
      },
      {
        "id": "grammar-es-a2-2-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ვკითხულობდი, როცა ანამ დარეკა.",
          "en": "Complete the sentence to express: I was reading when Ana called.",
          "ru": "Заполните предложение со значением: Я читал, когда позвонила Анна."
        },
        "sentence": "Yo ____ cuando llamó Ana.",
        "answer": "leía",
        "options": [
          "leía",
          "leeré",
          "leo"
        ]
      },
      {
        "id": "grammar-es-a2-2-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ვკითხულობდი, როცა ანამ დარეკა.",
          "en": "Choose the complete correct sentence expressing: I was reading when Ana called.",
          "ru": "Выберите полное правильное предложение со значением: Я читал, когда позвонила Анна."
        },
        "sentence": "____",
        "answer": "Yo leía cuando llamó Ana.",
        "options": [
          "Yo leía cuando llamó Ana.",
          "Yo leeré cuando llamó Ana.",
          "Yo leo cuando llamó Ana."
        ]
      },
      {
        "id": "grammar-es-a2-2-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ვკითხულობდი, როცა ანამ დარეკა.",
          "en": "Correct the learner error. Intended meaning: I was reading when Ana called.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я читал, когда позвонила Анна."
        },
        "sentence": "Yo leeré cuando llamó Ana. → ____",
        "answer": "Yo leía cuando llamó Ana.",
        "options": [
          "Yo leía cuando llamó Ana.",
          "Yo leo cuando llamó Ana.",
          "Yo leeré cuando llamó Ana."
        ]
      },
      {
        "id": "grammar-es-a2-2-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: როცა პატარა გოგო ვიყავი, პარკში ყოველდღე დავდიოდი.",
          "en": "Complete the sentence to express: When I was a girl, I went to the park every day.",
          "ru": "Заполните предложение со значением: Когда я была девочкой, каждый день ходила в парк."
        },
        "sentence": "Cuando era niña, ____ al parque cada día.",
        "answer": "iba",
        "options": [
          "iba",
          "iré",
          "voy"
        ]
      },
      {
        "id": "grammar-es-a2-2-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: როცა პატარა გოგო ვიყავი, პარკში ყოველდღე დავდიოდი.",
          "en": "Choose the complete correct sentence expressing: When I was a girl, I went to the park every day.",
          "ru": "Выберите полное правильное предложение со значением: Когда я была девочкой, каждый день ходила в парк."
        },
        "sentence": "____",
        "answer": "Cuando era niña, iba al parque cada día.",
        "options": [
          "Cuando era niña, iba al parque cada día.",
          "Cuando era niña, iré al parque cada día.",
          "Cuando era niña, voy al parque cada día."
        ]
      },
      {
        "id": "grammar-es-a2-2-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: როცა პატარა გოგო ვიყავი, პარკში ყოველდღე დავდიოდი.",
          "en": "Correct the learner error. Intended meaning: When I was a girl, I went to the park every day.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Когда я была девочкой, каждый день ходила в парк."
        },
        "sentence": "Cuando era niña, iré al parque cada día. → ____",
        "answer": "Cuando era niña, iba al parque cada día.",
        "options": [
          "Cuando era niña, iba al parque cada día.",
          "Cuando era niña, voy al parque cada día.",
          "Cuando era niña, iré al parque cada día."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a2-3",
    "level": "A2",
    "title": {
      "ka": "haber და გამოცდილების დრო",
      "en": "Haber and the present perfect",
      "ru": "Haber и pretérito perfecto"
    },
    "explanation": {
      "ka": "he/has/ha/hemos/habéis/han + participio გამოცდილებას ან აწმყოსთან დაკავშირებულ წარსულს აღნიშნავს. გამოყენება რეგიონების მიხედვით განსხვავდება: ესპანეთის ბევრ ვარიანტში hoy-სთან perfecto ხშირია, ამერიკაში pretérito-ც ჩვეულებრივია. რეგულარული participio არის -ado ან -ido. დამხმარე haber პირში იცვლება, ხოლო participio ამ მოდელში უცვლელია, მოსაუბრის სქესის მიუხედავად. ხშირი არაწესიერი ფორმებია hecho, visto, escrito, dicho, abierto. he escribido ნაცვლად he escrito გამოიყენე. alguna vez გამოცდილებას ეკითხება, ya დასრულებულ ფაქტს, todavía no — ჯერ არმომხდარს. უარყოფა haber-ს წინ უსწრებს: no he terminado.",
      "en": "He/has/ha/hemos/habéis/han + participle links past experience or events to the present. Usage varies by region: much of Spain often uses perfecto with hoy, while preterite is also normal in the Americas. Regular participles end in -ado or -ido. Auxiliary haber changes for person; the participle remains unchanged in this construction regardless of the speaker’s gender. Common irregular forms include hecho, visto, escrito, dicho and abierto. Use he escrito, not he escribido. Alguna vez asks about experience; ya marks completion, todavía no means not yet. Negation comes before haber: no he terminado.",
      "ru": "He/has/ha/hemos/habéis/han + причастие связывает опыт или события с настоящим. Употребление регионально: во многих вариантах Испании с hoy часто perfecto, в Америке обычно и pretérito. Правильное причастие оканчивается на -ado или -ido. Haber меняется по лицам; причастие в этой конструкции неизменно независимо от рода говорящего. Частые неправильные формы: hecho, visto, escrito, dicho, abierto. Нужно he escrito, не he escribido. Alguna vez спрашивает об опыте, ya обозначает завершение, todavía no — «ещё нет». Отрицание стоит перед haber: no he terminado."
    },
    "rules": [
      {
        "form": "he hablado / hemos comido",
        "detail": {
          "ka": "რეგულარული participio არის -ado ან -ido. დამხმარე haber პირში იცვლება, ხოლო participio ამ მოდელში უცვლელია, მოსაუბრის სქესის მიუხედავად.",
          "en": "Regular participles end in -ado or -ido. Auxiliary haber changes for person; the participle remains unchanged in this construction regardless of the speaker’s gender.",
          "ru": "Правильное причастие оканчивается на -ado или -ido. Haber меняется по лицам; причастие в этой конструкции неизменно независимо от рода говорящего."
        }
      },
      {
        "form": "he hecho / ha visto / hemos escrito",
        "detail": {
          "ka": "ხშირი არაწესიერი ფორმებია hecho, visto, escrito, dicho, abierto. he escribido ნაცვლად he escrito გამოიყენე.",
          "en": "Common irregular forms include hecho, visto, escrito, dicho and abierto. Use he escrito, not he escribido.",
          "ru": "Частые неправильные формы: hecho, visto, escrito, dicho, abierto. Нужно he escrito, не he escribido."
        }
      },
      {
        "form": "¿Has estado allí alguna vez?",
        "detail": {
          "ka": "alguna vez გამოცდილებას ეკითხება, ya დასრულებულ ფაქტს, todavía no — ჯერ არმომხდარს. უარყოფა haber-ს წინ უსწრებს: no he terminado.",
          "en": "Alguna vez asks about experience; ya marks completion, todavía no means not yet. Negation comes before haber: no he terminado.",
          "ru": "Alguna vez спрашивает об опыте, ya обозначает завершение, todavía no — «ещё нет». Отрицание стоит перед haber: no he terminado."
        }
      }
    ],
    "examples": [
      {
        "es": "Yo he visitado Sevilla.",
        "ka": "სევილიაში ნამყოფი ვარ.",
        "en": "I have visited Seville.",
        "ru": "Я бывал в Севилье."
      },
      {
        "es": "Ella ha escrito una carta.",
        "ka": "მან წერილი დაწერა.",
        "en": "She has written a letter.",
        "ru": "Она написала письмо."
      },
      {
        "es": "Nosotros hemos visto la película.",
        "ka": "ჩვენ ეს ფილმი ნანახი გვაქვს.",
        "en": "We have seen the film.",
        "ru": "Мы видели фильм."
      },
      {
        "es": "Todavía no he terminado.",
        "ka": "ჯერ არ დამისრულებია.",
        "en": "I have not finished yet.",
        "ru": "Я ещё не закончил."
      }
    ],
    "pitfalls": {
      "ka": "tener possession-სა და perfect-ის haber-ს ნუ აურევ. Tengo escrito შეიძლება სხვა კონსტრუქცია იყოს; მარტივი perfect-ისთვის He escrito თქვი.",
      "en": "Do not confuse possessive tener with perfect auxiliary haber. Tengo escrito can form another construction; the ordinary perfect is He escrito.",
      "ru": "Не смешивайте tener обладания и вспомогательное haber. Tengo escrito может быть другой конструкцией; обычный перфект — He escrito."
    },
    "quiz": [
      {
        "id": "grammar-es-a2-3-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: სევილიაში ნამყოფი ვარ.",
          "en": "Complete the sentence to express: I have visited Seville.",
          "ru": "Заполните предложение со значением: Я бывал в Севилье."
        },
        "sentence": "Yo ____ visitado Sevilla.",
        "answer": "he",
        "options": [
          "he",
          "has",
          "han"
        ]
      },
      {
        "id": "grammar-es-a2-3-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: სევილიაში ნამყოფი ვარ.",
          "en": "Choose the complete correct sentence expressing: I have visited Seville.",
          "ru": "Выберите полное правильное предложение со значением: Я бывал в Севилье."
        },
        "sentence": "____",
        "answer": "Yo he visitado Sevilla.",
        "options": [
          "Yo he visitado Sevilla.",
          "Yo has visitado Sevilla.",
          "Yo han visitado Sevilla."
        ]
      },
      {
        "id": "grammar-es-a2-3-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: სევილიაში ნამყოფი ვარ.",
          "en": "Correct the learner error. Intended meaning: I have visited Seville.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я бывал в Севилье."
        },
        "sentence": "Yo has visitado Sevilla. → ____",
        "answer": "Yo he visitado Sevilla.",
        "options": [
          "Yo he visitado Sevilla.",
          "Yo han visitado Sevilla.",
          "Yo has visitado Sevilla."
        ]
      },
      {
        "id": "grammar-es-a2-3-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან წერილი დაწერა.",
          "en": "Complete the sentence to express: She has written a letter.",
          "ru": "Заполните предложение со значением: Она написала письмо."
        },
        "sentence": "Ella ha ____ una carta.",
        "answer": "escrito",
        "options": [
          "escrito",
          "escribido",
          "escribiendo"
        ]
      },
      {
        "id": "grammar-es-a2-3-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მან წერილი დაწერა.",
          "en": "Choose the complete correct sentence expressing: She has written a letter.",
          "ru": "Выберите полное правильное предложение со значением: Она написала письмо."
        },
        "sentence": "____",
        "answer": "Ella ha escrito una carta.",
        "options": [
          "Ella ha escrito una carta.",
          "Ella ha escribido una carta.",
          "Ella ha escribiendo una carta."
        ]
      },
      {
        "id": "grammar-es-a2-3-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მან წერილი დაწერა.",
          "en": "Correct the learner error. Intended meaning: She has written a letter.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Она написала письмо."
        },
        "sentence": "Ella ha escribido una carta. → ____",
        "answer": "Ella ha escrito una carta.",
        "options": [
          "Ella ha escrito una carta.",
          "Ella ha escribiendo una carta.",
          "Ella ha escribido una carta."
        ]
      },
      {
        "id": "grammar-es-a2-3-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ ეს ფილმი ნანახი გვაქვს.",
          "en": "Complete the sentence to express: We have seen the film.",
          "ru": "Заполните предложение со значением: Мы видели фильм."
        },
        "sentence": "Nosotros ____ visto la película.",
        "answer": "hemos",
        "options": [
          "hemos",
          "han",
          "he"
        ]
      },
      {
        "id": "grammar-es-a2-3-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ ეს ფილმი ნანახი გვაქვს.",
          "en": "Choose the complete correct sentence expressing: We have seen the film.",
          "ru": "Выберите полное правильное предложение со значением: Мы видели фильм."
        },
        "sentence": "____",
        "answer": "Nosotros hemos visto la película.",
        "options": [
          "Nosotros hemos visto la película.",
          "Nosotros han visto la película.",
          "Nosotros he visto la película."
        ]
      },
      {
        "id": "grammar-es-a2-3-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ ეს ფილმი ნანახი გვაქვს.",
          "en": "Correct the learner error. Intended meaning: We have seen the film.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мы видели фильм."
        },
        "sentence": "Nosotros han visto la película. → ____",
        "answer": "Nosotros hemos visto la película.",
        "options": [
          "Nosotros hemos visto la película.",
          "Nosotros he visto la película.",
          "Nosotros han visto la película."
        ]
      },
      {
        "id": "grammar-es-a2-3-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჯერ არ დამისრულებია.",
          "en": "Complete the sentence to express: I have not finished yet.",
          "ru": "Заполните предложение со значением: Я ещё не закончил."
        },
        "sentence": "Todavía no he ____.",
        "answer": "terminado",
        "options": [
          "terminado",
          "terminada",
          "terminando"
        ]
      },
      {
        "id": "grammar-es-a2-3-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჯერ არ დამისრულებია.",
          "en": "Choose the complete correct sentence expressing: I have not finished yet.",
          "ru": "Выберите полное правильное предложение со значением: Я ещё не закончил."
        },
        "sentence": "____",
        "answer": "Todavía no he terminado.",
        "options": [
          "Todavía no he terminado.",
          "Todavía no he terminada.",
          "Todavía no he terminando."
        ]
      },
      {
        "id": "grammar-es-a2-3-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჯერ არ დამისრულებია.",
          "en": "Correct the learner error. Intended meaning: I have not finished yet.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я ещё не закончил."
        },
        "sentence": "Todavía no he terminada. → ____",
        "answer": "Todavía no he terminado.",
        "options": [
          "Todavía no he terminado.",
          "Todavía no he terminando.",
          "Todavía no he terminada."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-a2-4",
    "level": "A2",
    "title": {
      "ka": "შედარება და რაოდენობა",
      "en": "Comparison and quantity",
      "ru": "Сравнение и количество"
    },
    "explanation": {
      "ka": "შედარებაში más…que და menos…que ორ საგანს აკავშირებს. თანაბარი თვისებისთვის tan…como გამოიყენება; რაოდენობის თანაბრობისას tanto სახელის სქესსა და რიცხვში იცვლება. ზედსართავი ჩვეულებრივ ფორმაში რჩება და შესაბამის სახელს ეთანხმება. ქართულზე დაყრდნობით que არ გამოტოვო. tan ზედსართავთან უცვლელია. tanto/tanta/tantos/tantas სახელს ეთანხმება; tanto-ს ნაცვლად tan libros არ გამოიყენება. mejor და peor არარეგულარული შედარებითებია. ყველაზე-ს ხშირად el/la/los/las más + ზედსართავი გადმოსცემს; más mejor სტანდარტულ ფორმად არ გამოიყენო.",
      "en": "Más…que and menos…que compare two referents. Equal qualities use tan…como; equal quantities use tanto agreeing with the noun’s gender and number. The adjective retains its ordinary form and agreement. Do not omit que when translating from Georgian. Tan is unchanged before an adjective. Tanto/tanta/tantos/tantas agrees with a noun; tan libros is incorrect. Mejor and peor are irregular comparatives. Superlatives often use el/la/los/las más + adjective; avoid más mejor in the standard pattern.",
      "ru": "Más…que и menos…que сравнивают два объекта. Равные качества — tan…como; равное количество — tanto с согласованием по роду и числу. Прилагательное сохраняет обычную форму и согласование. Не пропускайте que при переводе с грузинского. Tan неизменно перед прилагательным. Tanto/tanta/tantos/tantas согласуется с существительным; tan libros неверно. Mejor и peor — неправильные сравнительные формы. Превосходная часто строится el/la/los/las más + прилагательное; избегайте más mejor."
    },
    "rules": [
      {
        "form": "más grande que / menos caro que",
        "detail": {
          "ka": "ზედსართავი ჩვეულებრივ ფორმაში რჩება და შესაბამის სახელს ეთანხმება. ქართულზე დაყრდნობით que არ გამოტოვო.",
          "en": "The adjective retains its ordinary form and agreement. Do not omit que when translating from Georgian.",
          "ru": "Прилагательное сохраняет обычную форму и согласование. Не пропускайте que при переводе с грузинского."
        }
      },
      {
        "form": "tan grande como / tantos libros como",
        "detail": {
          "ka": "tan ზედსართავთან უცვლელია. tanto/tanta/tantos/tantas სახელს ეთანხმება; tanto-ს ნაცვლად tan libros არ გამოიყენება.",
          "en": "Tan is unchanged before an adjective. Tanto/tanta/tantos/tantas agrees with a noun; tan libros is incorrect.",
          "ru": "Tan неизменно перед прилагательным. Tanto/tanta/tantos/tantas согласуется с существительным; tan libros неверно."
        }
      },
      {
        "form": "mejor / peor / el más alto",
        "detail": {
          "ka": "mejor და peor არარეგულარული შედარებითებია. ყველაზე-ს ხშირად el/la/los/las más + ზედსართავი გადმოსცემს; más mejor სტანდარტულ ფორმად არ გამოიყენო.",
          "en": "Mejor and peor are irregular comparatives. Superlatives often use el/la/los/las más + adjective; avoid más mejor in the standard pattern.",
          "ru": "Mejor и peor — неправильные сравнительные формы. Превосходная часто строится el/la/los/las más + прилагательное; избегайте más mejor."
        }
      }
    ],
    "examples": [
      {
        "es": "Mi casa es más grande que la tuya.",
        "ka": "ჩემი სახლი შენსაზე დიდია.",
        "en": "My house is bigger than yours.",
        "ru": "Мой дом больше твоего."
      },
      {
        "es": "Ana es tan alta como Eva.",
        "ka": "ანა ევასავით მაღალია.",
        "en": "Ana is as tall as Eva.",
        "ru": "Анна такая же высокая, как Ева."
      },
      {
        "es": "Tengo tantos libros como tú.",
        "ka": "იმდენივე წიგნი მაქვს, რამდენიც შენ.",
        "en": "I have as many books as you.",
        "ru": "У меня столько же книг, сколько у тебя."
      },
      {
        "es": "Esta ruta es mejor.",
        "ka": "ეს მარშრუტი უკეთესია.",
        "en": "This route is better.",
        "ru": "Этот маршрут лучше."
      }
    ],
    "pitfalls": {
      "ka": "muy თვისების ხარისხს ცვლის, mucho კი რაოდენობას ან ზმნას: muy grande, mucho dinero, trabajo mucho. ეს ფორმები ურთიერთჩანაცვლებადი არაა.",
      "en": "Muy modifies the degree of a quality; mucho modifies quantity or a verb: muy grande, mucho dinero, trabajo mucho. They are not interchangeable.",
      "ru": "Muy изменяет степень качества, mucho — количество или глагол: muy grande, mucho dinero, trabajo mucho. Они не взаимозаменяемы."
    },
    "quiz": [
      {
        "id": "grammar-es-a2-4-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩემი სახლი შენსაზე დიდია.",
          "en": "Complete the sentence to express: My house is bigger than yours.",
          "ru": "Заполните предложение со значением: Мой дом больше твоего."
        },
        "sentence": "Mi casa es más grande ____ la tuya.",
        "answer": "que",
        "options": [
          "que",
          "como",
          "de"
        ]
      },
      {
        "id": "grammar-es-a2-4-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩემი სახლი შენსაზე დიდია.",
          "en": "Choose the complete correct sentence expressing: My house is bigger than yours.",
          "ru": "Выберите полное правильное предложение со значением: Мой дом больше твоего."
        },
        "sentence": "____",
        "answer": "Mi casa es más grande que la tuya.",
        "options": [
          "Mi casa es más grande que la tuya.",
          "Mi casa es más grande como la tuya.",
          "Mi casa es más grande de la tuya."
        ]
      },
      {
        "id": "grammar-es-a2-4-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩემი სახლი შენსაზე დიდია.",
          "en": "Correct the learner error. Intended meaning: My house is bigger than yours.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мой дом больше твоего."
        },
        "sentence": "Mi casa es más grande como la tuya. → ____",
        "answer": "Mi casa es más grande que la tuya.",
        "options": [
          "Mi casa es más grande que la tuya.",
          "Mi casa es más grande de la tuya.",
          "Mi casa es más grande como la tuya."
        ]
      },
      {
        "id": "grammar-es-a2-4-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ანა ევასავით მაღალია.",
          "en": "Complete the sentence to express: Ana is as tall as Eva.",
          "ru": "Заполните предложение со значением: Анна такая же высокая, как Ева."
        },
        "sentence": "Ana es ____ alta como Eva.",
        "answer": "tan",
        "options": [
          "tan",
          "tanto",
          "tantas"
        ]
      },
      {
        "id": "grammar-es-a2-4-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ანა ევასავით მაღალია.",
          "en": "Choose the complete correct sentence expressing: Ana is as tall as Eva.",
          "ru": "Выберите полное правильное предложение со значением: Анна такая же высокая, как Ева."
        },
        "sentence": "____",
        "answer": "Ana es tan alta como Eva.",
        "options": [
          "Ana es tan alta como Eva.",
          "Ana es tanto alta como Eva.",
          "Ana es tantas alta como Eva."
        ]
      },
      {
        "id": "grammar-es-a2-4-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ანა ევასავით მაღალია.",
          "en": "Correct the learner error. Intended meaning: Ana is as tall as Eva.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Анна такая же высокая, как Ева."
        },
        "sentence": "Ana es tanto alta como Eva. → ____",
        "answer": "Ana es tan alta como Eva.",
        "options": [
          "Ana es tan alta como Eva.",
          "Ana es tantas alta como Eva.",
          "Ana es tanto alta como Eva."
        ]
      },
      {
        "id": "grammar-es-a2-4-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: იმდენივე წიგნი მაქვს, რამდენიც შენ.",
          "en": "Complete the sentence to express: I have as many books as you.",
          "ru": "Заполните предложение со значением: У меня столько же книг, сколько у тебя."
        },
        "sentence": "Tengo ____ libros como tú.",
        "answer": "tantos",
        "options": [
          "tantos",
          "tan",
          "tanta"
        ]
      },
      {
        "id": "grammar-es-a2-4-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: იმდენივე წიგნი მაქვს, რამდენიც შენ.",
          "en": "Choose the complete correct sentence expressing: I have as many books as you.",
          "ru": "Выберите полное правильное предложение со значением: У меня столько же книг, сколько у тебя."
        },
        "sentence": "____",
        "answer": "Tengo tantos libros como tú.",
        "options": [
          "Tengo tantos libros como tú.",
          "Tengo tan libros como tú.",
          "Tengo tanta libros como tú."
        ]
      },
      {
        "id": "grammar-es-a2-4-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: იმდენივე წიგნი მაქვს, რამდენიც შენ.",
          "en": "Correct the learner error. Intended meaning: I have as many books as you.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У меня столько же книг, сколько у тебя."
        },
        "sentence": "Tengo tan libros como tú. → ____",
        "answer": "Tengo tantos libros como tú.",
        "options": [
          "Tengo tantos libros como tú.",
          "Tengo tanta libros como tú.",
          "Tengo tan libros como tú."
        ]
      },
      {
        "id": "grammar-es-a2-4-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს მარშრუტი უკეთესია.",
          "en": "Complete the sentence to express: This route is better.",
          "ru": "Заполните предложение со значением: Этот маршрут лучше."
        },
        "sentence": "Esta ruta es ____.",
        "answer": "mejor",
        "options": [
          "mejor",
          "más mejor",
          "muy mejor"
        ]
      },
      {
        "id": "grammar-es-a2-4-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ეს მარშრუტი უკეთესია.",
          "en": "Choose the complete correct sentence expressing: This route is better.",
          "ru": "Выберите полное правильное предложение со значением: Этот маршрут лучше."
        },
        "sentence": "____",
        "answer": "Esta ruta es mejor.",
        "options": [
          "Esta ruta es mejor.",
          "Esta ruta es más mejor.",
          "Esta ruta es muy mejor."
        ]
      },
      {
        "id": "grammar-es-a2-4-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ეს მარშრუტი უკეთესია.",
          "en": "Correct the learner error. Intended meaning: This route is better.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Этот маршрут лучше."
        },
        "sentence": "Esta ruta es más mejor. → ____",
        "answer": "Esta ruta es mejor.",
        "options": [
          "Esta ruta es mejor.",
          "Esta ruta es muy mejor.",
          "Esta ruta es más mejor."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b1-1",
    "level": "B1",
    "title": {
      "ka": "მომავალი და პირობითი ფორმები",
      "en": "Future and conditional",
      "ru": "Будущее и condicional"
    },
    "explanation": {
      "ka": "მარტივი მომავალი ხშირად გეგმას ან პროგნოზს გადმოსცემს; condicional ჰიპოთეზურ შედეგსა და თავაზიან თხოვნაში გვხვდება. ორივე დროს პირის დაბოლოებები ინფინიტივის ფუძეს უერთდება. რეგულარული მომავალში ინფინიტივი სრულად რჩება. yo-ს -é და él/ella-ს -á მახვილიანად იწერება; არ აურიო pretérito-ს მოკლე ფუძეს. condicional-ის -ía ჯგუფი რეგულარულ ინფინიტივს ემატება. კითხვა ¿Podrías ayudarme? თხოვნას არბილებს და ავტომატურად წარსულ შესაძლებლობას არ აღნიშნავს. ზოგი ფუძე ორივე დროში ერთნაირად არარეგულარულია. tener→tendr-, hacer→har-, poder→podr-; დაბოლოებები რეგულარული რჩება.",
      "en": "The simple future often expresses plans or predictions; the conditional appears in hypothetical results and polite requests. Both add person endings to an infinitive-based stem. Regular future keeps the full infinitive. Yo -é and él/ella -á carry written accents; do not confuse the stem with the shorter preterite stem. Conditional -ía endings attach to a regular infinitive. ¿Podrías ayudarme? softens a request and does not automatically mean past ability. Some stems are irregular in both tenses. Tener→tendr-, hacer→har-, poder→podr-; the endings stay regular.",
      "ru": "Простое будущее часто передаёт планы или прогнозы; condicional встречается в гипотетических результатах и вежливых просьбах. Оба добавляют личные окончания к основе инфинитива. Правильное будущее сохраняет полный инфинитив. Yo -é и él/ella -á имеют письменное ударение; не смешивайте основу с более коротким pretérito. Окончания condicional -ía добавляются к правильному инфинитиву. ¿Podrías ayudarme? смягчает просьбу и не обязательно обозначает возможность в прошлом. Некоторые основы неправильны в обоих временах. Tener→tendr-, hacer→har-, poder→podr-; окончания остаются правильными."
    },
    "rules": [
      {
        "form": "hablaré / hablarás / hablará / hablaremos / hablarán",
        "detail": {
          "ka": "რეგულარული მომავალში ინფინიტივი სრულად რჩება. yo-ს -é და él/ella-ს -á მახვილიანად იწერება; არ აურიო pretérito-ს მოკლე ფუძეს.",
          "en": "Regular future keeps the full infinitive. Yo -é and él/ella -á carry written accents; do not confuse the stem with the shorter preterite stem.",
          "ru": "Правильное будущее сохраняет полный инфинитив. Yo -é и él/ella -á имеют письменное ударение; не смешивайте основу с более коротким pretérito."
        }
      },
      {
        "form": "hablaría / hablarías / hablaríamos / hablarían",
        "detail": {
          "ka": "condicional-ის -ía ჯგუფი რეგულარულ ინფინიტივს ემატება. კითხვა ¿Podrías ayudarme? თხოვნას არბილებს და ავტომატურად წარსულ შესაძლებლობას არ აღნიშნავს.",
          "en": "Conditional -ía endings attach to a regular infinitive. ¿Podrías ayudarme? softens a request and does not automatically mean past ability.",
          "ru": "Окончания condicional -ía добавляются к правильному инфинитиву. ¿Podrías ayudarme? смягчает просьбу и не обязательно обозначает возможность в прошлом."
        }
      },
      {
        "form": "tendré / tendría; haré / haría; podré / podría",
        "detail": {
          "ka": "ზოგი ფუძე ორივე დროში ერთნაირად არარეგულარულია. tener→tendr-, hacer→har-, poder→podr-; დაბოლოებები რეგულარული რჩება.",
          "en": "Some stems are irregular in both tenses. Tener→tendr-, hacer→har-, poder→podr-; the endings stay regular.",
          "ru": "Некоторые основы неправильны в обоих временах. Tener→tendr-, hacer→har-, poder→podr-; окончания остаются правильными."
        }
      }
    ],
    "examples": [
      {
        "es": "Mañana hablaré con Ana.",
        "ka": "ხვალ ანას დაველაპარაკები.",
        "en": "Tomorrow I will speak to Ana.",
        "ru": "Завтра я поговорю с Анной."
      },
      {
        "es": "Nosotros tendremos tiempo.",
        "ka": "ჩვენ დრო გვექნება.",
        "en": "We will have time.",
        "ru": "У нас будет время."
      },
      {
        "es": "¿Podrías ayudarme, por favor?",
        "ka": "შეგიძლიათ დამეხმაროთ, გთხოვთ?",
        "en": "Could you help me, please?",
        "ru": "Не мог бы ты помочь мне?"
      },
      {
        "es": "Yo viajaría si tuviera dinero.",
        "ka": "ფული რომ მქონდეს, ვიმოგზაურებდი.",
        "en": "I would travel if I had money.",
        "ru": "Я бы путешествовал, если бы были деньги."
      }
    ],
    "pitfalls": {
      "ka": "სურვილის მომავალი რეალური პირობა si + აწმყოთია: si tengo tiempo, iré. si tendré tiempo ჩვეულებრივ რეალურ პირობაში არ გამოიყენება.",
      "en": "An ordinary real future condition uses si + present: si tengo tiempo, iré. Avoid si tendré tiempo in that pattern.",
      "ru": "Обычное реальное будущее условие использует si + настоящее: si tengo tiempo, iré. Не ставьте si tendré tiempo в этой модели."
    },
    "quiz": [
      {
        "id": "grammar-es-b1-1-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხვალ ანას დაველაპარაკები.",
          "en": "Complete the sentence to express: Tomorrow I will speak to Ana.",
          "ru": "Заполните предложение со значением: Завтра я поговорю с Анной."
        },
        "sentence": "Mañana ____ con Ana.",
        "answer": "hablaré",
        "options": [
          "hablaré",
          "hablé",
          "hablaría"
        ]
      },
      {
        "id": "grammar-es-b1-1-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ხვალ ანას დაველაპარაკები.",
          "en": "Choose the complete correct sentence expressing: Tomorrow I will speak to Ana.",
          "ru": "Выберите полное правильное предложение со значением: Завтра я поговорю с Анной."
        },
        "sentence": "____",
        "answer": "Mañana hablaré con Ana.",
        "options": [
          "Mañana hablaré con Ana.",
          "Mañana hablé con Ana.",
          "Mañana hablaría con Ana."
        ]
      },
      {
        "id": "grammar-es-b1-1-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ხვალ ანას დაველაპარაკები.",
          "en": "Correct the learner error. Intended meaning: Tomorrow I will speak to Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Завтра я поговорю с Анной."
        },
        "sentence": "Mañana hablé con Ana. → ____",
        "answer": "Mañana hablaré con Ana.",
        "options": [
          "Mañana hablaré con Ana.",
          "Mañana hablaría con Ana.",
          "Mañana hablé con Ana."
        ]
      },
      {
        "id": "grammar-es-b1-1-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ დრო გვექნება.",
          "en": "Complete the sentence to express: We will have time.",
          "ru": "Заполните предложение со значением: У нас будет время."
        },
        "sentence": "Nosotros ____ tiempo.",
        "answer": "tendremos",
        "options": [
          "tendremos",
          "teneremos",
          "tendrán"
        ]
      },
      {
        "id": "grammar-es-b1-1-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ჩვენ დრო გვექნება.",
          "en": "Choose the complete correct sentence expressing: We will have time.",
          "ru": "Выберите полное правильное предложение со значением: У нас будет время."
        },
        "sentence": "____",
        "answer": "Nosotros tendremos tiempo.",
        "options": [
          "Nosotros tendremos tiempo.",
          "Nosotros teneremos tiempo.",
          "Nosotros tendrán tiempo."
        ]
      },
      {
        "id": "grammar-es-b1-1-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ჩვენ დრო გვექნება.",
          "en": "Correct the learner error. Intended meaning: We will have time.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: У нас будет время."
        },
        "sentence": "Nosotros teneremos tiempo. → ____",
        "answer": "Nosotros tendremos tiempo.",
        "options": [
          "Nosotros tendremos tiempo.",
          "Nosotros tendrán tiempo.",
          "Nosotros teneremos tiempo."
        ]
      },
      {
        "id": "grammar-es-b1-1-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეგიძლიათ დამეხმაროთ, გთხოვთ?",
          "en": "Complete the sentence to express: Could you help me, please?",
          "ru": "Заполните предложение со значением: Не мог бы ты помочь мне?"
        },
        "sentence": "¿____ ayudarme, por favor?",
        "answer": "Podrías",
        "options": [
          "Podrías",
          "Pudiste",
          "Podiendo"
        ]
      },
      {
        "id": "grammar-es-b1-1-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შეგიძლიათ დამეხმაროთ, გთხოვთ?",
          "en": "Choose the complete correct sentence expressing: Could you help me, please?",
          "ru": "Выберите полное правильное предложение со значением: Не мог бы ты помочь мне?"
        },
        "sentence": "____",
        "answer": "¿Podrías ayudarme, por favor?",
        "options": [
          "¿Podrías ayudarme, por favor?",
          "¿Pudiste ayudarme, por favor?",
          "¿Podiendo ayudarme, por favor?"
        ]
      },
      {
        "id": "grammar-es-b1-1-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შეგიძლიათ დამეხმაროთ, გთხოვთ?",
          "en": "Correct the learner error. Intended meaning: Could you help me, please?",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Не мог бы ты помочь мне?"
        },
        "sentence": "¿Pudiste ayudarme, por favor? → ____",
        "answer": "¿Podrías ayudarme, por favor?",
        "options": [
          "¿Podrías ayudarme, por favor?",
          "¿Podiendo ayudarme, por favor?",
          "¿Pudiste ayudarme, por favor?"
        ]
      },
      {
        "id": "grammar-es-b1-1-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ფული რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Complete the sentence to express: I would travel if I had money.",
          "ru": "Заполните предложение со значением: Я бы путешествовал, если бы были деньги."
        },
        "sentence": "Yo ____ si tuviera dinero.",
        "answer": "viajaría",
        "options": [
          "viajaría",
          "viajaré",
          "viajé"
        ]
      },
      {
        "id": "grammar-es-b1-1-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ფული რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Choose the complete correct sentence expressing: I would travel if I had money.",
          "ru": "Выберите полное правильное предложение со значением: Я бы путешествовал, если бы были деньги."
        },
        "sentence": "____",
        "answer": "Yo viajaría si tuviera dinero.",
        "options": [
          "Yo viajaría si tuviera dinero.",
          "Yo viajaré si tuviera dinero.",
          "Yo viajé si tuviera dinero."
        ]
      },
      {
        "id": "grammar-es-b1-1-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ფული რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Correct the learner error. Intended meaning: I would travel if I had money.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я бы путешествовал, если бы были деньги."
        },
        "sentence": "Yo viajaré si tuviera dinero. → ____",
        "answer": "Yo viajaría si tuviera dinero.",
        "options": [
          "Yo viajaría si tuviera dinero.",
          "Yo viajé si tuviera dinero.",
          "Yo viajaré si tuviera dinero."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b1-2",
    "level": "B1",
    "title": {
      "ka": "პირდაპირი და ირიბი ობიექტი",
      "en": "Direct and indirect object pronouns",
      "ru": "Прямые и косвенные местоимения"
    },
    "explanation": {
      "ka": "ობიექტის ნაცვალსახელი უკვე ცნობილ ადამიანს ან ნივთს ცვლის. პირდაპირი ობიექტია lo/la/los/las, ირიბი — le/les; me/te/nos/os ორივე ფუნქციაში გვხვდება. პირდაპირი ნაცვალსახელი ნივთის სქესსა და რიცხვს ეთანხმება და ჩვეულებრივ პირიანი ზმნის წინ დგას. წიგნის el გრამატიკულ lo-ს განსაზღვრავს. ორი ობიექტის ნაცვალსახელიდან ირიბი წინ დგას. le/les + lo/la/los/las-ის წინ se-დ იცვლება; le lo სტანდარტული მოდელი არ არის. ინფინიტივზე ნაცვალსახელი მიერთდება, ან მთელ ჯგუფს წინ უსწრებს. უარყოფა No lo compro სწორია; No compro lo ნივთის ნაცვალსახელის ჩვეულებრივი პოზიცია არაა.",
      "en": "An object pronoun replaces an identified person or thing. Direct forms include lo/la/los/las; indirect forms le/les. Me/te/nos/os can serve either function. The direct pronoun agrees with its referent’s gender and number and normally precedes a finite verb. Grammatical el libro determines lo. With two object pronouns, the indirect one comes first. Le/les becomes se before lo/la/los/las; le lo is not the standard sequence. A pronoun attaches to an infinitive or precedes the whole verbal group. No lo compro is correct; No compro lo does not use the ordinary object-pronoun position.",
      "ru": "Объектное местоимение заменяет известное лицо или предмет. Прямые формы — lo/la/los/las, косвенные — le/les. Me/te/nos/os бывают в обеих функциях. Прямое местоимение согласуется с предметом в роде и числе и обычно стоит перед личным глаголом. El libro определяет грамматическое lo. Из двух местоимений косвенное стоит первым. Le/les меняется на se перед lo/la/los/las; le lo — ненормативная последовательность. Местоимение присоединяется к инфинитиву либо стоит перед всей глагольной группой. No lo compro верно; No compro lo — не обычная позиция объектного местоимения."
    },
    "rules": [
      {
        "form": "Veo el libro. → Lo veo.",
        "detail": {
          "ka": "პირდაპირი ნაცვალსახელი ნივთის სქესსა და რიცხვს ეთანხმება და ჩვეულებრივ პირიანი ზმნის წინ დგას. წიგნის el გრამატიკულ lo-ს განსაზღვრავს.",
          "en": "The direct pronoun agrees with its referent’s gender and number and normally precedes a finite verb. Grammatical el libro determines lo.",
          "ru": "Прямое местоимение согласуется с предметом в роде и числе и обычно стоит перед личным глаголом. El libro определяет грамматическое lo."
        }
      },
      {
        "form": "Le doy el libro. → Se lo doy.",
        "detail": {
          "ka": "ორი ობიექტის ნაცვალსახელიდან ირიბი წინ დგას. le/les + lo/la/los/las-ის წინ se-დ იცვლება; le lo სტანდარტული მოდელი არ არის.",
          "en": "With two object pronouns, the indirect one comes first. Le/les becomes se before lo/la/los/las; le lo is not the standard sequence.",
          "ru": "Из двух местоимений косвенное стоит первым. Le/les меняется на se перед lo/la/los/las; le lo — ненормативная последовательность."
        }
      },
      {
        "form": "Voy a comprarlo. / Lo voy a comprar.",
        "detail": {
          "ka": "ინფინიტივზე ნაცვალსახელი მიერთდება, ან მთელ ჯგუფს წინ უსწრებს. უარყოფა No lo compro სწორია; No compro lo ნივთის ნაცვალსახელის ჩვეულებრივი პოზიცია არაა.",
          "en": "A pronoun attaches to an infinitive or precedes the whole verbal group. No lo compro is correct; No compro lo does not use the ordinary object-pronoun position.",
          "ru": "Местоимение присоединяется к инфинитиву либо стоит перед всей глагольной группой. No lo compro верно; No compro lo — не обычная позиция объектного местоимения."
        }
      }
    ],
    "examples": [
      {
        "es": "El libro está aquí. Lo veo.",
        "ka": "წიგნი აქ არის. მას ვხედავ.",
        "en": "The book is here. I see it.",
        "ru": "Книга здесь. Я её вижу."
      },
      {
        "es": "La mesa está aquí. La limpio.",
        "ka": "მაგიდა აქაა. მას ვწმენდ.",
        "en": "The table is here. I clean it.",
        "ru": "Стол здесь. Я его чищу."
      },
      {
        "es": "El libro es para Ana. Se lo doy.",
        "ka": "წიგნი ანასთვისაა. მას ვაძლევ.",
        "en": "The book is for Ana. I give it to her.",
        "ru": "Книга для Анны. Я даю её ей."
      },
      {
        "es": "Voy a comprarlo mañana.",
        "ka": "ხვალ მის ყიდვას ვაპირებ.",
        "en": "I am going to buy it tomorrow, a masculine item.",
        "ru": "Я собираюсь купить это завтра, предмет мужского рода по-испански."
      }
    ],
    "pitfalls": {
      "ka": "ზოგ ესპანურ ვარიანტში მამაკაცის პიროვნებაზე leísmo დასაშვებია, ამიტომ ნივთის მაგალითით ისწავლე მთავარი lo/la მოდელი. ყველა le ფორმა ავტომატურად შეცდომად არ ჩათვალო.",
      "en": "Some varieties accept leísmo for a male person, so learn the basic lo/la contrast using objects. Do not label every personal le form automatically wrong.",
      "ru": "Некоторые варианты допускают leísmo для мужчины, поэтому базовую модель lo/la изучайте на предметах. Не считайте всякое личное le автоматически ошибкой."
    },
    "quiz": [
      {
        "id": "grammar-es-b1-2-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი აქ არის. მას ვხედავ.",
          "en": "Complete the sentence to express: The book is here. I see it.",
          "ru": "Заполните предложение со значением: Книга здесь. Я её вижу."
        },
        "sentence": "El libro está aquí. ____ veo.",
        "answer": "Lo",
        "options": [
          "Lo",
          "La",
          "Los"
        ]
      },
      {
        "id": "grammar-es-b1-2-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წიგნი აქ არის. მას ვხედავ.",
          "en": "Choose the complete correct sentence expressing: The book is here. I see it.",
          "ru": "Выберите полное правильное предложение со значением: Книга здесь. Я её вижу."
        },
        "sentence": "____",
        "answer": "El libro está aquí. Lo veo.",
        "options": [
          "El libro está aquí. Lo veo.",
          "El libro está aquí. La veo.",
          "El libro está aquí. Los veo."
        ]
      },
      {
        "id": "grammar-es-b1-2-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წიგნი აქ არის. მას ვხედავ.",
          "en": "Correct the learner error. Intended meaning: The book is here. I see it.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Книга здесь. Я её вижу."
        },
        "sentence": "El libro está aquí. La veo. → ____",
        "answer": "El libro está aquí. Lo veo.",
        "options": [
          "El libro está aquí. Lo veo.",
          "El libro está aquí. Los veo.",
          "El libro está aquí. La veo."
        ]
      },
      {
        "id": "grammar-es-b1-2-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მაგიდა აქაა. მას ვწმენდ.",
          "en": "Complete the sentence to express: The table is here. I clean it.",
          "ru": "Заполните предложение со значением: Стол здесь. Я его чищу."
        },
        "sentence": "____ mesa está aquí. La limpio.",
        "answer": "La",
        "options": [
          "La",
          "Lo",
          "Los"
        ]
      },
      {
        "id": "grammar-es-b1-2-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მაგიდა აქაა. მას ვწმენდ.",
          "en": "Choose the complete correct sentence expressing: The table is here. I clean it.",
          "ru": "Выберите полное правильное предложение со значением: Стол здесь. Я его чищу."
        },
        "sentence": "____",
        "answer": "La mesa está aquí. La limpio.",
        "options": [
          "La mesa está aquí. La limpio.",
          "Lo mesa está aquí. La limpio.",
          "Los mesa está aquí. La limpio."
        ]
      },
      {
        "id": "grammar-es-b1-2-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მაგიდა აქაა. მას ვწმენდ.",
          "en": "Correct the learner error. Intended meaning: The table is here. I clean it.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Стол здесь. Я его чищу."
        },
        "sentence": "Lo mesa está aquí. La limpio. → ____",
        "answer": "La mesa está aquí. La limpio.",
        "options": [
          "La mesa está aquí. La limpio.",
          "Los mesa está aquí. La limpio.",
          "Lo mesa está aquí. La limpio."
        ]
      },
      {
        "id": "grammar-es-b1-2-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი ანასთვისაა. მას ვაძლევ.",
          "en": "Complete the sentence to express: The book is for Ana. I give it to her.",
          "ru": "Заполните предложение со значением: Книга для Анны. Я даю её ей."
        },
        "sentence": "El libro es para Ana. ____ lo doy.",
        "answer": "Se",
        "options": [
          "Se",
          "Le",
          "La"
        ]
      },
      {
        "id": "grammar-es-b1-2-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წიგნი ანასთვისაა. მას ვაძლევ.",
          "en": "Choose the complete correct sentence expressing: The book is for Ana. I give it to her.",
          "ru": "Выберите полное правильное предложение со значением: Книга для Анны. Я даю её ей."
        },
        "sentence": "____",
        "answer": "El libro es para Ana. Se lo doy.",
        "options": [
          "El libro es para Ana. Se lo doy.",
          "El libro es para Ana. Le lo doy.",
          "El libro es para Ana. La lo doy."
        ]
      },
      {
        "id": "grammar-es-b1-2-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წიგნი ანასთვისაა. მას ვაძლევ.",
          "en": "Correct the learner error. Intended meaning: The book is for Ana. I give it to her.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Книга для Анны. Я даю её ей."
        },
        "sentence": "El libro es para Ana. Le lo doy. → ____",
        "answer": "El libro es para Ana. Se lo doy.",
        "options": [
          "El libro es para Ana. Se lo doy.",
          "El libro es para Ana. La lo doy.",
          "El libro es para Ana. Le lo doy."
        ]
      },
      {
        "id": "grammar-es-b1-2-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხვალ მის ყიდვას ვაპირებ.",
          "en": "Complete the sentence to express: I am going to buy it tomorrow, a masculine item.",
          "ru": "Заполните предложение со значением: Я собираюсь купить это завтра, предмет мужского рода по-испански."
        },
        "sentence": "Voy a ____ mañana.",
        "answer": "comprarlo",
        "options": [
          "comprarlo",
          "comprar lo",
          "lo comprarlo"
        ]
      },
      {
        "id": "grammar-es-b1-2-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ხვალ მის ყიდვას ვაპირებ.",
          "en": "Choose the complete correct sentence expressing: I am going to buy it tomorrow, a masculine item.",
          "ru": "Выберите полное правильное предложение со значением: Я собираюсь купить это завтра, предмет мужского рода по-испански."
        },
        "sentence": "____",
        "answer": "Voy a comprarlo mañana.",
        "options": [
          "Voy a comprarlo mañana.",
          "Voy a comprar lo mañana.",
          "Voy a lo comprarlo mañana."
        ]
      },
      {
        "id": "grammar-es-b1-2-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ხვალ მის ყიდვას ვაპირებ.",
          "en": "Correct the learner error. Intended meaning: I am going to buy it tomorrow, a masculine item.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я собираюсь купить это завтра, предмет мужского рода по-испански."
        },
        "sentence": "Voy a comprar lo mañana. → ____",
        "answer": "Voy a comprarlo mañana.",
        "options": [
          "Voy a comprarlo mañana.",
          "Voy a lo comprarlo mañana.",
          "Voy a comprar lo mañana."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b1-3",
    "level": "B1",
    "title": {
      "ka": "por და para",
      "en": "Por versus para",
      "ru": "Por и para"
    },
    "explanation": {
      "ka": "por და para-ს თარგმანი ხშირად იკვეთება, მაგრამ ფუნქციები განსხვავდება. ერთი ქართული „თვის“ ან რუსული „для“ ყველა კონტექსტის შესარჩევად საკმარისი არ არის. para აღნიშნავს მიმღებს, მიზანს ან საბოლოო ვადას. მოქმედების მიზანს პირდაპირ ინფინიტივი შეიძლება მოჰყვეს: estudio para aprender. por მიზეზს, გაცვლას ან საკომუნიკაციო გზას შეიძლება აღნიშნავდეს. წინდებულის არჩევა მთლიან მნიშვნელობას შეადარე და არა მხოლოდ შემდეგ სიტყვას. por სივრცეში გავლას აღნიშნავს, para კი ზოგ კონტექსტში დანიშნულებას. მადრიდში მიმართულების მარტივი გავრცელებული მოდელია ir a Madrid; para-ს ყველგან ნუ ჩასვამ.",
      "en": "Translations of por and para often overlap, but their functions differ. A single Georgian or Russian equivalent cannot select the correct preposition in every context. Para marks a recipient, purpose or deadline. A purpose can take an infinitive directly: estudio para aprender. Por can mark cause, exchange or a communication channel. Compare the whole meaning, not just the following word. Por marks movement through an area; para can mark destination in some contexts. Ir a Madrid is the ordinary basic direction pattern; do not insert para everywhere.",
      "ru": "Переводы por и para часто пересекаются, но функции различаются. Одного грузинского или русского эквивалента недостаточно для выбора во всех контекстах. Para обозначает получателя, цель или срок. Цель может выражаться инфинитивом: estudio para aprender. Por может обозначать причину, обмен или способ связи. Сопоставляйте всё значение, не только следующее слово. Por обозначает движение через пространство; para иногда указывает назначение. Базовая модель направления — ir a Madrid; не вставляйте para повсюду."
    },
    "rules": [
      {
        "form": "para Ana / para aprender / para el viernes",
        "detail": {
          "ka": "para აღნიშნავს მიმღებს, მიზანს ან საბოლოო ვადას. მოქმედების მიზანს პირდაპირ ინფინიტივი შეიძლება მოჰყვეს: estudio para aprender.",
          "en": "Para marks a recipient, purpose or deadline. A purpose can take an infinitive directly: estudio para aprender.",
          "ru": "Para обозначает получателя, цель или срок. Цель может выражаться инфинитивом: estudio para aprender."
        }
      },
      {
        "form": "por la lluvia / por diez euros / por correo",
        "detail": {
          "ka": "por მიზეზს, გაცვლას ან საკომუნიკაციო გზას შეიძლება აღნიშნავდეს. წინდებულის არჩევა მთლიან მნიშვნელობას შეადარე და არა მხოლოდ შემდეგ სიტყვას.",
          "en": "Por can mark cause, exchange or a communication channel. Compare the whole meaning, not just the following word.",
          "ru": "Por может обозначать причину, обмен или способ связи. Сопоставляйте всё значение, не только следующее слово."
        }
      },
      {
        "form": "caminar por el parque / salir para Madrid",
        "detail": {
          "ka": "por სივრცეში გავლას აღნიშნავს, para კი ზოგ კონტექსტში დანიშნულებას. მადრიდში მიმართულების მარტივი გავრცელებული მოდელია ir a Madrid; para-ს ყველგან ნუ ჩასვამ.",
          "en": "Por marks movement through an area; para can mark destination in some contexts. Ir a Madrid is the ordinary basic direction pattern; do not insert para everywhere.",
          "ru": "Por обозначает движение через пространство; para иногда указывает назначение. Базовая модель направления — ir a Madrid; не вставляйте para повсюду."
        }
      }
    ],
    "examples": [
      {
        "es": "Este regalo es para Ana.",
        "ka": "ეს საჩუქარი ანასთვისაა.",
        "en": "This gift is intended for Ana.",
        "ru": "Этот подарок предназначен Анне."
      },
      {
        "es": "Gracias por la ayuda.",
        "ka": "მადლობა დახმარებისთვის.",
        "en": "Thank you for the help.",
        "ru": "Спасибо за помощь."
      },
      {
        "es": "Estudio para aprender.",
        "ka": "ვსწავლობ იმისთვის, რომ ვისწავლო.",
        "en": "I study in order to learn.",
        "ru": "Я занимаюсь, чтобы научиться."
      },
      {
        "es": "Compré el libro por diez euros.",
        "ka": "წიგნი ათ ევროდ ვიყიდე.",
        "en": "I bought the book in exchange for ten euros.",
        "ru": "Я купил книгу за десять евро."
      }
    ],
    "pitfalls": {
      "ka": "მადლობის ფორმულაა gracias por la ayuda. para-ს შემდეგ საწყისი მიზანი ახსენი: un regalo para Ana. მიზეზისა და მიზნის შეცვლა წინადადების აზრსაც ცვლის.",
      "en": "The thanks formula is gracias por la ayuda. Para introduces the intended recipient: un regalo para Ana. Changing cause to purpose also changes meaning.",
      "ru": "Формула благодарности — gracias por la ayuda. Para вводит предназначенного получателя: un regalo para Ana. Замена причины целью меняет смысл."
    },
    "quiz": [
      {
        "id": "grammar-es-b1-3-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს საჩუქარი ანასთვისაა.",
          "en": "Complete the sentence to express: This gift is intended for Ana.",
          "ru": "Заполните предложение со значением: Этот подарок предназначен Анне."
        },
        "sentence": "Este regalo es ____ Ana.",
        "answer": "para",
        "options": [
          "para",
          "por",
          "desde"
        ]
      },
      {
        "id": "grammar-es-b1-3-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ეს საჩუქარი ანასთვისაა.",
          "en": "Choose the complete correct sentence expressing: This gift is intended for Ana.",
          "ru": "Выберите полное правильное предложение со значением: Этот подарок предназначен Анне."
        },
        "sentence": "____",
        "answer": "Este regalo es para Ana.",
        "options": [
          "Este regalo es para Ana.",
          "Este regalo es por Ana.",
          "Este regalo es desde Ana."
        ]
      },
      {
        "id": "grammar-es-b1-3-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ეს საჩუქარი ანასთვისაა.",
          "en": "Correct the learner error. Intended meaning: This gift is intended for Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Этот подарок предназначен Анне."
        },
        "sentence": "Este regalo es por Ana. → ____",
        "answer": "Este regalo es para Ana.",
        "options": [
          "Este regalo es para Ana.",
          "Este regalo es desde Ana.",
          "Este regalo es por Ana."
        ]
      },
      {
        "id": "grammar-es-b1-3-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მადლობა დახმარებისთვის.",
          "en": "Complete the sentence to express: Thank you for the help.",
          "ru": "Заполните предложение со значением: Спасибо за помощь."
        },
        "sentence": "Gracias ____ la ayuda.",
        "answer": "por",
        "options": [
          "por",
          "para",
          "hasta"
        ]
      },
      {
        "id": "grammar-es-b1-3-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მადლობა დახმარებისთვის.",
          "en": "Choose the complete correct sentence expressing: Thank you for the help.",
          "ru": "Выберите полное правильное предложение со значением: Спасибо за помощь."
        },
        "sentence": "____",
        "answer": "Gracias por la ayuda.",
        "options": [
          "Gracias por la ayuda.",
          "Gracias para la ayuda.",
          "Gracias hasta la ayuda."
        ]
      },
      {
        "id": "grammar-es-b1-3-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მადლობა დახმარებისთვის.",
          "en": "Correct the learner error. Intended meaning: Thank you for the help.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Спасибо за помощь."
        },
        "sentence": "Gracias para la ayuda. → ____",
        "answer": "Gracias por la ayuda.",
        "options": [
          "Gracias por la ayuda.",
          "Gracias hasta la ayuda.",
          "Gracias para la ayuda."
        ]
      },
      {
        "id": "grammar-es-b1-3-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ვსწავლობ იმისთვის, რომ ვისწავლო.",
          "en": "Complete the sentence to express: I study in order to learn.",
          "ru": "Заполните предложение со значением: Я занимаюсь, чтобы научиться."
        },
        "sentence": "Estudio ____ aprender.",
        "answer": "para",
        "options": [
          "para",
          "por",
          "desde"
        ]
      },
      {
        "id": "grammar-es-b1-3-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ვსწავლობ იმისთვის, რომ ვისწავლო.",
          "en": "Choose the complete correct sentence expressing: I study in order to learn.",
          "ru": "Выберите полное правильное предложение со значением: Я занимаюсь, чтобы научиться."
        },
        "sentence": "____",
        "answer": "Estudio para aprender.",
        "options": [
          "Estudio para aprender.",
          "Estudio por aprender.",
          "Estudio desde aprender."
        ]
      },
      {
        "id": "grammar-es-b1-3-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ვსწავლობ იმისთვის, რომ ვისწავლო.",
          "en": "Correct the learner error. Intended meaning: I study in order to learn.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я занимаюсь, чтобы научиться."
        },
        "sentence": "Estudio por aprender. → ____",
        "answer": "Estudio para aprender.",
        "options": [
          "Estudio para aprender.",
          "Estudio desde aprender.",
          "Estudio por aprender."
        ]
      },
      {
        "id": "grammar-es-b1-3-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი ათ ევროდ ვიყიდე.",
          "en": "Complete the sentence to express: I bought the book in exchange for ten euros.",
          "ru": "Заполните предложение со значением: Я купил книгу за десять евро."
        },
        "sentence": "Compré el libro ____ diez euros.",
        "answer": "por",
        "options": [
          "por",
          "para",
          "hacia"
        ]
      },
      {
        "id": "grammar-es-b1-3-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წიგნი ათ ევროდ ვიყიდე.",
          "en": "Choose the complete correct sentence expressing: I bought the book in exchange for ten euros.",
          "ru": "Выберите полное правильное предложение со значением: Я купил книгу за десять евро."
        },
        "sentence": "____",
        "answer": "Compré el libro por diez euros.",
        "options": [
          "Compré el libro por diez euros.",
          "Compré el libro para diez euros.",
          "Compré el libro hacia diez euros."
        ]
      },
      {
        "id": "grammar-es-b1-3-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წიგნი ათ ევროდ ვიყიდე.",
          "en": "Correct the learner error. Intended meaning: I bought the book in exchange for ten euros.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я купил книгу за десять евро."
        },
        "sentence": "Compré el libro para diez euros. → ____",
        "answer": "Compré el libro por diez euros.",
        "options": [
          "Compré el libro por diez euros.",
          "Compré el libro hacia diez euros.",
          "Compré el libro para diez euros."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b1-4",
    "level": "B1",
    "title": {
      "ka": "აწმყოს subjuntivo",
      "en": "Present subjunctive",
      "ru": "Настоящее subjuntivo"
    },
    "explanation": {
      "ka": "subjuntivo სურვილში, შეფასებასა და დაუდასტურებელ შესაძლებლობაში ხშირია. „გაურკვეველი“ მხოლოდ დამხმარე აზრია: ზუსტი ფორმა მთავარი წინადადებისა და კავშირის მოდელით შეარჩიე. რეგულარული აწმყოს subjuntivo -ar ჯგუფში e-ს, -er/-ir ჯგუფში a-ს სერიას იყენებს. yo და él/ella ხშირად ერთნაირ ფორმას იღებს. თუ სურვილის შემსრულებელი სხვა პირია, que + subjuntivo ხშირია. ერთი მოქმედი პირისას ჩვეულებრივ ინფინიტივია: Quiero estudiar. უარყოფითი აზრი no creo que ხშირად subjuntivo-ს ითხოვს, მტკიცებითი creo que კი indicativo-ს. ხშირი არარეგულარული ფორმებია sea, vaya, tenga, venga.",
      "en": "The subjunctive often appears with wishes, evaluations and unconfirmed possibilities. Uncertainty is only a guide; choose the mood from the main clause and construction. Regular present subjunctive uses the e-series for -ar and a-series for -er/-ir. Yo and él/ella often share a form. A different subject after a wish commonly takes que + subjunctive. The same subject normally uses an infinitive: Quiero estudiar. Negative no creo que commonly takes subjunctive; affirmative creo que takes indicative. Common irregular forms include sea, vaya, tenga and venga.",
      "ru": "Subjuntivo часто появляется при желании, оценке и неподтверждённой возможности. Неуверенность — лишь подсказка: наклонение определяется главной частью и конструкцией. Правильное настоящее subjuntivo использует ряд e для -ar и a для -er/-ir. Yo и él/ella часто совпадают. Другой исполнитель после желания обычно требует que + subjuntivo. При одном исполнителе обычно инфинитив: Quiero estudiar. Отрицательное no creo que часто требует subjuntivo, утвердительное creo que — indicativo. Частые неправильные формы: sea, vaya, tenga, venga."
    },
    "rules": [
      {
        "form": "hablar → hable; comer → coma; vivir → viva",
        "detail": {
          "ka": "რეგულარული აწმყოს subjuntivo -ar ჯგუფში e-ს, -er/-ir ჯგუფში a-ს სერიას იყენებს. yo და él/ella ხშირად ერთნაირ ფორმას იღებს.",
          "en": "Regular present subjunctive uses the e-series for -ar and a-series for -er/-ir. Yo and él/ella often share a form.",
          "ru": "Правильное настоящее subjuntivo использует ряд e для -ar и a для -er/-ir. Yo и él/ella часто совпадают."
        }
      },
      {
        "form": "Quiero que vengas. / Es importante que estudies.",
        "detail": {
          "ka": "თუ სურვილის შემსრულებელი სხვა პირია, que + subjuntivo ხშირია. ერთი მოქმედი პირისას ჩვეულებრივ ინფინიტივია: Quiero estudiar.",
          "en": "A different subject after a wish commonly takes que + subjunctive. The same subject normally uses an infinitive: Quiero estudiar.",
          "ru": "Другой исполнитель после желания обычно требует que + subjuntivo. При одном исполнителе обычно инфинитив: Quiero estudiar."
        }
      },
      {
        "form": "No creo que sea… / Creo que es…",
        "detail": {
          "ka": "უარყოფითი აზრი no creo que ხშირად subjuntivo-ს ითხოვს, მტკიცებითი creo que კი indicativo-ს. ხშირი არარეგულარული ფორმებია sea, vaya, tenga, venga.",
          "en": "Negative no creo que commonly takes subjunctive; affirmative creo que takes indicative. Common irregular forms include sea, vaya, tenga and venga.",
          "ru": "Отрицательное no creo que часто требует subjuntivo, утвердительное creo que — indicativo. Частые неправильные формы: sea, vaya, tenga, venga."
        }
      }
    ],
    "examples": [
      {
        "es": "Quiero que vengas mañana.",
        "ka": "მინდა ხვალ მოხვიდე.",
        "en": "I want you to come tomorrow.",
        "ru": "Я хочу, чтобы ты пришёл завтра."
      },
      {
        "es": "Es importante que estudies.",
        "ka": "მნიშვნელოვანია, რომ ისწავლო.",
        "en": "It is important that you study.",
        "ru": "Важно, чтобы ты учился."
      },
      {
        "es": "No creo que sea fácil.",
        "ka": "არ მგონია, რომ ადვილი იყოს.",
        "en": "I do not think it is easy.",
        "ru": "Не думаю, что это легко."
      },
      {
        "es": "Espero que tengas tiempo.",
        "ka": "იმედი მაქვს, დრო გექნება.",
        "en": "I hope you have time.",
        "ru": "Надеюсь, у тебя будет время."
      }
    ],
    "pitfalls": {
      "ka": "que თავისთავად subjuntivo-ს არ ნიშნავს: Sé que viene ფაქტია. სურვილში quiero que tú vienes ნაცვლად quiero que vengas გამოიყენე.",
      "en": "Que alone does not trigger subjunctive: Sé que viene states a fact. For a wish use quiero que vengas, not quiero que tú vienes.",
      "ru": "Само que не вызывает subjuntivo: Sé que viene — факт. Для желания нужно quiero que vengas, не quiero que tú vienes."
    },
    "quiz": [
      {
        "id": "grammar-es-b1-4-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მინდა ხვალ მოხვიდე.",
          "en": "Complete the sentence to express: I want you to come tomorrow.",
          "ru": "Заполните предложение со значением: Я хочу, чтобы ты пришёл завтра."
        },
        "sentence": "Quiero que ____ mañana.",
        "answer": "vengas",
        "options": [
          "vengas",
          "vienes",
          "vendrás"
        ]
      },
      {
        "id": "grammar-es-b1-4-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მინდა ხვალ მოხვიდე.",
          "en": "Choose the complete correct sentence expressing: I want you to come tomorrow.",
          "ru": "Выберите полное правильное предложение со значением: Я хочу, чтобы ты пришёл завтра."
        },
        "sentence": "____",
        "answer": "Quiero que vengas mañana.",
        "options": [
          "Quiero que vengas mañana.",
          "Quiero que vienes mañana.",
          "Quiero que vendrás mañana."
        ]
      },
      {
        "id": "grammar-es-b1-4-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მინდა ხვალ მოხვიდე.",
          "en": "Correct the learner error. Intended meaning: I want you to come tomorrow.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я хочу, чтобы ты пришёл завтра."
        },
        "sentence": "Quiero que vienes mañana. → ____",
        "answer": "Quiero que vengas mañana.",
        "options": [
          "Quiero que vengas mañana.",
          "Quiero que vendrás mañana.",
          "Quiero que vienes mañana."
        ]
      },
      {
        "id": "grammar-es-b1-4-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მნიშვნელოვანია, რომ ისწავლო.",
          "en": "Complete the sentence to express: It is important that you study.",
          "ru": "Заполните предложение со значением: Важно, чтобы ты учился."
        },
        "sentence": "Es importante que ____.",
        "answer": "estudies",
        "options": [
          "estudies",
          "estudias",
          "estudiarás"
        ]
      },
      {
        "id": "grammar-es-b1-4-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მნიშვნელოვანია, რომ ისწავლო.",
          "en": "Choose the complete correct sentence expressing: It is important that you study.",
          "ru": "Выберите полное правильное предложение со значением: Важно, чтобы ты учился."
        },
        "sentence": "____",
        "answer": "Es importante que estudies.",
        "options": [
          "Es importante que estudies.",
          "Es importante que estudias.",
          "Es importante que estudiarás."
        ]
      },
      {
        "id": "grammar-es-b1-4-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მნიშვნელოვანია, რომ ისწავლო.",
          "en": "Correct the learner error. Intended meaning: It is important that you study.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Важно, чтобы ты учился."
        },
        "sentence": "Es importante que estudias. → ____",
        "answer": "Es importante que estudies.",
        "options": [
          "Es importante que estudies.",
          "Es importante que estudiarás.",
          "Es importante que estudias."
        ]
      },
      {
        "id": "grammar-es-b1-4-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: არ მგონია, რომ ადვილი იყოს.",
          "en": "Complete the sentence to express: I do not think it is easy.",
          "ru": "Заполните предложение со значением: Не думаю, что это легко."
        },
        "sentence": "No creo que ____ fácil.",
        "answer": "sea",
        "options": [
          "sea",
          "es",
          "será"
        ]
      },
      {
        "id": "grammar-es-b1-4-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: არ მგონია, რომ ადვილი იყოს.",
          "en": "Choose the complete correct sentence expressing: I do not think it is easy.",
          "ru": "Выберите полное правильное предложение со значением: Не думаю, что это легко."
        },
        "sentence": "____",
        "answer": "No creo que sea fácil.",
        "options": [
          "No creo que sea fácil.",
          "No creo que es fácil.",
          "No creo que será fácil."
        ]
      },
      {
        "id": "grammar-es-b1-4-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: არ მგონია, რომ ადვილი იყოს.",
          "en": "Correct the learner error. Intended meaning: I do not think it is easy.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Не думаю, что это легко."
        },
        "sentence": "No creo que es fácil. → ____",
        "answer": "No creo que sea fácil.",
        "options": [
          "No creo que sea fácil.",
          "No creo que será fácil.",
          "No creo que es fácil."
        ]
      },
      {
        "id": "grammar-es-b1-4-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: იმედი მაქვს, დრო გექნება.",
          "en": "Complete the sentence to express: I hope you have time.",
          "ru": "Заполните предложение со значением: Надеюсь, у тебя будет время."
        },
        "sentence": "Espero que ____ tiempo.",
        "answer": "tengas",
        "options": [
          "tengas",
          "tienes",
          "tendrás"
        ]
      },
      {
        "id": "grammar-es-b1-4-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: იმედი მაქვს, დრო გექნება.",
          "en": "Choose the complete correct sentence expressing: I hope you have time.",
          "ru": "Выберите полное правильное предложение со значением: Надеюсь, у тебя будет время."
        },
        "sentence": "____",
        "answer": "Espero que tengas tiempo.",
        "options": [
          "Espero que tengas tiempo.",
          "Espero que tienes tiempo.",
          "Espero que tendrás tiempo."
        ]
      },
      {
        "id": "grammar-es-b1-4-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: იმედი მაქვს, დრო გექნება.",
          "en": "Correct the learner error. Intended meaning: I hope you have time.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Надеюсь, у тебя будет время."
        },
        "sentence": "Espero que tienes tiempo. → ____",
        "answer": "Espero que tengas tiempo.",
        "options": [
          "Espero que tengas tiempo.",
          "Espero que tendrás tiempo.",
          "Espero que tienes tiempo."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b2-1",
    "level": "B2",
    "title": {
      "ka": "არარეალური პირობა და წარსულის subjuntivo",
      "en": "Unreal conditions and past subjunctive",
      "ru": "Нереальные условия и прошедшее subjuntivo"
    },
    "explanation": {
      "ka": "არარეალურ აწმყოსა თუ მომავალში si + imperfecto de subjuntivo, condicional გავრცელებული მოდელია. წარსულის არმომხდარ პირობაში si + hubiera + participio გამოიყენება და შედეგი habría + participio-ით გამოიხატება. imperfecto de subjuntivo -ra ან -se ჯგუფით იქმნება: tuviera/tuviese. ორივე სტანდარტულია; მოცემულ მოდელში წარსული ფორმა აწმყოს ჰიპოთეზასაც აღნიშნავს. hubiera/hubiese + participio პირობას უფრო ადრეულ წარსულში ათავსებს. მთავარი ნაწილის habría aprobado მიუღწეველ შედეგს აჩვენებს. შერეულ პირობაში წარსული მიზეზი აწმყოს შედეგს უკავშირდება. ორივე ნაწილის დროის მნიშვნელობა ცალ-ცალკე შეამოწმე; ფორმების მექანიკური თანხვედრა საჭირო არაა.",
      "en": "Unreal present or future conditions commonly use si + imperfect subjunctive, conditional. An unreal past condition uses si + hubiera + participle with a result in habría + participle. The imperfect subjunctive has -ra and -se series: tuviera/tuviese. Both are standard; in this construction a past-shaped form can express a present hypothesis. Hubiera/hubiese + participle locates the condition in an earlier past. Main-clause habría aprobado expresses the unrealised result. A mixed condition links a past cause to a present result. Identify each clause’s time separately rather than mechanically matching forms.",
      "ru": "Нереальное настоящее или будущее обычно выражается si + imperfecto de subjuntivo, condicional. Нереальное прошлое использует si + hubiera + причастие и результат habría + причастие. Imperfecto de subjuntivo имеет ряды -ra и -se: tuviera/tuviese. Оба нормативны; форма прошлого здесь может обозначать нынешнюю гипотезу. Hubiera/hubiese + причастие помещает условие в более раннее прошлое. Habría aprobado в главной части показывает нереализованный результат. Смешанное условие связывает прошлую причину с настоящим результатом. Определяйте время каждой части отдельно, а не подбирайте формы механически."
    },
    "rules": [
      {
        "form": "Si tuviera tiempo, viajaría.",
        "detail": {
          "ka": "imperfecto de subjuntivo -ra ან -se ჯგუფით იქმნება: tuviera/tuviese. ორივე სტანდარტულია; მოცემულ მოდელში წარსული ფორმა აწმყოს ჰიპოთეზასაც აღნიშნავს.",
          "en": "The imperfect subjunctive has -ra and -se series: tuviera/tuviese. Both are standard; in this construction a past-shaped form can express a present hypothesis.",
          "ru": "Imperfecto de subjuntivo имеет ряды -ra и -se: tuviera/tuviese. Оба нормативны; форма прошлого здесь может обозначать нынешнюю гипотезу."
        }
      },
      {
        "form": "Si hubiera estudiado, habría aprobado.",
        "detail": {
          "ka": "hubiera/hubiese + participio პირობას უფრო ადრეულ წარსულში ათავსებს. მთავარი ნაწილის habría aprobado მიუღწეველ შედეგს აჩვენებს.",
          "en": "Hubiera/hubiese + participle locates the condition in an earlier past. Main-clause habría aprobado expresses the unrealised result.",
          "ru": "Hubiera/hubiese + причастие помещает условие в более раннее прошлое. Habría aprobado в главной части показывает нереализованный результат."
        }
      },
      {
        "form": "Si hubiera estudiado, sabría la respuesta ahora.",
        "detail": {
          "ka": "შერეულ პირობაში წარსული მიზეზი აწმყოს შედეგს უკავშირდება. ორივე ნაწილის დროის მნიშვნელობა ცალ-ცალკე შეამოწმე; ფორმების მექანიკური თანხვედრა საჭირო არაა.",
          "en": "A mixed condition links a past cause to a present result. Identify each clause’s time separately rather than mechanically matching forms.",
          "ru": "Смешанное условие связывает прошлую причину с настоящим результатом. Определяйте время каждой части отдельно, а не подбирайте формы механически."
        }
      }
    ],
    "examples": [
      {
        "es": "Si tuviera tiempo, viajaría.",
        "ka": "დრო რომ მქონდეს, ვიმოგზაურებდი.",
        "en": "If I had time, I would travel.",
        "ru": "Если бы было время, я бы путешествовал."
      },
      {
        "es": "Si hubiera estudiado, habría aprobado.",
        "ka": "რომ მესწავლა, გამოცდას ჩავაბარებდი.",
        "en": "If I had studied, I would have passed.",
        "ru": "Если бы я учился, я бы сдал экзамен."
      },
      {
        "es": "Si hubiera estudiado, sabría la respuesta ahora.",
        "ka": "რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
        "en": "If I had studied, I would know the answer now.",
        "ru": "Если бы я учился, сейчас знал бы ответ."
      },
      {
        "es": "Me gustaría que vinieras.",
        "ka": "მინდა, რომ მოხვიდე.",
        "en": "I would like you to come.",
        "ru": "Мне бы хотелось, чтобы ты пришёл."
      }
    ],
    "pitfalls": {
      "ka": "სტანდარტულ ჰიპოთეზაში si tendría tiempo ნაცვლად si tuviera tiempo თქვი. -ra და -se სწორი ალტერნატივებია, ამიტომ მათ ერთი სწორი პასუხის ვარიანტებად ნუ დაუპირისპირებ.",
      "en": "In the standard hypothesis use si tuviera tiempo, not si tendría tiempo. -Ra and -se are both valid, so do not treat one as an incorrect alternative to the other.",
      "ru": "В стандартной гипотезе нужно si tuviera tiempo, не si tendría tiempo. -Ra и -se обе правильны: не противопоставляйте их как верный и неверный варианты."
    },
    "quiz": [
      {
        "id": "grammar-es-b2-1-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: დრო რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Complete the sentence to express: If I had time, I would travel.",
          "ru": "Заполните предложение со значением: Если бы было время, я бы путешествовал."
        },
        "sentence": "Si ____ tiempo, viajaría.",
        "answer": "tuviera",
        "options": [
          "tuviera",
          "tendría",
          "tengo"
        ]
      },
      {
        "id": "grammar-es-b2-1-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: დრო რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Choose the complete correct sentence expressing: If I had time, I would travel.",
          "ru": "Выберите полное правильное предложение со значением: Если бы было время, я бы путешествовал."
        },
        "sentence": "____",
        "answer": "Si tuviera tiempo, viajaría.",
        "options": [
          "Si tuviera tiempo, viajaría.",
          "Si tendría tiempo, viajaría.",
          "Si tengo tiempo, viajaría."
        ]
      },
      {
        "id": "grammar-es-b2-1-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: დრო რომ მქონდეს, ვიმოგზაურებდი.",
          "en": "Correct the learner error. Intended meaning: If I had time, I would travel.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Если бы было время, я бы путешествовал."
        },
        "sentence": "Si tendría tiempo, viajaría. → ____",
        "answer": "Si tuviera tiempo, viajaría.",
        "options": [
          "Si tuviera tiempo, viajaría.",
          "Si tengo tiempo, viajaría.",
          "Si tendría tiempo, viajaría."
        ]
      },
      {
        "id": "grammar-es-b2-1-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: რომ მესწავლა, გამოცდას ჩავაბარებდი.",
          "en": "Complete the sentence to express: If I had studied, I would have passed.",
          "ru": "Заполните предложение со значением: Если бы я учился, я бы сдал экзамен."
        },
        "sentence": "Si ____ estudiado, habría aprobado.",
        "answer": "hubiera",
        "options": [
          "hubiera",
          "habría",
          "he"
        ]
      },
      {
        "id": "grammar-es-b2-1-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: რომ მესწავლა, გამოცდას ჩავაბარებდი.",
          "en": "Choose the complete correct sentence expressing: If I had studied, I would have passed.",
          "ru": "Выберите полное правильное предложение со значением: Если бы я учился, я бы сдал экзамен."
        },
        "sentence": "____",
        "answer": "Si hubiera estudiado, habría aprobado.",
        "options": [
          "Si hubiera estudiado, habría aprobado.",
          "Si habría estudiado, habría aprobado.",
          "Si he estudiado, habría aprobado."
        ]
      },
      {
        "id": "grammar-es-b2-1-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: რომ მესწავლა, გამოცდას ჩავაბარებდი.",
          "en": "Correct the learner error. Intended meaning: If I had studied, I would have passed.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Если бы я учился, я бы сдал экзамен."
        },
        "sentence": "Si habría estudiado, habría aprobado. → ____",
        "answer": "Si hubiera estudiado, habría aprobado.",
        "options": [
          "Si hubiera estudiado, habría aprobado.",
          "Si he estudiado, habría aprobado.",
          "Si habría estudiado, habría aprobado."
        ]
      },
      {
        "id": "grammar-es-b2-1-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
          "en": "Complete the sentence to express: If I had studied, I would know the answer now.",
          "ru": "Заполните предложение со значением: Если бы я учился, сейчас знал бы ответ."
        },
        "sentence": "Si hubiera estudiado, ____ la respuesta ahora.",
        "answer": "sabría",
        "options": [
          "sabría",
          "habría sabido",
          "sé"
        ]
      },
      {
        "id": "grammar-es-b2-1-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
          "en": "Choose the complete correct sentence expressing: If I had studied, I would know the answer now.",
          "ru": "Выберите полное правильное предложение со значением: Если бы я учился, сейчас знал бы ответ."
        },
        "sentence": "____",
        "answer": "Si hubiera estudiado, sabría la respuesta ahora.",
        "options": [
          "Si hubiera estudiado, sabría la respuesta ahora.",
          "Si hubiera estudiado, habría sabido la respuesta ahora.",
          "Si hubiera estudiado, sé la respuesta ahora."
        ]
      },
      {
        "id": "grammar-es-b2-1-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
          "en": "Correct the learner error. Intended meaning: If I had studied, I would know the answer now.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Если бы я учился, сейчас знал бы ответ."
        },
        "sentence": "Si hubiera estudiado, habría sabido la respuesta ahora. → ____",
        "answer": "Si hubiera estudiado, sabría la respuesta ahora.",
        "options": [
          "Si hubiera estudiado, sabría la respuesta ahora.",
          "Si hubiera estudiado, sé la respuesta ahora.",
          "Si hubiera estudiado, habría sabido la respuesta ahora."
        ]
      },
      {
        "id": "grammar-es-b2-1-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მინდა, რომ მოხვიდე.",
          "en": "Complete the sentence to express: I would like you to come.",
          "ru": "Заполните предложение со значением: Мне бы хотелось, чтобы ты пришёл."
        },
        "sentence": "Me gustaría que ____.",
        "answer": "vinieras",
        "options": [
          "vinieras",
          "vienes",
          "vendrás"
        ]
      },
      {
        "id": "grammar-es-b2-1-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მინდა, რომ მოხვიდე.",
          "en": "Choose the complete correct sentence expressing: I would like you to come.",
          "ru": "Выберите полное правильное предложение со значением: Мне бы хотелось, чтобы ты пришёл."
        },
        "sentence": "____",
        "answer": "Me gustaría que vinieras.",
        "options": [
          "Me gustaría que vinieras.",
          "Me gustaría que vienes.",
          "Me gustaría que vendrás."
        ]
      },
      {
        "id": "grammar-es-b2-1-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მინდა, რომ მოხვიდე.",
          "en": "Correct the learner error. Intended meaning: I would like you to come.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Мне бы хотелось, чтобы ты пришёл."
        },
        "sentence": "Me gustaría que vienes. → ____",
        "answer": "Me gustaría que vinieras.",
        "options": [
          "Me gustaría que vinieras.",
          "Me gustaría que vendrás.",
          "Me gustaría que vienes."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b2-2",
    "level": "B2",
    "title": {
      "ka": "რთული დროები და დროის თანმიმდევრობა",
      "en": "Perfect tenses and sequence",
      "ru": "Сложные времена и последовательность"
    },
    "explanation": {
      "ka": "haber + participio მოდელის დრო დამხმარე ზმნაში ჩანს. pluscuamperfecto უფრო ადრეულ წარსულს აჩვენებს; futuro perfecto მომავალი ვადისთვის დასრულებას ან კონტექსტურ ვარაუდს გამოხატავს. había/habías/habíamos + participio წარსულის წინა ეტაპს აღწერს. მთავარი მოვლენა შეიძლება pretérito-ში იყოს: Cuando llegué, ya había salido. futuro perfecto რეგულარულად აერთიანებს haber-ის მომავალსა და participio-ს. მითითებული ვადა შედეგის დასრულების საზღვარია და არა მხოლოდ პროცესის დაწყება. condicional compuesto ხშირად არარეალურ წარსულ შედეგშია. perfecto de subjuntivo აწმყოს შეფასებასთან დაკავშირებულ დასრულებულ მოვლენას აღნიშნავს: Me alegra que hayas venido.",
      "en": "In haber + participle constructions, the auxiliary carries tense. The pluperfect locates an event before a past reference point; future perfect expresses completion by a future deadline or a contextual deduction. Había/habías/habíamos + participle expresses an earlier past stage. The later event may be preterite: Cuando llegué, ya había salido. Future perfect combines future haber with a participle. The stated deadline concerns completed results, not merely the start of a process. Conditional perfect often marks an unreal past result. Perfect subjunctive links a completed event with a present evaluation: Me alegra que hayas venido.",
      "ru": "В haber + причастие время выражает вспомогательный глагол. Pluscuamperfecto обозначает событие до прошлого ориентира; futuro perfecto — завершение к будущему сроку либо контекстное предположение. Había/habías/habíamos + причастие описывает более ранний этап прошлого. Позднее событие может стоять в pretérito: Cuando llegué, ya había salido. Futuro perfecto сочетает будущее haber с причастием. Указанный срок относится к завершённому результату, не только к началу процесса. Condicional compuesto часто обозначает нереальный прошлый результат. Perfecto de subjuntivo связывает завершённое событие с нынешней оценкой: Me alegra que hayas venido."
    },
    "rules": [
      {
        "form": "había salido antes de que llegáramos",
        "detail": {
          "ka": "había/habías/habíamos + participio წარსულის წინა ეტაპს აღწერს. მთავარი მოვლენა შეიძლება pretérito-ში იყოს: Cuando llegué, ya había salido.",
          "en": "Había/habías/habíamos + participle expresses an earlier past stage. The later event may be preterite: Cuando llegué, ya había salido.",
          "ru": "Había/habías/habíamos + причастие описывает более ранний этап прошлого. Позднее событие может стоять в pretérito: Cuando llegué, ya había salido."
        }
      },
      {
        "form": "habré terminado para el viernes",
        "detail": {
          "ka": "futuro perfecto რეგულარულად აერთიანებს haber-ის მომავალსა და participio-ს. მითითებული ვადა შედეგის დასრულების საზღვარია და არა მხოლოდ პროცესის დაწყება.",
          "en": "Future perfect combines future haber with a participle. The stated deadline concerns completed results, not merely the start of a process.",
          "ru": "Futuro perfecto сочетает будущее haber с причастием. Указанный срок относится к завершённому результату, не только к началу процесса."
        }
      },
      {
        "form": "habría llamado / haya terminado",
        "detail": {
          "ka": "condicional compuesto ხშირად არარეალურ წარსულ შედეგშია. perfecto de subjuntivo აწმყოს შეფასებასთან დაკავშირებულ დასრულებულ მოვლენას აღნიშნავს: Me alegra que hayas venido.",
          "en": "Conditional perfect often marks an unreal past result. Perfect subjunctive links a completed event with a present evaluation: Me alegra que hayas venido.",
          "ru": "Condicional compuesto часто обозначает нереальный прошлый результат. Perfecto de subjuntivo связывает завершённое событие с нынешней оценкой: Me alegra que hayas venido."
        }
      }
    ],
    "examples": [
      {
        "es": "Cuando llegué, Ana ya había salido.",
        "ka": "როცა მივედი, ანა უკვე წასული იყო.",
        "en": "When I arrived, Ana had already left.",
        "ru": "Когда я пришёл, Анна уже ушла."
      },
      {
        "es": "Para el viernes habré terminado.",
        "ka": "პარასკევისთვის დასრულებული მექნება.",
        "en": "By Friday I will have finished.",
        "ru": "К пятнице я закончу."
      },
      {
        "es": "Ella había escrito la carta.",
        "ka": "მან მანამდე წერილი დაწერა.",
        "en": "She had written the letter.",
        "ru": "Она уже написала письмо."
      },
      {
        "es": "Me alegra que hayas venido.",
        "ka": "მიხარია, რომ მოხვედი.",
        "en": "I am glad that you have come.",
        "ru": "Я рад, что ты пришёл."
      }
    ],
    "pitfalls": {
      "ka": "haber-თან participio სქესით არ შეთანხმდება: Ella había salido, არა salida. მაგრამ estar-ის მდგომარეობის მოდელში La puerta está cerrada შეთანხმება სწორია.",
      "en": "With haber, the participle does not agree in gender: Ella había salido, not salida. With the state construction estar, agreement in La puerta está cerrada is correct.",
      "ru": "С haber причастие не согласуется по роду: Ella había salido, не salida. Но в состоянии с estar согласование La puerta está cerrada правильно."
    },
    "quiz": [
      {
        "id": "grammar-es-b2-2-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: როცა მივედი, ანა უკვე წასული იყო.",
          "en": "Complete the sentence to express: When I arrived, Ana had already left.",
          "ru": "Заполните предложение со значением: Когда я пришёл, Анна уже ушла."
        },
        "sentence": "Cuando llegué, Ana ya ____ salido.",
        "answer": "había",
        "options": [
          "había",
          "ha",
          "habrá"
        ]
      },
      {
        "id": "grammar-es-b2-2-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: როცა მივედი, ანა უკვე წასული იყო.",
          "en": "Choose the complete correct sentence expressing: When I arrived, Ana had already left.",
          "ru": "Выберите полное правильное предложение со значением: Когда я пришёл, Анна уже ушла."
        },
        "sentence": "____",
        "answer": "Cuando llegué, Ana ya había salido.",
        "options": [
          "Cuando llegué, Ana ya había salido.",
          "Cuando llegué, Ana ya ha salido.",
          "Cuando llegué, Ana ya habrá salido."
        ]
      },
      {
        "id": "grammar-es-b2-2-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: როცა მივედი, ანა უკვე წასული იყო.",
          "en": "Correct the learner error. Intended meaning: When I arrived, Ana had already left.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Когда я пришёл, Анна уже ушла."
        },
        "sentence": "Cuando llegué, Ana ya ha salido. → ____",
        "answer": "Cuando llegué, Ana ya había salido.",
        "options": [
          "Cuando llegué, Ana ya había salido.",
          "Cuando llegué, Ana ya habrá salido.",
          "Cuando llegué, Ana ya ha salido."
        ]
      },
      {
        "id": "grammar-es-b2-2-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: პარასკევისთვის დასრულებული მექნება.",
          "en": "Complete the sentence to express: By Friday I will have finished.",
          "ru": "Заполните предложение со значением: К пятнице я закончу."
        },
        "sentence": "Para el viernes ____ terminado.",
        "answer": "habré",
        "options": [
          "habré",
          "había",
          "habría"
        ]
      },
      {
        "id": "grammar-es-b2-2-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: პარასკევისთვის დასრულებული მექნება.",
          "en": "Choose the complete correct sentence expressing: By Friday I will have finished.",
          "ru": "Выберите полное правильное предложение со значением: К пятнице я закончу."
        },
        "sentence": "____",
        "answer": "Para el viernes habré terminado.",
        "options": [
          "Para el viernes habré terminado.",
          "Para el viernes había terminado.",
          "Para el viernes habría terminado."
        ]
      },
      {
        "id": "grammar-es-b2-2-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: პარასკევისთვის დასრულებული მექნება.",
          "en": "Correct the learner error. Intended meaning: By Friday I will have finished.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: К пятнице я закончу."
        },
        "sentence": "Para el viernes había terminado. → ____",
        "answer": "Para el viernes habré terminado.",
        "options": [
          "Para el viernes habré terminado.",
          "Para el viernes habría terminado.",
          "Para el viernes había terminado."
        ]
      },
      {
        "id": "grammar-es-b2-2-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან მანამდე წერილი დაწერა.",
          "en": "Complete the sentence to express: She had written the letter.",
          "ru": "Заполните предложение со значением: Она уже написала письмо."
        },
        "sentence": "Ella había ____ la carta.",
        "answer": "escrito",
        "options": [
          "escrito",
          "escrita",
          "escribido"
        ]
      },
      {
        "id": "grammar-es-b2-2-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მან მანამდე წერილი დაწერა.",
          "en": "Choose the complete correct sentence expressing: She had written the letter.",
          "ru": "Выберите полное правильное предложение со значением: Она уже написала письмо."
        },
        "sentence": "____",
        "answer": "Ella había escrito la carta.",
        "options": [
          "Ella había escrito la carta.",
          "Ella había escrita la carta.",
          "Ella había escribido la carta."
        ]
      },
      {
        "id": "grammar-es-b2-2-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მან მანამდე წერილი დაწერა.",
          "en": "Correct the learner error. Intended meaning: She had written the letter.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Она уже написала письмо."
        },
        "sentence": "Ella había escrita la carta. → ____",
        "answer": "Ella había escrito la carta.",
        "options": [
          "Ella había escrito la carta.",
          "Ella había escribido la carta.",
          "Ella había escrita la carta."
        ]
      },
      {
        "id": "grammar-es-b2-2-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: მიხარია, რომ მოხვედი.",
          "en": "Complete the sentence to express: I am glad that you have come.",
          "ru": "Заполните предложение со значением: Я рад, что ты пришёл."
        },
        "sentence": "Me alegra que ____ venido.",
        "answer": "hayas",
        "options": [
          "hayas",
          "has",
          "habías"
        ]
      },
      {
        "id": "grammar-es-b2-2-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: მიხარია, რომ მოხვედი.",
          "en": "Choose the complete correct sentence expressing: I am glad that you have come.",
          "ru": "Выберите полное правильное предложение со значением: Я рад, что ты пришёл."
        },
        "sentence": "____",
        "answer": "Me alegra que hayas venido.",
        "options": [
          "Me alegra que hayas venido.",
          "Me alegra que has venido.",
          "Me alegra que habías venido."
        ]
      },
      {
        "id": "grammar-es-b2-2-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: მიხარია, რომ მოხვედი.",
          "en": "Correct the learner error. Intended meaning: I am glad that you have come.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я рад, что ты пришёл."
        },
        "sentence": "Me alegra que has venido. → ____",
        "answer": "Me alegra que hayas venido.",
        "options": [
          "Me alegra que hayas venido.",
          "Me alegra que habías venido.",
          "Me alegra que has venido."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b2-3",
    "level": "B2",
    "title": {
      "ka": "ვნებითი და დამოკიდებული განსაზღვრება",
      "en": "Passive and relative clauses",
      "ru": "Пассив и относительные предложения"
    },
    "explanation": {
      "ka": "ვნებითი ყურადღებას მოქმედების მიმღებზე გადააქვს. განმსაზღვრელი ნაწილი სახელს აზუსტებს, поясებითი კი დამატებით ცნობას იძლევა და მძიმეებით გამოიყოფა. ser + participio მოქმედებით ვნებითს ქმნის. participio ქვეშემდებარეს სქესსა და რიცხვში ეთანხმება; por შემსრულებელს აღნიშნავს. se pasiva თვლად ქვემდებარეს ეთანხმება: se venden libros. უპირო se-სთან ზმნა ჩვეულებრივ ერთობითშია: se vive; ეს ორი კონსტრუქცია განასხვავე. ნეიტრალური que ბევრ დამოკიდებულ ნაწილშია. წინდებული relative-ს წინ დგას; quien ადამიანს აღნიშნავს. que-ს ნაცვლად მახვილიანი qué ამ მოდელში არ იწერება.",
      "en": "A passive shifts attention to the recipient of an action. A defining relative identifies a noun; a non-defining relative adds information and is separated by commas. Ser + participle forms an event passive. The participle agrees with the subject in gender and number; por introduces the agent. A se-passive agrees with a countable subject: se venden libros. Impersonal se normally has singular agreement: se vive. Distinguish the two constructions. Neutral que introduces many relative clauses. A preposition comes before the relative word; quien refers to a person. Do not use accented qué instead of relative que here.",
      "ru": "Пассив переносит внимание на объект действия. Определительная часть уточняет предмет; пояснительная даёт добавочную информацию и отделяется запятыми. Ser + причастие образует событийный пассив. Причастие согласуется с подлежащим в роде и числе; por вводит исполнителя. Пассив с se согласуется с подлежащим: se venden libros. Безличное se обычно требует единственного: se vive. Различайте конструкции. Нейтральное que вводит многие относительные части. Предлог стоит перед относительным словом; quien относится к человеку. Ударное qué здесь не заменяет относительное que."
    },
    "rules": [
      {
        "form": "El puente fue construido por el equipo.",
        "detail": {
          "ka": "ser + participio მოქმედებით ვნებითს ქმნის. participio ქვეშემდებარეს სქესსა და რიცხვში ეთანხმება; por შემსრულებელს აღნიშნავს.",
          "en": "Ser + participle forms an event passive. The participle agrees with the subject in gender and number; por introduces the agent.",
          "ru": "Ser + причастие образует событийный пассив. Причастие согласуется с подлежащим в роде и числе; por вводит исполнителя."
        }
      },
      {
        "form": "Se venden libros. / Se vive bien aquí.",
        "detail": {
          "ka": "se pasiva თვლად ქვემდებარეს ეთანხმება: se venden libros. უპირო se-სთან ზმნა ჩვეულებრივ ერთობითშია: se vive; ეს ორი კონსტრუქცია განასხვავე.",
          "en": "A se-passive agrees with a countable subject: se venden libros. Impersonal se normally has singular agreement: se vive. Distinguish the two constructions.",
          "ru": "Пассив с se согласуется с подлежащим: se venden libros. Безличное se обычно требует единственного: se vive. Различайте конструкции."
        }
      },
      {
        "form": "la persona con quien hablo / la casa que compré",
        "detail": {
          "ka": "ნეიტრალური que ბევრ დამოკიდებულ ნაწილშია. წინდებული relative-ს წინ დგას; quien ადამიანს აღნიშნავს. que-ს ნაცვლად მახვილიანი qué ამ მოდელში არ იწერება.",
          "en": "Neutral que introduces many relative clauses. A preposition comes before the relative word; quien refers to a person. Do not use accented qué instead of relative que here.",
          "ru": "Нейтральное que вводит многие относительные части. Предлог стоит перед относительным словом; quien относится к человеку. Ударное qué здесь не заменяет относительное que."
        }
      }
    ],
    "examples": [
      {
        "es": "La carta fue escrita por Ana.",
        "ka": "წერილი ანამ დაწერა.",
        "en": "The letter was written by Ana.",
        "ru": "Письмо было написано Анной."
      },
      {
        "es": "Se venden libros aquí.",
        "ka": "აქ წიგნები იყიდება.",
        "en": "Books are sold here.",
        "ru": "Здесь продаются книги."
      },
      {
        "es": "La persona con quien hablo es Ana.",
        "ka": "ადამიანი, რომელსაც ველაპარაკები, ანაა.",
        "en": "The person with whom I am speaking is Ana.",
        "ru": "Человек, с которым я говорю, — Анна."
      },
      {
        "es": "La casa que compré es pequeña.",
        "ka": "სახლი, რომელიც ვიყიდე, პატარაა.",
        "en": "The house that I bought is small.",
        "ru": "Дом, который я купил, маленький."
      }
    ],
    "pitfalls": {
      "ka": "წარმოდგენილი მდგომარეობა La puerta está cerrada და დახურვის მოვლენა La puerta fue cerrada ერთნაირი აზრი არაა. ვნებითში cerrado/cerrada შეთანხმება haber-ისგან განსხვავდება.",
      "en": "The state La puerta está cerrada and event La puerta fue cerrada are not identical. Passive cerrado/cerrada agreement differs from haber constructions.",
      "ru": "Состояние La puerta está cerrada и событие La puerta fue cerrada не тождественны. Согласование cerrado/cerrada в пассиве отличается от конструкций с haber."
    },
    "quiz": [
      {
        "id": "grammar-es-b2-3-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: წერილი ანამ დაწერა.",
          "en": "Complete the sentence to express: The letter was written by Ana.",
          "ru": "Заполните предложение со значением: Письмо было написано Анной."
        },
        "sentence": "La carta fue ____ por Ana.",
        "answer": "escrita",
        "options": [
          "escrita",
          "escrito",
          "escritos"
        ]
      },
      {
        "id": "grammar-es-b2-3-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: წერილი ანამ დაწერა.",
          "en": "Choose the complete correct sentence expressing: The letter was written by Ana.",
          "ru": "Выберите полное правильное предложение со значением: Письмо было написано Анной."
        },
        "sentence": "____",
        "answer": "La carta fue escrita por Ana.",
        "options": [
          "La carta fue escrita por Ana.",
          "La carta fue escrito por Ana.",
          "La carta fue escritos por Ana."
        ]
      },
      {
        "id": "grammar-es-b2-3-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: წერილი ანამ დაწერა.",
          "en": "Correct the learner error. Intended meaning: The letter was written by Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Письмо было написано Анной."
        },
        "sentence": "La carta fue escrito por Ana. → ____",
        "answer": "La carta fue escrita por Ana.",
        "options": [
          "La carta fue escrita por Ana.",
          "La carta fue escritos por Ana.",
          "La carta fue escrito por Ana."
        ]
      },
      {
        "id": "grammar-es-b2-3-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ წიგნები იყიდება.",
          "en": "Complete the sentence to express: Books are sold here.",
          "ru": "Заполните предложение со значением: Здесь продаются книги."
        },
        "sentence": "Se ____ libros aquí.",
        "answer": "venden",
        "options": [
          "venden",
          "vende",
          "vendéis"
        ]
      },
      {
        "id": "grammar-es-b2-3-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: აქ წიგნები იყიდება.",
          "en": "Choose the complete correct sentence expressing: Books are sold here.",
          "ru": "Выберите полное правильное предложение со значением: Здесь продаются книги."
        },
        "sentence": "____",
        "answer": "Se venden libros aquí.",
        "options": [
          "Se venden libros aquí.",
          "Se vende libros aquí.",
          "Se vendéis libros aquí."
        ]
      },
      {
        "id": "grammar-es-b2-3-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: აქ წიგნები იყიდება.",
          "en": "Correct the learner error. Intended meaning: Books are sold here.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Здесь продаются книги."
        },
        "sentence": "Se vende libros aquí. → ____",
        "answer": "Se venden libros aquí.",
        "options": [
          "Se venden libros aquí.",
          "Se vendéis libros aquí.",
          "Se vende libros aquí."
        ]
      },
      {
        "id": "grammar-es-b2-3-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადამიანი, რომელსაც ველაპარაკები, ანაა.",
          "en": "Complete the sentence to express: The person with whom I am speaking is Ana.",
          "ru": "Заполните предложение со значением: Человек, с которым я говорю, — Анна."
        },
        "sentence": "La persona con ____ hablo es Ana.",
        "answer": "quien",
        "options": [
          "quien",
          "qué",
          "donde"
        ]
      },
      {
        "id": "grammar-es-b2-3-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ადამიანი, რომელსაც ველაპარაკები, ანაა.",
          "en": "Choose the complete correct sentence expressing: The person with whom I am speaking is Ana.",
          "ru": "Выберите полное правильное предложение со значением: Человек, с которым я говорю, — Анна."
        },
        "sentence": "____",
        "answer": "La persona con quien hablo es Ana.",
        "options": [
          "La persona con quien hablo es Ana.",
          "La persona con qué hablo es Ana.",
          "La persona con donde hablo es Ana."
        ]
      },
      {
        "id": "grammar-es-b2-3-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ადამიანი, რომელსაც ველაპარაკები, ანაა.",
          "en": "Correct the learner error. Intended meaning: The person with whom I am speaking is Ana.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Человек, с которым я говорю, — Анна."
        },
        "sentence": "La persona con qué hablo es Ana. → ____",
        "answer": "La persona con quien hablo es Ana.",
        "options": [
          "La persona con quien hablo es Ana.",
          "La persona con donde hablo es Ana.",
          "La persona con qué hablo es Ana."
        ]
      },
      {
        "id": "grammar-es-b2-3-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: სახლი, რომელიც ვიყიდე, პატარაა.",
          "en": "Complete the sentence to express: The house that I bought is small.",
          "ru": "Заполните предложение со значением: Дом, который я купил, маленький."
        },
        "sentence": "La casa ____ compré es pequeña.",
        "answer": "que",
        "options": [
          "que",
          "qué",
          "quién"
        ]
      },
      {
        "id": "grammar-es-b2-3-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: სახლი, რომელიც ვიყიდე, პატარაა.",
          "en": "Choose the complete correct sentence expressing: The house that I bought is small.",
          "ru": "Выберите полное правильное предложение со значением: Дом, который я купил, маленький."
        },
        "sentence": "____",
        "answer": "La casa que compré es pequeña.",
        "options": [
          "La casa que compré es pequeña.",
          "La casa qué compré es pequeña.",
          "La casa quién compré es pequeña."
        ]
      },
      {
        "id": "grammar-es-b2-3-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: სახლი, რომელიც ვიყიდე, პატარაა.",
          "en": "Correct the learner error. Intended meaning: The house that I bought is small.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Дом, который я купил, маленький."
        },
        "sentence": "La casa qué compré es pequeña. → ____",
        "answer": "La casa que compré es pequeña.",
        "options": [
          "La casa que compré es pequeña.",
          "La casa quién compré es pequeña.",
          "La casa qué compré es pequeña."
        ]
      }
    ]
  },
  {
    "id": "grammar-es-b2-4",
    "level": "B2",
    "title": {
      "ka": "subjuntivo დროსა და დათმობაში",
      "en": "Subjunctive in time and concession",
      "ru": "Subjuntivo времени и уступки"
    },
    "explanation": {
      "ka": "დროის კავშირთან ზმნის ფორმა დამოკიდებულია ფაქტია, ჩვევაა თუ ჯერ მოსალოდნელი მოვლენა. დათმობის aunque-ც იცვლის ნაკვთს იმის მიხედვით, მოსაუბრე ფაქტს ადასტურებს თუ ჰიპოთეზას განიხილავს. მომავალზე როცა ლაპარაკობ, cuando-ს შემდეგ ჩვეულებრივ აწმყოს subjuntivo დგას, არა მომავალი indicativo. ჩვევა indicativo-ს იყენებს: Cuando llego, descanso. antes de que და მიზნის para que ხშირად subjuntivo-ს მოითხოვს. ერთი მოქმედი პირისას antes de salir და para entender ინფინიტივით შეიძლება ითქვას. პირველ მოდელში წვიმა ჰიპოთეზურია ან შედეგისათვის უმნიშვნელო. მეორე ფაქტობრივ წვიმას ადასტურებს. სწორი არჩევანისთვის მოსაუბრის კონტექსტიც გაითვალისწინე.",
      "en": "With time conjunctions, mood depends on whether the event is a fact, habit or anticipated event. Although-clause aunque also changes mood depending on whether the speaker asserts a fact or considers a hypothesis. For a future event, cuando normally takes present subjunctive, not future indicative. A habit uses indicative: Cuando llego, descanso. Antes de que and purpose para que commonly require subjunctive. With the same subject, antes de salir and para entender can use infinitives. The first pattern treats rain as hypothetical or irrelevant to the result. The second asserts actual rain. Choose according to the speaker’s context as well as the words.",
      "ru": "С союзами времени наклонение зависит от факта, привычки или ожидаемого события. Aunque также меняет наклонение в зависимости от утверждения факта или рассмотрения гипотезы. Для будущего события после cuando обычно настоящее subjuntivo, не будущее indicativo. Привычка использует indicativo: Cuando llego, descanso. Antes de que и целевое para que обычно требуют subjuntivo. При одном исполнителе возможны инфинитивы antes de salir и para entender. Первая модель рассматривает дождь как гипотезу или несущественное условие. Вторая утверждает факт дождя. Выбирайте с учётом контекста говорящего."
    },
    "rules": [
      {
        "form": "Cuando llegue, te llamaré.",
        "detail": {
          "ka": "მომავალზე როცა ლაპარაკობ, cuando-ს შემდეგ ჩვეულებრივ აწმყოს subjuntivo დგას, არა მომავალი indicativo. ჩვევა indicativo-ს იყენებს: Cuando llego, descanso.",
          "en": "For a future event, cuando normally takes present subjunctive, not future indicative. A habit uses indicative: Cuando llego, descanso.",
          "ru": "Для будущего события после cuando обычно настоящее subjuntivo, не будущее indicativo. Привычка использует indicativo: Cuando llego, descanso."
        }
      },
      {
        "form": "antes de que salga / para que entiendas",
        "detail": {
          "ka": "antes de que და მიზნის para que ხშირად subjuntivo-ს მოითხოვს. ერთი მოქმედი პირისას antes de salir და para entender ინფინიტივით შეიძლება ითქვას.",
          "en": "Antes de que and purpose para que commonly require subjunctive. With the same subject, antes de salir and para entender can use infinitives.",
          "ru": "Antes de que и целевое para que обычно требуют subjuntivo. При одном исполнителе возможны инфинитивы antes de salir и para entender."
        }
      },
      {
        "form": "Aunque llueva, iremos. / Aunque llueve, salimos.",
        "detail": {
          "ka": "პირველ მოდელში წვიმა ჰიპოთეზურია ან შედეგისათვის უმნიშვნელო. მეორე ფაქტობრივ წვიმას ადასტურებს. სწორი არჩევანისთვის მოსაუბრის კონტექსტიც გაითვალისწინე.",
          "en": "The first pattern treats rain as hypothetical or irrelevant to the result. The second asserts actual rain. Choose according to the speaker’s context as well as the words.",
          "ru": "Первая модель рассматривает дождь как гипотезу или несущественное условие. Вторая утверждает факт дождя. Выбирайте с учётом контекста говорящего."
        }
      }
    ],
    "examples": [
      {
        "es": "Cuando llegue mañana, te llamaré.",
        "ka": "ხვალ როცა ჩავალ, დაგირეკავ.",
        "en": "When I arrive tomorrow, I will call you.",
        "ru": "Когда завтра приеду, позвоню тебе."
      },
      {
        "es": "Te lo explico para que entiendas.",
        "ka": "ამას გიხსნი იმისთვის, რომ გაიგო.",
        "en": "I explain it so that you understand.",
        "ru": "Я объясняю это, чтобы ты понял."
      },
      {
        "es": "Saldré antes de que termine la reunión.",
        "ka": "შეხვედრის დასრულებამდე წავალ.",
        "en": "I will leave before the meeting finishes.",
        "ru": "Я уйду до того, как закончится встреча."
      },
      {
        "es": "Aunque llueva mañana, iremos.",
        "ka": "თუნდაც ხვალ იწვიმოს, წავალთ.",
        "en": "Even if it rains tomorrow, we will go.",
        "ru": "Даже если завтра пойдёт дождь, мы пойдём."
      }
    ],
    "pitfalls": {
      "ka": "ყველა cuando არ მოითხოვს subjuntivo-ს. დასრულებული წარსული ფაქტი ჩვეულებრივ indicativo-ა: Cuando llegué, llamé. მომავალი მთავარ ნაწილში ფორმას მხოლოდ გვერდით ყოფნით არ გადასცემს.",
      "en": "Not every cuando requires subjunctive. A completed past fact normally uses indicative: Cuando llegué, llamé. A future main clause does not mechanically impose its tense on the dependent clause.",
      "ru": "Не всякое cuando требует subjuntivo. Завершённый прошлый факт обычно в indicativo: Cuando llegué, llamé. Будущее главной части не передаётся зависимой механически."
    },
    "quiz": [
      {
        "id": "grammar-es-b2-4-cloze-0",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხვალ როცა ჩავალ, დაგირეკავ.",
          "en": "Complete the sentence to express: When I arrive tomorrow, I will call you.",
          "ru": "Заполните предложение со значением: Когда завтра приеду, позвоню тебе."
        },
        "sentence": "Cuando ____ mañana, te llamaré.",
        "answer": "llegue",
        "options": [
          "llegue",
          "llegaré",
          "llego"
        ]
      },
      {
        "id": "grammar-es-b2-4-meaning-0",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ხვალ როცა ჩავალ, დაგირეკავ.",
          "en": "Choose the complete correct sentence expressing: When I arrive tomorrow, I will call you.",
          "ru": "Выберите полное правильное предложение со значением: Когда завтра приеду, позвоню тебе."
        },
        "sentence": "____",
        "answer": "Cuando llegue mañana, te llamaré.",
        "options": [
          "Cuando llegue mañana, te llamaré.",
          "Cuando llegaré mañana, te llamaré.",
          "Cuando llego mañana, te llamaré."
        ]
      },
      {
        "id": "grammar-es-b2-4-editing-0",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ხვალ როცა ჩავალ, დაგირეკავ.",
          "en": "Correct the learner error. Intended meaning: When I arrive tomorrow, I will call you.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Когда завтра приеду, позвоню тебе."
        },
        "sentence": "Cuando llegaré mañana, te llamaré. → ____",
        "answer": "Cuando llegue mañana, te llamaré.",
        "options": [
          "Cuando llegue mañana, te llamaré.",
          "Cuando llego mañana, te llamaré.",
          "Cuando llegaré mañana, te llamaré."
        ]
      },
      {
        "id": "grammar-es-b2-4-cloze-1",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: ამას გიხსნი იმისთვის, რომ გაიგო.",
          "en": "Complete the sentence to express: I explain it so that you understand.",
          "ru": "Заполните предложение со значением: Я объясняю это, чтобы ты понял."
        },
        "sentence": "Te lo explico para que ____.",
        "answer": "entiendas",
        "options": [
          "entiendas",
          "entiendes",
          "entenderás"
        ]
      },
      {
        "id": "grammar-es-b2-4-meaning-1",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: ამას გიხსნი იმისთვის, რომ გაიგო.",
          "en": "Choose the complete correct sentence expressing: I explain it so that you understand.",
          "ru": "Выберите полное правильное предложение со значением: Я объясняю это, чтобы ты понял."
        },
        "sentence": "____",
        "answer": "Te lo explico para que entiendas.",
        "options": [
          "Te lo explico para que entiendas.",
          "Te lo explico para que entiendes.",
          "Te lo explico para que entenderás."
        ]
      },
      {
        "id": "grammar-es-b2-4-editing-1",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: ამას გიხსნი იმისთვის, რომ გაიგო.",
          "en": "Correct the learner error. Intended meaning: I explain it so that you understand.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я объясняю это, чтобы ты понял."
        },
        "sentence": "Te lo explico para que entiendes. → ____",
        "answer": "Te lo explico para que entiendas.",
        "options": [
          "Te lo explico para que entiendas.",
          "Te lo explico para que entenderás.",
          "Te lo explico para que entiendes."
        ]
      },
      {
        "id": "grammar-es-b2-4-cloze-2",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეხვედრის დასრულებამდე წავალ.",
          "en": "Complete the sentence to express: I will leave before the meeting finishes.",
          "ru": "Заполните предложение со значением: Я уйду до того, как закончится встреча."
        },
        "sentence": "Saldré antes de que ____ la reunión.",
        "answer": "termine",
        "options": [
          "termine",
          "termina",
          "terminará"
        ]
      },
      {
        "id": "grammar-es-b2-4-meaning-2",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: შეხვედრის დასრულებამდე წავალ.",
          "en": "Choose the complete correct sentence expressing: I will leave before the meeting finishes.",
          "ru": "Выберите полное правильное предложение со значением: Я уйду до того, как закончится встреча."
        },
        "sentence": "____",
        "answer": "Saldré antes de que termine la reunión.",
        "options": [
          "Saldré antes de que termine la reunión.",
          "Saldré antes de que termina la reunión.",
          "Saldré antes de que terminará la reunión."
        ]
      },
      {
        "id": "grammar-es-b2-4-editing-2",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: შეხვედრის დასრულებამდე წავალ.",
          "en": "Correct the learner error. Intended meaning: I will leave before the meeting finishes.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Я уйду до того, как закончится встреча."
        },
        "sentence": "Saldré antes de que termina la reunión. → ____",
        "answer": "Saldré antes de que termine la reunión.",
        "options": [
          "Saldré antes de que termine la reunión.",
          "Saldré antes de que terminará la reunión.",
          "Saldré antes de que termina la reunión."
        ]
      },
      {
        "id": "grammar-es-b2-4-cloze-3",
        "kind": "cloze",
        "prompt": {
          "ka": "შეავსე წინადადება ამ მნიშვნელობით: თუნდაც ხვალ იწვიმოს, წავალთ.",
          "en": "Complete the sentence to express: Even if it rains tomorrow, we will go.",
          "ru": "Заполните предложение со значением: Даже если завтра пойдёт дождь, мы пойдём."
        },
        "sentence": "Aunque ____ mañana, iremos.",
        "answer": "llueva",
        "options": [
          "llueva",
          "llueve",
          "lloverá"
        ]
      },
      {
        "id": "grammar-es-b2-4-meaning-3",
        "kind": "sentence",
        "prompt": {
          "ka": "აირჩიე სრული სწორი წინადადება ამ მნიშვნელობით: თუნდაც ხვალ იწვიმოს, წავალთ.",
          "en": "Choose the complete correct sentence expressing: Even if it rains tomorrow, we will go.",
          "ru": "Выберите полное правильное предложение со значением: Даже если завтра пойдёт дождь, мы пойдём."
        },
        "sentence": "____",
        "answer": "Aunque llueva mañana, iremos.",
        "options": [
          "Aunque llueva mañana, iremos.",
          "Aunque llueve mañana, iremos.",
          "Aunque lloverá mañana, iremos."
        ]
      },
      {
        "id": "grammar-es-b2-4-editing-3",
        "kind": "editing",
        "prompt": {
          "ka": "შეასწორე მოსწავლის შეცდომა. საჭირო მნიშვნელობა: თუნდაც ხვალ იწვიმოს, წავალთ.",
          "en": "Correct the learner error. Intended meaning: Even if it rains tomorrow, we will go.",
          "ru": "Исправьте ошибку ученика. Требуемый смысл: Даже если завтра пойдёт дождь, мы пойдём."
        },
        "sentence": "Aunque llueve mañana, iremos. → ____",
        "answer": "Aunque llueva mañana, iremos.",
        "options": [
          "Aunque llueva mañana, iremos.",
          "Aunque lloverá mañana, iremos.",
          "Aunque llueve mañana, iremos."
        ]
      }
    ]
  }
];
