import { IData } from '../types';

const data: IData = {
  name: 'IRIS IRIS',
  programmer: 'PROGRAMMER',
  description:
    'Experience in developing Web applications in JavaScript/ HTML / CSS. Have development experience using React.js and Node.js. I have good analytical skills.Attentive to details, target-orientated and self-motivated, self-disciplinated, like teamwork, have a good amount of creativity and willingness to look at things from unusual angle. I am fluent in English, written and spoken. Very patient. Emotionally intelligent and empathetic for others. My pursuit is continuous development. Currently I am looking for a role in small team where i can grow and continue to learn from other experienced team members. My career objective is to graduate in computer science and widen my experience working across full-stack of software development.',
  img: '/img/./new pic.jpg',

  details: {
    title: 'DETAILS',
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
    title: 'Work experiense:',
    list: [
      {
        id: '1',
        position: 'Front-End Developer',
        organisation: 'Freelance',
        period: 'September 2022 - up to NOW',
        country: 'Spain',
        responsabilities: [
          'Creating Websites',
          'Adding new functionality to websites.',
          ' Adding design elements to Websites.',
          'Participating in the development of an applications for shools, restaurants and Cafeterias.',
        ],
      },
      {
        id: '2',
        position: 'Translator',
        organisation: 'Design ID Korea',
        period: 'June 2018 - up to NOW',
        country: 'Spain',
        responsabilities: [
          'Attending Conference calls and business-meetings, providing English-russian and English-Ukrainian translation.',
          'English-Russian and English-Ukrainian translation of Contracts and Emails.',
        ],
      },
      {
        id: '3',
        position: 'Administrator',
        organisation: 'Ekvator solarium studio',
        period: 'February 2013 - July 2013',
        country: 'Ukraine',
        responsabilities: [
          'Management and maintanence of solarium and sauna.',
          'Reception of clients and attending the custumers needs.',
          'Finantial responsability of money received.',
          'Celling and marketing cosmetic goods.',
        ],
      },
    ],
  },
  education: {
    title: 'Education:',
    list: [
      {
        id: '1',
        institution: 'Collage of National University of Technology & Design.',
        faculty: 'Hairdressing and decorative cosmetics.',
        period: 'September 2006 - June 2009',
        country: 'Ukraine',
      },
    ],
  },
  languages: {
    title: 'Languages:',
    list: ['English', 'Ukrainian', 'russian'],
  },
  skils: [
    { title: 'Hard skils:', list: ['html', 'css', 'js', 'React'] },
    { title: 'Soft skils:', list: ['Agile', 'Scrum'] },
  ],
  projects: {
    title: 'PROJECTS:',
    list: [
      {
        id: '1',
        name: 'Resume',
        link: 'www.google.com',
      },
    ],
  },
};

export default data;
