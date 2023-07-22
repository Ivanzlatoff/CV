import { Locales } from 'localization';

interface Institution {
  name: Locales;
  dates: string;
  subject: Locales | string;
}

const education: Institution[] = [
  {
    name: {
      en: 'Odessa National Maritime University',
      ru: 'Одесский национальный морской университет',
      uk: 'Одеський національний морський університет'
    },
    dates: '2008–2013',
    subject: {
      en: 'Maritime Studies. B.Sc in Maritime Transport',
      ru: 'Организация перевозок и управление на морском транспорте. Специалист',
      uk: 'Організація перевезеннь і управління на морському транспортію Спеціаліст'
    }
  },
  {
    name: {
      en: 'Free Code Camp',
      ru: 'Курс онлайн программирования "Фри Код Камп"',
      uk: 'Курс онлайн програмування "Фрі Код Камп"'
    },
    dates: '2021-2022',
    subject: {
      en: 'Full stack development, python, javascript',
      ru: 'Фул стак разработка, питон, javascript',
      uk: 'Фул стак розробка, пітон, javascript'
    }
  }
];

export default education;
