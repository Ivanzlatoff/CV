import { Locales } from 'localization';

type Experience = 'EXPERT' | 'EXPERIENCED' | 'SKILLFULL';

const EXPERIENCES: Record<Experience, Locales> = {
  EXPERT: { en: 'Expert', ru: 'Эксперт', uk: 'Експерт' },
  EXPERIENCED: { en: 'Experienced', ru: 'Опытный', uk: 'Досвідчений' },
  SKILLFULL: { en: 'Skillful', ru: 'Умелый', uk: 'Умілий' }
};

interface Skill {
  name: string;
  experience: Locales;
  percent: number;
}

const skills: Skill[] = [
  {
    name: 'HTML, CSS (Sass)',
    experience: EXPERIENCES.EXPERIENCED,
    percent: 75
  },
  {
    name: 'JavaScript, TypeScript',
    experience: EXPERIENCES.EXPERIENCED,
    percent: 75
  },
  {
    name: 'ReactJS, Redux',
    experience: EXPERIENCES.EXPERIENCED,
    percent: 75
  },
  {
    name: 'Databases',
    experience: EXPERIENCES.EXPERIENCED,
    percent: 75
  }
];

export default skills;
