import React from 'react';
interface ISkilItem {
  title: string;
  list: string[];
}

const SKILS: ISkilItem[] = [
  { title: 'Hard skils', list: ['html', 'css', 'js', 'React'] },
  { title: 'Soft skils', list: ['Agile', 'Scrum'] },
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
      <ul className="projects-item">
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
const languages = ['English', 'Ukrainian', 'russian'];
const LanguagesComponent: React.FC<{ title: string; ul: string[] }> = (props) => {
  return (
    <div>
      <h3 className="languages">{props.title} :</h3>
      <ul className="language-item">
        {props.ul.map((value) => {
          return (
            <li key={value} className="language-item">
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
interface IDetailsComponentProps {
  title: string;
  list: { id: string; lable: string; link?: string }[];
}
const details: IDetailsComponentProps = {
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
};
const DetailsComponent: React.FC<IDetailsComponentProps> = (props) => {
  return (
    <div className="details">
      <h3 className="details-title"> {props.title}:</h3>
      <ul className="details-list">
        {props.list.map((item) => {
          return (
            <li key={item.id} className="details-item">
              {!item.link && item.lable}
              {item.link && <a href={item.link}>{item.lable}</a>}
            </li>
          );
        })}
      </ul>
    </div>
  );
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
            <img src="/img/./pic3.jpg" alt="pic3.jpg" />
          </div>
          <DetailsComponent title={details.title} list={details.list} />

          {SKILS.map(({ title, list }) => {
            return <SkilComponent key={title} title={title} list={list} />;
          })}
        </section>
        <section className="content">
          <h1 className="name">IRYNA HAMOUM</h1>
          <ul className="programmer">PROGRAMMER</ul>
          <p>
            I am only a beginner with creative thinking and inexaustible desire to learn. Very
            patient and attentive to details. Emotionally intelligent and empathetic for others.
            Currently I am looking for a role in small team where i can grow and continue to learn
            from other experienced team members. My career objective is to graduate of computer
            science with experience working across full-stack of software development.
          </p>

          <ProjectsComponent title={'Projects'} list={PROJECTS} />
          <LanguagesComponent title={'Languages'} ul={languages} />

          <button id="JS_OPEN_MODAL" type="button">
            open modal
          </button>
        </section>
      </main>

      <div id="JS_MODAL" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">first modal</div>
            <div id="JS_CLOSE_MODAL">X</div>
          </div>
          <div style={{ width: 600 }} />
        </div>
      </div>
    </div>
  );
};

export default App;
