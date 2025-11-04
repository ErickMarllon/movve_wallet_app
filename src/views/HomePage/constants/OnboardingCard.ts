export type OnboardingIconKey =
  | "user_icon"
  | "shield_icon"
  | "wallet_icon"
  | "logo_icon";

export interface OnboardingStep {
  title: string;
  description: string[];
  icon: OnboardingIconKey;
}
export const onboardingSteps: OnboardingStep[] = [
  {
    title: "onboarding.steps.createAccount.title",
    description: [
      "onboarding.steps.createAccount.desc1",
      "onboarding.steps.createAccount.desc2",
      "onboarding.steps.createAccount.desc3",
    ],
    icon: "user_icon",
  },
  {
    title: "onboarding.steps.protectAccount.title",
    description: [
      "onboarding.steps.protectAccount.desc1",
      "onboarding.steps.protectAccount.desc2",
      "onboarding.steps.protectAccount.desc3",
    ],
    icon: "shield_icon",
  },
  {
    title: "onboarding.steps.connectWallet.title",
    description: [
      "onboarding.steps.connectWallet.desc1",
      "onboarding.steps.connectWallet.desc2",
      "onboarding.steps.connectWallet.desc3",
    ],
    icon: "wallet_icon",
  },
  {
    title: "onboarding.steps.activateProducts.title",
    description: [
      "onboarding.steps.activateProducts.desc1",
      "onboarding.steps.activateProducts.desc2",
      "onboarding.steps.activateProducts.desc3",
    ],
    icon: "logo_icon",
  },
] as const;
