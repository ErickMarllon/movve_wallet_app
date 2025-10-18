import type { i18n } from "i18next";
import type { IAllLangs } from "@/locales/config-lang";

export interface ProviderProps {
  children: React.ReactNode;
}

export interface I18nContextProps {
  lang: IAllLangs;
  changeLang: (lang?: string) => void;
  i18n: i18n;
}
