import { Locales } from 'localization';

interface Reference {
  name: Locales;
  position: Locales;
  company: Locales | string;
  phone: string;
  email?: string;
}

const references: Reference[] = [
  {
    name: {
      en: 'Emlit Pereira'
    },
    position: {
      en: 'Gateway Operations Manager'
    },
    company: {
      en: 'C. H. Robinson',
    },
    phone: '07809828215'
  }
];

export default references;
