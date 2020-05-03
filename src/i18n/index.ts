import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import ru from './resources/ru.json';
import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ru.json'));

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    keySeparator: false,
    lng: 'en',
  });

export const getLocalizedCountryName = (countryCode: string, language: string) => {
  return countries.getName(countryCode, language);
};

export default i18n;
