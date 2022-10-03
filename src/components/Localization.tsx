import React from 'react';
import languages from '../languages';

interface IProps {
  currentLocale: string;
  setCurrentLocale: (currentLocale: string) => void;
}

const Localization: React.FC<IProps> = ({ currentLocale, setCurrentLocale }) => {
  return (
    <select value={currentLocale} onChange={({ target: { value } }) => setCurrentLocale(value)}>
      {Object.keys(languages).map((key) => {
        const item = languages[key];

        if (!item) return null;

        return (
          <option key={item.code} value={item.code}>
            {item.title}
          </option>
        );
      })}
    </select>
  );
};

export default Localization;
