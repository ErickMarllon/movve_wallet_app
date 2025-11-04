import LogoIcon from "@/assets/icons/home/logo_icon.svg";
import ShieldIcon from "@/assets/icons/home/shield_icon.svg";
import UserIcon from "@/assets/icons/home/user_icon.svg";
import WalletIcon from "@/assets/icons/home/wallet_icon.svg";

import { useTranslation } from "react-i18next";
import {
  onboardingSteps,
  type OnboardingIconKey,
} from "../constants/OnboardingCard";

const onboardingIcons: Record<OnboardingIconKey, React.ReactNode> = {
  user_icon: <UserIcon width={24} height={24} />,
  shield_icon: <ShieldIcon width={24} height={24} />,
  wallet_icon: <WalletIcon width={24} height={24} />,
  logo_icon: <LogoIcon width={24} height={24} />,
} as const;

function OnboardingFlow() {
  const { t } = useTranslation();

  return (
    <div className="contant-grid grid grid-cols-1 z-10 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
      {onboardingSteps.map((step) => (
        <div
          key={step.title}
          className="bg-[#011e04] bg-opacity-69 flex flex-col justify-start items-center p-4 pb-10 overflow-hidden border border-accent-green/69 rounded-3xl h-full"
        >
          <div className="gap-4 flex flex-col w-full">
            <span className="inline-flex gap-4 items-center">
              <span className="border inline-flex items-center border-accent-green/69 rounded-md max-w-max p-3 text-xs text-badge-text bg-background/50 flex-shrink-0">
                {onboardingIcons[step.icon]}
              </span>
              <h3 className="text-base   font-semibold line-clamp-2 flex-1">
                {t(`index:${step.title}`)}
              </h3>
            </span>
            <span className="flex flex-col gap-4">
              {step.description.map((desc, index) => (
                <p key={`${step.title} - ${index}`} className="text-xs">
                  {t(desc)}
                </p>
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnboardingFlow;
