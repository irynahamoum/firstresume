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
          <div className="details">
            <h3 className="details-title"> DETAILS:</h3>
            <ul className="details-list">
              <li className="details-item">03730 Javea </li>
              <li className="details-item">Alicante</li>
              <li className="details-item">iryna.hamoum@hotmail.com</li>
              <li className="details-item">123456789</li>
            </ul>
          </div>

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
          <div>
            <h3 className="languages">LANGUAGES :</h3>
            <ul className="language-item">
              <li>English</li>
              <li>Ukrainian</li>
              <li>Russian</li>
            </ul>
          </div>
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
