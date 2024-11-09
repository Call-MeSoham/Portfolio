import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../locales/en/translation.json";
import translationHI from "../locales/hi/translation.json";
import translationBN from "../locales/bn/translation.json";
import translationFR from "../locales/fr/translation.json";
import translationDE from "../locales/de/translation.json";
import translationES from "../locales/es/translation.json";
import translationNL from "../locales/nl/translation.json";

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  bn: { translation: translationBN },
  fr: { translation: translationFR },
  de: { translation: translationDE },
  es: { translation: translationES },
  nl: { translation: translationNL },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
