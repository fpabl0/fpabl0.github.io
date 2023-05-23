import type { Locale } from './i18n-config';

export type Dict = {
  navbar: {
    about: string,
    skills: string,
    experience: string,
    contact: string;
    label_languages: string;
  },
  about_view: {
    section: string;
    title: string;
    body: string[];
  },
  skills_view: {
    section: string;
    skill_groups: string[];
  };
  experience_view: {
    section: string;
    jobs: {
      title: string;
      company: string;
      date_range: string;
      place: string;
      image: string;
      details: string[];
      google_play_url?: string;
      app_store_url?: string;
    }[];
  };
  footer: {
    developed_by: string;
  };
};

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dict> => {
  return dictionaries[locale]();
};