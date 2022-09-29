import React from 'react';

import { IEducation } from '../types';

interface IProps {
  title: string;
  list: IEducation[];
}

const EducationComponent: React.FC<IProps> = ({ title, list }) => {
  return (
    <div className="education">
      <h3 className="main-title">{title}</h3>
      {list.map((education) => {
        return (
          <div key={education.id}>
            <h4 className="educational-institution">{education.institution}</h4>
            <h5 className="faculty">{education.faculty}</h5>
            <p className="period">
              {education.period} <span className="vertical-line">|</span>
              {education.country}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationComponent;
