export interface IWork {
  id: string;
  position: string;
  organisation: string;
  period: string;
  country: string;
  responsabilities: string[];
}
export interface IDetail {
  id: string;
  lable: string;
  link?: string;
}
export interface IProject {
  id: string;
  name: string;
  link: string;
}

export interface ISkilItem {
  title: string;
  list: string[];
}

export interface IData {
  details: {
    title: string;
    list: IDetail[];
  };
  works: {
    title: string;
    list: IWork[];
  };
  languages: {
    title: string;
    list: string[];
  };
  skils: ISkilItem[];
  projects: {
    title: string;
    list: IProject[];
  };
}
