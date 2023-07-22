import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  faViber,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

import type { Locales } from 'localization';

type PhoneMessenger = {
  icon: IconDefinition;
  color: string;
};

type Phone =
  | string
  | {
      number: string;
      messengers: PhoneMessenger[];
    };

type Social = {
  icon: IconDefinition;
  text: string;
  link: string;
};

interface Contacts {
  birth: Locales;
  address: Locales;
  email: string;
  phones: Phone[];
  socials: Social[];
}

const contacts: Contacts = {
  birth: { en: '28 December 1990', ru: '28 Декабря 1990', uk: '28 Грудня 1990' },
  address: {
    en: 'London, UK',
    ru: 'Лондон',
    uk: 'Лондон'
  },
  email: 'ivanzlatoff@gmail.com',
  phones: [
    {
      number: '07 881 383907',
      messengers: [
        { icon: faViber, color: '#ae4b85' },
        { icon: faWhatsapp, color: '#009847' },
      ]
    }
  ],
  socials: [
    {
      icon: faLinkedin,
      text: 'linkedin.com/in/ivan-zlatov',
      link: 'https://www.linkedin.com/in/ivan-zlatov-140626228/'
    },
    {
      icon: faInstagram,
      text: 'instagram.com/ivanzlatoff',
      link: 'https://instagram.com/ivanzlatoff'
    },
    {
      icon: faFacebook,
      text: 'facebook.com/ivan.zlatov',
      link: 'https://www.facebook.com/profile.php?id=100087480877782'
    },
    {
      icon: faTelegram,
      text: '@ivanzlatoff',
      link: 'https://t.me/ivanzlatoff'
    }
  ]
};

export default contacts;
