import React from 'react';

import { IData } from '../types';

const ProjectsComponent: React.FC<IData['projects']> = ({ title, list }) => {
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

export default ProjectsComponent;
