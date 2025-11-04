import type { IAllLangs } from "@/i18n/config-lang";
import type { i18n } from "i18next";

export interface ProviderProps {
  children: React.ReactNode;
}

export interface I18nContextProps {
  lang: IAllLangs;
  changeLang: (lang?: string) => void;
  i18n: i18n;
}
