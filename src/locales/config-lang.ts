export interface IAllLangs {
  label: string;
  value: string;
  icon: string;
}

export const allLangs: IAllLangs[] = [
  {
    label: "English",
    value: "en",
    icon: "assets/lang/US.svg",
  },
  {
    label: "Japanese",
    value: "ja",
    icon: "assets/lang/JP.svg",
  },
  {
    label: "Korean",
    value: "ko",
    icon: "assets/lang/KR.svg",
  },
  {
    label: "Chinese",
    value: "zh",
    icon: "assets/lang/CN.svg",
  },
  {
    label: "Spanish",
    value: "es",
    icon: "assets/lang/ES.svg",
  },
  {
    label: "Portuguese",
    value: "pt-BR",
    icon: "assets/lang/BR.svg",
  },
];

export const defaultLang = allLangs[0];
