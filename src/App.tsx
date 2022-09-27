import React from 'react';
import {
  DetailsComponent,
  WorksComponent,
  LanguagesComponent,
  SkilComponent,
  ProjectsComponent,
} from './components';
import { IData } from './types';

const data: IData = {
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
const App: React.FC = () => {
  // <script>
  //     const openBtn = document.getElementById("JS_OPEN_MODAL");
  //     const closeBtn = document.getElementById("JS_CLOSE_MODAL");
  //     const modalWrap = document.getElementById("JS_MODAL");

  //     const toggleModal = () => {
  //         modalWrap.classList.toggle("open-modal");
  //     };

  //     openBtn.onclick = toggleModal;
  //     closeBtn.onclick = toggleModal;
  // </script>

  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="photo">
            <img src="/img/./new pic.jpg" alt="new pic.jpg" />
          </div>
          <DetailsComponent title={data.details.title} list={data.details.list} />

          {data.skils.map(({ title, list }) => {
            return <SkilComponent key={title} title={title} list={list} />;
          })}
        </section>
        <section className="content">
          <h1 className="name">IRYNA HAMOUM</h1>
          <ul className="programmer">
            <i>PROGRAMMER</i>
          </ul>
          <p className="description">
            I am only a beginner with creative thinking and inexaustible desire to learn. Very
            patient and attentive to details. Emotionally intelligent and empathetic for others.
            Currently I am looking for a role in small team where i can grow and continue to learn
            from other experienced team members. My career objective is to graduate of computer
            science with experience working across full-stack of software development.
          </p>

          <ProjectsComponent title={data.projects.title} list={data.projects.list} />
          <WorksComponent title={data.works.title} list={data.works.list} />
          <LanguagesComponent title={data.languages.title} list={data.languages.list} />
        </section>
      </main>
    </div>
  );
};

export default App;
