/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  const [isShow, setIsShow] = React.useState(false);
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
            {isShow && (
              <Localization currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />
            )}
            <div
              style={{ width: 18, height: 18 }}
              onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
            />
          </div>

          <div className="photo">
            <img src="/img/new_pic.jpg" alt="new pic.jpg" />
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
