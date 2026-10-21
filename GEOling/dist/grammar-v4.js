// Original multilingual grammar modules with cloze, meaning and editing practice.
export const grammarBank = {
  "en": [
    {
      "id": "grammar-en-a0-1",
      "level": "A0",
      "title": {
        "ka": "პირის ნაცვალსახელები",
        "en": "Subject pronouns",
        "ru": "Личные местоимения"
      },
      "explanation": {
        "ka": "ინგლისურში ჩვეულებრივ საჭიროა გამოხატული ქვემდებარე: I, you, he, she, it, we, they. I ყოველთვის დიდი ასოთი იწერება. I ერთ მოსაუბრეს აღნიშნავს, we კი მოსაუბრეს სხვებთან ერთად. you ერთ და რამდენიმე მსმენელთანაც ერთნაირია. ადამიანს he/she მისი ნაცვალსახელის მიხედვით შეურჩიე; ნივთთან ჩვეულებრივ it გამოიყენება.",
        "en": "English normally needs an explicit subject: I, you, he, she, it, we, they. Always write I with a capital letter. I identifies one speaker; we includes the speaker and others. You has the same form for one listener and several listeners. Use a person’s appropriate he/she pronoun; a thing normally takes it.",
        "ru": "В английском обычно требуется подлежащее: I, you, he, she, it, we, they. Местоимение I всегда пишется с заглавной буквы. I обозначает одного говорящего; we включает говорящего и других. You одинаково для одного и нескольких собеседников. Для человека выбирайте подходящее he/she; для предмета обычно используется it."
      },
      "rules": [
        {
          "form": "I / you / he / she / it",
          "detail": {
            "ka": "ინგლისურში ჩვეულებრივ საჭიროა გამოხატული ქვემდებარე: I, you, he, she, it, we, they. შეადარე მაგალითს: I am Nino. — მე ნინო ვარ.",
            "en": "English normally needs an explicit subject: I, you, he, she, it, we, they. Compare the example: I am Nino. — I am Nino.",
            "ru": "В английском обычно требуется подлежащее: I, you, he, she, it, we, they. Сравните с примером: I am Nino. — Я Нино."
          }
        },
        {
          "form": "we / you / they",
          "detail": {
            "ka": "I ყოველთვის დიდი ასოთი იწერება. შეადარე მაგალითს: She is here. — ის აქ არის.",
            "en": "Always write I with a capital letter. Compare the example: She is here. — She is here.",
            "ru": "Местоимение I всегда пишется с заглавной буквы. Сравните с примером: She is here. — Она здесь."
          }
        },
        {
          "form": "subject + verb",
          "detail": {
            "ka": "I ერთ მოსაუბრეს აღნიშნავს, we კი მოსაუბრეს სხვებთან ერთად. შეადარე მაგალითს: They are friends. — ისინი მეგობრები არიან.",
            "en": "I identifies one speaker; we includes the speaker and others. Compare the example: They are friends. — They are friends.",
            "ru": "I обозначает одного говорящего; we включает говорящего и других. Сравните с примером: They are friends. — Они друзья."
          }
        }
      ],
      "examples": [
        {
          "en": "I am Nino.",
          "ru": "Я Нино.",
          "ka": "მე ნინო ვარ."
        },
        {
          "en": "She is here.",
          "ru": "Она здесь.",
          "ka": "ის აქ არის."
        },
        {
          "en": "They are friends.",
          "ru": "Они друзья.",
          "ka": "ისინი მეგობრები არიან."
        }
      ],
      "pitfalls": {
        "ka": "I ერთ მოსაუბრეს აღნიშნავს, we კი მოსაუბრეს სხვებთან ერთად. you ერთ და რამდენიმე მსმენელთანაც ერთნაირია. ადამიანს he/she მისი ნაცვალსახელის მიხედვით შეურჩიე; ნივთთან ჩვეულებრივ it გამოიყენება.",
        "en": "I identifies one speaker; we includes the speaker and others. You has the same form for one listener and several listeners. Use a person’s appropriate he/she pronoun; a thing normally takes it.",
        "ru": "I обозначает одного говорящего; we включает говорящего и других. You одинаково для одного и нескольких собеседников. Для человека выбирайте подходящее he/she; для предмета обычно используется it."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ნინო ვარ.",
            "en": "Complete the sentence to express: Я Нино.",
            "ru": "Заполните предложение со значением: Я Нино."
          },
          "sentence": "____ am Nino.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის აქ არის.",
            "en": "Complete the sentence to express: Она здесь.",
            "ru": "Заполните предложение со значением: Она здесь."
          },
          "sentence": "____ is here.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ისინი მეგობრები არიან.",
            "en": "Complete the sentence to express: Они друзья.",
            "ru": "Заполните предложение со значением: Они друзья."
          },
          "sentence": "____ are friends.",
          "answer": "They",
          "options": [
            "They",
            "Them",
            "Their"
          ]
        },
        {
          "id": "grammar-en-a0-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ნინო ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я Нино.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я Нино."
          },
          "sentence": "I ____ Nino.",
          "answer": "am",
          "options": [
            "am",
            "is",
            "are"
          ]
        },
        {
          "id": "grammar-en-a0-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ნინო ვარ.",
            "en": "Choose the complete sentence expressing: Я Нино.",
            "ru": "Выберите полное предложение со значением: Я Нино."
          },
          "sentence": "____",
          "answer": "I am Nino.",
          "options": [
            "I am Nino.",
            "Me am Nino.",
            "My am Nino."
          ]
        },
        {
          "id": "grammar-en-a0-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ნინო ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я Нино.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я Нино."
          },
          "sentence": "Me am Nino. → ____",
          "answer": "I am Nino.",
          "options": [
            "I am Nino.",
            "My am Nino.",
            "Me am Nino."
          ]
        },
        {
          "id": "grammar-en-a0-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის აქ არის.",
            "en": "Complete a different part of the sentence. Intended meaning: Она здесь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она здесь."
          },
          "sentence": "She ____ here.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის აქ არის.",
            "en": "Choose the complete sentence expressing: Она здесь.",
            "ru": "Выберите полное предложение со значением: Она здесь."
          },
          "sentence": "____",
          "answer": "She is here.",
          "options": [
            "She is here.",
            "Her is here.",
            "Hers is here."
          ]
        },
        {
          "id": "grammar-en-a0-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის აქ არის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она здесь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она здесь."
          },
          "sentence": "Her is here. → ____",
          "answer": "She is here.",
          "options": [
            "She is here.",
            "Hers is here.",
            "Her is here."
          ]
        },
        {
          "id": "grammar-en-a0-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ისინი მეგობრები არიან.",
            "en": "Complete a different part of the sentence. Intended meaning: Они друзья.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Они друзья."
          },
          "sentence": "They ____ friends.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ისინი მეგობრები არიან.",
            "en": "Choose the complete sentence expressing: Они друзья.",
            "ru": "Выберите полное предложение со значением: Они друзья."
          },
          "sentence": "____",
          "answer": "They are friends.",
          "options": [
            "They are friends.",
            "Them are friends.",
            "Their are friends."
          ]
        },
        {
          "id": "grammar-en-a0-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ისინი მეგობრები არიან.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Они друзья.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Они друзья."
          },
          "sentence": "Them are friends. → ____",
          "answer": "They are friends.",
          "options": [
            "They are friends.",
            "Their are friends.",
            "Them are friends."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-2",
      "level": "A0",
      "title": {
        "ka": "ზმნა be: ვარ, ხარ, არის",
        "en": "Be: am, is, are",
        "ru": "Глагол be: am, is, are"
      },
      "explanation": {
        "ka": "აწმყოში be იცვლება: I am, he/she/it is, you/we/they are. უარყოფისთვის დაამატე not, კითხვაში be წინ გადმოდის. am მხოლოდ I-ს ეთანხმება. მოკლე ფორმებია I’m, she’s, we’re; ოფიციალურ ტექსტშიც სრული ფორმები ყოველთვის გამოდგება. მოკლე პასუხია Yes, I am და არა Yes, I’m.",
        "en": "In the present, use I am, he/she/it is and you/we/they are. Add not for negatives; move be before the subject for questions. Am agrees only with I. Contractions include I’m, she’s and we’re; full forms remain suitable in formal writing. The affirmative short answer is Yes, I am, not Yes, I’m.",
        "ru": "В настоящем времени: I am, he/she/it is, you/we/they are. Для отрицания добавьте not; в вопросе be ставится перед подлежащим. Am сочетается только с I. Сокращения: I’m, she’s, we’re; полные формы подходят и для официального текста. Краткий утвердительный ответ: Yes, I am, а не Yes, I’m."
      },
      "rules": [
        {
          "form": "I am ready.",
          "detail": {
            "ka": "აწმყოში be იცვლება: I am, he/she/it is, you/we/they are. შეადარე მაგალითს: I am ready. — მე მზად ვარ.",
            "en": "In the present, use I am, he/she/it is and you/we/they are. Compare the example: I am ready. — I am ready.",
            "ru": "В настоящем времени: I am, he/she/it is, you/we/they are. Сравните с примером: I am ready. — Я готова."
          }
        },
        {
          "form": "She is not ready.",
          "detail": {
            "ka": "უარყოფისთვის დაამატე not, კითხვაში be წინ გადმოდის. შეადარე მაგალითს: He is a teacher. — ის მასწავლებელია.",
            "en": "Add not for negatives; move be before the subject for questions. Compare the example: He is a teacher. — He is a teacher.",
            "ru": "Для отрицания добавьте not; в вопросе be ставится перед подлежащим. Сравните с примером: He is a teacher. — Он учитель."
          }
        },
        {
          "form": "Are you ready?",
          "detail": {
            "ka": "am მხოლოდ I-ს ეთანხმება. შეადარე მაგალითს: We are happy. — ჩვენ გვიხარია.",
            "en": "Am agrees only with I. Compare the example: We are happy. — We are happy.",
            "ru": "Am сочетается только с I. Сравните с примером: We are happy. — Мы рады."
          }
        }
      ],
      "examples": [
        {
          "en": "I am ready.",
          "ru": "Я готова.",
          "ka": "მე მზად ვარ."
        },
        {
          "en": "He is a teacher.",
          "ru": "Он учитель.",
          "ka": "ის მასწავლებელია."
        },
        {
          "en": "We are happy.",
          "ru": "Мы рады.",
          "ka": "ჩვენ გვიხარია."
        }
      ],
      "pitfalls": {
        "ka": "am მხოლოდ I-ს ეთანხმება. მოკლე ფორმებია I’m, she’s, we’re; ოფიციალურ ტექსტშიც სრული ფორმები ყოველთვის გამოდგება. მოკლე პასუხია Yes, I am და არა Yes, I’m.",
        "en": "Am agrees only with I. Contractions include I’m, she’s and we’re; full forms remain suitable in formal writing. The affirmative short answer is Yes, I am, not Yes, I’m.",
        "ru": "Am сочетается только с I. Сокращения: I’m, she’s, we’re; полные формы подходят и для официального текста. Краткий утвердительный ответ: Yes, I am, а не Yes, I’m."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე მზად ვარ.",
            "en": "Complete the sentence to express: Я готова.",
            "ru": "Заполните предложение со значением: Я готова."
          },
          "sentence": "I ____ ready.",
          "answer": "am",
          "options": [
            "am",
            "is",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის მასწავლებელია.",
            "en": "Complete the sentence to express: Он учитель.",
            "ru": "Заполните предложение со значением: Он учитель."
          },
          "sentence": "He ____ a teacher.",
          "answer": "is",
          "options": [
            "is",
            "am",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ გვიხარია.",
            "en": "Complete the sentence to express: Мы рады.",
            "ru": "Заполните предложение со значением: Мы рады."
          },
          "sentence": "We ____ happy.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე მზად ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я готова.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я готова."
          },
          "sentence": "____ am ready.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a0-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე მზად ვარ.",
            "en": "Choose the complete sentence expressing: Я готова.",
            "ru": "Выберите полное предложение со значением: Я готова."
          },
          "sentence": "____",
          "answer": "I am ready.",
          "options": [
            "I am ready.",
            "I is ready.",
            "I are ready."
          ]
        },
        {
          "id": "grammar-en-a0-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე მზად ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я готова.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я готова."
          },
          "sentence": "I is ready. → ____",
          "answer": "I am ready.",
          "options": [
            "I am ready.",
            "I are ready.",
            "I is ready."
          ]
        },
        {
          "id": "grammar-en-a0-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის მასწავლებელია.",
            "en": "Complete a different part of the sentence. Intended meaning: Он учитель.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он учитель."
          },
          "sentence": "____ is a teacher.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-a0-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის მასწავლებელია.",
            "en": "Choose the complete sentence expressing: Он учитель.",
            "ru": "Выберите полное предложение со значением: Он учитель."
          },
          "sentence": "____",
          "answer": "He is a teacher.",
          "options": [
            "He is a teacher.",
            "He am a teacher.",
            "He are a teacher."
          ]
        },
        {
          "id": "grammar-en-a0-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის მასწავლებელია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он учитель.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он учитель."
          },
          "sentence": "He am a teacher. → ____",
          "answer": "He is a teacher.",
          "options": [
            "He is a teacher.",
            "He are a teacher.",
            "He am a teacher."
          ]
        },
        {
          "id": "grammar-en-a0-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ გვიხარია.",
            "en": "Complete a different part of the sentence. Intended meaning: Мы рады.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мы рады."
          },
          "sentence": "____ are happy.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a0-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ გვიხარია.",
            "en": "Choose the complete sentence expressing: Мы рады.",
            "ru": "Выберите полное предложение со значением: Мы рады."
          },
          "sentence": "____",
          "answer": "We are happy.",
          "options": [
            "We are happy.",
            "We is happy.",
            "We am happy."
          ]
        },
        {
          "id": "grammar-en-a0-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ გვიხარია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мы рады.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мы рады."
          },
          "sentence": "We is happy. → ____",
          "answer": "We are happy.",
          "options": [
            "We are happy.",
            "We am happy.",
            "We is happy."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-3",
      "level": "A0",
      "title": {
        "ka": "განუსაზღვრელი არტიკლი",
        "en": "A and an",
        "ru": "Артикли a и an"
      },
      "explanation": {
        "ka": "a/an გამოიყენება ერთ თვლად ნივთთან. აირჩიე ხმის მიხედვით: a book, an apple; an hour, მაგრამ a university. a/an არ გამოიყენო ჩვეულებრივ მრავლობითთან ან უთვლად ნივთიერებასთან. პროფესიის დასახელებას ერთობითში არტიკლი ხშირად სჭირდება: a teacher. არ დაწერო an university: university იწყება თანხმოვანი /j/ ხმით.",
        "en": "Use a/an with one countable thing. Choose by sound: a book, an apple; an hour but a university. Do not normally use a/an with plurals or uncountable substances. A singular profession often needs an article: a teacher. Do not write an university: university begins with the consonant sound /j/.",
        "ru": "Используйте a/an с одним исчисляемым предметом. Выбор зависит от звука: a book, an apple; an hour, но a university. Обычно a/an не употребляется с множественным числом и неисчисляемыми веществами. Название профессии в единственном числе часто требует артикля: a teacher. Неверно an university: начальный звук /j/ — согласный."
      },
      "rules": [
        {
          "form": "a + consonant sound",
          "detail": {
            "ka": "a/an გამოიყენება ერთ თვლად ნივთთან. შეადარე მაგალითს: This is a book. — ეს წიგნია.",
            "en": "Use a/an with one countable thing. Compare the example: This is a book. — This is a book.",
            "ru": "Используйте a/an с одним исчисляемым предметом. Сравните с примером: This is a book. — Это книга."
          }
        },
        {
          "form": "an + vowel sound",
          "detail": {
            "ka": "აირჩიე ხმის მიხედვით: a book, an apple; an hour, მაგრამ a university. შეადარე მაგალითს: It is an apple. — ეს ვაშლია.",
            "en": "Choose by sound: a book, an apple; an hour but a university. Compare the example: It is an apple. — It is an apple.",
            "ru": "Выбор зависит от звука: a book, an apple; an hour, но a university. Сравните с примером: It is an apple. — Это яблоко."
          }
        },
        {
          "form": "one singular countable noun",
          "detail": {
            "ka": "a/an არ გამოიყენო ჩვეულებრივ მრავლობითთან ან უთვლად ნივთიერებასთან. შეადარე მაგალითს: She is a doctor. — ის ექიმია.",
            "en": "Do not normally use a/an with plurals or uncountable substances. Compare the example: She is a doctor. — She is a doctor.",
            "ru": "Обычно a/an не употребляется с множественным числом и неисчисляемыми веществами. Сравните с примером: She is a doctor. — Она врач."
          }
        }
      ],
      "examples": [
        {
          "en": "This is a book.",
          "ru": "Это книга.",
          "ka": "ეს წიგნია."
        },
        {
          "en": "It is an apple.",
          "ru": "Это яблоко.",
          "ka": "ეს ვაშლია."
        },
        {
          "en": "She is a doctor.",
          "ru": "Она врач.",
          "ka": "ის ექიმია."
        }
      ],
      "pitfalls": {
        "ka": "a/an არ გამოიყენო ჩვეულებრივ მრავლობითთან ან უთვლად ნივთიერებასთან. პროფესიის დასახელებას ერთობითში არტიკლი ხშირად სჭირდება: a teacher. არ დაწერო an university: university იწყება თანხმოვანი /j/ ხმით.",
        "en": "Do not normally use a/an with plurals or uncountable substances. A singular profession often needs an article: a teacher. Do not write an university: university begins with the consonant sound /j/.",
        "ru": "Обычно a/an не употребляется с множественным числом и неисчисляемыми веществами. Название профессии в единственном числе часто требует артикля: a teacher. Неверно an university: начальный звук /j/ — согласный."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს წიგნია.",
            "en": "Complete the sentence to express: Это книга.",
            "ru": "Заполните предложение со значением: Это книга."
          },
          "sentence": "This is ____ book.",
          "answer": "a",
          "options": [
            "a",
            "an",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ვაშლია.",
            "en": "Complete the sentence to express: Это яблоко.",
            "ru": "Заполните предложение со значением: Это яблоко."
          },
          "sentence": "It is ____ apple.",
          "answer": "an",
          "options": [
            "an",
            "a",
            "is"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ექიმია.",
            "en": "Complete the sentence to express: Она врач.",
            "ru": "Заполните предложение со значением: Она врач."
          },
          "sentence": "She is ____ doctor.",
          "answer": "a",
          "options": [
            "a",
            "an",
            "are"
          ]
        },
        {
          "id": "grammar-en-a0-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს წიგნია.",
            "en": "Complete a different part of the sentence. Intended meaning: Это книга.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это книга."
          },
          "sentence": "____ is a book.",
          "answer": "This",
          "options": [
            "This",
            "These",
            "Those"
          ]
        },
        {
          "id": "grammar-en-a0-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს წიგნია.",
            "en": "Choose the complete sentence expressing: Это книга.",
            "ru": "Выберите полное предложение со значением: Это книга."
          },
          "sentence": "____",
          "answer": "This is a book.",
          "options": [
            "This is a book.",
            "This is an book.",
            "This is are book."
          ]
        },
        {
          "id": "grammar-en-a0-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს წიგნია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это книга.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это книга."
          },
          "sentence": "This is an book. → ____",
          "answer": "This is a book.",
          "options": [
            "This is a book.",
            "This is are book.",
            "This is an book."
          ]
        },
        {
          "id": "grammar-en-a0-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ვაშლია.",
            "en": "Complete a different part of the sentence. Intended meaning: Это яблоко.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это яблоко."
          },
          "sentence": "It ____ an apple.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ვაშლია.",
            "en": "Choose the complete sentence expressing: Это яблоко.",
            "ru": "Выберите полное предложение со значением: Это яблоко."
          },
          "sentence": "____",
          "answer": "It is an apple.",
          "options": [
            "It is an apple.",
            "It is a apple.",
            "It is is apple."
          ]
        },
        {
          "id": "grammar-en-a0-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ვაშლია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это яблоко.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это яблоко."
          },
          "sentence": "It is a apple. → ____",
          "answer": "It is an apple.",
          "options": [
            "It is an apple.",
            "It is is apple.",
            "It is a apple."
          ]
        },
        {
          "id": "grammar-en-a0-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ექიმია.",
            "en": "Complete a different part of the sentence. Intended meaning: Она врач.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она врач."
          },
          "sentence": "____ is a doctor.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a0-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ექიმია.",
            "en": "Choose the complete sentence expressing: Она врач.",
            "ru": "Выберите полное предложение со значением: Она врач."
          },
          "sentence": "____",
          "answer": "She is a doctor.",
          "options": [
            "She is a doctor.",
            "She is an doctor.",
            "She is are doctor."
          ]
        },
        {
          "id": "grammar-en-a0-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ექიმია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она врач.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она врач."
          },
          "sentence": "She is an doctor. → ____",
          "answer": "She is a doctor.",
          "options": [
            "She is a doctor.",
            "She is are doctor.",
            "She is an doctor."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-4",
      "level": "A0",
      "title": {
        "ka": "მრავლობითი რიცხვი",
        "en": "Plural nouns",
        "ru": "Множественное число"
      },
      "explanation": {
        "ka": "ჩვეულებრივ მრავლობითს ემატება -s, შიშინა ბგერების შემდეგ -es. child→children და person→people ცალკე დაიმახსოვრე. თანხმოვანი+y ხშირად იცვლება -ies-ად: city→cities; ხმოვანი+y ინარჩუნებს y-ს: boy→boys. მრავლობითთან a/an აღარ გამოიყენება. two book არასწორია, თუ book ჩვეულებრივ თვლად სახელადაა გამოყენებული.",
        "en": "Usually add -s for plurals and -es after sibilant endings. Learn irregular child→children and person→people separately. Consonant+y often becomes -ies: city→cities; vowel+y keeps y: boy→boys. Plurals no longer take a/an. Two book is incorrect when book is used as an ordinary countable noun.",
        "ru": "Обычно множественное число образуется с -s, после шипящих окончаний — с -es. Формы child→children и person→people запоминайте отдельно. Согласная+y часто меняется на -ies: city→cities; после гласной y сохраняется: boy→boys. A/an с множественным числом не ставится. Two book неверно для обычного исчисляемого существительного."
      },
      "rules": [
        {
          "form": "book → books",
          "detail": {
            "ka": "ჩვეულებრივ მრავლობითს ემატება -s, შიშინა ბგერების შემდეგ -es. შეადარე მაგალითს: I have two books. — მე ორი წიგნი მაქვს.",
            "en": "Usually add -s for plurals and -es after sibilant endings. Compare the example: I have two books. — I have two books.",
            "ru": "Обычно множественное число образуется с -s, после шипящих окончаний — с -es. Сравните с примером: I have two books. — У меня две книги."
          }
        },
        {
          "form": "box → boxes",
          "detail": {
            "ka": "child→children და person→people ცალკე დაიმახსოვრე. შეადარე მაგალითს: There are three boxes. — იქ სამი ყუთია.",
            "en": "Learn irregular child→children and person→people separately. Compare the example: There are three boxes. — There are three boxes.",
            "ru": "Формы child→children и person→people запоминайте отдельно. Сравните с примером: There are three boxes. — Там три коробки."
          }
        },
        {
          "form": "child → children",
          "detail": {
            "ka": "თანხმოვანი+y ხშირად იცვლება -ies-ად: city→cities; ხმოვანი+y ინარჩუნებს y-ს: boy→boys. შეადარე მაგალითს: The children are here. — ბავშვები აქ არიან.",
            "en": "Consonant+y often becomes -ies: city→cities; vowel+y keeps y: boy→boys. Compare the example: The children are here. — The children are here.",
            "ru": "Согласная+y часто меняется на -ies: city→cities; после гласной y сохраняется: boy→boys. Сравните с примером: The children are here. — Дети здесь."
          }
        }
      ],
      "examples": [
        {
          "en": "I have two books.",
          "ru": "У меня две книги.",
          "ka": "მე ორი წიგნი მაქვს."
        },
        {
          "en": "There are three boxes.",
          "ru": "Там три коробки.",
          "ka": "იქ სამი ყუთია."
        },
        {
          "en": "The children are here.",
          "ru": "Дети здесь.",
          "ka": "ბავშვები აქ არიან."
        }
      ],
      "pitfalls": {
        "ka": "თანხმოვანი+y ხშირად იცვლება -ies-ად: city→cities; ხმოვანი+y ინარჩუნებს y-ს: boy→boys. მრავლობითთან a/an აღარ გამოიყენება. two book არასწორია, თუ book ჩვეულებრივ თვლად სახელადაა გამოყენებული.",
        "en": "Consonant+y often becomes -ies: city→cities; vowel+y keeps y: boy→boys. Plurals no longer take a/an. Two book is incorrect when book is used as an ordinary countable noun.",
        "ru": "Согласная+y часто меняется на -ies: city→cities; после гласной y сохраняется: boy→boys. A/an с множественным числом не ставится. Two book неверно для обычного исчисляемого существительного."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ორი წიგნი მაქვს.",
            "en": "Complete the sentence to express: У меня две книги.",
            "ru": "Заполните предложение со значением: У меня две книги."
          },
          "sentence": "I have two ____.",
          "answer": "books",
          "options": [
            "books",
            "book",
            "bookes"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: იქ სამი ყუთია.",
            "en": "Complete the sentence to express: Там три коробки.",
            "ru": "Заполните предложение со значением: Там три коробки."
          },
          "sentence": "There are three ____.",
          "answer": "boxes",
          "options": [
            "boxes",
            "box",
            "boxs"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ბავშვები აქ არიან.",
            "en": "Complete the sentence to express: Дети здесь.",
            "ru": "Заполните предложение со значением: Дети здесь."
          },
          "sentence": "The ____ are here.",
          "answer": "children",
          "options": [
            "children",
            "child",
            "childs"
          ]
        },
        {
          "id": "grammar-en-a0-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ორი წიგნი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: У меня две книги.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: У меня две книги."
          },
          "sentence": "____ have two books.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a0-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ორი წიგნი მაქვს.",
            "en": "Choose the complete sentence expressing: У меня две книги.",
            "ru": "Выберите полное предложение со значением: У меня две книги."
          },
          "sentence": "____",
          "answer": "I have two books.",
          "options": [
            "I have two books.",
            "I have two book.",
            "I have two bookes."
          ]
        },
        {
          "id": "grammar-en-a0-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ორი წიგნი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: У меня две книги.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: У меня две книги."
          },
          "sentence": "I have two book. → ____",
          "answer": "I have two books.",
          "options": [
            "I have two books.",
            "I have two bookes.",
            "I have two book."
          ]
        },
        {
          "id": "grammar-en-a0-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: იქ სამი ყუთია.",
            "en": "Complete a different part of the sentence. Intended meaning: Там три коробки.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Там три коробки."
          },
          "sentence": "There ____ three boxes.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: იქ სამი ყუთია.",
            "en": "Choose the complete sentence expressing: Там три коробки.",
            "ru": "Выберите полное предложение со значением: Там три коробки."
          },
          "sentence": "____",
          "answer": "There are three boxes.",
          "options": [
            "There are three boxes.",
            "There are three box.",
            "There are three boxs."
          ]
        },
        {
          "id": "grammar-en-a0-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: იქ სამი ყუთია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Там три коробки.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Там три коробки."
          },
          "sentence": "There are three box. → ____",
          "answer": "There are three boxes.",
          "options": [
            "There are three boxes.",
            "There are three boxs.",
            "There are three box."
          ]
        },
        {
          "id": "grammar-en-a0-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ბავშვები აქ არიან.",
            "en": "Complete a different part of the sentence. Intended meaning: Дети здесь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Дети здесь."
          },
          "sentence": "The children ____ here.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ბავშვები აქ არიან.",
            "en": "Choose the complete sentence expressing: Дети здесь.",
            "ru": "Выберите полное предложение со значением: Дети здесь."
          },
          "sentence": "____",
          "answer": "The children are here.",
          "options": [
            "The children are here.",
            "The child are here.",
            "The childs are here."
          ]
        },
        {
          "id": "grammar-en-a0-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ბავშვები აქ არიან.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Дети здесь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Дети здесь."
          },
          "sentence": "The child are here. → ____",
          "answer": "The children are here.",
          "options": [
            "The children are here.",
            "The childs are here.",
            "The child are here."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-5",
      "level": "A0",
      "title": {
        "ka": "კუთვნილება",
        "en": "My, your, his and her",
        "ru": "Притяжательные слова"
      },
      "explanation": {
        "ka": "my, your, his, her, its, our, their დგას არსებითი სახელის წინ. his/her მფლობელის მიხედვით შეარჩიე და არა ნივთის სქესით. my book სახელთანაა, mine კი მის გარეშე: This book is mine. his ორივე პოზიციაში ერთნაირია. its კუთვნილებაა, it’s კი it is/it has-ის შემოკლებაა; აპოსტროფი კუთვნილ its-ში არ დაწერო.",
        "en": "My, your, his, her, its, our and their come before nouns. Choose his/her by the owner, not by the object. My book uses a noun; mine replaces the whole phrase: This book is mine. His keeps the same form in both positions. Its is possessive, but it’s contracts it is/it has; possessive its has no apostrophe.",
        "ru": "My, your, his, her, its, our, their стоят перед существительным. His/her выбирают по владельцу, а не по предмету. My book содержит существительное; mine заменяет всё сочетание: This book is mine. His одинаково в обеих позициях. Its — притяжательная форма, it’s — сокращение it is/it has; у its нет апострофа."
      },
      "rules": [
        {
          "form": "my + noun",
          "detail": {
            "ka": "my, your, his, her, its, our, their დგას არსებითი სახელის წინ. შეადარე მაგალითს: My name is Ana. — მე ანა მქვია.",
            "en": "My, your, his, her, its, our and their come before nouns. Compare the example: My name is Ana. — My name is Ana.",
            "ru": "My, your, his, her, its, our, their стоят перед существительным. Сравните с примером: My name is Ana. — Меня зовут Анна."
          }
        },
        {
          "form": "his book / her book",
          "detail": {
            "ka": "his/her მფლობელის მიხედვით შეარჩიე და არა ნივთის სქესით. შეადარე მაგალითს: This is her bag. — ეს მისი ჩანთაა.",
            "en": "Choose his/her by the owner, not by the object. Compare the example: This is her bag. — This is her bag.",
            "ru": "His/her выбирают по владельцу, а не по предмету. Сравните с примером: This is her bag. — Это её сумка."
          }
        },
        {
          "form": "our house / their house",
          "detail": {
            "ka": "my book სახელთანაა, mine კი მის გარეშე: This book is mine. შეადარე მაგალითს: Our house is small. — ჩვენი სახლი პატარაა.",
            "en": "My book uses a noun; mine replaces the whole phrase: This book is mine. Compare the example: Our house is small. — Our house is small.",
            "ru": "My book содержит существительное; mine заменяет всё сочетание: This book is mine. Сравните с примером: Our house is small. — Наш дом маленький."
          }
        }
      ],
      "examples": [
        {
          "en": "My name is Ana.",
          "ru": "Меня зовут Анна.",
          "ka": "მე ანა მქვია."
        },
        {
          "en": "This is her bag.",
          "ru": "Это её сумка.",
          "ka": "ეს მისი ჩანთაა."
        },
        {
          "en": "Our house is small.",
          "ru": "Наш дом маленький.",
          "ka": "ჩვენი სახლი პატარაა."
        }
      ],
      "pitfalls": {
        "ka": "my book სახელთანაა, mine კი მის გარეშე: This book is mine. his ორივე პოზიციაში ერთნაირია. its კუთვნილებაა, it’s კი it is/it has-ის შემოკლებაა; აპოსტროფი კუთვნილ its-ში არ დაწერო.",
        "en": "My book uses a noun; mine replaces the whole phrase: This book is mine. His keeps the same form in both positions. Its is possessive, but it’s contracts it is/it has; possessive its has no apostrophe.",
        "ru": "My book содержит существительное; mine заменяет всё сочетание: This book is mine. His одинаково в обеих позициях. Its — притяжательная форма, it’s — сокращение it is/it has; у its нет апострофа."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ანა მქვია.",
            "en": "Complete the sentence to express: Меня зовут Анна.",
            "ru": "Заполните предложение со значением: Меня зовут Анна."
          },
          "sentence": "____ name is Ana.",
          "answer": "My",
          "options": [
            "My",
            "I",
            "Me"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს მისი ჩანთაა.",
            "en": "Complete the sentence to express: Это её сумка.",
            "ru": "Заполните предложение со значением: Это её сумка."
          },
          "sentence": "This is ____ bag.",
          "answer": "her",
          "options": [
            "her",
            "she",
            "hers"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენი სახლი პატარაა.",
            "en": "Complete the sentence to express: Наш дом маленький.",
            "ru": "Заполните предложение со значением: Наш дом маленький."
          },
          "sentence": "____ house is small.",
          "answer": "Our",
          "options": [
            "Our",
            "We",
            "Us"
          ]
        },
        {
          "id": "grammar-en-a0-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ანა მქვია.",
            "en": "Complete a different part of the sentence. Intended meaning: Меня зовут Анна.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Меня зовут Анна."
          },
          "sentence": "My name ____ Ana.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ანა მქვია.",
            "en": "Choose the complete sentence expressing: Меня зовут Анна.",
            "ru": "Выберите полное предложение со значением: Меня зовут Анна."
          },
          "sentence": "____",
          "answer": "My name is Ana.",
          "options": [
            "My name is Ana.",
            "I name is Ana.",
            "Me name is Ana."
          ]
        },
        {
          "id": "grammar-en-a0-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ანა მქვია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Меня зовут Анна.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Меня зовут Анна."
          },
          "sentence": "I name is Ana. → ____",
          "answer": "My name is Ana.",
          "options": [
            "My name is Ana.",
            "Me name is Ana.",
            "I name is Ana."
          ]
        },
        {
          "id": "grammar-en-a0-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს მისი ჩანთაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Это её сумка.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это её сумка."
          },
          "sentence": "____ is her bag.",
          "answer": "This",
          "options": [
            "This",
            "These",
            "Those"
          ]
        },
        {
          "id": "grammar-en-a0-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს მისი ჩანთაა.",
            "en": "Choose the complete sentence expressing: Это её сумка.",
            "ru": "Выберите полное предложение со значением: Это её сумка."
          },
          "sentence": "____",
          "answer": "This is her bag.",
          "options": [
            "This is her bag.",
            "This is she bag.",
            "This is hers bag."
          ]
        },
        {
          "id": "grammar-en-a0-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს მისი ჩანთაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это её сумка.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это её сумка."
          },
          "sentence": "This is she bag. → ____",
          "answer": "This is her bag.",
          "options": [
            "This is her bag.",
            "This is hers bag.",
            "This is she bag."
          ]
        },
        {
          "id": "grammar-en-a0-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენი სახლი პატარაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Наш дом маленький.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Наш дом маленький."
          },
          "sentence": "Our house ____ small.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენი სახლი პატარაა.",
            "en": "Choose the complete sentence expressing: Наш дом маленький.",
            "ru": "Выберите полное предложение со значением: Наш дом маленький."
          },
          "sentence": "____",
          "answer": "Our house is small.",
          "options": [
            "Our house is small.",
            "We house is small.",
            "Us house is small."
          ]
        },
        {
          "id": "grammar-en-a0-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენი სახლი პატარაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Наш дом маленький.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Наш дом маленький."
          },
          "sentence": "We house is small. → ____",
          "answer": "Our house is small.",
          "options": [
            "Our house is small.",
            "Us house is small.",
            "We house is small."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-6",
      "level": "A0",
      "title": {
        "ka": "ეს და ის",
        "en": "This, that, these, those",
        "ru": "Этот, тот: this и that"
      },
      "explanation": {
        "ka": "this/that ერთ ნივთს ეხება, these/those — რამდენიმეს. this/these ახლოსაა, that/those — შორს. is/are რიცხვს შეუთანხმე. this book და these books სახელის წინაც გამოიყენება; This is mine მოდელში დამოუკიდებლად დგას. ეს სიტყვები არტიკლს ცვლის: this book და არა this a book. შორი მანძილი შეიძლება დროშიც აღინიშნოს: those days.",
        "en": "This/that refer to one thing; these/those refer to several. This/these are near, that/those are farther away. Match is/are to number. This book and these books place the word before a noun; This is mine uses it independently. These words replace the article: this book, not this a book. Distance can also concern time: those days.",
        "ru": "This/that обозначают один предмет, these/those — несколько. This/these указывают на близкое, that/those — на более далёкое. Согласуйте is/are с числом. В this book и these books указательное слово стоит перед существительным; в This is mine — самостоятельно. Оно заменяет артикль: this book, не this a book. Удалённость может относиться ко времени: those days."
      },
      "rules": [
        {
          "form": "this book / that book",
          "detail": {
            "ka": "this/that ერთ ნივთს ეხება, these/those — რამდენიმეს. შეადარე მაგალითს: This is my cup. — ეს ჩემი ჭიქაა.",
            "en": "This/that refer to one thing; these/those refer to several. Compare the example: This is my cup. — This is my cup.",
            "ru": "This/that обозначают один предмет, these/those — несколько. Сравните с примером: This is my cup. — Это моя чашка."
          }
        },
        {
          "form": "these books / those books",
          "detail": {
            "ka": "this/these ახლოსაა, that/those — შორს. შეადარე მაგალითს: These are my keys. — ეს ჩემი გასაღებებია.",
            "en": "This/these are near, that/those are farther away. Compare the example: These are my keys. — These are my keys.",
            "ru": "This/these указывают на близкое, that/those — на более далёкое. Сравните с примером: These are my keys. — Это мои ключи."
          }
        },
        {
          "form": "This is… / These are…",
          "detail": {
            "ka": "is/are რიცხვს შეუთანხმე. შეადარე მაგალითს: That is your bus. — ის შენი ავტობუსია.",
            "en": "Match is/are to number. Compare the example: That is your bus. — That is your bus.",
            "ru": "Согласуйте is/are с числом. Сравните с примером: That is your bus. — Вон твой автобус."
          }
        }
      ],
      "examples": [
        {
          "en": "This is my cup.",
          "ru": "Это моя чашка.",
          "ka": "ეს ჩემი ჭიქაა."
        },
        {
          "en": "These are my keys.",
          "ru": "Это мои ключи.",
          "ka": "ეს ჩემი გასაღებებია."
        },
        {
          "en": "That is your bus.",
          "ru": "Вон твой автобус.",
          "ka": "ის შენი ავტობუსია."
        }
      ],
      "pitfalls": {
        "ka": "this book და these books სახელის წინაც გამოიყენება; This is mine მოდელში დამოუკიდებლად დგას. ეს სიტყვები არტიკლს ცვლის: this book და არა this a book. შორი მანძილი შეიძლება დროშიც აღინიშნოს: those days.",
        "en": "This book and these books place the word before a noun; This is mine uses it independently. These words replace the article: this book, not this a book. Distance can also concern time: those days.",
        "ru": "В this book и these books указательное слово стоит перед существительным; в This is mine — самостоятельно. Оно заменяет артикль: this book, не this a book. Удалённость может относиться ко времени: those days."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი ჭიქაა.",
            "en": "Complete the sentence to express: Это моя чашка.",
            "ru": "Заполните предложение со значением: Это моя чашка."
          },
          "sentence": "____ is my cup.",
          "answer": "This",
          "options": [
            "This",
            "These",
            "Those"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი გასაღებებია.",
            "en": "Complete the sentence to express: Это мои ключи.",
            "ru": "Заполните предложение со значением: Это мои ключи."
          },
          "sentence": "____ are my keys.",
          "answer": "These",
          "options": [
            "These",
            "This",
            "That"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის შენი ავტობუსია.",
            "en": "Complete the sentence to express: Вон твой автобус.",
            "ru": "Заполните предложение со значением: Вон твой автобус."
          },
          "sentence": "____ is your bus.",
          "answer": "That",
          "options": [
            "That",
            "Those",
            "These"
          ]
        },
        {
          "id": "grammar-en-a0-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი ჭიქაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Это моя чашка.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это моя чашка."
          },
          "sentence": "This is ____ cup.",
          "answer": "my",
          "options": [
            "my",
            "me",
            "I"
          ]
        },
        {
          "id": "grammar-en-a0-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი ჭიქაა.",
            "en": "Choose the complete sentence expressing: Это моя чашка.",
            "ru": "Выберите полное предложение со значением: Это моя чашка."
          },
          "sentence": "____",
          "answer": "This is my cup.",
          "options": [
            "This is my cup.",
            "These is my cup.",
            "Those is my cup."
          ]
        },
        {
          "id": "grammar-en-a0-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი ჭიქაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это моя чашка.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это моя чашка."
          },
          "sentence": "These is my cup. → ____",
          "answer": "This is my cup.",
          "options": [
            "This is my cup.",
            "Those is my cup.",
            "These is my cup."
          ]
        },
        {
          "id": "grammar-en-a0-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი გასაღებებია.",
            "en": "Complete a different part of the sentence. Intended meaning: Это мои ключи.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это мои ключи."
          },
          "sentence": "These ____ my keys.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი გასაღებებია.",
            "en": "Choose the complete sentence expressing: Это мои ключи.",
            "ru": "Выберите полное предложение со значением: Это мои ключи."
          },
          "sentence": "____",
          "answer": "These are my keys.",
          "options": [
            "These are my keys.",
            "This are my keys.",
            "That are my keys."
          ]
        },
        {
          "id": "grammar-en-a0-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი გასაღებებია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это мои ключи.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это мои ключи."
          },
          "sentence": "This are my keys. → ____",
          "answer": "These are my keys.",
          "options": [
            "These are my keys.",
            "That are my keys.",
            "This are my keys."
          ]
        },
        {
          "id": "grammar-en-a0-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის შენი ავტობუსია.",
            "en": "Complete a different part of the sentence. Intended meaning: Вон твой автобус.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вон твой автобус."
          },
          "sentence": "That ____ your bus.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის შენი ავტობუსია.",
            "en": "Choose the complete sentence expressing: Вон твой автобус.",
            "ru": "Выберите полное предложение со значением: Вон твой автобус."
          },
          "sentence": "____",
          "answer": "That is your bus.",
          "options": [
            "That is your bus.",
            "Those is your bus.",
            "These is your bus."
          ]
        },
        {
          "id": "grammar-en-a0-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის შენი ავტობუსია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вон твой автобус.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вон твой автобус."
          },
          "sentence": "Those is your bus. → ____",
          "answer": "That is your bus.",
          "options": [
            "That is your bus.",
            "These is your bus.",
            "Those is your bus."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-7",
      "level": "A0",
      "title": {
        "ka": "სიტყვების რიგი",
        "en": "Basic word order",
        "ru": "Основной порядок слов"
      },
      "explanation": {
        "ka": "მარტივი წინადადების ძირითადი რიგია ქვემდებარე + ზმნა + დამატება. ზედსართავი, როგორც წესი, სახელის წინ დგას და არ მრავლდება. ინგლისურში სიტყვების თავისუფლად გადანაცვლებამ აზრი შეიძლება შეცვალოს: The dog sees Ana და Ana sees the dog განსხვავდება. ადგილისა და დროის დამატება ხშირად ბოლოშია. ზედსართავს სახელთან -s არ გადაეცემა.",
        "en": "The basic order is subject + verb + object. An adjective usually comes before its noun and does not take a plural ending. Moving words freely can change English meaning: The dog sees Ana and Ana sees the dog describe different roles. Place and time phrases often follow the object. An adjective does not inherit the noun’s plural -s.",
        "ru": "Основной порядок: подлежащее + глагол + дополнение. Прилагательное обычно стоит перед существительным и не получает окончания множественного числа. Свободная перестановка может изменить смысл: The dog sees Ana и Ana sees the dog распределяют роли по-разному. Место и время часто стоят после дополнения. Прилагательное не получает множественное -s существительного."
      },
      "rules": [
        {
          "form": "I + like + tea.",
          "detail": {
            "ka": "მარტივი წინადადების ძირითადი რიგია ქვემდებარე + ზმნა + დამატება. შეადარე მაგალითს: I like tea. — მე ჩაი მიყვარს.",
            "en": "The basic order is subject + verb + object. Compare the example: I like tea. — I like tea.",
            "ru": "Основной порядок: подлежащее + глагол + дополнение. Сравните с примером: I like tea. — Я люблю чай."
          }
        },
        {
          "form": "a red bag",
          "detail": {
            "ka": "ზედსართავი, როგორც წესი, სახელის წინ დგას და არ მრავლდება. შეადარე მაგალითს: It is a red bag. — ეს წითელი ჩანთაა.",
            "en": "An adjective usually comes before its noun and does not take a plural ending. Compare the example: It is a red bag. — It is a red bag.",
            "ru": "Прилагательное обычно стоит перед существительным и не получает окончания множественного числа. Сравните с примером: It is a red bag. — Это красная сумка."
          }
        },
        {
          "form": "two red bags",
          "detail": {
            "ka": "ინგლისურში სიტყვების თავისუფლად გადანაცვლებამ აზრი შეიძლება შეცვალოს: The dog sees Ana და Ana sees the dog განსხვავდება. შეადარე მაგალითს: We have small bags. — ჩვენ პატარა ჩანთები გვაქვს.",
            "en": "Moving words freely can change English meaning: The dog sees Ana and Ana sees the dog describe different roles. Compare the example: We have small bags. — We have small bags.",
            "ru": "Свободная перестановка может изменить смысл: The dog sees Ana и Ana sees the dog распределяют роли по-разному. Сравните с примером: We have small bags. — У нас маленькие сумки."
          }
        }
      ],
      "examples": [
        {
          "en": "I like tea.",
          "ru": "Я люблю чай.",
          "ka": "მე ჩაი მიყვარს."
        },
        {
          "en": "It is a red bag.",
          "ru": "Это красная сумка.",
          "ka": "ეს წითელი ჩანთაა."
        },
        {
          "en": "We have small bags.",
          "ru": "У нас маленькие сумки.",
          "ka": "ჩვენ პატარა ჩანთები გვაქვს."
        }
      ],
      "pitfalls": {
        "ka": "ინგლისურში სიტყვების თავისუფლად გადანაცვლებამ აზრი შეიძლება შეცვალოს: The dog sees Ana და Ana sees the dog განსხვავდება. ადგილისა და დროის დამატება ხშირად ბოლოშია. ზედსართავს სახელთან -s არ გადაეცემა.",
        "en": "Moving words freely can change English meaning: The dog sees Ana and Ana sees the dog describe different roles. Place and time phrases often follow the object. An adjective does not inherit the noun’s plural -s.",
        "ru": "Свободная перестановка может изменить смысл: The dog sees Ana и Ana sees the dog распределяют роли по-разному. Место и время часто стоят после дополнения. Прилагательное не получает множественное -s существительного."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ჩაი მიყვარს.",
            "en": "Complete the sentence to express: Я люблю чай.",
            "ru": "Заполните предложение со значением: Я люблю чай."
          },
          "sentence": "I ____ tea.",
          "answer": "like",
          "options": [
            "like",
            "likes",
            "liking"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს წითელი ჩანთაა.",
            "en": "Complete the sentence to express: Это красная сумка.",
            "ru": "Заполните предложение со значением: Это красная сумка."
          },
          "sentence": "It is a ____ bag.",
          "answer": "red",
          "options": [
            "red",
            "reds",
            "redly"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ პატარა ჩანთები გვაქვს.",
            "en": "Complete the sentence to express: У нас маленькие сумки.",
            "ru": "Заполните предложение со значением: У нас маленькие сумки."
          },
          "sentence": "We have ____ bags.",
          "answer": "small",
          "options": [
            "small",
            "smalls",
            "smallly"
          ]
        },
        {
          "id": "grammar-en-a0-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ჩაი მიყვარს.",
            "en": "Complete a different part of the sentence. Intended meaning: Я люблю чай.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я люблю чай."
          },
          "sentence": "____ like tea.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a0-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ჩაი მიყვარს.",
            "en": "Choose the complete sentence expressing: Я люблю чай.",
            "ru": "Выберите полное предложение со значением: Я люблю чай."
          },
          "sentence": "____",
          "answer": "I like tea.",
          "options": [
            "I like tea.",
            "I likes tea.",
            "I liking tea."
          ]
        },
        {
          "id": "grammar-en-a0-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ჩაი მიყვარს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я люблю чай.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я люблю чай."
          },
          "sentence": "I likes tea. → ____",
          "answer": "I like tea.",
          "options": [
            "I like tea.",
            "I liking tea.",
            "I likes tea."
          ]
        },
        {
          "id": "grammar-en-a0-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს წითელი ჩანთაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Это красная сумка.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это красная сумка."
          },
          "sentence": "It ____ a red bag.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a0-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს წითელი ჩანთაა.",
            "en": "Choose the complete sentence expressing: Это красная сумка.",
            "ru": "Выберите полное предложение со значением: Это красная сумка."
          },
          "sentence": "____",
          "answer": "It is a red bag.",
          "options": [
            "It is a red bag.",
            "It is a reds bag.",
            "It is a redly bag."
          ]
        },
        {
          "id": "grammar-en-a0-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს წითელი ჩანთაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это красная сумка.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это красная сумка."
          },
          "sentence": "It is a reds bag. → ____",
          "answer": "It is a red bag.",
          "options": [
            "It is a red bag.",
            "It is a redly bag.",
            "It is a reds bag."
          ]
        },
        {
          "id": "grammar-en-a0-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ პატარა ჩანთები გვაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: У нас маленькие сумки.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: У нас маленькие сумки."
          },
          "sentence": "____ have small bags.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a0-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ პატარა ჩანთები გვაქვს.",
            "en": "Choose the complete sentence expressing: У нас маленькие сумки.",
            "ru": "Выберите полное предложение со значением: У нас маленькие сумки."
          },
          "sentence": "____",
          "answer": "We have small bags.",
          "options": [
            "We have small bags.",
            "We have smalls bags.",
            "We have smallly bags."
          ]
        },
        {
          "id": "grammar-en-a0-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ პატარა ჩანთები გვაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: У нас маленькие сумки.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: У нас маленькие сумки."
          },
          "sentence": "We have smalls bags. → ____",
          "answer": "We have small bags.",
          "options": [
            "We have small bags.",
            "We have smallly bags.",
            "We have smalls bags."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a0-8",
      "level": "A0",
      "title": {
        "ka": "მარტივი მითითებები",
        "en": "Simple imperatives",
        "ru": "Простые повелительные формы"
      },
      "explanation": {
        "ka": "მითითებაში გამოიყენე ზმნის საწყისი ფორმა ქვემდებარის გარეშე. უარყოფაა do not/don’t + ზმნა. please თხოვნას უფრო თავაზიანს ხდის. მოსაუბრე პირდაპირ მსმენელს მიმართავს, ამიტომ you ჩვეულებრივ გამოტოვებულია. Don’t არის do not-ის შემოკლება. be-სთანაც იგივე უარყოფითი მოდელია: Don’t be late; არ გამოიყენო isn’t late როგორც ბრძანება.",
        "en": "Use the base verb without a subject for instructions. Negatives use do not/don’t + verb. Please makes a request more polite. The speaker directly addresses the listener, so you is normally omitted. Don’t contracts do not. Even be takes this negative instruction pattern: Don’t be late; isn’t late is not an imperative.",
        "ru": "В инструкции используйте начальную форму глагола без подлежащего. Отрицание: do not/don’t + глагол. Please делает просьбу вежливее. Обращение направлено слушателю, поэтому you обычно опускается. Don’t сокращает do not. Даже с be действует эта отрицательная модель: Don’t be late; isn’t late не является приказом."
      },
      "rules": [
        {
          "form": "Open the door.",
          "detail": {
            "ka": "მითითებაში გამოიყენე ზმნის საწყისი ფორმა ქვემდებარის გარეშე. შეადარე მაგალითს: Open the door, please. — გააღე კარი, გთხოვ.",
            "en": "Use the base verb without a subject for instructions. Compare the example: Open the door, please. — Open the door, please.",
            "ru": "В инструкции используйте начальную форму глагола без подлежащего. Сравните с примером: Open the door, please. — Откройте дверь, пожалуйста."
          }
        },
        {
          "form": "Please sit down.",
          "detail": {
            "ka": "უარყოფაა do not/don’t + ზმნა. შეადარე მაგალითს: Do not run here. — აქ ნუ ირბენ.",
            "en": "Negatives use do not/don’t + verb. Compare the example: Do not run here. — Do not run here.",
            "ru": "Отрицание: do not/don’t + глагол. Сравните с примером: Do not run here. — Не бегайте здесь."
          }
        },
        {
          "form": "Do not run.",
          "detail": {
            "ka": "please თხოვნას უფრო თავაზიანს ხდის. შეადარე მაგალითს: Please sit down. — გთხოვ, დაჯექი.",
            "en": "Please makes a request more polite. Compare the example: Please sit down. — Please sit down.",
            "ru": "Please делает просьбу вежливее. Сравните с примером: Please sit down. — Пожалуйста, садитесь."
          }
        }
      ],
      "examples": [
        {
          "en": "Open the door, please.",
          "ru": "Откройте дверь, пожалуйста.",
          "ka": "გააღე კარი, გთხოვ."
        },
        {
          "en": "Do not run here.",
          "ru": "Не бегайте здесь.",
          "ka": "აქ ნუ ირბენ."
        },
        {
          "en": "Please sit down.",
          "ru": "Пожалуйста, садитесь.",
          "ka": "გთხოვ, დაჯექი."
        }
      ],
      "pitfalls": {
        "ka": "მოსაუბრე პირდაპირ მსმენელს მიმართავს, ამიტომ you ჩვეულებრივ გამოტოვებულია. Don’t არის do not-ის შემოკლება. be-სთანაც იგივე უარყოფითი მოდელია: Don’t be late; არ გამოიყენო isn’t late როგორც ბრძანება.",
        "en": "The speaker directly addresses the listener, so you is normally omitted. Don’t contracts do not. Even be takes this negative instruction pattern: Don’t be late; isn’t late is not an imperative.",
        "ru": "Обращение направлено слушателю, поэтому you обычно опускается. Don’t сокращает do not. Даже с be действует эта отрицательная модель: Don’t be late; isn’t late не является приказом."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გააღე კარი, გთხოვ.",
            "en": "Complete the sentence to express: Откройте дверь, пожалуйста.",
            "ru": "Заполните предложение со значением: Откройте дверь, пожалуйста."
          },
          "sentence": "____ the door, please.",
          "answer": "Open",
          "options": [
            "Open",
            "Opens",
            "Opening"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ ნუ ირბენ.",
            "en": "Complete the sentence to express: Не бегайте здесь.",
            "ru": "Заполните предложение со значением: Не бегайте здесь."
          },
          "sentence": "____ not run here.",
          "answer": "Do",
          "options": [
            "Do",
            "Does",
            "Are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გთხოვ, დაჯექი.",
            "en": "Complete the sentence to express: Пожалуйста, садитесь.",
            "ru": "Заполните предложение со значением: Пожалуйста, садитесь."
          },
          "sentence": "Please ____ down.",
          "answer": "sit",
          "options": [
            "sit",
            "sits",
            "sitting"
          ]
        },
        {
          "id": "grammar-en-a0-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გააღე კარი, გთხოვ.",
            "en": "Complete a different part of the sentence. Intended meaning: Откройте дверь, пожалуйста.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Откройте дверь, пожалуйста."
          },
          "sentence": "Open ____ door, please.",
          "answer": "the",
          "options": [
            "the",
            "a",
            "an"
          ]
        },
        {
          "id": "grammar-en-a0-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გააღე კარი, გთხოვ.",
            "en": "Choose the complete sentence expressing: Откройте дверь, пожалуйста.",
            "ru": "Выберите полное предложение со значением: Откройте дверь, пожалуйста."
          },
          "sentence": "____",
          "answer": "Open the door, please.",
          "options": [
            "Open the door, please.",
            "Opens the door, please.",
            "Opening the door, please."
          ]
        },
        {
          "id": "grammar-en-a0-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გააღე კარი, გთხოვ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Откройте дверь, пожалуйста.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Откройте дверь, пожалуйста."
          },
          "sentence": "Opens the door, please. → ____",
          "answer": "Open the door, please.",
          "options": [
            "Open the door, please.",
            "Opening the door, please.",
            "Opens the door, please."
          ]
        },
        {
          "id": "grammar-en-a0-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ ნუ ირბენ.",
            "en": "Complete a different part of the sentence. Intended meaning: Не бегайте здесь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Не бегайте здесь."
          },
          "sentence": "Do ____ run here.",
          "answer": "not",
          "options": [
            "not",
            "no",
            "never"
          ]
        },
        {
          "id": "grammar-en-a0-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ ნუ ირბენ.",
            "en": "Choose the complete sentence expressing: Не бегайте здесь.",
            "ru": "Выберите полное предложение со значением: Не бегайте здесь."
          },
          "sentence": "____",
          "answer": "Do not run here.",
          "options": [
            "Do not run here.",
            "Does not run here.",
            "Are not run here."
          ]
        },
        {
          "id": "grammar-en-a0-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ ნუ ირბენ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Не бегайте здесь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Не бегайте здесь."
          },
          "sentence": "Does not run here. → ____",
          "answer": "Do not run here.",
          "options": [
            "Do not run here.",
            "Are not run here.",
            "Does not run here."
          ]
        },
        {
          "id": "grammar-en-a0-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გთხოვ, დაჯექი.",
            "en": "Complete a different part of the sentence. Intended meaning: Пожалуйста, садитесь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Пожалуйста, садитесь."
          },
          "sentence": "____ sit down.",
          "answer": "Please",
          "options": [
            "Please",
            "Pleases",
            "Pleaseing"
          ]
        },
        {
          "id": "grammar-en-a0-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გთხოვ, დაჯექი.",
            "en": "Choose the complete sentence expressing: Пожалуйста, садитесь.",
            "ru": "Выберите полное предложение со значением: Пожалуйста, садитесь."
          },
          "sentence": "____",
          "answer": "Please sit down.",
          "options": [
            "Please sit down.",
            "Please sits down.",
            "Please sitting down."
          ]
        },
        {
          "id": "grammar-en-a0-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გთხოვ, დაჯექი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Пожалуйста, садитесь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Пожалуйста, садитесь."
          },
          "sentence": "Please sits down. → ____",
          "answer": "Please sit down.",
          "options": [
            "Please sit down.",
            "Please sitting down.",
            "Please sits down."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-1",
      "level": "A1",
      "title": {
        "ka": "აწმყო მარტივი",
        "en": "Present simple",
        "ru": "Present Simple"
      },
      "explanation": {
        "ka": "Present Simple აღწერს ჩვევას ან ზოგად ფაქტს. he/she/it-თან ზმნას ხშირად -s ემატება; do/does-ის შემდეგ ზმნა საწყის ფორმაშია. ჩვევას ხშირად ახლავს every day ან usually. -s-ის მართლწერა იცვლება: watch→watches, study→studies. კითხვაში Does she works? არასწორია: -s უკვე დამხმარე does-შია გამოხატული.",
        "en": "Present simple describes habits and general facts. Add -s with he/she/it; after do/does use the base verb. Habit markers include every day and usually. The -s spelling varies: watch→watches, study→studies. Does she works? is incorrect because the third-person marking is already carried by does.",
        "ru": "Present Simple описывает привычки и общие факты. С he/she/it добавляется -s; после do/does нужен глагол без этого окончания. Признаки привычки: every day, usually. Написание -s меняется: watch→watches, study→studies. Does she works? неверно: показатель третьего лица уже находится в does."
      },
      "rules": [
        {
          "form": "She works.",
          "detail": {
            "ka": "Present Simple აღწერს ჩვევას ან ზოგად ფაქტს. შეადარე მაგალითს: She works in a cafe. — ის კაფეში მუშაობს.",
            "en": "Present simple describes habits and general facts. Compare the example: She works in a cafe. — She works in a cafe.",
            "ru": "Present Simple описывает привычки и общие факты. Сравните с примером: She works in a cafe. — Она работает в кафе."
          }
        },
        {
          "form": "They do not work.",
          "detail": {
            "ka": "he/she/it-თან ზმნას ხშირად -s ემატება; do/does-ის შემდეგ ზმნა საწყის ფორმაშია. შეადარე მაგალითს: Do you like coffee? — ყავა გიყვარს?",
            "en": "Add -s with he/she/it; after do/does use the base verb. Compare the example: Do you like coffee? — Do you like coffee?",
            "ru": "С he/she/it добавляется -s; после do/does нужен глагол без этого окончания. Сравните с примером: Do you like coffee? — Вы любите кофе?"
          }
        },
        {
          "form": "Does she work?",
          "detail": {
            "ka": "ჩვევას ხშირად ახლავს every day ან usually. შეადარე მაგალითს: He does not eat meat. — ის ხორცს არ ჭამს.",
            "en": "Habit markers include every day and usually. Compare the example: He does not eat meat. — He does not eat meat.",
            "ru": "Признаки привычки: every day, usually. Сравните с примером: He does not eat meat. — Он не ест мясо."
          }
        }
      ],
      "examples": [
        {
          "en": "She works in a cafe.",
          "ru": "Она работает в кафе.",
          "ka": "ის კაფეში მუშაობს."
        },
        {
          "en": "Do you like coffee?",
          "ru": "Вы любите кофе?",
          "ka": "ყავა გიყვარს?"
        },
        {
          "en": "He does not eat meat.",
          "ru": "Он не ест мясо.",
          "ka": "ის ხორცს არ ჭამს."
        }
      ],
      "pitfalls": {
        "ka": "ჩვევას ხშირად ახლავს every day ან usually. -s-ის მართლწერა იცვლება: watch→watches, study→studies. კითხვაში Does she works? არასწორია: -s უკვე დამხმარე does-შია გამოხატული.",
        "en": "Habit markers include every day and usually. The -s spelling varies: watch→watches, study→studies. Does she works? is incorrect because the third-person marking is already carried by does.",
        "ru": "Признаки привычки: every day, usually. Написание -s меняется: watch→watches, study→studies. Does she works? неверно: показатель третьего лица уже находится в does."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის კაფეში მუშაობს.",
            "en": "Complete the sentence to express: Она работает в кафе.",
            "ru": "Заполните предложение со значением: Она работает в кафе."
          },
          "sentence": "She ____ in a cafe.",
          "answer": "works",
          "options": [
            "works",
            "work",
            "working"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ყავა გიყვარს?",
            "en": "Complete the sentence to express: Вы любите кофе?",
            "ru": "Заполните предложение со значением: Вы любите кофе?"
          },
          "sentence": "____ you like coffee?",
          "answer": "Do",
          "options": [
            "Do",
            "Does",
            "Are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ხორცს არ ჭამს.",
            "en": "Complete the sentence to express: Он не ест мясо.",
            "ru": "Заполните предложение со значением: Он не ест мясо."
          },
          "sentence": "He does not ____ meat.",
          "answer": "eat",
          "options": [
            "eat",
            "eats",
            "eating"
          ]
        },
        {
          "id": "grammar-en-a1-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის კაფეში მუშაობს.",
            "en": "Complete a different part of the sentence. Intended meaning: Она работает в кафе.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она работает в кафе."
          },
          "sentence": "____ works in a cafe.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a1-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის კაფეში მუშაობს.",
            "en": "Choose the complete sentence expressing: Она работает в кафе.",
            "ru": "Выберите полное предложение со значением: Она работает в кафе."
          },
          "sentence": "____",
          "answer": "She works in a cafe.",
          "options": [
            "She works in a cafe.",
            "She work in a cafe.",
            "She working in a cafe."
          ]
        },
        {
          "id": "grammar-en-a1-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის კაფეში მუშაობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она работает в кафе.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она работает в кафе."
          },
          "sentence": "She work in a cafe. → ____",
          "answer": "She works in a cafe.",
          "options": [
            "She works in a cafe.",
            "She working in a cafe.",
            "She work in a cafe."
          ]
        },
        {
          "id": "grammar-en-a1-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ყავა გიყვარს?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы любите кофе?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы любите кофе?"
          },
          "sentence": "Do you ____ coffee?",
          "answer": "like",
          "options": [
            "like",
            "likes",
            "likeing"
          ]
        },
        {
          "id": "grammar-en-a1-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ყავა გიყვარს?",
            "en": "Choose the complete sentence expressing: Вы любите кофе?",
            "ru": "Выберите полное предложение со значением: Вы любите кофе?"
          },
          "sentence": "____",
          "answer": "Do you like coffee?",
          "options": [
            "Do you like coffee?",
            "Does you like coffee?",
            "Are you like coffee?"
          ]
        },
        {
          "id": "grammar-en-a1-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ყავა გიყვარს?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы любите кофе?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы любите кофе?"
          },
          "sentence": "Does you like coffee? → ____",
          "answer": "Do you like coffee?",
          "options": [
            "Do you like coffee?",
            "Are you like coffee?",
            "Does you like coffee?"
          ]
        },
        {
          "id": "grammar-en-a1-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ხორცს არ ჭამს.",
            "en": "Complete a different part of the sentence. Intended meaning: Он не ест мясо.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он не ест мясо."
          },
          "sentence": "____ does not eat meat.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-a1-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ხორცს არ ჭამს.",
            "en": "Choose the complete sentence expressing: Он не ест мясо.",
            "ru": "Выберите полное предложение со значением: Он не ест мясо."
          },
          "sentence": "____",
          "answer": "He does not eat meat.",
          "options": [
            "He does not eat meat.",
            "He does not eats meat.",
            "He does not eating meat."
          ]
        },
        {
          "id": "grammar-en-a1-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ხორცს არ ჭამს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он не ест мясо.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он не ест мясо."
          },
          "sentence": "He does not eats meat. → ____",
          "answer": "He does not eat meat.",
          "options": [
            "He does not eat meat.",
            "He does not eating meat.",
            "He does not eats meat."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-2",
      "level": "A1",
      "title": {
        "ka": "აწმყო განგრძობითი",
        "en": "Present continuous",
        "ru": "Present Continuous"
      },
      "explanation": {
        "ka": "ამჟამად მიმდინარე მოქმედებისთვის გამოიყენე am/is/are + -ing. არ გამოტოვო be. ზოგიერთ მდგომარეობის ზმნასთან, მაგალითად know, ჩვეულებრივ მარტივი დროა. ზოგი -ing ფორმა ბოლო e-ს კარგავს: make→making; run→running თანხმოვანს აორმაგებს. be დროისა და პირის მატარებელია. I knowing არასწორია; ცოდნისთვის ჩვეულებრივ I know თქვი.",
        "en": "For an action happening now, use am/is/are + -ing. Do not omit be. State verbs such as know normally use the simple form. Some -ing forms drop final e: make→making; run→running doubles the consonant. Be carries tense and agreement. I knowing is incorrect; knowledge normally uses I know.",
        "ru": "Для действия прямо сейчас используйте am/is/are + -ing. Не пропускайте be. Глаголы состояния, например know, обычно употребляются в простой форме. В некоторых формах конечное e исчезает: make→making; run→running удваивает согласную. Время и согласование выражает be. I knowing неверно; о знании обычно говорят I know."
      },
      "rules": [
        {
          "form": "I am working.",
          "detail": {
            "ka": "ამჟამად მიმდინარე მოქმედებისთვის გამოიყენე am/is/are + -ing. შეადარე მაგალითს: I am reading now. — ახლა ვკითხულობ.",
            "en": "For an action happening now, use am/is/are + -ing. Compare the example: I am reading now. — I am reading now.",
            "ru": "Для действия прямо сейчас используйте am/is/are + -ing. Сравните с примером: I am reading now. — Я сейчас читаю."
          }
        },
        {
          "form": "She is not working.",
          "detail": {
            "ka": "არ გამოტოვო be. შეადარე მაგალითს: She is cooking dinner. — ის სადილს ამზადებს.",
            "en": "Do not omit be. Compare the example: She is cooking dinner. — She is cooking dinner.",
            "ru": "Не пропускайте be. Сравните с примером: She is cooking dinner. — Она готовит ужин."
          }
        },
        {
          "form": "Are they working?",
          "detail": {
            "ka": "ზოგიერთ მდგომარეობის ზმნასთან, მაგალითად know, ჩვეულებრივ მარტივი დროა. შეადარე მაგალითს: Are they waiting? — ისინი ელოდებიან?",
            "en": "State verbs such as know normally use the simple form. Compare the example: Are they waiting? — Are they waiting?",
            "ru": "Глаголы состояния, например know, обычно употребляются в простой форме. Сравните с примером: Are they waiting? — Они ждут?"
          }
        }
      ],
      "examples": [
        {
          "en": "I am reading now.",
          "ru": "Я сейчас читаю.",
          "ka": "ახლა ვკითხულობ."
        },
        {
          "en": "She is cooking dinner.",
          "ru": "Она готовит ужин.",
          "ka": "ის სადილს ამზადებს."
        },
        {
          "en": "Are they waiting?",
          "ru": "Они ждут?",
          "ka": "ისინი ელოდებიან?"
        }
      ],
      "pitfalls": {
        "ka": "ზოგი -ing ფორმა ბოლო e-ს კარგავს: make→making; run→running თანხმოვანს აორმაგებს. be დროისა და პირის მატარებელია. I knowing არასწორია; ცოდნისთვის ჩვეულებრივ I know თქვი.",
        "en": "Some -ing forms drop final e: make→making; run→running doubles the consonant. Be carries tense and agreement. I knowing is incorrect; knowledge normally uses I know.",
        "ru": "В некоторых формах конечное e исчезает: make→making; run→running удваивает согласную. Время и согласование выражает be. I knowing неверно; о знании обычно говорят I know."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახლა ვკითხულობ.",
            "en": "Complete the sentence to express: Я сейчас читаю.",
            "ru": "Заполните предложение со значением: Я сейчас читаю."
          },
          "sentence": "I ____ reading now.",
          "answer": "am",
          "options": [
            "am",
            "is",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის სადილს ამზადებს.",
            "en": "Complete the sentence to express: Она готовит ужин.",
            "ru": "Заполните предложение со значением: Она готовит ужин."
          },
          "sentence": "She is ____ dinner.",
          "answer": "cooking",
          "options": [
            "cooking",
            "cook",
            "cooks"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ისინი ელოდებიან?",
            "en": "Complete the sentence to express: Они ждут?",
            "ru": "Заполните предложение со значением: Они ждут?"
          },
          "sentence": "____ they waiting?",
          "answer": "Are",
          "options": [
            "Are",
            "Is",
            "Am"
          ]
        },
        {
          "id": "grammar-en-a1-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახლა ვკითხულობ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я сейчас читаю.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я сейчас читаю."
          },
          "sentence": "____ am reading now.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a1-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახლა ვკითხულობ.",
            "en": "Choose the complete sentence expressing: Я сейчас читаю.",
            "ru": "Выберите полное предложение со значением: Я сейчас читаю."
          },
          "sentence": "____",
          "answer": "I am reading now.",
          "options": [
            "I am reading now.",
            "I is reading now.",
            "I are reading now."
          ]
        },
        {
          "id": "grammar-en-a1-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახლა ვკითხულობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я сейчас читаю.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я сейчас читаю."
          },
          "sentence": "I is reading now. → ____",
          "answer": "I am reading now.",
          "options": [
            "I am reading now.",
            "I are reading now.",
            "I is reading now."
          ]
        },
        {
          "id": "grammar-en-a1-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის სადილს ამზადებს.",
            "en": "Complete a different part of the sentence. Intended meaning: Она готовит ужин.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она готовит ужин."
          },
          "sentence": "____ is cooking dinner.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a1-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის სადილს ამზადებს.",
            "en": "Choose the complete sentence expressing: Она готовит ужин.",
            "ru": "Выберите полное предложение со значением: Она готовит ужин."
          },
          "sentence": "____",
          "answer": "She is cooking dinner.",
          "options": [
            "She is cooking dinner.",
            "She is cook dinner.",
            "She is cooks dinner."
          ]
        },
        {
          "id": "grammar-en-a1-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის სადილს ამზადებს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она готовит ужин.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она готовит ужин."
          },
          "sentence": "She is cook dinner. → ____",
          "answer": "She is cooking dinner.",
          "options": [
            "She is cooking dinner.",
            "She is cooks dinner.",
            "She is cook dinner."
          ]
        },
        {
          "id": "grammar-en-a1-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ისინი ელოდებიან?",
            "en": "Complete a different part of the sentence. Intended meaning: Они ждут?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Они ждут?"
          },
          "sentence": "Are they ____?",
          "answer": "waiting",
          "options": [
            "waiting",
            "wait",
            "waitings"
          ]
        },
        {
          "id": "grammar-en-a1-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ისინი ელოდებიან?",
            "en": "Choose the complete sentence expressing: Они ждут?",
            "ru": "Выберите полное предложение со значением: Они ждут?"
          },
          "sentence": "____",
          "answer": "Are they waiting?",
          "options": [
            "Are they waiting?",
            "Is they waiting?",
            "Am they waiting?"
          ]
        },
        {
          "id": "grammar-en-a1-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ისინი ელოდებიან?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Они ждут?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Они ждут?"
          },
          "sentence": "Is they waiting? → ____",
          "answer": "Are they waiting?",
          "options": [
            "Are they waiting?",
            "Am they waiting?",
            "Is they waiting?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-3",
      "level": "A1",
      "title": {
        "ka": "არსებობა და ადგილი",
        "en": "There is and there are",
        "ru": "Оборот there is / there are"
      },
      "explanation": {
        "ka": "There is აღწერს ერთ ნივთს ან უთვლად რაოდენობას; there are — მრავლობითს. კითხვაში is/are წინ გადადის. there ამ მოდელში უბრალოდ „იქ“-ს არ ნიშნავს; ის არსებობის წინადადებას იწყებს. უკვე ცნობილ საგანზე თქვი The bank is nearby. There are a bank არასწორია, რადგან bank ერთობითშია.",
        "en": "There is introduces one thing or an uncountable amount; there are introduces plurals. In questions, is/are moves first. There does not simply mean a location here; it introduces existence. For an already identified object, use The bank is nearby. There are a bank is incorrect because bank is singular.",
        "ru": "There is вводит один предмет или неисчисляемое количество; there are — несколько предметов. В вопросе is/are ставится перед there. There здесь не просто указывает место, а вводит существование. Об уже известном объекте говорите The bank is nearby. There are a bank неверно, поскольку bank — единственное число."
      },
      "rules": [
        {
          "form": "There is a cafe.",
          "detail": {
            "ka": "There is აღწერს ერთ ნივთს ან უთვლად რაოდენობას; there are — მრავლობითს. შეადარე მაგალითს: There is a bank nearby. — ახლოს ბანკია.",
            "en": "There is introduces one thing or an uncountable amount; there are introduces plurals. Compare the example: There is a bank nearby. — There is a bank nearby.",
            "ru": "There is вводит один предмет или неисчисляемое количество; there are — несколько предметов. Сравните с примером: There is a bank nearby. — Рядом есть банк."
          }
        },
        {
          "form": "There are two cafes.",
          "detail": {
            "ka": "კითხვაში is/are წინ გადადის. შეადარე მაგალითს: There are two chairs. — იქ ორი სკამია.",
            "en": "In questions, is/are moves first. Compare the example: There are two chairs. — There are two chairs.",
            "ru": "В вопросе is/are ставится перед there. Сравните с примером: There are two chairs. — Там два стула."
          }
        },
        {
          "form": "Is there a cafe?",
          "detail": {
            "ka": "there ამ მოდელში უბრალოდ „იქ“-ს არ ნიშნავს; ის არსებობის წინადადებას იწყებს. შეადარე მაგალითს: Is there any water? — წყალი არის?",
            "en": "There does not simply mean a location here; it introduces existence. Compare the example: Is there any water? — Is there any water?",
            "ru": "There здесь не просто указывает место, а вводит существование. Сравните с примером: Is there any water? — Есть вода?"
          }
        }
      ],
      "examples": [
        {
          "en": "There is a bank nearby.",
          "ru": "Рядом есть банк.",
          "ka": "ახლოს ბანკია."
        },
        {
          "en": "There are two chairs.",
          "ru": "Там два стула.",
          "ka": "იქ ორი სკამია."
        },
        {
          "en": "Is there any water?",
          "ru": "Есть вода?",
          "ka": "წყალი არის?"
        }
      ],
      "pitfalls": {
        "ka": "there ამ მოდელში უბრალოდ „იქ“-ს არ ნიშნავს; ის არსებობის წინადადებას იწყებს. უკვე ცნობილ საგანზე თქვი The bank is nearby. There are a bank არასწორია, რადგან bank ერთობითშია.",
        "en": "There does not simply mean a location here; it introduces existence. For an already identified object, use The bank is nearby. There are a bank is incorrect because bank is singular.",
        "ru": "There здесь не просто указывает место, а вводит существование. Об уже известном объекте говорите The bank is nearby. There are a bank неверно, поскольку bank — единственное число."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახლოს ბანკია.",
            "en": "Complete the sentence to express: Рядом есть банк.",
            "ru": "Заполните предложение со значением: Рядом есть банк."
          },
          "sentence": "There ____ a bank nearby.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: იქ ორი სკამია.",
            "en": "Complete the sentence to express: Там два стула.",
            "ru": "Заполните предложение со значением: Там два стула."
          },
          "sentence": "There ____ two chairs.",
          "answer": "are",
          "options": [
            "are",
            "is",
            "am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წყალი არის?",
            "en": "Complete the sentence to express: Есть вода?",
            "ru": "Заполните предложение со значением: Есть вода?"
          },
          "sentence": "____ there any water?",
          "answer": "Is",
          "options": [
            "Is",
            "Are",
            "Do"
          ]
        },
        {
          "id": "grammar-en-a1-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახლოს ბანკია.",
            "en": "Complete a different part of the sentence. Intended meaning: Рядом есть банк.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Рядом есть банк."
          },
          "sentence": "There is ____ bank nearby.",
          "answer": "a",
          "options": [
            "a",
            "an",
            "the"
          ]
        },
        {
          "id": "grammar-en-a1-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახლოს ბანკია.",
            "en": "Choose the complete sentence expressing: Рядом есть банк.",
            "ru": "Выберите полное предложение со значением: Рядом есть банк."
          },
          "sentence": "____",
          "answer": "There is a bank nearby.",
          "options": [
            "There is a bank nearby.",
            "There are a bank nearby.",
            "There am a bank nearby."
          ]
        },
        {
          "id": "grammar-en-a1-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახლოს ბანკია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Рядом есть банк.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Рядом есть банк."
          },
          "sentence": "There are a bank nearby. → ____",
          "answer": "There is a bank nearby.",
          "options": [
            "There is a bank nearby.",
            "There am a bank nearby.",
            "There are a bank nearby."
          ]
        },
        {
          "id": "grammar-en-a1-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: იქ ორი სკამია.",
            "en": "Complete a different part of the sentence. Intended meaning: Там два стула.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Там два стула."
          },
          "sentence": "There are two ____.",
          "answer": "chairs",
          "options": [
            "chairs",
            "chair",
            "chairses"
          ]
        },
        {
          "id": "grammar-en-a1-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: იქ ორი სკამია.",
            "en": "Choose the complete sentence expressing: Там два стула.",
            "ru": "Выберите полное предложение со значением: Там два стула."
          },
          "sentence": "____",
          "answer": "There are two chairs.",
          "options": [
            "There are two chairs.",
            "There is two chairs.",
            "There am two chairs."
          ]
        },
        {
          "id": "grammar-en-a1-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: იქ ორი სკამია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Там два стула.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Там два стула."
          },
          "sentence": "There is two chairs. → ____",
          "answer": "There are two chairs.",
          "options": [
            "There are two chairs.",
            "There am two chairs.",
            "There is two chairs."
          ]
        },
        {
          "id": "grammar-en-a1-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წყალი არის?",
            "en": "Complete a different part of the sentence. Intended meaning: Есть вода?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Есть вода?"
          },
          "sentence": "Is there ____ water?",
          "answer": "any",
          "options": [
            "any",
            "some",
            "a"
          ]
        },
        {
          "id": "grammar-en-a1-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წყალი არის?",
            "en": "Choose the complete sentence expressing: Есть вода?",
            "ru": "Выберите полное предложение со значением: Есть вода?"
          },
          "sentence": "____",
          "answer": "Is there any water?",
          "options": [
            "Is there any water?",
            "Are there any water?",
            "Do there any water?"
          ]
        },
        {
          "id": "grammar-en-a1-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წყალი არის?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Есть вода?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Есть вода?"
          },
          "sentence": "Are there any water? → ____",
          "answer": "Is there any water?",
          "options": [
            "Is there any water?",
            "Do there any water?",
            "Are there any water?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-4",
      "level": "A1",
      "title": {
        "ka": "some, any და რაოდენობა",
        "en": "Some, any and quantities",
        "ru": "Some, any и количество"
      },
      "explanation": {
        "ka": "some ხშირად მტკიცებით წინადადებაშია, any — კითხვასა და უარყოფაში. many თვლად მრავლობითთანაა, much — უთვლადთან; შეთავაზებაში some ბუნებრივია. a few ნიშნავს რამდენიმე თვლად ნივთს, a little — მცირე უთვლად რაოდენობას. a lot of ორივესთან გამოიყენება. information და advice ინგლისურში ჩვეულებრივ უთვლადია: many informations არ გამოიყენო.",
        "en": "Some is common in affirmatives; any in questions and negatives. Many goes with countable plurals, much with uncountables; offers often use some. A few refers to several countable things; a little to a small uncountable amount. A lot of works with both. Information and advice are normally uncountable in English: avoid many informations.",
        "ru": "Some обычно встречается в утверждении, any — в вопросе и отрицании. Many относится к исчисляемым во множественном числе, much — к неисчисляемым; в предложении угощения часто используют some. A few относится к нескольким исчисляемым предметам, a little — к небольшому неисчисляемому количеству. A lot of подходит к обоим. Information и advice обычно неисчисляемые: many informations неверно."
      },
      "rules": [
        {
          "form": "some apples / some water",
          "detail": {
            "ka": "some ხშირად მტკიცებით წინადადებაშია, any — კითხვასა და უარყოფაში. შეადარე მაგალითს: I have some apples. — მე რამდენიმე ვაშლი მაქვს.",
            "en": "Some is common in affirmatives; any in questions and negatives. Compare the example: I have some apples. — I have some apples.",
            "ru": "Some обычно встречается в утверждении, any — в вопросе и отрицании. Сравните с примером: I have some apples. — У меня есть яблоки."
          }
        },
        {
          "form": "any apples / any water",
          "detail": {
            "ka": "many თვლად მრავლობითთანაა, much — უთვლადთან; შეთავაზებაში some ბუნებრივია. შეადარე მაგალითს: We do not have any milk. — რძე არ გვაქვს.",
            "en": "Many goes with countable plurals, much with uncountables; offers often use some. Compare the example: We do not have any milk. — We do not have any milk.",
            "ru": "Many относится к исчисляемым во множественном числе, much — к неисчисляемым; в предложении угощения часто используют some. Сравните с примером: We do not have any milk. — У нас нет молока."
          }
        },
        {
          "form": "many books / much water",
          "detail": {
            "ka": "a few ნიშნავს რამდენიმე თვლად ნივთს, a little — მცირე უთვლად რაოდენობას. შეადარე მაგალითს: How many tickets do you need? — რამდენი ბილეთი გჭირდება?",
            "en": "A few refers to several countable things; a little to a small uncountable amount. Compare the example: How many tickets do you need? — How many tickets do you need?",
            "ru": "A few относится к нескольким исчисляемым предметам, a little — к небольшому неисчисляемому количеству. Сравните с примером: How many tickets do you need? — Сколько билетов вам нужно?"
          }
        }
      ],
      "examples": [
        {
          "en": "I have some apples.",
          "ru": "У меня есть яблоки.",
          "ka": "მე რამდენიმე ვაშლი მაქვს."
        },
        {
          "en": "We do not have any milk.",
          "ru": "У нас нет молока.",
          "ka": "რძე არ გვაქვს."
        },
        {
          "en": "How many tickets do you need?",
          "ru": "Сколько билетов вам нужно?",
          "ka": "რამდენი ბილეთი გჭირდება?"
        }
      ],
      "pitfalls": {
        "ka": "a few ნიშნავს რამდენიმე თვლად ნივთს, a little — მცირე უთვლად რაოდენობას. a lot of ორივესთან გამოიყენება. information და advice ინგლისურში ჩვეულებრივ უთვლადია: many informations არ გამოიყენო.",
        "en": "A few refers to several countable things; a little to a small uncountable amount. A lot of works with both. Information and advice are normally uncountable in English: avoid many informations.",
        "ru": "A few относится к нескольким исчисляемым предметам, a little — к небольшому неисчисляемому количеству. A lot of подходит к обоим. Information и advice обычно неисчисляемые: many informations неверно."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე რამდენიმე ვაშლი მაქვს.",
            "en": "Complete the sentence to express: У меня есть яблоки.",
            "ru": "Заполните предложение со значением: У меня есть яблоки."
          },
          "sentence": "I have ____ apples.",
          "answer": "some",
          "options": [
            "some",
            "much",
            "a"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რძე არ გვაქვს.",
            "en": "Complete the sentence to express: У нас нет молока.",
            "ru": "Заполните предложение со значением: У нас нет молока."
          },
          "sentence": "We do not have ____ milk.",
          "answer": "any",
          "options": [
            "any",
            "a",
            "many"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რამდენი ბილეთი გჭირდება?",
            "en": "Complete the sentence to express: Сколько билетов вам нужно?",
            "ru": "Заполните предложение со значением: Сколько билетов вам нужно?"
          },
          "sentence": "How ____ tickets do you need?",
          "answer": "many",
          "options": [
            "many",
            "much",
            "any"
          ]
        },
        {
          "id": "grammar-en-a1-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე რამდენიმე ვაშლი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: У меня есть яблоки.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: У меня есть яблоки."
          },
          "sentence": "____ have some apples.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a1-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე რამდენიმე ვაშლი მაქვს.",
            "en": "Choose the complete sentence expressing: У меня есть яблоки.",
            "ru": "Выберите полное предложение со значением: У меня есть яблоки."
          },
          "sentence": "____",
          "answer": "I have some apples.",
          "options": [
            "I have some apples.",
            "I have much apples.",
            "I have a apples."
          ]
        },
        {
          "id": "grammar-en-a1-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე რამდენიმე ვაშლი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: У меня есть яблоки.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: У меня есть яблоки."
          },
          "sentence": "I have much apples. → ____",
          "answer": "I have some apples.",
          "options": [
            "I have some apples.",
            "I have a apples.",
            "I have much apples."
          ]
        },
        {
          "id": "grammar-en-a1-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რძე არ გვაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: У нас нет молока.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: У нас нет молока."
          },
          "sentence": "____ do not have any milk.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a1-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რძე არ გვაქვს.",
            "en": "Choose the complete sentence expressing: У нас нет молока.",
            "ru": "Выберите полное предложение со значением: У нас нет молока."
          },
          "sentence": "____",
          "answer": "We do not have any milk.",
          "options": [
            "We do not have any milk.",
            "We do not have a milk.",
            "We do not have many milk."
          ]
        },
        {
          "id": "grammar-en-a1-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რძე არ გვაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: У нас нет молока.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: У нас нет молока."
          },
          "sentence": "We do not have a milk. → ____",
          "answer": "We do not have any milk.",
          "options": [
            "We do not have any milk.",
            "We do not have many milk.",
            "We do not have a milk."
          ]
        },
        {
          "id": "grammar-en-a1-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რამდენი ბილეთი გჭირდება?",
            "en": "Complete a different part of the sentence. Intended meaning: Сколько билетов вам нужно?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Сколько билетов вам нужно?"
          },
          "sentence": "How many tickets ____ you need?",
          "answer": "do",
          "options": [
            "do",
            "does",
            "doing"
          ]
        },
        {
          "id": "grammar-en-a1-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რამდენი ბილეთი გჭირდება?",
            "en": "Choose the complete sentence expressing: Сколько билетов вам нужно?",
            "ru": "Выберите полное предложение со значением: Сколько билетов вам нужно?"
          },
          "sentence": "____",
          "answer": "How many tickets do you need?",
          "options": [
            "How many tickets do you need?",
            "How much tickets do you need?",
            "How any tickets do you need?"
          ]
        },
        {
          "id": "grammar-en-a1-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რამდენი ბილეთი გჭირდება?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Сколько билетов вам нужно?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Сколько билетов вам нужно?"
          },
          "sentence": "How much tickets do you need? → ____",
          "answer": "How many tickets do you need?",
          "options": [
            "How many tickets do you need?",
            "How any tickets do you need?",
            "How much tickets do you need?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-5",
      "level": "A1",
      "title": {
        "ka": "უნარი და ნებართვა",
        "en": "Can and cannot",
        "ru": "Can: умение и разрешение"
      },
      "explanation": {
        "ka": "can-ის შემდეგ ზმნა საწყის ფორმაშია, to-სა და -s-ის გარეშე. can გამოხატავს უნარს ან ნებართვას; კითხვაში წინ გადადის. can ყველა პირთან უცვლელია: she can და არა she cans. მოკლე უარყოფაა can’t; cannot ერთი სიტყვაა. Can you…? შეიძლება თავაზიანი თხოვნაც იყოს და არა მხოლოდ უნარის კითხვა.",
        "en": "After can, use the base verb without to or -s. Can expresses ability or permission and moves before the subject in questions. Can remains unchanged with every person: she can, not she cans. The short negative is can’t; cannot is one word. Can you…? may be a polite request as well as a question about ability.",
        "ru": "После can ставится глагол без to и без -s. Can выражает умение или разрешение; в вопросе стоит перед подлежащим. Can не меняется по лицам: she can, не she cans. Сокращённое отрицание — can’t; cannot пишется слитно. Can you…? может быть вежливой просьбой, а не только вопросом об умении."
      },
      "rules": [
        {
          "form": "She can swim.",
          "detail": {
            "ka": "can-ის შემდეგ ზმნა საწყის ფორმაშია, to-სა და -s-ის გარეშე. შეადარე მაგალითს: She can swim. — მას ცურვა შეუძლია.",
            "en": "After can, use the base verb without to or -s. Compare the example: She can swim. — She can swim.",
            "ru": "После can ставится глагол без to и без -s. Сравните с примером: She can swim. — Она умеет плавать."
          }
        },
        {
          "form": "He cannot swim.",
          "detail": {
            "ka": "can გამოხატავს უნარს ან ნებართვას; კითხვაში წინ გადადის. შეადარე მაგალითს: Can I sit here? — შეიძლება აქ დავჯდე?",
            "en": "Can expresses ability or permission and moves before the subject in questions. Compare the example: Can I sit here? — Can I sit here?",
            "ru": "Can выражает умение или разрешение; в вопросе стоит перед подлежащим. Сравните с примером: Can I sit here? — Можно здесь сесть?"
          }
        },
        {
          "form": "Can you swim?",
          "detail": {
            "ka": "can ყველა პირთან უცვლელია: she can და არა she cans. შეადარე მაგალითს: He cannot drive. — მას მანქანის ტარება არ შეუძლია.",
            "en": "Can remains unchanged with every person: she can, not she cans. Compare the example: He cannot drive. — He cannot drive.",
            "ru": "Can не меняется по лицам: she can, не she cans. Сравните с примером: He cannot drive. — Он не умеет водить."
          }
        }
      ],
      "examples": [
        {
          "en": "She can swim.",
          "ru": "Она умеет плавать.",
          "ka": "მას ცურვა შეუძლია."
        },
        {
          "en": "Can I sit here?",
          "ru": "Можно здесь сесть?",
          "ka": "შეიძლება აქ დავჯდე?"
        },
        {
          "en": "He cannot drive.",
          "ru": "Он не умеет водить.",
          "ka": "მას მანქანის ტარება არ შეუძლია."
        }
      ],
      "pitfalls": {
        "ka": "can ყველა პირთან უცვლელია: she can და არა she cans. მოკლე უარყოფაა can’t; cannot ერთი სიტყვაა. Can you…? შეიძლება თავაზიანი თხოვნაც იყოს და არა მხოლოდ უნარის კითხვა.",
        "en": "Can remains unchanged with every person: she can, not she cans. The short negative is can’t; cannot is one word. Can you…? may be a polite request as well as a question about ability.",
        "ru": "Can не меняется по лицам: she can, не she cans. Сокращённое отрицание — can’t; cannot пишется слитно. Can you…? может быть вежливой просьбой, а не только вопросом об умении."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას ცურვა შეუძლია.",
            "en": "Complete the sentence to express: Она умеет плавать.",
            "ru": "Заполните предложение со значением: Она умеет плавать."
          },
          "sentence": "She can ____.",
          "answer": "swim",
          "options": [
            "swim",
            "swims",
            "to swim"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეიძლება აქ დავჯდე?",
            "en": "Complete the sentence to express: Можно здесь сесть?",
            "ru": "Заполните предложение со значением: Можно здесь сесть?"
          },
          "sentence": "____ I sit here?",
          "answer": "Can",
          "options": [
            "Can",
            "Do",
            "Am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას მანქანის ტარება არ შეუძლია.",
            "en": "Complete the sentence to express: Он не умеет водить.",
            "ru": "Заполните предложение со значением: Он не умеет водить."
          },
          "sentence": "He cannot ____.",
          "answer": "drive",
          "options": [
            "drive",
            "drives",
            "to drive"
          ]
        },
        {
          "id": "grammar-en-a1-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მას ცურვა შეუძლია.",
            "en": "Complete a different part of the sentence. Intended meaning: Она умеет плавать.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она умеет плавать."
          },
          "sentence": "____ can swim.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a1-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მას ცურვა შეუძლია.",
            "en": "Choose the complete sentence expressing: Она умеет плавать.",
            "ru": "Выберите полное предложение со значением: Она умеет плавать."
          },
          "sentence": "____",
          "answer": "She can swim.",
          "options": [
            "She can swim.",
            "She can swims.",
            "She can to swim."
          ]
        },
        {
          "id": "grammar-en-a1-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მას ცურვა შეუძლია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она умеет плавать.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она умеет плавать."
          },
          "sentence": "She can swims. → ____",
          "answer": "She can swim.",
          "options": [
            "She can swim.",
            "She can to swim.",
            "She can swims."
          ]
        },
        {
          "id": "grammar-en-a1-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შეიძლება აქ დავჯდე?",
            "en": "Complete a different part of the sentence. Intended meaning: Можно здесь сесть?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Можно здесь сесть?"
          },
          "sentence": "Can ____ sit here?",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a1-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შეიძლება აქ დავჯდე?",
            "en": "Choose the complete sentence expressing: Можно здесь сесть?",
            "ru": "Выберите полное предложение со значением: Можно здесь сесть?"
          },
          "sentence": "____",
          "answer": "Can I sit here?",
          "options": [
            "Can I sit here?",
            "Do I sit here?",
            "Am I sit here?"
          ]
        },
        {
          "id": "grammar-en-a1-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შეიძლება აქ დავჯდე?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Можно здесь сесть?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Можно здесь сесть?"
          },
          "sentence": "Do I sit here? → ____",
          "answer": "Can I sit here?",
          "options": [
            "Can I sit here?",
            "Am I sit here?",
            "Do I sit here?"
          ]
        },
        {
          "id": "grammar-en-a1-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მას მანქანის ტარება არ შეუძლია.",
            "en": "Complete a different part of the sentence. Intended meaning: Он не умеет водить.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он не умеет водить."
          },
          "sentence": "____ cannot drive.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-a1-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მას მანქანის ტარება არ შეუძლია.",
            "en": "Choose the complete sentence expressing: Он не умеет водить.",
            "ru": "Выберите полное предложение со значением: Он не умеет водить."
          },
          "sentence": "____",
          "answer": "He cannot drive.",
          "options": [
            "He cannot drive.",
            "He cannot drives.",
            "He cannot to drive."
          ]
        },
        {
          "id": "grammar-en-a1-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მას მანქანის ტარება არ შეუძლია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он не умеет водить.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он не умеет водить."
          },
          "sentence": "He cannot drives. → ____",
          "answer": "He cannot drive.",
          "options": [
            "He cannot drive.",
            "He cannot to drive.",
            "He cannot drives."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-6",
      "level": "A1",
      "title": {
        "ka": "დროისა და ადგილის წინდებულები",
        "en": "In, on and at",
        "ru": "Предлоги in, on и at"
      },
      "explanation": {
        "ka": "in გამოიყენება თვეებთან, წლებთან და სივრცის შიგნით; on — დღეებთან და ზედაპირზე; at — ზუსტ დროსა და კონკრეტულ წერტილთან. გამონაკლისებიც არსებობს. დილა არის in the morning, მაგრამ ღამე — at night. კონკრეტული დღის დილასთან on გამოიყენება: on Monday morning. წინდებულებს მხოლოდ ქართული ან რუსული თარგმანით ნუ შეარჩევ; მთელი გამოთქმა ისწავლე.",
        "en": "Use in for months, years and enclosed spaces; on for days and surfaces; at for exact times and points. Some expressions are fixed exceptions. Use in the morning but at night. A specific day’s morning takes on: on Monday morning. Do not select prepositions only from Georgian or Russian equivalents; learn the whole expression.",
        "ru": "In употребляется с месяцами, годами и внутри пространства; on — с днями и поверхностью; at — с точным временем и определённой точкой. Есть устойчивые исключения. Говорят in the morning, но at night. Утро конкретного дня требует on: on Monday morning. Не выбирайте предлог только по грузинскому или русскому переводу; учите сочетание целиком."
      },
      "rules": [
        {
          "form": "in July / in the room",
          "detail": {
            "ka": "in გამოიყენება თვეებთან, წლებთან და სივრცის შიგნით; on — დღეებთან და ზედაპირზე; at — ზუსტ დროსა და კონკრეტულ წერტილთან. შეადარე მაგალითს: We meet on Monday. — ორშაბათს ვხვდებით.",
            "en": "Use in for months, years and enclosed spaces; on for days and surfaces; at for exact times and points. Compare the example: We meet on Monday. — We meet on Monday.",
            "ru": "In употребляется с месяцами, годами и внутри пространства; on — с днями и поверхностью; at — с точным временем и определённой точкой. Сравните с примером: We meet on Monday. — Мы встречаемся в понедельник."
          }
        },
        {
          "form": "on Monday / on the table",
          "detail": {
            "ka": "გამონაკლისებიც არსებობს. შეადარე მაგალითს: The train leaves at six. — მატარებელი ექვსზე გადის.",
            "en": "Some expressions are fixed exceptions. Compare the example: The train leaves at six. — The train leaves at six.",
            "ru": "Есть устойчивые исключения. Сравните с примером: The train leaves at six. — Поезд отправляется в шесть."
          }
        },
        {
          "form": "at six / at the station",
          "detail": {
            "ka": "დილა არის in the morning, მაგრამ ღამე — at night. შეადარე მაგალითს: My keys are in the bag. — ჩემი გასაღებები ჩანთაშია.",
            "en": "Use in the morning but at night. Compare the example: My keys are in the bag. — My keys are in the bag.",
            "ru": "Говорят in the morning, но at night. Сравните с примером: My keys are in the bag. — Мои ключи в сумке."
          }
        }
      ],
      "examples": [
        {
          "en": "We meet on Monday.",
          "ru": "Мы встречаемся в понедельник.",
          "ka": "ორშაბათს ვხვდებით."
        },
        {
          "en": "The train leaves at six.",
          "ru": "Поезд отправляется в шесть.",
          "ka": "მატარებელი ექვსზე გადის."
        },
        {
          "en": "My keys are in the bag.",
          "ru": "Мои ключи в сумке.",
          "ka": "ჩემი გასაღებები ჩანთაშია."
        }
      ],
      "pitfalls": {
        "ka": "დილა არის in the morning, მაგრამ ღამე — at night. კონკრეტული დღის დილასთან on გამოიყენება: on Monday morning. წინდებულებს მხოლოდ ქართული ან რუსული თარგმანით ნუ შეარჩევ; მთელი გამოთქმა ისწავლე.",
        "en": "Use in the morning but at night. A specific day’s morning takes on: on Monday morning. Do not select prepositions only from Georgian or Russian equivalents; learn the whole expression.",
        "ru": "Говорят in the morning, но at night. Утро конкретного дня требует on: on Monday morning. Не выбирайте предлог только по грузинскому или русскому переводу; учите сочетание целиком."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ორშაბათს ვხვდებით.",
            "en": "Complete the sentence to express: Мы встречаемся в понедельник.",
            "ru": "Заполните предложение со значением: Мы встречаемся в понедельник."
          },
          "sentence": "We meet ____ Monday.",
          "answer": "on",
          "options": [
            "on",
            "in",
            "at"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მატარებელი ექვსზე გადის.",
            "en": "Complete the sentence to express: Поезд отправляется в шесть.",
            "ru": "Заполните предложение со значением: Поезд отправляется в шесть."
          },
          "sentence": "The train leaves ____ six.",
          "answer": "at",
          "options": [
            "at",
            "on",
            "in"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩემი გასაღებები ჩანთაშია.",
            "en": "Complete the sentence to express: Мои ключи в сумке.",
            "ru": "Заполните предложение со значением: Мои ключи в сумке."
          },
          "sentence": "My keys are ____ the bag.",
          "answer": "in",
          "options": [
            "in",
            "at",
            "on"
          ]
        },
        {
          "id": "grammar-en-a1-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ორშაბათს ვხვდებით.",
            "en": "Complete a different part of the sentence. Intended meaning: Мы встречаемся в понедельник.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мы встречаемся в понедельник."
          },
          "sentence": "____ meet on Monday.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a1-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ორშაბათს ვხვდებით.",
            "en": "Choose the complete sentence expressing: Мы встречаемся в понедельник.",
            "ru": "Выберите полное предложение со значением: Мы встречаемся в понедельник."
          },
          "sentence": "____",
          "answer": "We meet on Monday.",
          "options": [
            "We meet on Monday.",
            "We meet in Monday.",
            "We meet at Monday."
          ]
        },
        {
          "id": "grammar-en-a1-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ორშაბათს ვხვდებით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мы встречаемся в понедельник.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мы встречаемся в понедельник."
          },
          "sentence": "We meet in Monday. → ____",
          "answer": "We meet on Monday.",
          "options": [
            "We meet on Monday.",
            "We meet at Monday.",
            "We meet in Monday."
          ]
        },
        {
          "id": "grammar-en-a1-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მატარებელი ექვსზე გადის.",
            "en": "Complete a different part of the sentence. Intended meaning: Поезд отправляется в шесть.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Поезд отправляется в шесть."
          },
          "sentence": "The train ____ at six.",
          "answer": "leaves",
          "options": [
            "leaves",
            "leave",
            "leaveses"
          ]
        },
        {
          "id": "grammar-en-a1-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მატარებელი ექვსზე გადის.",
            "en": "Choose the complete sentence expressing: Поезд отправляется в шесть.",
            "ru": "Выберите полное предложение со значением: Поезд отправляется в шесть."
          },
          "sentence": "____",
          "answer": "The train leaves at six.",
          "options": [
            "The train leaves at six.",
            "The train leaves on six.",
            "The train leaves in six."
          ]
        },
        {
          "id": "grammar-en-a1-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მატარებელი ექვსზე გადის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Поезд отправляется в шесть.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Поезд отправляется в шесть."
          },
          "sentence": "The train leaves on six. → ____",
          "answer": "The train leaves at six.",
          "options": [
            "The train leaves at six.",
            "The train leaves in six.",
            "The train leaves on six."
          ]
        },
        {
          "id": "grammar-en-a1-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩემი გასაღებები ჩანთაშია.",
            "en": "Complete a different part of the sentence. Intended meaning: Мои ключи в сумке.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мои ключи в сумке."
          },
          "sentence": "____ keys are in the bag.",
          "answer": "My",
          "options": [
            "My",
            "Me",
            "I"
          ]
        },
        {
          "id": "grammar-en-a1-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩემი გასაღებები ჩანთაშია.",
            "en": "Choose the complete sentence expressing: Мои ключи в сумке.",
            "ru": "Выберите полное предложение со значением: Мои ключи в сумке."
          },
          "sentence": "____",
          "answer": "My keys are in the bag.",
          "options": [
            "My keys are in the bag.",
            "My keys are at the bag.",
            "My keys are on the bag."
          ]
        },
        {
          "id": "grammar-en-a1-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩემი გასაღებები ჩანთაშია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мои ключи в сумке.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мои ключи в сумке."
          },
          "sentence": "My keys are at the bag. → ____",
          "answer": "My keys are in the bag.",
          "options": [
            "My keys are in the bag.",
            "My keys are on the bag.",
            "My keys are at the bag."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-7",
      "level": "A1",
      "title": {
        "ka": "კითხვითი სიტყვები",
        "en": "Wh- questions",
        "ru": "Специальные вопросы"
      },
      "explanation": {
        "ka": "what, where, when, why, who და how კითხვას აზუსტებს. be-სთან პირდაპირ შეცვალე რიგი; სხვა მარტივ ზმნებთან გამოიყენე do/does. თუ who თვითონ ქვემდებარეა, do ჩვეულებრივ არ გამოიყენება: Who lives here? ობიექტის კითხვა კი Who do you know?-ია. be-სთან Where do you are? არასწორია; თქვი Where are you?",
        "en": "What, where, when, why, who and how specify the question. Invert be directly; with other present simple verbs use do/does. When who is itself the subject, do is normally absent: Who lives here? An object question uses Who do you know? With be, Where do you are? is incorrect; say Where are you?",
        "ru": "What, where, when, why, who и how уточняют вопрос. С be меняется порядок; с другими глаголами в Present Simple нужны do/does. Когда who — подлежащее, do обычно не нужен: Who lives here? Вопрос к дополнению: Who do you know? С be неверно Where do you are?; правильно Where are you?"
      },
      "rules": [
        {
          "form": "Where is the hotel?",
          "detail": {
            "ka": "what, where, when, why, who და how კითხვას აზუსტებს. შეადარე მაგალითს: Where is the hotel? — სად არის სასტუმრო?",
            "en": "What, where, when, why, who and how specify the question. Compare the example: Where is the hotel? — Where is the hotel?",
            "ru": "What, where, when, why, who и how уточняют вопрос. Сравните с примером: Where is the hotel? — Где гостиница?"
          }
        },
        {
          "form": "What do you need?",
          "detail": {
            "ka": "be-სთან პირდაპირ შეცვალე რიგი; სხვა მარტივ ზმნებთან გამოიყენე do/does. შეადარე მაგალითს: What do you need? — რა გჭირდება?",
            "en": "Invert be directly; with other present simple verbs use do/does. Compare the example: What do you need? — What do you need?",
            "ru": "С be меняется порядок; с другими глаголами в Present Simple нужны do/does. Сравните с примером: What do you need? — Что вам нужно?"
          }
        },
        {
          "form": "When does she leave?",
          "detail": {
            "ka": "თუ who თვითონ ქვემდებარეა, do ჩვეულებრივ არ გამოიყენება: Who lives here? შეადარე მაგალითს: When does she leave? — ის როდის მიდის?",
            "en": "When who is itself the subject, do is normally absent: Who lives here? Compare the example: When does she leave? — When does she leave?",
            "ru": "Когда who — подлежащее, do обычно не нужен: Who lives here? Сравните с примером: When does she leave? — Когда она уезжает?"
          }
        }
      ],
      "examples": [
        {
          "en": "Where is the hotel?",
          "ru": "Где гостиница?",
          "ka": "სად არის სასტუმრო?"
        },
        {
          "en": "What do you need?",
          "ru": "Что вам нужно?",
          "ka": "რა გჭირდება?"
        },
        {
          "en": "When does she leave?",
          "ru": "Когда она уезжает?",
          "ka": "ის როდის მიდის?"
        }
      ],
      "pitfalls": {
        "ka": "თუ who თვითონ ქვემდებარეა, do ჩვეულებრივ არ გამოიყენება: Who lives here? ობიექტის კითხვა კი Who do you know?-ია. be-სთან Where do you are? არასწორია; თქვი Where are you?",
        "en": "When who is itself the subject, do is normally absent: Who lives here? An object question uses Who do you know? With be, Where do you are? is incorrect; say Where are you?",
        "ru": "Когда who — подлежащее, do обычно не нужен: Who lives here? Вопрос к дополнению: Who do you know? С be неверно Where do you are?; правильно Where are you?"
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სად არის სასტუმრო?",
            "en": "Complete the sentence to express: Где гостиница?",
            "ru": "Заполните предложение со значением: Где гостиница?"
          },
          "sentence": "____ is the hotel?",
          "answer": "Where",
          "options": [
            "Where",
            "When",
            "Who"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რა გჭირდება?",
            "en": "Complete the sentence to express: Что вам нужно?",
            "ru": "Заполните предложение со значением: Что вам нужно?"
          },
          "sentence": "What ____ you need?",
          "answer": "do",
          "options": [
            "do",
            "does",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის როდის მიდის?",
            "en": "Complete the sentence to express: Когда она уезжает?",
            "ru": "Заполните предложение со значением: Когда она уезжает?"
          },
          "sentence": "When ____ she leave?",
          "answer": "does",
          "options": [
            "does",
            "do",
            "is"
          ]
        },
        {
          "id": "grammar-en-a1-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სად არის სასტუმრო?",
            "en": "Complete a different part of the sentence. Intended meaning: Где гостиница?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Где гостиница?"
          },
          "sentence": "Where ____ the hotel?",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a1-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სად არის სასტუმრო?",
            "en": "Choose the complete sentence expressing: Где гостиница?",
            "ru": "Выберите полное предложение со значением: Где гостиница?"
          },
          "sentence": "____",
          "answer": "Where is the hotel?",
          "options": [
            "Where is the hotel?",
            "When is the hotel?",
            "Who is the hotel?"
          ]
        },
        {
          "id": "grammar-en-a1-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სად არის სასტუმრო?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Где гостиница?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Где гостиница?"
          },
          "sentence": "When is the hotel? → ____",
          "answer": "Where is the hotel?",
          "options": [
            "Where is the hotel?",
            "Who is the hotel?",
            "When is the hotel?"
          ]
        },
        {
          "id": "grammar-en-a1-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რა გჭირდება?",
            "en": "Complete a different part of the sentence. Intended meaning: Что вам нужно?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Что вам нужно?"
          },
          "sentence": "What do you ____?",
          "answer": "need",
          "options": [
            "need",
            "ne",
            "needs"
          ]
        },
        {
          "id": "grammar-en-a1-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რა გჭირდება?",
            "en": "Choose the complete sentence expressing: Что вам нужно?",
            "ru": "Выберите полное предложение со значением: Что вам нужно?"
          },
          "sentence": "____",
          "answer": "What do you need?",
          "options": [
            "What do you need?",
            "What does you need?",
            "What are you need?"
          ]
        },
        {
          "id": "grammar-en-a1-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რა გჭირდება?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Что вам нужно?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Что вам нужно?"
          },
          "sentence": "What does you need? → ____",
          "answer": "What do you need?",
          "options": [
            "What do you need?",
            "What are you need?",
            "What does you need?"
          ]
        },
        {
          "id": "grammar-en-a1-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის როდის მიდის?",
            "en": "Complete a different part of the sentence. Intended meaning: Когда она уезжает?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Когда она уезжает?"
          },
          "sentence": "____ does she leave?",
          "answer": "When",
          "options": [
            "When",
            "Whens",
            "Whening"
          ]
        },
        {
          "id": "grammar-en-a1-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის როდის მიდის?",
            "en": "Choose the complete sentence expressing: Когда она уезжает?",
            "ru": "Выберите полное предложение со значением: Когда она уезжает?"
          },
          "sentence": "____",
          "answer": "When does she leave?",
          "options": [
            "When does she leave?",
            "When do she leave?",
            "When is she leave?"
          ]
        },
        {
          "id": "grammar-en-a1-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის როდის მიდის?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Когда она уезжает?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Когда она уезжает?"
          },
          "sentence": "When do she leave? → ____",
          "answer": "When does she leave?",
          "options": [
            "When does she leave?",
            "When is she leave?",
            "When do she leave?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a1-8",
      "level": "A1",
      "title": {
        "ka": "სიხშირე და ჩვევები",
        "en": "Frequency adverbs",
        "ru": "Наречия частотности"
      },
      "explanation": {
        "ka": "always, usually, often ზმნის წინ დგას, მაგრამ be-ს შემდეგ. never უკვე უარყოფით აზრს ატარებს: არ დაუმატო don’t. every day დროის ჯგუფია და ხშირად ბოლოში დგას. always და never აბსოლუტური სიხშირეა, often კი ხშირ, მაგრამ არა მუდმივ მოქმედებას ნიშნავს. ორი უარყოფა I don’t never ამ სტანდარტულ მოდელში არ გამოიყენება.",
        "en": "Always, usually and often normally precede the main verb but follow be. Never already has negative meaning; do not add don’t. Every day is a time phrase and often goes at the end. Always and never mark absolute frequency; often means frequent but not constant action. Avoid the double negative I don’t never in this standard pattern.",
        "ru": "Always, usually и often обычно стоят перед смысловым глаголом, но после be. Never уже выражает отрицание; don’t не добавляется. Every day — обстоятельство времени, часто в конце. Always и never обозначают абсолютную частотность; often — часто, но не постоянно. В этой стандартной модели избегайте двойного отрицания I don’t never."
      },
      "rules": [
        {
          "form": "I often walk.",
          "detail": {
            "ka": "always, usually, often ზმნის წინ დგას, მაგრამ be-ს შემდეგ. შეადარე მაგალითს: I often walk to work. — სამსახურში ხშირად ფეხით მივდივარ.",
            "en": "Always, usually and often normally precede the main verb but follow be. Compare the example: I often walk to work. — I often walk to work.",
            "ru": "Always, usually и often обычно стоят перед смысловым глаголом, но после be. Сравните с примером: I often walk to work. — Я часто хожу на работу пешком."
          }
        },
        {
          "form": "She is always early.",
          "detail": {
            "ka": "never უკვე უარყოფით აზრს ატარებს: არ დაუმატო don’t. შეადარე მაგალითს: She is always early. — ის ყოველთვის ადრე მოდის.",
            "en": "Never already has negative meaning; do not add don’t. Compare the example: She is always early. — She is always early.",
            "ru": "Never уже выражает отрицание; don’t не добавляется. Сравните с примером: She is always early. — Она всегда приходит рано."
          }
        },
        {
          "form": "He never smokes.",
          "detail": {
            "ka": "every day დროის ჯგუფია და ხშირად ბოლოში დგას. შეადარე მაგალითს: He never smokes. — ის არასოდეს ეწევა.",
            "en": "Every day is a time phrase and often goes at the end. Compare the example: He never smokes. — He never smokes.",
            "ru": "Every day — обстоятельство времени, часто в конце. Сравните с примером: He never smokes. — Он никогда не курит."
          }
        }
      ],
      "examples": [
        {
          "en": "I often walk to work.",
          "ru": "Я часто хожу на работу пешком.",
          "ka": "სამსახურში ხშირად ფეხით მივდივარ."
        },
        {
          "en": "She is always early.",
          "ru": "Она всегда приходит рано.",
          "ka": "ის ყოველთვის ადრე მოდის."
        },
        {
          "en": "He never smokes.",
          "ru": "Он никогда не курит.",
          "ka": "ის არასოდეს ეწევა."
        }
      ],
      "pitfalls": {
        "ka": "every day დროის ჯგუფია და ხშირად ბოლოში დგას. always და never აბსოლუტური სიხშირეა, often კი ხშირ, მაგრამ არა მუდმივ მოქმედებას ნიშნავს. ორი უარყოფა I don’t never ამ სტანდარტულ მოდელში არ გამოიყენება.",
        "en": "Every day is a time phrase and often goes at the end. Always and never mark absolute frequency; often means frequent but not constant action. Avoid the double negative I don’t never in this standard pattern.",
        "ru": "Every day — обстоятельство времени, часто в конце. Always и never обозначают абсолютную частотность; often — часто, но не постоянно. В этой стандартной модели избегайте двойного отрицания I don’t never."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სამსახურში ხშირად ფეხით მივდივარ.",
            "en": "Complete the sentence to express: Я часто хожу на работу пешком.",
            "ru": "Заполните предложение со значением: Я часто хожу на работу пешком."
          },
          "sentence": "I ____ walk to work.",
          "answer": "often",
          "options": [
            "often",
            "never not",
            "am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ყოველთვის ადრე მოდის.",
            "en": "Complete the sentence to express: Она всегда приходит рано.",
            "ru": "Заполните предложение со значением: Она всегда приходит рано."
          },
          "sentence": "She is ____ early.",
          "answer": "always",
          "options": [
            "always",
            "every",
            "all"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის არასოდეს ეწევა.",
            "en": "Complete the sentence to express: Он никогда не курит.",
            "ru": "Заполните предложение со значением: Он никогда не курит."
          },
          "sentence": "He ____ smokes.",
          "answer": "never",
          "options": [
            "never",
            "not never",
            "does not never"
          ]
        },
        {
          "id": "grammar-en-a1-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სამსახურში ხშირად ფეხით მივდივარ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я часто хожу на работу пешком.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я часто хожу на работу пешком."
          },
          "sentence": "____ often walk to work.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a1-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სამსახურში ხშირად ფეხით მივდივარ.",
            "en": "Choose the complete sentence expressing: Я часто хожу на работу пешком.",
            "ru": "Выберите полное предложение со значением: Я часто хожу на работу пешком."
          },
          "sentence": "____",
          "answer": "I often walk to work.",
          "options": [
            "I often walk to work.",
            "I never not walk to work.",
            "I am walk to work."
          ]
        },
        {
          "id": "grammar-en-a1-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სამსახურში ხშირად ფეხით მივდივარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я часто хожу на работу пешком.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я часто хожу на работу пешком."
          },
          "sentence": "I never not walk to work. → ____",
          "answer": "I often walk to work.",
          "options": [
            "I often walk to work.",
            "I am walk to work.",
            "I never not walk to work."
          ]
        },
        {
          "id": "grammar-en-a1-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ყოველთვის ადრე მოდის.",
            "en": "Complete a different part of the sentence. Intended meaning: Она всегда приходит рано.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она всегда приходит рано."
          },
          "sentence": "____ is always early.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a1-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ყოველთვის ადრე მოდის.",
            "en": "Choose the complete sentence expressing: Она всегда приходит рано.",
            "ru": "Выберите полное предложение со значением: Она всегда приходит рано."
          },
          "sentence": "____",
          "answer": "She is always early.",
          "options": [
            "She is always early.",
            "She is every early.",
            "She is all early."
          ]
        },
        {
          "id": "grammar-en-a1-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ყოველთვის ადრე მოდის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она всегда приходит рано.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она всегда приходит рано."
          },
          "sentence": "She is every early. → ____",
          "answer": "She is always early.",
          "options": [
            "She is always early.",
            "She is all early.",
            "She is every early."
          ]
        },
        {
          "id": "grammar-en-a1-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის არასოდეს ეწევა.",
            "en": "Complete a different part of the sentence. Intended meaning: Он никогда не курит.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он никогда не курит."
          },
          "sentence": "____ never smokes.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-a1-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის არასოდეს ეწევა.",
            "en": "Choose the complete sentence expressing: Он никогда не курит.",
            "ru": "Выберите полное предложение со значением: Он никогда не курит."
          },
          "sentence": "____",
          "answer": "He never smokes.",
          "options": [
            "He never smokes.",
            "He not never smokes.",
            "He does not never smokes."
          ]
        },
        {
          "id": "grammar-en-a1-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის არასოდეს ეწევა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он никогда не курит.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он никогда не курит."
          },
          "sentence": "He not never smokes. → ____",
          "answer": "He never smokes.",
          "options": [
            "He never smokes.",
            "He does not never smokes.",
            "He not never smokes."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-1",
      "level": "A2",
      "title": {
        "ka": "წარსული მარტივი",
        "en": "Past simple",
        "ru": "Past Simple"
      },
      "explanation": {
        "ka": "დასრულებული წარსული მოქმედება გამოიყენებს -ed-ს ან არაწესიერ ფორმას. did/didn’t-ის შემდეგ საწყისი ზმნაა. be იცვლება was/were ფორმებად. წარსული დრო ყველა პირთან ერთნაირია, გარდა be-ს ფორმებისა. regular -ed შეიძლება სხვადასხვანაირად ჟღერდეს, თუმცა მართლწერა უცვლელი რჩება. Did you went? არასწორია: did-ის შემდეგ go უნდა იყოს.",
        "en": "Finished past actions use -ed or an irregular form. After did/didn’t use the base verb. Be uses was/were. Past forms are the same for all persons except be. Regular -ed has different pronunciations but keeps its written ending. Did you went? is incorrect: use go after did.",
        "ru": "Завершённое действие в прошлом выражается формой на -ed или неправильной формой. После did/didn’t ставится начальная форма. Be имеет формы was/were. Форма прошедшего одинакова для всех лиц, кроме be. Регулярное -ed произносится по-разному, но сохраняется на письме. Did you went? неверно: после did требуется go."
      },
      "rules": [
        {
          "form": "She visited us.",
          "detail": {
            "ka": "დასრულებული წარსული მოქმედება გამოიყენებს -ed-ს ან არაწესიერ ფორმას. შეადარე მაგალითს: She visited us yesterday. — ის გუშინ გვესტუმრა.",
            "en": "Finished past actions use -ed or an irregular form. Compare the example: She visited us yesterday. — She visited us yesterday.",
            "ru": "Завершённое действие в прошлом выражается формой на -ed или неправильной формой. Сравните с примером: She visited us yesterday. — Она навестила нас вчера."
          }
        },
        {
          "form": "He went home.",
          "detail": {
            "ka": "did/didn’t-ის შემდეგ საწყისი ზმნაა. შეადარე მაგალითს: He went home. — ის სახლში წავიდა.",
            "en": "After did/didn’t use the base verb. Compare the example: He went home. — He went home.",
            "ru": "После did/didn’t ставится начальная форма. Сравните с примером: He went home. — Он пошёл домой."
          }
        },
        {
          "form": "Did you go? / I did not go.",
          "detail": {
            "ka": "be იცვლება was/were ფორმებად. შეადარე მაგალითს: Did you see the film? — ფილმი ნახე?",
            "en": "Be uses was/were. Compare the example: Did you see the film? — Did you see the film?",
            "ru": "Be имеет формы was/were. Сравните с примером: Did you see the film? — Вы видели фильм?"
          }
        }
      ],
      "examples": [
        {
          "en": "She visited us yesterday.",
          "ru": "Она навестила нас вчера.",
          "ka": "ის გუშინ გვესტუმრა."
        },
        {
          "en": "He went home.",
          "ru": "Он пошёл домой.",
          "ka": "ის სახლში წავიდა."
        },
        {
          "en": "Did you see the film?",
          "ru": "Вы видели фильм?",
          "ka": "ფილმი ნახე?"
        }
      ],
      "pitfalls": {
        "ka": "წარსული დრო ყველა პირთან ერთნაირია, გარდა be-ს ფორმებისა. regular -ed შეიძლება სხვადასხვანაირად ჟღერდეს, თუმცა მართლწერა უცვლელი რჩება. Did you went? არასწორია: did-ის შემდეგ go უნდა იყოს.",
        "en": "Past forms are the same for all persons except be. Regular -ed has different pronunciations but keeps its written ending. Did you went? is incorrect: use go after did.",
        "ru": "Форма прошедшего одинакова для всех лиц, кроме be. Регулярное -ed произносится по-разному, но сохраняется на письме. Did you went? неверно: после did требуется go."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის გუშინ გვესტუმრა.",
            "en": "Complete the sentence to express: Она навестила нас вчера.",
            "ru": "Заполните предложение со значением: Она навестила нас вчера."
          },
          "sentence": "She ____ us yesterday.",
          "answer": "visited",
          "options": [
            "visited",
            "visit",
            "visits"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის სახლში წავიდა.",
            "en": "Complete the sentence to express: Он пошёл домой.",
            "ru": "Заполните предложение со значением: Он пошёл домой."
          },
          "sentence": "He ____ home.",
          "answer": "went",
          "options": [
            "went",
            "go",
            "goed"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ფილმი ნახე?",
            "en": "Complete the sentence to express: Вы видели фильм?",
            "ru": "Заполните предложение со значением: Вы видели фильм?"
          },
          "sentence": "Did you ____ the film?",
          "answer": "see",
          "options": [
            "see",
            "saw",
            "seen"
          ]
        },
        {
          "id": "grammar-en-a2-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის გუშინ გვესტუმრა.",
            "en": "Complete a different part of the sentence. Intended meaning: Она навестила нас вчера.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она навестила нас вчера."
          },
          "sentence": "____ visited us yesterday.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a2-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის გუშინ გვესტუმრა.",
            "en": "Choose the complete sentence expressing: Она навестила нас вчера.",
            "ru": "Выберите полное предложение со значением: Она навестила нас вчера."
          },
          "sentence": "____",
          "answer": "She visited us yesterday.",
          "options": [
            "She visited us yesterday.",
            "She visit us yesterday.",
            "She visits us yesterday."
          ]
        },
        {
          "id": "grammar-en-a2-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის გუშინ გვესტუმრა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она навестила нас вчера.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она навестила нас вчера."
          },
          "sentence": "She visit us yesterday. → ____",
          "answer": "She visited us yesterday.",
          "options": [
            "She visited us yesterday.",
            "She visits us yesterday.",
            "She visit us yesterday."
          ]
        },
        {
          "id": "grammar-en-a2-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის სახლში წავიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Он пошёл домой.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он пошёл домой."
          },
          "sentence": "____ went home.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-a2-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის სახლში წავიდა.",
            "en": "Choose the complete sentence expressing: Он пошёл домой.",
            "ru": "Выберите полное предложение со значением: Он пошёл домой."
          },
          "sentence": "____",
          "answer": "He went home.",
          "options": [
            "He went home.",
            "He go home.",
            "He goed home."
          ]
        },
        {
          "id": "grammar-en-a2-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის სახლში წავიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он пошёл домой.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он пошёл домой."
          },
          "sentence": "He go home. → ____",
          "answer": "He went home.",
          "options": [
            "He went home.",
            "He goed home.",
            "He go home."
          ]
        },
        {
          "id": "grammar-en-a2-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ფილმი ნახე?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы видели фильм?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы видели фильм?"
          },
          "sentence": "____ you see the film?",
          "answer": "Did",
          "options": [
            "Did",
            "Does",
            "Is"
          ]
        },
        {
          "id": "grammar-en-a2-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ფილმი ნახე?",
            "en": "Choose the complete sentence expressing: Вы видели фильм?",
            "ru": "Выберите полное предложение со значением: Вы видели фильм?"
          },
          "sentence": "____",
          "answer": "Did you see the film?",
          "options": [
            "Did you see the film?",
            "Did you saw the film?",
            "Did you seen the film?"
          ]
        },
        {
          "id": "grammar-en-a2-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ფილმი ნახე?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы видели фильм?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы видели фильм?"
          },
          "sentence": "Did you saw the film? → ____",
          "answer": "Did you see the film?",
          "options": [
            "Did you see the film?",
            "Did you seen the film?",
            "Did you saw the film?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-2",
      "level": "A2",
      "title": {
        "ka": "წარსული განგრძობითი",
        "en": "Past continuous",
        "ru": "Past Continuous"
      },
      "explanation": {
        "ka": "was/were + -ing წარსულში მიმდინარე მოქმედებას აღწერს. Past Simple ხშირად მოკლე შემაწყვეტინებელ მოვლენას გამოხატავს. while ხშირად პროცესების თანადროულობას უსვამს ხაზს, when — კონკრეტულ მოვლენას. ორივე დრო ერთად აზრის მიხედვით აირჩიე და არა მხოლოდ კავშირის მიხედვით. was/were-ის გარეშე reading წარსულ წინადადებას ვერ ქმნის.",
        "en": "Was/were + -ing describes an action in progress in the past. Past simple often names a shorter interrupting event. While often highlights simultaneous processes; when often introduces a particular event. Choose the tense by meaning, not solely by the conjunction. Reading without was/were does not form a past continuous clause.",
        "ru": "Was/were + -ing описывает процесс в прошлом. Past Simple часто обозначает короткое событие, прервавшее процесс. While часто выделяет одновременные процессы; when — конкретное событие. Выбирайте время по смыслу, а не только по союзу. Reading без was/were не образует Past Continuous."
      },
      "rules": [
        {
          "form": "I was reading.",
          "detail": {
            "ka": "was/were + -ing წარსულში მიმდინარე მოქმედებას აღწერს. შეადარე მაგალითს: I was reading at eight. — რვა საათზე ვკითხულობდი.",
            "en": "Was/were + -ing describes an action in progress in the past. Compare the example: I was reading at eight. — I was reading at eight.",
            "ru": "Was/were + -ing описывает процесс в прошлом. Сравните с примером: I was reading at eight. — В восемь я читала."
          }
        },
        {
          "form": "They were sleeping.",
          "detail": {
            "ka": "Past Simple ხშირად მოკლე შემაწყვეტინებელ მოვლენას გამოხატავს. შეადარე მაგალითს: They were sleeping. — მათ ეძინათ.",
            "en": "Past simple often names a shorter interrupting event. Compare the example: They were sleeping. — They were sleeping.",
            "ru": "Past Simple часто обозначает короткое событие, прервавшее процесс. Сравните с примером: They were sleeping. — Они спали."
          }
        },
        {
          "form": "I was cooking when she called.",
          "detail": {
            "ka": "while ხშირად პროცესების თანადროულობას უსვამს ხაზს, when — კონკრეტულ მოვლენას. შეადარე მაგალითს: She was cooking when I called. — ის საჭმელს ამზადებდა, როცა დავურეკე.",
            "en": "While often highlights simultaneous processes; when often introduces a particular event. Compare the example: She was cooking when I called. — She was cooking when I called.",
            "ru": "While часто выделяет одновременные процессы; when — конкретное событие. Сравните с примером: She was cooking when I called. — Она готовила, когда я позвонила."
          }
        }
      ],
      "examples": [
        {
          "en": "I was reading at eight.",
          "ru": "В восемь я читала.",
          "ka": "რვა საათზე ვკითხულობდი."
        },
        {
          "en": "They were sleeping.",
          "ru": "Они спали.",
          "ka": "მათ ეძინათ."
        },
        {
          "en": "She was cooking when I called.",
          "ru": "Она готовила, когда я позвонила.",
          "ka": "ის საჭმელს ამზადებდა, როცა დავურეკე."
        }
      ],
      "pitfalls": {
        "ka": "while ხშირად პროცესების თანადროულობას უსვამს ხაზს, when — კონკრეტულ მოვლენას. ორივე დრო ერთად აზრის მიხედვით აირჩიე და არა მხოლოდ კავშირის მიხედვით. was/were-ის გარეშე reading წარსულ წინადადებას ვერ ქმნის.",
        "en": "While often highlights simultaneous processes; when often introduces a particular event. Choose the tense by meaning, not solely by the conjunction. Reading without was/were does not form a past continuous clause.",
        "ru": "While часто выделяет одновременные процессы; when — конкретное событие. Выбирайте время по смыслу, а не только по союзу. Reading без was/were не образует Past Continuous."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რვა საათზე ვკითხულობდი.",
            "en": "Complete the sentence to express: В восемь я читала.",
            "ru": "Заполните предложение со значением: В восемь я читала."
          },
          "sentence": "I ____ reading at eight.",
          "answer": "was",
          "options": [
            "was",
            "were",
            "am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მათ ეძინათ.",
            "en": "Complete the sentence to express: Они спали.",
            "ru": "Заполните предложение со значением: Они спали."
          },
          "sentence": "They ____ sleeping.",
          "answer": "were",
          "options": [
            "were",
            "was",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის საჭმელს ამზადებდა, როცა დავურეკე.",
            "en": "Complete the sentence to express: Она готовила, когда я позвонила.",
            "ru": "Заполните предложение со значением: Она готовила, когда я позвонила."
          },
          "sentence": "She was ____ when I called.",
          "answer": "cooking",
          "options": [
            "cooking",
            "cook",
            "cooks"
          ]
        },
        {
          "id": "grammar-en-a2-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რვა საათზე ვკითხულობდი.",
            "en": "Complete a different part of the sentence. Intended meaning: В восемь я читала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: В восемь я читала."
          },
          "sentence": "____ was reading at eight.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a2-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რვა საათზე ვკითხულობდი.",
            "en": "Choose the complete sentence expressing: В восемь я читала.",
            "ru": "Выберите полное предложение со значением: В восемь я читала."
          },
          "sentence": "____",
          "answer": "I was reading at eight.",
          "options": [
            "I was reading at eight.",
            "I were reading at eight.",
            "I am reading at eight."
          ]
        },
        {
          "id": "grammar-en-a2-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რვა საათზე ვკითხულობდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: В восемь я читала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: В восемь я читала."
          },
          "sentence": "I were reading at eight. → ____",
          "answer": "I was reading at eight.",
          "options": [
            "I was reading at eight.",
            "I am reading at eight.",
            "I were reading at eight."
          ]
        },
        {
          "id": "grammar-en-a2-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მათ ეძინათ.",
            "en": "Complete a different part of the sentence. Intended meaning: Они спали.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Они спали."
          },
          "sentence": "____ were sleeping.",
          "answer": "They",
          "options": [
            "They",
            "Them",
            "Their"
          ]
        },
        {
          "id": "grammar-en-a2-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მათ ეძინათ.",
            "en": "Choose the complete sentence expressing: Они спали.",
            "ru": "Выберите полное предложение со значением: Они спали."
          },
          "sentence": "____",
          "answer": "They were sleeping.",
          "options": [
            "They were sleeping.",
            "They was sleeping.",
            "They are sleeping."
          ]
        },
        {
          "id": "grammar-en-a2-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მათ ეძინათ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Они спали.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Они спали."
          },
          "sentence": "They was sleeping. → ____",
          "answer": "They were sleeping.",
          "options": [
            "They were sleeping.",
            "They are sleeping.",
            "They was sleeping."
          ]
        },
        {
          "id": "grammar-en-a2-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის საჭმელს ამზადებდა, როცა დავურეკე.",
            "en": "Complete a different part of the sentence. Intended meaning: Она готовила, когда я позвонила.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она готовила, когда я позвонила."
          },
          "sentence": "____ was cooking when I called.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a2-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის საჭმელს ამზადებდა, როცა დავურეკე.",
            "en": "Choose the complete sentence expressing: Она готовила, когда я позвонила.",
            "ru": "Выберите полное предложение со значением: Она готовила, когда я позвонила."
          },
          "sentence": "____",
          "answer": "She was cooking when I called.",
          "options": [
            "She was cooking when I called.",
            "She was cook when I called.",
            "She was cooks when I called."
          ]
        },
        {
          "id": "grammar-en-a2-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის საჭმელს ამზადებდა, როცა დავურეკე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она готовила, когда я позвонила.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она готовила, когда я позвонила."
          },
          "sentence": "She was cook when I called. → ____",
          "answer": "She was cooking when I called.",
          "options": [
            "She was cooking when I called.",
            "She was cooks when I called.",
            "She was cook when I called."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-3",
      "level": "A2",
      "title": {
        "ka": "მომავალი გეგმები",
        "en": "Going to and will",
        "ru": "Going to и will"
      },
      "explanation": {
        "ka": "be going to ხშირად გეგმას ან ახლანდელი ნიშნებით პროგნოზს აღნიშნავს. will გამოიყენება სპონტანური გადაწყვეტილებისა და პროგნოზისთვის; მის შემდეგ საწყისი ზმნაა. going to-სთან be აუცილებელია: She is going to leave. will-ის უარყოფაა won’t, ხოლო კითხვა Will she leave? არ თქვა will to help ან wills help. შეთანხმებული შეხვედრები შეიძლება Present Continuous-ითაც ითქვას.",
        "en": "Be going to often expresses a plan or evidence-based prediction. Will expresses spontaneous decisions and predictions; use the base verb after it. Be is essential with going to: She is going to leave. Will has negative won’t and question Will she leave? Avoid will to help and wills help. Arranged appointments can also use present continuous.",
        "ru": "Be going to часто выражает план или прогноз по имеющимся признакам. Will употребляется для спонтанных решений и прогнозов; после него нужна начальная форма. С going to обязательно be: She is going to leave. Отрицание will — won’t, вопрос — Will she leave? Неверно will to help и wills help. Договорённые встречи могут выражаться Present Continuous."
      },
      "rules": [
        {
          "form": "I am going to travel.",
          "detail": {
            "ka": "be going to ხშირად გეგმას ან ახლანდელი ნიშნებით პროგნოზს აღნიშნავს. შეადარე მაგალითს: I am going to travel tomorrow. — ხვალ მოგზაურობას ვაპირებ.",
            "en": "Be going to often expresses a plan or evidence-based prediction. Compare the example: I am going to travel tomorrow. — I am going to travel tomorrow.",
            "ru": "Be going to часто выражает план или прогноз по имеющимся признакам. Сравните с примером: I am going to travel tomorrow. — Завтра я собираюсь в поездку."
          }
        },
        {
          "form": "It is going to rain.",
          "detail": {
            "ka": "will გამოიყენება სპონტანური გადაწყვეტილებისა და პროგნოზისთვის; მის შემდეგ საწყისი ზმნაა. შეადარე მაგალითს: I will help you. — დაგეხმარები.",
            "en": "Will expresses spontaneous decisions and predictions; use the base verb after it. Compare the example: I will help you. — I will help you.",
            "ru": "Will употребляется для спонтанных решений и прогнозов; после него нужна начальная форма. Сравните с примером: I will help you. — Я вам помогу."
          }
        },
        {
          "form": "I will help you.",
          "detail": {
            "ka": "going to-სთან be აუცილებელია: She is going to leave. შეადარე მაგალითს: It is going to rain. — წვიმა აპირებს.",
            "en": "Be is essential with going to: She is going to leave. Compare the example: It is going to rain. — It is going to rain.",
            "ru": "С going to обязательно be: She is going to leave. Сравните с примером: It is going to rain. — Скоро пойдёт дождь."
          }
        }
      ],
      "examples": [
        {
          "en": "I am going to travel tomorrow.",
          "ru": "Завтра я собираюсь в поездку.",
          "ka": "ხვალ მოგზაურობას ვაპირებ."
        },
        {
          "en": "I will help you.",
          "ru": "Я вам помогу.",
          "ka": "დაგეხმარები."
        },
        {
          "en": "It is going to rain.",
          "ru": "Скоро пойдёт дождь.",
          "ka": "წვიმა აპირებს."
        }
      ],
      "pitfalls": {
        "ka": "going to-სთან be აუცილებელია: She is going to leave. will-ის უარყოფაა won’t, ხოლო კითხვა Will she leave? არ თქვა will to help ან wills help. შეთანხმებული შეხვედრები შეიძლება Present Continuous-ითაც ითქვას.",
        "en": "Be is essential with going to: She is going to leave. Will has negative won’t and question Will she leave? Avoid will to help and wills help. Arranged appointments can also use present continuous.",
        "ru": "С going to обязательно be: She is going to leave. Отрицание will — won’t, вопрос — Will she leave? Неверно will to help и wills help. Договорённые встречи могут выражаться Present Continuous."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხვალ მოგზაურობას ვაპირებ.",
            "en": "Complete the sentence to express: Завтра я собираюсь в поездку.",
            "ru": "Заполните предложение со значением: Завтра я собираюсь в поездку."
          },
          "sentence": "I ____ going to travel tomorrow.",
          "answer": "am",
          "options": [
            "am",
            "is",
            "are"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დაგეხმარები.",
            "en": "Complete the sentence to express: Я вам помогу.",
            "ru": "Заполните предложение со значением: Я вам помогу."
          },
          "sentence": "I will ____ you.",
          "answer": "help",
          "options": [
            "help",
            "helps",
            "to help"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წვიმა აპირებს.",
            "en": "Complete the sentence to express: Скоро пойдёт дождь.",
            "ru": "Заполните предложение со значением: Скоро пойдёт дождь."
          },
          "sentence": "It ____ going to rain.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "will"
          ]
        },
        {
          "id": "grammar-en-a2-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხვალ მოგზაურობას ვაპირებ.",
            "en": "Complete a different part of the sentence. Intended meaning: Завтра я собираюсь в поездку.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Завтра я собираюсь в поездку."
          },
          "sentence": "____ am going to travel tomorrow.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a2-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხვალ მოგზაურობას ვაპირებ.",
            "en": "Choose the complete sentence expressing: Завтра я собираюсь в поездку.",
            "ru": "Выберите полное предложение со значением: Завтра я собираюсь в поездку."
          },
          "sentence": "____",
          "answer": "I am going to travel tomorrow.",
          "options": [
            "I am going to travel tomorrow.",
            "I is going to travel tomorrow.",
            "I are going to travel tomorrow."
          ]
        },
        {
          "id": "grammar-en-a2-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხვალ მოგზაურობას ვაპირებ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Завтра я собираюсь в поездку.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Завтра я собираюсь в поездку."
          },
          "sentence": "I is going to travel tomorrow. → ____",
          "answer": "I am going to travel tomorrow.",
          "options": [
            "I am going to travel tomorrow.",
            "I are going to travel tomorrow.",
            "I is going to travel tomorrow."
          ]
        },
        {
          "id": "grammar-en-a2-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დაგეხმარები.",
            "en": "Complete a different part of the sentence. Intended meaning: Я вам помогу.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я вам помогу."
          },
          "sentence": "____ will help you.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a2-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დაგეხმარები.",
            "en": "Choose the complete sentence expressing: Я вам помогу.",
            "ru": "Выберите полное предложение со значением: Я вам помогу."
          },
          "sentence": "____",
          "answer": "I will help you.",
          "options": [
            "I will help you.",
            "I will helps you.",
            "I will to help you."
          ]
        },
        {
          "id": "grammar-en-a2-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დაგეხმარები.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я вам помогу.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я вам помогу."
          },
          "sentence": "I will helps you. → ____",
          "answer": "I will help you.",
          "options": [
            "I will help you.",
            "I will to help you.",
            "I will helps you."
          ]
        },
        {
          "id": "grammar-en-a2-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წვიმა აპირებს.",
            "en": "Complete a different part of the sentence. Intended meaning: Скоро пойдёт дождь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Скоро пойдёт дождь."
          },
          "sentence": "It is going ____ rain.",
          "answer": "to",
          "options": [
            "to",
            "for",
            "at"
          ]
        },
        {
          "id": "grammar-en-a2-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წვიმა აპირებს.",
            "en": "Choose the complete sentence expressing: Скоро пойдёт дождь.",
            "ru": "Выберите полное предложение со значением: Скоро пойдёт дождь."
          },
          "sentence": "____",
          "answer": "It is going to rain.",
          "options": [
            "It is going to rain.",
            "It are going to rain.",
            "It will going to rain."
          ]
        },
        {
          "id": "grammar-en-a2-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წვიმა აპირებს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Скоро пойдёт дождь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Скоро пойдёт дождь."
          },
          "sentence": "It are going to rain. → ____",
          "answer": "It is going to rain.",
          "options": [
            "It is going to rain.",
            "It will going to rain.",
            "It are going to rain."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-4",
      "level": "A2",
      "title": {
        "ka": "შედარება",
        "en": "Comparatives and superlatives",
        "ru": "Сравнительная и превосходная степени"
      },
      "explanation": {
        "ka": "მოკლე ზედსართავთან გამოიყენე -er/-est, გრძელთან more/most. than შედარების მეორე წევრს უკავშირებს. good→better→best არაწესიერია. big→bigger აორმაგებს g-ს; happy→happier ცვლის y-ს. ერთ ფორმაში ნუ გააერთიანებ more-ს და -er-ს: more bigger არასწორია. უმაღლესი ხარისხი ხშირად the-ს მოითხოვს, თუ სხვა განმსაზღვრელი არ დგას.",
        "en": "Short adjectives often use -er/-est; longer ones use more/most. Than introduces the comparison. Good→better→best is irregular. Big→bigger doubles g; happy→happier changes y. Do not combine more and -er: more bigger is incorrect. A superlative commonly requires the unless another determiner is present.",
        "ru": "Короткие прилагательные часто имеют -er/-est, длинные — more/most. Than вводит объект сравнения. Good→better→best — неправильные формы. Big→bigger удваивает g; happy→happier меняет y. Не сочетайте more с -er: more bigger неверно. Превосходная степень обычно требует the, если нет другого определяющего слова."
      },
      "rules": [
        {
          "form": "small → smaller → the smallest",
          "detail": {
            "ka": "მოკლე ზედსართავთან გამოიყენე -er/-est, გრძელთან more/most. შეადარე მაგალითს: This room is smaller than mine. — ეს ოთახი ჩემსაზე პატარაა.",
            "en": "Short adjectives often use -er/-est; longer ones use more/most. Compare the example: This room is smaller than mine. — This room is smaller than mine.",
            "ru": "Короткие прилагательные часто имеют -er/-est, длинные — more/most. Сравните с примером: This room is smaller than mine. — Эта комната меньше моей."
          }
        },
        {
          "form": "more useful / the most useful",
          "detail": {
            "ka": "than შედარების მეორე წევრს უკავშირებს. შეადარე მაგალითს: This is the best route. — ეს საუკეთესო მარშრუტია.",
            "en": "Than introduces the comparison. Compare the example: This is the best route. — This is the best route.",
            "ru": "Than вводит объект сравнения. Сравните с примером: This is the best route. — Это лучший маршрут."
          }
        },
        {
          "form": "good → better → the best",
          "detail": {
            "ka": "good→better→best არაწესიერია. შეადარე მაგალითს: The guide is more useful. — გზამკვლევი უფრო სასარგებლოა.",
            "en": "Good→better→best is irregular. Compare the example: The guide is more useful. — The guide is more useful.",
            "ru": "Good→better→best — неправильные формы. Сравните с примером: The guide is more useful. — Путеводитель полезнее."
          }
        }
      ],
      "examples": [
        {
          "en": "This room is smaller than mine.",
          "ru": "Эта комната меньше моей.",
          "ka": "ეს ოთახი ჩემსაზე პატარაა."
        },
        {
          "en": "This is the best route.",
          "ru": "Это лучший маршрут.",
          "ka": "ეს საუკეთესო მარშრუტია."
        },
        {
          "en": "The guide is more useful.",
          "ru": "Путеводитель полезнее.",
          "ka": "გზამკვლევი უფრო სასარგებლოა."
        }
      ],
      "pitfalls": {
        "ka": "big→bigger აორმაგებს g-ს; happy→happier ცვლის y-ს. ერთ ფორმაში ნუ გააერთიანებ more-ს და -er-ს: more bigger არასწორია. უმაღლესი ხარისხი ხშირად the-ს მოითხოვს, თუ სხვა განმსაზღვრელი არ დგას.",
        "en": "Big→bigger doubles g; happy→happier changes y. Do not combine more and -er: more bigger is incorrect. A superlative commonly requires the unless another determiner is present.",
        "ru": "Big→bigger удваивает g; happy→happier меняет y. Не сочетайте more с -er: more bigger неверно. Превосходная степень обычно требует the, если нет другого определяющего слова."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ოთახი ჩემსაზე პატარაა.",
            "en": "Complete the sentence to express: Эта комната меньше моей.",
            "ru": "Заполните предложение со значением: Эта комната меньше моей."
          },
          "sentence": "This room is ____ than mine.",
          "answer": "smaller",
          "options": [
            "smaller",
            "smallest",
            "more small"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს საუკეთესო მარშრუტია.",
            "en": "Complete the sentence to express: Это лучший маршрут.",
            "ru": "Заполните предложение со значением: Это лучший маршрут."
          },
          "sentence": "This is the ____ route.",
          "answer": "best",
          "options": [
            "best",
            "better",
            "goodest"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გზამკვლევი უფრო სასარგებლოა.",
            "en": "Complete the sentence to express: Путеводитель полезнее.",
            "ru": "Заполните предложение со значением: Путеводитель полезнее."
          },
          "sentence": "The guide is ____ useful.",
          "answer": "more",
          "options": [
            "more",
            "most",
            "many"
          ]
        },
        {
          "id": "grammar-en-a2-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ოთახი ჩემსაზე პატარაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Эта комната меньше моей.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Эта комната меньше моей."
          },
          "sentence": "____ room is smaller than mine.",
          "answer": "This",
          "options": [
            "This",
            "These",
            "Those"
          ]
        },
        {
          "id": "grammar-en-a2-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ოთახი ჩემსაზე პატარაა.",
            "en": "Choose the complete sentence expressing: Эта комната меньше моей.",
            "ru": "Выберите полное предложение со значением: Эта комната меньше моей."
          },
          "sentence": "____",
          "answer": "This room is smaller than mine.",
          "options": [
            "This room is smaller than mine.",
            "This room is smallest than mine.",
            "This room is more small than mine."
          ]
        },
        {
          "id": "grammar-en-a2-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ოთახი ჩემსაზე პატარაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Эта комната меньше моей.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Эта комната меньше моей."
          },
          "sentence": "This room is smallest than mine. → ____",
          "answer": "This room is smaller than mine.",
          "options": [
            "This room is smaller than mine.",
            "This room is more small than mine.",
            "This room is smallest than mine."
          ]
        },
        {
          "id": "grammar-en-a2-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს საუკეთესო მარშრუტია.",
            "en": "Complete a different part of the sentence. Intended meaning: Это лучший маршрут.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это лучший маршрут."
          },
          "sentence": "____ is the best route.",
          "answer": "This",
          "options": [
            "This",
            "These",
            "Those"
          ]
        },
        {
          "id": "grammar-en-a2-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს საუკეთესო მარშრუტია.",
            "en": "Choose the complete sentence expressing: Это лучший маршрут.",
            "ru": "Выберите полное предложение со значением: Это лучший маршрут."
          },
          "sentence": "____",
          "answer": "This is the best route.",
          "options": [
            "This is the best route.",
            "This is the better route.",
            "This is the goodest route."
          ]
        },
        {
          "id": "grammar-en-a2-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს საუკეთესო მარშრუტია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это лучший маршрут.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это лучший маршрут."
          },
          "sentence": "This is the better route. → ____",
          "answer": "This is the best route.",
          "options": [
            "This is the best route.",
            "This is the goodest route.",
            "This is the better route."
          ]
        },
        {
          "id": "grammar-en-a2-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გზამკვლევი უფრო სასარგებლოა.",
            "en": "Complete a different part of the sentence. Intended meaning: Путеводитель полезнее.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Путеводитель полезнее."
          },
          "sentence": "The guide ____ more useful.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-a2-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გზამკვლევი უფრო სასარგებლოა.",
            "en": "Choose the complete sentence expressing: Путеводитель полезнее.",
            "ru": "Выберите полное предложение со значением: Путеводитель полезнее."
          },
          "sentence": "____",
          "answer": "The guide is more useful.",
          "options": [
            "The guide is more useful.",
            "The guide is most useful.",
            "The guide is many useful."
          ]
        },
        {
          "id": "grammar-en-a2-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გზამკვლევი უფრო სასარგებლოა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Путеводитель полезнее.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Путеводитель полезнее."
          },
          "sentence": "The guide is most useful. → ____",
          "answer": "The guide is more useful.",
          "options": [
            "The guide is more useful.",
            "The guide is many useful.",
            "The guide is most useful."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-5",
      "level": "A2",
      "title": {
        "ka": "მოვალეობა და რჩევა",
        "en": "Must, have to and should",
        "ru": "Must, have to и should"
      },
      "explanation": {
        "ka": "must/have to მოვალეობას გამოხატავს, should — რჩევას. mustn’t აკრძალვაა, don’t have to კი აუცილებლობის არარსებობა. have to პირის მიხედვით იცვლება: she has to; კითხვაა Does she have to? მოდალური should უცვლელია და პირდაპირ საწყის ზმნას იღებს. don’t have to არ თარგმნო აკრძალვად: არჩევანი ნებადართული რჩება.",
        "en": "Must/have to express obligation, should advice. Mustn’t means prohibition; don’t have to means there is no necessity. Have to changes for person: she has to; the question is Does she have to? Modal should is unchanged and directly takes the base verb. Don’t have to is not a prohibition: the action remains optional.",
        "ru": "Must/have to выражают обязанность, should — совет. Mustn’t означает запрет, don’t have to — отсутствие необходимости. Have to меняется по лицам: she has to; вопрос — Does she have to? Модальный should неизменяем и требует начальную форму. Don’t have to не запрещает действие: оно остаётся необязательным."
      },
      "rules": [
        {
          "form": "You must stop.",
          "detail": {
            "ka": "must/have to მოვალეობას გამოხატავს, should — რჩევას. შეადარე მაგალითს: You should rest. — უნდა დაისვენო.",
            "en": "Must/have to express obligation, should advice. Compare the example: You should rest. — You should rest.",
            "ru": "Must/have to выражают обязанность, should — совет. Сравните с примером: You should rest. — Вам стоит отдохнуть."
          }
        },
        {
          "form": "You should rest.",
          "detail": {
            "ka": "mustn’t აკრძალვაა, don’t have to კი აუცილებლობის არარსებობა. შეადარე მაგალითს: You must not park here. — აქ მანქანის გაჩერება აკრძალულია.",
            "en": "Mustn’t means prohibition; don’t have to means there is no necessity. Compare the example: You must not park here. — You must not park here.",
            "ru": "Mustn’t означает запрет, don’t have to — отсутствие необходимости. Сравните с примером: You must not park here. — Здесь нельзя парковаться."
          }
        },
        {
          "form": "You do not have to pay.",
          "detail": {
            "ka": "have to პირის მიხედვით იცვლება: she has to; კითხვაა Does she have to? შეადარე მაგალითს: We do not have to pay. — გადახდა არ გვჭირდება.",
            "en": "Have to changes for person: she has to; the question is Does she have to? Compare the example: We do not have to pay. — We do not have to pay.",
            "ru": "Have to меняется по лицам: she has to; вопрос — Does she have to? Сравните с примером: We do not have to pay. — Нам не нужно платить."
          }
        }
      ],
      "examples": [
        {
          "en": "You should rest.",
          "ru": "Вам стоит отдохнуть.",
          "ka": "უნდა დაისვენო."
        },
        {
          "en": "You must not park here.",
          "ru": "Здесь нельзя парковаться.",
          "ka": "აქ მანქანის გაჩერება აკრძალულია."
        },
        {
          "en": "We do not have to pay.",
          "ru": "Нам не нужно платить.",
          "ka": "გადახდა არ გვჭირდება."
        }
      ],
      "pitfalls": {
        "ka": "have to პირის მიხედვით იცვლება: she has to; კითხვაა Does she have to? მოდალური should უცვლელია და პირდაპირ საწყის ზმნას იღებს. don’t have to არ თარგმნო აკრძალვად: არჩევანი ნებადართული რჩება.",
        "en": "Have to changes for person: she has to; the question is Does she have to? Modal should is unchanged and directly takes the base verb. Don’t have to is not a prohibition: the action remains optional.",
        "ru": "Have to меняется по лицам: she has to; вопрос — Does she have to? Модальный should неизменяем и требует начальную форму. Don’t have to не запрещает действие: оно остаётся необязательным."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: უნდა დაისვენო.",
            "en": "Complete the sentence to express: Вам стоит отдохнуть.",
            "ru": "Заполните предложение со значением: Вам стоит отдохнуть."
          },
          "sentence": "You ____ rest.",
          "answer": "should",
          "options": [
            "should",
            "are",
            "does"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ მანქანის გაჩერება აკრძალულია.",
            "en": "Complete the sentence to express: Здесь нельзя парковаться.",
            "ru": "Заполните предложение со значением: Здесь нельзя парковаться."
          },
          "sentence": "You ____ not park here.",
          "answer": "must",
          "options": [
            "must",
            "have",
            "should to"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გადახდა არ გვჭირდება.",
            "en": "Complete the sentence to express: Нам не нужно платить.",
            "ru": "Заполните предложение со значением: Нам не нужно платить."
          },
          "sentence": "We do not ____ to pay.",
          "answer": "have",
          "options": [
            "have",
            "must",
            "should"
          ]
        },
        {
          "id": "grammar-en-a2-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: უნდა დაისვენო.",
            "en": "Complete a different part of the sentence. Intended meaning: Вам стоит отдохнуть.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вам стоит отдохнуть."
          },
          "sentence": "____ should rest.",
          "answer": "You",
          "options": [
            "You",
            "Your",
            "Yours"
          ]
        },
        {
          "id": "grammar-en-a2-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: უნდა დაისვენო.",
            "en": "Choose the complete sentence expressing: Вам стоит отдохнуть.",
            "ru": "Выберите полное предложение со значением: Вам стоит отдохнуть."
          },
          "sentence": "____",
          "answer": "You should rest.",
          "options": [
            "You should rest.",
            "You are rest.",
            "You does rest."
          ]
        },
        {
          "id": "grammar-en-a2-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: უნდა დაისვენო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вам стоит отдохнуть.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вам стоит отдохнуть."
          },
          "sentence": "You are rest. → ____",
          "answer": "You should rest.",
          "options": [
            "You should rest.",
            "You does rest.",
            "You are rest."
          ]
        },
        {
          "id": "grammar-en-a2-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ მანქანის გაჩერება აკრძალულია.",
            "en": "Complete a different part of the sentence. Intended meaning: Здесь нельзя парковаться.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Здесь нельзя парковаться."
          },
          "sentence": "____ must not park here.",
          "answer": "You",
          "options": [
            "You",
            "Your",
            "Yours"
          ]
        },
        {
          "id": "grammar-en-a2-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ მანქანის გაჩერება აკრძალულია.",
            "en": "Choose the complete sentence expressing: Здесь нельзя парковаться.",
            "ru": "Выберите полное предложение со значением: Здесь нельзя парковаться."
          },
          "sentence": "____",
          "answer": "You must not park here.",
          "options": [
            "You must not park here.",
            "You have not park here.",
            "You should to not park here."
          ]
        },
        {
          "id": "grammar-en-a2-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ მანქანის გაჩერება აკრძალულია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Здесь нельзя парковаться.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Здесь нельзя парковаться."
          },
          "sentence": "You have not park here. → ____",
          "answer": "You must not park here.",
          "options": [
            "You must not park here.",
            "You should to not park here.",
            "You have not park here."
          ]
        },
        {
          "id": "grammar-en-a2-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გადახდა არ გვჭირდება.",
            "en": "Complete a different part of the sentence. Intended meaning: Нам не нужно платить.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Нам не нужно платить."
          },
          "sentence": "____ do not have to pay.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a2-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გადახდა არ გვჭირდება.",
            "en": "Choose the complete sentence expressing: Нам не нужно платить.",
            "ru": "Выберите полное предложение со значением: Нам не нужно платить."
          },
          "sentence": "____",
          "answer": "We do not have to pay.",
          "options": [
            "We do not have to pay.",
            "We do not must to pay.",
            "We do not should to pay."
          ]
        },
        {
          "id": "grammar-en-a2-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გადახდა არ გვჭირდება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Нам не нужно платить.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Нам не нужно платить."
          },
          "sentence": "We do not must to pay. → ____",
          "answer": "We do not have to pay.",
          "options": [
            "We do not have to pay.",
            "We do not should to pay.",
            "We do not must to pay."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-6",
      "level": "A2",
      "title": {
        "ka": "გამოცდილება და შედეგი",
        "en": "Present perfect basics",
        "ru": "Основы Present Perfect"
      },
      "explanation": {
        "ka": "have/has + past participle გამოცდილებას ან აწმყოსთან დაკავშირებულ შედეგს აღწერს. განსაზღვრულ დასრულებულ დროსთან, მაგალითად yesterday, ჩვეულებრივ Past Simple გამოიყენე. მესამე ფორმა ზოგჯერ წარსულს ემთხვევა, მაგრამ go→went→gone განსხვავდება. ever კითხვაში სიცოცხლის გამოცდილებას ეკითხება; never უარყოფით აზრს ატარებს. I have saw არასწორია: საჭიროა I have seen.",
        "en": "Have/has + past participle expresses experience or a result connected to now. With a finished time such as yesterday, normally use past simple. The participle sometimes matches the past, but go→went→gone differs. Ever asks about experience up to now; never carries negative meaning. I have saw is incorrect: use I have seen.",
        "ru": "Have/has + третья форма выражает опыт или результат, связанный с настоящим. С завершённым временем, например yesterday, обычно нужен Past Simple. Третья форма иногда совпадает с прошедшей, но go→went→gone различается. Ever спрашивает об опыте до настоящего; never выражает отрицание. I have saw неверно: нужно I have seen."
      },
      "rules": [
        {
          "form": "I have visited Rome.",
          "detail": {
            "ka": "have/has + past participle გამოცდილებას ან აწმყოსთან დაკავშირებულ შედეგს აღწერს. შეადარე მაგალითს: I have visited Rome. — რომში ნამყოფი ვარ.",
            "en": "Have/has + past participle expresses experience or a result connected to now. Compare the example: I have visited Rome. — I have visited Rome.",
            "ru": "Have/has + третья форма выражает опыт или результат, связанный с настоящим. Сравните с примером: I have visited Rome. — Я бывала в Риме."
          }
        },
        {
          "form": "She has lost her key.",
          "detail": {
            "ka": "განსაზღვრულ დასრულებულ დროსთან, მაგალითად yesterday, ჩვეულებრივ Past Simple გამოიყენე. შეადარე მაგალითს: She has lost her key. — მან გასაღები დაკარგა.",
            "en": "With a finished time such as yesterday, normally use past simple. Compare the example: She has lost her key. — She has lost her key.",
            "ru": "С завершённым временем, например yesterday, обычно нужен Past Simple. Сравните с примером: She has lost her key. — Она потеряла ключ."
          }
        },
        {
          "form": "Have you ever been there?",
          "detail": {
            "ka": "მესამე ფორმა ზოგჯერ წარსულს ემთხვევა, მაგრამ go→went→gone განსხვავდება. შეადარე მაგალითს: Have you ever been there? — იქ ოდესმე ყოფილხარ?",
            "en": "The participle sometimes matches the past, but go→went→gone differs. Compare the example: Have you ever been there? — Have you ever been there?",
            "ru": "Третья форма иногда совпадает с прошедшей, но go→went→gone различается. Сравните с примером: Have you ever been there? — Вы когда-нибудь там были?"
          }
        }
      ],
      "examples": [
        {
          "en": "I have visited Rome.",
          "ru": "Я бывала в Риме.",
          "ka": "რომში ნამყოფი ვარ."
        },
        {
          "en": "She has lost her key.",
          "ru": "Она потеряла ключ.",
          "ka": "მან გასაღები დაკარგა."
        },
        {
          "en": "Have you ever been there?",
          "ru": "Вы когда-нибудь там были?",
          "ka": "იქ ოდესმე ყოფილხარ?"
        }
      ],
      "pitfalls": {
        "ka": "მესამე ფორმა ზოგჯერ წარსულს ემთხვევა, მაგრამ go→went→gone განსხვავდება. ever კითხვაში სიცოცხლის გამოცდილებას ეკითხება; never უარყოფით აზრს ატარებს. I have saw არასწორია: საჭიროა I have seen.",
        "en": "The participle sometimes matches the past, but go→went→gone differs. Ever asks about experience up to now; never carries negative meaning. I have saw is incorrect: use I have seen.",
        "ru": "Третья форма иногда совпадает с прошедшей, но go→went→gone различается. Ever спрашивает об опыте до настоящего; never выражает отрицание. I have saw неверно: нужно I have seen."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რომში ნამყოფი ვარ.",
            "en": "Complete the sentence to express: Я бывала в Риме.",
            "ru": "Заполните предложение со значением: Я бывала в Риме."
          },
          "sentence": "I ____ visited Rome.",
          "answer": "have",
          "options": [
            "have",
            "has",
            "am"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან გასაღები დაკარგა.",
            "en": "Complete the sentence to express: Она потеряла ключ.",
            "ru": "Заполните предложение со значением: Она потеряла ключ."
          },
          "sentence": "She has ____ her key.",
          "answer": "lost",
          "options": [
            "lost",
            "lose",
            "losing"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: იქ ოდესმე ყოფილხარ?",
            "en": "Complete the sentence to express: Вы когда-нибудь там были?",
            "ru": "Заполните предложение со значением: Вы когда-нибудь там были?"
          },
          "sentence": "____ you ever been there?",
          "answer": "Have",
          "options": [
            "Have",
            "Has",
            "Do"
          ]
        },
        {
          "id": "grammar-en-a2-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რომში ნამყოფი ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я бывала в Риме.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я бывала в Риме."
          },
          "sentence": "____ have visited Rome.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a2-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რომში ნამყოფი ვარ.",
            "en": "Choose the complete sentence expressing: Я бывала в Риме.",
            "ru": "Выберите полное предложение со значением: Я бывала в Риме."
          },
          "sentence": "____",
          "answer": "I have visited Rome.",
          "options": [
            "I have visited Rome.",
            "I has visited Rome.",
            "I am visited Rome."
          ]
        },
        {
          "id": "grammar-en-a2-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რომში ნამყოფი ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я бывала в Риме.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я бывала в Риме."
          },
          "sentence": "I has visited Rome. → ____",
          "answer": "I have visited Rome.",
          "options": [
            "I have visited Rome.",
            "I am visited Rome.",
            "I has visited Rome."
          ]
        },
        {
          "id": "grammar-en-a2-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან გასაღები დაკარგა.",
            "en": "Complete a different part of the sentence. Intended meaning: Она потеряла ключ.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она потеряла ключ."
          },
          "sentence": "____ has lost her key.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a2-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან გასაღები დაკარგა.",
            "en": "Choose the complete sentence expressing: Она потеряла ключ.",
            "ru": "Выберите полное предложение со значением: Она потеряла ключ."
          },
          "sentence": "____",
          "answer": "She has lost her key.",
          "options": [
            "She has lost her key.",
            "She has lose her key.",
            "She has losing her key."
          ]
        },
        {
          "id": "grammar-en-a2-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან გასაღები დაკარგა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она потеряла ключ.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она потеряла ключ."
          },
          "sentence": "She has lose her key. → ____",
          "answer": "She has lost her key.",
          "options": [
            "She has lost her key.",
            "She has losing her key.",
            "She has lose her key."
          ]
        },
        {
          "id": "grammar-en-a2-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: იქ ოდესმე ყოფილხარ?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы когда-нибудь там были?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы когда-нибудь там были?"
          },
          "sentence": "Have you ever ____ there?",
          "answer": "been",
          "options": [
            "been",
            "be",
            "being"
          ]
        },
        {
          "id": "grammar-en-a2-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: იქ ოდესმე ყოფილხარ?",
            "en": "Choose the complete sentence expressing: Вы когда-нибудь там были?",
            "ru": "Выберите полное предложение со значением: Вы когда-нибудь там были?"
          },
          "sentence": "____",
          "answer": "Have you ever been there?",
          "options": [
            "Have you ever been there?",
            "Has you ever been there?",
            "Do you ever been there?"
          ]
        },
        {
          "id": "grammar-en-a2-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: იქ ოდესმე ყოფილხარ?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы когда-нибудь там были?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы когда-нибудь там были?"
          },
          "sentence": "Has you ever been there? → ____",
          "answer": "Have you ever been there?",
          "options": [
            "Have you ever been there?",
            "Do you ever been there?",
            "Has you ever been there?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-7",
      "level": "A2",
      "title": {
        "ka": "საჭიროება და სურვილი",
        "en": "Infinitives and -ing forms",
        "ru": "Инфинитив и форма -ing"
      },
      "explanation": {
        "ka": "want/need/plan-ის შემდეგ ხშირად to + ზმნაა. enjoy-ის შემდეგ -ing ფორმაა. არ ივარაუდო, რომ ყველა ზმნას ერთი მოდელი მოჰყვება. to აქ ინფინიტივის ნიშანია და არა მიმართულების წინდებული. enjoy-ს ობიექტად პროცესის სახელი მოსდევს: enjoy swimming. მოდელის შეცვლამ მნიშვნელობაც შეიძლება შეცვალოს, მაგალითად stop doing და stop to do განსხვავდება.",
        "en": "Want/need/plan commonly take to + verb. Enjoy takes an -ing form. Do not assume that every verb follows the same pattern. To here marks an infinitive rather than direction. Enjoy takes an activity as its object: enjoy swimming. Changing the pattern can change meaning: stop doing and stop to do are different.",
        "ru": "После want/need/plan обычно используется to + глагол. После enjoy нужна форма -ing. У разных глаголов модели могут различаться. To здесь — показатель инфинитива, а не направления. Enjoy принимает название процесса: enjoy swimming. Изменение модели может менять значение: stop doing и stop to do различаются."
      },
      "rules": [
        {
          "form": "want to go",
          "detail": {
            "ka": "want/need/plan-ის შემდეგ ხშირად to + ზმნაა. შეადარე მაგალითს: I want to learn. — სწავლა მინდა.",
            "en": "Want/need/plan commonly take to + verb. Compare the example: I want to learn. — I want to learn.",
            "ru": "После want/need/plan обычно используется to + глагол. Сравните с примером: I want to learn. — Я хочу учиться."
          }
        },
        {
          "form": "need to study",
          "detail": {
            "ka": "enjoy-ის შემდეგ -ing ფორმაა. შეადარე მაგალითს: She enjoys reading. — მას კითხვა მოსწონს.",
            "en": "Enjoy takes an -ing form. Compare the example: She enjoys reading. — She enjoys reading.",
            "ru": "После enjoy нужна форма -ing. Сравните с примером: She enjoys reading. — Ей нравится читать."
          }
        },
        {
          "form": "enjoy reading",
          "detail": {
            "ka": "არ ივარაუდო, რომ ყველა ზმნას ერთი მოდელი მოჰყვება. შეადარე მაგალითს: We need to leave. — უნდა წავიდეთ.",
            "en": "Do not assume that every verb follows the same pattern. Compare the example: We need to leave. — We need to leave.",
            "ru": "У разных глаголов модели могут различаться. Сравните с примером: We need to leave. — Нам нужно уходить."
          }
        }
      ],
      "examples": [
        {
          "en": "I want to learn.",
          "ru": "Я хочу учиться.",
          "ka": "სწავლა მინდა."
        },
        {
          "en": "She enjoys reading.",
          "ru": "Ей нравится читать.",
          "ka": "მას კითხვა მოსწონს."
        },
        {
          "en": "We need to leave.",
          "ru": "Нам нужно уходить.",
          "ka": "უნდა წავიდეთ."
        }
      ],
      "pitfalls": {
        "ka": "to აქ ინფინიტივის ნიშანია და არა მიმართულების წინდებული. enjoy-ს ობიექტად პროცესის სახელი მოსდევს: enjoy swimming. მოდელის შეცვლამ მნიშვნელობაც შეიძლება შეცვალოს, მაგალითად stop doing და stop to do განსხვავდება.",
        "en": "To here marks an infinitive rather than direction. Enjoy takes an activity as its object: enjoy swimming. Changing the pattern can change meaning: stop doing and stop to do are different.",
        "ru": "To здесь — показатель инфинитива, а не направления. Enjoy принимает название процесса: enjoy swimming. Изменение модели может менять значение: stop doing и stop to do различаются."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სწავლა მინდა.",
            "en": "Complete the sentence to express: Я хочу учиться.",
            "ru": "Заполните предложение со значением: Я хочу учиться."
          },
          "sentence": "I want ____.",
          "answer": "to learn",
          "options": [
            "to learn",
            "learning",
            "learns"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას კითხვა მოსწონს.",
            "en": "Complete the sentence to express: Ей нравится читать.",
            "ru": "Заполните предложение со значением: Ей нравится читать."
          },
          "sentence": "She enjoys ____.",
          "answer": "reading",
          "options": [
            "reading",
            "to read",
            "read"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: უნდა წავიდეთ.",
            "en": "Complete the sentence to express: Нам нужно уходить.",
            "ru": "Заполните предложение со значением: Нам нужно уходить."
          },
          "sentence": "We need ____.",
          "answer": "to leave",
          "options": [
            "to leave",
            "leaving",
            "leaves"
          ]
        },
        {
          "id": "grammar-en-a2-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სწავლა მინდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Я хочу учиться.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я хочу учиться."
          },
          "sentence": "____ want to learn.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-a2-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სწავლა მინდა.",
            "en": "Choose the complete sentence expressing: Я хочу учиться.",
            "ru": "Выберите полное предложение со значением: Я хочу учиться."
          },
          "sentence": "____",
          "answer": "I want to learn.",
          "options": [
            "I want to learn.",
            "I want learning.",
            "I want learns."
          ]
        },
        {
          "id": "grammar-en-a2-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სწავლა მინდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я хочу учиться.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я хочу учиться."
          },
          "sentence": "I want learning. → ____",
          "answer": "I want to learn.",
          "options": [
            "I want to learn.",
            "I want learns.",
            "I want learning."
          ]
        },
        {
          "id": "grammar-en-a2-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მას კითხვა მოსწონს.",
            "en": "Complete a different part of the sentence. Intended meaning: Ей нравится читать.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Ей нравится читать."
          },
          "sentence": "____ enjoys reading.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-a2-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მას კითხვა მოსწონს.",
            "en": "Choose the complete sentence expressing: Ей нравится читать.",
            "ru": "Выберите полное предложение со значением: Ей нравится читать."
          },
          "sentence": "____",
          "answer": "She enjoys reading.",
          "options": [
            "She enjoys reading.",
            "She enjoys to read.",
            "She enjoys read."
          ]
        },
        {
          "id": "grammar-en-a2-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მას კითხვა მოსწონს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Ей нравится читать.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Ей нравится читать."
          },
          "sentence": "She enjoys to read. → ____",
          "answer": "She enjoys reading.",
          "options": [
            "She enjoys reading.",
            "She enjoys read.",
            "She enjoys to read."
          ]
        },
        {
          "id": "grammar-en-a2-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: უნდა წავიდეთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Нам нужно уходить.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Нам нужно уходить."
          },
          "sentence": "____ need to leave.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a2-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: უნდა წავიდეთ.",
            "en": "Choose the complete sentence expressing: Нам нужно уходить.",
            "ru": "Выберите полное предложение со значением: Нам нужно уходить."
          },
          "sentence": "____",
          "answer": "We need to leave.",
          "options": [
            "We need to leave.",
            "We need leaving.",
            "We need leaves."
          ]
        },
        {
          "id": "grammar-en-a2-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: უნდა წავიდეთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Нам нужно уходить.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Нам нужно уходить."
          },
          "sentence": "We need leaving. → ____",
          "answer": "We need to leave.",
          "options": [
            "We need to leave.",
            "We need leaves.",
            "We need leaving."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-a2-8",
      "level": "A2",
      "title": {
        "ka": "პირობა და დრო",
        "en": "Zero and first conditionals",
        "ru": "Нулевое и первое условные"
      },
      "explanation": {
        "ka": "ზოგადი კანონზომიერებაა if + Present Simple, Present Simple. რეალური მომავლის პირობაში if-ს მოსდევს Present Simple, მთავარ ნაწილში ხშირად will. if-ნაწილი წინ დგომისას ხშირად მძიმით გამოიყოფა. მომავალ მნიშვნელობასთან if-ს შემდეგ ჩვეულებრივ will არ იწერება. zero conditional წესს აღწერს, first conditional კი კონკრეტულ შესაძლო მომავალ შედეგს.",
        "en": "General truths use if + present simple, present simple. Real future conditions use present simple after if and often will in the main clause. An initial if-clause is normally followed by a comma. A future meaning does not normally put will after if. Zero conditional states a rule; first conditional concerns a particular possible future outcome.",
        "ru": "Общие закономерности: if + Present Simple, Present Simple. В реальном будущем условии после if нужен Present Simple, а в главной части часто will. Начальная часть с if обычно отделяется запятой. Будущее значение обычно не требует will после if. Нулевое условное описывает закономерность, первое — конкретный возможный результат в будущем."
      },
      "rules": [
        {
          "form": "If water freezes, it expands.",
          "detail": {
            "ka": "ზოგადი კანონზომიერებაა if + Present Simple, Present Simple. შეადარე მაგალითს: If it rains, we will stay home. — თუ იწვიმებს, სახლში დავრჩებით.",
            "en": "General truths use if + present simple, present simple. Compare the example: If it rains, we will stay home. — If it rains, we will stay home.",
            "ru": "Общие закономерности: if + Present Simple, Present Simple. Сравните с примером: If it rains, we will stay home. — Если пойдёт дождь, мы останемся дома."
          }
        },
        {
          "form": "If it rains, we will stay home.",
          "detail": {
            "ka": "რეალური მომავლის პირობაში if-ს მოსდევს Present Simple, მთავარ ნაწილში ხშირად will. შეადარე მაგალითს: If you heat ice, it melts. — თუ ყინულს გაათბობ, ის დნება.",
            "en": "Real future conditions use present simple after if and often will in the main clause. Compare the example: If you heat ice, it melts. — If you heat ice, it melts.",
            "ru": "В реальном будущем условии после if нужен Present Simple, а в главной части часто will. Сравните с примером: If you heat ice, it melts. — Если нагреть лёд, он тает."
          }
        },
        {
          "form": "We will call when we arrive.",
          "detail": {
            "ka": "if-ნაწილი წინ დგომისას ხშირად მძიმით გამოიყოფა. შეადარე მაგალითს: We will call when we arrive. — როცა ჩავალთ, დავრეკავთ.",
            "en": "An initial if-clause is normally followed by a comma. Compare the example: We will call when we arrive. — We will call when we arrive.",
            "ru": "Начальная часть с if обычно отделяется запятой. Сравните с примером: We will call when we arrive. — Мы позвоним, когда приедем."
          }
        }
      ],
      "examples": [
        {
          "en": "If it rains, we will stay home.",
          "ru": "Если пойдёт дождь, мы останемся дома.",
          "ka": "თუ იწვიმებს, სახლში დავრჩებით."
        },
        {
          "en": "If you heat ice, it melts.",
          "ru": "Если нагреть лёд, он тает.",
          "ka": "თუ ყინულს გაათბობ, ის დნება."
        },
        {
          "en": "We will call when we arrive.",
          "ru": "Мы позвоним, когда приедем.",
          "ka": "როცა ჩავალთ, დავრეკავთ."
        }
      ],
      "pitfalls": {
        "ka": "if-ნაწილი წინ დგომისას ხშირად მძიმით გამოიყოფა. მომავალ მნიშვნელობასთან if-ს შემდეგ ჩვეულებრივ will არ იწერება. zero conditional წესს აღწერს, first conditional კი კონკრეტულ შესაძლო მომავალ შედეგს.",
        "en": "An initial if-clause is normally followed by a comma. A future meaning does not normally put will after if. Zero conditional states a rule; first conditional concerns a particular possible future outcome.",
        "ru": "Начальная часть с if обычно отделяется запятой. Будущее значение обычно не требует will после if. Нулевое условное описывает закономерность, первое — конкретный возможный результат в будущем."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: თუ იწვიმებს, სახლში დავრჩებით.",
            "en": "Complete the sentence to express: Если пойдёт дождь, мы останемся дома.",
            "ru": "Заполните предложение со значением: Если пойдёт дождь, мы останемся дома."
          },
          "sentence": "If it ____, we will stay home.",
          "answer": "rains",
          "options": [
            "rains",
            "will rain",
            "raining"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: თუ ყინულს გაათბობ, ის დნება.",
            "en": "Complete the sentence to express: Если нагреть лёд, он тает.",
            "ru": "Заполните предложение со значением: Если нагреть лёд, он тает."
          },
          "sentence": "If you heat ice, it ____.",
          "answer": "melts",
          "options": [
            "melts",
            "melt",
            "melting"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: როცა ჩავალთ, დავრეკავთ.",
            "en": "Complete the sentence to express: Мы позвоним, когда приедем.",
            "ru": "Заполните предложение со значением: Мы позвоним, когда приедем."
          },
          "sentence": "We will call when we ____.",
          "answer": "arrive",
          "options": [
            "arrive",
            "will arrive",
            "arriving"
          ]
        },
        {
          "id": "grammar-en-a2-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: თუ იწვიმებს, სახლში დავრჩებით.",
            "en": "Complete a different part of the sentence. Intended meaning: Если пойдёт дождь, мы останемся дома.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Если пойдёт дождь, мы останемся дома."
          },
          "sentence": "____ it rains, we will stay home.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-a2-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: თუ იწვიმებს, სახლში დავრჩებით.",
            "en": "Choose the complete sentence expressing: Если пойдёт дождь, мы останемся дома.",
            "ru": "Выберите полное предложение со значением: Если пойдёт дождь, мы останемся дома."
          },
          "sentence": "____",
          "answer": "If it rains, we will stay home.",
          "options": [
            "If it rains, we will stay home.",
            "If it will rain, we will stay home.",
            "If it raining, we will stay home."
          ]
        },
        {
          "id": "grammar-en-a2-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: თუ იწვიმებს, სახლში დავრჩებით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Если пойдёт дождь, мы останемся дома.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Если пойдёт дождь, мы останемся дома."
          },
          "sentence": "If it will rain, we will stay home. → ____",
          "answer": "If it rains, we will stay home.",
          "options": [
            "If it rains, we will stay home.",
            "If it raining, we will stay home.",
            "If it will rain, we will stay home."
          ]
        },
        {
          "id": "grammar-en-a2-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: თუ ყინულს გაათბობ, ის დნება.",
            "en": "Complete a different part of the sentence. Intended meaning: Если нагреть лёд, он тает.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Если нагреть лёд, он тает."
          },
          "sentence": "____ you heat ice, it melts.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-a2-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: თუ ყინულს გაათბობ, ის დნება.",
            "en": "Choose the complete sentence expressing: Если нагреть лёд, он тает.",
            "ru": "Выберите полное предложение со значением: Если нагреть лёд, он тает."
          },
          "sentence": "____",
          "answer": "If you heat ice, it melts.",
          "options": [
            "If you heat ice, it melts.",
            "If you heat ice, it melt.",
            "If you heat ice, it melting."
          ]
        },
        {
          "id": "grammar-en-a2-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: თუ ყინულს გაათბობ, ის დნება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Если нагреть лёд, он тает.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Если нагреть лёд, он тает."
          },
          "sentence": "If you heat ice, it melt. → ____",
          "answer": "If you heat ice, it melts.",
          "options": [
            "If you heat ice, it melts.",
            "If you heat ice, it melting.",
            "If you heat ice, it melt."
          ]
        },
        {
          "id": "grammar-en-a2-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: როცა ჩავალთ, დავრეკავთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Мы позвоним, когда приедем.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мы позвоним, когда приедем."
          },
          "sentence": "____ will call when we arrive.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-a2-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: როცა ჩავალთ, დავრეკავთ.",
            "en": "Choose the complete sentence expressing: Мы позвоним, когда приедем.",
            "ru": "Выберите полное предложение со значением: Мы позвоним, когда приедем."
          },
          "sentence": "____",
          "answer": "We will call when we arrive.",
          "options": [
            "We will call when we arrive.",
            "We will call when we will arrive.",
            "We will call when we arriving."
          ]
        },
        {
          "id": "grammar-en-a2-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: როცა ჩავალთ, დავრეკავთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мы позвоним, когда приедем.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мы позвоним, когда приедем."
          },
          "sentence": "We will call when we will arrive. → ____",
          "answer": "We will call when we arrive.",
          "options": [
            "We will call when we arrive.",
            "We will call when we arriving.",
            "We will call when we will arrive."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-1",
      "level": "B1",
      "title": {
        "ka": "დროის არჩევა",
        "en": "Present perfect or past simple?",
        "ru": "Present Perfect или Past Simple?"
      },
      "explanation": {
        "ka": "დასრულებული დრო Past Simple-ს მოითხოვს; დაუმთავრებელი პერიოდი და დღემდე გამოცდილება ხშირად Present Perfect-ს. since საწყის მომენტს აღნიშნავს, for — ხანგრძლივობას. Have you been…? გამოცდილებაზე კითხულობს; When did you go…? ზუსტ დროს ეძებს. since-ს საწყისი თარიღი ან მოვლენა მოსდევს, for-ს — დროის მონაკვეთი. finished yesterday Present Perfect-სთან ნუ დააწყვილებ.",
        "en": "A finished time calls for past simple; an unfinished period and experience up to now often use present perfect. Since marks a starting point, for a duration. Have you been…? asks about experience; When did you go…? asks for the specific time. Since takes a starting date or event; for takes a length of time. Do not pair finished yesterday with present perfect.",
        "ru": "Завершённое время требует Past Simple; незавершённый период и опыт до настоящего часто передаются Present Perfect. Since указывает начало, for — длительность. Have you been…? спрашивает об опыте; When did you go…? — о конкретном времени. После since идёт начало или событие, после for — длительность. Не сочетайте завершённое yesterday с Present Perfect."
      },
      "rules": [
        {
          "form": "I saw her yesterday.",
          "detail": {
            "ka": "დასრულებული დრო Past Simple-ს მოითხოვს; დაუმთავრებელი პერიოდი და დღემდე გამოცდილება ხშირად Present Perfect-ს. შეადარე მაგალითს: I saw her yesterday. — გუშინ ის ვნახე.",
            "en": "A finished time calls for past simple; an unfinished period and experience up to now often use present perfect. Compare the example: I saw her yesterday. — I saw her yesterday.",
            "ru": "Завершённое время требует Past Simple; незавершённый период и опыт до настоящего часто передаются Present Perfect. Сравните с примером: I saw her yesterday. — Я видела её вчера."
          }
        },
        {
          "form": "I have seen her this week.",
          "detail": {
            "ka": "since საწყის მომენტს აღნიშნავს, for — ხანგრძლივობას. შეადარე მაგალითს: We have lived here since 2020. — აქ 2020 წლიდან ვცხოვრობთ.",
            "en": "Since marks a starting point, for a duration. Compare the example: We have lived here since 2020. — We have lived here since 2020.",
            "ru": "Since указывает начало, for — длительность. Сравните с примером: We have lived here since 2020. — Мы живём здесь с 2020 года."
          }
        },
        {
          "form": "since 2020 / for three years",
          "detail": {
            "ka": "Have you been…? შეადარე მაგალითს: She has worked here for two years. — ის აქ ორი წელია მუშაობს.",
            "en": "Have you been…? Compare the example: She has worked here for two years. — She has worked here for two years.",
            "ru": "Have you been…? Сравните с примером: She has worked here for two years. — Она работает здесь два года."
          }
        }
      ],
      "examples": [
        {
          "en": "I saw her yesterday.",
          "ru": "Я видела её вчера.",
          "ka": "გუშინ ის ვნახე."
        },
        {
          "en": "We have lived here since 2020.",
          "ru": "Мы живём здесь с 2020 года.",
          "ka": "აქ 2020 წლიდან ვცხოვრობთ."
        },
        {
          "en": "She has worked here for two years.",
          "ru": "Она работает здесь два года.",
          "ka": "ის აქ ორი წელია მუშაობს."
        }
      ],
      "pitfalls": {
        "ka": "Have you been…? გამოცდილებაზე კითხულობს; When did you go…? ზუსტ დროს ეძებს. since-ს საწყისი თარიღი ან მოვლენა მოსდევს, for-ს — დროის მონაკვეთი. finished yesterday Present Perfect-სთან ნუ დააწყვილებ.",
        "en": "Have you been…? asks about experience; When did you go…? asks for the specific time. Since takes a starting date or event; for takes a length of time. Do not pair finished yesterday with present perfect.",
        "ru": "Have you been…? спрашивает об опыте; When did you go…? — о конкретном времени. После since идёт начало или событие, после for — длительность. Не сочетайте завершённое yesterday с Present Perfect."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გუშინ ის ვნახე.",
            "en": "Complete the sentence to express: Я видела её вчера.",
            "ru": "Заполните предложение со значением: Я видела её вчера."
          },
          "sentence": "I ____ her yesterday.",
          "answer": "saw",
          "options": [
            "saw",
            "have seen",
            "seen"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ 2020 წლიდან ვცხოვრობთ.",
            "en": "Complete the sentence to express: Мы живём здесь с 2020 года.",
            "ru": "Заполните предложение со значением: Мы живём здесь с 2020 года."
          },
          "sentence": "We have lived here ____ 2020.",
          "answer": "since",
          "options": [
            "since",
            "for",
            "during"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის აქ ორი წელია მუშაობს.",
            "en": "Complete the sentence to express: Она работает здесь два года.",
            "ru": "Заполните предложение со значением: Она работает здесь два года."
          },
          "sentence": "She has worked here ____ two years.",
          "answer": "for",
          "options": [
            "for",
            "since",
            "at"
          ]
        },
        {
          "id": "grammar-en-b1-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გუშინ ის ვნახე.",
            "en": "Complete a different part of the sentence. Intended meaning: Я видела её вчера.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я видела её вчера."
          },
          "sentence": "____ saw her yesterday.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b1-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გუშინ ის ვნახე.",
            "en": "Choose the complete sentence expressing: Я видела её вчера.",
            "ru": "Выберите полное предложение со значением: Я видела её вчера."
          },
          "sentence": "____",
          "answer": "I saw her yesterday.",
          "options": [
            "I saw her yesterday.",
            "I have seen her yesterday.",
            "I seen her yesterday."
          ]
        },
        {
          "id": "grammar-en-b1-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გუშინ ის ვნახე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я видела её вчера.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я видела её вчера."
          },
          "sentence": "I have seen her yesterday. → ____",
          "answer": "I saw her yesterday.",
          "options": [
            "I saw her yesterday.",
            "I seen her yesterday.",
            "I have seen her yesterday."
          ]
        },
        {
          "id": "grammar-en-b1-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ 2020 წლიდან ვცხოვრობთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Мы живём здесь с 2020 года.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мы живём здесь с 2020 года."
          },
          "sentence": "____ have lived here since 2020.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-b1-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ 2020 წლიდან ვცხოვრობთ.",
            "en": "Choose the complete sentence expressing: Мы живём здесь с 2020 года.",
            "ru": "Выберите полное предложение со значением: Мы живём здесь с 2020 года."
          },
          "sentence": "____",
          "answer": "We have lived here since 2020.",
          "options": [
            "We have lived here since 2020.",
            "We have lived here for 2020.",
            "We have lived here during 2020."
          ]
        },
        {
          "id": "grammar-en-b1-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ 2020 წლიდან ვცხოვრობთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мы живём здесь с 2020 года.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мы живём здесь с 2020 года."
          },
          "sentence": "We have lived here for 2020. → ____",
          "answer": "We have lived here since 2020.",
          "options": [
            "We have lived here since 2020.",
            "We have lived here during 2020.",
            "We have lived here for 2020."
          ]
        },
        {
          "id": "grammar-en-b1-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის აქ ორი წელია მუშაობს.",
            "en": "Complete a different part of the sentence. Intended meaning: Она работает здесь два года.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она работает здесь два года."
          },
          "sentence": "____ has worked here for two years.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის აქ ორი წელია მუშაობს.",
            "en": "Choose the complete sentence expressing: Она работает здесь два года.",
            "ru": "Выберите полное предложение со значением: Она работает здесь два года."
          },
          "sentence": "____",
          "answer": "She has worked here for two years.",
          "options": [
            "She has worked here for two years.",
            "She has worked here since two years.",
            "She has worked here at two years."
          ]
        },
        {
          "id": "grammar-en-b1-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის აქ ორი წელია მუშაობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она работает здесь два года.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она работает здесь два года."
          },
          "sentence": "She has worked here since two years. → ____",
          "answer": "She has worked here for two years.",
          "options": [
            "She has worked here for two years.",
            "She has worked here at two years.",
            "She has worked here since two years."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-2",
      "level": "B1",
      "title": {
        "ka": "წარსულის წინმსწრები მოქმედება",
        "en": "Past perfect",
        "ru": "Past Perfect"
      },
      "explanation": {
        "ka": "had + past participle აღწერს მოქმედებას, რომელიც სხვა წარსულ მოვლენამდე დასრულდა. ორივე წარსული მოვლენის თანმიმდევრობა კონტექსტიდან შეამოწმე. had ყველა პირთან ერთნაირია; უარყოფაა hadn’t. წარსულის ორ მოვლენას ავტომატურად ორივეს Past Perfect არ სჭირდება: მოგვიანო მოვლენა ხშირად Past Simple-ში რჩება. gone და went განსხვავებული ფორმებია.",
        "en": "Had + past participle describes an action completed before another past event. Use context to establish the sequence of the two events. Had is the same for all persons; the negative is hadn’t. Two past events do not automatically both need past perfect: the later event often stays in past simple. Gone and went are different forms.",
        "ru": "Had + третья форма описывает действие, завершившееся до другого события в прошлом. Определяйте последовательность по контексту. Had одинаково для всех лиц; отрицание — hadn’t. Два прошлых события не требуют двух Past Perfect: более позднее часто остаётся в Past Simple. Gone и went — разные формы."
      },
      "rules": [
        {
          "form": "She had left before I arrived.",
          "detail": {
            "ka": "had + past participle აღწერს მოქმედებას, რომელიც სხვა წარსულ მოვლენამდე დასრულდა. შეადარე მაგალითს: She had left before I arrived. — ის ჩემს მოსვლამდე წავიდა.",
            "en": "Had + past participle describes an action completed before another past event. Compare the example: She had left before I arrived. — She had left before I arrived.",
            "ru": "Had + третья форма описывает действие, завершившееся до другого события в прошлом. Сравните с примером: She had left before I arrived. — Она ушла до моего прихода."
          }
        },
        {
          "form": "We had not met before.",
          "detail": {
            "ka": "ორივე წარსული მოვლენის თანმიმდევრობა კონტექსტიდან შეამოწმე. შეადარე მაგალითს: We had not met before. — მანამდე არ შევხვედრივართ.",
            "en": "Use context to establish the sequence of the two events. Compare the example: We had not met before. — We had not met before.",
            "ru": "Определяйте последовательность по контексту. Сравните с примером: We had not met before. — Раньше мы не встречались."
          }
        },
        {
          "form": "Had you booked a room?",
          "detail": {
            "ka": "had ყველა პირთან ერთნაირია; უარყოფაა hadn’t. შეადარე მაგალითს: Had you booked a room? — ნომერი უკვე დაჯავშნილი გქონდა?",
            "en": "Had is the same for all persons; the negative is hadn’t. Compare the example: Had you booked a room? — Had you booked a room?",
            "ru": "Had одинаково для всех лиц; отрицание — hadn’t. Сравните с примером: Had you booked a room? — Вы уже забронировали номер?"
          }
        }
      ],
      "examples": [
        {
          "en": "She had left before I arrived.",
          "ru": "Она ушла до моего прихода.",
          "ka": "ის ჩემს მოსვლამდე წავიდა."
        },
        {
          "en": "We had not met before.",
          "ru": "Раньше мы не встречались.",
          "ka": "მანამდე არ შევხვედრივართ."
        },
        {
          "en": "Had you booked a room?",
          "ru": "Вы уже забронировали номер?",
          "ka": "ნომერი უკვე დაჯავშნილი გქონდა?"
        }
      ],
      "pitfalls": {
        "ka": "had ყველა პირთან ერთნაირია; უარყოფაა hadn’t. წარსულის ორ მოვლენას ავტომატურად ორივეს Past Perfect არ სჭირდება: მოგვიანო მოვლენა ხშირად Past Simple-ში რჩება. gone და went განსხვავებული ფორმებია.",
        "en": "Had is the same for all persons; the negative is hadn’t. Two past events do not automatically both need past perfect: the later event often stays in past simple. Gone and went are different forms.",
        "ru": "Had одинаково для всех лиц; отрицание — hadn’t. Два прошлых события не требуют двух Past Perfect: более позднее часто остаётся в Past Simple. Gone и went — разные формы."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ჩემს მოსვლამდე წავიდა.",
            "en": "Complete the sentence to express: Она ушла до моего прихода.",
            "ru": "Заполните предложение со значением: Она ушла до моего прихода."
          },
          "sentence": "She ____ left before I arrived.",
          "answer": "had",
          "options": [
            "had",
            "has",
            "was"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მანამდე არ შევხვედრივართ.",
            "en": "Complete the sentence to express: Раньше мы не встречались.",
            "ru": "Заполните предложение со значением: Раньше мы не встречались."
          },
          "sentence": "We had not ____ before.",
          "answer": "met",
          "options": [
            "met",
            "meet",
            "meeting"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნომერი უკვე დაჯავშნილი გქონდა?",
            "en": "Complete the sentence to express: Вы уже забронировали номер?",
            "ru": "Заполните предложение со значением: Вы уже забронировали номер?"
          },
          "sentence": "____ you booked a room?",
          "answer": "Had",
          "options": [
            "Had",
            "Have",
            "Did"
          ]
        },
        {
          "id": "grammar-en-b1-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ჩემს მოსვლამდე წავიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Она ушла до моего прихода.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она ушла до моего прихода."
          },
          "sentence": "____ had left before I arrived.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ჩემს მოსვლამდე წავიდა.",
            "en": "Choose the complete sentence expressing: Она ушла до моего прихода.",
            "ru": "Выберите полное предложение со значением: Она ушла до моего прихода."
          },
          "sentence": "____",
          "answer": "She had left before I arrived.",
          "options": [
            "She had left before I arrived.",
            "She has left before I arrived.",
            "She was left before I arrived."
          ]
        },
        {
          "id": "grammar-en-b1-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ჩემს მოსვლამდე წავიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она ушла до моего прихода.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она ушла до моего прихода."
          },
          "sentence": "She has left before I arrived. → ____",
          "answer": "She had left before I arrived.",
          "options": [
            "She had left before I arrived.",
            "She was left before I arrived.",
            "She has left before I arrived."
          ]
        },
        {
          "id": "grammar-en-b1-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მანამდე არ შევხვედრივართ.",
            "en": "Complete a different part of the sentence. Intended meaning: Раньше мы не встречались.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Раньше мы не встречались."
          },
          "sentence": "____ had not met before.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-b1-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მანამდე არ შევხვედრივართ.",
            "en": "Choose the complete sentence expressing: Раньше мы не встречались.",
            "ru": "Выберите полное предложение со значением: Раньше мы не встречались."
          },
          "sentence": "____",
          "answer": "We had not met before.",
          "options": [
            "We had not met before.",
            "We had not meet before.",
            "We had not meeting before."
          ]
        },
        {
          "id": "grammar-en-b1-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მანამდე არ შევხვედრივართ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Раньше мы не встречались.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Раньше мы не встречались."
          },
          "sentence": "We had not meet before. → ____",
          "answer": "We had not met before.",
          "options": [
            "We had not met before.",
            "We had not meeting before.",
            "We had not meet before."
          ]
        },
        {
          "id": "grammar-en-b1-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნომერი უკვე დაჯავშნილი გქონდა?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы уже забронировали номер?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы уже забронировали номер?"
          },
          "sentence": "Had you ____ a room?",
          "answer": "booked",
          "options": [
            "booked",
            "book",
            "bookeds"
          ]
        },
        {
          "id": "grammar-en-b1-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნომერი უკვე დაჯავშნილი გქონდა?",
            "en": "Choose the complete sentence expressing: Вы уже забронировали номер?",
            "ru": "Выберите полное предложение со значением: Вы уже забронировали номер?"
          },
          "sentence": "____",
          "answer": "Had you booked a room?",
          "options": [
            "Had you booked a room?",
            "Have you booked a room?",
            "Did you booked a room?"
          ]
        },
        {
          "id": "grammar-en-b1-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნომერი უკვე დაჯავშნილი გქონდა?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы уже забронировали номер?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы уже забронировали номер?"
          },
          "sentence": "Have you booked a room? → ____",
          "answer": "Had you booked a room?",
          "options": [
            "Had you booked a room?",
            "Did you booked a room?",
            "Have you booked a room?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-3",
      "level": "B1",
      "title": {
        "ka": "ვნებითი გვარი",
        "en": "Passive voice",
        "ru": "Страдательный залог"
      },
      "explanation": {
        "ka": "ვნებითში ყურადღება მოქმედების ობიექტზეა: be + past participle. be დროისა და რიცხვის მიხედვით იცვლება; შემსრულებელი საჭიროებისას by-ით ემატება. მოქმედებითი წინადადების ობიექტი ვნებითის ქვემდებარე ხდება. დრო be-ს ფორმაში ჩანს, მთავარი ზმნის participle კი შენარჩუნებულია. by არ არის აუცილებელი, როცა შემსრულებელი უცნობია ან უმნიშვნელოა.",
        "en": "The passive focuses on the recipient: be + past participle. Be changes for tense and number; add the agent with by when relevant. The active sentence’s object becomes the passive subject. Tense appears in be while the main verb remains a participle. A by-phrase is unnecessary when the agent is unknown or unimportant.",
        "ru": "Пассив выделяет объект действия: be + третья форма. Be изменяется по времени и числу; исполнитель при необходимости вводится через by. Дополнение активной конструкции становится подлежащим пассива. Время выражается формой be, основной глагол остаётся причастием. Оборот с by не нужен, если исполнитель неизвестен или неважен."
      },
      "rules": [
        {
          "form": "The room is cleaned daily.",
          "detail": {
            "ka": "ვნებითში ყურადღება მოქმედების ობიექტზეა: be + past participle. შეადარე მაგალითს: The room is cleaned daily. — ოთახი ყოველდღე ლაგდება.",
            "en": "The passive focuses on the recipient: be + past participle. Compare the example: The room is cleaned daily. — The room is cleaned daily.",
            "ru": "Пассив выделяет объект действия: be + третья форма. Сравните с примером: The room is cleaned daily. — Комнату убирают ежедневно."
          }
        },
        {
          "form": "The bridge was built in 1990.",
          "detail": {
            "ka": "be დროისა და რიცხვის მიხედვით იცვლება; შემსრულებელი საჭიროებისას by-ით ემატება. შეადარე მაგალითს: The bridge was built in 1990. — ხიდი 1990 წელს აშენდა.",
            "en": "Be changes for tense and number; add the agent with by when relevant. Compare the example: The bridge was built in 1990. — The bridge was built in 1990.",
            "ru": "Be изменяется по времени и числу; исполнитель при необходимости вводится через by. Сравните с примером: The bridge was built in 1990. — Мост построили в 1990 году."
          }
        },
        {
          "form": "The form must be signed.",
          "detail": {
            "ka": "მოქმედებითი წინადადების ობიექტი ვნებითის ქვემდებარე ხდება. შეადარე მაგალითს: The form must be signed. — ფორმა ხელმოწერილი უნდა იყოს.",
            "en": "The active sentence’s object becomes the passive subject. Compare the example: The form must be signed. — The form must be signed.",
            "ru": "Дополнение активной конструкции становится подлежащим пассива. Сравните с примером: The form must be signed. — Форму необходимо подписать."
          }
        }
      ],
      "examples": [
        {
          "en": "The room is cleaned daily.",
          "ru": "Комнату убирают ежедневно.",
          "ka": "ოთახი ყოველდღე ლაგდება."
        },
        {
          "en": "The bridge was built in 1990.",
          "ru": "Мост построили в 1990 году.",
          "ka": "ხიდი 1990 წელს აშენდა."
        },
        {
          "en": "The form must be signed.",
          "ru": "Форму необходимо подписать.",
          "ka": "ფორმა ხელმოწერილი უნდა იყოს."
        }
      ],
      "pitfalls": {
        "ka": "მოქმედებითი წინადადების ობიექტი ვნებითის ქვემდებარე ხდება. დრო be-ს ფორმაში ჩანს, მთავარი ზმნის participle კი შენარჩუნებულია. by არ არის აუცილებელი, როცა შემსრულებელი უცნობია ან უმნიშვნელოა.",
        "en": "The active sentence’s object becomes the passive subject. Tense appears in be while the main verb remains a participle. A by-phrase is unnecessary when the agent is unknown or unimportant.",
        "ru": "Дополнение активной конструкции становится подлежащим пассива. Время выражается формой be, основной глагол остаётся причастием. Оборот с by не нужен, если исполнитель неизвестен или неважен."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ოთახი ყოველდღე ლაგდება.",
            "en": "Complete the sentence to express: Комнату убирают ежедневно.",
            "ru": "Заполните предложение со значением: Комнату убирают ежедневно."
          },
          "sentence": "The room is ____ daily.",
          "answer": "cleaned",
          "options": [
            "cleaned",
            "clean",
            "cleaning"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხიდი 1990 წელს აშენდა.",
            "en": "Complete the sentence to express: Мост построили в 1990 году.",
            "ru": "Заполните предложение со значением: Мост построили в 1990 году."
          },
          "sentence": "The bridge ____ built in 1990.",
          "answer": "was",
          "options": [
            "was",
            "is",
            "has"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ფორმა ხელმოწერილი უნდა იყოს.",
            "en": "Complete the sentence to express: Форму необходимо подписать.",
            "ru": "Заполните предложение со значением: Форму необходимо подписать."
          },
          "sentence": "The form must ____ signed.",
          "answer": "be",
          "options": [
            "be",
            "been",
            "being"
          ]
        },
        {
          "id": "grammar-en-b1-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ოთახი ყოველდღე ლაგდება.",
            "en": "Complete a different part of the sentence. Intended meaning: Комнату убирают ежедневно.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Комнату убирают ежедневно."
          },
          "sentence": "The room ____ cleaned daily.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-b1-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ოთახი ყოველდღე ლაგდება.",
            "en": "Choose the complete sentence expressing: Комнату убирают ежедневно.",
            "ru": "Выберите полное предложение со значением: Комнату убирают ежедневно."
          },
          "sentence": "____",
          "answer": "The room is cleaned daily.",
          "options": [
            "The room is cleaned daily.",
            "The room is clean daily.",
            "The room is cleaning daily."
          ]
        },
        {
          "id": "grammar-en-b1-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ოთახი ყოველდღე ლაგდება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Комнату убирают ежедневно.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Комнату убирают ежедневно."
          },
          "sentence": "The room is clean daily. → ____",
          "answer": "The room is cleaned daily.",
          "options": [
            "The room is cleaned daily.",
            "The room is cleaning daily.",
            "The room is clean daily."
          ]
        },
        {
          "id": "grammar-en-b1-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხიდი 1990 წელს აშენდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Мост построили в 1990 году.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Мост построили в 1990 году."
          },
          "sentence": "The bridge was built ____ 1990.",
          "answer": "in",
          "options": [
            "in",
            "on",
            "at"
          ]
        },
        {
          "id": "grammar-en-b1-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხიდი 1990 წელს აშენდა.",
            "en": "Choose the complete sentence expressing: Мост построили в 1990 году.",
            "ru": "Выберите полное предложение со значением: Мост построили в 1990 году."
          },
          "sentence": "____",
          "answer": "The bridge was built in 1990.",
          "options": [
            "The bridge was built in 1990.",
            "The bridge is built in 1990.",
            "The bridge has built in 1990."
          ]
        },
        {
          "id": "grammar-en-b1-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხიდი 1990 წელს აშენდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Мост построили в 1990 году.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Мост построили в 1990 году."
          },
          "sentence": "The bridge is built in 1990. → ____",
          "answer": "The bridge was built in 1990.",
          "options": [
            "The bridge was built in 1990.",
            "The bridge has built in 1990.",
            "The bridge is built in 1990."
          ]
        },
        {
          "id": "grammar-en-b1-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ფორმა ხელმოწერილი უნდა იყოს.",
            "en": "Complete a different part of the sentence. Intended meaning: Форму необходимо подписать.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Форму необходимо подписать."
          },
          "sentence": "The form ____ be signed.",
          "answer": "must",
          "options": [
            "must",
            "has",
            "does"
          ]
        },
        {
          "id": "grammar-en-b1-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ფორმა ხელმოწერილი უნდა იყოს.",
            "en": "Choose the complete sentence expressing: Форму необходимо подписать.",
            "ru": "Выберите полное предложение со значением: Форму необходимо подписать."
          },
          "sentence": "____",
          "answer": "The form must be signed.",
          "options": [
            "The form must be signed.",
            "The form must been signed.",
            "The form must being signed."
          ]
        },
        {
          "id": "grammar-en-b1-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ფორმა ხელმოწერილი უნდა იყოს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Форму необходимо подписать.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Форму необходимо подписать."
          },
          "sentence": "The form must been signed. → ____",
          "answer": "The form must be signed.",
          "options": [
            "The form must be signed.",
            "The form must being signed.",
            "The form must been signed."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-4",
      "level": "B1",
      "title": {
        "ka": "ირიბი ნათქვამი",
        "en": "Reported speech",
        "ru": "Косвенная речь"
      },
      "explanation": {
        "ka": "წარსული reporting ზმნის შემდეგ დრო ხშირად ერთი საფეხურით უკან გადადის. ნაცვალსახელი და დროის აღმნიშვნელი სიტყვაც კონტექსტს შეუთანხმე; say და tell განსხვავდება. tell-ს ამ მოდელში მსმენელი პირდაპირ მოსდევს: told me. say-სთან მსმენელს to უკავშირებს: said to me. ირიბ კითხვაში კითხვითი რიგი არ რჩება; თუ ინფორმაცია კვლავ აქტუალურია, დროის გადაწევა ყოველთვის სავალდებულო არაა.",
        "en": "After a past reporting verb, tense often shifts back. Adjust pronouns and time expressions to context; distinguish say from tell. Tell takes a listener directly in this pattern: told me. Say introduces a listener with to: said to me. Embedded questions lose question order; backshift is not always required when information remains true.",
        "ru": "После глагола сообщения в прошедшем времени часто происходит сдвиг времени. Согласуйте местоимения и указатели времени с контекстом; различайте say и tell. Tell в этой модели принимает адресата прямо: told me. Say вводит адресата через to: said to me. Косвенный вопрос теряет вопросительный порядок; сдвиг времени не всегда обязателен для актуального факта."
      },
      "rules": [
        {
          "form": "She said she was tired.",
          "detail": {
            "ka": "წარსული reporting ზმნის შემდეგ დრო ხშირად ერთი საფეხურით უკან გადადის. შეადარე მაგალითს: She said she was tired. — მან თქვა, რომ დაღლილი იყო.",
            "en": "After a past reporting verb, tense often shifts back. Compare the example: She said she was tired. — She said she was tired.",
            "ru": "После глагола сообщения в прошедшем времени часто происходит сдвиг времени. Сравните с примером: She said she was tired. — Она сказала, что устала."
          }
        },
        {
          "form": "He told me he would call.",
          "detail": {
            "ka": "ნაცვალსახელი და დროის აღმნიშვნელი სიტყვაც კონტექსტს შეუთანხმე; say და tell განსხვავდება. შეადარე მაგალითს: He told me he would call. — მან მითხრა, რომ დარეკავდა.",
            "en": "Adjust pronouns and time expressions to context; distinguish say from tell. Compare the example: He told me he would call. — He told me he would call.",
            "ru": "Согласуйте местоимения и указатели времени с контекстом; различайте say и tell. Сравните с примером: He told me he would call. — Он сказал мне, что позвонит."
          }
        },
        {
          "form": "She asked where I lived.",
          "detail": {
            "ka": "tell-ს ამ მოდელში მსმენელი პირდაპირ მოსდევს: told me. შეადარე მაგალითს: She asked where I lived. — მან მკითხა, სად ვცხოვრობდი.",
            "en": "Tell takes a listener directly in this pattern: told me. Compare the example: She asked where I lived. — She asked where I lived.",
            "ru": "Tell в этой модели принимает адресата прямо: told me. Сравните с примером: She asked where I lived. — Она спросила, где я живу."
          }
        }
      ],
      "examples": [
        {
          "en": "She said she was tired.",
          "ru": "Она сказала, что устала.",
          "ka": "მან თქვა, რომ დაღლილი იყო."
        },
        {
          "en": "He told me he would call.",
          "ru": "Он сказал мне, что позвонит.",
          "ka": "მან მითხრა, რომ დარეკავდა."
        },
        {
          "en": "She asked where I lived.",
          "ru": "Она спросила, где я живу.",
          "ka": "მან მკითხა, სად ვცხოვრობდი."
        }
      ],
      "pitfalls": {
        "ka": "tell-ს ამ მოდელში მსმენელი პირდაპირ მოსდევს: told me. say-სთან მსმენელს to უკავშირებს: said to me. ირიბ კითხვაში კითხვითი რიგი არ რჩება; თუ ინფორმაცია კვლავ აქტუალურია, დროის გადაწევა ყოველთვის სავალდებულო არაა.",
        "en": "Tell takes a listener directly in this pattern: told me. Say introduces a listener with to: said to me. Embedded questions lose question order; backshift is not always required when information remains true.",
        "ru": "Tell в этой модели принимает адресата прямо: told me. Say вводит адресата через to: said to me. Косвенный вопрос теряет вопросительный порядок; сдвиг времени не всегда обязателен для актуального факта."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან თქვა, რომ დაღლილი იყო.",
            "en": "Complete the sentence to express: Она сказала, что устала.",
            "ru": "Заполните предложение со значением: Она сказала, что устала."
          },
          "sentence": "She said she ____ tired.",
          "answer": "was",
          "options": [
            "was",
            "is",
            "be"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან მითხრა, რომ დარეკავდა.",
            "en": "Complete the sentence to express: Он сказал мне, что позвонит.",
            "ru": "Заполните предложение со значением: Он сказал мне, что позвонит."
          },
          "sentence": "He ____ me he would call.",
          "answer": "told",
          "options": [
            "told",
            "said",
            "spoke"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან მკითხა, სად ვცხოვრობდი.",
            "en": "Complete the sentence to express: Она спросила, где я живу.",
            "ru": "Заполните предложение со значением: Она спросила, где я живу."
          },
          "sentence": "She asked where I ____.",
          "answer": "lived",
          "options": [
            "lived",
            "did I live",
            "do I live"
          ]
        },
        {
          "id": "grammar-en-b1-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან თქვა, რომ დაღლილი იყო.",
            "en": "Complete a different part of the sentence. Intended meaning: Она сказала, что устала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она сказала, что устала."
          },
          "sentence": "____ said she was tired.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან თქვა, რომ დაღლილი იყო.",
            "en": "Choose the complete sentence expressing: Она сказала, что устала.",
            "ru": "Выберите полное предложение со значением: Она сказала, что устала."
          },
          "sentence": "____",
          "answer": "She said she was tired.",
          "options": [
            "She said she was tired.",
            "She said she is tired.",
            "She said she be tired."
          ]
        },
        {
          "id": "grammar-en-b1-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან თქვა, რომ დაღლილი იყო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она сказала, что устала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она сказала, что устала."
          },
          "sentence": "She said she is tired. → ____",
          "answer": "She said she was tired.",
          "options": [
            "She said she was tired.",
            "She said she be tired.",
            "She said she is tired."
          ]
        },
        {
          "id": "grammar-en-b1-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან მითხრა, რომ დარეკავდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Он сказал мне, что позвонит.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Он сказал мне, что позвонит."
          },
          "sentence": "____ told me he would call.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-b1-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან მითხრა, რომ დარეკავდა.",
            "en": "Choose the complete sentence expressing: Он сказал мне, что позвонит.",
            "ru": "Выберите полное предложение со значением: Он сказал мне, что позвонит."
          },
          "sentence": "____",
          "answer": "He told me he would call.",
          "options": [
            "He told me he would call.",
            "He said me he would call.",
            "He spoke me he would call."
          ]
        },
        {
          "id": "grammar-en-b1-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან მითხრა, რომ დარეკავდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Он сказал мне, что позвонит.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Он сказал мне, что позвонит."
          },
          "sentence": "He said me he would call. → ____",
          "answer": "He told me he would call.",
          "options": [
            "He told me he would call.",
            "He spoke me he would call.",
            "He said me he would call."
          ]
        },
        {
          "id": "grammar-en-b1-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან მკითხა, სად ვცხოვრობდი.",
            "en": "Complete a different part of the sentence. Intended meaning: Она спросила, где я живу.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она спросила, где я живу."
          },
          "sentence": "____ asked where I lived.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან მკითხა, სად ვცხოვრობდი.",
            "en": "Choose the complete sentence expressing: Она спросила, где я живу.",
            "ru": "Выберите полное предложение со значением: Она спросила, где я живу."
          },
          "sentence": "____",
          "answer": "She asked where I lived.",
          "options": [
            "She asked where I lived.",
            "She asked where I did I live.",
            "She asked where I do I live."
          ]
        },
        {
          "id": "grammar-en-b1-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან მკითხა, სად ვცხოვრობდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она спросила, где я живу.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она спросила, где я живу."
          },
          "sentence": "She asked where I did I live. → ____",
          "answer": "She asked where I lived.",
          "options": [
            "She asked where I lived.",
            "She asked where I do I live.",
            "She asked where I did I live."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-5",
      "level": "B1",
      "title": {
        "ka": "ჰიპოთეზური პირობა",
        "en": "Second conditional",
        "ru": "Второе условное"
      },
      "explanation": {
        "ka": "if + Past Simple, would + საწყისი ფორმა აღწერს არარეალურ ან ნაკლებად მოსალოდნელ აწმყო/მომავალს. ფორმალურ ჰიპოთეზაში ყველა პირთან were დასაშვებია. Past Simple აქ წარსულ დროს კი არა, რეალობისგან დაშორებას გამოხატავს. if-ნაწილში ჩვეულებრივ would არ იწერება. If I were you რჩევის გავრცელებული მოდელია; would-ის შემდეგ to ნუ დაამატებ.",
        "en": "If + past simple, would + base verb describes unreal or less likely present/future situations. Formal hypotheses can use were with all persons. Past simple here marks distance from reality rather than past time. The if-clause does not normally contain would. If I were you is a common advice pattern; do not add to after would.",
        "ru": "If + Past Simple, would + глагол описывает нереальную или маловероятную ситуацию в настоящем/будущем. В формальной гипотезе were возможно со всеми лицами. Past Simple здесь обозначает удалённость от реальности, а не прошлое время. В части с if обычно нет would. If I were you — частая модель совета; после would не добавляйте to."
      },
      "rules": [
        {
          "form": "If I had time, I would travel.",
          "detail": {
            "ka": "if + Past Simple, would + საწყისი ფორმა აღწერს არარეალურ ან ნაკლებად მოსალოდნელ აწმყო/მომავალს. შეადარე მაგალითს: If I had time, I would travel. — დრო რომ მქონდეს, ვიმოგზაურებდი.",
            "en": "If + past simple, would + base verb describes unreal or less likely present/future situations. Compare the example: If I had time, I would travel. — If I had time, I would travel.",
            "ru": "If + Past Simple, would + глагол описывает нереальную или маловероятную ситуацию в настоящем/будущем. Сравните с примером: If I had time, I would travel. — Если бы у меня было время, я бы путешествовала."
          }
        },
        {
          "form": "If I were you, I would wait.",
          "detail": {
            "ka": "ფორმალურ ჰიპოთეზაში ყველა პირთან were დასაშვებია. შეადარე მაგალითს: If I were you, I would wait. — შენს ადგილას დაველოდებოდი.",
            "en": "Formal hypotheses can use were with all persons. Compare the example: If I were you, I would wait. — If I were you, I would wait.",
            "ru": "В формальной гипотезе were возможно со всеми лицами. Сравните с примером: If I were you, I would wait. — На вашем месте я бы подождала."
          }
        },
        {
          "form": "What would you do?",
          "detail": {
            "ka": "Past Simple აქ წარსულ დროს კი არა, რეალობისგან დაშორებას გამოხატავს. შეადარე მაგალითს: She would help if she could. — შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა.",
            "en": "Past simple here marks distance from reality rather than past time. Compare the example: She would help if she could. — She would help if she could.",
            "ru": "Past Simple здесь обозначает удалённость от реальности, а не прошлое время. Сравните с примером: She would help if she could. — Она бы помогла, если бы могла."
          }
        }
      ],
      "examples": [
        {
          "en": "If I had time, I would travel.",
          "ru": "Если бы у меня было время, я бы путешествовала.",
          "ka": "დრო რომ მქონდეს, ვიმოგზაურებდი."
        },
        {
          "en": "If I were you, I would wait.",
          "ru": "На вашем месте я бы подождала.",
          "ka": "შენს ადგილას დაველოდებოდი."
        },
        {
          "en": "She would help if she could.",
          "ru": "Она бы помогла, если бы могла.",
          "ka": "შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა."
        }
      ],
      "pitfalls": {
        "ka": "Past Simple აქ წარსულ დროს კი არა, რეალობისგან დაშორებას გამოხატავს. if-ნაწილში ჩვეულებრივ would არ იწერება. If I were you რჩევის გავრცელებული მოდელია; would-ის შემდეგ to ნუ დაამატებ.",
        "en": "Past simple here marks distance from reality rather than past time. The if-clause does not normally contain would. If I were you is a common advice pattern; do not add to after would.",
        "ru": "Past Simple здесь обозначает удалённость от реальности, а не прошлое время. В части с if обычно нет would. If I were you — частая модель совета; после would не добавляйте to."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დრო რომ მქონდეს, ვიმოგზაურებდი.",
            "en": "Complete the sentence to express: Если бы у меня было время, я бы путешествовала.",
            "ru": "Заполните предложение со значением: Если бы у меня было время, я бы путешествовала."
          },
          "sentence": "If I ____ time, I would travel.",
          "answer": "had",
          "options": [
            "had",
            "have",
            "will have"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შენს ადგილას დაველოდებოდი.",
            "en": "Complete the sentence to express: На вашем месте я бы подождала.",
            "ru": "Заполните предложение со значением: На вашем месте я бы подождала."
          },
          "sentence": "If I ____ you, I would wait.",
          "answer": "were",
          "options": [
            "were",
            "am",
            "will be"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა.",
            "en": "Complete the sentence to express: Она бы помогла, если бы могла.",
            "ru": "Заполните предложение со значением: Она бы помогла, если бы могла."
          },
          "sentence": "She ____ help if she could.",
          "answer": "would",
          "options": [
            "would",
            "will",
            "does"
          ]
        },
        {
          "id": "grammar-en-b1-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დრო რომ მქონდეს, ვიმოგზაურებდი.",
            "en": "Complete a different part of the sentence. Intended meaning: Если бы у меня было время, я бы путешествовала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Если бы у меня было время, я бы путешествовала."
          },
          "sentence": "____ I had time, I would travel.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-b1-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დრო რომ მქონდეს, ვიმოგზაურებდი.",
            "en": "Choose the complete sentence expressing: Если бы у меня было время, я бы путешествовала.",
            "ru": "Выберите полное предложение со значением: Если бы у меня было время, я бы путешествовала."
          },
          "sentence": "____",
          "answer": "If I had time, I would travel.",
          "options": [
            "If I had time, I would travel.",
            "If I have time, I would travel.",
            "If I will have time, I would travel."
          ]
        },
        {
          "id": "grammar-en-b1-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დრო რომ მქონდეს, ვიმოგზაურებდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Если бы у меня было время, я бы путешествовала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Если бы у меня было время, я бы путешествовала."
          },
          "sentence": "If I have time, I would travel. → ____",
          "answer": "If I had time, I would travel.",
          "options": [
            "If I had time, I would travel.",
            "If I will have time, I would travel.",
            "If I have time, I would travel."
          ]
        },
        {
          "id": "grammar-en-b1-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შენს ადგილას დაველოდებოდი.",
            "en": "Complete a different part of the sentence. Intended meaning: На вашем месте я бы подождала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: На вашем месте я бы подождала."
          },
          "sentence": "____ I were you, I would wait.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-b1-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შენს ადგილას დაველოდებოდი.",
            "en": "Choose the complete sentence expressing: На вашем месте я бы подождала.",
            "ru": "Выберите полное предложение со значением: На вашем месте я бы подождала."
          },
          "sentence": "____",
          "answer": "If I were you, I would wait.",
          "options": [
            "If I were you, I would wait.",
            "If I am you, I would wait.",
            "If I will be you, I would wait."
          ]
        },
        {
          "id": "grammar-en-b1-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შენს ადგილას დაველოდებოდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: На вашем месте я бы подождала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: На вашем месте я бы подождала."
          },
          "sentence": "If I am you, I would wait. → ____",
          "answer": "If I were you, I would wait.",
          "options": [
            "If I were you, I would wait.",
            "If I will be you, I would wait.",
            "If I am you, I would wait."
          ]
        },
        {
          "id": "grammar-en-b1-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Она бы помогла, если бы могла.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она бы помогла, если бы могла."
          },
          "sentence": "____ would help if she could.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა.",
            "en": "Choose the complete sentence expressing: Она бы помогла, если бы могла.",
            "ru": "Выберите полное предложение со значением: Она бы помогла, если бы могла."
          },
          "sentence": "____",
          "answer": "She would help if she could.",
          "options": [
            "She would help if she could.",
            "She will help if she could.",
            "She does help if she could."
          ]
        },
        {
          "id": "grammar-en-b1-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შესაძლებლობა რომ ჰქონდეს, დაგვეხმარებოდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она бы помогла, если бы могла.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она бы помогла, если бы могла."
          },
          "sentence": "She will help if she could. → ____",
          "answer": "She would help if she could.",
          "options": [
            "She would help if she could.",
            "She does help if she could.",
            "She will help if she could."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-6",
      "level": "B1",
      "title": {
        "ka": "დამოკიდებული განსაზღვრება",
        "en": "Relative clauses",
        "ru": "Относительные предложения"
      },
      "explanation": {
        "ka": "who ადამიანზე მიანიშნებს, which — ნივთზე; that შესაძლებელია ბევრ განმსაზღვრელ წინადადებაში. non-defining ნაწილი მძიმით გამოიყოფა და მასში that არ გამოიყენება. განმსაზღვრელი ნაწილი საჭირო ინფორმაციას იძლევა და მძიმე არ სჭირდება. ობიექტის relative pronoun ზოგჯერ გამოიტოვება: the book I bought. ქვემდებარის who ვერ გამოიტოვება the person who called-ში.",
        "en": "Who refers to people, which to things; that can replace either in many defining clauses. Non-defining clauses take commas and do not use that. A defining clause identifies the referent and has no separating comma. An object relative pronoun can sometimes be omitted: the book I bought. Subject who cannot be omitted in the person who called.",
        "ru": "Who относится к людям, which — к предметам; в определительных конструкциях часто допустимо that. Пояснительная часть отделяется запятыми и не употребляет that. Определительная часть идентифицирует предмет и не отделяется запятой. Относительное дополнение иногда опускается: the book I bought. Подлежащее who нельзя убрать в the person who called."
      },
      "rules": [
        {
          "form": "the person who called",
          "detail": {
            "ka": "who ადამიანზე მიანიშნებს, which — ნივთზე; that შესაძლებელია ბევრ განმსაზღვრელ წინადადებაში. შეადარე მაგალითს: The person who called is my sister. — ადამიანი, რომელმაც დარეკა, ჩემი დაა.",
            "en": "Who refers to people, which to things; that can replace either in many defining clauses. Compare the example: The person who called is my sister. — The person who called is my sister.",
            "ru": "Who относится к людям, which — к предметам; в определительных конструкциях часто допустимо that. Сравните с примером: The person who called is my sister. — Человек, который звонил, — моя сестра."
          }
        },
        {
          "form": "the book that I bought",
          "detail": {
            "ka": "non-defining ნაწილი მძიმით გამოიყოფა და მასში that არ გამოიყენება. შეადარე მაგალითს: The book that I bought is useful. — წიგნი, რომელიც ვიყიდე, სასარგებლოა.",
            "en": "Non-defining clauses take commas and do not use that. Compare the example: The book that I bought is useful. — The book that I bought is useful.",
            "ru": "Пояснительная часть отделяется запятыми и не употребляет that. Сравните с примером: The book that I bought is useful. — Книга, которую я купила, полезная."
          }
        },
        {
          "form": "Ana, who lives here, is a doctor.",
          "detail": {
            "ka": "განმსაზღვრელი ნაწილი საჭირო ინფორმაციას იძლევა და მძიმე არ სჭირდება. შეადარე მაგალითს: Ana, who lives here, is a doctor. — ანა, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "A defining clause identifies the referent and has no separating comma. Compare the example: Ana, who lives here, is a doctor. — Ana, who lives here, is a doctor.",
            "ru": "Определительная часть идентифицирует предмет и не отделяется запятой. Сравните с примером: Ana, who lives here, is a doctor. — Анна, которая здесь живёт, врач."
          }
        }
      ],
      "examples": [
        {
          "en": "The person who called is my sister.",
          "ru": "Человек, который звонил, — моя сестра.",
          "ka": "ადამიანი, რომელმაც დარეკა, ჩემი დაა."
        },
        {
          "en": "The book that I bought is useful.",
          "ru": "Книга, которую я купила, полезная.",
          "ka": "წიგნი, რომელიც ვიყიდე, სასარგებლოა."
        },
        {
          "en": "Ana, who lives here, is a doctor.",
          "ru": "Анна, которая здесь живёт, врач.",
          "ka": "ანა, რომელიც აქ ცხოვრობს, ექიმია."
        }
      ],
      "pitfalls": {
        "ka": "განმსაზღვრელი ნაწილი საჭირო ინფორმაციას იძლევა და მძიმე არ სჭირდება. ობიექტის relative pronoun ზოგჯერ გამოიტოვება: the book I bought. ქვემდებარის who ვერ გამოიტოვება the person who called-ში.",
        "en": "A defining clause identifies the referent and has no separating comma. An object relative pronoun can sometimes be omitted: the book I bought. Subject who cannot be omitted in the person who called.",
        "ru": "Определительная часть идентифицирует предмет и не отделяется запятой. Относительное дополнение иногда опускается: the book I bought. Подлежащее who нельзя убрать в the person who called."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადამიანი, რომელმაც დარეკა, ჩემი დაა.",
            "en": "Complete the sentence to express: Человек, который звонил, — моя сестра.",
            "ru": "Заполните предложение со значением: Человек, который звонил, — моя сестра."
          },
          "sentence": "The person ____ called is my sister.",
          "answer": "who",
          "options": [
            "who",
            "which",
            "where"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი, რომელიც ვიყიდე, სასარგებლოა.",
            "en": "Complete the sentence to express: Книга, которую я купила, полезная.",
            "ru": "Заполните предложение со значением: Книга, которую я купила, полезная."
          },
          "sentence": "The book ____ I bought is useful.",
          "answer": "that",
          "options": [
            "that",
            "who",
            "where"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ანა, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Complete the sentence to express: Анна, которая здесь живёт, врач.",
            "ru": "Заполните предложение со значением: Анна, которая здесь живёт, врач."
          },
          "sentence": "Ana, ____ lives here, is a doctor.",
          "answer": "who",
          "options": [
            "who",
            "that",
            "what"
          ]
        },
        {
          "id": "grammar-en-b1-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადამიანი, რომელმაც დარეკა, ჩემი დაა.",
            "en": "Complete a different part of the sentence. Intended meaning: Человек, который звонил, — моя сестра.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Человек, который звонил, — моя сестра."
          },
          "sentence": "The person who called ____ my sister.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-b1-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადამიანი, რომელმაც დარეკა, ჩემი დაა.",
            "en": "Choose the complete sentence expressing: Человек, который звонил, — моя сестра.",
            "ru": "Выберите полное предложение со значением: Человек, который звонил, — моя сестра."
          },
          "sentence": "____",
          "answer": "The person who called is my sister.",
          "options": [
            "The person who called is my sister.",
            "The person which called is my sister.",
            "The person where called is my sister."
          ]
        },
        {
          "id": "grammar-en-b1-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადამიანი, რომელმაც დარეკა, ჩემი დაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Человек, который звонил, — моя сестра.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Человек, который звонил, — моя сестра."
          },
          "sentence": "The person which called is my sister. → ____",
          "answer": "The person who called is my sister.",
          "options": [
            "The person who called is my sister.",
            "The person where called is my sister.",
            "The person which called is my sister."
          ]
        },
        {
          "id": "grammar-en-b1-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნი, რომელიც ვიყიდე, სასარგებლოა.",
            "en": "Complete a different part of the sentence. Intended meaning: Книга, которую я купила, полезная.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Книга, которую я купила, полезная."
          },
          "sentence": "The book that ____ bought is useful.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b1-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნი, რომელიც ვიყიდე, სასარგებლოა.",
            "en": "Choose the complete sentence expressing: Книга, которую я купила, полезная.",
            "ru": "Выберите полное предложение со значением: Книга, которую я купила, полезная."
          },
          "sentence": "____",
          "answer": "The book that I bought is useful.",
          "options": [
            "The book that I bought is useful.",
            "The book who I bought is useful.",
            "The book where I bought is useful."
          ]
        },
        {
          "id": "grammar-en-b1-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნი, რომელიც ვიყიდე, სასარგებლოა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Книга, которую я купила, полезная.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Книга, которую я купила, полезная."
          },
          "sentence": "The book who I bought is useful. → ____",
          "answer": "The book that I bought is useful.",
          "options": [
            "The book that I bought is useful.",
            "The book where I bought is useful.",
            "The book who I bought is useful."
          ]
        },
        {
          "id": "grammar-en-b1-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ანა, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Complete a different part of the sentence. Intended meaning: Анна, которая здесь живёт, врач.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Анна, которая здесь живёт, врач."
          },
          "sentence": "Ana, who lives here, ____ a doctor.",
          "answer": "is",
          "options": [
            "is",
            "are",
            "am"
          ]
        },
        {
          "id": "grammar-en-b1-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ანა, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Choose the complete sentence expressing: Анна, которая здесь живёт, врач.",
            "ru": "Выберите полное предложение со значением: Анна, которая здесь живёт, врач."
          },
          "sentence": "____",
          "answer": "Ana, who lives here, is a doctor.",
          "options": [
            "Ana, who lives here, is a doctor.",
            "Ana, that lives here, is a doctor.",
            "Ana, what lives here, is a doctor."
          ]
        },
        {
          "id": "grammar-en-b1-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ანა, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Анна, которая здесь живёт, врач.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Анна, которая здесь живёт, врач."
          },
          "sentence": "Ana, that lives here, is a doctor. → ____",
          "answer": "Ana, who lives here, is a doctor.",
          "options": [
            "Ana, who lives here, is a doctor.",
            "Ana, what lives here, is a doctor.",
            "Ana, that lives here, is a doctor."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-7",
      "level": "B1",
      "title": {
        "ka": "ვარაუდი და სარწმუნოობა",
        "en": "Modal deduction",
        "ru": "Модальные глаголы предположения"
      },
      "explanation": {
        "ka": "must შეიძლება ძლიერ დასკვნას ნიშნავდეს, might/could — შესაძლებლობას, can’t — შეუძლებლობის დასკვნას. ეს მნიშვნელობა მოვალეობის must-ს არ აურიო. დასკვნის სიძლიერე მტკიცებულებას ეფუძნება: must — ძლიერი, might — შესაძლებელი. უარყოფითი ძლიერი დასკვნა can’t-ითაა და არა mustn’t-ით. ყველა ამ მოდალს be-ს წინ to არ ახლავს.",
        "en": "Must can express a strong deduction, might/could a possibility and can’t a deduction of impossibility. Distinguish deductive must from obligation. The strength of a deduction depends on evidence: must is strong, might possible. A strong negative deduction uses can’t, not mustn’t. None of these modals takes to before be.",
        "ru": "Must может выражать уверенный вывод, might/could — возможность, can’t — вывод о невозможности. Отличайте must-предположение от обязанности. Сила вывода зависит от доказательств: must — уверенный, might — возможный. Сильный отрицательный вывод выражается can’t, не mustn’t. Перед be после этих модальных глаголов нет to."
      },
      "rules": [
        {
          "form": "She must be tired.",
          "detail": {
            "ka": "must შეიძლება ძლიერ დასკვნას ნიშნავდეს, might/could — შესაძლებლობას, can’t — შეუძლებლობის დასკვნას. შეადარე მაგალითს: She must be tired after the flight. — ფრენის შემდეგ ის ალბათ ძალიან დაღლილია.",
            "en": "Must can express a strong deduction, might/could a possibility and can’t a deduction of impossibility. Compare the example: She must be tired after the flight. — She must be tired after the flight.",
            "ru": "Must может выражать уверенный вывод, might/could — возможность, can’t — вывод о невозможности. Сравните с примером: She must be tired after the flight. — Она, должно быть, устала после полёта."
          }
        },
        {
          "form": "He might be at home.",
          "detail": {
            "ka": "ეს მნიშვნელობა მოვალეობის must-ს არ აურიო. შეადარე მაგალითს: He might be at home. — შეიძლება ის სახლში იყოს.",
            "en": "Distinguish deductive must from obligation. Compare the example: He might be at home. — He might be at home.",
            "ru": "Отличайте must-предположение от обязанности. Сравните с примером: He might be at home. — Возможно, он дома."
          }
        },
        {
          "form": "That cannot be true.",
          "detail": {
            "ka": "დასკვნის სიძლიერე მტკიცებულებას ეფუძნება: must — ძლიერი, might — შესაძლებელი. შეადარე მაგალითს: That cannot be true. — ეს სიმართლე ვერ იქნება.",
            "en": "The strength of a deduction depends on evidence: must is strong, might possible. Compare the example: That cannot be true. — That cannot be true.",
            "ru": "Сила вывода зависит от доказательств: must — уверенный, might — возможный. Сравните с примером: That cannot be true. — Это не может быть правдой."
          }
        }
      ],
      "examples": [
        {
          "en": "She must be tired after the flight.",
          "ru": "Она, должно быть, устала после полёта.",
          "ka": "ფრენის შემდეგ ის ალბათ ძალიან დაღლილია."
        },
        {
          "en": "He might be at home.",
          "ru": "Возможно, он дома.",
          "ka": "შეიძლება ის სახლში იყოს."
        },
        {
          "en": "That cannot be true.",
          "ru": "Это не может быть правдой.",
          "ka": "ეს სიმართლე ვერ იქნება."
        }
      ],
      "pitfalls": {
        "ka": "დასკვნის სიძლიერე მტკიცებულებას ეფუძნება: must — ძლიერი, might — შესაძლებელი. უარყოფითი ძლიერი დასკვნა can’t-ითაა და არა mustn’t-ით. ყველა ამ მოდალს be-ს წინ to არ ახლავს.",
        "en": "The strength of a deduction depends on evidence: must is strong, might possible. A strong negative deduction uses can’t, not mustn’t. None of these modals takes to before be.",
        "ru": "Сила вывода зависит от доказательств: must — уверенный, might — возможный. Сильный отрицательный вывод выражается can’t, не mustn’t. Перед be после этих модальных глаголов нет to."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ფრენის შემდეგ ის ალბათ ძალიან დაღლილია.",
            "en": "Complete the sentence to express: Она, должно быть, устала после полёта.",
            "ru": "Заполните предложение со значением: Она, должно быть, устала после полёта."
          },
          "sentence": "She ____ be tired after the flight.",
          "answer": "must",
          "options": [
            "must",
            "should to",
            "has"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეიძლება ის სახლში იყოს.",
            "en": "Complete the sentence to express: Возможно, он дома.",
            "ru": "Заполните предложение со значением: Возможно, он дома."
          },
          "sentence": "He ____ be at home.",
          "answer": "might",
          "options": [
            "might",
            "is",
            "does"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს სიმართლე ვერ იქნება.",
            "en": "Complete the sentence to express: Это не может быть правдой.",
            "ru": "Заполните предложение со значением: Это не может быть правдой."
          },
          "sentence": "That ____ be true.",
          "answer": "cannot",
          "options": [
            "cannot",
            "does not",
            "is not to"
          ]
        },
        {
          "id": "grammar-en-b1-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ფრენის შემდეგ ის ალბათ ძალიან დაღლილია.",
            "en": "Complete a different part of the sentence. Intended meaning: Она, должно быть, устала после полёта.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она, должно быть, устала после полёта."
          },
          "sentence": "____ must be tired after the flight.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b1-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ფრენის შემდეგ ის ალბათ ძალიან დაღლილია.",
            "en": "Choose the complete sentence expressing: Она, должно быть, устала после полёта.",
            "ru": "Выберите полное предложение со значением: Она, должно быть, устала после полёта."
          },
          "sentence": "____",
          "answer": "She must be tired after the flight.",
          "options": [
            "She must be tired after the flight.",
            "She should to be tired after the flight.",
            "She has be tired after the flight."
          ]
        },
        {
          "id": "grammar-en-b1-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ფრენის შემდეგ ის ალბათ ძალიან დაღლილია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она, должно быть, устала после полёта.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она, должно быть, устала после полёта."
          },
          "sentence": "She should to be tired after the flight. → ____",
          "answer": "She must be tired after the flight.",
          "options": [
            "She must be tired after the flight.",
            "She has be tired after the flight.",
            "She should to be tired after the flight."
          ]
        },
        {
          "id": "grammar-en-b1-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შეიძლება ის სახლში იყოს.",
            "en": "Complete a different part of the sentence. Intended meaning: Возможно, он дома.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Возможно, он дома."
          },
          "sentence": "____ might be at home.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-b1-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შეიძლება ის სახლში იყოს.",
            "en": "Choose the complete sentence expressing: Возможно, он дома.",
            "ru": "Выберите полное предложение со значением: Возможно, он дома."
          },
          "sentence": "____",
          "answer": "He might be at home.",
          "options": [
            "He might be at home.",
            "He is be at home.",
            "He does be at home."
          ]
        },
        {
          "id": "grammar-en-b1-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შეიძლება ის სახლში იყოს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Возможно, он дома.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Возможно, он дома."
          },
          "sentence": "He is be at home. → ____",
          "answer": "He might be at home.",
          "options": [
            "He might be at home.",
            "He does be at home.",
            "He is be at home."
          ]
        },
        {
          "id": "grammar-en-b1-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს სიმართლე ვერ იქნება.",
            "en": "Complete a different part of the sentence. Intended meaning: Это не может быть правдой.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Это не может быть правдой."
          },
          "sentence": "____ cannot be true.",
          "answer": "That",
          "options": [
            "That",
            "Those",
            "These"
          ]
        },
        {
          "id": "grammar-en-b1-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს სიმართლე ვერ იქნება.",
            "en": "Choose the complete sentence expressing: Это не может быть правдой.",
            "ru": "Выберите полное предложение со значением: Это не может быть правдой."
          },
          "sentence": "____",
          "answer": "That cannot be true.",
          "options": [
            "That cannot be true.",
            "That does not be true.",
            "That is not to be true."
          ]
        },
        {
          "id": "grammar-en-b1-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს სიმართლე ვერ იქნება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Это не может быть правдой.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Это не может быть правдой."
          },
          "sentence": "That does not be true. → ____",
          "answer": "That cannot be true.",
          "options": [
            "That cannot be true.",
            "That is not to be true.",
            "That does not be true."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b1-8",
      "level": "B1",
      "title": {
        "ka": "ჩვევა წარსულში",
        "en": "Used to and be used to",
        "ru": "Used to и be used to"
      },
      "explanation": {
        "ka": "used to + საწყისი ზმნა წარსულ ჩვევას ან მდგომარეობას აღნიშნავს. be used to + სახელი/-ing ნიშნავს შეჩვეულობას; ფორმები არ აურიო. used to-ს უარყოფაში did not use to გამოიყენე; -d აღარ რჩება. be used to-ში to წინდებულია და ამიტომ -ing ფორმას იღებს. get used to შეჩვევის პროცესს აღნიშნავს, be used to — არსებულ მდგომარეობას.",
        "en": "Used to + base verb describes a former habit or state. Be used to + noun/-ing means being accustomed to something; keep the patterns separate. For a negative former habit use did not use to, dropping -d. In be used to, to is a preposition and takes -ing. Get used to describes becoming accustomed; be used to describes the resulting state.",
        "ru": "Used to + глагол обозначает прошлую привычку или состояние. Be used to + существительное/-ing означает привычность; не смешивайте конструкции. Отрицание прежней привычки: did not use to, без -d. В be used to слово to — предлог, поэтому нужна форма -ing. Get used to обозначает привыкание, be used to — состояние привычности."
      },
      "rules": [
        {
          "form": "I used to live there.",
          "detail": {
            "ka": "used to + საწყისი ზმნა წარსულ ჩვევას ან მდგომარეობას აღნიშნავს. შეადარე მაგალითს: I used to live there. — ადრე იქ ვცხოვრობდი.",
            "en": "Used to + base verb describes a former habit or state. Compare the example: I used to live there. — I used to live there.",
            "ru": "Used to + глагол обозначает прошлую привычку или состояние. Сравните с примером: I used to live there. — Раньше я там жила."
          }
        },
        {
          "form": "Did you use to walk?",
          "detail": {
            "ka": "be used to + სახელი/-ing ნიშნავს შეჩვეულობას; ფორმები არ აურიო. შეადარე მაგალითს: Did you use to walk to school? — ადრე სკოლაში ფეხით დადიოდი?",
            "en": "Be used to + noun/-ing means being accustomed to something; keep the patterns separate. Compare the example: Did you use to walk to school? — Did you use to walk to school?",
            "ru": "Be used to + существительное/-ing означает привычность; не смешивайте конструкции. Сравните с примером: Did you use to walk to school? — Раньше вы ходили в школу пешком?"
          }
        },
        {
          "form": "I am used to waking early.",
          "detail": {
            "ka": "used to-ს უარყოფაში did not use to გამოიყენე; -d აღარ რჩება. შეადარე მაგალითს: I am used to waking early. — ადრე გაღვიძებას შეჩვეული ვარ.",
            "en": "For a negative former habit use did not use to, dropping -d. Compare the example: I am used to waking early. — I am used to waking early.",
            "ru": "Отрицание прежней привычки: did not use to, без -d. Сравните с примером: I am used to waking early. — Я привыкла рано просыпаться."
          }
        }
      ],
      "examples": [
        {
          "en": "I used to live there.",
          "ru": "Раньше я там жила.",
          "ka": "ადრე იქ ვცხოვრობდი."
        },
        {
          "en": "Did you use to walk to school?",
          "ru": "Раньше вы ходили в школу пешком?",
          "ka": "ადრე სკოლაში ფეხით დადიოდი?"
        },
        {
          "en": "I am used to waking early.",
          "ru": "Я привыкла рано просыпаться.",
          "ka": "ადრე გაღვიძებას შეჩვეული ვარ."
        }
      ],
      "pitfalls": {
        "ka": "used to-ს უარყოფაში did not use to გამოიყენე; -d აღარ რჩება. be used to-ში to წინდებულია და ამიტომ -ing ფორმას იღებს. get used to შეჩვევის პროცესს აღნიშნავს, be used to — არსებულ მდგომარეობას.",
        "en": "For a negative former habit use did not use to, dropping -d. In be used to, to is a preposition and takes -ing. Get used to describes becoming accustomed; be used to describes the resulting state.",
        "ru": "Отрицание прежней привычки: did not use to, без -d. В be used to слово to — предлог, поэтому нужна форма -ing. Get used to обозначает привыкание, be used to — состояние привычности."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადრე იქ ვცხოვრობდი.",
            "en": "Complete the sentence to express: Раньше я там жила.",
            "ru": "Заполните предложение со значением: Раньше я там жила."
          },
          "sentence": "I ____ live there.",
          "answer": "used to",
          "options": [
            "used to",
            "am used to",
            "use"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადრე სკოლაში ფეხით დადიოდი?",
            "en": "Complete the sentence to express: Раньше вы ходили в школу пешком?",
            "ru": "Заполните предложение со значением: Раньше вы ходили в школу пешком?"
          },
          "sentence": "Did you ____ to walk to school?",
          "answer": "use",
          "options": [
            "use",
            "used",
            "using"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადრე გაღვიძებას შეჩვეული ვარ.",
            "en": "Complete the sentence to express: Я привыкла рано просыпаться.",
            "ru": "Заполните предложение со значением: Я привыкла рано просыпаться."
          },
          "sentence": "I am used to ____ early.",
          "answer": "waking",
          "options": [
            "waking",
            "wake",
            "woke"
          ]
        },
        {
          "id": "grammar-en-b1-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადრე იქ ვცხოვრობდი.",
            "en": "Complete a different part of the sentence. Intended meaning: Раньше я там жила.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Раньше я там жила."
          },
          "sentence": "____ used to live there.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b1-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადრე იქ ვცხოვრობდი.",
            "en": "Choose the complete sentence expressing: Раньше я там жила.",
            "ru": "Выберите полное предложение со значением: Раньше я там жила."
          },
          "sentence": "____",
          "answer": "I used to live there.",
          "options": [
            "I used to live there.",
            "I am used to live there.",
            "I use live there."
          ]
        },
        {
          "id": "grammar-en-b1-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადრე იქ ვცხოვრობდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Раньше я там жила.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Раньше я там жила."
          },
          "sentence": "I am used to live there. → ____",
          "answer": "I used to live there.",
          "options": [
            "I used to live there.",
            "I use live there.",
            "I am used to live there."
          ]
        },
        {
          "id": "grammar-en-b1-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადრე სკოლაში ფეხით დადიოდი?",
            "en": "Complete a different part of the sentence. Intended meaning: Раньше вы ходили в школу пешком?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Раньше вы ходили в школу пешком?"
          },
          "sentence": "____ you use to walk to school?",
          "answer": "Did",
          "options": [
            "Did",
            "Does",
            "Is"
          ]
        },
        {
          "id": "grammar-en-b1-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადრე სკოლაში ფეხით დადიოდი?",
            "en": "Choose the complete sentence expressing: Раньше вы ходили в школу пешком?",
            "ru": "Выберите полное предложение со значением: Раньше вы ходили в школу пешком?"
          },
          "sentence": "____",
          "answer": "Did you use to walk to school?",
          "options": [
            "Did you use to walk to school?",
            "Did you used to walk to school?",
            "Did you using to walk to school?"
          ]
        },
        {
          "id": "grammar-en-b1-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადრე სკოლაში ფეხით დადიოდი?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Раньше вы ходили в школу пешком?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Раньше вы ходили в школу пешком?"
          },
          "sentence": "Did you used to walk to school? → ____",
          "answer": "Did you use to walk to school?",
          "options": [
            "Did you use to walk to school?",
            "Did you using to walk to school?",
            "Did you used to walk to school?"
          ]
        },
        {
          "id": "grammar-en-b1-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადრე გაღვიძებას შეჩვეული ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: Я привыкла рано просыпаться.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я привыкла рано просыпаться."
          },
          "sentence": "____ am used to waking early.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b1-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადრე გაღვიძებას შეჩვეული ვარ.",
            "en": "Choose the complete sentence expressing: Я привыкла рано просыпаться.",
            "ru": "Выберите полное предложение со значением: Я привыкла рано просыпаться."
          },
          "sentence": "____",
          "answer": "I am used to waking early.",
          "options": [
            "I am used to waking early.",
            "I am used to wake early.",
            "I am used to woke early."
          ]
        },
        {
          "id": "grammar-en-b1-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადრე გაღვიძებას შეჩვეული ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я привыкла рано просыпаться.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я привыкла рано просыпаться."
          },
          "sentence": "I am used to wake early. → ____",
          "answer": "I am used to waking early.",
          "options": [
            "I am used to waking early.",
            "I am used to woke early.",
            "I am used to wake early."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-1",
      "level": "B2",
      "title": {
        "ka": "ხანგრძლივი გამოცდილება",
        "en": "Perfect continuous forms",
        "ru": "Perfect Continuous"
      },
      "explanation": {
        "ka": "have/has been + -ing ხაზს უსვამს დღემდე მიმდინარე ხანგრძლივობას ან პროცესის შედეგს. had been + -ing პროცესს წარსულ მომენტამდე აკავშირებს. continuous ფორმა პროცესს გამოყოფს, simple perfect ხშირად დასრულებულ რაოდენობას: I have written three emails. მდგომარეობის know-სთან ჩვეულებრივ have known ითქმის. been არ გამოტოვო have been working-ში.",
        "en": "Have/has been + -ing highlights duration up to now or evidence of a process. Had been + -ing links a process to a later past point. The continuous form focuses on process; simple perfect often counts completed results: I have written three emails. A state verb such as know normally takes have known. Do not omit been from have been working.",
        "ru": "Have/has been + -ing подчёркивает длительность до настоящего или следы процесса. Had been + -ing связывает процесс с последующим моментом в прошлом. Длительная форма выделяет процесс; простой перфект часто считает результаты: I have written three emails. С состоянием know обычно используется have known. Не пропускайте been в have been working."
      },
      "rules": [
        {
          "form": "I have been waiting for an hour.",
          "detail": {
            "ka": "have/has been + -ing ხაზს უსვამს დღემდე მიმდინარე ხანგრძლივობას ან პროცესის შედეგს. შეადარე მაგალითს: I have been waiting for an hour. — უკვე ერთი საათია ველოდები.",
            "en": "Have/has been + -ing highlights duration up to now or evidence of a process. Compare the example: I have been waiting for an hour. — I have been waiting for an hour.",
            "ru": "Have/has been + -ing подчёркивает длительность до настоящего или следы процесса. Сравните с примером: I have been waiting for an hour. — Я жду уже час."
          }
        },
        {
          "form": "She has been studying all day.",
          "detail": {
            "ka": "had been + -ing პროცესს წარსულ მომენტამდე აკავშირებს. შეადარე მაგალითს: She has been studying all day. — ის მთელი დღე სწავლობს.",
            "en": "Had been + -ing links a process to a later past point. Compare the example: She has been studying all day. — She has been studying all day.",
            "ru": "Had been + -ing связывает процесс с последующим моментом в прошлом. Сравните с примером: She has been studying all day. — Она занимается весь день."
          }
        },
        {
          "form": "We had been walking before it rained.",
          "detail": {
            "ka": "continuous ფორმა პროცესს გამოყოფს, simple perfect ხშირად დასრულებულ რაოდენობას: I have written three emails. შეადარე მაგალითს: We had been walking before it rained. — წვიმამდე დიდხანს ფეხით მივდიოდით.",
            "en": "The continuous form focuses on process; simple perfect often counts completed results: I have written three emails. Compare the example: We had been walking before it rained. — We had been walking before it rained.",
            "ru": "Длительная форма выделяет процесс; простой перфект часто считает результаты: I have written three emails. Сравните с примером: We had been walking before it rained. — До дождя мы долго шли пешком."
          }
        }
      ],
      "examples": [
        {
          "en": "I have been waiting for an hour.",
          "ru": "Я жду уже час.",
          "ka": "უკვე ერთი საათია ველოდები."
        },
        {
          "en": "She has been studying all day.",
          "ru": "Она занимается весь день.",
          "ka": "ის მთელი დღე სწავლობს."
        },
        {
          "en": "We had been walking before it rained.",
          "ru": "До дождя мы долго шли пешком.",
          "ka": "წვიმამდე დიდხანს ფეხით მივდიოდით."
        }
      ],
      "pitfalls": {
        "ka": "continuous ფორმა პროცესს გამოყოფს, simple perfect ხშირად დასრულებულ რაოდენობას: I have written three emails. მდგომარეობის know-სთან ჩვეულებრივ have known ითქმის. been არ გამოტოვო have been working-ში.",
        "en": "The continuous form focuses on process; simple perfect often counts completed results: I have written three emails. A state verb such as know normally takes have known. Do not omit been from have been working.",
        "ru": "Длительная форма выделяет процесс; простой перфект часто считает результаты: I have written three emails. С состоянием know обычно используется have known. Не пропускайте been в have been working."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: უკვე ერთი საათია ველოდები.",
            "en": "Complete the sentence to express: Я жду уже час.",
            "ru": "Заполните предложение со значением: Я жду уже час."
          },
          "sentence": "I have ____ waiting for an hour.",
          "answer": "been",
          "options": [
            "been",
            "being",
            "be"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის მთელი დღე სწავლობს.",
            "en": "Complete the sentence to express: Она занимается весь день.",
            "ru": "Заполните предложение со значением: Она занимается весь день."
          },
          "sentence": "She has been ____ all day.",
          "answer": "studying",
          "options": [
            "studying",
            "study",
            "studied"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წვიმამდე დიდხანს ფეხით მივდიოდით.",
            "en": "Complete the sentence to express: До дождя мы долго шли пешком.",
            "ru": "Заполните предложение со значением: До дождя мы долго шли пешком."
          },
          "sentence": "We ____ been walking before it rained.",
          "answer": "had",
          "options": [
            "had",
            "have",
            "are"
          ]
        },
        {
          "id": "grammar-en-b2-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: უკვე ერთი საათია ველოდები.",
            "en": "Complete a different part of the sentence. Intended meaning: Я жду уже час.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я жду уже час."
          },
          "sentence": "____ have been waiting for an hour.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: უკვე ერთი საათია ველოდები.",
            "en": "Choose the complete sentence expressing: Я жду уже час.",
            "ru": "Выберите полное предложение со значением: Я жду уже час."
          },
          "sentence": "____",
          "answer": "I have been waiting for an hour.",
          "options": [
            "I have been waiting for an hour.",
            "I have being waiting for an hour.",
            "I have be waiting for an hour."
          ]
        },
        {
          "id": "grammar-en-b2-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: უკვე ერთი საათია ველოდები.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я жду уже час.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я жду уже час."
          },
          "sentence": "I have being waiting for an hour. → ____",
          "answer": "I have been waiting for an hour.",
          "options": [
            "I have been waiting for an hour.",
            "I have be waiting for an hour.",
            "I have being waiting for an hour."
          ]
        },
        {
          "id": "grammar-en-b2-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის მთელი დღე სწავლობს.",
            "en": "Complete a different part of the sentence. Intended meaning: Она занимается весь день.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она занимается весь день."
          },
          "sentence": "____ has been studying all day.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b2-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის მთელი დღე სწავლობს.",
            "en": "Choose the complete sentence expressing: Она занимается весь день.",
            "ru": "Выберите полное предложение со значением: Она занимается весь день."
          },
          "sentence": "____",
          "answer": "She has been studying all day.",
          "options": [
            "She has been studying all day.",
            "She has been study all day.",
            "She has been studied all day."
          ]
        },
        {
          "id": "grammar-en-b2-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის მთელი დღე სწავლობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она занимается весь день.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она занимается весь день."
          },
          "sentence": "She has been study all day. → ____",
          "answer": "She has been studying all day.",
          "options": [
            "She has been studying all day.",
            "She has been studied all day.",
            "She has been study all day."
          ]
        },
        {
          "id": "grammar-en-b2-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წვიმამდე დიდხანს ფეხით მივდიოდით.",
            "en": "Complete a different part of the sentence. Intended meaning: До дождя мы долго шли пешком.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: До дождя мы долго шли пешком."
          },
          "sentence": "____ had been walking before it rained.",
          "answer": "We",
          "options": [
            "We",
            "Us",
            "Our"
          ]
        },
        {
          "id": "grammar-en-b2-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წვიმამდე დიდხანს ფეხით მივდიოდით.",
            "en": "Choose the complete sentence expressing: До дождя мы долго шли пешком.",
            "ru": "Выберите полное предложение со значением: До дождя мы долго шли пешком."
          },
          "sentence": "____",
          "answer": "We had been walking before it rained.",
          "options": [
            "We had been walking before it rained.",
            "We have been walking before it rained.",
            "We are been walking before it rained."
          ]
        },
        {
          "id": "grammar-en-b2-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წვიმამდე დიდხანს ფეხით მივდიოდით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: До дождя мы долго шли пешком.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: До дождя мы долго шли пешком."
          },
          "sentence": "We have been walking before it rained. → ____",
          "answer": "We had been walking before it rained.",
          "options": [
            "We had been walking before it rained.",
            "We are been walking before it rained.",
            "We have been walking before it rained."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-2",
      "level": "B2",
      "title": {
        "ka": "არარეალური წარსული",
        "en": "Third and mixed conditionals",
        "ru": "Третье и смешанное условные"
      },
      "explanation": {
        "ka": "წარსულში არმომხდარი პირობაა if + had + participle, would have + participle. შერეული პირობა წარსულ მიზეზს აწმყო შედეგს უკავშირებს. მესამე პირობითი წარსულ ფაქტს საპირისპიროდ წარმოიდგენს. mixed ფორმაში ორივე ნაწილის დროის აზრი დამოუკიდებლად განსაზღვრე: had studied წარსულია, would know now — აწმყო. would have-ის შემდეგ მესამე ფორმა აუცილებელია.",
        "en": "An unreal past uses if + had + participle, would have + participle. Mixed conditions can connect a past cause with a present result. Third conditional imagines an alternative to a past fact. In a mixed pattern identify each time reference separately: had studied is past, would know now is present. A participle is required after would have.",
        "ru": "Нереальное прошлое: if + had + третья форма, would have + третья форма. Смешанное условие может связывать прошлую причину с настоящим результатом. Третье условное представляет альтернативу прошлому факту. В смешанном определяйте время частей отдельно: had studied — прошлое, would know now — настоящее. После would have обязательна третья форма."
      },
      "rules": [
        {
          "form": "If I had left, I would have arrived.",
          "detail": {
            "ka": "წარსულში არმომხდარი პირობაა if + had + participle, would have + participle. შეადარე მაგალითს: If I had left earlier, I would have arrived on time. — ადრე რომ გავსულიყავი, დროზე მივიდოდი.",
            "en": "An unreal past uses if + had + participle, would have + participle. Compare the example: If I had left earlier, I would have arrived on time. — If I had left earlier, I would have arrived on time.",
            "ru": "Нереальное прошлое: if + had + третья форма, would have + третья форма. Сравните с примером: If I had left earlier, I would have arrived on time. — Если бы я вышла раньше, то пришла бы вовремя."
          }
        },
        {
          "form": "If I had studied, I would know now.",
          "detail": {
            "ka": "შერეული პირობა წარსულ მიზეზს აწმყო შედეგს უკავშირებს. შეადარე მაგალითს: I would have called if I had known. — რომ მცოდნოდა, დავრეკავდი.",
            "en": "Mixed conditions can connect a past cause with a present result. Compare the example: I would have called if I had known. — I would have called if I had known.",
            "ru": "Смешанное условие может связывать прошлую причину с настоящим результатом. Сравните с примером: I would have called if I had known. — Я бы позвонила, если бы знала."
          }
        },
        {
          "form": "If I were careful, I would not have lost it.",
          "detail": {
            "ka": "მესამე პირობითი წარსულ ფაქტს საპირისპიროდ წარმოიდგენს. შეადარე მაგალითს: If I had studied, I would know the answer now. — რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
            "en": "Third conditional imagines an alternative to a past fact. Compare the example: If I had studied, I would know the answer now. — If I had studied, I would know the answer now.",
            "ru": "Третье условное представляет альтернативу прошлому факту. Сравните с примером: If I had studied, I would know the answer now. — Если бы я училась, сейчас знала бы ответ."
          }
        }
      ],
      "examples": [
        {
          "en": "If I had left earlier, I would have arrived on time.",
          "ru": "Если бы я вышла раньше, то пришла бы вовремя.",
          "ka": "ადრე რომ გავსულიყავი, დროზე მივიდოდი."
        },
        {
          "en": "I would have called if I had known.",
          "ru": "Я бы позвонила, если бы знала.",
          "ka": "რომ მცოდნოდა, დავრეკავდი."
        },
        {
          "en": "If I had studied, I would know the answer now.",
          "ru": "Если бы я училась, сейчас знала бы ответ.",
          "ka": "რომ მესწავლა, ახლა პასუხი მეცოდინებოდა."
        }
      ],
      "pitfalls": {
        "ka": "მესამე პირობითი წარსულ ფაქტს საპირისპიროდ წარმოიდგენს. mixed ფორმაში ორივე ნაწილის დროის აზრი დამოუკიდებლად განსაზღვრე: had studied წარსულია, would know now — აწმყო. would have-ის შემდეგ მესამე ფორმა აუცილებელია.",
        "en": "Third conditional imagines an alternative to a past fact. In a mixed pattern identify each time reference separately: had studied is past, would know now is present. A participle is required after would have.",
        "ru": "Третье условное представляет альтернативу прошлому факту. В смешанном определяйте время частей отдельно: had studied — прошлое, would know now — настоящее. После would have обязательна третья форма."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადრე რომ გავსულიყავი, დროზე მივიდოდი.",
            "en": "Complete the sentence to express: Если бы я вышла раньше, то пришла бы вовремя.",
            "ru": "Заполните предложение со значением: Если бы я вышла раньше, то пришла бы вовремя."
          },
          "sentence": "If I ____ left earlier, I would have arrived on time.",
          "answer": "had",
          "options": [
            "had",
            "have",
            "would"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რომ მცოდნოდა, დავრეკავდი.",
            "en": "Complete the sentence to express: Я бы позвонила, если бы знала.",
            "ru": "Заполните предложение со значением: Я бы позвонила, если бы знала."
          },
          "sentence": "I would ____ called if I had known.",
          "answer": "have",
          "options": [
            "have",
            "had",
            "be"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
            "en": "Complete the sentence to express: Если бы я училась, сейчас знала бы ответ.",
            "ru": "Заполните предложение со значением: Если бы я училась, сейчас знала бы ответ."
          },
          "sentence": "If I had studied, I would ____ the answer now.",
          "answer": "know",
          "options": [
            "know",
            "have known",
            "knew"
          ]
        },
        {
          "id": "grammar-en-b2-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადრე რომ გავსულიყავი, დროზე მივიდოდი.",
            "en": "Complete a different part of the sentence. Intended meaning: Если бы я вышла раньше, то пришла бы вовремя.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Если бы я вышла раньше, то пришла бы вовремя."
          },
          "sentence": "____ I had left earlier, I would have arrived on time.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-b2-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადრე რომ გავსულიყავი, დროზე მივიდოდი.",
            "en": "Choose the complete sentence expressing: Если бы я вышла раньше, то пришла бы вовремя.",
            "ru": "Выберите полное предложение со значением: Если бы я вышла раньше, то пришла бы вовремя."
          },
          "sentence": "____",
          "answer": "If I had left earlier, I would have arrived on time.",
          "options": [
            "If I had left earlier, I would have arrived on time.",
            "If I have left earlier, I would have arrived on time.",
            "If I would left earlier, I would have arrived on time."
          ]
        },
        {
          "id": "grammar-en-b2-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადრე რომ გავსულიყავი, დროზე მივიდოდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Если бы я вышла раньше, то пришла бы вовремя.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Если бы я вышла раньше, то пришла бы вовремя."
          },
          "sentence": "If I have left earlier, I would have arrived on time. → ____",
          "answer": "If I had left earlier, I would have arrived on time.",
          "options": [
            "If I had left earlier, I would have arrived on time.",
            "If I would left earlier, I would have arrived on time.",
            "If I have left earlier, I would have arrived on time."
          ]
        },
        {
          "id": "grammar-en-b2-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რომ მცოდნოდა, დავრეკავდი.",
            "en": "Complete a different part of the sentence. Intended meaning: Я бы позвонила, если бы знала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Я бы позвонила, если бы знала."
          },
          "sentence": "____ would have called if I had known.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რომ მცოდნოდა, დავრეკავდი.",
            "en": "Choose the complete sentence expressing: Я бы позвонила, если бы знала.",
            "ru": "Выберите полное предложение со значением: Я бы позвонила, если бы знала."
          },
          "sentence": "____",
          "answer": "I would have called if I had known.",
          "options": [
            "I would have called if I had known.",
            "I would had called if I had known.",
            "I would be called if I had known."
          ]
        },
        {
          "id": "grammar-en-b2-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რომ მცოდნოდა, დავრეკავდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Я бы позвонила, если бы знала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Я бы позвонила, если бы знала."
          },
          "sentence": "I would had called if I had known. → ____",
          "answer": "I would have called if I had known.",
          "options": [
            "I would have called if I had known.",
            "I would be called if I had known.",
            "I would had called if I had known."
          ]
        },
        {
          "id": "grammar-en-b2-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Если бы я училась, сейчас знала бы ответ.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Если бы я училась, сейчас знала бы ответ."
          },
          "sentence": "____ I had studied, I would know the answer now.",
          "answer": "If",
          "options": [
            "If",
            "Although",
            "Because"
          ]
        },
        {
          "id": "grammar-en-b2-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
            "en": "Choose the complete sentence expressing: Если бы я училась, сейчас знала бы ответ.",
            "ru": "Выберите полное предложение со значением: Если бы я училась, сейчас знала бы ответ."
          },
          "sentence": "____",
          "answer": "If I had studied, I would know the answer now.",
          "options": [
            "If I had studied, I would know the answer now.",
            "If I had studied, I would have known the answer now.",
            "If I had studied, I would knew the answer now."
          ]
        },
        {
          "id": "grammar-en-b2-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რომ მესწავლა, ახლა პასუხი მეცოდინებოდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Если бы я училась, сейчас знала бы ответ.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Если бы я училась, сейчас знала бы ответ."
          },
          "sentence": "If I had studied, I would have known the answer now. → ____",
          "answer": "If I had studied, I would know the answer now.",
          "options": [
            "If I had studied, I would know the answer now.",
            "If I had studied, I would knew the answer now.",
            "If I had studied, I would have known the answer now."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-3",
      "level": "B2",
      "title": {
        "ka": "სურვილი და სინანული",
        "en": "Wish and if only",
        "ru": "Wish и if only"
      },
      "explanation": {
        "ka": "wish + Past Simple აწმყოს შეცვლის სურვილია; wish + Past Perfect — წარსულის სინანული. wish + would ხშირად სხვისი ქცევის ცვლილების სურვილს გამოხატავს. wish არ არის მომავლის ჩვეულებრივი იმედი; ამისთვის hope ხშირად გამოდგება. I wish I knew აწმყოში უცოდინარობას გულისხმობს. wish + would საკუთარ ნებაყოფლობით ქმედებაზე ჩვეულებრივ არ გამოიყენება.",
        "en": "Wish + past simple expresses a desired change now; wish + past perfect regrets the past. Wish + would often requests a change in someone else’s behaviour. Wish is not the usual expression of a realistic future hope; hope often serves that purpose. I wish I knew implies not knowing now. Wish + would is not normally used for your own voluntary actions.",
        "ru": "Wish + Past Simple выражает желание изменить настоящее; wish + Past Perfect — сожаление о прошлом. Wish + would часто относится к желаемому изменению чужого поведения. Wish обычно не выражает реалистичную надежду на будущее; для этого часто используется hope. I wish I knew подразумевает незнание сейчас. Wish + would обычно не относится к собственному добровольному действию."
      },
      "rules": [
        {
          "form": "I wish I knew.",
          "detail": {
            "ka": "wish + Past Simple აწმყოს შეცვლის სურვილია; wish + Past Perfect — წარსულის სინანული. შეადარე მაგალითს: I wish I knew the answer. — ნეტავ პასუხი ვიცოდე.",
            "en": "Wish + past simple expresses a desired change now; wish + past perfect regrets the past. Compare the example: I wish I knew the answer. — I wish I knew the answer.",
            "ru": "Wish + Past Simple выражает желание изменить настоящее; wish + Past Perfect — сожаление о прошлом. Сравните с примером: I wish I knew the answer. — Жаль, что я не знаю ответа."
          }
        },
        {
          "form": "I wish I had listened.",
          "detail": {
            "ka": "wish + would ხშირად სხვისი ქცევის ცვლილების სურვილს გამოხატავს. შეადარე მაგალითს: I wish I had listened. — ნეტავ მომესმინა.",
            "en": "Wish + would often requests a change in someone else’s behaviour. Compare the example: I wish I had listened. — I wish I had listened.",
            "ru": "Wish + would часто относится к желаемому изменению чужого поведения. Сравните с примером: I wish I had listened. — Жаль, что я не послушала."
          }
        },
        {
          "form": "I wish they would stop.",
          "detail": {
            "ka": "wish არ არის მომავლის ჩვეულებრივი იმედი; ამისთვის hope ხშირად გამოდგება. შეადარე მაგალითს: I wish they would stop shouting. — ნეტავ ყვირილი შეწყვიტონ.",
            "en": "Wish is not the usual expression of a realistic future hope; hope often serves that purpose. Compare the example: I wish they would stop shouting. — I wish they would stop shouting.",
            "ru": "Wish обычно не выражает реалистичную надежду на будущее; для этого часто используется hope. Сравните с примером: I wish they would stop shouting. — Хочется, чтобы они перестали кричать."
          }
        }
      ],
      "examples": [
        {
          "en": "I wish I knew the answer.",
          "ru": "Жаль, что я не знаю ответа.",
          "ka": "ნეტავ პასუხი ვიცოდე."
        },
        {
          "en": "I wish I had listened.",
          "ru": "Жаль, что я не послушала.",
          "ka": "ნეტავ მომესმინა."
        },
        {
          "en": "I wish they would stop shouting.",
          "ru": "Хочется, чтобы они перестали кричать.",
          "ka": "ნეტავ ყვირილი შეწყვიტონ."
        }
      ],
      "pitfalls": {
        "ka": "wish არ არის მომავლის ჩვეულებრივი იმედი; ამისთვის hope ხშირად გამოდგება. I wish I knew აწმყოში უცოდინარობას გულისხმობს. wish + would საკუთარ ნებაყოფლობით ქმედებაზე ჩვეულებრივ არ გამოიყენება.",
        "en": "Wish is not the usual expression of a realistic future hope; hope often serves that purpose. I wish I knew implies not knowing now. Wish + would is not normally used for your own voluntary actions.",
        "ru": "Wish обычно не выражает реалистичную надежду на будущее; для этого часто используется hope. I wish I knew подразумевает незнание сейчас. Wish + would обычно не относится к собственному добровольному действию."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნეტავ პასუხი ვიცოდე.",
            "en": "Complete the sentence to express: Жаль, что я не знаю ответа.",
            "ru": "Заполните предложение со значением: Жаль, что я не знаю ответа."
          },
          "sentence": "I wish I ____ the answer.",
          "answer": "knew",
          "options": [
            "knew",
            "know",
            "will know"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნეტავ მომესმინა.",
            "en": "Complete the sentence to express: Жаль, что я не послушала.",
            "ru": "Заполните предложение со значением: Жаль, что я не послушала."
          },
          "sentence": "I wish I ____ listened.",
          "answer": "had",
          "options": [
            "had",
            "have",
            "would"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნეტავ ყვირილი შეწყვიტონ.",
            "en": "Complete the sentence to express: Хочется, чтобы они перестали кричать.",
            "ru": "Заполните предложение со значением: Хочется, чтобы они перестали кричать."
          },
          "sentence": "I wish they ____ stop shouting.",
          "answer": "would",
          "options": [
            "would",
            "will",
            "had"
          ]
        },
        {
          "id": "grammar-en-b2-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნეტავ პასუხი ვიცოდე.",
            "en": "Complete a different part of the sentence. Intended meaning: Жаль, что я не знаю ответа.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Жаль, что я не знаю ответа."
          },
          "sentence": "____ wish I knew the answer.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნეტავ პასუხი ვიცოდე.",
            "en": "Choose the complete sentence expressing: Жаль, что я не знаю ответа.",
            "ru": "Выберите полное предложение со значением: Жаль, что я не знаю ответа."
          },
          "sentence": "____",
          "answer": "I wish I knew the answer.",
          "options": [
            "I wish I knew the answer.",
            "I wish I know the answer.",
            "I wish I will know the answer."
          ]
        },
        {
          "id": "grammar-en-b2-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნეტავ პასუხი ვიცოდე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Жаль, что я не знаю ответа.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Жаль, что я не знаю ответа."
          },
          "sentence": "I wish I know the answer. → ____",
          "answer": "I wish I knew the answer.",
          "options": [
            "I wish I knew the answer.",
            "I wish I will know the answer.",
            "I wish I know the answer."
          ]
        },
        {
          "id": "grammar-en-b2-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნეტავ მომესმინა.",
            "en": "Complete a different part of the sentence. Intended meaning: Жаль, что я не послушала.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Жаль, что я не послушала."
          },
          "sentence": "____ wish I had listened.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნეტავ მომესმინა.",
            "en": "Choose the complete sentence expressing: Жаль, что я не послушала.",
            "ru": "Выберите полное предложение со значением: Жаль, что я не послушала."
          },
          "sentence": "____",
          "answer": "I wish I had listened.",
          "options": [
            "I wish I had listened.",
            "I wish I have listened.",
            "I wish I would listened."
          ]
        },
        {
          "id": "grammar-en-b2-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნეტავ მომესმინა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Жаль, что я не послушала.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Жаль, что я не послушала."
          },
          "sentence": "I wish I have listened. → ____",
          "answer": "I wish I had listened.",
          "options": [
            "I wish I had listened.",
            "I wish I would listened.",
            "I wish I have listened."
          ]
        },
        {
          "id": "grammar-en-b2-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნეტავ ყვირილი შეწყვიტონ.",
            "en": "Complete a different part of the sentence. Intended meaning: Хочется, чтобы они перестали кричать.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Хочется, чтобы они перестали кричать."
          },
          "sentence": "____ wish they would stop shouting.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნეტავ ყვირილი შეწყვიტონ.",
            "en": "Choose the complete sentence expressing: Хочется, чтобы они перестали кричать.",
            "ru": "Выберите полное предложение со значением: Хочется, чтобы они перестали кричать."
          },
          "sentence": "____",
          "answer": "I wish they would stop shouting.",
          "options": [
            "I wish they would stop shouting.",
            "I wish they will stop shouting.",
            "I wish they had stop shouting."
          ]
        },
        {
          "id": "grammar-en-b2-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნეტავ ყვირილი შეწყვიტონ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Хочется, чтобы они перестали кричать.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Хочется, чтобы они перестали кричать."
          },
          "sentence": "I wish they will stop shouting. → ____",
          "answer": "I wish they would stop shouting.",
          "options": [
            "I wish they would stop shouting.",
            "I wish they had stop shouting.",
            "I wish they will stop shouting."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-4",
      "level": "B2",
      "title": {
        "ka": "ვარაუდი წარსულზე",
        "en": "Past modal deduction",
        "ru": "Предположения о прошлом"
      },
      "explanation": {
        "ka": "must/might/can’t + have + participle წარსულზე ვარაუდს გამოხატავს. should have ხშირად გამორჩენილ სწორ მოქმედებასა და კრიტიკას აღნიშნავს. have აქ ძირითადი ზმნა არ არის; ის წარსულის მოდალურ კონსტრუქციას ქმნის. can’t have ვარაუდით გამორიცხავს წარსულ მოვლენას. must have done არ ნიშნავს „უნდა გაეკეთებინა“ მოვალეობის აზრით.",
        "en": "Must/might/can’t + have + participle makes deductions about the past. Should have often expresses a missed desirable action or criticism. Have is auxiliary here, forming a modal perfect. Can’t have rules out a past event by deduction. Must have done does not express a past obligation to do something.",
        "ru": "Must/might/can’t + have + третья форма выражает предположение о прошлом. Should have часто обозначает упущенное правильное действие или критику. Have здесь — вспомогательное слово в модальном перфекте. Can’t have исключает прошлое событие по выводу. Must have done не обозначает обязанность совершить действие в прошлом."
      },
      "rules": [
        {
          "form": "She must have forgotten.",
          "detail": {
            "ka": "must/might/can’t + have + participle წარსულზე ვარაუდს გამოხატავს. შეადარე მაგალითს: She must have forgotten the time. — მას ალბათ დრო დაავიწყდა.",
            "en": "Must/might/can’t + have + participle makes deductions about the past. Compare the example: She must have forgotten the time. — She must have forgotten the time.",
            "ru": "Must/might/can’t + have + третья форма выражает предположение о прошлом. Сравните с примером: She must have forgotten the time. — Она, должно быть, забыла время."
          }
        },
        {
          "form": "He might have missed it.",
          "detail": {
            "ka": "should have ხშირად გამორჩენილ სწორ მოქმედებასა და კრიტიკას აღნიშნავს. შეადარე მაგალითს: He might have missed the bus. — შეიძლება ავტობუსს ვერ მიუსწრო.",
            "en": "Should have often expresses a missed desirable action or criticism. Compare the example: He might have missed the bus. — He might have missed the bus.",
            "ru": "Should have часто обозначает упущенное правильное действие или критику. Сравните с примером: He might have missed the bus. — Возможно, он опоздал на автобус."
          }
        },
        {
          "form": "You should have called.",
          "detail": {
            "ka": "have აქ ძირითადი ზმნა არ არის; ის წარსულის მოდალურ კონსტრუქციას ქმნის. შეადარე მაგალითს: You should have called earlier. — უფრო ადრე უნდა დაგერეკა.",
            "en": "Have is auxiliary here, forming a modal perfect. Compare the example: You should have called earlier. — You should have called earlier.",
            "ru": "Have здесь — вспомогательное слово в модальном перфекте. Сравните с примером: You should have called earlier. — Вам следовало позвонить раньше."
          }
        }
      ],
      "examples": [
        {
          "en": "She must have forgotten the time.",
          "ru": "Она, должно быть, забыла время.",
          "ka": "მას ალბათ დრო დაავიწყდა."
        },
        {
          "en": "He might have missed the bus.",
          "ru": "Возможно, он опоздал на автобус.",
          "ka": "შეიძლება ავტობუსს ვერ მიუსწრო."
        },
        {
          "en": "You should have called earlier.",
          "ru": "Вам следовало позвонить раньше.",
          "ka": "უფრო ადრე უნდა დაგერეკა."
        }
      ],
      "pitfalls": {
        "ka": "have აქ ძირითადი ზმნა არ არის; ის წარსულის მოდალურ კონსტრუქციას ქმნის. can’t have ვარაუდით გამორიცხავს წარსულ მოვლენას. must have done არ ნიშნავს „უნდა გაეკეთებინა“ მოვალეობის აზრით.",
        "en": "Have is auxiliary here, forming a modal perfect. Can’t have rules out a past event by deduction. Must have done does not express a past obligation to do something.",
        "ru": "Have здесь — вспомогательное слово в модальном перфекте. Can’t have исключает прошлое событие по выводу. Must have done не обозначает обязанность совершить действие в прошлом."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას ალბათ დრო დაავიწყდა.",
            "en": "Complete the sentence to express: Она, должно быть, забыла время.",
            "ru": "Заполните предложение со значением: Она, должно быть, забыла время."
          },
          "sentence": "She must ____ forgotten the time.",
          "answer": "have",
          "options": [
            "have",
            "has",
            "had"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეიძლება ავტობუსს ვერ მიუსწრო.",
            "en": "Complete the sentence to express: Возможно, он опоздал на автобус.",
            "ru": "Заполните предложение со значением: Возможно, он опоздал на автобус."
          },
          "sentence": "He might have ____ the bus.",
          "answer": "missed",
          "options": [
            "missed",
            "miss",
            "missing"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: უფრო ადრე უნდა დაგერეკა.",
            "en": "Complete the sentence to express: Вам следовало позвонить раньше.",
            "ru": "Заполните предложение со значением: Вам следовало позвонить раньше."
          },
          "sentence": "You should have ____ earlier.",
          "answer": "called",
          "options": [
            "called",
            "call",
            "calling"
          ]
        },
        {
          "id": "grammar-en-b2-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მას ალბათ დრო დაავიწყდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Она, должно быть, забыла время.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она, должно быть, забыла время."
          },
          "sentence": "____ must have forgotten the time.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b2-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მას ალბათ დრო დაავიწყდა.",
            "en": "Choose the complete sentence expressing: Она, должно быть, забыла время.",
            "ru": "Выберите полное предложение со значением: Она, должно быть, забыла время."
          },
          "sentence": "____",
          "answer": "She must have forgotten the time.",
          "options": [
            "She must have forgotten the time.",
            "She must has forgotten the time.",
            "She must had forgotten the time."
          ]
        },
        {
          "id": "grammar-en-b2-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მას ალბათ დრო დაავიწყდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она, должно быть, забыла время.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она, должно быть, забыла время."
          },
          "sentence": "She must has forgotten the time. → ____",
          "answer": "She must have forgotten the time.",
          "options": [
            "She must have forgotten the time.",
            "She must had forgotten the time.",
            "She must has forgotten the time."
          ]
        },
        {
          "id": "grammar-en-b2-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შეიძლება ავტობუსს ვერ მიუსწრო.",
            "en": "Complete a different part of the sentence. Intended meaning: Возможно, он опоздал на автобус.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Возможно, он опоздал на автобус."
          },
          "sentence": "____ might have missed the bus.",
          "answer": "He",
          "options": [
            "He",
            "Him",
            "His"
          ]
        },
        {
          "id": "grammar-en-b2-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შეიძლება ავტობუსს ვერ მიუსწრო.",
            "en": "Choose the complete sentence expressing: Возможно, он опоздал на автобус.",
            "ru": "Выберите полное предложение со значением: Возможно, он опоздал на автобус."
          },
          "sentence": "____",
          "answer": "He might have missed the bus.",
          "options": [
            "He might have missed the bus.",
            "He might have miss the bus.",
            "He might have missing the bus."
          ]
        },
        {
          "id": "grammar-en-b2-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შეიძლება ავტობუსს ვერ მიუსწრო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Возможно, он опоздал на автобус.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Возможно, он опоздал на автобус."
          },
          "sentence": "He might have miss the bus. → ____",
          "answer": "He might have missed the bus.",
          "options": [
            "He might have missed the bus.",
            "He might have missing the bus.",
            "He might have miss the bus."
          ]
        },
        {
          "id": "grammar-en-b2-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: უფრო ადრე უნდა დაგერეკა.",
            "en": "Complete a different part of the sentence. Intended meaning: Вам следовало позвонить раньше.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вам следовало позвонить раньше."
          },
          "sentence": "____ should have called earlier.",
          "answer": "You",
          "options": [
            "You",
            "Your",
            "Yours"
          ]
        },
        {
          "id": "grammar-en-b2-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: უფრო ადრე უნდა დაგერეკა.",
            "en": "Choose the complete sentence expressing: Вам следовало позвонить раньше.",
            "ru": "Выберите полное предложение со значением: Вам следовало позвонить раньше."
          },
          "sentence": "____",
          "answer": "You should have called earlier.",
          "options": [
            "You should have called earlier.",
            "You should have call earlier.",
            "You should have calling earlier."
          ]
        },
        {
          "id": "grammar-en-b2-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: უფრო ადრე უნდა დაგერეკა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вам следовало позвонить раньше.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вам следовало позвонить раньше."
          },
          "sentence": "You should have call earlier. → ____",
          "answer": "You should have called earlier.",
          "options": [
            "You should have called earlier.",
            "You should have calling earlier.",
            "You should have call earlier."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-5",
      "level": "B2",
      "title": {
        "ka": "მომავლის დახვეწილი ფორმები",
        "en": "Future continuous and perfect",
        "ru": "Future Continuous и Future Perfect"
      },
      "explanation": {
        "ka": "will be + -ing მომავალ მომენტში მიმდინარე პროცესია; will have + participle — მომავალი ვადისათვის დასრულებული მოქმედება. by ვადას აღნიშნავს. future perfect-ს ხშირად by tomorrow ან by the time ახლავს. by ვადისათვის დასრულებას ნიშნავს, until კი გაგრძელების საზღვარს. will have finished-სა და will be finishing-ს შორის დასრულება/პროცესის განსხვავება შეინარჩუნე.",
        "en": "Will be + -ing describes a process at a future moment; will have + participle describes completion by a future deadline. By marks the deadline. Future perfect often occurs with by tomorrow or by the time. By marks completion before a deadline; until marks continuation up to a limit. Preserve the completion/process contrast between will have finished and will be finishing.",
        "ru": "Will be + -ing описывает процесс в будущий момент; will have + третья форма — завершение к будущему сроку. By обозначает крайний срок. Future Perfect часто сочетается с by tomorrow или by the time. By обозначает завершение к сроку, until — продолжение до границы. Различайте результат will have finished и процесс will be finishing."
      },
      "rules": [
        {
          "form": "At eight I will be flying.",
          "detail": {
            "ka": "will be + -ing მომავალ მომენტში მიმდინარე პროცესია; will have + participle — მომავალი ვადისათვის დასრულებული მოქმედება. შეადარე მაგალითს: At eight I will be flying. — რვა საათზე ფრენაში ვიქნები.",
            "en": "Will be + -ing describes a process at a future moment; will have + participle describes completion by a future deadline. Compare the example: At eight I will be flying. — At eight I will be flying.",
            "ru": "Will be + -ing описывает процесс в будущий момент; will have + третья форма — завершение к будущему сроку. Сравните с примером: At eight I will be flying. — В восемь я буду лететь."
          }
        },
        {
          "form": "By Friday I will have finished.",
          "detail": {
            "ka": "by ვადას აღნიშნავს. შეადარე მაგალითს: By Friday I will have finished. — პარასკევისთვის დასრულებული მექნება.",
            "en": "By marks the deadline. Compare the example: By Friday I will have finished. — By Friday I will have finished.",
            "ru": "By обозначает крайний срок. Сравните с примером: By Friday I will have finished. — К пятнице я закончу."
          }
        },
        {
          "form": "Will you be using the car?",
          "detail": {
            "ka": "future perfect-ს ხშირად by tomorrow ან by the time ახლავს. შეადარე მაგალითს: Will you be using the car tonight? — დღეს საღამოს მანქანას გამოიყენებ?",
            "en": "Future perfect often occurs with by tomorrow or by the time. Compare the example: Will you be using the car tonight? — Will you be using the car tonight?",
            "ru": "Future Perfect часто сочетается с by tomorrow или by the time. Сравните с примером: Will you be using the car tonight? — Вы будете пользоваться машиной сегодня вечером?"
          }
        }
      ],
      "examples": [
        {
          "en": "At eight I will be flying.",
          "ru": "В восемь я буду лететь.",
          "ka": "რვა საათზე ფრენაში ვიქნები."
        },
        {
          "en": "By Friday I will have finished.",
          "ru": "К пятнице я закончу.",
          "ka": "პარასკევისთვის დასრულებული მექნება."
        },
        {
          "en": "Will you be using the car tonight?",
          "ru": "Вы будете пользоваться машиной сегодня вечером?",
          "ka": "დღეს საღამოს მანქანას გამოიყენებ?"
        }
      ],
      "pitfalls": {
        "ka": "future perfect-ს ხშირად by tomorrow ან by the time ახლავს. by ვადისათვის დასრულებას ნიშნავს, until კი გაგრძელების საზღვარს. will have finished-სა და will be finishing-ს შორის დასრულება/პროცესის განსხვავება შეინარჩუნე.",
        "en": "Future perfect often occurs with by tomorrow or by the time. By marks completion before a deadline; until marks continuation up to a limit. Preserve the completion/process contrast between will have finished and will be finishing.",
        "ru": "Future Perfect часто сочетается с by tomorrow или by the time. By обозначает завершение к сроку, until — продолжение до границы. Различайте результат will have finished и процесс will be finishing."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: რვა საათზე ფრენაში ვიქნები.",
            "en": "Complete the sentence to express: В восемь я буду лететь.",
            "ru": "Заполните предложение со значением: В восемь я буду лететь."
          },
          "sentence": "At eight I will ____ flying.",
          "answer": "be",
          "options": [
            "be",
            "have",
            "been"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: პარასკევისთვის დასრულებული მექნება.",
            "en": "Complete the sentence to express: К пятнице я закончу.",
            "ru": "Заполните предложение со значением: К пятнице я закончу."
          },
          "sentence": "By Friday I will ____ finished.",
          "answer": "have",
          "options": [
            "have",
            "be",
            "had"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დღეს საღამოს მანქანას გამოიყენებ?",
            "en": "Complete the sentence to express: Вы будете пользоваться машиной сегодня вечером?",
            "ru": "Заполните предложение со значением: Вы будете пользоваться машиной сегодня вечером?"
          },
          "sentence": "Will you be ____ the car tonight?",
          "answer": "using",
          "options": [
            "using",
            "use",
            "used"
          ]
        },
        {
          "id": "grammar-en-b2-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: რვა საათზე ფრენაში ვიქნები.",
            "en": "Complete a different part of the sentence. Intended meaning: В восемь я буду лететь.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: В восемь я буду лететь."
          },
          "sentence": "At eight ____ will be flying.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: რვა საათზე ფრენაში ვიქნები.",
            "en": "Choose the complete sentence expressing: В восемь я буду лететь.",
            "ru": "Выберите полное предложение со значением: В восемь я буду лететь."
          },
          "sentence": "____",
          "answer": "At eight I will be flying.",
          "options": [
            "At eight I will be flying.",
            "At eight I will have flying.",
            "At eight I will been flying."
          ]
        },
        {
          "id": "grammar-en-b2-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: რვა საათზე ფრენაში ვიქნები.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: В восемь я буду лететь.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: В восемь я буду лететь."
          },
          "sentence": "At eight I will have flying. → ____",
          "answer": "At eight I will be flying.",
          "options": [
            "At eight I will be flying.",
            "At eight I will been flying.",
            "At eight I will have flying."
          ]
        },
        {
          "id": "grammar-en-b2-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: პარასკევისთვის დასრულებული მექნება.",
            "en": "Complete a different part of the sentence. Intended meaning: К пятнице я закончу.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: К пятнице я закончу."
          },
          "sentence": "By Friday ____ will have finished.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: პარასკევისთვის დასრულებული მექნება.",
            "en": "Choose the complete sentence expressing: К пятнице я закончу.",
            "ru": "Выберите полное предложение со значением: К пятнице я закончу."
          },
          "sentence": "____",
          "answer": "By Friday I will have finished.",
          "options": [
            "By Friday I will have finished.",
            "By Friday I will be finished.",
            "By Friday I will had finished."
          ]
        },
        {
          "id": "grammar-en-b2-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: პარასკევისთვის დასრულებული მექნება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: К пятнице я закончу.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: К пятнице я закончу."
          },
          "sentence": "By Friday I will be finished. → ____",
          "answer": "By Friday I will have finished.",
          "options": [
            "By Friday I will have finished.",
            "By Friday I will had finished.",
            "By Friday I will be finished."
          ]
        },
        {
          "id": "grammar-en-b2-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დღეს საღამოს მანქანას გამოიყენებ?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы будете пользоваться машиной сегодня вечером?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы будете пользоваться машиной сегодня вечером?"
          },
          "sentence": "Will you ____ using the car tonight?",
          "answer": "be",
          "options": [
            "be",
            "been",
            "being"
          ]
        },
        {
          "id": "grammar-en-b2-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დღეს საღამოს მანქანას გამოიყენებ?",
            "en": "Choose the complete sentence expressing: Вы будете пользоваться машиной сегодня вечером?",
            "ru": "Выберите полное предложение со значением: Вы будете пользоваться машиной сегодня вечером?"
          },
          "sentence": "____",
          "answer": "Will you be using the car tonight?",
          "options": [
            "Will you be using the car tonight?",
            "Will you be use the car tonight?",
            "Will you be used the car tonight?"
          ]
        },
        {
          "id": "grammar-en-b2-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დღეს საღამოს მანქანას გამოიყენებ?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы будете пользоваться машиной сегодня вечером?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы будете пользоваться машиной сегодня вечером?"
          },
          "sentence": "Will you be use the car tonight? → ____",
          "answer": "Will you be using the car tonight?",
          "options": [
            "Will you be using the car tonight?",
            "Will you be used the car tonight?",
            "Will you be use the car tonight?"
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-6",
      "level": "B2",
      "title": {
        "ka": "მიზეზი და დათმობა",
        "en": "Contrast, reason and purpose",
        "ru": "Уступка, причина и цель"
      },
      "explanation": {
        "ka": "although-ს მოსდევს წინადადება; despite-ს — სახელი ან -ing. because და because of ასევე განსხვავდება. so that ხშირად მიზანს გამოხატავს. although და but ერთსა და იმავე კონტრასტის მოდელში ერთად ნუ გააერთიანებ. despite of არასწორია; არსებობს in spite of. because-ს სრულ წინადადებას, because of-ს კი სახელურ ჯგუფს შეუთანხმე.",
        "en": "Although takes a clause; despite takes a noun or -ing form. Because and because of follow the same clause/noun distinction. So that often introduces purpose. Do not combine although and but in the same basic contrast pattern. Despite of is incorrect; in spite of is valid. Follow because with a clause and because of with a noun phrase.",
        "ru": "После although идёт предложение; после despite — существительное или -ing. Because и because of тоже различаются по типу дополнения. So that часто выражает цель. В одной базовой конструкции уступки не сочетайте although и but. Despite of неверно; существует in spite of. После because нужно предложение, после because of — именная группа."
      },
      "rules": [
        {
          "form": "although it rained",
          "detail": {
            "ka": "although-ს მოსდევს წინადადება; despite-ს — სახელი ან -ing. შეადარე მაგალითს: Although it rained, we went out. — მიუხედავად იმისა, რომ წვიმდა, გავედით.",
            "en": "Although takes a clause; despite takes a noun or -ing form. Compare the example: Although it rained, we went out. — Although it rained, we went out.",
            "ru": "После although идёт предложение; после despite — существительное или -ing. Сравните с примером: Although it rained, we went out. — Хотя шёл дождь, мы вышли."
          }
        },
        {
          "form": "despite the rain",
          "detail": {
            "ka": "because და because of ასევე განსხვავდება. შეადარე მაგალითს: Despite the rain, we went out. — წვიმის მიუხედავად გავედით.",
            "en": "Because and because of follow the same clause/noun distinction. Compare the example: Despite the rain, we went out. — Despite the rain, we went out.",
            "ru": "Because и because of тоже различаются по типу дополнения. Сравните с примером: Despite the rain, we went out. — Несмотря на дождь, мы вышли."
          }
        },
        {
          "form": "so that we could understand",
          "detail": {
            "ka": "so that ხშირად მიზანს გამოხატავს. შეადარე მაგალითს: She spoke slowly so that we could understand. — ნელა ლაპარაკობდა, რომ გაგვეგო.",
            "en": "So that often introduces purpose. Compare the example: She spoke slowly so that we could understand. — She spoke slowly so that we could understand.",
            "ru": "So that часто выражает цель. Сравните с примером: She spoke slowly so that we could understand. — Она говорила медленно, чтобы мы поняли."
          }
        }
      ],
      "examples": [
        {
          "en": "Although it rained, we went out.",
          "ru": "Хотя шёл дождь, мы вышли.",
          "ka": "მიუხედავად იმისა, რომ წვიმდა, გავედით."
        },
        {
          "en": "Despite the rain, we went out.",
          "ru": "Несмотря на дождь, мы вышли.",
          "ka": "წვიმის მიუხედავად გავედით."
        },
        {
          "en": "She spoke slowly so that we could understand.",
          "ru": "Она говорила медленно, чтобы мы поняли.",
          "ka": "ნელა ლაპარაკობდა, რომ გაგვეგო."
        }
      ],
      "pitfalls": {
        "ka": "although და but ერთსა და იმავე კონტრასტის მოდელში ერთად ნუ გააერთიანებ. despite of არასწორია; არსებობს in spite of. because-ს სრულ წინადადებას, because of-ს კი სახელურ ჯგუფს შეუთანხმე.",
        "en": "Do not combine although and but in the same basic contrast pattern. Despite of is incorrect; in spite of is valid. Follow because with a clause and because of with a noun phrase.",
        "ru": "В одной базовой конструкции уступки не сочетайте although и but. Despite of неверно; существует in spite of. После because нужно предложение, после because of — именная группа."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მიუხედავად იმისა, რომ წვიმდა, გავედით.",
            "en": "Complete the sentence to express: Хотя шёл дождь, мы вышли.",
            "ru": "Заполните предложение со значением: Хотя шёл дождь, мы вышли."
          },
          "sentence": "____ it rained, we went out.",
          "answer": "Although",
          "options": [
            "Although",
            "Despite",
            "Because of"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წვიმის მიუხედავად გავედით.",
            "en": "Complete the sentence to express: Несмотря на дождь, мы вышли.",
            "ru": "Заполните предложение со значением: Несмотря на дождь, мы вышли."
          },
          "sentence": "____ the rain, we went out.",
          "answer": "Despite",
          "options": [
            "Despite",
            "Although",
            "Because"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნელა ლაპარაკობდა, რომ გაგვეგო.",
            "en": "Complete the sentence to express: Она говорила медленно, чтобы мы поняли.",
            "ru": "Заполните предложение со значением: Она говорила медленно, чтобы мы поняли."
          },
          "sentence": "She spoke slowly ____ we could understand.",
          "answer": "so that",
          "options": [
            "so that",
            "despite",
            "because of"
          ]
        },
        {
          "id": "grammar-en-b2-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მიუხედავად იმისა, რომ წვიმდა, გავედით.",
            "en": "Complete a different part of the sentence. Intended meaning: Хотя шёл дождь, мы вышли.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Хотя шёл дождь, мы вышли."
          },
          "sentence": "Although it ____, we went out.",
          "answer": "rained",
          "options": [
            "rained",
            "rain",
            "raineds"
          ]
        },
        {
          "id": "grammar-en-b2-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მიუხედავად იმისა, რომ წვიმდა, გავედით.",
            "en": "Choose the complete sentence expressing: Хотя шёл дождь, мы вышли.",
            "ru": "Выберите полное предложение со значением: Хотя шёл дождь, мы вышли."
          },
          "sentence": "____",
          "answer": "Although it rained, we went out.",
          "options": [
            "Although it rained, we went out.",
            "Despite it rained, we went out.",
            "Because of it rained, we went out."
          ]
        },
        {
          "id": "grammar-en-b2-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მიუხედავად იმისა, რომ წვიმდა, გავედით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Хотя шёл дождь, мы вышли.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Хотя шёл дождь, мы вышли."
          },
          "sentence": "Despite it rained, we went out. → ____",
          "answer": "Although it rained, we went out.",
          "options": [
            "Although it rained, we went out.",
            "Because of it rained, we went out.",
            "Despite it rained, we went out."
          ]
        },
        {
          "id": "grammar-en-b2-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წვიმის მიუხედავად გავედით.",
            "en": "Complete a different part of the sentence. Intended meaning: Несмотря на дождь, мы вышли.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Несмотря на дождь, мы вышли."
          },
          "sentence": "Despite ____ rain, we went out.",
          "answer": "the",
          "options": [
            "the",
            "a",
            "an"
          ]
        },
        {
          "id": "grammar-en-b2-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წვიმის მიუხედავად გავედით.",
            "en": "Choose the complete sentence expressing: Несмотря на дождь, мы вышли.",
            "ru": "Выберите полное предложение со значением: Несмотря на дождь, мы вышли."
          },
          "sentence": "____",
          "answer": "Despite the rain, we went out.",
          "options": [
            "Despite the rain, we went out.",
            "Although the rain, we went out.",
            "Because the rain, we went out."
          ]
        },
        {
          "id": "grammar-en-b2-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წვიმის მიუხედავად გავედით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Несмотря на дождь, мы вышли.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Несмотря на дождь, мы вышли."
          },
          "sentence": "Although the rain, we went out. → ____",
          "answer": "Despite the rain, we went out.",
          "options": [
            "Despite the rain, we went out.",
            "Because the rain, we went out.",
            "Although the rain, we went out."
          ]
        },
        {
          "id": "grammar-en-b2-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნელა ლაპარაკობდა, რომ გაგვეგო.",
            "en": "Complete a different part of the sentence. Intended meaning: Она говорила медленно, чтобы мы поняли.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Она говорила медленно, чтобы мы поняли."
          },
          "sentence": "____ spoke slowly so that we could understand.",
          "answer": "She",
          "options": [
            "She",
            "Her",
            "Hers"
          ]
        },
        {
          "id": "grammar-en-b2-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნელა ლაპარაკობდა, რომ გაგვეგო.",
            "en": "Choose the complete sentence expressing: Она говорила медленно, чтобы мы поняли.",
            "ru": "Выберите полное предложение со значением: Она говорила медленно, чтобы мы поняли."
          },
          "sentence": "____",
          "answer": "She spoke slowly so that we could understand.",
          "options": [
            "She spoke slowly so that we could understand.",
            "She spoke slowly despite we could understand.",
            "She spoke slowly because of we could understand."
          ]
        },
        {
          "id": "grammar-en-b2-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნელა ლაპარაკობდა, რომ გაგვეგო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Она говорила медленно, чтобы мы поняли.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Она говорила медленно, чтобы мы поняли."
          },
          "sentence": "She spoke slowly despite we could understand. → ____",
          "answer": "She spoke slowly so that we could understand.",
          "options": [
            "She spoke slowly so that we could understand.",
            "She spoke slowly because of we could understand.",
            "She spoke slowly despite we could understand."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-7",
      "level": "B2",
      "title": {
        "ka": "ირიბი და თავაზიანი კითხვები",
        "en": "Indirect questions",
        "ru": "Косвенные и вежливые вопросы"
      },
      "explanation": {
        "ka": "ჩასმულ კითხვაში სიტყვების რიგი დამტკიცებითია: where the station is და არა where is the station. yes/no კითხვას if/whether უკავშირებს. მთავარი ნაწილის could/would კითხვა თავაზიანია, შიდა ნაწილში კი do/does აღარ ემატება. embedded yes/no კითხვას whether/if სჭირდება და არა that. მთლიანი წინადადება კითხვაა თუ მტკიცება, პუნქტუაციაც ამის მიხედვით შეარჩიე.",
        "en": "Embedded questions use statement order: where the station is, not where is the station. Use if/whether to embed a yes/no question. The outer could/would question is polite; the embedded part does not add do/does. An embedded yes/no question needs whether/if, not that. Choose punctuation according to whether the whole sentence asks or states something.",
        "ru": "Во вложенном вопросе нужен прямой порядок: where the station is, а не where is the station. Общий вопрос вводится через if/whether. Внешний вопрос с could/would вежливый; внутри do/does не добавляется. Косвенный общий вопрос требует whether/if, не that. Пунктуация зависит от того, является всё предложение вопросом или сообщением."
      },
      "rules": [
        {
          "form": "Could you tell me where it is?",
          "detail": {
            "ka": "ჩასმულ კითხვაში სიტყვების რიგი დამტკიცებითია: where the station is და არა where is the station. შეადარე მაგალითს: Could you tell me where the station is? — ხომ ვერ მეტყვით, სად არის სადგური?",
            "en": "Embedded questions use statement order: where the station is, not where is the station. Compare the example: Could you tell me where the station is? — Could you tell me where the station is?",
            "ru": "Во вложенном вопросе нужен прямой порядок: where the station is, а не where is the station. Сравните с примером: Could you tell me where the station is? — Не подскажете, где вокзал?"
          }
        },
        {
          "form": "Do you know if she is here?",
          "detail": {
            "ka": "yes/no კითხვას if/whether უკავშირებს. შეადარე მაგალითს: Do you know if she is here? — იცი, აქ არის თუ არა ის?",
            "en": "Use if/whether to embed a yes/no question. Compare the example: Do you know if she is here? — Do you know if she is here?",
            "ru": "Общий вопрос вводится через if/whether. Сравните с примером: Do you know if she is here? — Вы знаете, здесь ли она?"
          }
        },
        {
          "form": "I wonder what he wants.",
          "detail": {
            "ka": "მთავარი ნაწილის could/would კითხვა თავაზიანია, შიდა ნაწილში კი do/does აღარ ემატება. შეადარე მაგალითს: I wonder what he wants. — მაინტერესებს, რა უნდა მას.",
            "en": "The outer could/would question is polite; the embedded part does not add do/does. Compare the example: I wonder what he wants. — I wonder what he wants.",
            "ru": "Внешний вопрос с could/would вежливый; внутри do/does не добавляется. Сравните с примером: I wonder what he wants. — Интересно, чего он хочет."
          }
        }
      ],
      "examples": [
        {
          "en": "Could you tell me where the station is?",
          "ru": "Не подскажете, где вокзал?",
          "ka": "ხომ ვერ მეტყვით, სად არის სადგური?"
        },
        {
          "en": "Do you know if she is here?",
          "ru": "Вы знаете, здесь ли она?",
          "ka": "იცი, აქ არის თუ არა ის?"
        },
        {
          "en": "I wonder what he wants.",
          "ru": "Интересно, чего он хочет.",
          "ka": "მაინტერესებს, რა უნდა მას."
        }
      ],
      "pitfalls": {
        "ka": "მთავარი ნაწილის could/would კითხვა თავაზიანია, შიდა ნაწილში კი do/does აღარ ემატება. embedded yes/no კითხვას whether/if სჭირდება და არა that. მთლიანი წინადადება კითხვაა თუ მტკიცება, პუნქტუაციაც ამის მიხედვით შეარჩიე.",
        "en": "The outer could/would question is polite; the embedded part does not add do/does. An embedded yes/no question needs whether/if, not that. Choose punctuation according to whether the whole sentence asks or states something.",
        "ru": "Внешний вопрос с could/would вежливый; внутри do/does не добавляется. Косвенный общий вопрос требует whether/if, не that. Пунктуация зависит от того, является всё предложение вопросом или сообщением."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხომ ვერ მეტყვით, სად არის სადგური?",
            "en": "Complete the sentence to express: Не подскажете, где вокзал?",
            "ru": "Заполните предложение со значением: Не подскажете, где вокзал?"
          },
          "sentence": "Could you tell me where the station ____?",
          "answer": "is",
          "options": [
            "is",
            "does",
            "be"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: იცი, აქ არის თუ არა ის?",
            "en": "Complete the sentence to express: Вы знаете, здесь ли она?",
            "ru": "Заполните предложение со значением: Вы знаете, здесь ли она?"
          },
          "sentence": "Do you know ____ she is here?",
          "answer": "if",
          "options": [
            "if",
            "that",
            "what"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მაინტერესებს, რა უნდა მას.",
            "en": "Complete the sentence to express: Интересно, чего он хочет.",
            "ru": "Заполните предложение со значением: Интересно, чего он хочет."
          },
          "sentence": "I wonder what he ____.",
          "answer": "wants",
          "options": [
            "wants",
            "does want",
            "want"
          ]
        },
        {
          "id": "grammar-en-b2-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხომ ვერ მეტყვით, სად არის სადგური?",
            "en": "Complete a different part of the sentence. Intended meaning: Не подскажете, где вокзал?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Не подскажете, где вокзал?"
          },
          "sentence": "Could you tell me where ____ station is?",
          "answer": "the",
          "options": [
            "the",
            "a",
            "an"
          ]
        },
        {
          "id": "grammar-en-b2-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხომ ვერ მეტყვით, სად არის სადგური?",
            "en": "Choose the complete sentence expressing: Не подскажете, где вокзал?",
            "ru": "Выберите полное предложение со значением: Не подскажете, где вокзал?"
          },
          "sentence": "____",
          "answer": "Could you tell me where the station is?",
          "options": [
            "Could you tell me where the station is?",
            "Could you tell me where the station does?",
            "Could you tell me where the station be?"
          ]
        },
        {
          "id": "grammar-en-b2-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხომ ვერ მეტყვით, სად არის სადგური?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Не подскажете, где вокзал?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Не подскажете, где вокзал?"
          },
          "sentence": "Could you tell me where the station does? → ____",
          "answer": "Could you tell me where the station is?",
          "options": [
            "Could you tell me where the station is?",
            "Could you tell me where the station be?",
            "Could you tell me where the station does?"
          ]
        },
        {
          "id": "grammar-en-b2-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: იცი, აქ არის თუ არა ის?",
            "en": "Complete a different part of the sentence. Intended meaning: Вы знаете, здесь ли она?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Вы знаете, здесь ли она?"
          },
          "sentence": "____ you know if she is here?",
          "answer": "Do",
          "options": [
            "Do",
            "Does",
            "Are"
          ]
        },
        {
          "id": "grammar-en-b2-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: იცი, აქ არის თუ არა ის?",
            "en": "Choose the complete sentence expressing: Вы знаете, здесь ли она?",
            "ru": "Выберите полное предложение со значением: Вы знаете, здесь ли она?"
          },
          "sentence": "____",
          "answer": "Do you know if she is here?",
          "options": [
            "Do you know if she is here?",
            "Do you know that she is here?",
            "Do you know what she is here?"
          ]
        },
        {
          "id": "grammar-en-b2-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: იცი, აქ არის თუ არა ის?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Вы знаете, здесь ли она?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Вы знаете, здесь ли она?"
          },
          "sentence": "Do you know that she is here? → ____",
          "answer": "Do you know if she is here?",
          "options": [
            "Do you know if she is here?",
            "Do you know what she is here?",
            "Do you know that she is here?"
          ]
        },
        {
          "id": "grammar-en-b2-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მაინტერესებს, რა უნდა მას.",
            "en": "Complete a different part of the sentence. Intended meaning: Интересно, чего он хочет.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Интересно, чего он хочет."
          },
          "sentence": "____ wonder what he wants.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მაინტერესებს, რა უნდა მას.",
            "en": "Choose the complete sentence expressing: Интересно, чего он хочет.",
            "ru": "Выберите полное предложение со значением: Интересно, чего он хочет."
          },
          "sentence": "____",
          "answer": "I wonder what he wants.",
          "options": [
            "I wonder what he wants.",
            "I wonder what he does want.",
            "I wonder what he want."
          ]
        },
        {
          "id": "grammar-en-b2-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მაინტერესებს, რა უნდა მას.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Интересно, чего он хочет.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Интересно, чего он хочет."
          },
          "sentence": "I wonder what he does want. → ____",
          "answer": "I wonder what he wants.",
          "options": [
            "I wonder what he wants.",
            "I wonder what he want.",
            "I wonder what he does want."
          ]
        }
      ]
    },
    {
      "id": "grammar-en-b2-8",
      "level": "B2",
      "title": {
        "ka": "ხაზგასმა და შებრუნებული რიგი",
        "en": "Emphasis and inversion",
        "ru": "Выделение и инверсия"
      },
      "explanation": {
        "ka": "უარყოფითი გამოთქმის წინ წამოწევისას ხშირად ხდება დამხმარე ზმნის ინვერსია: Never have I… It was…that მოდელი ერთ ინფორმაციას უსვამს ხაზს. ინვერსიაში დამხმარე ზმნა ქვემდებარეს წინ უსწრებს, მთავარი ზმნა კი საჭირო ფორმაში რჩება. only then-ის შემდეგ Past Simple ითხოვს did + საწყის ფორმას. ყველა წინ წამოწეული გარემოება ინვერსიას არ იწვევს.",
        "en": "Fronted negative expressions often trigger auxiliary inversion: Never have I… The it was…that pattern highlights one piece of information. In inversion the auxiliary precedes the subject while the main verb keeps its required form. Past simple after only then uses did + base verb. Not every fronted adverbial triggers inversion.",
        "ru": "При вынесении отрицательного выражения вперёд часто нужна инверсия вспомогательного глагола: Never have I… Модель it was…that выделяет одну часть сообщения. При инверсии вспомогательный глагол предшествует подлежащему, а основной сохраняет нужную форму. Past Simple после only then требует did + начальную форму. Не всякое вынесенное обстоятельство вызывает инверсию."
      },
      "rules": [
        {
          "form": "Never have I seen this.",
          "detail": {
            "ka": "უარყოფითი გამოთქმის წინ წამოწევისას ხშირად ხდება დამხმარე ზმნის ინვერსია: Never have I… It was…that მოდელი ერთ ინფორმაციას უსვამს ხაზს. შეადარე მაგალითს: Never have I seen such a view. — ასეთი ხედი არასოდეს მინახავს.",
            "en": "Fronted negative expressions often trigger auxiliary inversion: Never have I… The it was…that pattern highlights one piece of information. Compare the example: Never have I seen such a view. — Never have I seen such a view.",
            "ru": "При вынесении отрицательного выражения вперёд часто нужна инверсия вспомогательного глагола: Never have I… Модель it was…that выделяет одну часть сообщения. Сравните с примером: Never have I seen such a view. — Никогда я не видела такого вида."
          }
        },
        {
          "form": "Only then did I understand.",
          "detail": {
            "ka": "ინვერსიაში დამხმარე ზმნა ქვემდებარეს წინ უსწრებს, მთავარი ზმნა კი საჭირო ფორმაში რჩება. შეადარე მაგალითს: Only then did I understand. — მხოლოდ მაშინ გავიგე.",
            "en": "In inversion the auxiliary precedes the subject while the main verb keeps its required form. Compare the example: Only then did I understand. — Only then did I understand.",
            "ru": "При инверсии вспомогательный глагол предшествует подлежащему, а основной сохраняет нужную форму. Сравните с примером: Only then did I understand. — Только тогда я поняла."
          }
        },
        {
          "form": "It was Ana who called.",
          "detail": {
            "ka": "only then-ის შემდეგ Past Simple ითხოვს did + საწყის ფორმას. შეადარე მაგალითს: It was Ana who called. — სწორედ ანამ დარეკა.",
            "en": "Past simple after only then uses did + base verb. Compare the example: It was Ana who called. — It was Ana who called.",
            "ru": "Past Simple после only then требует did + начальную форму. Сравните с примером: It was Ana who called. — Именно Анна позвонила."
          }
        }
      ],
      "examples": [
        {
          "en": "Never have I seen such a view.",
          "ru": "Никогда я не видела такого вида.",
          "ka": "ასეთი ხედი არასოდეს მინახავს."
        },
        {
          "en": "Only then did I understand.",
          "ru": "Только тогда я поняла.",
          "ka": "მხოლოდ მაშინ გავიგე."
        },
        {
          "en": "It was Ana who called.",
          "ru": "Именно Анна позвонила.",
          "ka": "სწორედ ანამ დარეკა."
        }
      ],
      "pitfalls": {
        "ka": "ინვერსიაში დამხმარე ზმნა ქვემდებარეს წინ უსწრებს, მთავარი ზმნა კი საჭირო ფორმაში რჩება. only then-ის შემდეგ Past Simple ითხოვს did + საწყის ფორმას. ყველა წინ წამოწეული გარემოება ინვერსიას არ იწვევს.",
        "en": "In inversion the auxiliary precedes the subject while the main verb keeps its required form. Past simple after only then uses did + base verb. Not every fronted adverbial triggers inversion.",
        "ru": "При инверсии вспомогательный глагол предшествует подлежащему, а основной сохраняет нужную форму. Past Simple после only then требует did + начальную форму. Не всякое вынесенное обстоятельство вызывает инверсию."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ასეთი ხედი არასოდეს მინახავს.",
            "en": "Complete the sentence to express: Никогда я не видела такого вида.",
            "ru": "Заполните предложение со значением: Никогда я не видела такого вида."
          },
          "sentence": "Never ____ I seen such a view.",
          "answer": "have",
          "options": [
            "have",
            "I have",
            "did"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მხოლოდ მაშინ გავიგე.",
            "en": "Complete the sentence to express: Только тогда я поняла.",
            "ru": "Заполните предложение со значением: Только тогда я поняла."
          },
          "sentence": "Only then ____ I understand.",
          "answer": "did",
          "options": [
            "did",
            "do",
            "was"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სწორედ ანამ დარეკა.",
            "en": "Complete the sentence to express: Именно Анна позвонила.",
            "ru": "Заполните предложение со значением: Именно Анна позвонила."
          },
          "sentence": "It was Ana ____ called.",
          "answer": "who",
          "options": [
            "who",
            "what",
            "where"
          ]
        },
        {
          "id": "grammar-en-b2-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ასეთი ხედი არასოდეს მინახავს.",
            "en": "Complete a different part of the sentence. Intended meaning: Никогда я не видела такого вида.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Никогда я не видела такого вида."
          },
          "sentence": "Never have ____ seen such a view.",
          "answer": "I",
          "options": [
            "I",
            "Me",
            "My"
          ]
        },
        {
          "id": "grammar-en-b2-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ასეთი ხედი არასოდეს მინახავს.",
            "en": "Choose the complete sentence expressing: Никогда я не видела такого вида.",
            "ru": "Выберите полное предложение со значением: Никогда я не видела такого вида."
          },
          "sentence": "____",
          "answer": "Never have I seen such a view.",
          "options": [
            "Never have I seen such a view.",
            "Never I have I seen such a view.",
            "Never did I seen such a view."
          ]
        },
        {
          "id": "grammar-en-b2-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ასეთი ხედი არასოდეს მინახავს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Никогда я не видела такого вида.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Никогда я не видела такого вида."
          },
          "sentence": "Never I have I seen such a view. → ____",
          "answer": "Never have I seen such a view.",
          "options": [
            "Never have I seen such a view.",
            "Never did I seen such a view.",
            "Never I have I seen such a view."
          ]
        },
        {
          "id": "grammar-en-b2-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მხოლოდ მაშინ გავიგე.",
            "en": "Complete a different part of the sentence. Intended meaning: Только тогда я поняла.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Только тогда я поняла."
          },
          "sentence": "____ then did I understand.",
          "answer": "Only",
          "options": [
            "Only",
            "Every",
            "All"
          ]
        },
        {
          "id": "grammar-en-b2-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მხოლოდ მაშინ გავიგე.",
            "en": "Choose the complete sentence expressing: Только тогда я поняла.",
            "ru": "Выберите полное предложение со значением: Только тогда я поняла."
          },
          "sentence": "____",
          "answer": "Only then did I understand.",
          "options": [
            "Only then did I understand.",
            "Only then do I understand.",
            "Only then was I understand."
          ]
        },
        {
          "id": "grammar-en-b2-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მხოლოდ მაშინ გავიგე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Только тогда я поняла.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Только тогда я поняла."
          },
          "sentence": "Only then do I understand. → ____",
          "answer": "Only then did I understand.",
          "options": [
            "Only then did I understand.",
            "Only then was I understand.",
            "Only then do I understand."
          ]
        },
        {
          "id": "grammar-en-b2-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სწორედ ანამ დარეკა.",
            "en": "Complete a different part of the sentence. Intended meaning: Именно Анна позвонила.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Именно Анна позвонила."
          },
          "sentence": "It ____ Ana who called.",
          "answer": "was",
          "options": [
            "was",
            "were",
            "be"
          ]
        },
        {
          "id": "grammar-en-b2-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სწორედ ანამ დარეკა.",
            "en": "Choose the complete sentence expressing: Именно Анна позвонила.",
            "ru": "Выберите полное предложение со значением: Именно Анна позвонила."
          },
          "sentence": "____",
          "answer": "It was Ana who called.",
          "options": [
            "It was Ana who called.",
            "It was Ana what called.",
            "It was Ana where called."
          ]
        },
        {
          "id": "grammar-en-b2-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სწორედ ანამ დარეკა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Именно Анна позвонила.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Именно Анна позвонила."
          },
          "sentence": "It was Ana what called. → ____",
          "answer": "It was Ana who called.",
          "options": [
            "It was Ana who called.",
            "It was Ana where called.",
            "It was Ana what called."
          ]
        }
      ]
    }
  ],
  "ru": [
    {
      "id": "grammar-ru-a0-1",
      "level": "A0",
      "title": {
        "ka": "რუსული ნაცვალსახელები",
        "en": "Russian subject pronouns",
        "ru": "Личные местоимения"
      },
      "explanation": {
        "ka": "я, ты, он, она, оно, мы, вы, они ქვემდებარის ფორმებია. вы შეიძლება იყოს მრავლობითი ან თავაზიანი მიმართვა ერთი ადამიანისადმი. ты ახლობელთან არაფორმალურია, вы — თავაზიანი ან მრავლობითი. რუსული ნაცვალსახელები ბრუნვაში იცვლება: я, меня, мне სხვადასხვა როლს ასრულებს. ქვემდებარის პოზიციაში меня ნუ გამოიყენებ.",
        "en": "Я, ты, он, она, оно, мы, вы, они are subject forms. Вы can refer to several people or address one person politely. Ты is informal for a familiar person; вы is polite or plural. Russian pronouns change case: я, меня and мне perform different roles. Do not use меня as a subject.",
        "ru": "Я, ты, он, она, оно, мы, вы, они — формы подлежащего. Вы обозначает нескольких людей или вежливое обращение к одному человеку. Ты — неофициальное обращение к знакомому, вы — вежливое или множественное. Местоимения меняются по падежам: я, меня и мне выполняют разные роли. Не используйте меня в роли подлежащего."
      },
      "rules": [
        {
          "form": "я / ты / он / она / оно",
          "detail": {
            "ka": "я, ты, он, она, оно, мы, вы, они ქვემდებარის ფორმებია. შეადარე მაგალითს: Я Анна. — მე ანა ვარ.",
            "en": "Я, ты, он, она, оно, мы, вы, они are subject forms. Compare the example: Я Анна. — I am Ana.",
            "ru": "Я, ты, он, она, оно, мы, вы, они — формы подлежащего. Сравните с примером: Я Анна. — Я Анна."
          }
        },
        {
          "form": "мы / вы / они",
          "detail": {
            "ka": "вы შეიძლება იყოს მრავლობითი ან თავაზიანი მიმართვა ერთი ადამიანისადმი. შეადარე მაგალითს: Мы здесь. — ჩვენ აქ ვართ.",
            "en": "Вы can refer to several people or address one person politely. Compare the example: Мы здесь. — We are here.",
            "ru": "Вы обозначает нескольких людей или вежливое обращение к одному человеку. Сравните с примером: Мы здесь. — Мы здесь."
          }
        },
        {
          "form": "Вы — вежливое обращение",
          "detail": {
            "ka": "ты ახლობელთან არაფორმალურია, вы — თავაზიანი ან მრავლობითი. შეადარე მაგალითს: Она врач. — ის ექიმია.",
            "en": "Ты is informal for a familiar person; вы is polite or plural. Compare the example: Она врач. — She is a doctor.",
            "ru": "Ты — неофициальное обращение к знакомому, вы — вежливое или множественное. Сравните с примером: Она врач. — Она врач."
          }
        }
      ],
      "examples": [
        {
          "en": "I am Ana.",
          "ru": "Я Анна.",
          "ka": "მე ანა ვარ."
        },
        {
          "en": "We are here.",
          "ru": "Мы здесь.",
          "ka": "ჩვენ აქ ვართ."
        },
        {
          "en": "She is a doctor.",
          "ru": "Она врач.",
          "ka": "ის ექიმია."
        }
      ],
      "pitfalls": {
        "ka": "ты ახლობელთან არაფორმალურია, вы — თავაზიანი ან მრავლობითი. რუსული ნაცვალსახელები ბრუნვაში იცვლება: я, меня, мне სხვადასხვა როლს ასრულებს. ქვემდებარის პოზიციაში меня ნუ გამოიყენებ.",
        "en": "Ты is informal for a familiar person; вы is polite or plural. Russian pronouns change case: я, меня and мне perform different roles. Do not use меня as a subject.",
        "ru": "Ты — неофициальное обращение к знакомому, вы — вежливое или множественное. Местоимения меняются по падежам: я, меня и мне выполняют разные роли. Не используйте меня в роли подлежащего."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ანა ვარ.",
            "en": "Complete the sentence to express: I am Ana.",
            "ru": "Заполните предложение со значением: მე ანა ვარ."
          },
          "sentence": "____ Анна.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ აქ ვართ.",
            "en": "Complete the sentence to express: We are here.",
            "ru": "Заполните предложение со значением: ჩვენ აქ ვართ."
          },
          "sentence": "____ здесь.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ექიმია.",
            "en": "Complete the sentence to express: She is a doctor.",
            "ru": "Заполните предложение со значением: ის ექიმია."
          },
          "sentence": "____ врач.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a0-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ანა ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am Ana.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am Ana."
          },
          "sentence": "Я ____.",
          "answer": "Анна",
          "options": [
            "Анна",
            "Анну",
            "Анне"
          ]
        },
        {
          "id": "grammar-ru-a0-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ანა ვარ.",
            "en": "Choose the complete sentence expressing: I am Ana.",
            "ru": "Выберите полное предложение со значением: I am Ana."
          },
          "sentence": "____",
          "answer": "Я Анна.",
          "options": [
            "Я Анна.",
            "Меня Анна.",
            "Мне Анна."
          ]
        },
        {
          "id": "grammar-ru-a0-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ანა ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am Ana.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am Ana."
          },
          "sentence": "Меня Анна. → ____",
          "answer": "Я Анна.",
          "options": [
            "Я Анна.",
            "Мне Анна.",
            "Меня Анна."
          ]
        },
        {
          "id": "grammar-ru-a0-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ აქ ვართ.",
            "en": "Complete a different part of the sentence. Intended meaning: We are here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We are here."
          },
          "sentence": "Мы ____.",
          "answer": "здесь",
          "options": [
            "здесь",
            "сюда",
            "отсюда"
          ]
        },
        {
          "id": "grammar-ru-a0-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ აქ ვართ.",
            "en": "Choose the complete sentence expressing: We are here.",
            "ru": "Выберите полное предложение со значением: We are here."
          },
          "sentence": "____",
          "answer": "Мы здесь.",
          "options": [
            "Мы здесь.",
            "Нас здесь.",
            "Нам здесь."
          ]
        },
        {
          "id": "grammar-ru-a0-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ აქ ვართ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We are here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We are here."
          },
          "sentence": "Нас здесь. → ____",
          "answer": "Мы здесь.",
          "options": [
            "Мы здесь.",
            "Нам здесь.",
            "Нас здесь."
          ]
        },
        {
          "id": "grammar-ru-a0-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ექიმია.",
            "en": "Complete a different part of the sentence. Intended meaning: She is a doctor.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She is a doctor."
          },
          "sentence": "Она ____.",
          "answer": "врач",
          "options": [
            "врач",
            "врача",
            "врачу"
          ]
        },
        {
          "id": "grammar-ru-a0-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ექიმია.",
            "en": "Choose the complete sentence expressing: She is a doctor.",
            "ru": "Выберите полное предложение со значением: She is a doctor."
          },
          "sentence": "____",
          "answer": "Она врач.",
          "options": [
            "Она врач.",
            "Её врач.",
            "Ей врач."
          ]
        },
        {
          "id": "grammar-ru-a0-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ექიმია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She is a doctor.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She is a doctor."
          },
          "sentence": "Её врач. → ____",
          "answer": "Она врач.",
          "options": [
            "Она врач.",
            "Ей врач.",
            "Её врач."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-2",
      "level": "A0",
      "title": {
        "ka": "სახელობითი და არის-ის გამოტოვება",
        "en": "Present tense without is",
        "ru": "Настоящее время без связки"
      },
      "explanation": {
        "ka": "აწმყოში რუსულში „არის“ ჩვეულებრივ არ ითქმის: Он врач. არსებითი სახელი ამ მარტივ მოდელში სახელობითშია. კითხვას ინტონაცია ქმნის. ნეიტრალურ აწმყოში Он есть врач არ არის ჩვეულებრივი მოდელი. есть სხვა როლში კუთვნილების ან არსებობისას გამოიყენება. წარსულსა და მომავალში ნულოვანი კავშირი აღარ კმარა: был врачом, будет врачом ცალკე მოდელებია.",
        "en": "Russian normally omits is in present identification: Он врач. The noun uses nominative in this basic pattern. Intonation can turn it into a question. Он есть врач is not the neutral present identification pattern. Есть has other uses for existence or possession. Past and future require a different construction: был врачом and будет врачом are separate patterns.",
        "ru": "В настоящем времени связка есть обычно опускается: Он врач. Существительное в этой простой модели стоит в именительном падеже. Вопрос можно передать интонацией. Он есть врач — не нейтральная модель настоящего времени. Есть используется иначе при существовании или обладании. В прошлом и будущем нужна другая конструкция: был врачом и будет врачом изучаются отдельно."
      },
      "rules": [
        {
          "form": "Он врач.",
          "detail": {
            "ka": "აწმყოში რუსულში „არის“ ჩვეულებრივ არ ითქმის: Он врач. შეადარე მაგალითს: Он врач. — ის ექიმია.",
            "en": "Russian normally omits is in present identification: Он врач. Compare the example: Он врач. — He is a doctor.",
            "ru": "В настоящем времени связка есть обычно опускается: Он врач. Сравните с примером: Он врач. — Он врач."
          }
        },
        {
          "form": "Это школа.",
          "detail": {
            "ka": "არსებითი სახელი ამ მარტივ მოდელში სახელობითშია. შეადარე მაგალითს: Это школа. — ეს სკოლაა.",
            "en": "The noun uses nominative in this basic pattern. Compare the example: Это школа. — This is a school.",
            "ru": "Существительное в этой простой модели стоит в именительном падеже. Сравните с примером: Это школа. — Это школа."
          }
        },
        {
          "form": "Вы студент?",
          "detail": {
            "ka": "კითხვას ინტონაცია ქმნის. შეადარე მაგალითს: Вы студент? — სტუდენტი ხართ?",
            "en": "Intonation can turn it into a question. Compare the example: Вы студент? — Are you a student?",
            "ru": "Вопрос можно передать интонацией. Сравните с примером: Вы студент? — Вы студент?"
          }
        }
      ],
      "examples": [
        {
          "en": "He is a doctor.",
          "ru": "Он врач.",
          "ka": "ის ექიმია."
        },
        {
          "en": "This is a school.",
          "ru": "Это школа.",
          "ka": "ეს სკოლაა."
        },
        {
          "en": "Are you a student?",
          "ru": "Вы студент?",
          "ka": "სტუდენტი ხართ?"
        }
      ],
      "pitfalls": {
        "ka": "ნეიტრალურ აწმყოში Он есть врач არ არის ჩვეულებრივი მოდელი. есть სხვა როლში კუთვნილების ან არსებობისას გამოიყენება. წარსულსა და მომავალში ნულოვანი კავშირი აღარ კმარა: был врачом, будет врачом ცალკე მოდელებია.",
        "en": "Он есть врач is not the neutral present identification pattern. Есть has other uses for existence or possession. Past and future require a different construction: был врачом and будет врачом are separate patterns.",
        "ru": "Он есть врач — не нейтральная модель настоящего времени. Есть используется иначе при существовании или обладании. В прошлом и будущем нужна другая конструкция: был врачом и будет врачом изучаются отдельно."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ექიმია.",
            "en": "Complete the sentence to express: He is a doctor.",
            "ru": "Заполните предложение со значением: ის ექიმია."
          },
          "sentence": "Он ____.",
          "answer": "врач",
          "options": [
            "врач",
            "врача",
            "врачу"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს სკოლაა.",
            "en": "Complete the sentence to express: This is a school.",
            "ru": "Заполните предложение со значением: ეს სკოლაა."
          },
          "sentence": "Это ____.",
          "answer": "школа",
          "options": [
            "школа",
            "школу",
            "школе"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სტუდენტი ხართ?",
            "en": "Complete the sentence to express: Are you a student?",
            "ru": "Заполните предложение со значением: სტუდენტი ხართ?"
          },
          "sentence": "____ студент?",
          "answer": "Вы",
          "options": [
            "Вы",
            "Вас",
            "Вам"
          ]
        },
        {
          "id": "grammar-ru-a0-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ექიმია.",
            "en": "Complete a different part of the sentence. Intended meaning: He is a doctor.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He is a doctor."
          },
          "sentence": "____ врач.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-a0-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ექიმია.",
            "en": "Choose the complete sentence expressing: He is a doctor.",
            "ru": "Выберите полное предложение со значением: He is a doctor."
          },
          "sentence": "____",
          "answer": "Он врач.",
          "options": [
            "Он врач.",
            "Он врача.",
            "Он врачу."
          ]
        },
        {
          "id": "grammar-ru-a0-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ექიმია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He is a doctor.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He is a doctor."
          },
          "sentence": "Он врача. → ____",
          "answer": "Он врач.",
          "options": [
            "Он врач.",
            "Он врачу.",
            "Он врача."
          ]
        },
        {
          "id": "grammar-ru-a0-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს სკოლაა.",
            "en": "Complete a different part of the sentence. Intended meaning: This is a school.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is a school."
          },
          "sentence": "____ школа.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს სკოლაა.",
            "en": "Choose the complete sentence expressing: This is a school.",
            "ru": "Выберите полное предложение со значением: This is a school."
          },
          "sentence": "____",
          "answer": "Это школа.",
          "options": [
            "Это школа.",
            "Это школу.",
            "Это школе."
          ]
        },
        {
          "id": "grammar-ru-a0-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს სკოლაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is a school.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is a school."
          },
          "sentence": "Это школу. → ____",
          "answer": "Это школа.",
          "options": [
            "Это школа.",
            "Это школе.",
            "Это школу."
          ]
        },
        {
          "id": "grammar-ru-a0-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სტუდენტი ხართ?",
            "en": "Complete a different part of the sentence. Intended meaning: Are you a student?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Are you a student?"
          },
          "sentence": "Вы ____?",
          "answer": "студент",
          "options": [
            "студент",
            "студента",
            "студенту"
          ]
        },
        {
          "id": "grammar-ru-a0-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სტუდენტი ხართ?",
            "en": "Choose the complete sentence expressing: Are you a student?",
            "ru": "Выберите полное предложение со значением: Are you a student?"
          },
          "sentence": "____",
          "answer": "Вы студент?",
          "options": [
            "Вы студент?",
            "Вас студент?",
            "Вам студент?"
          ]
        },
        {
          "id": "grammar-ru-a0-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სტუდენტი ხართ?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Are you a student?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Are you a student?"
          },
          "sentence": "Вас студент? → ____",
          "answer": "Вы студент?",
          "options": [
            "Вы студент?",
            "Вам студент?",
            "Вас студент?"
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-3",
      "level": "A0",
      "title": {
        "ka": "არსებითი სახელის სქესი",
        "en": "Noun gender",
        "ru": "Род существительных"
      },
      "explanation": {
        "ka": "თანხმოვანზე ხშირად მამრობითია, -а/-я-ზე — მდედრობითი, -о/-е-ზე — საშუალო. -ь-ზე დაბოლოებულების სქესი ცალკე ისწავლე; папа მამრობითია. სქესი არსებითი სახელის გრამატიკული თვისებაა და თარგმანის სქესს არ მიჰყვება. он/она/оно საგნებზეც გამოიყენება. -ь დაბოლოებით угадывание არასანდოა: день მამრობითია, ночь — მდედრობითი.",
        "en": "Consonant endings are often masculine, -а/-я feminine and -о/-е neuter. Learn gender of -ь nouns separately; папа is masculine. Gender belongs to the Russian noun and does not follow its translation. Он/она/оно can refer to objects too. Guessing from -ь is unreliable: день is masculine, ночь feminine.",
        "ru": "Слова на согласный часто мужского рода, на -а/-я — женского, на -о/-е — среднего. Род слов на -ь запоминайте; папа — мужского рода. Род — свойство русского существительного и не зависит от перевода. Он/она/оно относятся и к предметам. По -ь нельзя надёжно угадать род: день — мужского, ночь — женского."
      },
      "rules": [
        {
          "form": "дом — он",
          "detail": {
            "ka": "თანხმოვანზე ხშირად მამრობითია, -а/-я-ზე — მდედრობითი, -о/-е-ზე — საშუალო. შეადარე მაგალითს: Это мой дом. — ეს ჩემი სახლია.",
            "en": "Consonant endings are often masculine, -а/-я feminine and -о/-е neuter. Compare the example: Это мой дом. — This is my house.",
            "ru": "Слова на согласный часто мужского рода, на -а/-я — женского, на -о/-е — среднего. Сравните с примером: Это мой дом. — Это мой дом."
          }
        },
        {
          "form": "книга — она",
          "detail": {
            "ka": "-ь-ზე დაბოლოებულების სქესი ცალკე ისწავლე; папа მამრობითია. შეადარე მაგალითს: Это моя книга. — ეს ჩემი წიგნია.",
            "en": "Learn gender of -ь nouns separately; папа is masculine. Compare the example: Это моя книга. — This is my book.",
            "ru": "Род слов на -ь запоминайте; папа — мужского рода. Сравните с примером: Это моя книга. — Это моя книга."
          }
        },
        {
          "form": "окно — оно",
          "detail": {
            "ka": "სქესი არსებითი სახელის გრამატიკული თვისებაა და თარგმანის სქესს არ მიჰყვება. შეადარე მაგალითს: Это моё окно. — ეს ჩემი ფანჯარაა.",
            "en": "Gender belongs to the Russian noun and does not follow its translation. Compare the example: Это моё окно. — This is my window.",
            "ru": "Род — свойство русского существительного и не зависит от перевода. Сравните с примером: Это моё окно. — Это моё окно."
          }
        }
      ],
      "examples": [
        {
          "en": "This is my house.",
          "ru": "Это мой дом.",
          "ka": "ეს ჩემი სახლია."
        },
        {
          "en": "This is my book.",
          "ru": "Это моя книга.",
          "ka": "ეს ჩემი წიგნია."
        },
        {
          "en": "This is my window.",
          "ru": "Это моё окно.",
          "ka": "ეს ჩემი ფანჯარაა."
        }
      ],
      "pitfalls": {
        "ka": "სქესი არსებითი სახელის გრამატიკული თვისებაა და თარგმანის სქესს არ მიჰყვება. он/она/оно საგნებზეც გამოიყენება. -ь დაბოლოებით угадывание არასანდოა: день მამრობითია, ночь — მდედრობითი.",
        "en": "Gender belongs to the Russian noun and does not follow its translation. Он/она/оно can refer to objects too. Guessing from -ь is unreliable: день is masculine, ночь feminine.",
        "ru": "Род — свойство русского существительного и не зависит от перевода. Он/она/оно относятся и к предметам. По -ь нельзя надёжно угадать род: день — мужского, ночь — женского."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი სახლია.",
            "en": "Complete the sentence to express: This is my house.",
            "ru": "Заполните предложение со значением: ეს ჩემი სახლია."
          },
          "sentence": "Это ____ дом.",
          "answer": "мой",
          "options": [
            "мой",
            "моя",
            "моё"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი წიგნია.",
            "en": "Complete the sentence to express: This is my book.",
            "ru": "Заполните предложение со значением: ეს ჩემი წიგნია."
          },
          "sentence": "Это ____ книга.",
          "answer": "моя",
          "options": [
            "моя",
            "мой",
            "моё"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი ფანჯარაა.",
            "en": "Complete the sentence to express: This is my window.",
            "ru": "Заполните предложение со значением: ეს ჩემი ფანჯარაა."
          },
          "sentence": "Это ____ окно.",
          "answer": "моё",
          "options": [
            "моё",
            "мой",
            "моя"
          ]
        },
        {
          "id": "grammar-ru-a0-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი სახლია.",
            "en": "Complete a different part of the sentence. Intended meaning: This is my house.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is my house."
          },
          "sentence": "____ мой дом.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი სახლია.",
            "en": "Choose the complete sentence expressing: This is my house.",
            "ru": "Выберите полное предложение со значением: This is my house."
          },
          "sentence": "____",
          "answer": "Это мой дом.",
          "options": [
            "Это мой дом.",
            "Это моя дом.",
            "Это моё дом."
          ]
        },
        {
          "id": "grammar-ru-a0-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი სახლია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is my house.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is my house."
          },
          "sentence": "Это моя дом. → ____",
          "answer": "Это мой дом.",
          "options": [
            "Это мой дом.",
            "Это моё дом.",
            "Это моя дом."
          ]
        },
        {
          "id": "grammar-ru-a0-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი წიგნია.",
            "en": "Complete a different part of the sentence. Intended meaning: This is my book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is my book."
          },
          "sentence": "____ моя книга.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი წიგნია.",
            "en": "Choose the complete sentence expressing: This is my book.",
            "ru": "Выберите полное предложение со значением: This is my book."
          },
          "sentence": "____",
          "answer": "Это моя книга.",
          "options": [
            "Это моя книга.",
            "Это мой книга.",
            "Это моё книга."
          ]
        },
        {
          "id": "grammar-ru-a0-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი წიგნია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is my book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is my book."
          },
          "sentence": "Это мой книга. → ____",
          "answer": "Это моя книга.",
          "options": [
            "Это моя книга.",
            "Это моё книга.",
            "Это мой книга."
          ]
        },
        {
          "id": "grammar-ru-a0-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი ფანჯარაა.",
            "en": "Complete a different part of the sentence. Intended meaning: This is my window.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is my window."
          },
          "sentence": "____ моё окно.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი ფანჯარაა.",
            "en": "Choose the complete sentence expressing: This is my window.",
            "ru": "Выберите полное предложение со значением: This is my window."
          },
          "sentence": "____",
          "answer": "Это моё окно.",
          "options": [
            "Это моё окно.",
            "Это мой окно.",
            "Это моя окно."
          ]
        },
        {
          "id": "grammar-ru-a0-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი ფანჯარაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is my window.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is my window."
          },
          "sentence": "Это мой окно. → ____",
          "answer": "Это моё окно.",
          "options": [
            "Это моё окно.",
            "Это моя окно.",
            "Это мой окно."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-4",
      "level": "A0",
      "title": {
        "ka": "ზედსართავის შეთანხმება",
        "en": "Adjective agreement",
        "ru": "Согласование прилагательных"
      },
      "explanation": {
        "ka": "ზედსართავი სახელს სქესსა და რიცხვში ეთანხმება: новый дом, новая книга, новое окно, новые дома. აქ სახელობითის ფორმებია. სახელობითის დაბოლოებებია ხშირად -ый/-ий/-ой, -ая/-яя, -ое/-ее. მრავლობითში სქესის განსხვავება ქრება: новые. ზედსართავის ფორმას მფლობელის სქესით ნუ შეარჩევ; ის აღწერილ სახელს ეთანხმება.",
        "en": "An adjective agrees with its noun in gender and number: новый дом, новая книга, новое окно, новые дома. These are nominative forms. Common nominative endings are -ый/-ий/-ой, -ая/-яя and -ое/-ее. Plurals lose the gender distinction: новые. Do not choose an adjective by the owner’s gender; it agrees with the noun being described.",
        "ru": "Прилагательное согласуется с существительным в роде и числе: новый дом, новая книга, новое окно, новые дома. Здесь используются формы именительного падежа. Частые окончания именительного: -ый/-ий/-ой, -ая/-яя, -ое/-ее. Во множественном родовое различие исчезает: новые. Не выбирайте окончание по владельцу; прилагательное согласуется с описываемым существительным."
      },
      "rules": [
        {
          "form": "новый дом",
          "detail": {
            "ka": "ზედსართავი სახელს სქესსა და რიცხვში ეთანხმება: новый дом, новая книга, новое окно, новые дома. შეადარე მაგალითს: Новый дом. — ახალი სახლი.",
            "en": "An adjective agrees with its noun in gender and number: новый дом, новая книга, новое окно, новые дома. Compare the example: Новый дом. — A new house.",
            "ru": "Прилагательное согласуется с существительным в роде и числе: новый дом, новая книга, новое окно, новые дома. Сравните с примером: Новый дом. — Новый дом."
          }
        },
        {
          "form": "новая книга / новое окно",
          "detail": {
            "ka": "აქ სახელობითის ფორმებია. შეადარე მაგალითს: Новая книга. — ახალი წიგნი.",
            "en": "These are nominative forms. Compare the example: Новая книга. — A new book.",
            "ru": "Здесь используются формы именительного падежа. Сравните с примером: Новая книга. — Новая книга."
          }
        },
        {
          "form": "новые дома",
          "detail": {
            "ka": "სახელობითის დაბოლოებებია ხშირად -ый/-ий/-ой, -ая/-яя, -ое/-ее. შეადარე მაგალითს: Новое окно. — ახალი ფანჯარა.",
            "en": "Common nominative endings are -ый/-ий/-ой, -ая/-яя and -ое/-ее. Compare the example: Новое окно. — A new window.",
            "ru": "Частые окончания именительного: -ый/-ий/-ой, -ая/-яя, -ое/-ее. Сравните с примером: Новое окно. — Новое окно."
          }
        }
      ],
      "examples": [
        {
          "en": "A new house.",
          "ru": "Новый дом.",
          "ka": "ახალი სახლი."
        },
        {
          "en": "A new book.",
          "ru": "Новая книга.",
          "ka": "ახალი წიგნი."
        },
        {
          "en": "A new window.",
          "ru": "Новое окно.",
          "ka": "ახალი ფანჯარა."
        }
      ],
      "pitfalls": {
        "ka": "სახელობითის დაბოლოებებია ხშირად -ый/-ий/-ой, -ая/-яя, -ое/-ее. მრავლობითში სქესის განსხვავება ქრება: новые. ზედსართავის ფორმას მფლობელის სქესით ნუ შეარჩევ; ის აღწერილ სახელს ეთანხმება.",
        "en": "Common nominative endings are -ый/-ий/-ой, -ая/-яя and -ое/-ее. Plurals lose the gender distinction: новые. Do not choose an adjective by the owner’s gender; it agrees with the noun being described.",
        "ru": "Частые окончания именительного: -ый/-ий/-ой, -ая/-яя, -ое/-ее. Во множественном родовое различие исчезает: новые. Не выбирайте окончание по владельцу; прилагательное согласуется с описываемым существительным."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახალი სახლი.",
            "en": "Complete the sentence to express: A new house.",
            "ru": "Заполните предложение со значением: ახალი სახლი."
          },
          "sentence": "____ дом.",
          "answer": "Новый",
          "options": [
            "Новый",
            "Новая",
            "Новое"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახალი წიგნი.",
            "en": "Complete the sentence to express: A new book.",
            "ru": "Заполните предложение со значением: ახალი წიგნი."
          },
          "sentence": "____ книга.",
          "answer": "Новая",
          "options": [
            "Новая",
            "Новый",
            "Новое"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახალი ფანჯარა.",
            "en": "Complete the sentence to express: A new window.",
            "ru": "Заполните предложение со значением: ახალი ფანჯარა."
          },
          "sentence": "____ окно.",
          "answer": "Новое",
          "options": [
            "Новое",
            "Новый",
            "Новая"
          ]
        },
        {
          "id": "grammar-ru-a0-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახალი სახლი.",
            "en": "Complete a different part of the sentence. Intended meaning: A new house.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: A new house."
          },
          "sentence": "Новый ____.",
          "answer": "дом",
          "options": [
            "дом",
            "дома",
            "дому"
          ]
        },
        {
          "id": "grammar-ru-a0-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახალი სახლი.",
            "en": "Choose the complete sentence expressing: A new house.",
            "ru": "Выберите полное предложение со значением: A new house."
          },
          "sentence": "____",
          "answer": "Новый дом.",
          "options": [
            "Новый дом.",
            "Новая дом.",
            "Новое дом."
          ]
        },
        {
          "id": "grammar-ru-a0-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახალი სახლი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: A new house.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: A new house."
          },
          "sentence": "Новая дом. → ____",
          "answer": "Новый дом.",
          "options": [
            "Новый дом.",
            "Новое дом.",
            "Новая дом."
          ]
        },
        {
          "id": "grammar-ru-a0-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახალი წიგნი.",
            "en": "Complete a different part of the sentence. Intended meaning: A new book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: A new book."
          },
          "sentence": "Новая ____.",
          "answer": "книга",
          "options": [
            "книга",
            "книгу",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-a0-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახალი წიგნი.",
            "en": "Choose the complete sentence expressing: A new book.",
            "ru": "Выберите полное предложение со значением: A new book."
          },
          "sentence": "____",
          "answer": "Новая книга.",
          "options": [
            "Новая книга.",
            "Новый книга.",
            "Новое книга."
          ]
        },
        {
          "id": "grammar-ru-a0-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახალი წიგნი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: A new book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: A new book."
          },
          "sentence": "Новый книга. → ____",
          "answer": "Новая книга.",
          "options": [
            "Новая книга.",
            "Новое книга.",
            "Новый книга."
          ]
        },
        {
          "id": "grammar-ru-a0-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახალი ფანჯარა.",
            "en": "Complete a different part of the sentence. Intended meaning: A new window.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: A new window."
          },
          "sentence": "Новое ____.",
          "answer": "окно",
          "options": [
            "окно",
            "окноа",
            "окноу"
          ]
        },
        {
          "id": "grammar-ru-a0-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახალი ფანჯარა.",
            "en": "Choose the complete sentence expressing: A new window.",
            "ru": "Выберите полное предложение со значением: A new window."
          },
          "sentence": "____",
          "answer": "Новое окно.",
          "options": [
            "Новое окно.",
            "Новый окно.",
            "Новая окно."
          ]
        },
        {
          "id": "grammar-ru-a0-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახალი ფანჯარა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: A new window.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: A new window."
          },
          "sentence": "Новый окно. → ____",
          "answer": "Новое окно.",
          "options": [
            "Новое окно.",
            "Новая окно.",
            "Новый окно."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-5",
      "level": "A0",
      "title": {
        "ka": "მრავლობითის საფუძველი",
        "en": "Basic Russian plurals",
        "ru": "Основы множественного числа"
      },
      "explanation": {
        "ka": "მრავლობითში ხშირია -ы/-и, საშუალო სქესში -а/-я. г, к, х, ж, ч, ш, щ-ს შემდეგ ы არ იწერება. ფორმა дом→дома დასამახსოვრებელია. სიტყვის მახვილი მრავლობითშიც შეიძლება შეიცვალოს. მრავლობითი უსქესოა შეთანხმებისათვის: новые книги და новые окна ერთ დაბოლოებას იღებს. окна შეიძლება სხვადასხვა კონტექსტში განსხვავებული ბრუნვაც იყოს; წინადადებაც გაითვალისწინე.",
        "en": "Common plural endings are -ы/-и, and neuter -а/-я. After г, к, х, ж, ч, ш, щ write и, not ы. Learn дом→дома as a lexical pattern. Stress may move in a plural form. Plural agreement has no gender distinction: новые книги and новые окна share the adjective ending. Окна can represent different cases in context; read the whole sentence.",
        "ru": "Частые окончания множественного числа: -ы/-и, у среднего рода — -а/-я. После г, к, х, ж, ч, ш, щ пишется и, не ы. Форму дом→дома запоминайте. Во множественном числе ударение может перемещаться. Согласование во множественном не различает род: новые книги и новые окна имеют одинаковое окончание прилагательного. Окна по контексту может представлять разные падежи."
      },
      "rules": [
        {
          "form": "стол → столы",
          "detail": {
            "ka": "მრავლობითში ხშირია -ы/-и, საშუალო სქესში -а/-я. შეადარე მაგალითს: Здесь столы. — აქ მაგიდებია.",
            "en": "Common plural endings are -ы/-и, and neuter -а/-я. Compare the example: Здесь столы. — There are tables here.",
            "ru": "Частые окончания множественного числа: -ы/-и, у среднего рода — -а/-я. Сравните с примером: Здесь столы. — Здесь столы."
          }
        },
        {
          "form": "книга → книги",
          "detail": {
            "ka": "г, к, х, ж, ч, ш, щ-ს შემდეგ ы არ იწერება. შეადარე მაგალითს: Здесь книги. — აქ წიგნებია.",
            "en": "After г, к, х, ж, ч, ш, щ write и, not ы. Compare the example: Здесь книги. — There are books here.",
            "ru": "После г, к, х, ж, ч, ш, щ пишется и, не ы. Сравните с примером: Здесь книги. — Здесь книги."
          }
        },
        {
          "form": "окно → окна",
          "detail": {
            "ka": "ფორმა дом→дома დასამახსოვრებელია. შეადარე მაგალითს: Здесь окна. — აქ ფანჯრებია.",
            "en": "Learn дом→дома as a lexical pattern. Compare the example: Здесь окна. — There are windows here.",
            "ru": "Форму дом→дома запоминайте. Сравните с примером: Здесь окна. — Здесь окна."
          }
        }
      ],
      "examples": [
        {
          "en": "There are tables here.",
          "ru": "Здесь столы.",
          "ka": "აქ მაგიდებია."
        },
        {
          "en": "There are books here.",
          "ru": "Здесь книги.",
          "ka": "აქ წიგნებია."
        },
        {
          "en": "There are windows here.",
          "ru": "Здесь окна.",
          "ka": "აქ ფანჯრებია."
        }
      ],
      "pitfalls": {
        "ka": "სიტყვის მახვილი მრავლობითშიც შეიძლება შეიცვალოს. მრავლობითი უსქესოა შეთანხმებისათვის: новые книги და новые окна ერთ დაბოლოებას იღებს. окна შეიძლება სხვადასხვა კონტექსტში განსხვავებული ბრუნვაც იყოს; წინადადებაც გაითვალისწინე.",
        "en": "Stress may move in a plural form. Plural agreement has no gender distinction: новые книги and новые окна share the adjective ending. Окна can represent different cases in context; read the whole sentence.",
        "ru": "Во множественном числе ударение может перемещаться. Согласование во множественном не различает род: новые книги и новые окна имеют одинаковое окончание прилагательного. Окна по контексту может представлять разные падежи."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ მაგიდებია.",
            "en": "Complete the sentence to express: There are tables here.",
            "ru": "Заполните предложение со значением: აქ მაგიდებია."
          },
          "sentence": "Здесь ____.",
          "answer": "столы",
          "options": [
            "столы",
            "стол",
            "стола"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ წიგნებია.",
            "en": "Complete the sentence to express: There are books here.",
            "ru": "Заполните предложение со значением: აქ წიგნებია."
          },
          "sentence": "Здесь ____.",
          "answer": "книги",
          "options": [
            "книги",
            "книга",
            "книгу"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ ფანჯრებია.",
            "en": "Complete the sentence to express: There are windows here.",
            "ru": "Заполните предложение со значением: აქ ფანჯრებია."
          },
          "sentence": "Здесь ____.",
          "answer": "окна",
          "options": [
            "окна",
            "окно",
            "окну"
          ]
        },
        {
          "id": "grammar-ru-a0-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ მაგიდებია.",
            "en": "Complete a different part of the sentence. Intended meaning: There are tables here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: There are tables here."
          },
          "sentence": "____ столы.",
          "answer": "Здесь",
          "options": [
            "Здесь",
            "Здесьа",
            "Здесьу"
          ]
        },
        {
          "id": "grammar-ru-a0-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ მაგიდებია.",
            "en": "Choose the complete sentence expressing: There are tables here.",
            "ru": "Выберите полное предложение со значением: There are tables here."
          },
          "sentence": "____",
          "answer": "Здесь столы.",
          "options": [
            "Здесь столы.",
            "Здесь стол.",
            "Здесь стола."
          ]
        },
        {
          "id": "grammar-ru-a0-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ მაგიდებია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: There are tables here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: There are tables here."
          },
          "sentence": "Здесь стол. → ____",
          "answer": "Здесь столы.",
          "options": [
            "Здесь столы.",
            "Здесь стола.",
            "Здесь стол."
          ]
        },
        {
          "id": "grammar-ru-a0-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ წიგნებია.",
            "en": "Complete a different part of the sentence. Intended meaning: There are books here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: There are books here."
          },
          "sentence": "____ книги.",
          "answer": "Здесь",
          "options": [
            "Здесь",
            "Здесьа",
            "Здесьу"
          ]
        },
        {
          "id": "grammar-ru-a0-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ წიგნებია.",
            "en": "Choose the complete sentence expressing: There are books here.",
            "ru": "Выберите полное предложение со значением: There are books here."
          },
          "sentence": "____",
          "answer": "Здесь книги.",
          "options": [
            "Здесь книги.",
            "Здесь книга.",
            "Здесь книгу."
          ]
        },
        {
          "id": "grammar-ru-a0-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ წიგნებია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: There are books here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: There are books here."
          },
          "sentence": "Здесь книга. → ____",
          "answer": "Здесь книги.",
          "options": [
            "Здесь книги.",
            "Здесь книгу.",
            "Здесь книга."
          ]
        },
        {
          "id": "grammar-ru-a0-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ ფანჯრებია.",
            "en": "Complete a different part of the sentence. Intended meaning: There are windows here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: There are windows here."
          },
          "sentence": "____ окна.",
          "answer": "Здесь",
          "options": [
            "Здесь",
            "Здесьа",
            "Здесьу"
          ]
        },
        {
          "id": "grammar-ru-a0-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ ფანჯრებია.",
            "en": "Choose the complete sentence expressing: There are windows here.",
            "ru": "Выберите полное предложение со значением: There are windows here."
          },
          "sentence": "____",
          "answer": "Здесь окна.",
          "options": [
            "Здесь окна.",
            "Здесь окно.",
            "Здесь окну."
          ]
        },
        {
          "id": "grammar-ru-a0-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ ფანჯრებია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: There are windows here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: There are windows here."
          },
          "sentence": "Здесь окно. → ____",
          "answer": "Здесь окна.",
          "options": [
            "Здесь окна.",
            "Здесь окну.",
            "Здесь окно."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-6",
      "level": "A0",
      "title": {
        "ka": "ჩემი და შენი",
        "en": "Russian possessives",
        "ru": "Мой, твой, наш, ваш"
      },
      "explanation": {
        "ka": "мой/моя/моё/мои მფლობელს კი არა, საკუთრებაში არსებულ სახელს ეთანხმება. იგივე მოდელია твой, наш, ваш; его/её/их კუთვნილებისას არ იცვლება. мои ყველა სქესის მრავლობითთანაა. ваш შეიძლება რამდენიმე ადამიანს ან ერთ ზრდილობიან адресატს ეკუთვნოდეს. მისი რუსული ფორმა ნუ შეარჩევ ქართულ „მისი“-ს მიხედვით; его და её მფლობელს განასხვავებს.",
        "en": "Мой/моя/моё/мои agrees with the possessed noun, not the owner. Твой, наш, ваш behave similarly; possessive его/её/их do not change. Мои works with plurals of every gender. Ваш can belong to several people or one politely addressed person. Georgian მისი does not distinguish owners, but Russian его and её do.",
        "ru": "Мой/моя/моё/мои согласуется с предметом, а не владельцем. Так же изменяются твой, наш, ваш; притяжательные его/её/их не изменяются. Мои употребляется со множественным числом любого рода. Ваш может относиться к нескольким владельцам или одному вежливо обозначенному собеседнику. В отличие от грузинского მისი, русские его и её различают владельца."
      },
      "rules": [
        {
          "form": "мой билет / моя сумка",
          "detail": {
            "ka": "мой/моя/моё/мои მფლობელს კი არა, საკუთრებაში არსებულ სახელს ეთანხმება. შეადარე მაგალითს: Это мой билет. — ეს ჩემი ბილეთია.",
            "en": "Мой/моя/моё/мои agrees with the possessed noun, not the owner. Compare the example: Это мой билет. — This is my ticket.",
            "ru": "Мой/моя/моё/мои согласуется с предметом, а не владельцем. Сравните с примером: Это мой билет. — Это мой билет."
          }
        },
        {
          "form": "моё место / мои вещи",
          "detail": {
            "ka": "იგივე მოდელია твой, наш, ваш; его/её/их კუთვნილებისას არ იცვლება. შეადარე მაგალითს: Это наша сумка. — ეს ჩვენი ჩანთაა.",
            "en": "Твой, наш, ваш behave similarly; possessive его/её/их do not change. Compare the example: Это наша сумка. — This is our bag.",
            "ru": "Так же изменяются твой, наш, ваш; притяжательные его/её/их не изменяются. Сравните с примером: Это наша сумка. — Это наша сумка."
          }
        },
        {
          "form": "его сумка / её билет",
          "detail": {
            "ka": "мои ყველა სქესის მრავლობითთანაა. შეადარე მაგალითს: Это его книга. — ეს მისი წიგნია.",
            "en": "Мои works with plurals of every gender. Compare the example: Это его книга. — This is his book.",
            "ru": "Мои употребляется со множественным числом любого рода. Сравните с примером: Это его книга. — Это его книга."
          }
        }
      ],
      "examples": [
        {
          "en": "This is my ticket.",
          "ru": "Это мой билет.",
          "ka": "ეს ჩემი ბილეთია."
        },
        {
          "en": "This is our bag.",
          "ru": "Это наша сумка.",
          "ka": "ეს ჩვენი ჩანთაა."
        },
        {
          "en": "This is his book.",
          "ru": "Это его книга.",
          "ka": "ეს მისი წიგნია."
        }
      ],
      "pitfalls": {
        "ka": "мои ყველა სქესის მრავლობითთანაა. ваш შეიძლება რამდენიმე ადამიანს ან ერთ ზრდილობიან адресატს ეკუთვნოდეს. მისი რუსული ფორმა ნუ შეარჩევ ქართულ „მისი“-ს მიხედვით; его და её მფლობელს განასხვავებს.",
        "en": "Мои works with plurals of every gender. Ваш can belong to several people or one politely addressed person. Georgian მისი does not distinguish owners, but Russian его and её do.",
        "ru": "Мои употребляется со множественным числом любого рода. Ваш может относиться к нескольким владельцам или одному вежливо обозначенному собеседнику. В отличие от грузинского მისი, русские его и её различают владельца."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩემი ბილეთია.",
            "en": "Complete the sentence to express: This is my ticket.",
            "ru": "Заполните предложение со значением: ეს ჩემი ბილეთია."
          },
          "sentence": "Это ____ билет.",
          "answer": "мой",
          "options": [
            "мой",
            "моя",
            "моё"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ჩვენი ჩანთაა.",
            "en": "Complete the sentence to express: This is our bag.",
            "ru": "Заполните предложение со значением: ეს ჩვენი ჩანთაა."
          },
          "sentence": "Это ____ сумка.",
          "answer": "наша",
          "options": [
            "наша",
            "наш",
            "наше"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს მისი წიგნია.",
            "en": "Complete the sentence to express: This is his book.",
            "ru": "Заполните предложение со значением: ეს მისი წიგნია."
          },
          "sentence": "Это ____ книга.",
          "answer": "его",
          "options": [
            "его",
            "он",
            "ему"
          ]
        },
        {
          "id": "grammar-ru-a0-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩემი ბილეთია.",
            "en": "Complete a different part of the sentence. Intended meaning: This is my ticket.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is my ticket."
          },
          "sentence": "____ мой билет.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩემი ბილეთია.",
            "en": "Choose the complete sentence expressing: This is my ticket.",
            "ru": "Выберите полное предложение со значением: This is my ticket."
          },
          "sentence": "____",
          "answer": "Это мой билет.",
          "options": [
            "Это мой билет.",
            "Это моя билет.",
            "Это моё билет."
          ]
        },
        {
          "id": "grammar-ru-a0-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩემი ბილეთია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is my ticket.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is my ticket."
          },
          "sentence": "Это моя билет. → ____",
          "answer": "Это мой билет.",
          "options": [
            "Это мой билет.",
            "Это моё билет.",
            "Это моя билет."
          ]
        },
        {
          "id": "grammar-ru-a0-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ჩვენი ჩანთაა.",
            "en": "Complete a different part of the sentence. Intended meaning: This is our bag.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is our bag."
          },
          "sentence": "____ наша сумка.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ჩვენი ჩანთაა.",
            "en": "Choose the complete sentence expressing: This is our bag.",
            "ru": "Выберите полное предложение со значением: This is our bag."
          },
          "sentence": "____",
          "answer": "Это наша сумка.",
          "options": [
            "Это наша сумка.",
            "Это наш сумка.",
            "Это наше сумка."
          ]
        },
        {
          "id": "grammar-ru-a0-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ჩვენი ჩანთაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is our bag.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is our bag."
          },
          "sentence": "Это наш сумка. → ____",
          "answer": "Это наша сумка.",
          "options": [
            "Это наша сумка.",
            "Это наше сумка.",
            "Это наш сумка."
          ]
        },
        {
          "id": "grammar-ru-a0-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს მისი წიგნია.",
            "en": "Complete a different part of the sentence. Intended meaning: This is his book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is his book."
          },
          "sentence": "____ его книга.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a0-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს მისი წიგნია.",
            "en": "Choose the complete sentence expressing: This is his book.",
            "ru": "Выберите полное предложение со значением: This is his book."
          },
          "sentence": "____",
          "answer": "Это его книга.",
          "options": [
            "Это его книга.",
            "Это он книга.",
            "Это ему книга."
          ]
        },
        {
          "id": "grammar-ru-a0-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს მისი წიგნია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is his book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is his book."
          },
          "sentence": "Это он книга. → ____",
          "answer": "Это его книга.",
          "options": [
            "Это его книга.",
            "Это ему книга.",
            "Это он книга."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-7",
      "level": "A0",
      "title": {
        "ka": "ეს და ის",
        "en": "Это and demonstratives",
        "ru": "Это и указательные слова"
      },
      "explanation": {
        "ka": "ეს არის ტიპის წინადადებაში это უცვლელია. სახელის წინ „ეს კონკრეტული“ იცვლება: этот, эта, это, эти. ერთმანეთისგან გაარჩიე ორი მოდელი. Это мои книги იწყებს ამოცნობას და ეს პირველი это უცვლელია. Эти книги мои უკვე კონკრეტულ წიგნებს აღწერს და эти მრავლობითშია. ეს ორი ფუნქცია მხოლოდ შემდეგი სიტყვის მიხედვით არ გააიგივო.",
        "en": "Это stays unchanged in this is sentences. Before a noun, this particular agrees: этот, эта, это, эти. Distinguish the two patterns. Это мои книги introduces identification and the first это stays unchanged. Эти книги мои describes particular books and эти is plural. Do not treat the two functions as interchangeable simply because a noun follows.",
        "ru": "В конструкции это есть слово это не меняется. Перед существительным указание согласуется: этот, эта, это, эти. Различайте две модели. Это мои книги вводит идентификацию, первое это неизменно. Эти книги мои описывает определённые книги, эти стоит во множественном числе. Не смешивайте функции лишь потому, что далее идёт существительное."
      },
      "rules": [
        {
          "form": "Это книга.",
          "detail": {
            "ka": "ეს არის ტიპის წინადადებაში это უცვლელია. შეადარე მაგალითს: Это книга. — ეს წიგნია.",
            "en": "Это stays unchanged in this is sentences. Compare the example: Это книга. — This is a book.",
            "ru": "В конструкции это есть слово это не меняется. Сравните с примером: Это книга. — Это книга."
          }
        },
        {
          "form": "эта книга / этот стол",
          "detail": {
            "ka": "სახელის წინ „ეს კონკრეტული“ იცვლება: этот, эта, это, эти. შეადარე მაგალითს: Эта книга здесь. — ეს წიგნი აქაა.",
            "en": "Before a noun, this particular agrees: этот, эта, это, эти. Compare the example: Эта книга здесь. — This book is here.",
            "ru": "Перед существительным указание согласуется: этот, эта, это, эти. Сравните с примером: Эта книга здесь. — Эта книга здесь."
          }
        },
        {
          "form": "это окно / эти книги",
          "detail": {
            "ka": "ერთმანეთისგან გაარჩიე ორი მოდელი. შეადარე მაგალითს: Эти книги здесь. — ეს წიგნები აქაა.",
            "en": "Distinguish the two patterns. Compare the example: Эти книги здесь. — These books are here.",
            "ru": "Различайте две модели. Сравните с примером: Эти книги здесь. — Эти книги здесь."
          }
        }
      ],
      "examples": [
        {
          "en": "This is a book.",
          "ru": "Это книга.",
          "ka": "ეს წიგნია."
        },
        {
          "en": "This book is here.",
          "ru": "Эта книга здесь.",
          "ka": "ეს წიგნი აქაა."
        },
        {
          "en": "These books are here.",
          "ru": "Эти книги здесь.",
          "ka": "ეს წიგნები აქაა."
        }
      ],
      "pitfalls": {
        "ka": "Это мои книги იწყებს ამოცნობას და ეს პირველი это უცვლელია. Эти книги мои უკვე კონკრეტულ წიგნებს აღწერს და эти მრავლობითშია. ეს ორი ფუნქცია მხოლოდ შემდეგი სიტყვის მიხედვით არ გააიგივო.",
        "en": "Это мои книги introduces identification and the first это stays unchanged. Эти книги мои describes particular books and эти is plural. Do not treat the two functions as interchangeable simply because a noun follows.",
        "ru": "Это мои книги вводит идентификацию, первое это неизменно. Эти книги мои описывает определённые книги, эти стоит во множественном числе. Не смешивайте функции лишь потому, что далее идёт существительное."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს წიგნია.",
            "en": "Complete the sentence to express: This is a book.",
            "ru": "Заполните предложение со значением: ეს წიგნია."
          },
          "sentence": "____ книга.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს წიგნი აქაა.",
            "en": "Complete the sentence to express: This book is here.",
            "ru": "Заполните предложение со значением: ეს წიგნი აქაა."
          },
          "sentence": "____ книга здесь.",
          "answer": "Эта",
          "options": [
            "Эта",
            "Этот",
            "Эти"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს წიგნები აქაა.",
            "en": "Complete the sentence to express: These books are here.",
            "ru": "Заполните предложение со значением: ეს წიგნები აქაა."
          },
          "sentence": "____ книги здесь.",
          "answer": "Эти",
          "options": [
            "Эти",
            "Эта",
            "Этот"
          ]
        },
        {
          "id": "grammar-ru-a0-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს წიგნია.",
            "en": "Complete a different part of the sentence. Intended meaning: This is a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is a book."
          },
          "sentence": "Это ____.",
          "answer": "книга",
          "options": [
            "книга",
            "книгу",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-a0-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს წიგნია.",
            "en": "Choose the complete sentence expressing: This is a book.",
            "ru": "Выберите полное предложение со значением: This is a book."
          },
          "sentence": "____",
          "answer": "Это книга.",
          "options": [
            "Это книга.",
            "Эта книга.",
            "Эти книга."
          ]
        },
        {
          "id": "grammar-ru-a0-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს წიგნია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is a book."
          },
          "sentence": "Эта книга. → ____",
          "answer": "Это книга.",
          "options": [
            "Это книга.",
            "Эти книга.",
            "Эта книга."
          ]
        },
        {
          "id": "grammar-ru-a0-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს წიგნი აქაა.",
            "en": "Complete a different part of the sentence. Intended meaning: This book is here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This book is here."
          },
          "sentence": "Эта ____ здесь.",
          "answer": "книга",
          "options": [
            "книга",
            "книгу",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-a0-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს წიგნი აქაა.",
            "en": "Choose the complete sentence expressing: This book is here.",
            "ru": "Выберите полное предложение со значением: This book is here."
          },
          "sentence": "____",
          "answer": "Эта книга здесь.",
          "options": [
            "Эта книга здесь.",
            "Этот книга здесь.",
            "Эти книга здесь."
          ]
        },
        {
          "id": "grammar-ru-a0-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს წიგნი აქაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This book is here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This book is here."
          },
          "sentence": "Этот книга здесь. → ____",
          "answer": "Эта книга здесь.",
          "options": [
            "Эта книга здесь.",
            "Эти книга здесь.",
            "Этот книга здесь."
          ]
        },
        {
          "id": "grammar-ru-a0-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს წიგნები აქაა.",
            "en": "Complete a different part of the sentence. Intended meaning: These books are here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: These books are here."
          },
          "sentence": "Эти ____ здесь.",
          "answer": "книги",
          "options": [
            "книги",
            "книг",
            "книгам"
          ]
        },
        {
          "id": "grammar-ru-a0-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს წიგნები აქაა.",
            "en": "Choose the complete sentence expressing: These books are here.",
            "ru": "Выберите полное предложение со значением: These books are here."
          },
          "sentence": "____",
          "answer": "Эти книги здесь.",
          "options": [
            "Эти книги здесь.",
            "Эта книги здесь.",
            "Этот книги здесь."
          ]
        },
        {
          "id": "grammar-ru-a0-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს წიგნები აქაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: These books are here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: These books are here."
          },
          "sentence": "Эта книги здесь. → ____",
          "answer": "Эти книги здесь.",
          "options": [
            "Эти книги здесь.",
            "Этот книги здесь.",
            "Эта книги здесь."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a0-8",
      "level": "A0",
      "title": {
        "ka": "უარყოფა და მარტივი კითხვა",
        "en": "Basic questions and negation",
        "ru": "Простые вопросы и отрицание"
      },
      "explanation": {
        "ka": "не უარყოფილ სიტყვას უსწრებს. кто ადამიანზე კითხულობს, что — ნივთზე, где — ადგილს. ჩვეულებრივ კითხვას დამხმარე do არ სჭირდება. нет დამოუკიდებელი უარყოფითი პასუხიცაა, не კი წინადადების წევრს უარყოფს. Когда? დროზე კითხულობს, где? — ადგილზე. Я нет врач არასწორია; გამოიყენე Я не врач.",
        "en": "Не precedes the negated word. Кто asks about a person, что about a thing, где about a place. Russian questions do not need English do. Нет can be an independent negative answer; не negates an element within a sentence. Когда? asks about time, где? about place. Я нет врач is incorrect; use Я не врач.",
        "ru": "Не ставится перед отрицаемым словом. Кто спрашивает о человеке, что — о предмете, где — о месте. Вопрос не требует вспомогательного do. Нет может быть самостоятельным отрицательным ответом; не отрицает член предложения. Когда? относится ко времени, где? — к месту. Я нет врач неверно; правильно Я не врач."
      },
      "rules": [
        {
          "form": "Я не врач.",
          "detail": {
            "ka": "не უარყოფილ სიტყვას უსწრებს. შეადარე მაგალითს: Я не врач. — მე ექიმი არ ვარ.",
            "en": "Не precedes the negated word. Compare the example: Я не врач. — I am not a doctor.",
            "ru": "Не ставится перед отрицаемым словом. Сравните с примером: Я не врач. — Я не врач."
          }
        },
        {
          "form": "Кто это? / Что это?",
          "detail": {
            "ka": "кто ადამიანზე კითხულობს, что — ნივთზე, где — ადგილს. შეადარე მაგალითს: Кто это? — ეს ვინ არის?",
            "en": "Кто asks about a person, что about a thing, где about a place. Compare the example: Кто это? — Who is this?",
            "ru": "Кто спрашивает о человеке, что — о предмете, где — о месте. Сравните с примером: Кто это? — Кто это?"
          }
        },
        {
          "form": "Где дом?",
          "detail": {
            "ka": "ჩვეულებრივ კითხვას დამხმარე do არ სჭირდება. შეადარე მაგალითს: Где дом? — სად არის სახლი?",
            "en": "Russian questions do not need English do. Compare the example: Где дом? — Where is the house?",
            "ru": "Вопрос не требует вспомогательного do. Сравните с примером: Где дом? — Где дом?"
          }
        }
      ],
      "examples": [
        {
          "en": "I am not a doctor.",
          "ru": "Я не врач.",
          "ka": "მე ექიმი არ ვარ."
        },
        {
          "en": "Who is this?",
          "ru": "Кто это?",
          "ka": "ეს ვინ არის?"
        },
        {
          "en": "Where is the house?",
          "ru": "Где дом?",
          "ka": "სად არის სახლი?"
        }
      ],
      "pitfalls": {
        "ka": "нет დამოუკიდებელი უარყოფითი პასუხიცაა, не კი წინადადების წევრს უარყოფს. Когда? დროზე კითხულობს, где? — ადგილზე. Я нет врач არასწორია; გამოიყენე Я не врач.",
        "en": "Нет can be an independent negative answer; не negates an element within a sentence. Когда? asks about time, где? about place. Я нет врач is incorrect; use Я не врач.",
        "ru": "Нет может быть самостоятельным отрицательным ответом; не отрицает член предложения. Когда? относится ко времени, где? — к месту. Я нет врач неверно; правильно Я не врач."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ექიმი არ ვარ.",
            "en": "Complete the sentence to express: I am not a doctor.",
            "ru": "Заполните предложение со значением: მე ექიმი არ ვარ."
          },
          "sentence": "Я ____ врач.",
          "answer": "не",
          "options": [
            "не",
            "нет",
            "ни"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს ვინ არის?",
            "en": "Complete the sentence to express: Who is this?",
            "ru": "Заполните предложение со значением: ეს ვინ არის?"
          },
          "sentence": "____ это?",
          "answer": "Кто",
          "options": [
            "Кто",
            "Где",
            "Когда"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სად არის სახლი?",
            "en": "Complete the sentence to express: Where is the house?",
            "ru": "Заполните предложение со значением: სად არის სახლი?"
          },
          "sentence": "____ дом?",
          "answer": "Где",
          "options": [
            "Где",
            "Кто",
            "Что"
          ]
        },
        {
          "id": "grammar-ru-a0-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ექიმი არ ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am not a doctor.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am not a doctor."
          },
          "sentence": "____ не врач.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a0-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ექიმი არ ვარ.",
            "en": "Choose the complete sentence expressing: I am not a doctor.",
            "ru": "Выберите полное предложение со значением: I am not a doctor."
          },
          "sentence": "____",
          "answer": "Я не врач.",
          "options": [
            "Я не врач.",
            "Я нет врач.",
            "Я ни врач."
          ]
        },
        {
          "id": "grammar-ru-a0-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ექიმი არ ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am not a doctor.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am not a doctor."
          },
          "sentence": "Я нет врач. → ____",
          "answer": "Я не врач.",
          "options": [
            "Я не врач.",
            "Я ни врач.",
            "Я нет врач."
          ]
        },
        {
          "id": "grammar-ru-a0-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს ვინ არის?",
            "en": "Complete a different part of the sentence. Intended meaning: Who is this?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Who is this?"
          },
          "sentence": "Кто ____?",
          "answer": "это",
          "options": [
            "это",
            "этоа",
            "этоу"
          ]
        },
        {
          "id": "grammar-ru-a0-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს ვინ არის?",
            "en": "Choose the complete sentence expressing: Who is this?",
            "ru": "Выберите полное предложение со значением: Who is this?"
          },
          "sentence": "____",
          "answer": "Кто это?",
          "options": [
            "Кто это?",
            "Где это?",
            "Когда это?"
          ]
        },
        {
          "id": "grammar-ru-a0-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს ვინ არის?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Who is this?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Who is this?"
          },
          "sentence": "Где это? → ____",
          "answer": "Кто это?",
          "options": [
            "Кто это?",
            "Когда это?",
            "Где это?"
          ]
        },
        {
          "id": "grammar-ru-a0-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სად არის სახლი?",
            "en": "Complete a different part of the sentence. Intended meaning: Where is the house?",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Where is the house?"
          },
          "sentence": "Где ____?",
          "answer": "дом",
          "options": [
            "дом",
            "дома",
            "дому"
          ]
        },
        {
          "id": "grammar-ru-a0-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სად არის სახლი?",
            "en": "Choose the complete sentence expressing: Where is the house?",
            "ru": "Выберите полное предложение со значением: Where is the house?"
          },
          "sentence": "____",
          "answer": "Где дом?",
          "options": [
            "Где дом?",
            "Кто дом?",
            "Что дом?"
          ]
        },
        {
          "id": "grammar-ru-a0-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სად არის სახლი?",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Where is the house?",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Where is the house?"
          },
          "sentence": "Кто дом? → ____",
          "answer": "Где дом?",
          "options": [
            "Где дом?",
            "Что дом?",
            "Кто дом?"
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-1",
      "level": "A1",
      "title": {
        "ka": "ზმნის უღლება აწმყოში",
        "en": "Present verb conjugation",
        "ru": "Спряжение в настоящем времени"
      },
      "explanation": {
        "ka": "აწმყოში ზმნა პირსა და რიცხვში იცვლება. читать: читаю, читаешь, читает, читаем, читаете, читают. პირის ნაცვალსახელი დაბოლოებას შეუთანხმე. ინფინიტივი читать პირდაპირ არ ცვლის читаю-ს სრულ წინადადებაში. კითხვა ცალკე დამხმარე ზმნას არ მოითხოვს: Ты читаешь? უარყოფაში не ზმნის წინ იწერება: не читаю.",
        "en": "Present verbs agree with person and number. Читать: читаю, читаешь, читает, читаем, читаете, читают. Match the ending to the subject. The infinitive читать cannot simply replace читаю in a complete personal clause. Questions need no separate auxiliary: Ты читаешь? For negation put не before the verb: не читаю.",
        "ru": "В настоящем времени глагол изменяется по лицам и числам. Читать: читаю, читаешь, читает, читаем, читаете, читают. Согласуйте окончание с подлежащим. Инфинитив читать не заменяет читаю в полном личном предложении. Вопрос не требует отдельного вспомогательного глагола: Ты читаешь? Отрицание не стоит перед глаголом: не читаю."
      },
      "rules": [
        {
          "form": "я читаю / ты читаешь",
          "detail": {
            "ka": "აწმყოში ზმნა პირსა და რიცხვში იცვლება. შეადარე მაგალითს: Я читаю книгу. — მე წიგნს ვკითხულობ.",
            "en": "Present verbs agree with person and number. Compare the example: Я читаю книгу. — I read a book.",
            "ru": "В настоящем времени глагол изменяется по лицам и числам. Сравните с примером: Я читаю книгу. — Я читаю книгу."
          }
        },
        {
          "form": "он читает / мы читаем",
          "detail": {
            "ka": "читать: читаю, читаешь, читает, читаем, читаете, читают. შეადარე მაგალითს: Она читает книгу. — ის წიგნს კითხულობს.",
            "en": "Читать: читаю, читаешь, читает, читаем, читаете, читают. Compare the example: Она читает книгу. — She reads a book.",
            "ru": "Читать: читаю, читаешь, читает, читаем, читаете, читают. Сравните с примером: Она читает книгу. — Она читает книгу."
          }
        },
        {
          "form": "вы читаете / они читают",
          "detail": {
            "ka": "პირის ნაცვალსახელი დაბოლოებას შეუთანხმე. შეადარე მაგალითს: Мы читаем книгу. — ჩვენ წიგნს ვკითხულობთ.",
            "en": "Match the ending to the subject. Compare the example: Мы читаем книгу. — We read a book.",
            "ru": "Согласуйте окончание с подлежащим. Сравните с примером: Мы читаем книгу. — Мы читаем книгу."
          }
        }
      ],
      "examples": [
        {
          "en": "I read a book.",
          "ru": "Я читаю книгу.",
          "ka": "მე წიგნს ვკითხულობ."
        },
        {
          "en": "She reads a book.",
          "ru": "Она читает книгу.",
          "ka": "ის წიგნს კითხულობს."
        },
        {
          "en": "We read a book.",
          "ru": "Мы читаем книгу.",
          "ka": "ჩვენ წიგნს ვკითხულობთ."
        }
      ],
      "pitfalls": {
        "ka": "ინფინიტივი читать პირდაპირ არ ცვლის читаю-ს სრულ წინადადებაში. კითხვა ცალკე დამხმარე ზმნას არ მოითხოვს: Ты читаешь? უარყოფაში не ზმნის წინ იწერება: не читаю.",
        "en": "The infinitive читать cannot simply replace читаю in a complete personal clause. Questions need no separate auxiliary: Ты читаешь? For negation put не before the verb: не читаю.",
        "ru": "Инфинитив читать не заменяет читаю в полном личном предложении. Вопрос не требует отдельного вспомогательного глагола: Ты читаешь? Отрицание не стоит перед глаголом: не читаю."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე წიგნს ვკითხულობ.",
            "en": "Complete the sentence to express: I read a book.",
            "ru": "Заполните предложение со значением: მე წიგნს ვკითხულობ."
          },
          "sentence": "Я ____ книгу.",
          "answer": "читаю",
          "options": [
            "читаю",
            "читаешь",
            "читает"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის წიგნს კითხულობს.",
            "en": "Complete the sentence to express: She reads a book.",
            "ru": "Заполните предложение со значением: ის წიგნს კითხულობს."
          },
          "sentence": "Она ____ книгу.",
          "answer": "читает",
          "options": [
            "читает",
            "читаю",
            "читают"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ წიგნს ვკითხულობთ.",
            "en": "Complete the sentence to express: We read a book.",
            "ru": "Заполните предложение со значением: ჩვენ წიგნს ვკითხულობთ."
          },
          "sentence": "Мы ____ книгу.",
          "answer": "читаем",
          "options": [
            "читаем",
            "читаете",
            "читаешь"
          ]
        },
        {
          "id": "grammar-ru-a1-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე წიგნს ვკითხულობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I read a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I read a book."
          },
          "sentence": "____ читаю книгу.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე წიგნს ვკითხულობ.",
            "en": "Choose the complete sentence expressing: I read a book.",
            "ru": "Выберите полное предложение со значением: I read a book."
          },
          "sentence": "____",
          "answer": "Я читаю книгу.",
          "options": [
            "Я читаю книгу.",
            "Я читаешь книгу.",
            "Я читает книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე წიგნს ვკითხულობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I read a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I read a book."
          },
          "sentence": "Я читаешь книгу. → ____",
          "answer": "Я читаю книгу.",
          "options": [
            "Я читаю книгу.",
            "Я читает книгу.",
            "Я читаешь книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის წიგნს კითხულობს.",
            "en": "Complete a different part of the sentence. Intended meaning: She reads a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She reads a book."
          },
          "sentence": "____ читает книгу.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a1-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის წიგნს კითხულობს.",
            "en": "Choose the complete sentence expressing: She reads a book.",
            "ru": "Выберите полное предложение со значением: She reads a book."
          },
          "sentence": "____",
          "answer": "Она читает книгу.",
          "options": [
            "Она читает книгу.",
            "Она читаю книгу.",
            "Она читают книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის წიგნს კითხულობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She reads a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She reads a book."
          },
          "sentence": "Она читаю книгу. → ____",
          "answer": "Она читает книгу.",
          "options": [
            "Она читает книгу.",
            "Она читают книгу.",
            "Она читаю книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ წიგნს ვკითხულობთ.",
            "en": "Complete a different part of the sentence. Intended meaning: We read a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We read a book."
          },
          "sentence": "____ читаем книгу.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-a1-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ წიგნს ვკითხულობთ.",
            "en": "Choose the complete sentence expressing: We read a book.",
            "ru": "Выберите полное предложение со значением: We read a book."
          },
          "sentence": "____",
          "answer": "Мы читаем книгу.",
          "options": [
            "Мы читаем книгу.",
            "Мы читаете книгу.",
            "Мы читаешь книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ წიგნს ვკითხულობთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We read a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We read a book."
          },
          "sentence": "Мы читаете книгу. → ____",
          "answer": "Мы читаем книгу.",
          "options": [
            "Мы читаем книгу.",
            "Мы читаешь книгу.",
            "Мы читаете книгу."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-2",
      "level": "A1",
      "title": {
        "ka": "მეორე უღლება",
        "en": "Second conjugation",
        "ru": "Второе спряжение"
      },
      "explanation": {
        "ka": "говорить მეორე უღლების მაგალითია: говорю, говоришь, говорит, говорим, говорите, говорят. ყველა -ить ზმნა წესს არ ემორჩილება; გამონაკლისებიც ისწავლე. другой გავრცელებული მოდელია любить: люблю, любишь, любит; პირველი პირის თანხმოვანი იცვლება. მახვილი სიტყვასთან ერთად ისწავლე. они говорит არასწორია, რადგან ისინი მრავლობით დაბოლოებას მოითხოვს.",
        "en": "Говорить models second conjugation: говорю, говоришь, говорит, говорим, говорите, говорят. Not every -ить verb follows it; learn exceptions. Another common model is любить: люблю, любишь, любит; the first-person consonant changes. Learn stress with each word. Они говорит is incorrect because they requires a plural ending.",
        "ru": "Говорить — пример второго спряжения: говорю, говоришь, говорит, говорим, говорите, говорят. Не все глаголы на -ить следуют этой модели; есть исключения. Ещё одна частая модель — любить: люблю, любишь, любит; в первом лице меняется согласная. Ударение учите вместе со словом. Они говорит неверно: множественное число требует другого окончания."
      },
      "rules": [
        {
          "form": "я говорю / ты говоришь",
          "detail": {
            "ka": "говорить მეორე უღლების მაგალითია: говорю, говоришь, говорит, говорим, говорите, говорят. შეადარე მაგალითს: Я говорю по-русски. — მე რუსულად ვლაპარაკობ.",
            "en": "Говорить models second conjugation: говорю, говоришь, говорит, говорим, говорите, говорят. Compare the example: Я говорю по-русски. — I speak Russian.",
            "ru": "Говорить — пример второго спряжения: говорю, говоришь, говорит, говорим, говорите, говорят. Сравните с примером: Я говорю по-русски. — Я говорю по-русски."
          }
        },
        {
          "form": "он говорит / мы говорим",
          "detail": {
            "ka": "ყველა -ить ზმნა წესს არ ემორჩილება; გამონაკლისებიც ისწავლე. შეადარე მაგალითს: Вы говорите по-английски. — თქვენ ინგლისურად ლაპარაკობთ.",
            "en": "Not every -ить verb follows it; learn exceptions. Compare the example: Вы говорите по-английски. — You speak English.",
            "ru": "Не все глаголы на -ить следуют этой модели; есть исключения. Сравните с примером: Вы говорите по-английски. — Вы говорите по-английски."
          }
        },
        {
          "form": "вы говорите / они говорят",
          "detail": {
            "ka": "другой გავრცელებული მოდელია любить: люблю, любишь, любит; პირველი პირის თანხმოვანი იცვლება. შეადარე მაგალითს: Они говорят тихо. — ისინი ჩუმად ლაპარაკობენ.",
            "en": "Another common model is любить: люблю, любишь, любит; the first-person consonant changes. Compare the example: Они говорят тихо. — They speak quietly.",
            "ru": "Ещё одна частая модель — любить: люблю, любишь, любит; в первом лице меняется согласная. Сравните с примером: Они говорят тихо. — Они говорят тихо."
          }
        }
      ],
      "examples": [
        {
          "en": "I speak Russian.",
          "ru": "Я говорю по-русски.",
          "ka": "მე რუსულად ვლაპარაკობ."
        },
        {
          "en": "You speak English.",
          "ru": "Вы говорите по-английски.",
          "ka": "თქვენ ინგლისურად ლაპარაკობთ."
        },
        {
          "en": "They speak quietly.",
          "ru": "Они говорят тихо.",
          "ka": "ისინი ჩუმად ლაპარაკობენ."
        }
      ],
      "pitfalls": {
        "ka": "другой გავრცელებული მოდელია любить: люблю, любишь, любит; პირველი პირის თანხმოვანი იცვლება. მახვილი სიტყვასთან ერთად ისწავლე. они говорит არასწორია, რადგან ისინი მრავლობით დაბოლოებას მოითხოვს.",
        "en": "Another common model is любить: люблю, любишь, любит; the first-person consonant changes. Learn stress with each word. Они говорит is incorrect because they requires a plural ending.",
        "ru": "Ещё одна частая модель — любить: люблю, любишь, любит; в первом лице меняется согласная. Ударение учите вместе со словом. Они говорит неверно: множественное число требует другого окончания."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე რუსულად ვლაპარაკობ.",
            "en": "Complete the sentence to express: I speak Russian.",
            "ru": "Заполните предложение со значением: მე რუსულად ვლაპარაკობ."
          },
          "sentence": "Я ____ по-русски.",
          "answer": "говорю",
          "options": [
            "говорю",
            "говоришь",
            "говорят"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: თქვენ ინგლისურად ლაპარაკობთ.",
            "en": "Complete the sentence to express: You speak English.",
            "ru": "Заполните предложение со значением: თქვენ ინგლისურად ლაპარაკობთ."
          },
          "sentence": "Вы ____ по-английски.",
          "answer": "говорите",
          "options": [
            "говорите",
            "говорим",
            "говоришь"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ისინი ჩუმად ლაპარაკობენ.",
            "en": "Complete the sentence to express: They speak quietly.",
            "ru": "Заполните предложение со значением: ისინი ჩუმად ლაპარაკობენ."
          },
          "sentence": "Они ____ тихо.",
          "answer": "говорят",
          "options": [
            "говорят",
            "говорит",
            "говорю"
          ]
        },
        {
          "id": "grammar-ru-a1-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე რუსულად ვლაპარაკობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I speak Russian.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I speak Russian."
          },
          "sentence": "____ говорю по-русски.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე რუსულად ვლაპარაკობ.",
            "en": "Choose the complete sentence expressing: I speak Russian.",
            "ru": "Выберите полное предложение со значением: I speak Russian."
          },
          "sentence": "____",
          "answer": "Я говорю по-русски.",
          "options": [
            "Я говорю по-русски.",
            "Я говоришь по-русски.",
            "Я говорят по-русски."
          ]
        },
        {
          "id": "grammar-ru-a1-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე რუსულად ვლაპარაკობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I speak Russian.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I speak Russian."
          },
          "sentence": "Я говоришь по-русски. → ____",
          "answer": "Я говорю по-русски.",
          "options": [
            "Я говорю по-русски.",
            "Я говорят по-русски.",
            "Я говоришь по-русски."
          ]
        },
        {
          "id": "grammar-ru-a1-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: თქვენ ინგლისურად ლაპარაკობთ.",
            "en": "Complete a different part of the sentence. Intended meaning: You speak English.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: You speak English."
          },
          "sentence": "____ говорите по-английски.",
          "answer": "Вы",
          "options": [
            "Вы",
            "Вас",
            "Вам"
          ]
        },
        {
          "id": "grammar-ru-a1-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: თქვენ ინგლისურად ლაპარაკობთ.",
            "en": "Choose the complete sentence expressing: You speak English.",
            "ru": "Выберите полное предложение со значением: You speak English."
          },
          "sentence": "____",
          "answer": "Вы говорите по-английски.",
          "options": [
            "Вы говорите по-английски.",
            "Вы говорим по-английски.",
            "Вы говоришь по-английски."
          ]
        },
        {
          "id": "grammar-ru-a1-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: თქვენ ინგლისურად ლაპარაკობთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: You speak English.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: You speak English."
          },
          "sentence": "Вы говорим по-английски. → ____",
          "answer": "Вы говорите по-английски.",
          "options": [
            "Вы говорите по-английски.",
            "Вы говоришь по-английски.",
            "Вы говорим по-английски."
          ]
        },
        {
          "id": "grammar-ru-a1-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ისინი ჩუმად ლაპარაკობენ.",
            "en": "Complete a different part of the sentence. Intended meaning: They speak quietly.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: They speak quietly."
          },
          "sentence": "____ говорят тихо.",
          "answer": "Они",
          "options": [
            "Они",
            "Их",
            "Им"
          ]
        },
        {
          "id": "grammar-ru-a1-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ისინი ჩუმად ლაპარაკობენ.",
            "en": "Choose the complete sentence expressing: They speak quietly.",
            "ru": "Выберите полное предложение со значением: They speak quietly."
          },
          "sentence": "____",
          "answer": "Они говорят тихо.",
          "options": [
            "Они говорят тихо.",
            "Они говорит тихо.",
            "Они говорю тихо."
          ]
        },
        {
          "id": "grammar-ru-a1-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ისინი ჩუმად ლაპარაკობენ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: They speak quietly.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: They speak quietly."
          },
          "sentence": "Они говорит тихо. → ____",
          "answer": "Они говорят тихо.",
          "options": [
            "Они говорят тихо.",
            "Они говорю тихо.",
            "Они говорит тихо."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-3",
      "level": "A1",
      "title": {
        "ka": "ადგილი: წინდებული ბრუნვა",
        "en": "Location: prepositional case",
        "ru": "Место: предложный падеж"
      },
      "explanation": {
        "ka": "მდებარეობისთვის в/на-ს მოსდევს წინდებული ბრუნვა: в школе, на работе. მიმართულება სხვა მოდელია; სად და საით ერთმანეთისგან გაარჩიე. в городе პასუხობს где?-ს და არა куда?-ს. в/на-ს არჩევა სახელთან ერთად ისწავლე: в школе, მაგრამ на работе. -ия-სთან ფორმა ხშირად -ии-ა: в Грузии, და არა в Грузие.",
        "en": "For location, в/на takes the prepositional case: в школе, на работе. Direction uses a different pattern; distinguish where from where to. В городе answers где?, not куда?. Learn в/на with the noun: в школе but на работе. Nouns in -ия often use -ии: в Грузии, not в Грузие.",
        "ru": "Для местонахождения после в/на нужен предложный падеж: в школе, на работе. Направление оформляется иначе; различайте где и куда. В городе отвечает на где?, не куда?. Выбор в/на учите с существительным: в школе, но на работе. У слов на -ия часто получается -ии: в Грузии, не в Грузие."
      },
      "rules": [
        {
          "form": "в школе / в городе",
          "detail": {
            "ka": "მდებარეობისთვის в/на-ს მოსდევს წინდებული ბრუნვა: в школе, на работе. შეადარე მაგალითს: Я в школе. — მე სკოლაში ვარ.",
            "en": "For location, в/на takes the prepositional case: в школе, на работе. Compare the example: Я в школе. — I am at school.",
            "ru": "Для местонахождения после в/на нужен предложный падеж: в школе, на работе. Сравните с примером: Я в школе. — Я в школе."
          }
        },
        {
          "form": "на работе / на столе",
          "detail": {
            "ka": "მიმართულება სხვა მოდელია; სად და საით ერთმანეთისგან გაარჩიე. შეადარე მაგალითს: Он на работе. — ის სამსახურშია.",
            "en": "Direction uses a different pattern; distinguish where from where to. Compare the example: Он на работе. — He is at work.",
            "ru": "Направление оформляется иначе; различайте где и куда. Сравните с примером: Он на работе. — Он на работе."
          }
        },
        {
          "form": "Где? + предложный падеж",
          "detail": {
            "ka": "в городе პასუხობს где?-ს და არა куда?-ს. შეადარე მაგალითს: Мы живём в городе. — ჩვენ ქალაქში ვცხოვრობთ.",
            "en": "В городе answers где?, not куда?. Compare the example: Мы живём в городе. — We live in the city.",
            "ru": "В городе отвечает на где?, не куда?. Сравните с примером: Мы живём в городе. — Мы живём в городе."
          }
        }
      ],
      "examples": [
        {
          "en": "I am at school.",
          "ru": "Я в школе.",
          "ka": "მე სკოლაში ვარ."
        },
        {
          "en": "He is at work.",
          "ru": "Он на работе.",
          "ka": "ის სამსახურშია."
        },
        {
          "en": "We live in the city.",
          "ru": "Мы живём в городе.",
          "ka": "ჩვენ ქალაქში ვცხოვრობთ."
        }
      ],
      "pitfalls": {
        "ka": "в городе პასუხობს где?-ს და არა куда?-ს. в/на-ს არჩევა სახელთან ერთად ისწავლე: в школе, მაგრამ на работе. -ия-სთან ფორმა ხშირად -ии-ა: в Грузии, და არა в Грузие.",
        "en": "В городе answers где?, not куда?. Learn в/на with the noun: в школе but на работе. Nouns in -ия often use -ии: в Грузии, not в Грузие.",
        "ru": "В городе отвечает на где?, не куда?. Выбор в/на учите с существительным: в школе, но на работе. У слов на -ия часто получается -ии: в Грузии, не в Грузие."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სკოლაში ვარ.",
            "en": "Complete the sentence to express: I am at school.",
            "ru": "Заполните предложение со значением: მე სკოლაში ვარ."
          },
          "sentence": "Я в ____.",
          "answer": "школе",
          "options": [
            "школе",
            "школу",
            "школа"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის სამსახურშია.",
            "en": "Complete the sentence to express: He is at work.",
            "ru": "Заполните предложение со значением: ის სამსახურშია."
          },
          "sentence": "Он на ____.",
          "answer": "работе",
          "options": [
            "работе",
            "работу",
            "работа"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ ქალაქში ვცხოვრობთ.",
            "en": "Complete the sentence to express: We live in the city.",
            "ru": "Заполните предложение со значением: ჩვენ ქალაქში ვცხოვრობთ."
          },
          "sentence": "Мы живём в ____.",
          "answer": "городе",
          "options": [
            "городе",
            "город",
            "города"
          ]
        },
        {
          "id": "grammar-ru-a1-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე სკოლაში ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am at school.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am at school."
          },
          "sentence": "____ в школе.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე სკოლაში ვარ.",
            "en": "Choose the complete sentence expressing: I am at school.",
            "ru": "Выберите полное предложение со значением: I am at school."
          },
          "sentence": "____",
          "answer": "Я в школе.",
          "options": [
            "Я в школе.",
            "Я в школу.",
            "Я в школа."
          ]
        },
        {
          "id": "grammar-ru-a1-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე სკოლაში ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am at school.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am at school."
          },
          "sentence": "Я в школу. → ____",
          "answer": "Я в школе.",
          "options": [
            "Я в школе.",
            "Я в школа.",
            "Я в школу."
          ]
        },
        {
          "id": "grammar-ru-a1-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის სამსახურშია.",
            "en": "Complete a different part of the sentence. Intended meaning: He is at work.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He is at work."
          },
          "sentence": "____ на работе.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-a1-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის სამსახურშია.",
            "en": "Choose the complete sentence expressing: He is at work.",
            "ru": "Выберите полное предложение со значением: He is at work."
          },
          "sentence": "____",
          "answer": "Он на работе.",
          "options": [
            "Он на работе.",
            "Он на работу.",
            "Он на работа."
          ]
        },
        {
          "id": "grammar-ru-a1-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის სამსახურშია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He is at work.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He is at work."
          },
          "sentence": "Он на работу. → ____",
          "answer": "Он на работе.",
          "options": [
            "Он на работе.",
            "Он на работа.",
            "Он на работу."
          ]
        },
        {
          "id": "grammar-ru-a1-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ ქალაქში ვცხოვრობთ.",
            "en": "Complete a different part of the sentence. Intended meaning: We live in the city.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We live in the city."
          },
          "sentence": "____ живём в городе.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-a1-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ ქალაქში ვცხოვრობთ.",
            "en": "Choose the complete sentence expressing: We live in the city.",
            "ru": "Выберите полное предложение со значением: We live in the city."
          },
          "sentence": "____",
          "answer": "Мы живём в городе.",
          "options": [
            "Мы живём в городе.",
            "Мы живём в город.",
            "Мы живём в города."
          ]
        },
        {
          "id": "grammar-ru-a1-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ ქალაქში ვცხოვრობთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We live in the city.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We live in the city."
          },
          "sentence": "Мы живём в город. → ____",
          "answer": "Мы живём в городе.",
          "options": [
            "Мы живём в городе.",
            "Мы живём в города.",
            "Мы живём в город."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-4",
      "level": "A1",
      "title": {
        "ka": "მოქმედების ობიექტი",
        "en": "Direct objects: accusative",
        "ru": "Прямое дополнение: винительный падеж"
      },
      "explanation": {
        "ka": "პირდაპირ ობიექტთან -а ხშირად -у ხდება, -я — -ю. უსულო მამრობითი ხშირად სახელობითს ემთხვევა; სულიერი მამრობითი სხვა ფორმას მოითხოვს. სულიერობა ბიოლოგიურ ცხოვრებას ყოველთვის არ ემთხვევა, ამიტომ ფორმები ლექსიკურადაც ისწავლე. -о/-е საშუალო სქესი ხშირად სახელობითს ემთხვევა: вижу окно. ზმნა видеть ობიექტს ბრალდებითში იღებს, ხოლო помогать სხვა ბრუნვას მოითხოვს.",
        "en": "For direct objects, -а often becomes -у and -я becomes -ю. Inanimate masculine often matches nominative; animate masculine uses a different form. Animacy is grammatical and should also be learned lexically. Neuter -о/-е often matches nominative: вижу окно. Видеть takes an accusative object, but помогать requires a different case.",
        "ru": "В прямом дополнении -а часто меняется на -у, -я — на -ю. Неодушевлённый мужской род часто совпадает с именительным; одушевлённый имеет другую форму. Одушевлённость — грамматическое свойство, формы учите и лексически. Средний род на -о/-е часто совпадает с именительным: вижу окно. Видеть требует винительного, помогать — другого падежа."
      },
      "rules": [
        {
          "form": "читаю книгу",
          "detail": {
            "ka": "პირდაპირ ობიექტთან -а ხშირად -у ხდება, -я — -ю. შეადარე მაგალითს: Я читаю книгу. — მე წიგნს ვკითხულობ.",
            "en": "For direct objects, -а often becomes -у and -я becomes -ю. Compare the example: Я читаю книгу. — I read a book.",
            "ru": "В прямом дополнении -а часто меняется на -у, -я — на -ю. Сравните с примером: Я читаю книгу. — Я читаю книгу."
          }
        },
        {
          "form": "вижу дом",
          "detail": {
            "ka": "უსულო მამრობითი ხშირად სახელობითს ემთხვევა; სულიერი მამრობითი სხვა ფორმას მოითხოვს. შეადარე მაგალითს: Я вижу дом. — მე სახლს ვხედავ.",
            "en": "Inanimate masculine often matches nominative; animate masculine uses a different form. Compare the example: Я вижу дом. — I see a house.",
            "ru": "Неодушевлённый мужской род часто совпадает с именительным; одушевлённый имеет другую форму. Сравните с примером: Я вижу дом. — Я вижу дом."
          }
        },
        {
          "form": "вижу брата",
          "detail": {
            "ka": "სულიერობა ბიოლოგიურ ცხოვრებას ყოველთვის არ ემთხვევა, ამიტომ ფორმები ლექსიკურადაც ისწავლე. შეადარე მაგალითს: Я вижу брата. — მე ძმას ვხედავ.",
            "en": "Animacy is grammatical and should also be learned lexically. Compare the example: Я вижу брата. — I see my brother.",
            "ru": "Одушевлённость — грамматическое свойство, формы учите и лексически. Сравните с примером: Я вижу брата. — Я вижу брата."
          }
        }
      ],
      "examples": [
        {
          "en": "I read a book.",
          "ru": "Я читаю книгу.",
          "ka": "მე წიგნს ვკითხულობ."
        },
        {
          "en": "I see a house.",
          "ru": "Я вижу дом.",
          "ka": "მე სახლს ვხედავ."
        },
        {
          "en": "I see my brother.",
          "ru": "Я вижу брата.",
          "ka": "მე ძმას ვხედავ."
        }
      ],
      "pitfalls": {
        "ka": "სულიერობა ბიოლოგიურ ცხოვრებას ყოველთვის არ ემთხვევა, ამიტომ ფორმები ლექსიკურადაც ისწავლე. -о/-е საშუალო სქესი ხშირად სახელობითს ემთხვევა: вижу окно. ზმნა видеть ობიექტს ბრალდებითში იღებს, ხოლო помогать სხვა ბრუნვას მოითხოვს.",
        "en": "Animacy is grammatical and should also be learned lexically. Neuter -о/-е often matches nominative: вижу окно. Видеть takes an accusative object, but помогать requires a different case.",
        "ru": "Одушевлённость — грамматическое свойство, формы учите и лексически. Средний род на -о/-е часто совпадает с именительным: вижу окно. Видеть требует винительного, помогать — другого падежа."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე წიგნს ვკითხულობ.",
            "en": "Complete the sentence to express: I read a book.",
            "ru": "Заполните предложение со значением: მე წიგნს ვკითხულობ."
          },
          "sentence": "Я читаю ____.",
          "answer": "книгу",
          "options": [
            "книгу",
            "книга",
            "книге"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სახლს ვხედავ.",
            "en": "Complete the sentence to express: I see a house.",
            "ru": "Заполните предложение со значением: მე სახლს ვხედავ."
          },
          "sentence": "Я вижу ____.",
          "answer": "дом",
          "options": [
            "дом",
            "дома",
            "дому"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ძმას ვხედავ.",
            "en": "Complete the sentence to express: I see my brother.",
            "ru": "Заполните предложение со значением: მე ძმას ვხედავ."
          },
          "sentence": "Я вижу ____.",
          "answer": "брата",
          "options": [
            "брата",
            "брат",
            "брату"
          ]
        },
        {
          "id": "grammar-ru-a1-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე წიგნს ვკითხულობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I read a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I read a book."
          },
          "sentence": "____ читаю книгу.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე წიგნს ვკითხულობ.",
            "en": "Choose the complete sentence expressing: I read a book.",
            "ru": "Выберите полное предложение со значением: I read a book."
          },
          "sentence": "____",
          "answer": "Я читаю книгу.",
          "options": [
            "Я читаю книгу.",
            "Я читаю книга.",
            "Я читаю книге."
          ]
        },
        {
          "id": "grammar-ru-a1-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე წიგნს ვკითხულობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I read a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I read a book."
          },
          "sentence": "Я читаю книга. → ____",
          "answer": "Я читаю книгу.",
          "options": [
            "Я читаю книгу.",
            "Я читаю книге.",
            "Я читаю книга."
          ]
        },
        {
          "id": "grammar-ru-a1-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე სახლს ვხედავ.",
            "en": "Complete a different part of the sentence. Intended meaning: I see a house.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I see a house."
          },
          "sentence": "____ вижу дом.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე სახლს ვხედავ.",
            "en": "Choose the complete sentence expressing: I see a house.",
            "ru": "Выберите полное предложение со значением: I see a house."
          },
          "sentence": "____",
          "answer": "Я вижу дом.",
          "options": [
            "Я вижу дом.",
            "Я вижу дома.",
            "Я вижу дому."
          ]
        },
        {
          "id": "grammar-ru-a1-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე სახლს ვხედავ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I see a house.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I see a house."
          },
          "sentence": "Я вижу дома. → ____",
          "answer": "Я вижу дом.",
          "options": [
            "Я вижу дом.",
            "Я вижу дому.",
            "Я вижу дома."
          ]
        },
        {
          "id": "grammar-ru-a1-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ძმას ვხედავ.",
            "en": "Complete a different part of the sentence. Intended meaning: I see my brother.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I see my brother."
          },
          "sentence": "____ вижу брата.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ძმას ვხედავ.",
            "en": "Choose the complete sentence expressing: I see my brother.",
            "ru": "Выберите полное предложение со значением: I see my brother."
          },
          "sentence": "____",
          "answer": "Я вижу брата.",
          "options": [
            "Я вижу брата.",
            "Я вижу брат.",
            "Я вижу брату."
          ]
        },
        {
          "id": "grammar-ru-a1-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ძმას ვხედავ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I see my brother.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I see my brother."
          },
          "sentence": "Я вижу брат. → ____",
          "answer": "Я вижу брата.",
          "options": [
            "Я вижу брата.",
            "Я вижу брату.",
            "Я вижу брат."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-5",
      "level": "A1",
      "title": {
        "ka": "მაქვს და არ მაქვს",
        "en": "Possession and absence",
        "ru": "У меня есть / у меня нет"
      },
      "explanation": {
        "ka": "კუთვნილების გავრცელებული მოდელია у + ნათესაობითი + есть + სახელი. უარყოფაში нет-ს შემდეგ ნივთიც ნათესაობითშია: нет книги. у-ს შემდეგ ნაცვალსახელს ხშირად საწყისი н ემატება: у него, у неё, у них. я есть книга საკუთრების აზრით არასწორია. უარყოფაში нет-ს შემდეგ ზმნა არ ჩასვა: У меня нет билета.",
        "en": "A common possession pattern is у + genitive + есть + noun. In the negative, нет also takes the possessed noun in genitive: нет книги. After у a third-person pronoun commonly gains initial н: у него, у неё, у них. Я есть книга does not express possession. In absence statements use нет directly: У меня нет билета.",
        "ru": "Распространённая модель обладания: у + родительный + есть + существительное. После нет сам предмет тоже стоит в родительном: нет книги. После у у местоимения третьего лица обычно появляется н: у него, у неё, у них. Я есть книга не выражает обладание. Для отсутствия используйте нет напрямую: У меня нет билета."
      },
      "rules": [
        {
          "form": "У меня есть книга.",
          "detail": {
            "ka": "კუთვნილების გავრცელებული მოდელია у + ნათესაობითი + есть + სახელი. შეადარე მაგალითს: У меня есть книга. — მე წიგნი მაქვს.",
            "en": "A common possession pattern is у + genitive + есть + noun. Compare the example: У меня есть книга. — I have a book.",
            "ru": "Распространённая модель обладания: у + родительный + есть + существительное. Сравните с примером: У меня есть книга. — У меня есть книга."
          }
        },
        {
          "form": "У него есть билет.",
          "detail": {
            "ka": "უარყოფაში нет-ს შემდეგ ნივთიც ნათესაობითშია: нет книги. შეადარე მაგალითს: У него есть билет. — მას ბილეთი აქვს.",
            "en": "In the negative, нет also takes the possessed noun in genitive: нет книги. Compare the example: У него есть билет. — He has a ticket.",
            "ru": "После нет сам предмет тоже стоит в родительном: нет книги. Сравните с примером: У него есть билет. — У него есть билет."
          }
        },
        {
          "form": "У меня нет книги.",
          "detail": {
            "ka": "у-ს შემდეგ ნაცვალსახელს ხშირად საწყისი н ემატება: у него, у неё, у них. შეადარე მაგალითს: У меня нет книги. — მე წიგნი არ მაქვს.",
            "en": "After у a third-person pronoun commonly gains initial н: у него, у неё, у них. Compare the example: У меня нет книги. — I do not have a book.",
            "ru": "После у у местоимения третьего лица обычно появляется н: у него, у неё, у них. Сравните с примером: У меня нет книги. — У меня нет книги."
          }
        }
      ],
      "examples": [
        {
          "en": "I have a book.",
          "ru": "У меня есть книга.",
          "ka": "მე წიგნი მაქვს."
        },
        {
          "en": "He has a ticket.",
          "ru": "У него есть билет.",
          "ka": "მას ბილეთი აქვს."
        },
        {
          "en": "I do not have a book.",
          "ru": "У меня нет книги.",
          "ka": "მე წიგნი არ მაქვს."
        }
      ],
      "pitfalls": {
        "ka": "у-ს შემდეგ ნაცვალსახელს ხშირად საწყისი н ემატება: у него, у неё, у них. я есть книга საკუთრების აზრით არასწორია. უარყოფაში нет-ს შემდეგ ზმნა არ ჩასვა: У меня нет билета.",
        "en": "After у a third-person pronoun commonly gains initial н: у него, у неё, у них. Я есть книга does not express possession. In absence statements use нет directly: У меня нет билета.",
        "ru": "После у у местоимения третьего лица обычно появляется н: у него, у неё, у них. Я есть книга не выражает обладание. Для отсутствия используйте нет напрямую: У меня нет билета."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე წიგნი მაქვს.",
            "en": "Complete the sentence to express: I have a book.",
            "ru": "Заполните предложение со значением: მე წიგნი მაქვს."
          },
          "sentence": "У ____ есть книга.",
          "answer": "меня",
          "options": [
            "меня",
            "я",
            "мне"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მას ბილეთი აქვს.",
            "en": "Complete the sentence to express: He has a ticket.",
            "ru": "Заполните предложение со значением: მას ბილეთი აქვს."
          },
          "sentence": "У ____ есть билет.",
          "answer": "него",
          "options": [
            "него",
            "он",
            "ему"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე წიგნი არ მაქვს.",
            "en": "Complete the sentence to express: I do not have a book.",
            "ru": "Заполните предложение со значением: მე წიგნი არ მაქვს."
          },
          "sentence": "У меня нет ____.",
          "answer": "книги",
          "options": [
            "книги",
            "книга",
            "книгу"
          ]
        },
        {
          "id": "grammar-ru-a1-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე წიგნი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: I have a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I have a book."
          },
          "sentence": "У меня ____ книга.",
          "answer": "есть",
          "options": [
            "есть",
            "нет",
            "был"
          ]
        },
        {
          "id": "grammar-ru-a1-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე წიგნი მაქვს.",
            "en": "Choose the complete sentence expressing: I have a book.",
            "ru": "Выберите полное предложение со значением: I have a book."
          },
          "sentence": "____",
          "answer": "У меня есть книга.",
          "options": [
            "У меня есть книга.",
            "У я есть книга.",
            "У мне есть книга."
          ]
        },
        {
          "id": "grammar-ru-a1-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე წიგნი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I have a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I have a book."
          },
          "sentence": "У я есть книга. → ____",
          "answer": "У меня есть книга.",
          "options": [
            "У меня есть книга.",
            "У мне есть книга.",
            "У я есть книга."
          ]
        },
        {
          "id": "grammar-ru-a1-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მას ბილეთი აქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: He has a ticket.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He has a ticket."
          },
          "sentence": "У него ____ билет.",
          "answer": "есть",
          "options": [
            "есть",
            "нет",
            "был"
          ]
        },
        {
          "id": "grammar-ru-a1-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მას ბილეთი აქვს.",
            "en": "Choose the complete sentence expressing: He has a ticket.",
            "ru": "Выберите полное предложение со значением: He has a ticket."
          },
          "sentence": "____",
          "answer": "У него есть билет.",
          "options": [
            "У него есть билет.",
            "У он есть билет.",
            "У ему есть билет."
          ]
        },
        {
          "id": "grammar-ru-a1-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მას ბილეთი აქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He has a ticket.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He has a ticket."
          },
          "sentence": "У он есть билет. → ____",
          "answer": "У него есть билет.",
          "options": [
            "У него есть билет.",
            "У ему есть билет.",
            "У он есть билет."
          ]
        },
        {
          "id": "grammar-ru-a1-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე წიგნი არ მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: I do not have a book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I do not have a book."
          },
          "sentence": "У ____ нет книги.",
          "answer": "меня",
          "options": [
            "меня",
            "я",
            "мне"
          ]
        },
        {
          "id": "grammar-ru-a1-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე წიგნი არ მაქვს.",
            "en": "Choose the complete sentence expressing: I do not have a book.",
            "ru": "Выберите полное предложение со значением: I do not have a book."
          },
          "sentence": "____",
          "answer": "У меня нет книги.",
          "options": [
            "У меня нет книги.",
            "У меня нет книга.",
            "У меня нет книгу."
          ]
        },
        {
          "id": "grammar-ru-a1-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე წიგნი არ მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I do not have a book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I do not have a book."
          },
          "sentence": "У меня нет книга. → ____",
          "answer": "У меня нет книги.",
          "options": [
            "У меня нет книги.",
            "У меня нет книгу.",
            "У меня нет книга."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-6",
      "level": "A1",
      "title": {
        "ka": "წარსული დრო",
        "en": "Russian past tense",
        "ru": "Прошедшее время"
      },
      "explanation": {
        "ka": "წარსულში ზმნა სქესსა და რიცხვში იცვლება: читал, читала, читало, читали. პირი დაბოლოებას არ ცვლის; მე-სთანაც მოსაუბრის სქესი მნიშვნელოვანია. ჩვეულებრივი წარსული инфинитивის -ть-ს ნაცვლად -л-ს ამატებს, თუმცა არის არაწესიერი шёл. კითხვაში ფორმა იგივე რჩება, ინტონაცია იცვლება. ჩვენთან -ли გამოიყენება, მოსაუბრეთა სქესის მიუხედავად.",
        "en": "Past verbs agree with gender and number: читал, читала, читало, читали. Person does not determine the ending; with I, the speaker’s gender matters. A regular past often replaces infinitive -ть with -л, but irregular шёл must be learned. Questions keep the same verb form and change intonation. We takes -ли regardless of the speakers’ genders.",
        "ru": "В прошедшем времени глагол изменяется по родам и числам: читал, читала, читало, читали. Лицо не определяет окончание; с я учитывается род говорящего. Обычное прошедшее часто заменяет -ть инфинитива на -л, но шёл нужно запомнить. Вопрос сохраняет форму глагола и меняет интонацию. С мы используется -ли независимо от рода говорящих."
      },
      "rules": [
        {
          "form": "он читал / она читала",
          "detail": {
            "ka": "წარსულში ზმნა სქესსა და რიცხვში იცვლება: читал, читала, читало, читали. შეადარე მაგალითს: Он читал вчера. — ის გუშინ კითხულობდა.",
            "en": "Past verbs agree with gender and number: читал, читала, читало, читали. Compare the example: Он читал вчера. — He read yesterday.",
            "ru": "В прошедшем времени глагол изменяется по родам и числам: читал, читала, читало, читали. Сравните с примером: Он читал вчера. — Он читал вчера."
          }
        },
        {
          "form": "оно работало",
          "detail": {
            "ka": "პირი დაბოლოებას არ ცვლის; მე-სთანაც მოსაუბრის სქესი მნიშვნელოვანია. შეადარე მაგალითს: Она работала вчера. — ის გუშინ მუშაობდა.",
            "en": "Person does not determine the ending; with I, the speaker’s gender matters. Compare the example: Она работала вчера. — She worked yesterday.",
            "ru": "Лицо не определяет окончание; с я учитывается род говорящего. Сравните с примером: Она работала вчера. — Она работала вчера."
          }
        },
        {
          "form": "мы / вы / они читали",
          "detail": {
            "ka": "ჩვეულებრივი წარსული инфинитивის -ть-ს ნაცვლად -л-ს ამატებს, თუმცა არის არაწესიერი шёл. შეადარე მაგალითს: Мы гуляли вчера. — ჩვენ გუშინ ვსეირნობდით.",
            "en": "A regular past often replaces infinitive -ть with -л, but irregular шёл must be learned. Compare the example: Мы гуляли вчера. — We walked yesterday.",
            "ru": "Обычное прошедшее часто заменяет -ть инфинитива на -л, но шёл нужно запомнить. Сравните с примером: Мы гуляли вчера. — Мы гуляли вчера."
          }
        }
      ],
      "examples": [
        {
          "en": "He read yesterday.",
          "ru": "Он читал вчера.",
          "ka": "ის გუშინ კითხულობდა."
        },
        {
          "en": "She worked yesterday.",
          "ru": "Она работала вчера.",
          "ka": "ის გუშინ მუშაობდა."
        },
        {
          "en": "We walked yesterday.",
          "ru": "Мы гуляли вчера.",
          "ka": "ჩვენ გუშინ ვსეირნობდით."
        }
      ],
      "pitfalls": {
        "ka": "ჩვეულებრივი წარსული инфинитивის -ть-ს ნაცვლად -л-ს ამატებს, თუმცა არის არაწესიერი шёл. კითხვაში ფორმა იგივე რჩება, ინტონაცია იცვლება. ჩვენთან -ли გამოიყენება, მოსაუბრეთა სქესის მიუხედავად.",
        "en": "A regular past often replaces infinitive -ть with -л, but irregular шёл must be learned. Questions keep the same verb form and change intonation. We takes -ли regardless of the speakers’ genders.",
        "ru": "Обычное прошедшее часто заменяет -ть инфинитива на -л, но шёл нужно запомнить. Вопрос сохраняет форму глагола и меняет интонацию. С мы используется -ли независимо от рода говорящих."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის გუშინ კითხულობდა.",
            "en": "Complete the sentence to express: He read yesterday.",
            "ru": "Заполните предложение со значением: ის გუშინ კითხულობდა."
          },
          "sentence": "Он ____ вчера.",
          "answer": "читал",
          "options": [
            "читал",
            "читала",
            "читали"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის გუშინ მუშაობდა.",
            "en": "Complete the sentence to express: She worked yesterday.",
            "ru": "Заполните предложение со значением: ის გუშინ მუშაობდა."
          },
          "sentence": "Она ____ вчера.",
          "answer": "работала",
          "options": [
            "работала",
            "работал",
            "работали"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩვენ გუშინ ვსეირნობდით.",
            "en": "Complete the sentence to express: We walked yesterday.",
            "ru": "Заполните предложение со значением: ჩვენ გუშინ ვსეირნობდით."
          },
          "sentence": "Мы ____ вчера.",
          "answer": "гуляли",
          "options": [
            "гуляли",
            "гулял",
            "гуляла"
          ]
        },
        {
          "id": "grammar-ru-a1-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის გუშინ კითხულობდა.",
            "en": "Complete a different part of the sentence. Intended meaning: He read yesterday.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He read yesterday."
          },
          "sentence": "____ читал вчера.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-a1-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის გუშინ კითხულობდა.",
            "en": "Choose the complete sentence expressing: He read yesterday.",
            "ru": "Выберите полное предложение со значением: He read yesterday."
          },
          "sentence": "____",
          "answer": "Он читал вчера.",
          "options": [
            "Он читал вчера.",
            "Он читала вчера.",
            "Он читали вчера."
          ]
        },
        {
          "id": "grammar-ru-a1-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის გუშინ კითხულობდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He read yesterday.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He read yesterday."
          },
          "sentence": "Он читала вчера. → ____",
          "answer": "Он читал вчера.",
          "options": [
            "Он читал вчера.",
            "Он читали вчера.",
            "Он читала вчера."
          ]
        },
        {
          "id": "grammar-ru-a1-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის გუშინ მუშაობდა.",
            "en": "Complete a different part of the sentence. Intended meaning: She worked yesterday.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She worked yesterday."
          },
          "sentence": "____ работала вчера.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a1-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის გუშინ მუშაობდა.",
            "en": "Choose the complete sentence expressing: She worked yesterday.",
            "ru": "Выберите полное предложение со значением: She worked yesterday."
          },
          "sentence": "____",
          "answer": "Она работала вчера.",
          "options": [
            "Она работала вчера.",
            "Она работал вчера.",
            "Она работали вчера."
          ]
        },
        {
          "id": "grammar-ru-a1-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის გუშინ მუშაობდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She worked yesterday.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She worked yesterday."
          },
          "sentence": "Она работал вчера. → ____",
          "answer": "Она работала вчера.",
          "options": [
            "Она работала вчера.",
            "Она работали вчера.",
            "Она работал вчера."
          ]
        },
        {
          "id": "grammar-ru-a1-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩვენ გუშინ ვსეირნობდით.",
            "en": "Complete a different part of the sentence. Intended meaning: We walked yesterday.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We walked yesterday."
          },
          "sentence": "____ гуляли вчера.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-a1-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩვენ გუშინ ვსეირნობდით.",
            "en": "Choose the complete sentence expressing: We walked yesterday.",
            "ru": "Выберите полное предложение со значением: We walked yesterday."
          },
          "sentence": "____",
          "answer": "Мы гуляли вчера.",
          "options": [
            "Мы гуляли вчера.",
            "Мы гулял вчера.",
            "Мы гуляла вчера."
          ]
        },
        {
          "id": "grammar-ru-a1-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩვენ გუშინ ვსეირნობდით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We walked yesterday.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We walked yesterday."
          },
          "sentence": "Мы гулял вчера. → ____",
          "answer": "Мы гуляли вчера.",
          "options": [
            "Мы гуляли вчера.",
            "Мы гуляла вчера.",
            "Мы гулял вчера."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-7",
      "level": "A1",
      "title": {
        "ka": "მომავალი დროის საფუძველი",
        "en": "Compound future",
        "ru": "Составное будущее время"
      },
      "explanation": {
        "ka": "უსრული სახის მომავალია буду/будешь/будет/будем/будете/будут + ინფინიტივი. საწყისი ზმნა არ იუღლება ამ მოდელში. быть მომავლის უღლებაში მთავარ დროს გამოხატავს. უსრული ინფინიტივი ინარჩუნებს პროცესის ან განმეორების აზრს. буду прочитать არასწორია, რადგან სრული სახის მომავალს დამოუკიდებელი прочитаю ფორმა აქვს.",
        "en": "The imperfective future uses буду/будешь/будет/будем/будете/будут + infinitive. Do not conjugate the main verb in this pattern. The future of быть carries the tense and agreement. The imperfective infinitive preserves process or repetition. Буду прочитать is incorrect because perfective future uses the independent form прочитаю.",
        "ru": "Будущее несовершенного вида: буду/будешь/будет/будем/будете/будут + инфинитив. Основной глагол в этой модели не спрягается. Будущее быть выражает время и согласование. Несовершенный инфинитив сохраняет значение процесса или повторения. Буду прочитать неверно: будущее совершенного вида имеет самостоятельную форму прочитаю."
      },
      "rules": [
        {
          "form": "я буду читать",
          "detail": {
            "ka": "უსრული სახის მომავალია буду/будешь/будет/будем/будете/будут + ინფინიტივი. შეადარე მაგალითს: Я буду читать. — მე წავიკითხავ.",
            "en": "The imperfective future uses буду/будешь/будет/будем/будете/будут + infinitive. Compare the example: Я буду читать. — I will read.",
            "ru": "Будущее несовершенного вида: буду/будешь/будет/будем/будете/будут + инфинитив. Сравните с примером: Я буду читать. — Я буду читать."
          }
        },
        {
          "form": "она будет работать",
          "detail": {
            "ka": "საწყისი ზმნა არ იუღლება ამ მოდელში. შეადარე მაგალითს: Она будет работать. — ის იმუშავებს.",
            "en": "Do not conjugate the main verb in this pattern. Compare the example: Она будет работать. — She will work.",
            "ru": "Основной глагол в этой модели не спрягается. Сравните с примером: Она будет работать. — Она будет работать."
          }
        },
        {
          "form": "они будут учиться",
          "detail": {
            "ka": "быть მომავლის უღლებაში მთავარ დროს გამოხატავს. შეადარე მაგალითს: Они будут учиться. — ისინი ისწავლიან.",
            "en": "The future of быть carries the tense and agreement. Compare the example: Они будут учиться. — They will study.",
            "ru": "Будущее быть выражает время и согласование. Сравните с примером: Они будут учиться. — Они будут учиться."
          }
        }
      ],
      "examples": [
        {
          "en": "I will read.",
          "ru": "Я буду читать.",
          "ka": "მე წავიკითხავ."
        },
        {
          "en": "She will work.",
          "ru": "Она будет работать.",
          "ka": "ის იმუშავებს."
        },
        {
          "en": "They will study.",
          "ru": "Они будут учиться.",
          "ka": "ისინი ისწავლიან."
        }
      ],
      "pitfalls": {
        "ka": "быть მომავლის უღლებაში მთავარ დროს გამოხატავს. უსრული ინფინიტივი ინარჩუნებს პროცესის ან განმეორების აზრს. буду прочитать არასწორია, რადგან სრული სახის მომავალს დამოუკიდებელი прочитаю ფორმა აქვს.",
        "en": "The future of быть carries the tense and agreement. The imperfective infinitive preserves process or repetition. Буду прочитать is incorrect because perfective future uses the independent form прочитаю.",
        "ru": "Будущее быть выражает время и согласование. Несовершенный инфинитив сохраняет значение процесса или повторения. Буду прочитать неверно: будущее совершенного вида имеет самостоятельную форму прочитаю."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე წავიკითხავ.",
            "en": "Complete the sentence to express: I will read.",
            "ru": "Заполните предложение со значением: მე წავიკითხავ."
          },
          "sentence": "Я ____ читать.",
          "answer": "буду",
          "options": [
            "буду",
            "будет",
            "будут"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის იმუშავებს.",
            "en": "Complete the sentence to express: She will work.",
            "ru": "Заполните предложение со значением: ის იმუშავებს."
          },
          "sentence": "Она ____ работать.",
          "answer": "будет",
          "options": [
            "будет",
            "буду",
            "будем"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ისინი ისწავლიან.",
            "en": "Complete the sentence to express: They will study.",
            "ru": "Заполните предложение со значением: ისინი ისწავლიან."
          },
          "sentence": "Они будут ____.",
          "answer": "учиться",
          "options": [
            "учиться",
            "учатся",
            "учились"
          ]
        },
        {
          "id": "grammar-ru-a1-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე წავიკითხავ.",
            "en": "Complete a different part of the sentence. Intended meaning: I will read.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I will read."
          },
          "sentence": "____ буду читать.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a1-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე წავიკითხავ.",
            "en": "Choose the complete sentence expressing: I will read.",
            "ru": "Выберите полное предложение со значением: I will read."
          },
          "sentence": "____",
          "answer": "Я буду читать.",
          "options": [
            "Я буду читать.",
            "Я будет читать.",
            "Я будут читать."
          ]
        },
        {
          "id": "grammar-ru-a1-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე წავიკითხავ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I will read.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I will read."
          },
          "sentence": "Я будет читать. → ____",
          "answer": "Я буду читать.",
          "options": [
            "Я буду читать.",
            "Я будут читать.",
            "Я будет читать."
          ]
        },
        {
          "id": "grammar-ru-a1-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის იმუშავებს.",
            "en": "Complete a different part of the sentence. Intended meaning: She will work.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She will work."
          },
          "sentence": "____ будет работать.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a1-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის იმუშავებს.",
            "en": "Choose the complete sentence expressing: She will work.",
            "ru": "Выберите полное предложение со значением: She will work."
          },
          "sentence": "____",
          "answer": "Она будет работать.",
          "options": [
            "Она будет работать.",
            "Она буду работать.",
            "Она будем работать."
          ]
        },
        {
          "id": "grammar-ru-a1-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის იმუშავებს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She will work.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She will work."
          },
          "sentence": "Она буду работать. → ____",
          "answer": "Она будет работать.",
          "options": [
            "Она будет работать.",
            "Она будем работать.",
            "Она буду работать."
          ]
        },
        {
          "id": "grammar-ru-a1-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ისინი ისწავლიან.",
            "en": "Complete a different part of the sentence. Intended meaning: They will study.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: They will study."
          },
          "sentence": "____ будут учиться.",
          "answer": "Они",
          "options": [
            "Они",
            "Их",
            "Им"
          ]
        },
        {
          "id": "grammar-ru-a1-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ისინი ისწავლიან.",
            "en": "Choose the complete sentence expressing: They will study.",
            "ru": "Выберите полное предложение со значением: They will study."
          },
          "sentence": "____",
          "answer": "Они будут учиться.",
          "options": [
            "Они будут учиться.",
            "Они будут учатся.",
            "Они будут учились."
          ]
        },
        {
          "id": "grammar-ru-a1-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ისინი ისწავლიან.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: They will study.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: They will study."
          },
          "sentence": "Они будут учатся. → ____",
          "answer": "Они будут учиться.",
          "options": [
            "Они будут учиться.",
            "Они будут учились.",
            "Они будут учатся."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a1-8",
      "level": "A1",
      "title": {
        "ka": "თხოვნა და ბრძანება",
        "en": "Requests and imperatives",
        "ru": "Просьба и повелительное наклонение"
      },
      "explanation": {
        "ka": "ბრძანებითის ფორმა ზმნის მიხედვით ისწავლე: читай, говори, открой. მრავლობითსა და თავაზიან მიმართვაში ემატება -те. пожалуйста თხოვნას არბილებს. Не + ბრძანებითი აკრძალვას ან თხოვნას გამოხატავს: не шумите. თავაზიანი -те-თი მხოლოდ მრავლობით ადამიანს არ მიმართავენ. ბრძანებითი ფორმა მეორე პირის აწმყო говоришь/говорите-ს მნიშვნელობით არ გააიგივო.",
        "en": "Learn imperative forms with each verb: читай, говори, открой. Add -те for plural or polite address. Пожалуйста softens a request. Не + imperative expresses a prohibition or request: не шумите. Polite -те does not necessarily address several people. Do not equate an imperative’s function with a second-person present statement.",
        "ru": "Учите повелительную форму с глаголом: читай, говори, открой. Для множественного числа или вежливого обращения добавляется -те. Пожалуйста смягчает просьбу. Не + повелительная форма выражает запрет или просьбу: не шумите. Вежливое -те не обязательно относится к нескольким людям. Не смешивайте функцию приказа со значением утверждения во втором лице настоящего времени."
      },
      "rules": [
        {
          "form": "читай / читайте",
          "detail": {
            "ka": "ბრძანებითის ფორმა ზმნის მიხედვით ისწავლე: читай, говори, открой. შეადარე მაგალითს: Читайте, пожалуйста. — წაიკითხეთ, გთხოვთ.",
            "en": "Learn imperative forms with each verb: читай, говори, открой. Compare the example: Читайте, пожалуйста. — Please read.",
            "ru": "Учите повелительную форму с глаголом: читай, говори, открой. Сравните с примером: Читайте, пожалуйста. — Читайте, пожалуйста."
          }
        },
        {
          "form": "говори / говорите",
          "detail": {
            "ka": "მრავლობითსა და თავაზიან მიმართვაში ემატება -те. შეადარე მაგალითს: Говорите медленно. — ნელა ილაპარაკეთ.",
            "en": "Add -те for plural or polite address. Compare the example: Говорите медленно. — Speak slowly.",
            "ru": "Для множественного числа или вежливого обращения добавляется -те. Сравните с примером: Говорите медленно. — Говорите медленно."
          }
        },
        {
          "form": "открой / откройте",
          "detail": {
            "ka": "пожалуйста თხოვნას არბილებს. შეადარე მაგალითს: Открой дверь. — კარი გააღე.",
            "en": "Пожалуйста softens a request. Compare the example: Открой дверь. — Open the door.",
            "ru": "Пожалуйста смягчает просьбу. Сравните с примером: Открой дверь. — Открой дверь."
          }
        }
      ],
      "examples": [
        {
          "en": "Please read.",
          "ru": "Читайте, пожалуйста.",
          "ka": "წაიკითხეთ, გთხოვთ."
        },
        {
          "en": "Speak slowly.",
          "ru": "Говорите медленно.",
          "ka": "ნელა ილაპარაკეთ."
        },
        {
          "en": "Open the door.",
          "ru": "Открой дверь.",
          "ka": "კარი გააღე."
        }
      ],
      "pitfalls": {
        "ka": "Не + ბრძანებითი აკრძალვას ან თხოვნას გამოხატავს: не шумите. თავაზიანი -те-თი მხოლოდ მრავლობით ადამიანს არ მიმართავენ. ბრძანებითი ფორმა მეორე პირის აწმყო говоришь/говорите-ს მნიშვნელობით არ გააიგივო.",
        "en": "Не + imperative expresses a prohibition or request: не шумите. Polite -те does not necessarily address several people. Do not equate an imperative’s function with a second-person present statement.",
        "ru": "Не + повелительная форма выражает запрет или просьбу: не шумите. Вежливое -те не обязательно относится к нескольким людям. Не смешивайте функцию приказа со значением утверждения во втором лице настоящего времени."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წაიკითხეთ, გთხოვთ.",
            "en": "Complete the sentence to express: Please read.",
            "ru": "Заполните предложение со значением: წაიკითხეთ, გთხოვთ."
          },
          "sentence": "____, пожалуйста.",
          "answer": "Читайте",
          "options": [
            "Читайте",
            "Читают",
            "Читаете"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ნელა ილაპარაკეთ.",
            "en": "Complete the sentence to express: Speak slowly.",
            "ru": "Заполните предложение со значением: ნელა ილაპარაკეთ."
          },
          "sentence": "____ медленно.",
          "answer": "Говорите",
          "options": [
            "Говорите",
            "Говорят",
            "Говорим"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: კარი გააღე.",
            "en": "Complete the sentence to express: Open the door.",
            "ru": "Заполните предложение со значением: კარი გააღე."
          },
          "sentence": "____ дверь.",
          "answer": "Открой",
          "options": [
            "Открой",
            "Открыл",
            "Откроет"
          ]
        },
        {
          "id": "grammar-ru-a1-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წაიკითხეთ, გთხოვთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Please read.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Please read."
          },
          "sentence": "Читайте, ____.",
          "answer": "пожалуйста",
          "options": [
            "пожалуйста",
            "пожалуйсту",
            "пожалуйсте"
          ]
        },
        {
          "id": "grammar-ru-a1-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წაიკითხეთ, გთხოვთ.",
            "en": "Choose the complete sentence expressing: Please read.",
            "ru": "Выберите полное предложение со значением: Please read."
          },
          "sentence": "____",
          "answer": "Читайте, пожалуйста.",
          "options": [
            "Читайте, пожалуйста.",
            "Читают, пожалуйста.",
            "Читаете, пожалуйста."
          ]
        },
        {
          "id": "grammar-ru-a1-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წაიკითხეთ, გთხოვთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Please read.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Please read."
          },
          "sentence": "Читают, пожалуйста. → ____",
          "answer": "Читайте, пожалуйста.",
          "options": [
            "Читайте, пожалуйста.",
            "Читаете, пожалуйста.",
            "Читают, пожалуйста."
          ]
        },
        {
          "id": "grammar-ru-a1-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ნელა ილაპარაკეთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Speak slowly.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Speak slowly."
          },
          "sentence": "Говорите ____.",
          "answer": "медленно",
          "options": [
            "медленно",
            "медленноа",
            "медленноу"
          ]
        },
        {
          "id": "grammar-ru-a1-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ნელა ილაპარაკეთ.",
            "en": "Choose the complete sentence expressing: Speak slowly.",
            "ru": "Выберите полное предложение со значением: Speak slowly."
          },
          "sentence": "____",
          "answer": "Говорите медленно.",
          "options": [
            "Говорите медленно.",
            "Говорят медленно.",
            "Говорим медленно."
          ]
        },
        {
          "id": "grammar-ru-a1-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ნელა ილაპარაკეთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Speak slowly.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Speak slowly."
          },
          "sentence": "Говорят медленно. → ____",
          "answer": "Говорите медленно.",
          "options": [
            "Говорите медленно.",
            "Говорим медленно.",
            "Говорят медленно."
          ]
        },
        {
          "id": "grammar-ru-a1-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: კარი გააღე.",
            "en": "Complete a different part of the sentence. Intended meaning: Open the door.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Open the door."
          },
          "sentence": "Открой ____.",
          "answer": "дверь",
          "options": [
            "дверь",
            "дверьа",
            "дверьу"
          ]
        },
        {
          "id": "grammar-ru-a1-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: კარი გააღე.",
            "en": "Choose the complete sentence expressing: Open the door.",
            "ru": "Выберите полное предложение со значением: Open the door."
          },
          "sentence": "____",
          "answer": "Открой дверь.",
          "options": [
            "Открой дверь.",
            "Открыл дверь.",
            "Откроет дверь."
          ]
        },
        {
          "id": "grammar-ru-a1-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: კარი გააღე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Open the door.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Open the door."
          },
          "sentence": "Открыл дверь. → ____",
          "answer": "Открой дверь.",
          "options": [
            "Открой дверь.",
            "Откроет дверь.",
            "Открыл дверь."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-1",
      "level": "A2",
      "title": {
        "ka": "ნათესაობითი და წარმოშობა",
        "en": "Genitive: origin and relation",
        "ru": "Родительный: происхождение и связь"
      },
      "explanation": {
        "ka": "из, от, без და для ნათესაობით ბრუნვას მოითხოვს. ხშირი ცვლილებებია -а→-ы/-и, -я→-и და მამრობითში -а/-я; ზუსტი ფორმა სახელთან ისწავლე. без-თან არარსებულ საგანზეც იგივე ბრუნვაა: без билета. წარმომავლობა ქვეყანიდან из-ითაა, ადამიანისგან — от-ით. из Грузия არასწორია, რადგან წინდებულის შემდეგ სახელობითი ვერ დარჩება.",
        "en": "Из, от, без and для take genitive. Common changes include -а→-ы/-и, -я→-и and masculine -а/-я; learn the exact form with each noun. Без also takes genitive for a missing item: без билета. Origin from a country uses из, from a person от. Из Грузия is incorrect because the noun cannot remain nominative after the preposition.",
        "ru": "Из, от, без и для требуют родительного падежа. Частые изменения: -а→-ы/-и, -я→-и, в мужском роде -а/-я; точную форму учите вместе со словом. Без требует родительного и для отсутствующего предмета: без билета. Из страны — из, от человека — от. Из Грузия неверно: после предлога нельзя сохранять именительный падеж."
      },
      "rules": [
        {
          "form": "из Грузии / из города",
          "detail": {
            "ka": "из, от, без და для ნათესაობით ბრუნვას მოითხოვს. შეადარე მაგალითს: Я из Грузии. — მე საქართველოდან ვარ.",
            "en": "Из, от, без and для take genitive. Compare the example: Я из Грузии. — I am from Georgia.",
            "ru": "Из, от, без и для требуют родительного падежа. Сравните с примером: Я из Грузии. — Я из Грузии."
          }
        },
        {
          "form": "без сахара",
          "detail": {
            "ka": "ხშირი ცვლილებებია -а→-ы/-и, -я→-и და მამრობითში -а/-я; ზუსტი ფორმა სახელთან ისწავლე. შეადარე მაგალითს: Чай без сахара. — ჩაი შაქრის გარეშე.",
            "en": "Common changes include -а→-ы/-и, -я→-и and masculine -а/-я; learn the exact form with each noun. Compare the example: Чай без сахара. — Tea without sugar.",
            "ru": "Частые изменения: -а→-ы/-и, -я→-и, в мужском роде -а/-я; точную форму учите вместе со словом. Сравните с примером: Чай без сахара. — Чай без сахара."
          }
        },
        {
          "form": "для сестры",
          "detail": {
            "ka": "без-თან არარსებულ საგანზეც იგივე ბრუნვაა: без билета. შეადარე მაგალითს: Это для сестры. — ეს დისთვისაა.",
            "en": "Без also takes genitive for a missing item: без билета. Compare the example: Это для сестры. — This is for my sister.",
            "ru": "Без требует родительного и для отсутствующего предмета: без билета. Сравните с примером: Это для сестры. — Это для сестры."
          }
        }
      ],
      "examples": [
        {
          "en": "I am from Georgia.",
          "ru": "Я из Грузии.",
          "ka": "მე საქართველოდან ვარ."
        },
        {
          "en": "Tea without sugar.",
          "ru": "Чай без сахара.",
          "ka": "ჩაი შაქრის გარეშე."
        },
        {
          "en": "This is for my sister.",
          "ru": "Это для сестры.",
          "ka": "ეს დისთვისაა."
        }
      ],
      "pitfalls": {
        "ka": "без-თან არარსებულ საგანზეც იგივე ბრუნვაა: без билета. წარმომავლობა ქვეყანიდან из-ითაა, ადამიანისგან — от-ით. из Грузия არასწორია, რადგან წინდებულის შემდეგ სახელობითი ვერ დარჩება.",
        "en": "Без also takes genitive for a missing item: без билета. Origin from a country uses из, from a person от. Из Грузия is incorrect because the noun cannot remain nominative after the preposition.",
        "ru": "Без требует родительного и для отсутствующего предмета: без билета. Из страны — из, от человека — от. Из Грузия неверно: после предлога нельзя сохранять именительный падеж."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე საქართველოდან ვარ.",
            "en": "Complete the sentence to express: I am from Georgia.",
            "ru": "Заполните предложение со значением: მე საქართველოდან ვარ."
          },
          "sentence": "Я из ____.",
          "answer": "Грузии",
          "options": [
            "Грузии",
            "Грузия",
            "Грузию"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩაი შაქრის გარეშე.",
            "en": "Complete the sentence to express: Tea without sugar.",
            "ru": "Заполните предложение со значением: ჩაი შაქრის გარეშე."
          },
          "sentence": "Чай без ____.",
          "answer": "сахара",
          "options": [
            "сахара",
            "сахар",
            "сахару"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს დისთვისაა.",
            "en": "Complete the sentence to express: This is for my sister.",
            "ru": "Заполните предложение со значением: ეს დისთვისაა."
          },
          "sentence": "Это для ____.",
          "answer": "сестры",
          "options": [
            "сестры",
            "сестра",
            "сестру"
          ]
        },
        {
          "id": "grammar-ru-a2-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე საქართველოდან ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am from Georgia.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am from Georgia."
          },
          "sentence": "____ из Грузии.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე საქართველოდან ვარ.",
            "en": "Choose the complete sentence expressing: I am from Georgia.",
            "ru": "Выберите полное предложение со значением: I am from Georgia."
          },
          "sentence": "____",
          "answer": "Я из Грузии.",
          "options": [
            "Я из Грузии.",
            "Я из Грузия.",
            "Я из Грузию."
          ]
        },
        {
          "id": "grammar-ru-a2-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე საქართველოდან ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am from Georgia.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am from Georgia."
          },
          "sentence": "Я из Грузия. → ____",
          "answer": "Я из Грузии.",
          "options": [
            "Я из Грузии.",
            "Я из Грузию.",
            "Я из Грузия."
          ]
        },
        {
          "id": "grammar-ru-a2-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩაი შაქრის გარეშე.",
            "en": "Complete a different part of the sentence. Intended meaning: Tea without sugar.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Tea without sugar."
          },
          "sentence": "Чай ____ сахара.",
          "answer": "без",
          "options": [
            "без",
            "с",
            "на"
          ]
        },
        {
          "id": "grammar-ru-a2-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩაი შაქრის გარეშე.",
            "en": "Choose the complete sentence expressing: Tea without sugar.",
            "ru": "Выберите полное предложение со значением: Tea without sugar."
          },
          "sentence": "____",
          "answer": "Чай без сахара.",
          "options": [
            "Чай без сахара.",
            "Чай без сахар.",
            "Чай без сахару."
          ]
        },
        {
          "id": "grammar-ru-a2-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩაი შაქრის გარეშე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Tea without sugar.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Tea without sugar."
          },
          "sentence": "Чай без сахар. → ____",
          "answer": "Чай без сахара.",
          "options": [
            "Чай без сахара.",
            "Чай без сахару.",
            "Чай без сахар."
          ]
        },
        {
          "id": "grammar-ru-a2-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს დისთვისაა.",
            "en": "Complete a different part of the sentence. Intended meaning: This is for my sister.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This is for my sister."
          },
          "sentence": "____ для сестры.",
          "answer": "Это",
          "options": [
            "Это",
            "Эта",
            "Эти"
          ]
        },
        {
          "id": "grammar-ru-a2-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს დისთვისაა.",
            "en": "Choose the complete sentence expressing: This is for my sister.",
            "ru": "Выберите полное предложение со значением: This is for my sister."
          },
          "sentence": "____",
          "answer": "Это для сестры.",
          "options": [
            "Это для сестры.",
            "Это для сестра.",
            "Это для сестру."
          ]
        },
        {
          "id": "grammar-ru-a2-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს დისთვისაა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This is for my sister.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This is for my sister."
          },
          "sentence": "Это для сестра. → ____",
          "answer": "Это для сестры.",
          "options": [
            "Это для сестры.",
            "Это для сестру.",
            "Это для сестра."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-2",
      "level": "A2",
      "title": {
        "ka": "მიცემითი: ვის?",
        "en": "Dative: to whom?",
        "ru": "Дательный: кому?"
      },
      "explanation": {
        "ka": "მიცემითი აღნიშნავს მიმღებს: дать другу, помочь сестре. მამრობითში ხშირია -у/-ю, -а/-я-სთან -е. ნაცვალსახელებია мне, тебе, ему, ей, нам, вам, им. помогать და звонить ხშირად ქართულ/ინგლისურ მოდელს არ იმეორებს: звонить другу. კენ-მიმართულება კ + მიცემითია. после к-ს ნათესაობითი ნუ დაურთავ: к другу და არა к друга.",
        "en": "Dative marks a recipient: дать другу, помочь сестре. Common endings are masculine -у/-ю and -е for -а/-я nouns. Pronouns include мне, тебе, ему, ей, нам, вам, им. Помогать and звонить may not mirror the Georgian or English pattern: звонить другу. Direction towards someone uses к + dative. Do not use genitive after к: к другу, not к друга.",
        "ru": "Дательный обозначает получателя: дать другу, помочь сестре. Частые окончания: мужское -у/-ю и -е у слов на -а/-я. Местоимения: мне, тебе, ему, ей, нам, вам, им. Помогать и звонить могут не повторять грузинскую или английскую модель: звонить другу. Направление к человеку: к + дательный. Не ставьте родительный после к: к другу, не к друга."
      },
      "rules": [
        {
          "form": "дать другу / помочь сестре",
          "detail": {
            "ka": "მიცემითი აღნიშნავს მიმღებს: дать другу, помочь сестре. შეადარე მაგალითს: Я помогаю сестре. — მე დას ვეხმარები.",
            "en": "Dative marks a recipient: дать другу, помочь сестре. Compare the example: Я помогаю сестре. — I help my sister.",
            "ru": "Дательный обозначает получателя: дать другу, помочь сестре. Сравните с примером: Я помогаю сестре. — Я помогаю сестре."
          }
        },
        {
          "form": "мне / тебе / ему / ей",
          "detail": {
            "ka": "მამრობითში ხშირია -у/-ю, -а/-я-სთან -е. შეადარე მაგალითს: Дай книгу другу. — წიგნი მეგობარს მიეცი.",
            "en": "Common endings are masculine -у/-ю and -е for -а/-я nouns. Compare the example: Дай книгу другу. — Give the book to your friend.",
            "ru": "Частые окончания: мужское -у/-ю и -е у слов на -а/-я. Сравните с примером: Дай книгу другу. — Дай книгу другу."
          }
        },
        {
          "form": "нам / вам / им",
          "detail": {
            "ka": "ნაცვალსახელებია мне, тебе, ему, ей, нам, вам, им. შეადარე მაგალითს: Мне нужен билет. — ბილეთი მჭირდება.",
            "en": "Pronouns include мне, тебе, ему, ей, нам, вам, им. Compare the example: Мне нужен билет. — I need a ticket.",
            "ru": "Местоимения: мне, тебе, ему, ей, нам, вам, им. Сравните с примером: Мне нужен билет. — Мне нужен билет."
          }
        }
      ],
      "examples": [
        {
          "en": "I help my sister.",
          "ru": "Я помогаю сестре.",
          "ka": "მე დას ვეხმარები."
        },
        {
          "en": "Give the book to your friend.",
          "ru": "Дай книгу другу.",
          "ka": "წიგნი მეგობარს მიეცი."
        },
        {
          "en": "I need a ticket.",
          "ru": "Мне нужен билет.",
          "ka": "ბილეთი მჭირდება."
        }
      ],
      "pitfalls": {
        "ka": "помогать და звонить ხშირად ქართულ/ინგლისურ მოდელს არ იმეორებს: звонить другу. კენ-მიმართულება კ + მიცემითია. после к-ს ნათესაობითი ნუ დაურთავ: к другу და არა к друга.",
        "en": "Помогать and звонить may not mirror the Georgian or English pattern: звонить другу. Direction towards someone uses к + dative. Do not use genitive after к: к другу, not к друга.",
        "ru": "Помогать и звонить могут не повторять грузинскую или английскую модель: звонить другу. Направление к человеку: к + дательный. Не ставьте родительный после к: к другу, не к друга."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე დას ვეხმარები.",
            "en": "Complete the sentence to express: I help my sister.",
            "ru": "Заполните предложение со значением: მე დას ვეხმარები."
          },
          "sentence": "Я помогаю ____.",
          "answer": "сестре",
          "options": [
            "сестре",
            "сестру",
            "сестра"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი მეგობარს მიეცი.",
            "en": "Complete the sentence to express: Give the book to your friend.",
            "ru": "Заполните предложение со значением: წიგნი მეგობარს მიეცი."
          },
          "sentence": "Дай книгу ____.",
          "answer": "другу",
          "options": [
            "другу",
            "друга",
            "друг"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ბილეთი მჭირდება.",
            "en": "Complete the sentence to express: I need a ticket.",
            "ru": "Заполните предложение со значением: ბილეთი მჭირდება."
          },
          "sentence": "____ нужен билет.",
          "answer": "Мне",
          "options": [
            "Мне",
            "Меня",
            "Я"
          ]
        },
        {
          "id": "grammar-ru-a2-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე დას ვეხმარები.",
            "en": "Complete a different part of the sentence. Intended meaning: I help my sister.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I help my sister."
          },
          "sentence": "____ помогаю сестре.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე დას ვეხმარები.",
            "en": "Choose the complete sentence expressing: I help my sister.",
            "ru": "Выберите полное предложение со значением: I help my sister."
          },
          "sentence": "____",
          "answer": "Я помогаю сестре.",
          "options": [
            "Я помогаю сестре.",
            "Я помогаю сестру.",
            "Я помогаю сестра."
          ]
        },
        {
          "id": "grammar-ru-a2-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე დას ვეხმარები.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I help my sister.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I help my sister."
          },
          "sentence": "Я помогаю сестру. → ____",
          "answer": "Я помогаю сестре.",
          "options": [
            "Я помогаю сестре.",
            "Я помогаю сестра.",
            "Я помогаю сестру."
          ]
        },
        {
          "id": "grammar-ru-a2-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნი მეგობარს მიეცი.",
            "en": "Complete a different part of the sentence. Intended meaning: Give the book to your friend.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Give the book to your friend."
          },
          "sentence": "Дай ____ другу.",
          "answer": "книгу",
          "options": [
            "книгу",
            "книга",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-a2-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნი მეგობარს მიეცი.",
            "en": "Choose the complete sentence expressing: Give the book to your friend.",
            "ru": "Выберите полное предложение со значением: Give the book to your friend."
          },
          "sentence": "____",
          "answer": "Дай книгу другу.",
          "options": [
            "Дай книгу другу.",
            "Дай книгу друга.",
            "Дай книгу друг."
          ]
        },
        {
          "id": "grammar-ru-a2-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნი მეგობარს მიეცი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Give the book to your friend.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Give the book to your friend."
          },
          "sentence": "Дай книгу друга. → ____",
          "answer": "Дай книгу другу.",
          "options": [
            "Дай книгу другу.",
            "Дай книгу друг.",
            "Дай книгу друга."
          ]
        },
        {
          "id": "grammar-ru-a2-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ბილეთი მჭირდება.",
            "en": "Complete a different part of the sentence. Intended meaning: I need a ticket.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I need a ticket."
          },
          "sentence": "Мне ____ билет.",
          "answer": "нужен",
          "options": [
            "нужен",
            "нужена",
            "нужену"
          ]
        },
        {
          "id": "grammar-ru-a2-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ბილეთი მჭირდება.",
            "en": "Choose the complete sentence expressing: I need a ticket.",
            "ru": "Выберите полное предложение со значением: I need a ticket."
          },
          "sentence": "____",
          "answer": "Мне нужен билет.",
          "options": [
            "Мне нужен билет.",
            "Меня нужен билет.",
            "Я нужен билет."
          ]
        },
        {
          "id": "grammar-ru-a2-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ბილეთი მჭირდება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I need a ticket.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I need a ticket."
          },
          "sentence": "Меня нужен билет. → ____",
          "answer": "Мне нужен билет.",
          "options": [
            "Мне нужен билет.",
            "Я нужен билет.",
            "Меня нужен билет."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-3",
      "level": "A2",
      "title": {
        "ka": "მოქმედებითი: ვისთან და რით?",
        "en": "Instrumental: with whom and with what?",
        "ru": "Творительный: с кем и чем?"
      },
      "explanation": {
        "ka": "с + მოქმედებითი ნიშნავს ვინმესთან ერთად. ინსტრუმენტი ხშირად წინდებულის გარეშეა. ხშირია მამრობითი -ом/-ем და მდედრობითი -ой/-ей. პროფესიასთან работать ექიმად = работать врачом. ტრანსპორტით მგზავრობის ჩვეულებრივი მოდელია на автобусе და არა автобусом ყველა კონტექსტში. მეგობართან ერთად ყოფნას с другом სჭირდება და არა с друга.",
        "en": "С + instrumental means together with someone. A tool often uses instrumental without a preposition. Common endings are masculine -ом/-ем and feminine -ой/-ей. For a profession, work as a doctor is работать врачом. The ordinary transport phrase is на автобусе; автобусом is not interchangeable in every context. Together with a friend requires с другом, not с друга.",
        "ru": "С + творительный означает совместность. Орудие действия часто выражается творительным без предлога. Частые окончания: мужское -ом/-ем, женское -ой/-ей. Профессия после работать: работать врачом. Обычное обозначение транспорта — на автобусе; автобусом не взаимозаменяемо во всех контекстах. Совместность требует с другом, не с друга."
      },
      "rules": [
        {
          "form": "с другом / с сестрой",
          "detail": {
            "ka": "с + მოქმედებითი ნიშნავს ვინმესთან ერთად. შეადარე მაგალითს: Я гуляю с другом. — მე მეგობართან ერთად ვსეირნობ.",
            "en": "С + instrumental means together with someone. Compare the example: Я гуляю с другом. — I am walking with my friend.",
            "ru": "С + творительный означает совместность. Сравните с примером: Я гуляю с другом. — Я гуляю с другом."
          }
        },
        {
          "form": "писать ручкой",
          "detail": {
            "ka": "ინსტრუმენტი ხშირად წინდებულის გარეშეა. შეადარე მაგალითს: Я пишу ручкой. — მე კალმით ვწერ.",
            "en": "A tool often uses instrumental without a preposition. Compare the example: Я пишу ручкой. — I write with a pen.",
            "ru": "Орудие действия часто выражается творительным без предлога. Сравните с примером: Я пишу ручкой. — Я пишу ручкой."
          }
        },
        {
          "form": "работать врачом",
          "detail": {
            "ka": "ხშირია მამრობითი -ом/-ем და მდედრობითი -ой/-ей. შეადარე მაგალითს: Она работает врачом. — ის ექიმად მუშაობს.",
            "en": "Common endings are masculine -ом/-ем and feminine -ой/-ей. Compare the example: Она работает врачом. — She works as a doctor.",
            "ru": "Частые окончания: мужское -ом/-ем, женское -ой/-ей. Сравните с примером: Она работает врачом. — Она работает врачом."
          }
        }
      ],
      "examples": [
        {
          "en": "I am walking with my friend.",
          "ru": "Я гуляю с другом.",
          "ka": "მე მეგობართან ერთად ვსეირნობ."
        },
        {
          "en": "I write with a pen.",
          "ru": "Я пишу ручкой.",
          "ka": "მე კალმით ვწერ."
        },
        {
          "en": "She works as a doctor.",
          "ru": "Она работает врачом.",
          "ka": "ის ექიმად მუშაობს."
        }
      ],
      "pitfalls": {
        "ka": "პროფესიასთან работать ექიმად = работать врачом. ტრანსპორტით მგზავრობის ჩვეულებრივი მოდელია на автобусе და არა автобусом ყველა კონტექსტში. მეგობართან ერთად ყოფნას с другом სჭირდება და არა с друга.",
        "en": "For a profession, work as a doctor is работать врачом. The ordinary transport phrase is на автобусе; автобусом is not interchangeable in every context. Together with a friend requires с другом, not с друга.",
        "ru": "Профессия после работать: работать врачом. Обычное обозначение транспорта — на автобусе; автобусом не взаимозаменяемо во всех контекстах. Совместность требует с другом, не с друга."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე მეგობართან ერთად ვსეირნობ.",
            "en": "Complete the sentence to express: I am walking with my friend.",
            "ru": "Заполните предложение со значением: მე მეგობართან ერთად ვსეირნობ."
          },
          "sentence": "Я гуляю с ____.",
          "answer": "другом",
          "options": [
            "другом",
            "друга",
            "другу"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე კალმით ვწერ.",
            "en": "Complete the sentence to express: I write with a pen.",
            "ru": "Заполните предложение со значением: მე კალმით ვწერ."
          },
          "sentence": "Я пишу ____.",
          "answer": "ручкой",
          "options": [
            "ручкой",
            "ручку",
            "ручка"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ექიმად მუშაობს.",
            "en": "Complete the sentence to express: She works as a doctor.",
            "ru": "Заполните предложение со значением: ის ექიმად მუშაობს."
          },
          "sentence": "Она работает ____.",
          "answer": "врачом",
          "options": [
            "врачом",
            "врач",
            "врача"
          ]
        },
        {
          "id": "grammar-ru-a2-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე მეგობართან ერთად ვსეირნობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am walking with my friend.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am walking with my friend."
          },
          "sentence": "____ гуляю с другом.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე მეგობართან ერთად ვსეირნობ.",
            "en": "Choose the complete sentence expressing: I am walking with my friend.",
            "ru": "Выберите полное предложение со значением: I am walking with my friend."
          },
          "sentence": "____",
          "answer": "Я гуляю с другом.",
          "options": [
            "Я гуляю с другом.",
            "Я гуляю с друга.",
            "Я гуляю с другу."
          ]
        },
        {
          "id": "grammar-ru-a2-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე მეგობართან ერთად ვსეირნობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am walking with my friend.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am walking with my friend."
          },
          "sentence": "Я гуляю с друга. → ____",
          "answer": "Я гуляю с другом.",
          "options": [
            "Я гуляю с другом.",
            "Я гуляю с другу.",
            "Я гуляю с друга."
          ]
        },
        {
          "id": "grammar-ru-a2-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე კალმით ვწერ.",
            "en": "Complete a different part of the sentence. Intended meaning: I write with a pen.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I write with a pen."
          },
          "sentence": "____ пишу ручкой.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე კალმით ვწერ.",
            "en": "Choose the complete sentence expressing: I write with a pen.",
            "ru": "Выберите полное предложение со значением: I write with a pen."
          },
          "sentence": "____",
          "answer": "Я пишу ручкой.",
          "options": [
            "Я пишу ручкой.",
            "Я пишу ручку.",
            "Я пишу ручка."
          ]
        },
        {
          "id": "grammar-ru-a2-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე კალმით ვწერ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I write with a pen.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I write with a pen."
          },
          "sentence": "Я пишу ручку. → ____",
          "answer": "Я пишу ручкой.",
          "options": [
            "Я пишу ручкой.",
            "Я пишу ручка.",
            "Я пишу ручку."
          ]
        },
        {
          "id": "grammar-ru-a2-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ექიმად მუშაობს.",
            "en": "Complete a different part of the sentence. Intended meaning: She works as a doctor.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She works as a doctor."
          },
          "sentence": "____ работает врачом.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a2-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ექიმად მუშაობს.",
            "en": "Choose the complete sentence expressing: She works as a doctor.",
            "ru": "Выберите полное предложение со значением: She works as a doctor."
          },
          "sentence": "____",
          "answer": "Она работает врачом.",
          "options": [
            "Она работает врачом.",
            "Она работает врач.",
            "Она работает врача."
          ]
        },
        {
          "id": "grammar-ru-a2-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ექიმად მუშაობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She works as a doctor.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She works as a doctor."
          },
          "sentence": "Она работает врач. → ____",
          "answer": "Она работает врачом.",
          "options": [
            "Она работает врачом.",
            "Она работает врача.",
            "Она работает врач."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-4",
      "level": "A2",
      "title": {
        "ka": "მიმართულება და მდებარეობა",
        "en": "Direction versus location",
        "ru": "Направление и местонахождение"
      },
      "explanation": {
        "ka": "куда? ვ/на + ბრალდებითს იყენებს; где? — წინდებულს. откуда? ხშირად из/с + ნათესაობითია. დაწყვილება ისწავლე: в школу→из школы, на работу→с работы. ვ/на-სთან ერთი ბრუნვის ყველა შემთხვევაში გამოყენება მიმართულებასა და ადგილს ერთმანეთში ურევს. ვინმესთან მისვლა შეიძლება к врачу იყოს, იქ ყოფნა კი у врача. შენობისა და ადამიანის მოდელები ცალკე ისწავლე.",
        "en": "Куда? takes в/на + accusative; где? takes prepositional. Откуда? often uses из/с + genitive. Learn pairs: в школу→из школы, на работу→с работы. Using one case for every в/на phrase confuses direction with location. Going to a person can be к врачу, being at that person’s place у врача. Learn building and person patterns separately.",
        "ru": "Куда? требует в/на + винительный; где? — предложный. Откуда? часто оформляется через из/с + родительный. Учите пары: в школу→из школы, на работу→с работы. Один и тот же падеж после в/на смешивает направление и место. Движение к человеку может быть к врачу, нахождение у него — у врача. Модели здания и человека учите отдельно."
      },
      "rules": [
        {
          "form": "в школу / в школе",
          "detail": {
            "ka": "куда? შეადარე მაგალითს: Я иду в школу. — მე სკოლაში მივდივარ.",
            "en": "Куда? Compare the example: Я иду в школу. — I am going to school.",
            "ru": "Куда? Сравните с примером: Я иду в школу. — Я иду в школу."
          }
        },
        {
          "form": "на работу / на работе",
          "detail": {
            "ka": "ვ/на + ბრალდებითს იყენებს; где? შეადარე მაგალითს: Я в школе. — მე სკოლაში ვარ.",
            "en": "takes в/на + accusative; где? Compare the example: Я в школе. — I am at school.",
            "ru": "требует в/на + винительный; где? Сравните с примером: Я в школе. — Я в школе."
          }
        },
        {
          "form": "из школы / с работы",
          "detail": {
            "ka": "— წინდებულს. შეადარე მაგალითს: Я иду с работы. — მე სამსახურიდან მოვდივარ.",
            "en": "takes prepositional. Compare the example: Я иду с работы. — I am coming from work.",
            "ru": "— предложный. Сравните с примером: Я иду с работы. — Я иду с работы."
          }
        }
      ],
      "examples": [
        {
          "en": "I am going to school.",
          "ru": "Я иду в школу.",
          "ka": "მე სკოლაში მივდივარ."
        },
        {
          "en": "I am at school.",
          "ru": "Я в школе.",
          "ka": "მე სკოლაში ვარ."
        },
        {
          "en": "I am coming from work.",
          "ru": "Я иду с работы.",
          "ka": "მე სამსახურიდან მოვდივარ."
        }
      ],
      "pitfalls": {
        "ka": "ვ/на-სთან ერთი ბრუნვის ყველა შემთხვევაში გამოყენება მიმართულებასა და ადგილს ერთმანეთში ურევს. ვინმესთან მისვლა შეიძლება к врачу იყოს, იქ ყოფნა კი у врача. შენობისა და ადამიანის მოდელები ცალკე ისწავლე.",
        "en": "Using one case for every в/на phrase confuses direction with location. Going to a person can be к врачу, being at that person’s place у врача. Learn building and person patterns separately.",
        "ru": "Один и тот же падеж после в/на смешивает направление и место. Движение к человеку может быть к врачу, нахождение у него — у врача. Модели здания и человека учите отдельно."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სკოლაში მივდივარ.",
            "en": "Complete the sentence to express: I am going to school.",
            "ru": "Заполните предложение со значением: მე სკოლაში მივდივარ."
          },
          "sentence": "Я иду в ____.",
          "answer": "школу",
          "options": [
            "школу",
            "школе",
            "школа"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სკოლაში ვარ.",
            "en": "Complete the sentence to express: I am at school.",
            "ru": "Заполните предложение со значением: მე სკოლაში ვარ."
          },
          "sentence": "Я в ____.",
          "answer": "школе",
          "options": [
            "школе",
            "школу",
            "школы"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე სამსახურიდან მოვდივარ.",
            "en": "Complete the sentence to express: I am coming from work.",
            "ru": "Заполните предложение со значением: მე სამსახურიდან მოვდივარ."
          },
          "sentence": "Я иду с ____.",
          "answer": "работы",
          "options": [
            "работы",
            "работе",
            "работу"
          ]
        },
        {
          "id": "grammar-ru-a2-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე სკოლაში მივდივარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am going to school.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am going to school."
          },
          "sentence": "____ иду в школу.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე სკოლაში მივდივარ.",
            "en": "Choose the complete sentence expressing: I am going to school.",
            "ru": "Выберите полное предложение со значением: I am going to school."
          },
          "sentence": "____",
          "answer": "Я иду в школу.",
          "options": [
            "Я иду в школу.",
            "Я иду в школе.",
            "Я иду в школа."
          ]
        },
        {
          "id": "grammar-ru-a2-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე სკოლაში მივდივარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am going to school.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am going to school."
          },
          "sentence": "Я иду в школе. → ____",
          "answer": "Я иду в школу.",
          "options": [
            "Я иду в школу.",
            "Я иду в школа.",
            "Я иду в школе."
          ]
        },
        {
          "id": "grammar-ru-a2-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე სკოლაში ვარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am at school.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am at school."
          },
          "sentence": "____ в школе.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე სკოლაში ვარ.",
            "en": "Choose the complete sentence expressing: I am at school.",
            "ru": "Выберите полное предложение со значением: I am at school."
          },
          "sentence": "____",
          "answer": "Я в школе.",
          "options": [
            "Я в школе.",
            "Я в школу.",
            "Я в школы."
          ]
        },
        {
          "id": "grammar-ru-a2-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე სკოლაში ვარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am at school.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am at school."
          },
          "sentence": "Я в школу. → ____",
          "answer": "Я в школе.",
          "options": [
            "Я в школе.",
            "Я в школы.",
            "Я в школу."
          ]
        },
        {
          "id": "grammar-ru-a2-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე სამსახურიდან მოვდივარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am coming from work.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am coming from work."
          },
          "sentence": "____ иду с работы.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე სამსახურიდან მოვდივარ.",
            "en": "Choose the complete sentence expressing: I am coming from work.",
            "ru": "Выберите полное предложение со значением: I am coming from work."
          },
          "sentence": "____",
          "answer": "Я иду с работы.",
          "options": [
            "Я иду с работы.",
            "Я иду с работе.",
            "Я иду с работу."
          ]
        },
        {
          "id": "grammar-ru-a2-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე სამსახურიდან მოვდივარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am coming from work.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am coming from work."
          },
          "sentence": "Я иду с работе. → ____",
          "answer": "Я иду с работы.",
          "options": [
            "Я иду с работы.",
            "Я иду с работу.",
            "Я иду с работе."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-5",
      "level": "A2",
      "title": {
        "ka": "ზმნის სახის საფუძველი",
        "en": "Imperfective and perfective",
        "ru": "Несовершенный и совершенный вид"
      },
      "explanation": {
        "ka": "უსრული სახე პროცესს, განმეორებას ან ფაქტს აღწერს; სრული — საზღვრიან შედეგს ან ერთ მთლიან მოვლენას. სრული სახის პირიანი ფორმა აწმყოს არ აღნიშნავს. პროცესს შეუძლია უკვე წარსულში სრულად დასრულებული იყოს, თუმცა უსრული სახით აღწერო: читал весь вечер. სრული სახე მხოლოდ სწრაფ მოქმედებას არ ნიშნავს. ყოველი წყვილი სემანტიკურად შეამოწმე, რადგან ყველა წინსართი მხოლოდ სახეს არ ცვლის.",
        "en": "Imperfective describes process, repetition or general fact; perfective presents a bounded result or whole event. A conjugated perfective form does not express present time. A process may be entirely in the past yet described imperfectively: читал весь вечер. Perfective does not simply mean fast action. Check pairs semantically because not every prefix changes aspect alone.",
        "ru": "Несовершенный вид описывает процесс, повторение или факт; совершенный — ограниченный результат или целое событие. Личная форма совершенного вида не обозначает настоящее время. Процесс может полностью остаться в прошлом и всё же описываться несовершенным видом: читал весь вечер. Совершенный вид не означает просто быстрое действие. Проверяйте пары: приставка не всегда меняет только вид."
      },
      "rules": [
        {
          "form": "читать → прочитать",
          "detail": {
            "ka": "უსრული სახე პროცესს, განმეორებას ან ფაქტს აღწერს; სრული — საზღვრიან შედეგს ან ერთ მთლიან მოვლენას. შეადარე მაგალითს: Я читаю каждый вечер. — ყოველ საღამოს ვკითხულობ.",
            "en": "Imperfective describes process, repetition or general fact; perfective presents a bounded result or whole event. Compare the example: Я читаю каждый вечер. — I read every evening.",
            "ru": "Несовершенный вид описывает процесс, повторение или факт; совершенный — ограниченный результат или целое событие. Сравните с примером: Я читаю каждый вечер. — Я читаю каждый вечер."
          }
        },
        {
          "form": "я читал / я прочитал",
          "detail": {
            "ka": "სრული სახის პირიანი ფორმა აწმყოს არ აღნიშნავს. შეადარე მაგალითს: Вчера я прочитал всю книгу. — გუშინ მთელი წიგნი წავიკითხე.",
            "en": "A conjugated perfective form does not express present time. Compare the example: Вчера я прочитал всю книгу. — I read the whole book yesterday.",
            "ru": "Личная форма совершенного вида не обозначает настоящее время. Сравните с примером: Вчера я прочитал всю книгу. — Вчера я прочитал всю книгу."
          }
        },
        {
          "form": "я читаю / я прочитаю",
          "detail": {
            "ka": "პროცესს შეუძლია უკვე წარსულში სრულად დასრულებული იყოს, თუმცა უსრული სახით აღწერო: читал весь вечер. შეადარე მაგალითს: Завтра я прочитаю книгу. — ხვალ წიგნს წავიკითხავ.",
            "en": "A process may be entirely in the past yet described imperfectively: читал весь вечер. Compare the example: Завтра я прочитаю книгу. — I will finish reading the book tomorrow.",
            "ru": "Процесс может полностью остаться в прошлом и всё же описываться несовершенным видом: читал весь вечер. Сравните с примером: Завтра я прочитаю книгу. — Завтра я прочитаю книгу."
          }
        }
      ],
      "examples": [
        {
          "en": "I read every evening.",
          "ru": "Я читаю каждый вечер.",
          "ka": "ყოველ საღამოს ვკითხულობ."
        },
        {
          "en": "I read the whole book yesterday.",
          "ru": "Вчера я прочитал всю книгу.",
          "ka": "გუშინ მთელი წიგნი წავიკითხე."
        },
        {
          "en": "I will finish reading the book tomorrow.",
          "ru": "Завтра я прочитаю книгу.",
          "ka": "ხვალ წიგნს წავიკითხავ."
        }
      ],
      "pitfalls": {
        "ka": "პროცესს შეუძლია უკვე წარსულში სრულად დასრულებული იყოს, თუმცა უსრული სახით აღწერო: читал весь вечер. სრული სახე მხოლოდ სწრაფ მოქმედებას არ ნიშნავს. ყოველი წყვილი სემანტიკურად შეამოწმე, რადგან ყველა წინსართი მხოლოდ სახეს არ ცვლის.",
        "en": "A process may be entirely in the past yet described imperfectively: читал весь вечер. Perfective does not simply mean fast action. Check pairs semantically because not every prefix changes aspect alone.",
        "ru": "Процесс может полностью остаться в прошлом и всё же описываться несовершенным видом: читал весь вечер. Совершенный вид не означает просто быстрое действие. Проверяйте пары: приставка не всегда меняет только вид."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ყოველ საღამოს ვკითხულობ.",
            "en": "Complete the sentence to express: I read every evening.",
            "ru": "Заполните предложение со значением: ყოველ საღამოს ვკითხულობ."
          },
          "sentence": "Я ____ каждый вечер.",
          "answer": "читаю",
          "options": [
            "читаю",
            "прочитаю",
            "прочитал"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გუშინ მთელი წიგნი წავიკითხე.",
            "en": "Complete the sentence to express: I read the whole book yesterday.",
            "ru": "Заполните предложение со значением: გუშინ მთელი წიგნი წავიკითხე."
          },
          "sentence": "Вчера я ____ всю книгу.",
          "answer": "прочитал",
          "options": [
            "прочитал",
            "прочитаю",
            "читаю"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხვალ წიგნს წავიკითხავ.",
            "en": "Complete the sentence to express: I will finish reading the book tomorrow.",
            "ru": "Заполните предложение со значением: ხვალ წიგნს წავიკითხავ."
          },
          "sentence": "Завтра я ____ книгу.",
          "answer": "прочитаю",
          "options": [
            "прочитаю",
            "прочитал",
            "читаю"
          ]
        },
        {
          "id": "grammar-ru-a2-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ყოველ საღამოს ვკითხულობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I read every evening.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I read every evening."
          },
          "sentence": "____ читаю каждый вечер.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-a2-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ყოველ საღამოს ვკითხულობ.",
            "en": "Choose the complete sentence expressing: I read every evening.",
            "ru": "Выберите полное предложение со значением: I read every evening."
          },
          "sentence": "____",
          "answer": "Я читаю каждый вечер.",
          "options": [
            "Я читаю каждый вечер.",
            "Я прочитаю каждый вечер.",
            "Я прочитал каждый вечер."
          ]
        },
        {
          "id": "grammar-ru-a2-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ყოველ საღამოს ვკითხულობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I read every evening.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I read every evening."
          },
          "sentence": "Я прочитаю каждый вечер. → ____",
          "answer": "Я читаю каждый вечер.",
          "options": [
            "Я читаю каждый вечер.",
            "Я прочитал каждый вечер.",
            "Я прочитаю каждый вечер."
          ]
        },
        {
          "id": "grammar-ru-a2-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გუშინ მთელი წიგნი წავიკითხე.",
            "en": "Complete a different part of the sentence. Intended meaning: I read the whole book yesterday.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I read the whole book yesterday."
          },
          "sentence": "Вчера я прочитал ____ книгу.",
          "answer": "всю",
          "options": [
            "всю",
            "вся",
            "всей"
          ]
        },
        {
          "id": "grammar-ru-a2-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გუშინ მთელი წიგნი წავიკითხე.",
            "en": "Choose the complete sentence expressing: I read the whole book yesterday.",
            "ru": "Выберите полное предложение со значением: I read the whole book yesterday."
          },
          "sentence": "____",
          "answer": "Вчера я прочитал всю книгу.",
          "options": [
            "Вчера я прочитал всю книгу.",
            "Вчера я прочитаю всю книгу.",
            "Вчера я читаю всю книгу."
          ]
        },
        {
          "id": "grammar-ru-a2-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გუშინ მთელი წიგნი წავიკითხე.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I read the whole book yesterday.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I read the whole book yesterday."
          },
          "sentence": "Вчера я прочитаю всю книгу. → ____",
          "answer": "Вчера я прочитал всю книгу.",
          "options": [
            "Вчера я прочитал всю книгу.",
            "Вчера я читаю всю книгу.",
            "Вчера я прочитаю всю книгу."
          ]
        },
        {
          "id": "grammar-ru-a2-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხვალ წიგნს წავიკითხავ.",
            "en": "Complete a different part of the sentence. Intended meaning: I will finish reading the book tomorrow.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I will finish reading the book tomorrow."
          },
          "sentence": "Завтра я прочитаю ____.",
          "answer": "книгу",
          "options": [
            "книгу",
            "книга",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-a2-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხვალ წიგნს წავიკითხავ.",
            "en": "Choose the complete sentence expressing: I will finish reading the book tomorrow.",
            "ru": "Выберите полное предложение со значением: I will finish reading the book tomorrow."
          },
          "sentence": "____",
          "answer": "Завтра я прочитаю книгу.",
          "options": [
            "Завтра я прочитаю книгу.",
            "Завтра я прочитал книгу.",
            "Завтра я читаю книгу."
          ]
        },
        {
          "id": "grammar-ru-a2-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხვალ წიგნს წავიკითხავ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I will finish reading the book tomorrow.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I will finish reading the book tomorrow."
          },
          "sentence": "Завтра я прочитал книгу. → ____",
          "answer": "Завтра я прочитаю книгу.",
          "options": [
            "Завтра я прочитаю книгу.",
            "Завтра я читаю книгу.",
            "Завтра я прочитал книгу."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-6",
      "level": "A2",
      "title": {
        "ka": "მოძრაობის ზმნები",
        "en": "Going on foot and by transport",
        "ru": "Идти, ходить, ехать, ездить"
      },
      "explanation": {
        "ka": "идти/ехать მიმდინარე ერთ მიმართულებას აღნიშნავს; ходить/ездить — ჩვეულებრივ მოძრაობას ან ორმხრივ მგზავრობას კონტექსტში. идти/ходить ფეხითაა, ехать/ездить — ტრანსპორტით. ходить შეიძლება განმეორებით ან სხვადასხვა მიმართულებით სიარულიც იყოს. წარსულში я ходил в магазин ხშირად წასვლასა და დაბრუნებას გულისხმობს. ეხლა ერთი მიმართულებით ტრანსპორტში ვარ = еду, და არა езжу.",
        "en": "Идти/ехать describe one-direction travel in progress; ходить/ездить describe regular movement or a return trip in context. Идти/ходить are on foot, ехать/ездить by transport. Ходить can express repeated movement or movement in several directions. Past я ходил в магазин often implies going and returning. A journey in one direction now uses еду, not езжу.",
        "ru": "Идти/ехать обозначают движение в одном направлении; ходить/ездить — регулярное движение или поездку туда и обратно по контексту. Идти/ходить — пешком, ехать/ездить — на транспорте. Ходить может обозначать повторение или движение в разных направлениях. Я ходил в магазин в прошлом часто подразумевает поход и возвращение. Одно направление на транспорте сейчас — еду, не езжу."
      },
      "rules": [
        {
          "form": "сейчас иду / сейчас еду",
          "detail": {
            "ka": "идти/ехать მიმდინარე ერთ მიმართულებას აღნიშნავს; ходить/ездить — ჩვეულებრივ მოძრაობას ან ორმხრივ მგზავრობას კონტექსტში. შეადარე მაგალითს: Сейчас я иду домой. — ახლა სახლში ფეხით მივდივარ.",
            "en": "Идти/ехать describe one-direction travel in progress; ходить/ездить describe regular movement or a return trip in context. Compare the example: Сейчас я иду домой. — I am walking home now.",
            "ru": "Идти/ехать обозначают движение в одном направлении; ходить/ездить — регулярное движение или поездку туда и обратно по контексту. Сравните с примером: Сейчас я иду домой. — Сейчас я иду домой."
          }
        },
        {
          "form": "часто хожу / часто езжу",
          "detail": {
            "ka": "идти/ходить ფეხითაა, ехать/ездить — ტრანსპორტით. შეადარე მაგალითს: Каждый день я езжу на работу на автобусе. — ყოველდღე სამსახურში ავტობუსით მივდივარ.",
            "en": "Идти/ходить are on foot, ехать/ездить by transport. Compare the example: Каждый день я езжу на работу на автобусе. — I take the bus to work every day.",
            "ru": "Идти/ходить — пешком, ехать/ездить — на транспорте. Сравните с примером: Каждый день я езжу на работу на автобусе. — Каждый день я езжу на работу на автобусе."
          }
        },
        {
          "form": "пешком / на автобусе",
          "detail": {
            "ka": "ходить შეიძლება განმეორებით ან სხვადასხვა მიმართულებით სიარულიც იყოს. შეადარე მაგალითს: Она часто ходит в парк. — ის ხშირად პარკში დადის.",
            "en": "Ходить can express repeated movement or movement in several directions. Compare the example: Она часто ходит в парк. — She often walks to the park.",
            "ru": "Ходить может обозначать повторение или движение в разных направлениях. Сравните с примером: Она часто ходит в парк. — Она часто ходит в парк."
          }
        }
      ],
      "examples": [
        {
          "en": "I am walking home now.",
          "ru": "Сейчас я иду домой.",
          "ka": "ახლა სახლში ფეხით მივდივარ."
        },
        {
          "en": "I take the bus to work every day.",
          "ru": "Каждый день я езжу на работу на автобусе.",
          "ka": "ყოველდღე სამსახურში ავტობუსით მივდივარ."
        },
        {
          "en": "She often walks to the park.",
          "ru": "Она часто ходит в парк.",
          "ka": "ის ხშირად პარკში დადის."
        }
      ],
      "pitfalls": {
        "ka": "ходить შეიძლება განმეორებით ან სხვადასხვა მიმართულებით სიარულიც იყოს. წარსულში я ходил в магазин ხშირად წასვლასა და დაბრუნებას გულისხმობს. ეხლა ერთი მიმართულებით ტრანსპორტში ვარ = еду, და არა езжу.",
        "en": "Ходить can express repeated movement or movement in several directions. Past я ходил в магазин often implies going and returning. A journey in one direction now uses еду, not езжу.",
        "ru": "Ходить может обозначать повторение или движение в разных направлениях. Я ходил в магазин в прошлом часто подразумевает поход и возвращение. Одно направление на транспорте сейчас — еду, не езжу."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახლა სახლში ფეხით მივდივარ.",
            "en": "Complete the sentence to express: I am walking home now.",
            "ru": "Заполните предложение со значением: ახლა სახლში ფეხით მივდივარ."
          },
          "sentence": "Сейчас я ____ домой.",
          "answer": "иду",
          "options": [
            "иду",
            "езжу",
            "ходил"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ყოველდღე სამსახურში ავტობუსით მივდივარ.",
            "en": "Complete the sentence to express: I take the bus to work every day.",
            "ru": "Заполните предложение со значением: ყოველდღე სამსახურში ავტობუსით მივდივარ."
          },
          "sentence": "Каждый день я ____ на работу на автобусе.",
          "answer": "езжу",
          "options": [
            "езжу",
            "иду",
            "ехал"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ხშირად პარკში დადის.",
            "en": "Complete the sentence to express: She often walks to the park.",
            "ru": "Заполните предложение со значением: ის ხშირად პარკში დადის."
          },
          "sentence": "Она часто ____ в парк.",
          "answer": "ходит",
          "options": [
            "ходит",
            "идёт",
            "едет"
          ]
        },
        {
          "id": "grammar-ru-a2-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახლა სახლში ფეხით მივდივარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I am walking home now.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I am walking home now."
          },
          "sentence": "Сейчас я иду ____.",
          "answer": "домой",
          "options": [
            "домой",
            "дома",
            "дому"
          ]
        },
        {
          "id": "grammar-ru-a2-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახლა სახლში ფეხით მივდივარ.",
            "en": "Choose the complete sentence expressing: I am walking home now.",
            "ru": "Выберите полное предложение со значением: I am walking home now."
          },
          "sentence": "____",
          "answer": "Сейчас я иду домой.",
          "options": [
            "Сейчас я иду домой.",
            "Сейчас я езжу домой.",
            "Сейчас я ходил домой."
          ]
        },
        {
          "id": "grammar-ru-a2-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახლა სახლში ფეხით მივდივარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I am walking home now.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I am walking home now."
          },
          "sentence": "Сейчас я езжу домой. → ____",
          "answer": "Сейчас я иду домой.",
          "options": [
            "Сейчас я иду домой.",
            "Сейчас я ходил домой.",
            "Сейчас я езжу домой."
          ]
        },
        {
          "id": "grammar-ru-a2-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ყოველდღე სამსახურში ავტობუსით მივდივარ.",
            "en": "Complete a different part of the sentence. Intended meaning: I take the bus to work every day.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I take the bus to work every day."
          },
          "sentence": "Каждый день я езжу ____ работу на автобусе.",
          "answer": "на",
          "options": [
            "на",
            "в",
            "из"
          ]
        },
        {
          "id": "grammar-ru-a2-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ყოველდღე სამსახურში ავტობუსით მივდივარ.",
            "en": "Choose the complete sentence expressing: I take the bus to work every day.",
            "ru": "Выберите полное предложение со значением: I take the bus to work every day."
          },
          "sentence": "____",
          "answer": "Каждый день я езжу на работу на автобусе.",
          "options": [
            "Каждый день я езжу на работу на автобусе.",
            "Каждый день я иду на работу на автобусе.",
            "Каждый день я ехал на работу на автобусе."
          ]
        },
        {
          "id": "grammar-ru-a2-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ყოველდღე სამსახურში ავტობუსით მივდივარ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I take the bus to work every day.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I take the bus to work every day."
          },
          "sentence": "Каждый день я иду на работу на автобусе. → ____",
          "answer": "Каждый день я езжу на работу на автобусе.",
          "options": [
            "Каждый день я езжу на работу на автобусе.",
            "Каждый день я ехал на работу на автобусе.",
            "Каждый день я иду на работу на автобусе."
          ]
        },
        {
          "id": "grammar-ru-a2-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ხშირად პარკში დადის.",
            "en": "Complete a different part of the sentence. Intended meaning: She often walks to the park.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She often walks to the park."
          },
          "sentence": "____ часто ходит в парк.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-a2-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ხშირად პარკში დადის.",
            "en": "Choose the complete sentence expressing: She often walks to the park.",
            "ru": "Выберите полное предложение со значением: She often walks to the park."
          },
          "sentence": "____",
          "answer": "Она часто ходит в парк.",
          "options": [
            "Она часто ходит в парк.",
            "Она часто идёт в парк.",
            "Она часто едет в парк."
          ]
        },
        {
          "id": "grammar-ru-a2-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ხშირად პარკში დადის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She often walks to the park.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She often walks to the park."
          },
          "sentence": "Она часто идёт в парк. → ____",
          "answer": "Она часто ходит в парк.",
          "options": [
            "Она часто ходит в парк.",
            "Она часто едет в парк.",
            "Она часто идёт в парк."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-7",
      "level": "A2",
      "title": {
        "ka": "რიცხვები და არსებითი სახელი",
        "en": "Numbers with nouns",
        "ru": "Числительные с существительными"
      },
      "explanation": {
        "ka": "1-ის შემდეგ შესაბამისი ერთობითია, 2–4-ის შემდეგ ხშირად ნათესაობითი ერთობითი, 5–20-ის შემდეგ ნათესაობითი მრავლობითი. 11–14 განსაკუთრებულად 5-ის მოდელს მიჰყვება. 21 билет ერთი-ს მოდელს მიჰყვება, 22 билета — ორი-ს, მაგრამ 12 билетов — გამონაკლის ჯგუფს. ერთი მდედრობითში однаა, ორი — две. მრავლობითი ნათესაობითის დაბოლოება ყველა სიტყვაში ერთნაირი არ არის.",
        "en": "After 1 use matching singular; after 2–4 often genitive singular; after 5–20 genitive plural. Numbers ending in 11–14 follow the 5 pattern. 21 билет follows one, 22 билета follows two, but 12 билетов follows the teen exception. Feminine one is одна and two две. Genitive plural endings are not identical across all nouns.",
        "ru": "После 1 нужна соответствующая единственная форма; после 2–4 обычно родительный единственного, после 5–20 — родительный множественного. Числа на 11–14 следуют модели 5. 21 билет следует модели один, 22 билета — два, но 12 билетов относится к исключению 11–14. Женские формы — одна и две. Окончания родительного множественного у разных слов различаются."
      },
      "rules": [
        {
          "form": "один билет / одна книга",
          "detail": {
            "ka": "1-ის შემდეგ შესაბამისი ერთობითია, 2–4-ის შემდეგ ხშირად ნათესაობითი ერთობითი, 5–20-ის შემდეგ ნათესაობითი მრავლობითი. შეადარე მაგალითს: У меня один билет. — ერთი ბილეთი მაქვს.",
            "en": "After 1 use matching singular; after 2–4 often genitive singular; after 5–20 genitive plural. Compare the example: У меня один билет. — I have one ticket.",
            "ru": "После 1 нужна соответствующая единственная форма; после 2–4 обычно родительный единственного, после 5–20 — родительный множественного. Сравните с примером: У меня один билет. — У меня один билет."
          }
        },
        {
          "form": "два билета / три книги",
          "detail": {
            "ka": "11–14 განსაკუთრებულად 5-ის მოდელს მიჰყვება. შეადარე მაგალითს: У меня два билета. — ორი ბილეთი მაქვს.",
            "en": "Numbers ending in 11–14 follow the 5 pattern. Compare the example: У меня два билета. — I have two tickets.",
            "ru": "Числа на 11–14 следуют модели 5. Сравните с примером: У меня два билета. — У меня два билета."
          }
        },
        {
          "form": "пять билетов / одиннадцать книг",
          "detail": {
            "ka": "21 билет ერთი-ს მოდელს მიჰყვება, 22 билета — ორი-ს, მაგრამ 12 билетов — გამონაკლის ჯგუფს. შეადარე მაგალითს: У меня пять билетов. — ხუთი ბილეთი მაქვს.",
            "en": "21 билет follows one, 22 билета follows two, but 12 билетов follows the teen exception. Compare the example: У меня пять билетов. — I have five tickets.",
            "ru": "21 билет следует модели один, 22 билета — два, но 12 билетов относится к исключению 11–14. Сравните с примером: У меня пять билетов. — У меня пять билетов."
          }
        }
      ],
      "examples": [
        {
          "en": "I have one ticket.",
          "ru": "У меня один билет.",
          "ka": "ერთი ბილეთი მაქვს."
        },
        {
          "en": "I have two tickets.",
          "ru": "У меня два билета.",
          "ka": "ორი ბილეთი მაქვს."
        },
        {
          "en": "I have five tickets.",
          "ru": "У меня пять билетов.",
          "ka": "ხუთი ბილეთი მაქვს."
        }
      ],
      "pitfalls": {
        "ka": "21 билет ერთი-ს მოდელს მიჰყვება, 22 билета — ორი-ს, მაგრამ 12 билетов — გამონაკლის ჯგუფს. ერთი მდედრობითში однаა, ორი — две. მრავლობითი ნათესაობითის დაბოლოება ყველა სიტყვაში ერთნაირი არ არის.",
        "en": "21 билет follows one, 22 билета follows two, but 12 билетов follows the teen exception. Feminine one is одна and two две. Genitive plural endings are not identical across all nouns.",
        "ru": "21 билет следует модели один, 22 билета — два, но 12 билетов относится к исключению 11–14. Женские формы — одна и две. Окончания родительного множественного у разных слов различаются."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ერთი ბილეთი მაქვს.",
            "en": "Complete the sentence to express: I have one ticket.",
            "ru": "Заполните предложение со значением: ერთი ბილეთი მაქვს."
          },
          "sentence": "У меня один ____.",
          "answer": "билет",
          "options": [
            "билет",
            "билета",
            "билетов"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ორი ბილეთი მაქვს.",
            "en": "Complete the sentence to express: I have two tickets.",
            "ru": "Заполните предложение со значением: ორი ბილეთი მაქვს."
          },
          "sentence": "У меня два ____.",
          "answer": "билета",
          "options": [
            "билета",
            "билет",
            "билетов"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხუთი ბილეთი მაქვს.",
            "en": "Complete the sentence to express: I have five tickets.",
            "ru": "Заполните предложение со значением: ხუთი ბილეთი მაქვს."
          },
          "sentence": "У меня пять ____.",
          "answer": "билетов",
          "options": [
            "билетов",
            "билет",
            "билета"
          ]
        },
        {
          "id": "grammar-ru-a2-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ერთი ბილეთი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: I have one ticket.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I have one ticket."
          },
          "sentence": "У ____ один билет.",
          "answer": "меня",
          "options": [
            "меня",
            "я",
            "мне"
          ]
        },
        {
          "id": "grammar-ru-a2-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ერთი ბილეთი მაქვს.",
            "en": "Choose the complete sentence expressing: I have one ticket.",
            "ru": "Выберите полное предложение со значением: I have one ticket."
          },
          "sentence": "____",
          "answer": "У меня один билет.",
          "options": [
            "У меня один билет.",
            "У меня один билета.",
            "У меня один билетов."
          ]
        },
        {
          "id": "grammar-ru-a2-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ერთი ბილეთი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I have one ticket.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I have one ticket."
          },
          "sentence": "У меня один билета. → ____",
          "answer": "У меня один билет.",
          "options": [
            "У меня один билет.",
            "У меня один билетов.",
            "У меня один билета."
          ]
        },
        {
          "id": "grammar-ru-a2-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ორი ბილეთი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: I have two tickets.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I have two tickets."
          },
          "sentence": "У ____ два билета.",
          "answer": "меня",
          "options": [
            "меня",
            "я",
            "мне"
          ]
        },
        {
          "id": "grammar-ru-a2-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ორი ბილეთი მაქვს.",
            "en": "Choose the complete sentence expressing: I have two tickets.",
            "ru": "Выберите полное предложение со значением: I have two tickets."
          },
          "sentence": "____",
          "answer": "У меня два билета.",
          "options": [
            "У меня два билета.",
            "У меня два билет.",
            "У меня два билетов."
          ]
        },
        {
          "id": "grammar-ru-a2-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ორი ბილეთი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I have two tickets.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I have two tickets."
          },
          "sentence": "У меня два билет. → ____",
          "answer": "У меня два билета.",
          "options": [
            "У меня два билета.",
            "У меня два билетов.",
            "У меня два билет."
          ]
        },
        {
          "id": "grammar-ru-a2-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხუთი ბილეთი მაქვს.",
            "en": "Complete a different part of the sentence. Intended meaning: I have five tickets.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I have five tickets."
          },
          "sentence": "У ____ пять билетов.",
          "answer": "меня",
          "options": [
            "меня",
            "я",
            "мне"
          ]
        },
        {
          "id": "grammar-ru-a2-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხუთი ბილეთი მაქვს.",
            "en": "Choose the complete sentence expressing: I have five tickets.",
            "ru": "Выберите полное предложение со значением: I have five tickets."
          },
          "sentence": "____",
          "answer": "У меня пять билетов.",
          "options": [
            "У меня пять билетов.",
            "У меня пять билет.",
            "У меня пять билета."
          ]
        },
        {
          "id": "grammar-ru-a2-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხუთი ბილეთი მაქვს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I have five tickets.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I have five tickets."
          },
          "sentence": "У меня пять билет. → ____",
          "answer": "У меня пять билетов.",
          "options": [
            "У меня пять билетов.",
            "У меня пять билета.",
            "У меня пять билет."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-a2-8",
      "level": "A2",
      "title": {
        "ka": "მომწონს და მდგომარეობა",
        "en": "Experiencer constructions",
        "ru": "Мне нравится и мне холодно"
      },
      "explanation": {
        "ka": "нравиться-სთან მომწონებელი მიცემითშია, მოწონებული საგანი — ქვემდებარე: мне нравится книга, мне нравятся книги. მდგომარეობაა мне холодно და არა я холодный. Мне нравится читать-ში მოქმედება ერთ მთლიანად აღიქმება და ზმნა ერთობითშია. нужен/нужна/нужно/нужны საჭირო საგანს ეთანხმება. მიცემითი მე-ს პირდაპირ რუსული я-თი ნუ თარგმნი.",
        "en": "With нравиться, the experiencer is dative and the liked item is the subject: мне нравится книга, мне нравятся книги. A temporary feeling uses мне холодно, not я холодный. In Мне нравится читать the activity is treated as one whole and the verb is singular. Нужен/нужна/нужно/нужны agrees with the needed item. Do not replace the experiencer dative with subject я.",
        "ru": "С нравиться тот, кому нравится, стоит в дательном, а предмет — подлежащее: мне нравится книга, мне нравятся книги. Ощущение выражается мне холодно, не я холодный. В Мне нравится читать действие воспринимается как целое, глагол в единственном числе. Нужен/нужна/нужно/нужны согласуется с нужным предметом. Не заменяйте дательный испытывающего лица подлежащим я."
      },
      "rules": [
        {
          "form": "мне нравится книга",
          "detail": {
            "ka": "нравиться-სთან მომწონებელი მიცემითშია, მოწონებული საგანი — ქვემდებარე: мне нравится книга, мне нравятся книги. შეადარე მაგალითს: Мне нравится книга. — წიგნი მომწონს.",
            "en": "With нравиться, the experiencer is dative and the liked item is the subject: мне нравится книга, мне нравятся книги. Compare the example: Мне нравится книга. — I like the book.",
            "ru": "С нравиться тот, кому нравится, стоит в дательном, а предмет — подлежащее: мне нравится книга, мне нравятся книги. Сравните с примером: Мне нравится книга. — Мне нравится книга."
          }
        },
        {
          "form": "мне нравятся книги",
          "detail": {
            "ka": "მდგომარეობაა мне холодно და არა я холодный. შეადარე მაგალითს: Мне нравятся книги. — წიგნები მომწონს.",
            "en": "A temporary feeling uses мне холодно, not я холодный. Compare the example: Мне нравятся книги. — I like the books.",
            "ru": "Ощущение выражается мне холодно, не я холодный. Сравните с примером: Мне нравятся книги. — Мне нравятся книги."
          }
        },
        {
          "form": "мне холодно / мне нужно идти",
          "detail": {
            "ka": "Мне нравится читать-ში მოქმედება ერთ მთლიანად აღიქმება და ზმნა ერთობითშია. შეადარე მაგალითს: Мне холодно. — მცივა.",
            "en": "In Мне нравится читать the activity is treated as one whole and the verb is singular. Compare the example: Мне холодно. — I feel cold.",
            "ru": "В Мне нравится читать действие воспринимается как целое, глагол в единственном числе. Сравните с примером: Мне холодно. — Мне холодно."
          }
        }
      ],
      "examples": [
        {
          "en": "I like the book.",
          "ru": "Мне нравится книга.",
          "ka": "წიგნი მომწონს."
        },
        {
          "en": "I like the books.",
          "ru": "Мне нравятся книги.",
          "ka": "წიგნები მომწონს."
        },
        {
          "en": "I feel cold.",
          "ru": "Мне холодно.",
          "ka": "მცივა."
        }
      ],
      "pitfalls": {
        "ka": "Мне нравится читать-ში მოქმედება ერთ მთლიანად აღიქმება და ზმნა ერთობითშია. нужен/нужна/нужно/нужны საჭირო საგანს ეთანხმება. მიცემითი მე-ს პირდაპირ რუსული я-თი ნუ თარგმნი.",
        "en": "In Мне нравится читать the activity is treated as one whole and the verb is singular. Нужен/нужна/нужно/нужны agrees with the needed item. Do not replace the experiencer dative with subject я.",
        "ru": "В Мне нравится читать действие воспринимается как целое, глагол в единственном числе. Нужен/нужна/нужно/нужны согласуется с нужным предметом. Не заменяйте дательный испытывающего лица подлежащим я."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი მომწონს.",
            "en": "Complete the sentence to express: I like the book.",
            "ru": "Заполните предложение со значением: წიგნი მომწონს."
          },
          "sentence": "Мне ____ книга.",
          "answer": "нравится",
          "options": [
            "нравится",
            "нравятся",
            "нравлюсь"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნები მომწონს.",
            "en": "Complete the sentence to express: I like the books.",
            "ru": "Заполните предложение со значением: წიგნები მომწონს."
          },
          "sentence": "Мне ____ книги.",
          "answer": "нравятся",
          "options": [
            "нравятся",
            "нравится",
            "нравлюсь"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მცივა.",
            "en": "Complete the sentence to express: I feel cold.",
            "ru": "Заполните предложение со значением: მცივა."
          },
          "sentence": "____ холодно.",
          "answer": "Мне",
          "options": [
            "Мне",
            "Я",
            "Меня"
          ]
        },
        {
          "id": "grammar-ru-a2-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნი მომწონს.",
            "en": "Complete a different part of the sentence. Intended meaning: I like the book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I like the book."
          },
          "sentence": "____ нравится книга.",
          "answer": "Мне",
          "options": [
            "Мне",
            "Я",
            "Меня"
          ]
        },
        {
          "id": "grammar-ru-a2-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნი მომწონს.",
            "en": "Choose the complete sentence expressing: I like the book.",
            "ru": "Выберите полное предложение со значением: I like the book."
          },
          "sentence": "____",
          "answer": "Мне нравится книга.",
          "options": [
            "Мне нравится книга.",
            "Мне нравятся книга.",
            "Мне нравлюсь книга."
          ]
        },
        {
          "id": "grammar-ru-a2-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნი მომწონს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I like the book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I like the book."
          },
          "sentence": "Мне нравятся книга. → ____",
          "answer": "Мне нравится книга.",
          "options": [
            "Мне нравится книга.",
            "Мне нравлюсь книга.",
            "Мне нравятся книга."
          ]
        },
        {
          "id": "grammar-ru-a2-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნები მომწონს.",
            "en": "Complete a different part of the sentence. Intended meaning: I like the books.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I like the books."
          },
          "sentence": "____ нравятся книги.",
          "answer": "Мне",
          "options": [
            "Мне",
            "Я",
            "Меня"
          ]
        },
        {
          "id": "grammar-ru-a2-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნები მომწონს.",
            "en": "Choose the complete sentence expressing: I like the books.",
            "ru": "Выберите полное предложение со значением: I like the books."
          },
          "sentence": "____",
          "answer": "Мне нравятся книги.",
          "options": [
            "Мне нравятся книги.",
            "Мне нравится книги.",
            "Мне нравлюсь книги."
          ]
        },
        {
          "id": "grammar-ru-a2-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნები მომწონს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I like the books.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I like the books."
          },
          "sentence": "Мне нравится книги. → ____",
          "answer": "Мне нравятся книги.",
          "options": [
            "Мне нравятся книги.",
            "Мне нравлюсь книги.",
            "Мне нравится книги."
          ]
        },
        {
          "id": "grammar-ru-a2-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მცივა.",
            "en": "Complete a different part of the sentence. Intended meaning: I feel cold.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I feel cold."
          },
          "sentence": "Мне ____.",
          "answer": "холодно",
          "options": [
            "холодно",
            "холодноа",
            "холодноу"
          ]
        },
        {
          "id": "grammar-ru-a2-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მცივა.",
            "en": "Choose the complete sentence expressing: I feel cold.",
            "ru": "Выберите полное предложение со значением: I feel cold."
          },
          "sentence": "____",
          "answer": "Мне холодно.",
          "options": [
            "Мне холодно.",
            "Я холодно.",
            "Меня холодно."
          ]
        },
        {
          "id": "grammar-ru-a2-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მცივა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I feel cold.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I feel cold."
          },
          "sentence": "Я холодно. → ____",
          "answer": "Мне холодно.",
          "options": [
            "Мне холодно.",
            "Меня холодно.",
            "Я холодно."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-1",
      "level": "B1",
      "title": {
        "ka": "ზედსართავები ბრუნვებში",
        "en": "Adjectives across cases",
        "ru": "Прилагательные в падежах"
      },
      "explanation": {
        "ka": "ზედსართავი სახელთან ერთად იცვლის ბრუნვასაც. ისწავლე მთელი სიტყვათშეთანხმება: нового дома, новому дому, в новом доме; რიცხვი და სქესი შეინარჩუნე. მამრობითი და საშუალო სქესის შეთანხმება ირიბ ბრუნვებში ხშირად ემთხვევა: нового дома, нового окна. მდედრობითში -ой/-ей რამდენიმე ბრუნვას წარმოადგენს და კონტექსტი საჭიროა. წინდებული მხოლოდ სახელს კი არა, მთელ ჯგუფს მართავს.",
        "en": "Adjectives change case together with their noun. Learn whole phrases: нового дома, новому дому, в новом доме; preserve gender and number agreement. Masculine and neuter adjective endings often coincide in oblique cases: нового дома, нового окна. Feminine -ой/-ей can represent several cases and needs context. A preposition governs the whole phrase, not just the noun.",
        "ru": "Прилагательное меняет падеж вместе с существительным. Учите целые сочетания: нового дома, новому дому, в новом доме; сохраняйте согласование в роде и числе. Мужские и средние окончания прилагательных часто совпадают в косвенных падежах: нового дома, нового окна. Женское -ой/-ей представляет несколько падежей и требует контекста. Предлог управляет всей группой, не только существительным."
      },
      "rules": [
        {
          "form": "нет нового дома",
          "detail": {
            "ka": "ზედსართავი სახელთან ერთად იცვლის ბრუნვასაც. შეადარე მაგალითს: Я живу в новом доме. — მე ახალ სახლში ვცხოვრობ.",
            "en": "Adjectives change case together with their noun. Compare the example: Я живу в новом доме. — I live in a new house.",
            "ru": "Прилагательное меняет падеж вместе с существительным. Сравните с примером: Я живу в новом доме. — Я живу в новом доме."
          }
        },
        {
          "form": "к новому дому",
          "detail": {
            "ka": "ისწავლე მთელი სიტყვათშეთანხმება: нового дома, новому дому, в новом доме; რიცხვი და სქესი შეინარჩუნე. შეადარე მაგალითს: Мы идём к новому дому. — ახალ სახლთან მივდივართ.",
            "en": "Learn whole phrases: нового дома, новому дому, в новом доме; preserve gender and number agreement. Compare the example: Мы идём к новому дому. — We are approaching the new house.",
            "ru": "Учите целые сочетания: нового дома, новому дому, в новом доме; сохраняйте согласование в роде и числе. Сравните с примером: Мы идём к новому дому. — Мы идём к новому дому."
          }
        },
        {
          "form": "в новом доме",
          "detail": {
            "ka": "მამრობითი და საშუალო სქესის შეთანხმება ირიბ ბრუნვებში ხშირად ემთხვევა: нового дома, нового окна. შეადარე მაგალითს: Здесь нет нового дома. — აქ ახალი სახლი არ არის.",
            "en": "Masculine and neuter adjective endings often coincide in oblique cases: нового дома, нового окна. Compare the example: Здесь нет нового дома. — There is no new house here.",
            "ru": "Мужские и средние окончания прилагательных часто совпадают в косвенных падежах: нового дома, нового окна. Сравните с примером: Здесь нет нового дома. — Здесь нет нового дома."
          }
        }
      ],
      "examples": [
        {
          "en": "I live in a new house.",
          "ru": "Я живу в новом доме.",
          "ka": "მე ახალ სახლში ვცხოვრობ."
        },
        {
          "en": "We are approaching the new house.",
          "ru": "Мы идём к новому дому.",
          "ka": "ახალ სახლთან მივდივართ."
        },
        {
          "en": "There is no new house here.",
          "ru": "Здесь нет нового дома.",
          "ka": "აქ ახალი სახლი არ არის."
        }
      ],
      "pitfalls": {
        "ka": "მამრობითი და საშუალო სქესის შეთანხმება ირიბ ბრუნვებში ხშირად ემთხვევა: нового дома, нового окна. მდედრობითში -ой/-ей რამდენიმე ბრუნვას წარმოადგენს და კონტექსტი საჭიროა. წინდებული მხოლოდ სახელს კი არა, მთელ ჯგუფს მართავს.",
        "en": "Masculine and neuter adjective endings often coincide in oblique cases: нового дома, нового окна. Feminine -ой/-ей can represent several cases and needs context. A preposition governs the whole phrase, not just the noun.",
        "ru": "Мужские и средние окончания прилагательных часто совпадают в косвенных падежах: нового дома, нового окна. Женское -ой/-ей представляет несколько падежей и требует контекста. Предлог управляет всей группой, не только существительным."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მე ახალ სახლში ვცხოვრობ.",
            "en": "Complete the sentence to express: I live in a new house.",
            "ru": "Заполните предложение со значением: მე ახალ სახლში ვცხოვრობ."
          },
          "sentence": "Я живу в ____ доме.",
          "answer": "новом",
          "options": [
            "новом",
            "новый",
            "нового"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ახალ სახლთან მივდივართ.",
            "en": "Complete the sentence to express: We are approaching the new house.",
            "ru": "Заполните предложение со значением: ახალ სახლთან მივდივართ."
          },
          "sentence": "Мы идём к ____ дому.",
          "answer": "новому",
          "options": [
            "новому",
            "новом",
            "новый"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ ახალი სახლი არ არის.",
            "en": "Complete the sentence to express: There is no new house here.",
            "ru": "Заполните предложение со значением: აქ ახალი სახლი არ არის."
          },
          "sentence": "Здесь нет ____ дома.",
          "answer": "нового",
          "options": [
            "нового",
            "новый",
            "новому"
          ]
        },
        {
          "id": "grammar-ru-b1-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მე ახალ სახლში ვცხოვრობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I live in a new house.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I live in a new house."
          },
          "sentence": "____ живу в новом доме.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b1-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მე ახალ სახლში ვცხოვრობ.",
            "en": "Choose the complete sentence expressing: I live in a new house.",
            "ru": "Выберите полное предложение со значением: I live in a new house."
          },
          "sentence": "____",
          "answer": "Я живу в новом доме.",
          "options": [
            "Я живу в новом доме.",
            "Я живу в новый доме.",
            "Я живу в нового доме."
          ]
        },
        {
          "id": "grammar-ru-b1-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მე ახალ სახლში ვცხოვრობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I live in a new house.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I live in a new house."
          },
          "sentence": "Я живу в новый доме. → ____",
          "answer": "Я живу в новом доме.",
          "options": [
            "Я живу в новом доме.",
            "Я живу в нового доме.",
            "Я живу в новый доме."
          ]
        },
        {
          "id": "grammar-ru-b1-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ახალ სახლთან მივდივართ.",
            "en": "Complete a different part of the sentence. Intended meaning: We are approaching the new house.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We are approaching the new house."
          },
          "sentence": "____ идём к новому дому.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-b1-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ახალ სახლთან მივდივართ.",
            "en": "Choose the complete sentence expressing: We are approaching the new house.",
            "ru": "Выберите полное предложение со значением: We are approaching the new house."
          },
          "sentence": "____",
          "answer": "Мы идём к новому дому.",
          "options": [
            "Мы идём к новому дому.",
            "Мы идём к новом дому.",
            "Мы идём к новый дому."
          ]
        },
        {
          "id": "grammar-ru-b1-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ახალ სახლთან მივდივართ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We are approaching the new house.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We are approaching the new house."
          },
          "sentence": "Мы идём к новом дому. → ____",
          "answer": "Мы идём к новому дому.",
          "options": [
            "Мы идём к новому дому.",
            "Мы идём к новый дому.",
            "Мы идём к новом дому."
          ]
        },
        {
          "id": "grammar-ru-b1-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ ახალი სახლი არ არის.",
            "en": "Complete a different part of the sentence. Intended meaning: There is no new house here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: There is no new house here."
          },
          "sentence": "Здесь ____ нового дома.",
          "answer": "нет",
          "options": [
            "нет",
            "не",
            "ни"
          ]
        },
        {
          "id": "grammar-ru-b1-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ ახალი სახლი არ არის.",
            "en": "Choose the complete sentence expressing: There is no new house here.",
            "ru": "Выберите полное предложение со значением: There is no new house here."
          },
          "sentence": "____",
          "answer": "Здесь нет нового дома.",
          "options": [
            "Здесь нет нового дома.",
            "Здесь нет новый дома.",
            "Здесь нет новому дома."
          ]
        },
        {
          "id": "grammar-ru-b1-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ ახალი სახლი არ არის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: There is no new house here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: There is no new house here."
          },
          "sentence": "Здесь нет новый дома. → ____",
          "answer": "Здесь нет нового дома.",
          "options": [
            "Здесь нет нового дома.",
            "Здесь нет новому дома.",
            "Здесь нет новый дома."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-2",
      "level": "B1",
      "title": {
        "ka": "დაბრუნებითი ზმნები",
        "en": "Reflexive verbs",
        "ru": "Возвратные глаголы"
      },
      "explanation": {
        "ka": "-ся/-сь დაბრუნებით ან სხვა ლექსიკურ მნიშვნელობას ქმნის. ხმოვნის შემდეგ ხშირია -сь, თანხმოვნის შემდეგ -ся; учить язык და учиться განსხვავებული მოდელებია. учить язык ნიშნავს ენის სწავლას, учить ребёнка — ბავშვის სწავლებას; учиться კი თვითონ სწავლას. დაბრუნებითი ზმნა ავტომატურად საკუთარ თავზე მოქმედებას ყოველთვის არ ნიშნავს. -ся წარსულშიც რჩება: учился.",
        "en": "-Ся/-сь creates reflexive or other lexical meanings. -Сь commonly follows a vowel and -ся a consonant; учить язык and учиться use different patterns. Учить язык means learn a language, учить ребёнка teach a child; учиться means study oneself. A reflexive ending does not always literally mean acting on oneself. -Ся remains in the past: учился.",
        "ru": "-Ся/-сь создаёт возвратное или иное лексическое значение. После гласной обычно -сь, после согласной -ся; учить язык и учиться — разные модели. Учить язык — осваивать язык, учить ребёнка — обучать ребёнка; учиться — заниматься самому. Возвратность не всегда означает буквальное действие на себя. -Ся сохраняется и в прошлом: учился."
      },
      "rules": [
        {
          "form": "я учусь / он учится",
          "detail": {
            "ka": "-ся/-сь დაბრუნებით ან სხვა ლექსიკურ მნიშვნელობას ქმნის. შეადარე მაგალითს: Я учусь в университете. — უნივერსიტეტში ვსწავლობ.",
            "en": "-Ся/-сь creates reflexive or other lexical meanings. Compare the example: Я учусь в университете. — I study at university.",
            "ru": "-Ся/-сь создаёт возвратное или иное лексическое значение. Сравните с примером: Я учусь в университете. — Я учусь в университете."
          }
        },
        {
          "form": "мы встречаемся",
          "detail": {
            "ka": "ხმოვნის შემდეგ ხშირია -сь, თანხმოვნის შემდეგ -ся; учить язык და учиться განსხვავებული მოდელებია. შეადარე მაგალითს: Она одевается. — ის იცვამს.",
            "en": "-Сь commonly follows a vowel and -ся a consonant; учить язык and учиться use different patterns. Compare the example: Она одевается. — She gets dressed.",
            "ru": "После гласной обычно -сь, после согласной -ся; учить язык и учиться — разные модели. Сравните с примером: Она одевается. — Она одевается."
          }
        },
        {
          "form": "она одевается",
          "detail": {
            "ka": "учить язык ნიშნავს ენის სწავლას, учить ребёнка — ბავშვის სწავლებას; учиться კი თვითონ სწავლას. შეადარე მაგალითს: Мы встречаемся в пятницу. — პარასკევს ვხვდებით ერთმანეთს.",
            "en": "Учить язык means learn a language, учить ребёнка teach a child; учиться means study oneself. Compare the example: Мы встречаемся в пятницу. — We meet on Friday.",
            "ru": "Учить язык — осваивать язык, учить ребёнка — обучать ребёнка; учиться — заниматься самому. Сравните с примером: Мы встречаемся в пятницу. — Мы встречаемся в пятницу."
          }
        }
      ],
      "examples": [
        {
          "en": "I study at university.",
          "ru": "Я учусь в университете.",
          "ka": "უნივერსიტეტში ვსწავლობ."
        },
        {
          "en": "She gets dressed.",
          "ru": "Она одевается.",
          "ka": "ის იცვამს."
        },
        {
          "en": "We meet on Friday.",
          "ru": "Мы встречаемся в пятницу.",
          "ka": "პარასკევს ვხვდებით ერთმანეთს."
        }
      ],
      "pitfalls": {
        "ka": "учить язык ნიშნავს ენის სწავლას, учить ребёнка — ბავშვის სწავლებას; учиться კი თვითონ სწავლას. დაბრუნებითი ზმნა ავტომატურად საკუთარ თავზე მოქმედებას ყოველთვის არ ნიშნავს. -ся წარსულშიც რჩება: учился.",
        "en": "Учить язык means learn a language, учить ребёнка teach a child; учиться means study oneself. A reflexive ending does not always literally mean acting on oneself. -Ся remains in the past: учился.",
        "ru": "Учить язык — осваивать язык, учить ребёнка — обучать ребёнка; учиться — заниматься самому. Возвратность не всегда означает буквальное действие на себя. -Ся сохраняется и в прошлом: учился."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: უნივერსიტეტში ვსწავლობ.",
            "en": "Complete the sentence to express: I study at university.",
            "ru": "Заполните предложение со значением: უნივერსიტეტში ვსწავლობ."
          },
          "sentence": "Я ____ в университете.",
          "answer": "учусь",
          "options": [
            "учусь",
            "учу",
            "учит"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის იცვამს.",
            "en": "Complete the sentence to express: She gets dressed.",
            "ru": "Заполните предложение со значением: ის იცვამს."
          },
          "sentence": "Она ____.",
          "answer": "одевается",
          "options": [
            "одевается",
            "одевает",
            "одеваю"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: პარასკევს ვხვდებით ერთმანეთს.",
            "en": "Complete the sentence to express: We meet on Friday.",
            "ru": "Заполните предложение со значением: პარასკევს ვხვდებით ერთმანეთს."
          },
          "sentence": "Мы ____ в пятницу.",
          "answer": "встречаемся",
          "options": [
            "встречаемся",
            "встречаем",
            "встречаюсь"
          ]
        },
        {
          "id": "grammar-ru-b1-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: უნივერსიტეტში ვსწავლობ.",
            "en": "Complete a different part of the sentence. Intended meaning: I study at university.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I study at university."
          },
          "sentence": "____ учусь в университете.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b1-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: უნივერსიტეტში ვსწავლობ.",
            "en": "Choose the complete sentence expressing: I study at university.",
            "ru": "Выберите полное предложение со значением: I study at university."
          },
          "sentence": "____",
          "answer": "Я учусь в университете.",
          "options": [
            "Я учусь в университете.",
            "Я учу в университете.",
            "Я учит в университете."
          ]
        },
        {
          "id": "grammar-ru-b1-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: უნივერსიტეტში ვსწავლობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I study at university.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I study at university."
          },
          "sentence": "Я учу в университете. → ____",
          "answer": "Я учусь в университете.",
          "options": [
            "Я учусь в университете.",
            "Я учит в университете.",
            "Я учу в университете."
          ]
        },
        {
          "id": "grammar-ru-b1-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის იცვამს.",
            "en": "Complete a different part of the sentence. Intended meaning: She gets dressed.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She gets dressed."
          },
          "sentence": "____ одевается.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-b1-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის იცვამს.",
            "en": "Choose the complete sentence expressing: She gets dressed.",
            "ru": "Выберите полное предложение со значением: She gets dressed."
          },
          "sentence": "____",
          "answer": "Она одевается.",
          "options": [
            "Она одевается.",
            "Она одевает.",
            "Она одеваю."
          ]
        },
        {
          "id": "grammar-ru-b1-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის იცვამს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She gets dressed.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She gets dressed."
          },
          "sentence": "Она одевает. → ____",
          "answer": "Она одевается.",
          "options": [
            "Она одевается.",
            "Она одеваю.",
            "Она одевает."
          ]
        },
        {
          "id": "grammar-ru-b1-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: პარასკევს ვხვდებით ერთმანეთს.",
            "en": "Complete a different part of the sentence. Intended meaning: We meet on Friday.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We meet on Friday."
          },
          "sentence": "____ встречаемся в пятницу.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-b1-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: პარასკევს ვხვდებით ერთმანეთს.",
            "en": "Choose the complete sentence expressing: We meet on Friday.",
            "ru": "Выберите полное предложение со значением: We meet on Friday."
          },
          "sentence": "____",
          "answer": "Мы встречаемся в пятницу.",
          "options": [
            "Мы встречаемся в пятницу.",
            "Мы встречаем в пятницу.",
            "Мы встречаюсь в пятницу."
          ]
        },
        {
          "id": "grammar-ru-b1-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: პარასკევს ვხვდებით ერთმანეთს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We meet on Friday.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We meet on Friday."
          },
          "sentence": "Мы встречаем в пятницу. → ____",
          "answer": "Мы встречаемся в пятницу.",
          "options": [
            "Мы встречаемся в пятницу.",
            "Мы встречаюсь в пятницу.",
            "Мы встречаем в пятницу."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-3",
      "level": "B1",
      "title": {
        "ka": "მოძრაობის წინსართები",
        "en": "Prefixed motion verbs",
        "ru": "Приставки глаголов движения"
      },
      "explanation": {
        "ka": "при- მოსვლას/ჩამოსვლას აღნიშნავს, у- — წასვლას, вы- — გამოსვლას, в- — შიგნით შესვლას. ახალი სახეობრივი წყვილები მთლიანი ზმნით ისწავლე. პრეფიქსის დამატებით маршрутის საზღვარი იცვლება: уйти წასვლაა, прийти — მოსვლა. მოწყვილე прихожу/пришёл დროისა და სახის მიხედვით. въехать და выехать ტრანსპორტს ეხება; ფეხით შესვლა войти-ა.",
        "en": "При- marks arrival, у- departure, вы- exit and в- entry. Learn new aspect pairs as whole verbs rather than adding prefixes mechanically. A prefix changes the route boundary: уйти departs, прийти arrives. Match прихожу/пришёл by tense and aspect. Въехать and выехать concern transport; entering on foot is войти.",
        "ru": "При- обозначает прибытие, у- — уход, вы- — выход, в- — вход. Новые видовые пары учите как целые глаголы, а не добавляйте приставку механически. Приставка меняет границу маршрута: уйти — удалиться, прийти — прибыть. Сопоставляйте прихожу/пришёл по времени и виду. Въехать и выехать относятся к транспорту; пешком входят — войти."
      },
      "rules": [
        {
          "form": "приходить → прийти",
          "detail": {
            "ka": "при- მოსვლას/ჩამოსვლას აღნიშნავს, у- — წასვლას, вы- — გამოსვლას, в- — შიგნით შესვლას. შეადარე მაგალითს: Он пришёл в школу. — ის სკოლაში მოვიდა.",
            "en": "При- marks arrival, у- departure, вы- exit and в- entry. Compare the example: Он пришёл в школу. — He arrived at school.",
            "ru": "При- обозначает прибытие, у- — уход, вы- — выход, в- — вход. Сравните с примером: Он пришёл в школу. — Он пришёл в школу."
          }
        },
        {
          "form": "уходить → уйти",
          "detail": {
            "ka": "ახალი სახეობრივი წყვილები მთლიანი ზმნით ისწავლე. შეადარე მაგალითს: Она вышла из комнаты. — ის ოთახიდან გამოვიდა.",
            "en": "Learn new aspect pairs as whole verbs rather than adding prefixes mechanically. Compare the example: Она вышла из комнаты. — She left the room.",
            "ru": "Новые видовые пары учите как целые глаголы, а не добавляйте приставку механически. Сравните с примером: Она вышла из комнаты. — Она вышла из комнаты."
          }
        },
        {
          "form": "входить → войти / выходить → выйти",
          "detail": {
            "ka": "პრეფიქსის დამატებით маршрутის საზღვარი იცვლება: уйти წასვლაა, прийти — მოსვლა. შეადარე მაგალითს: Мы вошли в комнату. — ოთახში შევედით.",
            "en": "A prefix changes the route boundary: уйти departs, прийти arrives. Compare the example: Мы вошли в комнату. — We entered the room.",
            "ru": "Приставка меняет границу маршрута: уйти — удалиться, прийти — прибыть. Сравните с примером: Мы вошли в комнату. — Мы вошли в комнату."
          }
        }
      ],
      "examples": [
        {
          "en": "He arrived at school.",
          "ru": "Он пришёл в школу.",
          "ka": "ის სკოლაში მოვიდა."
        },
        {
          "en": "She left the room.",
          "ru": "Она вышла из комнаты.",
          "ka": "ის ოთახიდან გამოვიდა."
        },
        {
          "en": "We entered the room.",
          "ru": "Мы вошли в комнату.",
          "ka": "ოთახში შევედით."
        }
      ],
      "pitfalls": {
        "ka": "პრეფიქსის დამატებით маршрутის საზღვარი იცვლება: уйти წასვლაა, прийти — მოსვლა. მოწყვილე прихожу/пришёл დროისა და სახის მიხედვით. въехать და выехать ტრანსპორტს ეხება; ფეხით შესვლა войти-ა.",
        "en": "A prefix changes the route boundary: уйти departs, прийти arrives. Match прихожу/пришёл by tense and aspect. Въехать and выехать concern transport; entering on foot is войти.",
        "ru": "Приставка меняет границу маршрута: уйти — удалиться, прийти — прибыть. Сопоставляйте прихожу/пришёл по времени и виду. Въехать и выехать относятся к транспорту; пешком входят — войти."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის სკოლაში მოვიდა.",
            "en": "Complete the sentence to express: He arrived at school.",
            "ru": "Заполните предложение со значением: ის სკოლაში მოვიდა."
          },
          "sentence": "Он ____ в школу.",
          "answer": "пришёл",
          "options": [
            "пришёл",
            "вышел",
            "ушёл"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ოთახიდან გამოვიდა.",
            "en": "Complete the sentence to express: She left the room.",
            "ru": "Заполните предложение со значением: ის ოთახიდან გამოვიდა."
          },
          "sentence": "Она ____ из комнаты.",
          "answer": "вышла",
          "options": [
            "вышла",
            "вошла",
            "пришла"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ოთახში შევედით.",
            "en": "Complete the sentence to express: We entered the room.",
            "ru": "Заполните предложение со значением: ოთახში შევედით."
          },
          "sentence": "Мы ____ в комнату.",
          "answer": "вошли",
          "options": [
            "вошли",
            "вышли",
            "ушли"
          ]
        },
        {
          "id": "grammar-ru-b1-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის სკოლაში მოვიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: He arrived at school.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He arrived at school."
          },
          "sentence": "____ пришёл в школу.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b1-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის სკოლაში მოვიდა.",
            "en": "Choose the complete sentence expressing: He arrived at school.",
            "ru": "Выберите полное предложение со значением: He arrived at school."
          },
          "sentence": "____",
          "answer": "Он пришёл в школу.",
          "options": [
            "Он пришёл в школу.",
            "Он вышел в школу.",
            "Он ушёл в школу."
          ]
        },
        {
          "id": "grammar-ru-b1-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის სკოლაში მოვიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He arrived at school.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He arrived at school."
          },
          "sentence": "Он вышел в школу. → ____",
          "answer": "Он пришёл в школу.",
          "options": [
            "Он пришёл в школу.",
            "Он ушёл в школу.",
            "Он вышел в школу."
          ]
        },
        {
          "id": "grammar-ru-b1-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ოთახიდან გამოვიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: She left the room.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She left the room."
          },
          "sentence": "____ вышла из комнаты.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-b1-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ოთახიდან გამოვიდა.",
            "en": "Choose the complete sentence expressing: She left the room.",
            "ru": "Выберите полное предложение со значением: She left the room."
          },
          "sentence": "____",
          "answer": "Она вышла из комнаты.",
          "options": [
            "Она вышла из комнаты.",
            "Она вошла из комнаты.",
            "Она пришла из комнаты."
          ]
        },
        {
          "id": "grammar-ru-b1-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ოთახიდან გამოვიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She left the room.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She left the room."
          },
          "sentence": "Она вошла из комнаты. → ____",
          "answer": "Она вышла из комнаты.",
          "options": [
            "Она вышла из комнаты.",
            "Она пришла из комнаты.",
            "Она вошла из комнаты."
          ]
        },
        {
          "id": "grammar-ru-b1-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ოთახში შევედით.",
            "en": "Complete a different part of the sentence. Intended meaning: We entered the room.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We entered the room."
          },
          "sentence": "____ вошли в комнату.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-b1-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ოთახში შევედით.",
            "en": "Choose the complete sentence expressing: We entered the room.",
            "ru": "Выберите полное предложение со значением: We entered the room."
          },
          "sentence": "____",
          "answer": "Мы вошли в комнату.",
          "options": [
            "Мы вошли в комнату.",
            "Мы вышли в комнату.",
            "Мы ушли в комнату."
          ]
        },
        {
          "id": "grammar-ru-b1-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ოთახში შევედით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We entered the room.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We entered the room."
          },
          "sentence": "Мы вышли в комнату. → ____",
          "answer": "Мы вошли в комнату.",
          "options": [
            "Мы вошли в комнату.",
            "Мы ушли в комнату.",
            "Мы вышли в комнату."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-4",
      "level": "B1",
      "title": {
        "ka": "შედარებითი ხარისხი",
        "en": "Comparing in Russian",
        "ru": "Сравнительная степень"
      },
      "explanation": {
        "ka": "მარტივი შედარებითი ფორმა სქესსა და რიცხვში არ იცვლება: выше, лучше. შედარება უკავშირდება чем-ს ან ნათესაობითს: выше, чем дом / выше дома. более + ჩვეულებრივი ზედსართავი შედგენილ შედარებითს ქმნის: более удобный. უფრო-ს ორივე მოდელს ერთად ნუ გამოიყენებ: более лучше არასწორია. უმაღლესში самый სახელს სქესსა და რიცხვში ეთანხმება.",
        "en": "Simple comparatives do not change gender or number: выше, лучше. Introduce the comparison with чем or genitive: выше, чем дом / выше дома. Более + an ordinary adjective creates a compound comparative: более удобный. Do not combine both comparative models: более лучше is incorrect. In a superlative, самый agrees with the noun in gender and number.",
        "ru": "Простая сравнительная степень не меняется по родам и числам: выше, лучше. Сравнение вводится через чем или родительный: выше, чем дом / выше дома. Более + обычное прилагательное образует составную сравнительную степень: более удобный. Не соединяйте обе модели: более лучше неверно. В превосходной степени самый согласуется с существительным в роде и числе."
      },
      "rules": [
        {
          "form": "большой → больше",
          "detail": {
            "ka": "მარტივი შედარებითი ფორმა სქესსა და რიცხვში არ იცვლება: выше, лучше. შეადარე მაგალითს: Этот дом выше. — ეს სახლი უფრო მაღალია.",
            "en": "Simple comparatives do not change gender or number: выше, лучше. Compare the example: Этот дом выше. — This house is higher.",
            "ru": "Простая сравнительная степень не меняется по родам и числам: выше, лучше. Сравните с примером: Этот дом выше. — Этот дом выше."
          }
        },
        {
          "form": "хороший → лучше",
          "detail": {
            "ka": "შედარება უკავშირდება чем-ს ან ნათესაობითს: выше, чем дом / выше дома. შეადარე მაგალითს: Этот маршрут лучше. — ეს მარშრუტი უკეთესია.",
            "en": "Introduce the comparison with чем or genitive: выше, чем дом / выше дома. Compare the example: Этот маршрут лучше. — This route is better.",
            "ru": "Сравнение вводится через чем или родительный: выше, чем дом / выше дома. Сравните с примером: Этот маршрут лучше. — Этот маршрут лучше."
          }
        },
        {
          "form": "выше, чем дом / выше дома",
          "detail": {
            "ka": "более + ჩვეულებრივი ზედსართავი შედგენილ შედარებითს ქმნის: более удобный. შეადარე მაგალითს: Моя сумка тяжелее твоей. — ჩემი ჩანთა შენსაზე მძიმეა.",
            "en": "Более + an ordinary adjective creates a compound comparative: более удобный. Compare the example: Моя сумка тяжелее твоей. — My bag is heavier than yours.",
            "ru": "Более + обычное прилагательное образует составную сравнительную степень: более удобный. Сравните с примером: Моя сумка тяжелее твоей. — Моя сумка тяжелее твоей."
          }
        }
      ],
      "examples": [
        {
          "en": "This house is higher.",
          "ru": "Этот дом выше.",
          "ka": "ეს სახლი უფრო მაღალია."
        },
        {
          "en": "This route is better.",
          "ru": "Этот маршрут лучше.",
          "ka": "ეს მარშრუტი უკეთესია."
        },
        {
          "en": "My bag is heavier than yours.",
          "ru": "Моя сумка тяжелее твоей.",
          "ka": "ჩემი ჩანთა შენსაზე მძიმეა."
        }
      ],
      "pitfalls": {
        "ka": "более + ჩვეულებრივი ზედსართავი შედგენილ შედარებითს ქმნის: более удобный. უფრო-ს ორივე მოდელს ერთად ნუ გამოიყენებ: более лучше არასწორია. უმაღლესში самый სახელს სქესსა და რიცხვში ეთანხმება.",
        "en": "Более + an ordinary adjective creates a compound comparative: более удобный. Do not combine both comparative models: более лучше is incorrect. In a superlative, самый agrees with the noun in gender and number.",
        "ru": "Более + обычное прилагательное образует составную сравнительную степень: более удобный. Не соединяйте обе модели: более лучше неверно. В превосходной степени самый согласуется с существительным в роде и числе."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს სახლი უფრო მაღალია.",
            "en": "Complete the sentence to express: This house is higher.",
            "ru": "Заполните предложение со значением: ეს სახლი უფრო მაღალია."
          },
          "sentence": "Этот дом ____.",
          "answer": "выше",
          "options": [
            "выше",
            "высокий",
            "высокая"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ეს მარშრუტი უკეთესია.",
            "en": "Complete the sentence to express: This route is better.",
            "ru": "Заполните предложение со значением: ეს მარშრუტი უკეთესია."
          },
          "sentence": "Этот маршрут ____.",
          "answer": "лучше",
          "options": [
            "лучше",
            "хороший",
            "хорошо"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ჩემი ჩანთა შენსაზე მძიმეა.",
            "en": "Complete the sentence to express: My bag is heavier than yours.",
            "ru": "Заполните предложение со значением: ჩემი ჩანთა შენსაზე მძიმეა."
          },
          "sentence": "Моя сумка тяжелее ____.",
          "answer": "твоей",
          "options": [
            "твоей",
            "твоя",
            "твою"
          ]
        },
        {
          "id": "grammar-ru-b1-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს სახლი უფრო მაღალია.",
            "en": "Complete a different part of the sentence. Intended meaning: This house is higher.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This house is higher."
          },
          "sentence": "____ дом выше.",
          "answer": "Этот",
          "options": [
            "Этот",
            "Эта",
            "Это"
          ]
        },
        {
          "id": "grammar-ru-b1-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს სახლი უფრო მაღალია.",
            "en": "Choose the complete sentence expressing: This house is higher.",
            "ru": "Выберите полное предложение со значением: This house is higher."
          },
          "sentence": "____",
          "answer": "Этот дом выше.",
          "options": [
            "Этот дом выше.",
            "Этот дом высокий.",
            "Этот дом высокая."
          ]
        },
        {
          "id": "grammar-ru-b1-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს სახლი უფრო მაღალია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This house is higher.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This house is higher."
          },
          "sentence": "Этот дом высокий. → ____",
          "answer": "Этот дом выше.",
          "options": [
            "Этот дом выше.",
            "Этот дом высокая.",
            "Этот дом высокий."
          ]
        },
        {
          "id": "grammar-ru-b1-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ეს მარშრუტი უკეთესია.",
            "en": "Complete a different part of the sentence. Intended meaning: This route is better.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: This route is better."
          },
          "sentence": "____ маршрут лучше.",
          "answer": "Этот",
          "options": [
            "Этот",
            "Эта",
            "Это"
          ]
        },
        {
          "id": "grammar-ru-b1-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ეს მარშრუტი უკეთესია.",
            "en": "Choose the complete sentence expressing: This route is better.",
            "ru": "Выберите полное предложение со значением: This route is better."
          },
          "sentence": "____",
          "answer": "Этот маршрут лучше.",
          "options": [
            "Этот маршрут лучше.",
            "Этот маршрут хороший.",
            "Этот маршрут хорошо."
          ]
        },
        {
          "id": "grammar-ru-b1-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ეს მარშრუტი უკეთესია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: This route is better.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: This route is better."
          },
          "sentence": "Этот маршрут хороший. → ____",
          "answer": "Этот маршрут лучше.",
          "options": [
            "Этот маршрут лучше.",
            "Этот маршрут хорошо.",
            "Этот маршрут хороший."
          ]
        },
        {
          "id": "grammar-ru-b1-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ჩემი ჩანთა შენსაზე მძიმეა.",
            "en": "Complete a different part of the sentence. Intended meaning: My bag is heavier than yours.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: My bag is heavier than yours."
          },
          "sentence": "____ сумка тяжелее твоей.",
          "answer": "Моя",
          "options": [
            "Моя",
            "Мою",
            "Мое"
          ]
        },
        {
          "id": "grammar-ru-b1-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ჩემი ჩანთა შენსაზე მძიმეა.",
            "en": "Choose the complete sentence expressing: My bag is heavier than yours.",
            "ru": "Выберите полное предложение со значением: My bag is heavier than yours."
          },
          "sentence": "____",
          "answer": "Моя сумка тяжелее твоей.",
          "options": [
            "Моя сумка тяжелее твоей.",
            "Моя сумка тяжелее твоя.",
            "Моя сумка тяжелее твою."
          ]
        },
        {
          "id": "grammar-ru-b1-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ჩემი ჩანთა შენსაზე მძიმეა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: My bag is heavier than yours.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: My bag is heavier than yours."
          },
          "sentence": "Моя сумка тяжелее твоя. → ____",
          "answer": "Моя сумка тяжелее твоей.",
          "options": [
            "Моя сумка тяжелее твоей.",
            "Моя сумка тяжелее твою.",
            "Моя сумка тяжелее твоя."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-5",
      "level": "B1",
      "title": {
        "ka": "პირობა და სურვილი",
        "en": "Conditionals and wishes",
        "ru": "Условие и желание"
      },
      "explanation": {
        "ka": "რეალურ პირობას „თუ“-ს მნიშვნელობით если გადმოსცემს. ჰიპოთეზაში გამოიყენე если бы + წარსული, მთავარ ნაწილშიც бы + წარსული; ეს ფორმა აწმყოსაც შეიძლება ეხებოდეს. бы თავისუფლად შეიძლება განთავსდეს, მაგრამ ზმნის წარსული ფორმა მაინც საჭიროა. хотел бы თავაზიან თხოვნაში წარსულ სურვილს არ ნიშნავს. თუ რეალურ მომავლის პირობას ამბობ, бы ავტომატურად არ დაამატო.",
        "en": "Если introduces real conditions. Hypotheses use если бы + past and бы + past in the main clause; the meaning can concern the present too. Бы can move within the clause, but the past verb form remains necessary. Хотел бы in a polite request is not a past wish. Do not automatically add бы to a real future condition.",
        "ru": "Если вводит реальное условие. Гипотеза строится как если бы + прошедшее и бы + прошедшее в главной части; значение может относиться и к настоящему. Бы может менять место в предложении, но форма прошедшего остаётся необходимой. Хотел бы в вежливой просьбе не означает прошлое желание. Не добавляйте бы автоматически к реальному будущему условию."
      },
      "rules": [
        {
          "form": "Если будет дождь, мы останемся.",
          "detail": {
            "ka": "რეალურ პირობას „თუ“-ს მნიშვნელობით если გადმოსცემს. შეადარე მაგალითს: Если будет дождь, мы останемся. — თუ იწვიმებს, დავრჩებით.",
            "en": "Если introduces real conditions. Compare the example: Если будет дождь, мы останемся. — If it rains, we will stay.",
            "ru": "Если вводит реальное условие. Сравните с примером: Если будет дождь, мы останемся. — Если будет дождь, мы останемся."
          }
        },
        {
          "form": "Если бы было время, я бы поехал.",
          "detail": {
            "ka": "ჰიპოთეზაში გამოიყენე если бы + წარსული, მთავარ ნაწილშიც бы + წარსული; ეს ფორმა აწმყოსაც შეიძლება ეხებოდეს. შეადარე მაგალითს: Если бы было время, я бы поехал. — დრო რომ მქონდეს, წავიდოდი.",
            "en": "Hypotheses use если бы + past and бы + past in the main clause; the meaning can concern the present too. Compare the example: Если бы было время, я бы поехал. — If I had time, I would go.",
            "ru": "Гипотеза строится как если бы + прошедшее и бы + прошедшее в главной части; значение может относиться и к настоящему. Сравните с примером: Если бы было время, я бы поехал. — Если бы было время, я бы поехал."
          }
        },
        {
          "form": "Я хотел бы спросить.",
          "detail": {
            "ka": "бы თავისუფლად შეიძლება განთავსდეს, მაგრამ ზმნის წარსული ფორმა მაინც საჭიროა. შეადარე მაგალითს: Я хотел бы спросить. — მინდა გკითხოთ.",
            "en": "Бы can move within the clause, but the past verb form remains necessary. Compare the example: Я хотел бы спросить. — I would like to ask.",
            "ru": "Бы может менять место в предложении, но форма прошедшего остаётся необходимой. Сравните с примером: Я хотел бы спросить. — Я хотел бы спросить."
          }
        }
      ],
      "examples": [
        {
          "en": "If it rains, we will stay.",
          "ru": "Если будет дождь, мы останемся.",
          "ka": "თუ იწვიმებს, დავრჩებით."
        },
        {
          "en": "If I had time, I would go.",
          "ru": "Если бы было время, я бы поехал.",
          "ka": "დრო რომ მქონდეს, წავიდოდი."
        },
        {
          "en": "I would like to ask.",
          "ru": "Я хотел бы спросить.",
          "ka": "მინდა გკითხოთ."
        }
      ],
      "pitfalls": {
        "ka": "бы თავისუფლად შეიძლება განთავსდეს, მაგრამ ზმნის წარსული ფორმა მაინც საჭიროა. хотел бы თავაზიან თხოვნაში წარსულ სურვილს არ ნიშნავს. თუ რეალურ მომავლის პირობას ამბობ, бы ავტომატურად არ დაამატო.",
        "en": "Бы can move within the clause, but the past verb form remains necessary. Хотел бы in a polite request is not a past wish. Do not automatically add бы to a real future condition.",
        "ru": "Бы может менять место в предложении, но форма прошедшего остаётся необходимой. Хотел бы в вежливой просьбе не означает прошлое желание. Не добавляйте бы автоматически к реальному будущему условию."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: თუ იწვიმებს, დავრჩებით.",
            "en": "Complete the sentence to express: If it rains, we will stay.",
            "ru": "Заполните предложение со значением: თუ იწვიმებს, დავრჩებით."
          },
          "sentence": "____ будет дождь, мы останемся.",
          "answer": "Если",
          "options": [
            "Если",
            "Хотя",
            "Потому что"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დრო რომ მქონდეს, წავიდოდი.",
            "en": "Complete the sentence to express: If I had time, I would go.",
            "ru": "Заполните предложение со значением: დრო რომ მქონდეს, წავიდოდი."
          },
          "sentence": "Если ____ было время, я бы поехал.",
          "answer": "бы",
          "options": [
            "бы",
            "ли",
            "же"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მინდა გკითხოთ.",
            "en": "Complete the sentence to express: I would like to ask.",
            "ru": "Заполните предложение со значением: მინდა გკითხოთ."
          },
          "sentence": "Я хотел бы ____.",
          "answer": "спросить",
          "options": [
            "спросить",
            "спрошу",
            "спросил"
          ]
        },
        {
          "id": "grammar-ru-b1-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: თუ იწვიმებს, დავრჩებით.",
            "en": "Complete a different part of the sentence. Intended meaning: If it rains, we will stay.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: If it rains, we will stay."
          },
          "sentence": "Если ____ дождь, мы останемся.",
          "answer": "будет",
          "options": [
            "будет",
            "буду",
            "будем"
          ]
        },
        {
          "id": "grammar-ru-b1-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: თუ იწვიმებს, დავრჩებით.",
            "en": "Choose the complete sentence expressing: If it rains, we will stay.",
            "ru": "Выберите полное предложение со значением: If it rains, we will stay."
          },
          "sentence": "____",
          "answer": "Если будет дождь, мы останемся.",
          "options": [
            "Если будет дождь, мы останемся.",
            "Хотя будет дождь, мы останемся.",
            "Потому что будет дождь, мы останемся."
          ]
        },
        {
          "id": "grammar-ru-b1-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: თუ იწვიმებს, დავრჩებით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: If it rains, we will stay.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: If it rains, we will stay."
          },
          "sentence": "Хотя будет дождь, мы останемся. → ____",
          "answer": "Если будет дождь, мы останемся.",
          "options": [
            "Если будет дождь, мы останемся.",
            "Потому что будет дождь, мы останемся.",
            "Хотя будет дождь, мы останемся."
          ]
        },
        {
          "id": "grammar-ru-b1-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დრო რომ მქონდეს, წავიდოდი.",
            "en": "Complete a different part of the sentence. Intended meaning: If I had time, I would go.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: If I had time, I would go."
          },
          "sentence": "Если бы ____ время, я бы поехал.",
          "answer": "было",
          "options": [
            "было",
            "был",
            "были"
          ]
        },
        {
          "id": "grammar-ru-b1-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დრო რომ მქონდეს, წავიდოდი.",
            "en": "Choose the complete sentence expressing: If I had time, I would go.",
            "ru": "Выберите полное предложение со значением: If I had time, I would go."
          },
          "sentence": "____",
          "answer": "Если бы было время, я бы поехал.",
          "options": [
            "Если бы было время, я бы поехал.",
            "Если ли было время, я бы поехал.",
            "Если же было время, я бы поехал."
          ]
        },
        {
          "id": "grammar-ru-b1-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დრო რომ მქონდეს, წავიდოდი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: If I had time, I would go.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: If I had time, I would go."
          },
          "sentence": "Если ли было время, я бы поехал. → ____",
          "answer": "Если бы было время, я бы поехал.",
          "options": [
            "Если бы было время, я бы поехал.",
            "Если же было время, я бы поехал.",
            "Если ли было время, я бы поехал."
          ]
        },
        {
          "id": "grammar-ru-b1-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მინდა გკითხოთ.",
            "en": "Complete a different part of the sentence. Intended meaning: I would like to ask.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I would like to ask."
          },
          "sentence": "____ хотел бы спросить.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b1-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მინდა გკითხოთ.",
            "en": "Choose the complete sentence expressing: I would like to ask.",
            "ru": "Выберите полное предложение со значением: I would like to ask."
          },
          "sentence": "____",
          "answer": "Я хотел бы спросить.",
          "options": [
            "Я хотел бы спросить.",
            "Я хотел бы спрошу.",
            "Я хотел бы спросил."
          ]
        },
        {
          "id": "grammar-ru-b1-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მინდა გკითხოთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I would like to ask.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I would like to ask."
          },
          "sentence": "Я хотел бы спрошу. → ____",
          "answer": "Я хотел бы спросить.",
          "options": [
            "Я хотел бы спросить.",
            "Я хотел бы спросил.",
            "Я хотел бы спрошу."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-6",
      "level": "B1",
      "title": {
        "ka": "მიზეზი, მიზანი და დათმობა",
        "en": "Cause, purpose and concession",
        "ru": "Причина, цель и уступка"
      },
      "explanation": {
        "ka": "потому что მიზეზს აღნიშნავს, чтобы — მიზანს, хотя — დათმობას. ერთი მოქმედი პირის მიზანი ხშირად чтобы + ინფინიტივით გამოიხატება; სხვა პირთან შესაძლებელია წარსული ფორმა. მიზნის чтобы ინგლისური that-ის ყველა მნიშვნელობას არ შეესაბამება. Я знаю, что он пришёл ფაქტია; Я хочу, чтобы он пришёл სურვილია. хотя და но-ს გამეორებას მარტივ მოდელში მოერიდე, თუ ფუნქციას ვერ ასაბუთებ.",
        "en": "Потому что marks reason, чтобы purpose and хотя concession. Same-subject purposes often use чтобы + infinitive; a different subject can take a past-form verb. Purpose чтобы does not match every use of English that. Я знаю, что он пришёл states a fact; Я хочу, чтобы он пришёл expresses a wish. In a basic model avoid redundant хотя and но unless the structure warrants it.",
        "ru": "Потому что обозначает причину, чтобы — цель, хотя — уступку. При одном действующем лице цель часто выражается чтобы + инфинитив; при другом лице возможна форма прошедшего. Целевое чтобы не соответствует всем значениям английского that. Я знаю, что он пришёл сообщает факт; Я хочу, чтобы он пришёл выражает желание. В простой модели избегайте избыточного хотя и но без основания."
      },
      "rules": [
        {
          "form": "потому что идёт дождь",
          "detail": {
            "ka": "потому что მიზეზს აღნიშნავს, чтобы — მიზანს, хотя — დათმობას. შეადარე მაგალითს: Я остался, потому что шёл дождь. — დავრჩი, რადგან წვიმდა.",
            "en": "Потому что marks reason, чтобы purpose and хотя concession. Compare the example: Я остался, потому что шёл дождь. — I stayed because it was raining.",
            "ru": "Потому что обозначает причину, чтобы — цель, хотя — уступку. Сравните с примером: Я остался, потому что шёл дождь. — Я остался, потому что шёл дождь."
          }
        },
        {
          "form": "пришёл, чтобы помочь",
          "detail": {
            "ka": "ერთი მოქმედი პირის მიზანი ხშირად чтобы + ინფინიტივით გამოიხატება; სხვა პირთან შესაძლებელია წარსული ფორმა. შეადარე მაგალითს: Я пришёл, чтобы помочь. — მოვედი, რომ დაგეხმარო.",
            "en": "Same-subject purposes often use чтобы + infinitive; a different subject can take a past-form verb. Compare the example: Я пришёл, чтобы помочь. — I came to help.",
            "ru": "При одном действующем лице цель часто выражается чтобы + инфинитив; при другом лице возможна форма прошедшего. Сравните с примером: Я пришёл, чтобы помочь. — Я пришёл, чтобы помочь."
          }
        },
        {
          "form": "хочу, чтобы ты пришёл",
          "detail": {
            "ka": "მიზნის чтобы ინგლისური that-ის ყველა მნიშვნელობას არ შეესაბამება. შეადარე მაგალითს: Хотя было холодно, мы гуляли. — მიუხედავად სიცივისა, ვსეირნობდით.",
            "en": "Purpose чтобы does not match every use of English that. Compare the example: Хотя было холодно, мы гуляли. — Although it was cold, we walked.",
            "ru": "Целевое чтобы не соответствует всем значениям английского that. Сравните с примером: Хотя было холодно, мы гуляли. — Хотя было холодно, мы гуляли."
          }
        }
      ],
      "examples": [
        {
          "en": "I stayed because it was raining.",
          "ru": "Я остался, потому что шёл дождь.",
          "ka": "დავრჩი, რადგან წვიმდა."
        },
        {
          "en": "I came to help.",
          "ru": "Я пришёл, чтобы помочь.",
          "ka": "მოვედი, რომ დაგეხმარო."
        },
        {
          "en": "Although it was cold, we walked.",
          "ru": "Хотя было холодно, мы гуляли.",
          "ka": "მიუხედავად სიცივისა, ვსეირნობდით."
        }
      ],
      "pitfalls": {
        "ka": "მიზნის чтобы ინგლისური that-ის ყველა მნიშვნელობას არ შეესაბამება. Я знаю, что он пришёл ფაქტია; Я хочу, чтобы он пришёл სურვილია. хотя და но-ს გამეორებას მარტივ მოდელში მოერიდე, თუ ფუნქციას ვერ ასაბუთებ.",
        "en": "Purpose чтобы does not match every use of English that. Я знаю, что он пришёл states a fact; Я хочу, чтобы он пришёл expresses a wish. In a basic model avoid redundant хотя and но unless the structure warrants it.",
        "ru": "Целевое чтобы не соответствует всем значениям английского that. Я знаю, что он пришёл сообщает факт; Я хочу, чтобы он пришёл выражает желание. В простой модели избегайте избыточного хотя и но без основания."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დავრჩი, რადგან წვიმდა.",
            "en": "Complete the sentence to express: I stayed because it was raining.",
            "ru": "Заполните предложение со значением: დავრჩი, რადგან წვიმდა."
          },
          "sentence": "Я остался, ____ шёл дождь.",
          "answer": "потому что",
          "options": [
            "потому что",
            "чтобы",
            "хотя"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მოვედი, რომ დაგეხმარო.",
            "en": "Complete the sentence to express: I came to help.",
            "ru": "Заполните предложение со значением: მოვედი, რომ დაგეხმარო."
          },
          "sentence": "Я пришёл, ____ помочь.",
          "answer": "чтобы",
          "options": [
            "чтобы",
            "потому что",
            "если"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მიუხედავად სიცივისა, ვსეირნობდით.",
            "en": "Complete the sentence to express: Although it was cold, we walked.",
            "ru": "Заполните предложение со значением: მიუხედავად სიცივისა, ვსეირნობდით."
          },
          "sentence": "____ было холодно, мы гуляли.",
          "answer": "Хотя",
          "options": [
            "Хотя",
            "Чтобы",
            "Потому что"
          ]
        },
        {
          "id": "grammar-ru-b1-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დავრჩი, რადგან წვიმდა.",
            "en": "Complete a different part of the sentence. Intended meaning: I stayed because it was raining.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I stayed because it was raining."
          },
          "sentence": "____ остался, потому что шёл дождь.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b1-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დავრჩი, რადგან წვიმდა.",
            "en": "Choose the complete sentence expressing: I stayed because it was raining.",
            "ru": "Выберите полное предложение со значением: I stayed because it was raining."
          },
          "sentence": "____",
          "answer": "Я остался, потому что шёл дождь.",
          "options": [
            "Я остался, потому что шёл дождь.",
            "Я остался, чтобы шёл дождь.",
            "Я остался, хотя шёл дождь."
          ]
        },
        {
          "id": "grammar-ru-b1-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დავრჩი, რადგან წვიმდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I stayed because it was raining.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I stayed because it was raining."
          },
          "sentence": "Я остался, чтобы шёл дождь. → ____",
          "answer": "Я остался, потому что шёл дождь.",
          "options": [
            "Я остался, потому что шёл дождь.",
            "Я остался, хотя шёл дождь.",
            "Я остался, чтобы шёл дождь."
          ]
        },
        {
          "id": "grammar-ru-b1-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მოვედი, რომ დაგეხმარო.",
            "en": "Complete a different part of the sentence. Intended meaning: I came to help.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I came to help."
          },
          "sentence": "____ пришёл, чтобы помочь.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b1-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მოვედი, რომ დაგეხმარო.",
            "en": "Choose the complete sentence expressing: I came to help.",
            "ru": "Выберите полное предложение со значением: I came to help."
          },
          "sentence": "____",
          "answer": "Я пришёл, чтобы помочь.",
          "options": [
            "Я пришёл, чтобы помочь.",
            "Я пришёл, потому что помочь.",
            "Я пришёл, если помочь."
          ]
        },
        {
          "id": "grammar-ru-b1-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მოვედი, რომ დაგეხმარო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I came to help.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I came to help."
          },
          "sentence": "Я пришёл, потому что помочь. → ____",
          "answer": "Я пришёл, чтобы помочь.",
          "options": [
            "Я пришёл, чтобы помочь.",
            "Я пришёл, если помочь.",
            "Я пришёл, потому что помочь."
          ]
        },
        {
          "id": "grammar-ru-b1-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მიუხედავად სიცივისა, ვსეირნობდით.",
            "en": "Complete a different part of the sentence. Intended meaning: Although it was cold, we walked.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Although it was cold, we walked."
          },
          "sentence": "Хотя ____ холодно, мы гуляли.",
          "answer": "было",
          "options": [
            "было",
            "был",
            "были"
          ]
        },
        {
          "id": "grammar-ru-b1-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მიუხედავად სიცივისა, ვსეირნობდით.",
            "en": "Choose the complete sentence expressing: Although it was cold, we walked.",
            "ru": "Выберите полное предложение со значением: Although it was cold, we walked."
          },
          "sentence": "____",
          "answer": "Хотя было холодно, мы гуляли.",
          "options": [
            "Хотя было холодно, мы гуляли.",
            "Чтобы было холодно, мы гуляли.",
            "Потому что было холодно, мы гуляли."
          ]
        },
        {
          "id": "grammar-ru-b1-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მიუხედავად სიცივისა, ვსეირნობდით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Although it was cold, we walked.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Although it was cold, we walked."
          },
          "sentence": "Чтобы было холодно, мы гуляли. → ____",
          "answer": "Хотя было холодно, мы гуляли.",
          "options": [
            "Хотя было холодно, мы гуляли.",
            "Потому что было холодно, мы гуляли.",
            "Чтобы было холодно, мы гуляли."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-7",
      "level": "B1",
      "title": {
        "ka": "ირიბი ნათქვამი და კითხვა",
        "en": "Reported statements and questions",
        "ru": "Косвенная речь и вопросы"
      },
      "explanation": {
        "ka": "რუსულში ინგლისურის მსგავსი სავალდებულო დროის გადაწევა არ არის. რომ ხშირად что-ა, yes/no კითხვა — ли. პირი და დრო კონტექსტის შესაბამისად შეცვალე. ли ჩვეულებრივ იმ სიტყვის შემდეგ დგას, რომელზეც კითხვა ფოკუსირდება. ირიბ ნათქვამში кавычки აღარ არის საჭირო. я/ты პირი ახალი მოსაუბრის მიხედვით შეცვალე; ციტატის პირდაპირი შენარჩუნება შეიძლება მცდარ ადამიანს მიემართოს.",
        "en": "Russian does not require English-style tense backshift. Statements often use что; embedded yes/no questions use ли. Adjust person and time to context. Ли normally follows the word focused by the question. Reported speech does not need quotation marks. Change я/ты for the new speaker’s perspective; retaining the original pronoun can identify the wrong person.",
        "ru": "В русском нет обязательного английского согласования времён. Сообщение часто вводится через что, общий косвенный вопрос — через ли. Лицо и время согласуйте с контекстом. Ли обычно стоит после слова, на котором сосредоточен вопрос. Косвенная речь не требует кавычек. Меняйте я/ты с учётом нового говорящего: исходное местоимение может указать не на того человека."
      },
      "rules": [
        {
          "form": "Он сказал, что живёт здесь.",
          "detail": {
            "ka": "რუსულში ინგლისურის მსგავსი სავალდებულო დროის გადაწევა არ არის. შეადარე მაგალითს: Он сказал, что живёт здесь. — მან თქვა, რომ აქ ცხოვრობს.",
            "en": "Russian does not require English-style tense backshift. Compare the example: Он сказал, что живёт здесь. — He said he lives here.",
            "ru": "В русском нет обязательного английского согласования времён. Сравните с примером: Он сказал, что живёт здесь. — Он сказал, что живёт здесь."
          }
        },
        {
          "form": "Она спросила, где я живу.",
          "detail": {
            "ka": "რომ ხშირად что-ა, yes/no კითხვა — ли. შეადარე მაგალითს: Она спросила, где я живу. — მან მკითხა, სად ვცხოვრობ.",
            "en": "Statements often use что; embedded yes/no questions use ли. Compare the example: Она спросила, где я живу. — She asked where I live.",
            "ru": "Сообщение часто вводится через что, общий косвенный вопрос — через ли. Сравните с примером: Она спросила, где я живу. — Она спросила, где я живу."
          }
        },
        {
          "form": "Он спросил, есть ли билет.",
          "detail": {
            "ka": "პირი და დრო კონტექსტის შესაბამისად შეცვალე. შეადარე მაგალითს: Он спросил, есть ли билет. — მან იკითხა, იყო თუ არა ბილეთი.",
            "en": "Adjust person and time to context. Compare the example: Он спросил, есть ли билет. — He asked whether there was a ticket.",
            "ru": "Лицо и время согласуйте с контекстом. Сравните с примером: Он спросил, есть ли билет. — Он спросил, есть ли билет."
          }
        }
      ],
      "examples": [
        {
          "en": "He said he lives here.",
          "ru": "Он сказал, что живёт здесь.",
          "ka": "მან თქვა, რომ აქ ცხოვრობს."
        },
        {
          "en": "She asked where I live.",
          "ru": "Она спросила, где я живу.",
          "ka": "მან მკითხა, სად ვცხოვრობ."
        },
        {
          "en": "He asked whether there was a ticket.",
          "ru": "Он спросил, есть ли билет.",
          "ka": "მან იკითხა, იყო თუ არა ბილეთი."
        }
      ],
      "pitfalls": {
        "ka": "ли ჩვეულებრივ იმ სიტყვის შემდეგ დგას, რომელზეც კითხვა ფოკუსირდება. ირიბ ნათქვამში кавычки აღარ არის საჭირო. я/ты პირი ახალი მოსაუბრის მიხედვით შეცვალე; ციტატის პირდაპირი შენარჩუნება შეიძლება მცდარ ადამიანს მიემართოს.",
        "en": "Ли normally follows the word focused by the question. Reported speech does not need quotation marks. Change я/ты for the new speaker’s perspective; retaining the original pronoun can identify the wrong person.",
        "ru": "Ли обычно стоит после слова, на котором сосредоточен вопрос. Косвенная речь не требует кавычек. Меняйте я/ты с учётом нового говорящего: исходное местоимение может указать не на того человека."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან თქვა, რომ აქ ცხოვრობს.",
            "en": "Complete the sentence to express: He said he lives here.",
            "ru": "Заполните предложение со значением: მან თქვა, რომ აქ ცხოვრობს."
          },
          "sentence": "Он сказал, ____ живёт здесь.",
          "answer": "что",
          "options": [
            "что",
            "чтобы",
            "ли"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან მკითხა, სად ვცხოვრობ.",
            "en": "Complete the sentence to express: She asked where I live.",
            "ru": "Заполните предложение со значением: მან მკითხა, სად ვცხოვრობ."
          },
          "sentence": "Она спросила, ____ я живу.",
          "answer": "где",
          "options": [
            "где",
            "ли",
            "чтобы"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან იკითხა, იყო თუ არა ბილეთი.",
            "en": "Complete the sentence to express: He asked whether there was a ticket.",
            "ru": "Заполните предложение со значением: მან იკითხა, იყო თუ არა ბილეთი."
          },
          "sentence": "Он спросил, есть ____ билет.",
          "answer": "ли",
          "options": [
            "ли",
            "бы",
            "что"
          ]
        },
        {
          "id": "grammar-ru-b1-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან თქვა, რომ აქ ცხოვრობს.",
            "en": "Complete a different part of the sentence. Intended meaning: He said he lives here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He said he lives here."
          },
          "sentence": "____ сказал, что живёт здесь.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b1-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან თქვა, რომ აქ ცხოვრობს.",
            "en": "Choose the complete sentence expressing: He said he lives here.",
            "ru": "Выберите полное предложение со значением: He said he lives here."
          },
          "sentence": "____",
          "answer": "Он сказал, что живёт здесь.",
          "options": [
            "Он сказал, что живёт здесь.",
            "Он сказал, чтобы живёт здесь.",
            "Он сказал, ли живёт здесь."
          ]
        },
        {
          "id": "grammar-ru-b1-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან თქვა, რომ აქ ცხოვრობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He said he lives here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He said he lives here."
          },
          "sentence": "Он сказал, чтобы живёт здесь. → ____",
          "answer": "Он сказал, что живёт здесь.",
          "options": [
            "Он сказал, что живёт здесь.",
            "Он сказал, ли живёт здесь.",
            "Он сказал, чтобы живёт здесь."
          ]
        },
        {
          "id": "grammar-ru-b1-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან მკითხა, სად ვცხოვრობ.",
            "en": "Complete a different part of the sentence. Intended meaning: She asked where I live.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She asked where I live."
          },
          "sentence": "____ спросила, где я живу.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-b1-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან მკითხა, სად ვცხოვრობ.",
            "en": "Choose the complete sentence expressing: She asked where I live.",
            "ru": "Выберите полное предложение со значением: She asked where I live."
          },
          "sentence": "____",
          "answer": "Она спросила, где я живу.",
          "options": [
            "Она спросила, где я живу.",
            "Она спросила, ли я живу.",
            "Она спросила, чтобы я живу."
          ]
        },
        {
          "id": "grammar-ru-b1-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან მკითხა, სად ვცხოვრობ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She asked where I live.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She asked where I live."
          },
          "sentence": "Она спросила, ли я живу. → ____",
          "answer": "Она спросила, где я живу.",
          "options": [
            "Она спросила, где я живу.",
            "Она спросила, чтобы я живу.",
            "Она спросила, ли я живу."
          ]
        },
        {
          "id": "grammar-ru-b1-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან იკითხა, იყო თუ არა ბილეთი.",
            "en": "Complete a different part of the sentence. Intended meaning: He asked whether there was a ticket.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He asked whether there was a ticket."
          },
          "sentence": "____ спросил, есть ли билет.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b1-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან იკითხა, იყო თუ არა ბილეთი.",
            "en": "Choose the complete sentence expressing: He asked whether there was a ticket.",
            "ru": "Выберите полное предложение со значением: He asked whether there was a ticket."
          },
          "sentence": "____",
          "answer": "Он спросил, есть ли билет.",
          "options": [
            "Он спросил, есть ли билет.",
            "Он спросил, есть бы билет.",
            "Он спросил, есть что билет."
          ]
        },
        {
          "id": "grammar-ru-b1-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან იკითხა, იყო თუ არა ბილეთი.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He asked whether there was a ticket.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He asked whether there was a ticket."
          },
          "sentence": "Он спросил, есть бы билет. → ____",
          "answer": "Он спросил, есть ли билет.",
          "options": [
            "Он спросил, есть ли билет.",
            "Он спросил, есть что билет.",
            "Он спросил, есть бы билет."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b1-8",
      "level": "B1",
      "title": {
        "ka": "ნაცვალსახელი который",
        "en": "Relative clauses with который",
        "ru": "Придаточные с который"
      },
      "explanation": {
        "ka": "который სქესსა და რიცხვში წინამავალ სახელს ეთანხმება, ბრუნვა კი დამოკიდებულ ნაწილში მისი ფუნქციით განისაზღვრება: книга, которую я читаю. სულიერი მამრობითის ბრალდებითი которогоა, არა который. წინდებული относительное სიტყვას წინ უსწრებს: друг, с которым я говорю. რომელიც ქართულში ერთ ფორმად ჩანს, რუსულში მისი ფუნქცია მაინც ბრუნვით უნდა გამოიხატოს.",
        "en": "Который agrees in gender and number with its antecedent, but its case depends on its role inside the relative clause: книга, которую я читаю. Animate masculine accusative is которого, not который. A preposition precedes the relative word: друг, с которым я говорю. Georgian რომელიც may look unchanged, but Russian still expresses its grammatical role with case.",
        "ru": "Который согласуется с определяемым словом в роде и числе, но падеж определяется его ролью внутри придаточного: книга, которую я читаю. Одушевлённый мужской винительный — которого, не который. Предлог стоит перед относительным словом: друг, с которым я говорю. Даже если грузинское რომელიც не меняется, в русском роль выражается падежом."
      },
      "rules": [
        {
          "form": "человек, который пришёл",
          "detail": {
            "ka": "который სქესსა და რიცხვში წინამავალ სახელს ეთანხმება, ბრუნვა კი დამოკიდებულ ნაწილში მისი ფუნქციით განისაზღვრება: книга, которую я читаю. შეადარე მაგალითს: Человек, который пришёл, — мой друг. — ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია.",
            "en": "Который agrees in gender and number with its antecedent, but its case depends on its role inside the relative clause: книга, которую я читаю. Compare the example: Человек, который пришёл, — мой друг. — The person who came is my friend.",
            "ru": "Который согласуется с определяемым словом в роде и числе, но падеж определяется его ролью внутри придаточного: книга, которую я читаю. Сравните с примером: Человек, который пришёл, — мой друг. — Человек, который пришёл, — мой друг."
          }
        },
        {
          "form": "книга, которую я читаю",
          "detail": {
            "ka": "სულიერი მამრობითის ბრალდებითი которогоა, არა который. შეადარე მაგალითს: Книга, которую я читаю, интересная. — წიგნი, რომელსაც ვკითხულობ, საინტერესოა.",
            "en": "Animate masculine accusative is которого, not который. Compare the example: Книга, которую я читаю, интересная. — The book I am reading is interesting.",
            "ru": "Одушевлённый мужской винительный — которого, не который. Сравните с примером: Книга, которую я читаю, интересная. — Книга, которую я читаю, интересная."
          }
        },
        {
          "form": "друг, которому я звоню",
          "detail": {
            "ka": "წინდებული относительное სიტყვას წინ უსწრებს: друг, с которым я говорю. შეადარე მაგალითს: Друг, которому я звоню, живёт здесь. — მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს.",
            "en": "A preposition precedes the relative word: друг, с которым я говорю. Compare the example: Друг, которому я звоню, живёт здесь. — The friend I am calling lives here.",
            "ru": "Предлог стоит перед относительным словом: друг, с которым я говорю. Сравните с примером: Друг, которому я звоню, живёт здесь. — Друг, которому я звоню, живёт здесь."
          }
        }
      ],
      "examples": [
        {
          "en": "The person who came is my friend.",
          "ru": "Человек, который пришёл, — мой друг.",
          "ka": "ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია."
        },
        {
          "en": "The book I am reading is interesting.",
          "ru": "Книга, которую я читаю, интересная.",
          "ka": "წიგნი, რომელსაც ვკითხულობ, საინტერესოა."
        },
        {
          "en": "The friend I am calling lives here.",
          "ru": "Друг, которому я звоню, живёт здесь.",
          "ka": "მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს."
        }
      ],
      "pitfalls": {
        "ka": "სულიერი მამრობითის ბრალდებითი которогоა, არა который. წინდებული относительное სიტყვას წინ უსწრებს: друг, с которым я говорю. რომელიც ქართულში ერთ ფორმად ჩანს, რუსულში მისი ფუნქცია მაინც ბრუნვით უნდა გამოიხატოს.",
        "en": "Animate masculine accusative is которого, not который. A preposition precedes the relative word: друг, с которым я говорю. Georgian რომელიც may look unchanged, but Russian still expresses its grammatical role with case.",
        "ru": "Одушевлённый мужской винительный — которого, не который. Предлог стоит перед относительным словом: друг, с которым я говорю. Даже если грузинское რომელიც не меняется, в русском роль выражается падежом."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია.",
            "en": "Complete the sentence to express: The person who came is my friend.",
            "ru": "Заполните предложение со значением: ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია."
          },
          "sentence": "Человек, ____ пришёл, — мой друг.",
          "answer": "который",
          "options": [
            "который",
            "которого",
            "которому"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი, რომელსაც ვკითხულობ, საინტერესოა.",
            "en": "Complete the sentence to express: The book I am reading is interesting.",
            "ru": "Заполните предложение со значением: წიგნი, რომელსაც ვკითხულობ, საინტერესოა."
          },
          "sentence": "Книга, ____ я читаю, интересная.",
          "answer": "которую",
          "options": [
            "которую",
            "которая",
            "которой"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს.",
            "en": "Complete the sentence to express: The friend I am calling lives here.",
            "ru": "Заполните предложение со значением: მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს."
          },
          "sentence": "Друг, ____ я звоню, живёт здесь.",
          "answer": "которому",
          "options": [
            "которому",
            "который",
            "которого"
          ]
        },
        {
          "id": "grammar-ru-b1-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია.",
            "en": "Complete a different part of the sentence. Intended meaning: The person who came is my friend.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The person who came is my friend."
          },
          "sentence": "Человек, который пришёл, — ____ друг.",
          "answer": "мой",
          "options": [
            "мой",
            "моя",
            "моё"
          ]
        },
        {
          "id": "grammar-ru-b1-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია.",
            "en": "Choose the complete sentence expressing: The person who came is my friend.",
            "ru": "Выберите полное предложение со значением: The person who came is my friend."
          },
          "sentence": "____",
          "answer": "Человек, который пришёл, — мой друг.",
          "options": [
            "Человек, который пришёл, — мой друг.",
            "Человек, которого пришёл, — мой друг.",
            "Человек, которому пришёл, — мой друг."
          ]
        },
        {
          "id": "grammar-ru-b1-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადამიანი, რომელიც მოვიდა, ჩემი მეგობარია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The person who came is my friend.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The person who came is my friend."
          },
          "sentence": "Человек, которого пришёл, — мой друг. → ____",
          "answer": "Человек, который пришёл, — мой друг.",
          "options": [
            "Человек, который пришёл, — мой друг.",
            "Человек, которому пришёл, — мой друг.",
            "Человек, которого пришёл, — мой друг."
          ]
        },
        {
          "id": "grammar-ru-b1-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნი, რომელსაც ვკითხულობ, საინტერესოა.",
            "en": "Complete a different part of the sentence. Intended meaning: The book I am reading is interesting.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The book I am reading is interesting."
          },
          "sentence": "____, которую я читаю, интересная.",
          "answer": "Книга",
          "options": [
            "Книга",
            "Книгу",
            "Книге"
          ]
        },
        {
          "id": "grammar-ru-b1-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნი, რომელსაც ვკითხულობ, საინტერესოა.",
            "en": "Choose the complete sentence expressing: The book I am reading is interesting.",
            "ru": "Выберите полное предложение со значением: The book I am reading is interesting."
          },
          "sentence": "____",
          "answer": "Книга, которую я читаю, интересная.",
          "options": [
            "Книга, которую я читаю, интересная.",
            "Книга, которая я читаю, интересная.",
            "Книга, которой я читаю, интересная."
          ]
        },
        {
          "id": "grammar-ru-b1-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნი, რომელსაც ვკითხულობ, საინტერესოა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The book I am reading is interesting.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The book I am reading is interesting."
          },
          "sentence": "Книга, которая я читаю, интересная. → ____",
          "answer": "Книга, которую я читаю, интересная.",
          "options": [
            "Книга, которую я читаю, интересная.",
            "Книга, которой я читаю, интересная.",
            "Книга, которая я читаю, интересная."
          ]
        },
        {
          "id": "grammar-ru-b1-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს.",
            "en": "Complete a different part of the sentence. Intended meaning: The friend I am calling lives here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The friend I am calling lives here."
          },
          "sentence": "Друг, которому я звоню, живёт ____.",
          "answer": "здесь",
          "options": [
            "здесь",
            "сюда",
            "отсюда"
          ]
        },
        {
          "id": "grammar-ru-b1-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს.",
            "en": "Choose the complete sentence expressing: The friend I am calling lives here.",
            "ru": "Выберите полное предложение со значением: The friend I am calling lives here."
          },
          "sentence": "____",
          "answer": "Друг, которому я звоню, живёт здесь.",
          "options": [
            "Друг, которому я звоню, живёт здесь.",
            "Друг, который я звоню, живёт здесь.",
            "Друг, которого я звоню, живёт здесь."
          ]
        },
        {
          "id": "grammar-ru-b1-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მეგობარი, რომელსაც ვურეკავ, აქ ცხოვრობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The friend I am calling lives here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The friend I am calling lives here."
          },
          "sentence": "Друг, который я звоню, живёт здесь. → ____",
          "answer": "Друг, которому я звоню, живёт здесь.",
          "options": [
            "Друг, которому я звоню, живёт здесь.",
            "Друг, которого я звоню, живёт здесь.",
            "Друг, который я звоню, живёт здесь."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-1",
      "level": "B2",
      "title": {
        "ka": "სახის არჩევის ნიუანსები",
        "en": "Aspect: result, process and repetition",
        "ru": "Вид: результат, процесс, повторение"
      },
      "explanation": {
        "ka": "ზმნის სახე მხოლოდ დროს არ უდრის. долго/часто ხშირად პროცესსა და განმეორებას გამოყოფს; за час საზღვრიან შესრულებას. ობიექტისა და კონტექსტის მიხედვით შეარჩიე წყვილი. за час პასუხობს შედეგის მისაღწევ ხანგრძლივობას, час კი პროცესის ხანგრძლივობას. შეკითხვა Вы читали эту книгу? ზოგად ფაქტზეც შეიძლება იყოს და არა მიმდინარე პროცესზე. უარყოფასთან სახის არჩევა აზრს ცვლის: не читал და не прочитал განსხვავდება.",
        "en": "Aspect is not the same as tense. Долго/часто often highlight process or repetition; за час measures bounded completion. Choose the pair through object and context. За час measures time to achieve a result; час measures process duration. Вы читали эту книгу? can ask about general experience rather than an ongoing process. Negative aspect matters: не читал and не прочитал differ.",
        "ru": "Вид не равен времени. Долго/часто часто выделяют процесс или повторение; за час измеряет завершённое действие. Выбирайте вид по объекту и контексту. За час измеряет срок достижения результата, час — длительность процесса. Вы читали эту книгу? может спрашивать об общем факте, не о процессе. В отрицании вид меняет смысл: не читал и не прочитал различаются."
      },
      "rules": [
        {
          "form": "долго писал письмо",
          "detail": {
            "ka": "ზმნის სახე მხოლოდ დროს არ უდრის. შეადარე მაგალითს: Он написал письмо за час. — მან წერილი ერთ საათში დაწერა.",
            "en": "Aspect is not the same as tense. Compare the example: Он написал письмо за час. — He wrote the letter in an hour.",
            "ru": "Вид не равен времени. Сравните с примером: Он написал письмо за час. — Он написал письмо за час."
          }
        },
        {
          "form": "написал письмо за час",
          "detail": {
            "ka": "долго/часто ხშირად პროცესსა და განმეორებას გამოყოფს; за час საზღვრიან შესრულებას. შეადარე მაგალითს: Он писал письма каждый день. — ის ყოველდღე წერილებს წერდა.",
            "en": "Долго/часто often highlight process or repetition; за час measures bounded completion. Compare the example: Он писал письма каждый день. — He used to write letters every day.",
            "ru": "Долго/часто часто выделяют процесс или повторение; за час измеряет завершённое действие. Сравните с примером: Он писал письма каждый день. — Он писал письма каждый день."
          }
        },
        {
          "form": "каждый день писал письма",
          "detail": {
            "ka": "ობიექტისა და კონტექსტის მიხედვით შეარჩიე წყვილი. შეადარე მაგალითს: Она долго читала. — ის დიდხანს კითხულობდა.",
            "en": "Choose the pair through object and context. Compare the example: Она долго читала. — She was reading for a long time.",
            "ru": "Выбирайте вид по объекту и контексту. Сравните с примером: Она долго читала. — Она долго читала."
          }
        }
      ],
      "examples": [
        {
          "en": "He wrote the letter in an hour.",
          "ru": "Он написал письмо за час.",
          "ka": "მან წერილი ერთ საათში დაწერა."
        },
        {
          "en": "He used to write letters every day.",
          "ru": "Он писал письма каждый день.",
          "ka": "ის ყოველდღე წერილებს წერდა."
        },
        {
          "en": "She was reading for a long time.",
          "ru": "Она долго читала.",
          "ka": "ის დიდხანს კითხულობდა."
        }
      ],
      "pitfalls": {
        "ka": "за час პასუხობს შედეგის მისაღწევ ხანგრძლივობას, час კი პროცესის ხანგრძლივობას. შეკითხვა Вы читали эту книгу? ზოგად ფაქტზეც შეიძლება იყოს და არა მიმდინარე პროცესზე. უარყოფასთან სახის არჩევა აზრს ცვლის: не читал და не прочитал განსხვავდება.",
        "en": "За час measures time to achieve a result; час measures process duration. Вы читали эту книгу? can ask about general experience rather than an ongoing process. Negative aspect matters: не читал and не прочитал differ.",
        "ru": "За час измеряет срок достижения результата, час — длительность процесса. Вы читали эту книгу? может спрашивать об общем факте, не о процессе. В отрицании вид меняет смысл: не читал и не прочитал различаются."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მან წერილი ერთ საათში დაწერა.",
            "en": "Complete the sentence to express: He wrote the letter in an hour.",
            "ru": "Заполните предложение со значением: მან წერილი ერთ საათში დაწერა."
          },
          "sentence": "Он ____ письмо за час.",
          "answer": "написал",
          "options": [
            "написал",
            "напишет",
            "пишет"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ყოველდღე წერილებს წერდა.",
            "en": "Complete the sentence to express: He used to write letters every day.",
            "ru": "Заполните предложение со значением: ის ყოველდღე წერილებს წერდა."
          },
          "sentence": "Он ____ письма каждый день.",
          "answer": "писал",
          "options": [
            "писал",
            "напишет",
            "написал"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის დიდხანს კითხულობდა.",
            "en": "Complete the sentence to express: She was reading for a long time.",
            "ru": "Заполните предложение со значением: ის დიდხანს კითხულობდა."
          },
          "sentence": "Она долго ____.",
          "answer": "читала",
          "options": [
            "читала",
            "прочитает",
            "прочитала"
          ]
        },
        {
          "id": "grammar-ru-b2-1-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მან წერილი ერთ საათში დაწერა.",
            "en": "Complete a different part of the sentence. Intended meaning: He wrote the letter in an hour.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He wrote the letter in an hour."
          },
          "sentence": "____ написал письмо за час.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b2-1-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მან წერილი ერთ საათში დაწერა.",
            "en": "Choose the complete sentence expressing: He wrote the letter in an hour.",
            "ru": "Выберите полное предложение со значением: He wrote the letter in an hour."
          },
          "sentence": "____",
          "answer": "Он написал письмо за час.",
          "options": [
            "Он написал письмо за час.",
            "Он напишет письмо за час.",
            "Он пишет письмо за час."
          ]
        },
        {
          "id": "grammar-ru-b2-1-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მან წერილი ერთ საათში დაწერა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He wrote the letter in an hour.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He wrote the letter in an hour."
          },
          "sentence": "Он напишет письмо за час. → ____",
          "answer": "Он написал письмо за час.",
          "options": [
            "Он написал письмо за час.",
            "Он пишет письмо за час.",
            "Он напишет письмо за час."
          ]
        },
        {
          "id": "grammar-ru-b2-1-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ყოველდღე წერილებს წერდა.",
            "en": "Complete a different part of the sentence. Intended meaning: He used to write letters every day.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He used to write letters every day."
          },
          "sentence": "____ писал письма каждый день.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b2-1-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ყოველდღე წერილებს წერდა.",
            "en": "Choose the complete sentence expressing: He used to write letters every day.",
            "ru": "Выберите полное предложение со значением: He used to write letters every day."
          },
          "sentence": "____",
          "answer": "Он писал письма каждый день.",
          "options": [
            "Он писал письма каждый день.",
            "Он напишет письма каждый день.",
            "Он написал письма каждый день."
          ]
        },
        {
          "id": "grammar-ru-b2-1-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ყოველდღე წერილებს წერდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He used to write letters every day.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He used to write letters every day."
          },
          "sentence": "Он напишет письма каждый день. → ____",
          "answer": "Он писал письма каждый день.",
          "options": [
            "Он писал письма каждый день.",
            "Он написал письма каждый день.",
            "Он напишет письма каждый день."
          ]
        },
        {
          "id": "grammar-ru-b2-1-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის დიდხანს კითხულობდა.",
            "en": "Complete a different part of the sentence. Intended meaning: She was reading for a long time.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: She was reading for a long time."
          },
          "sentence": "____ долго читала.",
          "answer": "Она",
          "options": [
            "Она",
            "Её",
            "Ей"
          ]
        },
        {
          "id": "grammar-ru-b2-1-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის დიდხანს კითხულობდა.",
            "en": "Choose the complete sentence expressing: She was reading for a long time.",
            "ru": "Выберите полное предложение со значением: She was reading for a long time."
          },
          "sentence": "____",
          "answer": "Она долго читала.",
          "options": [
            "Она долго читала.",
            "Она долго прочитает.",
            "Она долго прочитала."
          ]
        },
        {
          "id": "grammar-ru-b2-1-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის დიდხანს კითხულობდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: She was reading for a long time.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: She was reading for a long time."
          },
          "sentence": "Она долго прочитает. → ____",
          "answer": "Она долго читала.",
          "options": [
            "Она долго читала.",
            "Она долго прочитала.",
            "Она долго прочитает."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-2",
      "level": "B2",
      "title": {
        "ka": "მოქმედებითი მიმღეობა",
        "en": "Active participles",
        "ru": "Действительные причастия"
      },
      "explanation": {
        "ka": "მოქმედებითი მიმღეობა მოქმედების შემსრულებელს აღწერს და ზედსართავივით ეთანხმება სახელს. ხშირია აწმყო -ущий/-ющий/-ащий/-ящий და წარსული -вший/-ший. მიმღეობა ბრუნვაშიც იცვლება: читающего студента. სახელის შემდეგ გავრცელებული причастный оборот ჩვეულებრივ მძიმეებით გამოიყოფა. მოქმედებითი ფორმა შემსრულებელს აღწერს; წაკითხული წიგნი читающая книга ვერ იქნება.",
        "en": "An active participle describes the performer and agrees with its noun like an adjective. Common endings include present -ущий/-ющий/-ащий/-ящий and past -вший/-ший. A participle also changes case: читающего студента. An expanded participial phrase after its noun is normally separated by commas. Active forms describe performers: a read book is not читающая книга.",
        "ru": "Действительное причастие описывает исполнителя и согласуется с существительным как прилагательное. Частые суффиксы: настоящие -ущ-/-ющ-/-ащ-/-ящ- и прошедшие -вш-/-ш-. Причастие меняется и по падежам: читающего студента. Распространённый оборот после существительного обычно выделяется запятыми. Действительная форма описывает исполнителя: прочитанная книга не может быть читающая книга."
      },
      "rules": [
        {
          "form": "студент, читающий книгу",
          "detail": {
            "ka": "მოქმედებითი მიმღეობა მოქმედების შემსრულებელს აღწერს და ზედსართავივით ეთანხმება სახელს. შეადარე მაგალითს: Студент, читающий книгу, ждёт. — სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება.",
            "en": "An active participle describes the performer and agrees with its noun like an adjective. Compare the example: Студент, читающий книгу, ждёт. — The student reading a book is waiting.",
            "ru": "Действительное причастие описывает исполнителя и согласуется с существительным как прилагательное. Сравните с примером: Студент, читающий книгу, ждёт. — Студент, читающий книгу, ждёт."
          }
        },
        {
          "form": "девушка, живущая здесь",
          "detail": {
            "ka": "ხშირია აწმყო -ущий/-ющий/-ащий/-ящий და წარსული -вший/-ший. შეადარე მაგალითს: Девушка, живущая здесь, врач. — გოგო, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Common endings include present -ущий/-ющий/-ащий/-ящий and past -вший/-ший. Compare the example: Девушка, живущая здесь, врач. — The girl living here is a doctor.",
            "ru": "Частые суффиксы: настоящие -ущ-/-ющ-/-ащ-/-ящ- и прошедшие -вш-/-ш-. Сравните с примером: Девушка, живущая здесь, врач. — Девушка, живущая здесь, врач."
          }
        },
        {
          "form": "человек, приехавший вчера",
          "detail": {
            "ka": "მიმღეობა ბრუნვაშიც იცვლება: читающего студента. შეადარე მაგალითს: Человек, приехавший вчера, здесь. — ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის.",
            "en": "A participle also changes case: читающего студента. Compare the example: Человек, приехавший вчера, здесь. — The person who arrived yesterday is here.",
            "ru": "Причастие меняется и по падежам: читающего студента. Сравните с примером: Человек, приехавший вчера, здесь. — Человек, приехавший вчера, здесь."
          }
        }
      ],
      "examples": [
        {
          "en": "The student reading a book is waiting.",
          "ru": "Студент, читающий книгу, ждёт.",
          "ka": "სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება."
        },
        {
          "en": "The girl living here is a doctor.",
          "ru": "Девушка, живущая здесь, врач.",
          "ka": "გოგო, რომელიც აქ ცხოვრობს, ექიმია."
        },
        {
          "en": "The person who arrived yesterday is here.",
          "ru": "Человек, приехавший вчера, здесь.",
          "ka": "ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის."
        }
      ],
      "pitfalls": {
        "ka": "მიმღეობა ბრუნვაშიც იცვლება: читающего студента. სახელის შემდეგ გავრცელებული причастный оборот ჩვეულებრივ მძიმეებით გამოიყოფა. მოქმედებითი ფორმა შემსრულებელს აღწერს; წაკითხული წიგნი читающая книга ვერ იქნება.",
        "en": "A participle also changes case: читающего студента. An expanded participial phrase after its noun is normally separated by commas. Active forms describe performers: a read book is not читающая книга.",
        "ru": "Причастие меняется и по падежам: читающего студента. Распространённый оборот после существительного обычно выделяется запятыми. Действительная форма описывает исполнителя: прочитанная книга не может быть читающая книга."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება.",
            "en": "Complete the sentence to express: The student reading a book is waiting.",
            "ru": "Заполните предложение со значением: სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება."
          },
          "sentence": "Студент, ____ книгу, ждёт.",
          "answer": "читающий",
          "options": [
            "читающий",
            "читающая",
            "читающее"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: გოგო, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Complete the sentence to express: The girl living here is a doctor.",
            "ru": "Заполните предложение со значением: გოგო, რომელიც აქ ცხოვრობს, ექიმია."
          },
          "sentence": "Девушка, ____ здесь, врач.",
          "answer": "живущая",
          "options": [
            "живущая",
            "живущий",
            "живущее"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის.",
            "en": "Complete the sentence to express: The person who arrived yesterday is here.",
            "ru": "Заполните предложение со значением: ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის."
          },
          "sentence": "Человек, ____ вчера, здесь.",
          "answer": "приехавший",
          "options": [
            "приехавший",
            "приехавшая",
            "приехавшее"
          ]
        },
        {
          "id": "grammar-ru-b2-2-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება.",
            "en": "Complete a different part of the sentence. Intended meaning: The student reading a book is waiting.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The student reading a book is waiting."
          },
          "sentence": "Студент, читающий ____, ждёт.",
          "answer": "книгу",
          "options": [
            "книгу",
            "книга",
            "книге"
          ]
        },
        {
          "id": "grammar-ru-b2-2-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება.",
            "en": "Choose the complete sentence expressing: The student reading a book is waiting.",
            "ru": "Выберите полное предложение со значением: The student reading a book is waiting."
          },
          "sentence": "____",
          "answer": "Студент, читающий книгу, ждёт.",
          "options": [
            "Студент, читающий книгу, ждёт.",
            "Студент, читающая книгу, ждёт.",
            "Студент, читающее книгу, ждёт."
          ]
        },
        {
          "id": "grammar-ru-b2-2-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: სტუდენტი, რომელიც წიგნს კითხულობს, ელოდება.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The student reading a book is waiting.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The student reading a book is waiting."
          },
          "sentence": "Студент, читающая книгу, ждёт. → ____",
          "answer": "Студент, читающий книгу, ждёт.",
          "options": [
            "Студент, читающий книгу, ждёт.",
            "Студент, читающее книгу, ждёт.",
            "Студент, читающая книгу, ждёт."
          ]
        },
        {
          "id": "grammar-ru-b2-2-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: გოგო, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Complete a different part of the sentence. Intended meaning: The girl living here is a doctor.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The girl living here is a doctor."
          },
          "sentence": "Девушка, живущая ____, врач.",
          "answer": "здесь",
          "options": [
            "здесь",
            "сюда",
            "отсюда"
          ]
        },
        {
          "id": "grammar-ru-b2-2-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: გოგო, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Choose the complete sentence expressing: The girl living here is a doctor.",
            "ru": "Выберите полное предложение со значением: The girl living here is a doctor."
          },
          "sentence": "____",
          "answer": "Девушка, живущая здесь, врач.",
          "options": [
            "Девушка, живущая здесь, врач.",
            "Девушка, живущий здесь, врач.",
            "Девушка, живущее здесь, врач."
          ]
        },
        {
          "id": "grammar-ru-b2-2-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: გოგო, რომელიც აქ ცხოვრობს, ექიმია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The girl living here is a doctor.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The girl living here is a doctor."
          },
          "sentence": "Девушка, живущий здесь, врач. → ____",
          "answer": "Девушка, живущая здесь, врач.",
          "options": [
            "Девушка, живущая здесь, врач.",
            "Девушка, живущее здесь, врач.",
            "Девушка, живущий здесь, врач."
          ]
        },
        {
          "id": "grammar-ru-b2-2-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის.",
            "en": "Complete a different part of the sentence. Intended meaning: The person who arrived yesterday is here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The person who arrived yesterday is here."
          },
          "sentence": "Человек, приехавший вчера, ____.",
          "answer": "здесь",
          "options": [
            "здесь",
            "сюда",
            "отсюда"
          ]
        },
        {
          "id": "grammar-ru-b2-2-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის.",
            "en": "Choose the complete sentence expressing: The person who arrived yesterday is here.",
            "ru": "Выберите полное предложение со значением: The person who arrived yesterday is here."
          },
          "sentence": "____",
          "answer": "Человек, приехавший вчера, здесь.",
          "options": [
            "Человек, приехавший вчера, здесь.",
            "Человек, приехавшая вчера, здесь.",
            "Человек, приехавшее вчера, здесь."
          ]
        },
        {
          "id": "grammar-ru-b2-2-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ადამიანი, რომელიც გუშინ ჩამოვიდა, აქ არის.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The person who arrived yesterday is here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The person who arrived yesterday is here."
          },
          "sentence": "Человек, приехавшая вчера, здесь. → ____",
          "answer": "Человек, приехавший вчера, здесь.",
          "options": [
            "Человек, приехавший вчера, здесь.",
            "Человек, приехавшее вчера, здесь.",
            "Человек, приехавшая вчера, здесь."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-3",
      "level": "B2",
      "title": {
        "ka": "ვნებითი მიმღეობა",
        "en": "Passive participles",
        "ru": "Страдательные причастия"
      },
      "explanation": {
        "ka": "ვნებითი მიმღეობა მოქმედების მიმღებ საგანს აღწერს: написанное письмо. სრული ფორმა სახელს ეთანხმება; მოკლე ფორმა ხშირად შემასმენელია: письмо написано. მოკლე ფორმა ბრუნვით არ იცვლება, მაგრამ სქესსა და რიცხვს ინარჩუნებს. მოკლე ვნებით მიმღეობაში ერთი н იწერება: написано. სრულ ფორმაში ხშირად ორმაგი н გვაქვს: написанный; ეს ორი მართლწერა ნუ აურევ.",
        "en": "A passive participle describes the recipient: написанное письмо. The full form agrees with the noun; the short form often functions as a predicate: письмо написано. The short form has no case endings but keeps gender and number. Short passive participles write one н: написано. A full form often has double н: написанный; keep the spellings distinct.",
        "ru": "Страдательное причастие описывает объект действия: написанное письмо. Полная форма согласуется с существительным; краткая часто служит сказуемым: письмо написано. Краткая форма не меняется по падежам, но сохраняет род и число. В кратком страдательном причастии одна н: написано. В полной форме часто две: написанный; различайте написание."
      },
      "rules": [
        {
          "form": "написанное письмо",
          "detail": {
            "ka": "ვნებითი მიმღეობა მოქმედების მიმღებ საგანს აღწერს: написанное письмо. შეადარე მაგალითს: Письмо написано. — წერილი დაწერილია.",
            "en": "A passive participle describes the recipient: написанное письмо. Compare the example: Письмо написано. — The letter is written.",
            "ru": "Страдательное причастие описывает объект действия: написанное письмо. Сравните с примером: Письмо написано. — Письмо написано."
          }
        },
        {
          "form": "письмо написано",
          "detail": {
            "ka": "სრული ფორმა სახელს ეთანხმება; მოკლე ფორმა ხშირად შემასმენელია: письмо написано. შეადარე მაგალითს: Книга прочитана. — წიგნი წაკითხულია.",
            "en": "The full form agrees with the noun; the short form often functions as a predicate: письмо написано. Compare the example: Книга прочитана. — The book has been read.",
            "ru": "Полная форма согласуется с существительным; краткая часто служит сказуемым: письмо написано. Сравните с примером: Книга прочитана. — Книга прочитана."
          }
        },
        {
          "form": "книга прочитана / книги прочитаны",
          "detail": {
            "ka": "მოკლე ფორმა ბრუნვით არ იცვლება, მაგრამ სქესსა და რიცხვს ინარჩუნებს. შეადარე მაგალითს: Написанное письмо на столе. — დაწერილი წერილი მაგიდაზეა.",
            "en": "The short form has no case endings but keeps gender and number. Compare the example: Написанное письмо на столе. — The written letter is on the table.",
            "ru": "Краткая форма не меняется по падежам, но сохраняет род и число. Сравните с примером: Написанное письмо на столе. — Написанное письмо на столе."
          }
        }
      ],
      "examples": [
        {
          "en": "The letter is written.",
          "ru": "Письмо написано.",
          "ka": "წერილი დაწერილია."
        },
        {
          "en": "The book has been read.",
          "ru": "Книга прочитана.",
          "ka": "წიგნი წაკითხულია."
        },
        {
          "en": "The written letter is on the table.",
          "ru": "Написанное письмо на столе.",
          "ka": "დაწერილი წერილი მაგიდაზეა."
        }
      ],
      "pitfalls": {
        "ka": "მოკლე ფორმა ბრუნვით არ იცვლება, მაგრამ სქესსა და რიცხვს ინარჩუნებს. მოკლე ვნებით მიმღეობაში ერთი н იწერება: написано. სრულ ფორმაში ხშირად ორმაგი н გვაქვს: написанный; ეს ორი მართლწერა ნუ აურევ.",
        "en": "The short form has no case endings but keeps gender and number. Short passive participles write one н: написано. A full form often has double н: написанный; keep the spellings distinct.",
        "ru": "Краткая форма не меняется по падежам, но сохраняет род и число. В кратком страдательном причастии одна н: написано. В полной форме часто две: написанный; различайте написание."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წერილი დაწერილია.",
            "en": "Complete the sentence to express: The letter is written.",
            "ru": "Заполните предложение со значением: წერილი დაწერილია."
          },
          "sentence": "Письмо ____.",
          "answer": "написано",
          "options": [
            "написано",
            "написана",
            "написаны"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნი წაკითხულია.",
            "en": "Complete the sentence to express: The book has been read.",
            "ru": "Заполните предложение со значением: წიგნი წაკითხულია."
          },
          "sentence": "Книга ____.",
          "answer": "прочитана",
          "options": [
            "прочитана",
            "прочитано",
            "прочитаны"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დაწერილი წერილი მაგიდაზეა.",
            "en": "Complete the sentence to express: The written letter is on the table.",
            "ru": "Заполните предложение со значением: დაწერილი წერილი მაგიდაზეა."
          },
          "sentence": "____ письмо на столе.",
          "answer": "Написанное",
          "options": [
            "Написанное",
            "Написанная",
            "Написанный"
          ]
        },
        {
          "id": "grammar-ru-b2-3-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წერილი დაწერილია.",
            "en": "Complete a different part of the sentence. Intended meaning: The letter is written.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The letter is written."
          },
          "sentence": "____ написано.",
          "answer": "Письмо",
          "options": [
            "Письмо",
            "Письмоа",
            "Письмоу"
          ]
        },
        {
          "id": "grammar-ru-b2-3-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წერილი დაწერილია.",
            "en": "Choose the complete sentence expressing: The letter is written.",
            "ru": "Выберите полное предложение со значением: The letter is written."
          },
          "sentence": "____",
          "answer": "Письмо написано.",
          "options": [
            "Письмо написано.",
            "Письмо написана.",
            "Письмо написаны."
          ]
        },
        {
          "id": "grammar-ru-b2-3-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წერილი დაწერილია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The letter is written.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The letter is written."
          },
          "sentence": "Письмо написана. → ____",
          "answer": "Письмо написано.",
          "options": [
            "Письмо написано.",
            "Письмо написаны.",
            "Письмо написана."
          ]
        },
        {
          "id": "grammar-ru-b2-3-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნი წაკითხულია.",
            "en": "Complete a different part of the sentence. Intended meaning: The book has been read.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The book has been read."
          },
          "sentence": "____ прочитана.",
          "answer": "Книга",
          "options": [
            "Книга",
            "Книгу",
            "Книге"
          ]
        },
        {
          "id": "grammar-ru-b2-3-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნი წაკითხულია.",
            "en": "Choose the complete sentence expressing: The book has been read.",
            "ru": "Выберите полное предложение со значением: The book has been read."
          },
          "sentence": "____",
          "answer": "Книга прочитана.",
          "options": [
            "Книга прочитана.",
            "Книга прочитано.",
            "Книга прочитаны."
          ]
        },
        {
          "id": "grammar-ru-b2-3-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნი წაკითხულია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The book has been read.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The book has been read."
          },
          "sentence": "Книга прочитано. → ____",
          "answer": "Книга прочитана.",
          "options": [
            "Книга прочитана.",
            "Книга прочитаны.",
            "Книга прочитано."
          ]
        },
        {
          "id": "grammar-ru-b2-3-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დაწერილი წერილი მაგიდაზეა.",
            "en": "Complete a different part of the sentence. Intended meaning: The written letter is on the table.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The written letter is on the table."
          },
          "sentence": "Написанное письмо ____ столе.",
          "answer": "на",
          "options": [
            "на",
            "в",
            "из"
          ]
        },
        {
          "id": "grammar-ru-b2-3-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დაწერილი წერილი მაგიდაზეა.",
            "en": "Choose the complete sentence expressing: The written letter is on the table.",
            "ru": "Выберите полное предложение со значением: The written letter is on the table."
          },
          "sentence": "____",
          "answer": "Написанное письмо на столе.",
          "options": [
            "Написанное письмо на столе.",
            "Написанная письмо на столе.",
            "Написанный письмо на столе."
          ]
        },
        {
          "id": "grammar-ru-b2-3-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დაწერილი წერილი მაგიდაზეა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The written letter is on the table.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The written letter is on the table."
          },
          "sentence": "Написанная письмо на столе. → ____",
          "answer": "Написанное письмо на столе.",
          "options": [
            "Написанное письмо на столе.",
            "Написанный письмо на столе.",
            "Написанная письмо на столе."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-4",
      "level": "B2",
      "title": {
        "ka": "დეეპრიჩასტიე",
        "en": "Adverbial participles",
        "ru": "Деепричастия"
      },
      "explanation": {
        "ka": "деепричастие დამატებით მოქმედებას აღნიშნავს და მისი შემსრულებელი მთავარ მოქმედებას უნდა ემთხვეოდეს. читая პროცესია; прочитав ხშირად წინ დასრულებული მოქმედებაა. ჩვეულებრივ მძიმეებით გამოიყოფა. დეეპრიჩასტიე უცვლელია: მოქმედი პირის სქესი მის დაბოლოებას არ ცვლის. Прочитав письмо, мне стало грустно სტანდარტულ სავარჯიშოში პრობლემურია, რადგან მთავარ ნაწილს შესაბამისი მოქმედი ქვემდებარე აკლია. თქვი Прочитав письмо, я загрустил.",
        "en": "An adverbial participle adds an action with the same performer as the main verb. Читая is ongoing; прочитав often precedes the main event. Commas normally separate the phrase. An adverbial participle is unchanged by the performer’s gender. Прочитав письмо, мне стало грустно is problematic in a standard exercise because the main clause lacks the matching acting subject. Use Прочитав письмо, я загрустил.",
        "ru": "Деепричастие обозначает добавочное действие того же исполнителя, что у основного глагола. Читая — процесс; прочитав часто предшествует основному действию. Оборот обычно выделяется запятыми. Деепричастие не меняется по роду исполнителя. Прочитав письмо, мне стало грустно проблематично в нормативном задании: в главной части нет соответствующего действующего подлежащего. Лучше Прочитав письмо, я загрустил."
      },
      "rules": [
        {
          "form": "Читая, я делаю заметки.",
          "detail": {
            "ka": "деепричастие დამატებით მოქმედებას აღნიშნავს და მისი შემსრულებელი მთავარ მოქმედებას უნდა ემთხვეოდეს. შეადარე მაგალითს: Читая, я делаю заметки. — კითხვისას ჩანაწერებს ვაკეთებ.",
            "en": "An adverbial participle adds an action with the same performer as the main verb. Compare the example: Читая, я делаю заметки. — While reading, I take notes.",
            "ru": "Деепричастие обозначает добавочное действие того же исполнителя, что у основного глагола. Сравните с примером: Читая, я делаю заметки. — Читая, я делаю заметки."
          }
        },
        {
          "form": "Прочитав письмо, он ответил.",
          "detail": {
            "ka": "читая პროცესია; прочитав ხშირად წინ დასრულებული მოქმედებაა. შეადარე მაგალითს: Прочитав письмо, он ответил. — წერილის წაკითხვის შემდეგ მან უპასუხა.",
            "en": "Читая is ongoing; прочитав often precedes the main event. Compare the example: Прочитав письмо, он ответил. — After reading the letter, he replied.",
            "ru": "Читая — процесс; прочитав часто предшествует основному действию. Сравните с примером: Прочитав письмо, он ответил. — Прочитав письмо, он ответил."
          }
        },
        {
          "form": "Улыбаясь, она вошла.",
          "detail": {
            "ka": "ჩვეულებრივ მძიმეებით გამოიყოფა. შეადარე მაგალითს: Улыбаясь, она вошла. — ღიმილით შემოვიდა.",
            "en": "Commas normally separate the phrase. Compare the example: Улыбаясь, она вошла. — Smiling, she came in.",
            "ru": "Оборот обычно выделяется запятыми. Сравните с примером: Улыбаясь, она вошла. — Улыбаясь, она вошла."
          }
        }
      ],
      "examples": [
        {
          "en": "While reading, I take notes.",
          "ru": "Читая, я делаю заметки.",
          "ka": "კითხვისას ჩანაწერებს ვაკეთებ."
        },
        {
          "en": "After reading the letter, he replied.",
          "ru": "Прочитав письмо, он ответил.",
          "ka": "წერილის წაკითხვის შემდეგ მან უპასუხა."
        },
        {
          "en": "Smiling, she came in.",
          "ru": "Улыбаясь, она вошла.",
          "ka": "ღიმილით შემოვიდა."
        }
      ],
      "pitfalls": {
        "ka": "დეეპრიჩასტიე უცვლელია: მოქმედი პირის სქესი მის დაბოლოებას არ ცვლის. Прочитав письмо, мне стало грустно სტანდარტულ სავარჯიშოში პრობლემურია, რადგან მთავარ ნაწილს შესაბამისი მოქმედი ქვემდებარე აკლია. თქვი Прочитав письмо, я загрустил.",
        "en": "An adverbial participle is unchanged by the performer’s gender. Прочитав письмо, мне стало грустно is problematic in a standard exercise because the main clause lacks the matching acting subject. Use Прочитав письмо, я загрустил.",
        "ru": "Деепричастие не меняется по роду исполнителя. Прочитав письмо, мне стало грустно проблематично в нормативном задании: в главной части нет соответствующего действующего подлежащего. Лучше Прочитав письмо, я загрустил."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: კითხვისას ჩანაწერებს ვაკეთებ.",
            "en": "Complete the sentence to express: While reading, I take notes.",
            "ru": "Заполните предложение со значением: კითხვისას ჩანაწერებს ვაკეთებ."
          },
          "sentence": "____, я делаю заметки.",
          "answer": "Читая",
          "options": [
            "Читая",
            "Прочитав",
            "Читающий"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წერილის წაკითხვის შემდეგ მან უპასუხა.",
            "en": "Complete the sentence to express: After reading the letter, he replied.",
            "ru": "Заполните предложение со значением: წერილის წაკითხვის შემდეგ მან უპასუხა."
          },
          "sentence": "____ письмо, он ответил.",
          "answer": "Прочитав",
          "options": [
            "Прочитав",
            "Читая",
            "Читающий"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ღიმილით შემოვიდა.",
            "en": "Complete the sentence to express: Smiling, she came in.",
            "ru": "Заполните предложение со значением: ღიმილით შემოვიდა."
          },
          "sentence": "____, она вошла.",
          "answer": "Улыбаясь",
          "options": [
            "Улыбаясь",
            "Улыбающаяся",
            "Улыбается"
          ]
        },
        {
          "id": "grammar-ru-b2-4-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: კითხვისას ჩანაწერებს ვაკეთებ.",
            "en": "Complete a different part of the sentence. Intended meaning: While reading, I take notes.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: While reading, I take notes."
          },
          "sentence": "Читая, я ____ заметки.",
          "answer": "делаю",
          "options": [
            "делаю",
            "делаюа",
            "делаюу"
          ]
        },
        {
          "id": "grammar-ru-b2-4-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: კითხვისას ჩანაწერებს ვაკეთებ.",
            "en": "Choose the complete sentence expressing: While reading, I take notes.",
            "ru": "Выберите полное предложение со значением: While reading, I take notes."
          },
          "sentence": "____",
          "answer": "Читая, я делаю заметки.",
          "options": [
            "Читая, я делаю заметки.",
            "Прочитав, я делаю заметки.",
            "Читающий, я делаю заметки."
          ]
        },
        {
          "id": "grammar-ru-b2-4-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: კითხვისას ჩანაწერებს ვაკეთებ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: While reading, I take notes.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: While reading, I take notes."
          },
          "sentence": "Прочитав, я делаю заметки. → ____",
          "answer": "Читая, я делаю заметки.",
          "options": [
            "Читая, я делаю заметки.",
            "Читающий, я делаю заметки.",
            "Прочитав, я делаю заметки."
          ]
        },
        {
          "id": "grammar-ru-b2-4-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წერილის წაკითხვის შემდეგ მან უპასუხა.",
            "en": "Complete a different part of the sentence. Intended meaning: After reading the letter, he replied.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: After reading the letter, he replied."
          },
          "sentence": "Прочитав ____, он ответил.",
          "answer": "письмо",
          "options": [
            "письмо",
            "письмоа",
            "письмоу"
          ]
        },
        {
          "id": "grammar-ru-b2-4-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წერილის წაკითხვის შემდეგ მან უპასუხა.",
            "en": "Choose the complete sentence expressing: After reading the letter, he replied.",
            "ru": "Выберите полное предложение со значением: After reading the letter, he replied."
          },
          "sentence": "____",
          "answer": "Прочитав письмо, он ответил.",
          "options": [
            "Прочитав письмо, он ответил.",
            "Читая письмо, он ответил.",
            "Читающий письмо, он ответил."
          ]
        },
        {
          "id": "grammar-ru-b2-4-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წერილის წაკითხვის შემდეგ მან უპასუხა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: After reading the letter, he replied.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: After reading the letter, he replied."
          },
          "sentence": "Читая письмо, он ответил. → ____",
          "answer": "Прочитав письмо, он ответил.",
          "options": [
            "Прочитав письмо, он ответил.",
            "Читающий письмо, он ответил.",
            "Читая письмо, он ответил."
          ]
        },
        {
          "id": "grammar-ru-b2-4-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ღიმილით შემოვიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Smiling, she came in.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Smiling, she came in."
          },
          "sentence": "Улыбаясь, ____ вошла.",
          "answer": "она",
          "options": [
            "она",
            "ону",
            "оне"
          ]
        },
        {
          "id": "grammar-ru-b2-4-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ღიმილით შემოვიდა.",
            "en": "Choose the complete sentence expressing: Smiling, she came in.",
            "ru": "Выберите полное предложение со значением: Smiling, she came in."
          },
          "sentence": "____",
          "answer": "Улыбаясь, она вошла.",
          "options": [
            "Улыбаясь, она вошла.",
            "Улыбающаяся, она вошла.",
            "Улыбается, она вошла."
          ]
        },
        {
          "id": "grammar-ru-b2-4-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ღიმილით შემოვიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Smiling, she came in.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Smiling, she came in."
          },
          "sentence": "Улыбающаяся, она вошла. → ____",
          "answer": "Улыбаясь, она вошла.",
          "options": [
            "Улыбаясь, она вошла.",
            "Улыбается, она вошла.",
            "Улыбающаяся, она вошла."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-5",
      "level": "B2",
      "title": {
        "ka": "უპირო და ვნებითი კონსტრუქციები",
        "en": "Impersonal and passive constructions",
        "ru": "Безличные и пассивные конструкции"
      },
      "explanation": {
        "ka": "რუსული ხშირად იყენებს უპირო ან განუსაზღვრელ-პირიან ფორმებს: мне не спится, здесь строят дом. მოკლე ვნებითი ფორმა რიცხვსა და სქესში ეთანხმება საგანს. здесь строят არ გულისხმობს ცნობილ они ჯგუფს; მოქმედი პირი გაურკვეველია. უპირო мне не спится ნებაყოფლობით მოქმედებას არ აღწერს. дверь закрыта მდგომარეობას აღნიშნავს, дверь закрывается კი პროცესს ან განმეორებას.",
        "en": "Russian often uses impersonal or indefinite-personal structures: мне не спится, здесь строят дом. Short passive forms agree with the subject in number and gender. Здесь строят need not refer to an identified they group; the agent is unspecified. Impersonal мне не спится does not describe a voluntary action. Дверь закрыта gives a state; дверь закрывается a process or repetition.",
        "ru": "В русском часты безличные и неопределённо-личные конструкции: мне не спится, здесь строят дом. Краткая пассивная форма согласуется с предметом в роде и числе. Здесь строят не обязательно относится к известной группе они: исполнитель не определён. Безличное мне не спится не описывает добровольное действие. Дверь закрыта — состояние, дверь закрывается — процесс или повторение."
      },
      "rules": [
        {
          "form": "Мне не спится.",
          "detail": {
            "ka": "რუსული ხშირად იყენებს უპირო ან განუსაზღვრელ-პირიან ფორმებს: мне не спится, здесь строят дом. შეადარე მაგალითს: Мне не спится. — ვერ ვიძინებ.",
            "en": "Russian often uses impersonal or indefinite-personal structures: мне не спится, здесь строят дом. Compare the example: Мне не спится. — I cannot get to sleep.",
            "ru": "В русском часты безличные и неопределённо-личные конструкции: мне не спится, здесь строят дом. Сравните с примером: Мне не спится. — Мне не спится."
          }
        },
        {
          "form": "Здесь строят дом.",
          "detail": {
            "ka": "მოკლე ვნებითი ფორმა რიცხვსა და სქესში ეთანხმება საგანს. შეადარე მაგალითს: Здесь строят дом. — აქ სახლს აშენებენ.",
            "en": "Short passive forms agree with the subject in number and gender. Compare the example: Здесь строят дом. — They are building a house here.",
            "ru": "Краткая пассивная форма согласуется с предметом в роде и числе. Сравните с примером: Здесь строят дом. — Здесь строят дом."
          }
        },
        {
          "form": "Дверь закрыта.",
          "detail": {
            "ka": "здесь строят არ გულისხმობს ცნობილ они ჯგუფს; მოქმედი პირი გაურკვეველია. შეადარე მაგალითს: Дверь закрыта. — კარი დაკეტილია.",
            "en": "Здесь строят need not refer to an identified they group; the agent is unspecified. Compare the example: Дверь закрыта. — The door is closed.",
            "ru": "Здесь строят не обязательно относится к известной группе они: исполнитель не определён. Сравните с примером: Дверь закрыта. — Дверь закрыта."
          }
        }
      ],
      "examples": [
        {
          "en": "I cannot get to sleep.",
          "ru": "Мне не спится.",
          "ka": "ვერ ვიძინებ."
        },
        {
          "en": "They are building a house here.",
          "ru": "Здесь строят дом.",
          "ka": "აქ სახლს აშენებენ."
        },
        {
          "en": "The door is closed.",
          "ru": "Дверь закрыта.",
          "ka": "კარი დაკეტილია."
        }
      ],
      "pitfalls": {
        "ka": "здесь строят არ გულისხმობს ცნობილ они ჯგუფს; მოქმედი პირი გაურკვეველია. უპირო мне не спится ნებაყოფლობით მოქმედებას არ აღწერს. дверь закрыта მდგომარეობას აღნიშნავს, дверь закрывается კი პროცესს ან განმეორებას.",
        "en": "Здесь строят need not refer to an identified they group; the agent is unspecified. Impersonal мне не спится does not describe a voluntary action. Дверь закрыта gives a state; дверь закрывается a process or repetition.",
        "ru": "Здесь строят не обязательно относится к известной группе они: исполнитель не определён. Безличное мне не спится не описывает добровольное действие. Дверь закрыта — состояние, дверь закрывается — процесс или повторение."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ვერ ვიძინებ.",
            "en": "Complete the sentence to express: I cannot get to sleep.",
            "ru": "Заполните предложение со значением: ვერ ვიძინებ."
          },
          "sentence": "____ не спится.",
          "answer": "Мне",
          "options": [
            "Мне",
            "Я",
            "Меня"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: აქ სახლს აშენებენ.",
            "en": "Complete the sentence to express: They are building a house here.",
            "ru": "Заполните предложение со значением: აქ სახლს აშენებენ."
          },
          "sentence": "Здесь ____ дом.",
          "answer": "строят",
          "options": [
            "строят",
            "строит",
            "строишь"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: კარი დაკეტილია.",
            "en": "Complete the sentence to express: The door is closed.",
            "ru": "Заполните предложение со значением: კარი დაკეტილია."
          },
          "sentence": "Дверь ____.",
          "answer": "закрыта",
          "options": [
            "закрыта",
            "закрыт",
            "закрыто"
          ]
        },
        {
          "id": "grammar-ru-b2-5-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ვერ ვიძინებ.",
            "en": "Complete a different part of the sentence. Intended meaning: I cannot get to sleep.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I cannot get to sleep."
          },
          "sentence": "Мне не ____.",
          "answer": "спится",
          "options": [
            "спится",
            "спитсю",
            "спитсе"
          ]
        },
        {
          "id": "grammar-ru-b2-5-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ვერ ვიძინებ.",
            "en": "Choose the complete sentence expressing: I cannot get to sleep.",
            "ru": "Выберите полное предложение со значением: I cannot get to sleep."
          },
          "sentence": "____",
          "answer": "Мне не спится.",
          "options": [
            "Мне не спится.",
            "Я не спится.",
            "Меня не спится."
          ]
        },
        {
          "id": "grammar-ru-b2-5-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ვერ ვიძინებ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I cannot get to sleep.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I cannot get to sleep."
          },
          "sentence": "Я не спится. → ____",
          "answer": "Мне не спится.",
          "options": [
            "Мне не спится.",
            "Меня не спится.",
            "Я не спится."
          ]
        },
        {
          "id": "grammar-ru-b2-5-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: აქ სახლს აშენებენ.",
            "en": "Complete a different part of the sentence. Intended meaning: They are building a house here.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: They are building a house here."
          },
          "sentence": "Здесь строят ____.",
          "answer": "дом",
          "options": [
            "дом",
            "дома",
            "дому"
          ]
        },
        {
          "id": "grammar-ru-b2-5-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: აქ სახლს აშენებენ.",
            "en": "Choose the complete sentence expressing: They are building a house here.",
            "ru": "Выберите полное предложение со значением: They are building a house here."
          },
          "sentence": "____",
          "answer": "Здесь строят дом.",
          "options": [
            "Здесь строят дом.",
            "Здесь строит дом.",
            "Здесь строишь дом."
          ]
        },
        {
          "id": "grammar-ru-b2-5-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: აქ სახლს აშენებენ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: They are building a house here.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: They are building a house here."
          },
          "sentence": "Здесь строит дом. → ____",
          "answer": "Здесь строят дом.",
          "options": [
            "Здесь строят дом.",
            "Здесь строишь дом.",
            "Здесь строит дом."
          ]
        },
        {
          "id": "grammar-ru-b2-5-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: კარი დაკეტილია.",
            "en": "Complete a different part of the sentence. Intended meaning: The door is closed.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: The door is closed."
          },
          "sentence": "____ закрыта.",
          "answer": "Дверь",
          "options": [
            "Дверь",
            "Дверьа",
            "Дверьу"
          ]
        },
        {
          "id": "grammar-ru-b2-5-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: კარი დაკეტილია.",
            "en": "Choose the complete sentence expressing: The door is closed.",
            "ru": "Выберите полное предложение со значением: The door is closed."
          },
          "sentence": "____",
          "answer": "Дверь закрыта.",
          "options": [
            "Дверь закрыта.",
            "Дверь закрыт.",
            "Дверь закрыто."
          ]
        },
        {
          "id": "grammar-ru-b2-5-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: კარი დაკეტილია.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: The door is closed.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: The door is closed."
          },
          "sentence": "Дверь закрыт. → ____",
          "answer": "Дверь закрыта.",
          "options": [
            "Дверь закрыта.",
            "Дверь закрыто.",
            "Дверь закрыт."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-6",
      "level": "B2",
      "title": {
        "ka": "რაოდენობა და დრო ბრუნვებში",
        "en": "Numbers and time in cases",
        "ru": "Числительные и время в падежах"
      },
      "explanation": {
        "ka": "წინდებული რიცხვსა და სახელსაც ბრუნვაში ცვლის: к двум часам, после пяти часов. დროის ხანგრძლივობა შეიძლება წინდებულის გარეშე იყოს: два часа. до двух часов ნათესაობითია, к двум часам კი მიცემითი; წინდებულები შემთხვევით არ იცვლება. ორი საათის განმავლობაში = два часа. კავშირი времяთან именительный ორი ხშირად არაა საკმარისი: к два часа არასწორია.",
        "en": "A preposition changes both number and noun: к двум часам, после пяти часов. Duration can appear without a preposition: два часа. До двух часов uses genitive; к двум часам uses dative, and the prepositions are not interchangeable. For a two-hour duration use два часа. Bare nominative two is insufficient after к: к два часа is incorrect.",
        "ru": "Предлог изменяет и числительное, и существительное: к двум часам, после пяти часов. Длительность может выражаться без предлога: два часа. До двух часов требует родительного, к двум часам — дательного; предлоги не взаимозаменяемы. Длительность в два часа выражается два часа. После к исходной формы мало: к два часа неверно."
      },
      "rules": [
        {
          "form": "к двум часам",
          "detail": {
            "ka": "წინდებული რიცხვსა და სახელსაც ბრუნვაში ცვლის: к двум часам, после пяти часов. შეადარე მაგალითს: Я приеду к двум часам. — ორი საათისთვის ჩამოვალ.",
            "en": "A preposition changes both number and noun: к двум часам, после пяти часов. Compare the example: Я приеду к двум часам. — I will arrive by two o’clock.",
            "ru": "Предлог изменяет и числительное, и существительное: к двум часам, после пяти часов. Сравните с примером: Я приеду к двум часам. — Я приеду к двум часам."
          }
        },
        {
          "form": "после пяти часов",
          "detail": {
            "ka": "დროის ხანგრძლივობა შეიძლება წინდებულის გარეშე იყოს: два часа. შეადარე მაგალითს: Мы встретимся после пяти часов. — ხუთი საათის შემდეგ შევხვდებით.",
            "en": "Duration can appear without a preposition: два часа. Compare the example: Мы встретимся после пяти часов. — We will meet after five o’clock.",
            "ru": "Длительность может выражаться без предлога: два часа. Сравните с примером: Мы встретимся после пяти часов. — Мы встретимся после пяти часов."
          }
        },
        {
          "form": "ждал два часа",
          "detail": {
            "ka": "до двух часов ნათესაობითია, к двум часам კი მიცემითი; წინდებულები შემთხვევით არ იცვლება. შეადარე მაგალითს: Он ждал два часа. — ის ორი საათი ელოდებოდა.",
            "en": "До двух часов uses genitive; к двум часам uses dative, and the prepositions are not interchangeable. Compare the example: Он ждал два часа. — He waited for two hours.",
            "ru": "До двух часов требует родительного, к двум часам — дательного; предлоги не взаимозаменяемы. Сравните с примером: Он ждал два часа. — Он ждал два часа."
          }
        }
      ],
      "examples": [
        {
          "en": "I will arrive by two o’clock.",
          "ru": "Я приеду к двум часам.",
          "ka": "ორი საათისთვის ჩამოვალ."
        },
        {
          "en": "We will meet after five o’clock.",
          "ru": "Мы встретимся после пяти часов.",
          "ka": "ხუთი საათის შემდეგ შევხვდებით."
        },
        {
          "en": "He waited for two hours.",
          "ru": "Он ждал два часа.",
          "ka": "ის ორი საათი ელოდებოდა."
        }
      ],
      "pitfalls": {
        "ka": "до двух часов ნათესაობითია, к двум часам კი მიცემითი; წინდებულები შემთხვევით არ იცვლება. ორი საათის განმავლობაში = два часа. კავშირი времяთან именительный ორი ხშირად არაა საკმარისი: к два часа არასწორია.",
        "en": "До двух часов uses genitive; к двум часам uses dative, and the prepositions are not interchangeable. For a two-hour duration use два часа. Bare nominative two is insufficient after к: к два часа is incorrect.",
        "ru": "До двух часов требует родительного, к двум часам — дательного; предлоги не взаимозаменяемы. Длительность в два часа выражается два часа. После к исходной формы мало: к два часа неверно."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ორი საათისთვის ჩამოვალ.",
            "en": "Complete the sentence to express: I will arrive by two o’clock.",
            "ru": "Заполните предложение со значением: ორი საათისთვის ჩამოვალ."
          },
          "sentence": "Я приеду к ____ часам.",
          "answer": "двум",
          "options": [
            "двум",
            "два",
            "двух"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ხუთი საათის შემდეგ შევხვდებით.",
            "en": "Complete the sentence to express: We will meet after five o’clock.",
            "ru": "Заполните предложение со значением: ხუთი საათის შემდეგ შევხვდებით."
          },
          "sentence": "Мы встретимся после ____ часов.",
          "answer": "пяти",
          "options": [
            "пяти",
            "пять",
            "пятью"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ის ორი საათი ელოდებოდა.",
            "en": "Complete the sentence to express: He waited for two hours.",
            "ru": "Заполните предложение со значением: ის ორი საათი ელოდებოდა."
          },
          "sentence": "Он ждал два ____.",
          "answer": "часа",
          "options": [
            "часа",
            "часов",
            "часам"
          ]
        },
        {
          "id": "grammar-ru-b2-6-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ორი საათისთვის ჩამოვალ.",
            "en": "Complete a different part of the sentence. Intended meaning: I will arrive by two o’clock.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: I will arrive by two o’clock."
          },
          "sentence": "____ приеду к двум часам.",
          "answer": "Я",
          "options": [
            "Я",
            "Меня",
            "Мне"
          ]
        },
        {
          "id": "grammar-ru-b2-6-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ორი საათისთვის ჩამოვალ.",
            "en": "Choose the complete sentence expressing: I will arrive by two o’clock.",
            "ru": "Выберите полное предложение со значением: I will arrive by two o’clock."
          },
          "sentence": "____",
          "answer": "Я приеду к двум часам.",
          "options": [
            "Я приеду к двум часам.",
            "Я приеду к два часам.",
            "Я приеду к двух часам."
          ]
        },
        {
          "id": "grammar-ru-b2-6-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ორი საათისთვის ჩამოვალ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: I will arrive by two o’clock.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: I will arrive by two o’clock."
          },
          "sentence": "Я приеду к два часам. → ____",
          "answer": "Я приеду к двум часам.",
          "options": [
            "Я приеду к двум часам.",
            "Я приеду к двух часам.",
            "Я приеду к два часам."
          ]
        },
        {
          "id": "grammar-ru-b2-6-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ხუთი საათის შემდეგ შევხვდებით.",
            "en": "Complete a different part of the sentence. Intended meaning: We will meet after five o’clock.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: We will meet after five o’clock."
          },
          "sentence": "____ встретимся после пяти часов.",
          "answer": "Мы",
          "options": [
            "Мы",
            "Нас",
            "Нам"
          ]
        },
        {
          "id": "grammar-ru-b2-6-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ხუთი საათის შემდეგ შევხვდებით.",
            "en": "Choose the complete sentence expressing: We will meet after five o’clock.",
            "ru": "Выберите полное предложение со значением: We will meet after five o’clock."
          },
          "sentence": "____",
          "answer": "Мы встретимся после пяти часов.",
          "options": [
            "Мы встретимся после пяти часов.",
            "Мы встретимся после пять часов.",
            "Мы встретимся после пятью часов."
          ]
        },
        {
          "id": "grammar-ru-b2-6-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ხუთი საათის შემდეგ შევხვდებით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: We will meet after five o’clock.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: We will meet after five o’clock."
          },
          "sentence": "Мы встретимся после пять часов. → ____",
          "answer": "Мы встретимся после пяти часов.",
          "options": [
            "Мы встретимся после пяти часов.",
            "Мы встретимся после пятью часов.",
            "Мы встретимся после пять часов."
          ]
        },
        {
          "id": "grammar-ru-b2-6-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ის ორი საათი ელოდებოდა.",
            "en": "Complete a different part of the sentence. Intended meaning: He waited for two hours.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: He waited for two hours."
          },
          "sentence": "____ ждал два часа.",
          "answer": "Он",
          "options": [
            "Он",
            "Его",
            "Ему"
          ]
        },
        {
          "id": "grammar-ru-b2-6-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ის ორი საათი ელოდებოდა.",
            "en": "Choose the complete sentence expressing: He waited for two hours.",
            "ru": "Выберите полное предложение со значением: He waited for two hours."
          },
          "sentence": "____",
          "answer": "Он ждал два часа.",
          "options": [
            "Он ждал два часа.",
            "Он ждал два часов.",
            "Он ждал два часам."
          ]
        },
        {
          "id": "grammar-ru-b2-6-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ის ორი საათი ელოდებოდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: He waited for two hours.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: He waited for two hours."
          },
          "sentence": "Он ждал два часов. → ____",
          "answer": "Он ждал два часа.",
          "options": [
            "Он ждал два часа.",
            "Он ждал два часам.",
            "Он ждал два часов."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-7",
      "level": "B2",
      "title": {
        "ka": "რთული კავშირები და არგუმენტი",
        "en": "Complex connectors and arguments",
        "ru": "Сложные союзы и аргументация"
      },
      "explanation": {
        "ka": "несмотря на + სახელი მოითხოვს ბრალდებითს; несмотря на то что-ს წინადადება მოსდევს. благодаря — მიცემითთანაა, из-за — ნათესაობითთან. благодаря სასურველი მიზეზისათვის ტიპურია, из-за ხშირად უარყოფით შედეგთან გვხვდება. несмотря წინდებული ამ მოდელში შეერთებით იწერება. несмотря на დახმარებითი ჯგუფია, ამიტომ სრული წინადადებისას то что დაამატე.",
        "en": "Несмотря на + noun takes accusative; несмотря на то что introduces a clause. Благодаря takes dative, из-за genitive. Благодаря is typical for a favourable cause; из-за often introduces an unfavourable result. The preposition несмотря is written together here. A full concessive clause needs несмотря на то что rather than just несмотря на.",
        "ru": "Несмотря на + существительное требует винительного; несмотря на то что вводит предложение. Благодаря употребляется с дательным, из-за — с родительным. Благодаря типично для благоприятной причины, из-за — часто для отрицательного результата. Предлог несмотря здесь пишется слитно. Полное уступительное предложение требует несмотря на то что, не просто несмотря на."
      },
      "rules": [
        {
          "form": "несмотря на дождь",
          "detail": {
            "ka": "несмотря на + სახელი მოითხოვს ბრალდებითს; несмотря на то что-ს წინადადება მოსდევს. შეადარე მაგალითს: Несмотря на дождь, мы ушли. — წვიმის მიუხედავად წავედით.",
            "en": "Несмотря на + noun takes accusative; несмотря на то что introduces a clause. Compare the example: Несмотря на дождь, мы ушли. — Despite the rain, we left.",
            "ru": "Несмотря на + существительное требует винительного; несмотря на то что вводит предложение. Сравните с примером: Несмотря на дождь, мы ушли. — Несмотря на дождь, мы ушли."
          }
        },
        {
          "form": "несмотря на то что шёл дождь",
          "detail": {
            "ka": "благодаря — მიცემითთანაა, из-за — ნათესაობითთან. შეადარე მაგალითს: Благодаря помощи мы закончили. — დახმარების წყალობით დავასრულეთ.",
            "en": "Благодаря takes dative, из-за genitive. Compare the example: Благодаря помощи мы закончили. — Thanks to help, we finished.",
            "ru": "Благодаря употребляется с дательным, из-за — с родительным. Сравните с примером: Благодаря помощи мы закончили. — Благодаря помощи мы закончили."
          }
        },
        {
          "form": "благодаря помощи / из-за ошибки",
          "detail": {
            "ka": "благодаря სასურველი მიზეზისათვის ტიპურია, из-за ხშირად უარყოფით შედეგთან გვხვდება. შეადარე მაგალითს: Из-за ошибки мы опоздали. — შეცდომის გამო დავაგვიანეთ.",
            "en": "Благодаря is typical for a favourable cause; из-за often introduces an unfavourable result. Compare the example: Из-за ошибки мы опоздали. — Because of an error, we were late.",
            "ru": "Благодаря типично для благоприятной причины, из-за — часто для отрицательного результата. Сравните с примером: Из-за ошибки мы опоздали. — Из-за ошибки мы опоздали."
          }
        }
      ],
      "examples": [
        {
          "en": "Despite the rain, we left.",
          "ru": "Несмотря на дождь, мы ушли.",
          "ka": "წვიმის მიუხედავად წავედით."
        },
        {
          "en": "Thanks to help, we finished.",
          "ru": "Благодаря помощи мы закончили.",
          "ka": "დახმარების წყალობით დავასრულეთ."
        },
        {
          "en": "Because of an error, we were late.",
          "ru": "Из-за ошибки мы опоздали.",
          "ka": "შეცდომის გამო დავაგვიანეთ."
        }
      ],
      "pitfalls": {
        "ka": "благодаря სასურველი მიზეზისათვის ტიპურია, из-за ხშირად უარყოფით შედეგთან გვხვდება. несмотря წინდებული ამ მოდელში შეერთებით იწერება. несмотря на დახმარებითი ჯგუფია, ამიტომ სრული წინადადებისას то что დაამატე.",
        "en": "Благодаря is typical for a favourable cause; из-за often introduces an unfavourable result. The preposition несмотря is written together here. A full concessive clause needs несмотря на то что rather than just несмотря на.",
        "ru": "Благодаря типично для благоприятной причины, из-за — часто для отрицательного результата. Предлог несмотря здесь пишется слитно. Полное уступительное предложение требует несмотря на то что, не просто несмотря на."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წვიმის მიუხედავად წავედით.",
            "en": "Complete the sentence to express: Despite the rain, we left.",
            "ru": "Заполните предложение со значением: წვიმის მიუხედავად წავედით."
          },
          "sentence": "Несмотря на ____, мы ушли.",
          "answer": "дождь",
          "options": [
            "дождь",
            "дождя",
            "дождём"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: დახმარების წყალობით დავასრულეთ.",
            "en": "Complete the sentence to express: Thanks to help, we finished.",
            "ru": "Заполните предложение со значением: დახმარების წყალობით დავასრულეთ."
          },
          "sentence": "Благодаря ____ мы закончили.",
          "answer": "помощи",
          "options": [
            "помощи",
            "помощь",
            "помощью"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: შეცდომის გამო დავაგვიანეთ.",
            "en": "Complete the sentence to express: Because of an error, we were late.",
            "ru": "Заполните предложение со значением: შეცდომის გამო დავაგვიანეთ."
          },
          "sentence": "Из-за ____ мы опоздали.",
          "answer": "ошибки",
          "options": [
            "ошибки",
            "ошибку",
            "ошибкой"
          ]
        },
        {
          "id": "grammar-ru-b2-7-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წვიმის მიუხედავად წავედით.",
            "en": "Complete a different part of the sentence. Intended meaning: Despite the rain, we left.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Despite the rain, we left."
          },
          "sentence": "Несмотря ____ дождь, мы ушли.",
          "answer": "на",
          "options": [
            "на",
            "в",
            "из"
          ]
        },
        {
          "id": "grammar-ru-b2-7-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წვიმის მიუხედავად წავედით.",
            "en": "Choose the complete sentence expressing: Despite the rain, we left.",
            "ru": "Выберите полное предложение со значением: Despite the rain, we left."
          },
          "sentence": "____",
          "answer": "Несмотря на дождь, мы ушли.",
          "options": [
            "Несмотря на дождь, мы ушли.",
            "Несмотря на дождя, мы ушли.",
            "Несмотря на дождём, мы ушли."
          ]
        },
        {
          "id": "grammar-ru-b2-7-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წვიმის მიუხედავად წავედით.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Despite the rain, we left.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Despite the rain, we left."
          },
          "sentence": "Несмотря на дождя, мы ушли. → ____",
          "answer": "Несмотря на дождь, мы ушли.",
          "options": [
            "Несмотря на дождь, мы ушли.",
            "Несмотря на дождём, мы ушли.",
            "Несмотря на дождя, мы ушли."
          ]
        },
        {
          "id": "grammar-ru-b2-7-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: დახმარების წყალობით დავასრულეთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Thanks to help, we finished.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Thanks to help, we finished."
          },
          "sentence": "____ помощи мы закончили.",
          "answer": "Благодаря",
          "options": [
            "Благодаря",
            "Благодарю",
            "Благодаре"
          ]
        },
        {
          "id": "grammar-ru-b2-7-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: დახმარების წყალობით დავასრულეთ.",
            "en": "Choose the complete sentence expressing: Thanks to help, we finished.",
            "ru": "Выберите полное предложение со значением: Thanks to help, we finished."
          },
          "sentence": "____",
          "answer": "Благодаря помощи мы закончили.",
          "options": [
            "Благодаря помощи мы закончили.",
            "Благодаря помощь мы закончили.",
            "Благодаря помощью мы закончили."
          ]
        },
        {
          "id": "grammar-ru-b2-7-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: დახმარების წყალობით დავასრულეთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Thanks to help, we finished.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Thanks to help, we finished."
          },
          "sentence": "Благодаря помощь мы закончили. → ____",
          "answer": "Благодаря помощи мы закончили.",
          "options": [
            "Благодаря помощи мы закончили.",
            "Благодаря помощью мы закончили.",
            "Благодаря помощь мы закончили."
          ]
        },
        {
          "id": "grammar-ru-b2-7-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: შეცდომის გამო დავაგვიანეთ.",
            "en": "Complete a different part of the sentence. Intended meaning: Because of an error, we were late.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Because of an error, we were late."
          },
          "sentence": "Из-____ ошибки мы опоздали.",
          "answer": "за",
          "options": [
            "за",
            "зу",
            "зе"
          ]
        },
        {
          "id": "grammar-ru-b2-7-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: შეცდომის გამო დავაგვიანეთ.",
            "en": "Choose the complete sentence expressing: Because of an error, we were late.",
            "ru": "Выберите полное предложение со значением: Because of an error, we were late."
          },
          "sentence": "____",
          "answer": "Из-за ошибки мы опоздали.",
          "options": [
            "Из-за ошибки мы опоздали.",
            "Из-за ошибку мы опоздали.",
            "Из-за ошибкой мы опоздали."
          ]
        },
        {
          "id": "grammar-ru-b2-7-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: შეცდომის გამო დავაგვიანეთ.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Because of an error, we were late.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Because of an error, we were late."
          },
          "sentence": "Из-за ошибку мы опоздали. → ____",
          "answer": "Из-за ошибки мы опоздали.",
          "options": [
            "Из-за ошибки мы опоздали.",
            "Из-за ошибкой мы опоздали.",
            "Из-за ошибку мы опоздали."
          ]
        }
      ]
    },
    {
      "id": "grammar-ru-b2-8",
      "level": "B2",
      "title": {
        "ka": "სიტყვების რიგი და აზრობრივი აქცენტი",
        "en": "Word order and information focus",
        "ru": "Порядок слов и смысловое ударение"
      },
      "explanation": {
        "ka": "რუსულში სიტყვების რიგი მოქნილია, მაგრამ ბრუნვა და შეთანხმება მაინც სავალდებულოა. ახალი ინფორმაცია ხშირად ბოლოშია; именно, даже და только აქცენტს ცვლის. დამატების წინ წამოწევა მას ქვემდებარედ არ აქცევს: Книгу читает Анна-ში Анна მაინც მკითხველია. მხოლოდ განლაგებით ბრუნვის შეცვლა არ შეიძლება. ლოგიკური მახვილი ტექსტში ნაწილაკითაც გამოკვეთე, რათა სასურველი აზრი ნათელი დარჩეს.",
        "en": "Russian word order is flexible, but case and agreement remain essential. New information often comes last; именно, даже and только shift the focus. Fronting an object does not turn it into a subject: in Книгу читает Анна, Ana is still the reader. Word order alone does not license changing case. A focus particle can make the intended written meaning clearer.",
        "ru": "Русский порядок слов гибкий, но падеж и согласование обязательны. Новая информация часто стоит в конце; именно, даже и только меняют смысловой акцент. Вынос дополнения вперёд не делает его подлежащим: в Книгу читает Анна читает всё ещё Анна. Порядок слов сам по себе не позволяет менять падеж. Частица может яснее обозначить нужный письменный акцент."
      },
      "rules": [
        {
          "form": "Анна читает книгу.",
          "detail": {
            "ka": "რუსულში სიტყვების რიგი მოქნილია, მაგრამ ბრუნვა და შეთანხმება მაინც სავალდებულოა. შეადარე მაგალითს: Книгу читает Анна. — წიგნს სწორედ ანა კითხულობს.",
            "en": "Russian word order is flexible, but case and agreement remain essential. Compare the example: Книгу читает Анна. — It is Ana who is reading the book.",
            "ru": "Русский порядок слов гибкий, но падеж и согласование обязательны. Сравните с примером: Книгу читает Анна. — Книгу читает Анна."
          }
        },
        {
          "form": "Книгу читает Анна.",
          "detail": {
            "ka": "ახალი ინფორმაცია ხშირად ბოლოშია; именно, даже და только აქცენტს ცვლის. შეადარე მაგალითს: Только Анна пришла. — მხოლოდ ანა მოვიდა.",
            "en": "New information often comes last; именно, даже and только shift the focus. Compare the example: Только Анна пришла. — Only Ana came.",
            "ru": "Новая информация часто стоит в конце; именно, даже и только меняют смысловой акцент. Сравните с примером: Только Анна пришла. — Только Анна пришла."
          }
        },
        {
          "form": "Именно Анна / только Анна / даже Анна",
          "detail": {
            "ka": "დამატების წინ წამოწევა მას ქვემდებარედ არ აქცევს: Книгу читает Анна-ში Анна მაინც მკითხველია. შეადარე მაგალითს: Даже Анна поняла. — ანამაც კი გაიგო.",
            "en": "Fronting an object does not turn it into a subject: in Книгу читает Анна, Ana is still the reader. Compare the example: Даже Анна поняла. — Even Ana understood.",
            "ru": "Вынос дополнения вперёд не делает его подлежащим: в Книгу читает Анна читает всё ещё Анна. Сравните с примером: Даже Анна поняла. — Даже Анна поняла."
          }
        }
      ],
      "examples": [
        {
          "en": "It is Ana who is reading the book.",
          "ru": "Книгу читает Анна.",
          "ka": "წიგნს სწორედ ანა კითხულობს."
        },
        {
          "en": "Only Ana came.",
          "ru": "Только Анна пришла.",
          "ka": "მხოლოდ ანა მოვიდა."
        },
        {
          "en": "Even Ana understood.",
          "ru": "Даже Анна поняла.",
          "ka": "ანამაც კი გაიგო."
        }
      ],
      "pitfalls": {
        "ka": "დამატების წინ წამოწევა მას ქვემდებარედ არ აქცევს: Книгу читает Анна-ში Анна მაინც მკითხველია. მხოლოდ განლაგებით ბრუნვის შეცვლა არ შეიძლება. ლოგიკური მახვილი ტექსტში ნაწილაკითაც გამოკვეთე, რათა სასურველი აზრი ნათელი დარჩეს.",
        "en": "Fronting an object does not turn it into a subject: in Книгу читает Анна, Ana is still the reader. Word order alone does not license changing case. A focus particle can make the intended written meaning clearer.",
        "ru": "Вынос дополнения вперёд не делает его подлежащим: в Книгу читает Анна читает всё ещё Анна. Порядок слов сам по себе не позволяет менять падеж. Частица может яснее обозначить нужный письменный акцент."
      },
      "quiz": [
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: წიგნს სწორედ ანა კითხულობს.",
            "en": "Complete the sentence to express: It is Ana who is reading the book.",
            "ru": "Заполните предложение со значением: წიგნს სწორედ ანა კითხულობს."
          },
          "sentence": "____ читает Анна.",
          "answer": "Книгу",
          "options": [
            "Книгу",
            "Книга",
            "Книге"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: მხოლოდ ანა მოვიდა.",
            "en": "Complete the sentence to express: Only Ana came.",
            "ru": "Заполните предложение со значением: მხოლოდ ანა მოვიდა."
          },
          "sentence": "____ Анна пришла.",
          "answer": "Только",
          "options": [
            "Только",
            "Потому что",
            "Чтобы"
          ]
        },
        {
          "prompt": {
            "ka": "შეავსე წინადადება ამ მნიშვნელობით: ანამაც კი გაიგო.",
            "en": "Complete the sentence to express: Even Ana understood.",
            "ru": "Заполните предложение со значением: ანამაც კი გაიგო."
          },
          "sentence": "____ Анна поняла.",
          "answer": "Даже",
          "options": [
            "Даже",
            "Если",
            "Хотя"
          ]
        },
        {
          "id": "grammar-ru-b2-8-slot-0",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: წიგნს სწორედ ანა კითხულობს.",
            "en": "Complete a different part of the sentence. Intended meaning: It is Ana who is reading the book.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: It is Ana who is reading the book."
          },
          "sentence": "Книгу читает ____.",
          "answer": "Анна",
          "options": [
            "Анна",
            "Анну",
            "Анне"
          ]
        },
        {
          "id": "grammar-ru-b2-8-meaning-0",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: წიგნს სწორედ ანა კითხულობს.",
            "en": "Choose the complete sentence expressing: It is Ana who is reading the book.",
            "ru": "Выберите полное предложение со значением: It is Ana who is reading the book."
          },
          "sentence": "____",
          "answer": "Книгу читает Анна.",
          "options": [
            "Книгу читает Анна.",
            "Книга читает Анна.",
            "Книге читает Анна."
          ]
        },
        {
          "id": "grammar-ru-b2-8-edit-0",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: წიგნს სწორედ ანა კითხულობს.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: It is Ana who is reading the book.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: It is Ana who is reading the book."
          },
          "sentence": "Книга читает Анна. → ____",
          "answer": "Книгу читает Анна.",
          "options": [
            "Книгу читает Анна.",
            "Книге читает Анна.",
            "Книга читает Анна."
          ]
        },
        {
          "id": "grammar-ru-b2-8-slot-1",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: მხოლოდ ანა მოვიდა.",
            "en": "Complete a different part of the sentence. Intended meaning: Only Ana came.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Only Ana came."
          },
          "sentence": "Только ____ пришла.",
          "answer": "Анна",
          "options": [
            "Анна",
            "Анну",
            "Анне"
          ]
        },
        {
          "id": "grammar-ru-b2-8-meaning-1",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: მხოლოდ ანა მოვიდა.",
            "en": "Choose the complete sentence expressing: Only Ana came.",
            "ru": "Выберите полное предложение со значением: Only Ana came."
          },
          "sentence": "____",
          "answer": "Только Анна пришла.",
          "options": [
            "Только Анна пришла.",
            "Потому что Анна пришла.",
            "Чтобы Анна пришла."
          ]
        },
        {
          "id": "grammar-ru-b2-8-edit-1",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: მხოლოდ ანა მოვიდა.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Only Ana came.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Only Ana came."
          },
          "sentence": "Потому что Анна пришла. → ____",
          "answer": "Только Анна пришла.",
          "options": [
            "Только Анна пришла.",
            "Чтобы Анна пришла.",
            "Потому что Анна пришла."
          ]
        },
        {
          "id": "grammar-ru-b2-8-slot-2",
          "kind": "cloze",
          "prompt": {
            "ka": "შეავსე ახალი ადგილი. წინადადების მნიშვნელობა: ანამაც კი გაიგო.",
            "en": "Complete a different part of the sentence. Intended meaning: Even Ana understood.",
            "ru": "Заполните другую часть предложения. Требуемый смысл: Even Ana understood."
          },
          "sentence": "Даже ____ поняла.",
          "answer": "Анна",
          "options": [
            "Анна",
            "Анну",
            "Анне"
          ]
        },
        {
          "id": "grammar-ru-b2-8-meaning-2",
          "kind": "sentence",
          "prompt": {
            "ka": "აირჩიე სრული წინადადება, რომელიც ამ მნიშვნელობას გადმოსცემს: ანამაც კი გაიგო.",
            "en": "Choose the complete sentence expressing: Even Ana understood.",
            "ru": "Выберите полное предложение со значением: Even Ana understood."
          },
          "sentence": "____",
          "answer": "Даже Анна поняла.",
          "options": [
            "Даже Анна поняла.",
            "Если Анна поняла.",
            "Хотя Анна поняла."
          ]
        },
        {
          "id": "grammar-ru-b2-8-edit-2",
          "kind": "editing",
          "prompt": {
            "ka": "შეასწორე მოცემული შეცდომა და აირჩიე სრული სწორი წინადადება. საჭირო მნიშვნელობა: ანამაც კი გაიგო.",
            "en": "Edit the learner error by choosing the complete correct sentence. Intended meaning: Even Ana understood.",
            "ru": "Исправьте ошибку: выберите полное правильное предложение. Требуемый смысл: Even Ana understood."
          },
          "sentence": "Если Анна поняла. → ____",
          "answer": "Даже Анна поняла.",
          "options": [
            "Даже Анна поняла.",
            "Хотя Анна поняла.",
            "Если Анна поняла."
          ]
        }
      ]
    }
  ]
};
