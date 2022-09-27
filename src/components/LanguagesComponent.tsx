import React from 'react';

import { IData } from '../types';

const LanguagesComponent: React.FC<IData['languages']> = (props) => {
  return (
    <div>
      <h3 className="languages">{props.title} :</h3>
      <ul className="language-list">
        {props.list.map((value) => {
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

export default LanguagesComponent;
