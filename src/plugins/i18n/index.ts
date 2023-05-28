import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "src/lang/en.json";

const languageDetector: any = {
  type: "languageDetector",
  async: true,
  detect: (callback: (arg0: any) => void) => {
    const locale = Localization.locale;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
    },
    fallbackLng: "en",
    compatibilityJSON: "v3",
  });

export default i18n;
