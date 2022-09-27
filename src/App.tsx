import React from 'react';
import { DetailsComponent, WorksComponent, LanguagesComponent } from './components';
import { IData } from './types';
interface ISkilItem {
  title: string;
  list: string[];
}

const SKILS: ISkilItem[] = [
  { title: 'Hard skils:', list: ['html', 'css', 'js', 'React'] },
  { title: 'Soft skils:', list: ['Agile', 'Scrum'] },
];

const SkilComponent: React.FC<ISkilItem> = ({ title, list }) => {
  return (
    <div className="skils">
      <h3 className="skils-title">{title}</h3>
      <ul className="skils-list">
        {list.map((item) => (
          <li className="skils-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
interface IProject {
  id: string;
  name: string;
  link: string;
}
const PROJECTS: IProject[] = [
  {
    id: '1',
    name: 'Resume',
    link: 'www.google.com',
  },
];

interface IProjectsComponentProps {
  title: string;
  list: IProject[];
}
const ProjectsComponent: React.FC<IProjectsComponentProps> = ({ title, list }) => {
  return (
    <div>
      <h3 className="projects">{title}</h3>
      <ul className="projects-list">
        {list.map(({ id, name, link }) => {
          return (
            <li className="projects-item" key={id}>
              <span className="projects-item_title">{name}</span>
              <div className="dotted" />
              <span className="projects-item_link">
                <a href={`//${link}`}>link</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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

          {SKILS.map(({ title, list }) => {
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

          <ProjectsComponent title={'Projects'} list={PROJECTS} />
          <WorksComponent title={data.works.title} list={data.works.list} />
          <LanguagesComponent title={data.languages.title} list={data.languages.list} />
        </section>
      </main>
    </div>
  );
};

export default App;
