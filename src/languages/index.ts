import { IData } from 'src/types';
import en from './en';
import ua from './ua';
const languages: Record<string, { code: string; title: string; data: IData }> = {
  en: {
    code: 'en',
    title: 'English',
    data: en,
  },
  ua: {
    code: 'ua',
    title: 'Ukrainian',
    data: ua,
  },
};
export default languages;
