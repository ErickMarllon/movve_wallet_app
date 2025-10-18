import { createContext, useContext } from "react";
import type { I18nContextProps } from "./type";

export const I18nContext = createContext<I18nContextProps | undefined>(
  undefined
);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside an <I18nProvider>");
  }
  return context;
};
