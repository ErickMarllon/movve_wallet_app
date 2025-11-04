import { useEffect, type Dispatch, type SetStateAction } from "react";
import LanguageSelector from "../LanguageSelector";
import NavLinks from "./NavLinks";
import renderLogo from "./renderLogo";

interface Props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export default function NavMobile({
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props) {
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  if (!mobileMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-background/82 backdrop-blur-[10px] p-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        {renderLogo()}

        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="p-5 text-gray-50/90 cursor-pointer"
          aria-label="Close main menu"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6">
        <NavLinks
          isMobile
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
        <LanguageSelector isMobile />
      </div>
    </div>
  );
}
