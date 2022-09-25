import React from 'react';

import { IWork } from '../types';

interface IProps {
  title: string;
  list: IWork[];
}

const WorksComponent: React.FC<IProps> = ({ title, list }) => {
  return (
    <div className="works">
      <h4 className="works-title title">{title}</h4>
      {list.map((work) => {
        return (
          <div key={work.id}>
            <h4 className="position">
              {work.position}
              <span className="organisation">{work.organisation}</span>
            </h4>
            <p className="period">
              {work.period} <span className="vertical-line">|</span>
              {work.country}
            </p>
            <ul className="work-list">
              {work.responsabilities.map((value, idx) => {
                return (
                  <li key={`${work.id}-${idx}`} className="work-list-item">
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WorksComponent;
