import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import { defaultLang } from "../locales/config-lang";

// Index
import enIndex from "../locales/langs/en/index.json";
import esIndex from "../locales/langs/es/index.json";
import ptIndex from "../locales/langs/pt-BR/index.json";
import jaIndex from "../locales/langs/ja/index.json";
import koIndex from "../locales/langs/ko/index.json";
import zhIndex from "../locales/langs/zh/index.json";

// Nav
import enNav from "../locales/langs/en/nav.json";
import esNav from "../locales/langs/es/nav.json";
import ptNav from "../locales/langs/pt-BR/nav.json";
import jaNav from "../locales/langs/ja/nav.json";
import koNav from "../locales/langs/ko/nav.json";
import zhNav from "../locales/langs/zh/nav.json";

// Footer
import enFooter from "../locales/langs/en/footer.json";
import esFooter from "../locales/langs/es/footer.json";
import ptFooter from "../locales/langs/pt-BR/footer.json";
import jaFooter from "../locales/langs/ja/footer.json";
import koFooter from "../locales/langs/ko/footer.json";
import zhFooter from "../locales/langs/zh/footer.json";

import notFound from "../locales/langs/notFound.json";
import watch from "../locales/langs/watch.json";

const resources = {
  en: { index: enIndex, nav: enNav, footer: enFooter, notFound, watch },
  es: { index: esIndex, nav: esNav, footer: esFooter, notFound, watch },
  ja: { index: jaIndex, nav: jaNav, footer: jaFooter, notFound, watch },
  ko: { index: koIndex, nav: koNav, footer: koFooter, notFound, watch },
  "pt-BR": { index: ptIndex, nav: ptNav, footer: ptFooter, notFound, watch },
  zh: { index: zhIndex, nav: zhNav, footer: zhFooter, notFound, watch },
};

if (!i18n.isInitialized) {
  i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      debug: false,
      lng: defaultLang.value,
      fallbackLng: defaultLang.value,
      ns: ["index", "nav", "footer"],
      defaultNS: "index",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      detection: {
        order: ["cookie", "navigator"],
        caches: ["cookie"],
        cookieMinutes: 60 * 24 * 365,
        cookieOptions: { path: "/" },
        lookupQuerystring: "lng",
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
      },
    });
}

export default i18n;
