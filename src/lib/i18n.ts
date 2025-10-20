import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import { defaultLang } from "../locales/config-lang";

// Index
import enIndex from "../locales/langs/en/index.json";
import esIndex from "../locales/langs/es/index.json";
import ptBrIndex from "../locales/langs/pt-BR/index.json";
import jaIndex from "../locales/langs/ja/index.json";
import koIndex from "../locales/langs/ko/index.json";
import zhIndex from "../locales/langs/zh/index.json";
import itIndex from "../locales/langs/it/index.json";
import ptIndex from "../locales/langs/pt/index.json";
import ruIndex from "../locales/langs/ru/index.json";
import viIndex from "../locales/langs/vi/index.json";

// Nav
import enNav from "../locales/langs/en/nav.json";
import esNav from "../locales/langs/es/nav.json";
import ptBrNav from "../locales/langs/pt-BR/nav.json";
import jaNav from "../locales/langs/ja/nav.json";
import koNav from "../locales/langs/ko/nav.json";
import zhNav from "../locales/langs/zh/nav.json";
import itNav from "../locales/langs/it/nav.json";
import ptNav from "../locales/langs/pt/nav.json";
import ruNav from "../locales/langs/ru/nav.json";
import viNav from "../locales/langs/vi/nav.json";

// Footer
import enFooter from "../locales/langs/en/footer.json";
import esFooter from "../locales/langs/es/footer.json";
import ptBrFooter from "../locales/langs/pt-BR/footer.json";
import jaFooter from "../locales/langs/ja/footer.json";
import koFooter from "../locales/langs/ko/footer.json";
import zhFooter from "../locales/langs/zh/footer.json";
import itFooter from "../locales/langs/it/footer.json";
import ptFooter from "../locales/langs/pt/footer.json";
import ruFooter from "../locales/langs/ru/footer.json";
import viFooter from "../locales/langs/vi/footer.json";

import notFound from "../locales/langs/notFound.json";
import watch from "../locales/langs/watch.json";
import loading from "../locales/langs/loading.json";
import { CookiesService } from "@/service/cookies";

const resources: InitOptions["resources"] = {
  en: {
    index: enIndex,
    nav: enNav,
    footer: enFooter,
    notFound,
    watch,
    loading,
  },
  es: {
    index: esIndex,
    nav: esNav,
    footer: esFooter,
    notFound,
    watch,
    loading,
  },
  ja: {
    index: jaIndex,
    nav: jaNav,
    footer: jaFooter,
    notFound,
    watch,
    loading,
  },
  ko: {
    index: koIndex,
    nav: koNav,
    footer: koFooter,
    notFound,
    watch,
    loading,
  },
  "pt-BR": {
    index: ptBrIndex,
    nav: ptBrNav,
    footer: ptBrFooter,
    notFound,
    watch,
    loading,
  },
  zh: {
    index: zhIndex,
    nav: zhNav,
    footer: zhFooter,
    notFound,
    watch,
    loading,
  },
  it: {
    index: itIndex,
    nav: itNav,
    footer: itFooter,
    notFound,
    watch,
    loading,
  },
  pt: {
    index: ptIndex,
    nav: ptNav,
    footer: ptFooter,
    notFound,
    watch,
    loading,
  },
  ru: {
    index: ruIndex,
    nav: ruNav,
    footer: ruFooter,
    notFound,
    watch,
    loading,
  },
  vi: {
    index: viIndex,
    nav: viNav,
    footer: viFooter,
    notFound,
    watch,
    loading,
  },
};

const savedLanguage = CookiesService.getItem("i18next") as string | undefined;
const initialLng = savedLanguage || defaultLang.value;

if (!i18n.isInitialized) {
  i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      debug: false,
      lng: initialLng,
      fallbackLng: defaultLang.value,
      ns: ["index", "nav", "footer", "watch", "loading", "notFound"],
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
