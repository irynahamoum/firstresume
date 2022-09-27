import React from 'react';

import { ISkilItem } from '../types';

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
export default SkilComponent;
