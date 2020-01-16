import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../assets/locales/en/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
};

const i18nInit = () =>
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: process.env.LANGUAGE,
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });

export default i18nInit;
