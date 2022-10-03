import React from 'react';
import {
  DetailsComponent,
  WorksComponent,
  EducationComponent,
  LanguagesComponent,
  SkilComponent,
  ProjectsComponent,
  Localization,
} from './components';
import { IData } from './types';
import languages from './languages';

const App: React.FC = () => {
  const [currentLocale, setCurrentLocale] = React.useState('en');
  const [data, setData] = React.useState<IData | null>(null);

  React.useEffect(() => {
    const getData = async (): Promise<IData | null> => {
      return languages[currentLocale].data || null;
    };

    getData().then((data) => {
      setData(data);
    });
  }, [currentLocale]);

  if (!data) return null;
  return (
    <div>
      <main className="container">
        <section className="sidebar">
          <div className="select-locale">
            <Localization currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />
          </div>
          <div className="photo">
            <img src="/img/./new pic.jpg" alt="new pic.jpg" />
          </div>
          <DetailsComponent title={data.details.title} list={data.details.list} />

          {data.skils.map(({ title, list }) => {
            return <SkilComponent key={title} title={title} list={list} />;
          })}
          <LanguagesComponent title={data.languages.title} list={data.languages.list} />
        </section>
        <section className="content">
          <h1 className="name">{data.name}</h1>
          <ul className="programmer">
            <i>{data.programmer}</i>
          </ul>
          <p className="description">{data.description}</p>

          <ProjectsComponent title={data.projects.title} list={data.projects.list} />
          <WorksComponent title={data.works.title} list={data.works.list} />
          <EducationComponent title={data.education.title} list={data.education.list} />
        </section>
      </main>
    </div>
  );
};

export default App;
