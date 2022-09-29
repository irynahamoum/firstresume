import React from 'react';
const localization: Record<string, { code: string; title: string }> = {
  en: {
    code: 'en',
    title: 'English',
  },
  ua: {
    code: 'ua',
    title: 'Ukrainian',
  },
};

interface IProps {
  currentLocale: string;
  setCurrentLocale: (currentLocale: string) => void;
}

const Localization: React.FC<IProps> = ({ currentLocale, setCurrentLocale }) => {
  return (
    <select value={currentLocale} onChange={({ target: { value } }) => setCurrentLocale(value)}>
      {Object.keys(localization).map((key) => {
        const item = localization[key];

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
