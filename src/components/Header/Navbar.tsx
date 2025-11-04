import { useState } from "react";
import LanguageSelector from "../LanguageSelector";
import NavMobile from "./NavMobile";
import NavLinks from "./NavLinks";
import RenderLogo from "./renderLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full flex col-span-10 col-start-2 items-center justify-between py-3 bg-transparent"
        aria-label="Global Navigation"
      >
        <RenderLogo />

        {!mobileMenuOpen && (
          <button
            type="button"
            className="flex md:hidden -m-2.5 p-2.5 text-gray-50/90 rounded-md z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="hidden md:flex md:w-full md:justify-center md:gap-x-2 z-50">
          <NavLinks
            setMobileMenuOpen={setMobileMenuOpen}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <LanguageSelector />
        </div>
      </nav>

      <NavMobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
