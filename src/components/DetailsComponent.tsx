import React from 'react';
import { IDetail } from '../types';

interface IProps {
  title: string;
  list: IDetail[];
}

const DetailsComponent: React.FC<IProps> = (props) => {
  return (
    <div className="details">
      <h3 className="details-title"> {props.title}:</h3>
      <ul className="details-list">
        {props.list.map((item) => {
          return (
            <li key={item.id} className="details-item">
              {!item.link && item.lable}
              {/*!!*/ item.link && <a href={item.link}>{item.lable}</a>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsComponent;
