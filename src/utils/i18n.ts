import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enFile from "../lang/en";
import koFile from "../lang/ko";
import jpFile from "../lang/jp";
import cnFile from "../lang/cn";
const lang = localStorage.getItem("lang");

const resources = {
  en: enFile,
  ko: koFile,
  jp: jpFile,
  cn: cnFile,
};

i18n.use(initReactI18next).init({
  resources,
  lng: lang ?? "ko",
  fallbackLng: "ko",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
