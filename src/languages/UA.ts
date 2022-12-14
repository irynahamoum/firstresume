import { IData } from '../types';

const data: IData = {
  name: 'ІРИНА ХАМОУМ',
  programmer: 'Інтерфейсний розробник ',
  description:
    'Досвід розробки веб-додатків на JavaScript/HTML/CSS. Мати досвід розробки з використанням React.js і Node.js. Маю добрі аналітичні здібності. Уважна до деталей, цілеспрямована і самовмотивована, самодисциплінована, люблю працювати в команді, маю велику кількість креативності та бажання дивитися на речі з незвичайного боку. Вільно володію англійською, письмовою та усною. Дуже терпляча. Емоційно розумна і чуйна до інших. Моє прагнення - постійний розвиток. Наразі я шукаю роботу в невеликій команді, де я зможу розвиватися та продовжувати вчитися в інших досвідчених членів команди. Моя кар’єрна мета — отримати диплом з інформатики та розширити мій досвід, працюючи над розробкою програмного забезпечення.',
  img: '/img/./new pic.jpg',

  details: {
    title: 'Контактні дані',
    list: [
      {
        id: '1',
        lable: '03730 Javea Alicante',
      },
      {
        id: '2',
        lable: 'iryna.hamoum@hotmail.com',
        link: 'mailto:iryna.hamoum@hotmail.com',
      },
      {
        id: '3',
        lable: '+34656312174',
        link: 'tel:+34656312174',
      },
    ],
  },
  works: {
    title: 'Досвід роботи:',
    list: [
      {
        id: '1',
        position: 'Інтерфейсний розробник',
        organisation: 'Freelance',
        period: 'Вересень 2022 - До сьогодення',
        country: 'Іспанія',
        responsabilities: [
          'Створення сайтів.',
          'Додавання нових функцій на веб-сайти.',
          'Додавання елементів дизайну на сайти.',
          'Участь у розробці додатків для шкіл, ресторанів та кафетерій.',
        ],
      },
      {
        id: '2',
        position: 'Перекладач',
        organisation: 'Design ID Korea',
        period: 'Червень 2018 - До сьогодення',
        country: 'Іспанія',
        responsabilities: [
          'Участь у конференц-дзвінках та бізнес-зустрічах, надання англо-російського та англо-українського перекладу.',
          'Англо-російський та англо-український переклад контрактів та електронних листів.',
        ],
      },
      {
        id: '3',
        position: 'Адміністратор ',
        organisation: 'Студія соляріїв «Екватор» ',
        period: ' Листопад 2013 - Липень 2013',
        country: 'Київ, Україна',
        responsabilities: [
          'Керування та обслуговування солярію та сауни.',
          'Прийом клієнтів та обслуговування потреб клієнтів.',
          'Фінансова відповідальність отриманих грошей.',
          'Покриття та маркетинг косметичних товарів.',
        ],
      },
    ],
  },
  education: {
    title: 'Освіта:',
    list: [
      {
        id: '1',
        institution: 'Коледж Київського Національного Університету Технологій та Дизайну',
        faculty: 'Перукарське мистецтво і декоративна косметика',
        period: 'Вересень 2006 - Червень 2009',
        country: 'Київ, Україна',
      },
    ],
  },
  languages: {
    title: 'Мови',
    list: ['English', 'Українська', 'Русский'],
  },
  skils: [
    { title: 'Технічні навички', list: ['html', 'css', 'js', 'React'] },
    { title: 'Соціальні навички:', list: ['Agile', 'Scrum'] },
  ],
  projects: {
    title: 'Проекти:',
    list: [
      {
        id: '1',
        name: 'Резюме',
        link: 'www.google.com',
      },
    ],
  },
};

export default data;
