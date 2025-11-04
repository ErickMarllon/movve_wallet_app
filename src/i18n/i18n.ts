import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { CookiesService } from "@/service/cookies";
import { defaultLang } from "./config-lang";

const savedLanguage = CookiesService.getItem("i18next") as string | undefined;
const initialLng = savedLanguage || defaultLang.value;

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: defaultLang.value,
      debug: false,
      ns: ["index", "nav", "footer", "actions", "loading", "notfound"],
      defaultNS: "index",
      lng: initialLng,
      interpolation: { escapeValue: false },
      // react: { useSuspense: false },
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
