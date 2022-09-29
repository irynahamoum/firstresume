export interface IWork {
  id: string;
  position: string;
  organisation: string;
  period: string;
  country: string;
  responsabilities: string[];
}

export interface IEducation {
  id: string;
  institution: string;
  faculty: string;
  period: string;
  country: string;
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
  name: string;
  programmer: string;
  description: string;
  img: string;

  details: {
    title: string;
    list: IDetail[];
  };
  works: {
    title: string;
    list: IWork[];
  };
  education: {
    title: string;
    list: IEducation[];
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
