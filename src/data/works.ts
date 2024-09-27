import type { Locales } from 'localization';

interface Place {
  title: string;
  partTime?: true;
  company: Locales | string;
  dates: string | Locales;
  address: Locales;
  duties: Locales[];
  tools: string[];
  description?: Locales;
}

const works: Place[] = [
  {
    title: 'Junior Front End Developer',
    company: 'RAISILHOZENERGO',
    dates: {
      en: 'Jun. 2021 – present',
      ru: 'Июн. 2021 – по сей день',
      uk: 'Чер. 2021 – по цей день'
    },
    address: { en: 'Tatarbunary, Bilhorod-Dnistrovskiy district, Odesa region, Ukraine ' },
    duties: [
      {
        en: 'Building visual elements: create the visual components of a page, such as buttons, menus, forms, and layout',
        ru: 'Создание визуальных элементов, создание визуальных компонентов страницы, такие как кнопки, меню, формы и макет',
        uk: 'Побудова візуальних елементів, створення візуальних компонентів сторінки, такі як кнопки, меню, форми та макет'
      },
      {
        en: 'Writing clean, maintainable, and efficient code',
        ru: 'Написание чистого, поддерживаемого и эффективного кода',
        uk: 'Написання чистого, підтримуваного та ефективного коду'
      },
      {
        en: 'Improving website performance by optimizing assets (images, scripts, etc.) and minimizing load times',
        ru: 'Улучшение производительности сайта путем оптимизации ресурсов (изображений, скриптов и т. д.) и минимизации времени загрузки',
        uk: 'Покращення продуктивності сайту шляхом оптимізації ресурсів (зображень, скриптів тощо) та мінімізації часу завантаження'
      },
      {
        en: 'Using version control systems (e.g., Git) to manage code changes and collaborate with team members',
        ru: 'Использование систем контроля версий (Git) для управления изменениями кода и совместной работы с членами команды',
        uk: 'Використання систем контролю версій (Git) для управління змінами коду та співпраці з членами команди'
      },
      {
        en: 'Working closely with designers, back-end developers, and other stakeholders to ensure a cohesive user experience',
        ru: 'Тесное сотрудничество с дизайнерами, разработчиками на стороне сервера и другими заинтересованными сторонами для обеспечения согласованного пользовательского опыта',
        uk: 'Тісна співпраця з дизайнерами, розробниками на стороні сервера та іншими зацікавленими сторонами для забезпечення узгодженого користувацького досвіду'
      },
      {
        en: 'Identifying and fixing bugs and issues in the front-end code',
        ru: 'Выявление и исправление ошибок и проблем в коде фронтенда',
        uk: 'Виявлення та виправлення помилок і проблем у фронтенд-коді'
      },
      {
        en: 'Staying updated with the latest trends, tools, and technologies in front-end development',
        ru: 'Оставаться в курсе последних тенденций, инструментов и технологий в разработке фронтенда',
        uk: 'Залишатися в курсі останніх тенденцій, інструментів і технологій у фронтенд-розробці'
      },
      {
        en: 'Writing documentation for code and development processes to facilitate team collaboration and future maintenance',
        ru: 'Написание документации для кода и процессов разработки для облегчения командного сотрудничества и будущего обслуживания',
        uk: 'Написання документації для коду та процесів розробки для полегшення командної співпраці та майбутнього обслуговування'
      }
    ],
    tools: ['Node JS, WordPress, TypeScript, JavaScript, React, Redux, Prisma, Next JS, Next Auth, Shad CN'],
  },
  {
    title: 'Gateway Operator',
    company: 'DB Schenker Ltd',
    dates: {
      en: 'Mar. 2019 – present',
      ru: 'Мар. 2019 – по сей день',
      uk: 'Бер. 2019 – по цей день'
    },
    address: { en: 'Schenker House, LHR Portal, Scylla Road, London Heathrow Airport, Hounslow, TW6 3FE, UK ' },
    duties: [
      {
        en: 'Monitor and action generic email boxes and respond in a timely manner',
        ru: 'Мониторинг и работа с электронной почтой',
        uk: 'Моніторинг та робота з електронною поштою'
      },
      {
        en: 'Arrange adhoc bookings from the Branches',
        ru: 'Организация отдельных фрахтов для филиалов',
        uk: 'Організація окремих фрахтів для філій'
      },
      {
        en: 'Arrange adhoc bookings from the Branches and maintenance of montly Permanent Bokings',
        ru: 'Организация отдельных фрахтов для филиалов и обслуживание ежемесячных постоянных бронирований',
        uk: 'Організація окремих фрахтів для філій та обслуговування щомісячних постійних бронювань'
      },
      {
        en: 'Preparation and issuance of all supporting documentation',
        ru: 'Подготовка и выдача всей сопроводительной документации',
        uk: 'Підготовка та видача всієї супровідної документації'
      },
      {
        en: 'Post flights (tracking and tracing)',
        ru: 'Отслеживание рейсов',
        uk: 'Відстеження рейсів'
      }
    ],
    tools: ['Microsoft Office, ProCarS, Sequoia'],
  },
  {
    title: 'Air Export Gateway Agent',
    company: 'EXPEDITORS INTERNATIONAL (UK) LIMITED',
    dates: {
      en: 'Sep. 2018 – Mar. 2019',
      ru: 'Сен. 2018 – Мар. 2019',
      uk: 'Вер. 2018 – Бер. 2019'
    },
    address: { en: '1 Ascot Road Bedfont Middlesex TW14 8QH' },
    duties: [
      {
        en: 'Managing a huge flow of emails and phone calls from origin stations, carriers and handlers',
        ru: 'Обработка огромных потоков электронных писем и телефонных звонков от филиалов, перевозчиков и грузоперерабатывающих предприятий',
        uk: 'Обробка величезних потоків електронних листів і телефонних дзвінків від філій, перевізників і вантажопереробних підприємств'
      },
      {
        en: 'Tracking and tracing of outbound shipments',
        ru: 'Отслеживание исходящих грузовых партий',
        uk: 'Відстеження вихідних вантажних партій'
      },
      {
        en: 'Updating and monitoring of various reports (data entry)',
        ru: 'Обновление и мониторинг различных отчетов (ввод данных)',
        uk: 'Оновлення та моніторинг різних звітів (введення даних)'
      },
      {
        en: 'Processing customs documents in our customs system (data entry)',
        ru: 'Оформление таможенных документов в нашей таможенной системе (ввод данных)',
        uk: 'Оформлення митних документів у нашій митній системі (введення даних)'
      },
      {
        en: 'Planning shipments on ULD’s (Unit Loading Devices)',
        ru: 'Планирование и укрупнение грузовых мест',
        uk: 'Планування та укрупнення вантажних місць'
      },
      {
        en: 'Booking air export shipments with several airlines/carriers',
        ru: 'Бронювання авіаекспортних відправлень у авіакомпаній/перевізників',
        uk: 'Бронирование авиаэкспортных отправлений у авиакомпаний/перевозчиков'
      },
      {
        en: 'Building a network/relations with the carriers and origin stations',
        ru: 'Построение сети/отношений с перевозчиками и грузоотправителями',
        uk: 'Побудова мережі/відносини з перевізниками та вантажовідправниками'
      },
      {
        en: 'Working closely with our colleagues of the export warehouse',
        ru: 'Тесное сотрудничество с нашими коллегами экспортного склада',
        uk: 'Тісно співпрацюємо з нашими колегами з експортного складу'
      }
    ],
    tools: ['Microsoft Office, ETMS'],
  },
  {
    title: 'Warehouse operative – lead hand (as of June 2017)',
    company: 'EXPEDITORS INTERNATIONAL (UK) LIMITED',
    dates: {
      en: 'Apr. 2015 – Aug. 2018',
      ru: 'Апр. 2015 – Авг. 2018',
      uk: 'Кві. 2015 – Сер. 2018'
    },
    address: { en: '1 Ascot Road Bedfont Middlesex TW14 8QH' },
    duties: [
      {
        en: 'ensuring smooth flow of freight transiting through warehouse, including but not limited to booking-in process, screening freight, storing procedures, consolidating shipments for gateway, ULD builds, cross-dock shipments, other duties as assigned',
        ru: 'обеспечение беспрепятственного потока грузов, проходящих через склад, включая, помимо прочего, процесс приемки, досмотр грузов, процедуры хранения, консолидацию грузов для укрупнения грузовых мест, сборку авиаконтейнеров, кросс-докинг, другие обязанности по назначению',
        uk: 'забезпечення безперешкодного потоку вантажів, що проходять через склад, включаючи, окрім іншого, процес приймання, огляд вантажів, процедури зберігання, консолідацію вантажів для укрупнення вантажних місць, збирання авіаконтейнерів, крос-докінг, інші обов\'язки за призначенням'
      }
    ],
    tools: [
      'Сounterbalance Forklift',
      'Reach Truck',
      'Microsoft Office',
      'ETMS',
      'X-Ray Machine',
      'ETD Machine'
    ]
  },
  {
    title: 'Warehouse operative',
    company: 'First Choice Staff',
    dates: {
      en: 'May 2014 – Mar. 2015',
      ru: 'Май 2014 – Мар. 2015',
      uk: 'Тра. 2014 – Бер. 2018'
    },
    address: {
      en: 'Ashford Middlesex'
    },
    duties: [
      {
        en: 'preparing shipments, loading/unloading lorries, labeling, breaking down / building up pallets, other duties as assigned',
        ru: 'подготовка отгрузок, погрузка/разгрузка грузовиков, маркировка, разборка/сборка поддонов, другие обязанности по назначению',
        uk: 'підготовка відправлень, навантаження/розвантаження вантажівок, маркування, розбирання/складання палет, інші обов’язки за призначенням'
      }
    ],
    tools: ['Сounterbalance Forklift', 'Reach Truck'],
  },
  {
    title: 'Security guard',
    company: 'SPORTS FEDERATION OF BODYBUILDING OF THE ODESSA REGION',
    dates: {
      en: 'Jul. 2013 – May 2014',
      ru: 'Июл. 2013 – Май. 2014',
      uk: 'Лип. 2013 – Тра. 2014'
    },
    address: {
      en: '65058, Shevchenko Avenue, Bldg. 31, Odessa Sport Palace, Odessa Ukraine',
      ru: '65058, проспект Шевченко, корп. 31, Одесский Дворец Спорта, Одесса Украина',
      uk: '65058, проспект Шевченка, буд. 31, Одеський Палац Спорту, Одеса Україна'
    },
    duties: [
      {
        en: 'ensuring order in fitness centre and during various sport competition',
        ru: 'обеспечение порядка в фитнес-центре и во время различных спортивных соревнований',
        uk: 'забезпечення порядку у фітнес-центрі та під час різноманітних спортивних змагань'
      }
    ],
    tools: ['Microsoft Office']
  }
];

export default works;
