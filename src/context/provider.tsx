import { useCallback, useEffect, useMemo, useState } from "react";
import type { ProviderProps } from "./type";
import { I18nContext } from "./context";

import { CookiesService } from "@/service/cookies";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { allLangs, defaultLang, type IAllLangs } from "@/locales/config-lang";

export const I18nProvider = ({ children }: ProviderProps) => {
  const [lang, setLang] = useState<IAllLangs>();

  const changeLang = useCallback((languageCode?: string) => {
    const selectedLanguage = allLangs.find(
      (lang) => lang.value === languageCode
    );
    const languageToSet = selectedLanguage ?? defaultLang;

    setLang(languageToSet);

    if (typeof document !== "undefined") {
      document.documentElement.lang = languageToSet.value;
      CookiesService.setItem("i18next", languageToSet.value);
      i18n.changeLanguage(languageToSet.value);
    }
  }, []);

  useEffect(() => {
    const detectPreferredLanguage = () => {
      const browserLanguage = navigator.language?.split("-")[0] ?? "en";
      const savedLanguage = allLangs.find(
        (lang) => lang.value === CookiesService.getItem("i18next")
      )?.value;

      const preferredLanguage = savedLanguage ?? browserLanguage;

      changeLang(preferredLanguage ?? defaultLang.value);
    };

    detectPreferredLanguage();
  }, [changeLang]);

  const contextValue = useMemo(
    () => ({
      lang: lang ?? defaultLang,
      changeLang,
      i18n,
    }),
    [lang, changeLang]
  );

  return (
    <I18nextProvider i18n={i18n}>
      <I18nContext.Provider value={contextValue}>
        {children}
      </I18nContext.Provider>
    </I18nextProvider>
  );
};
