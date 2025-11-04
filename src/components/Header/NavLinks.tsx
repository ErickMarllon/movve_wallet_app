import { Link, useLocation } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { PATH_PAGE } from "@/routes/paths";

interface Props {
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}
export default function NavLinks({
  setMobileMenuOpen,
  isMobile = false,
}: Props) {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const NAV_ITEMS = [
    { label: "nav:GetStarted", href: PATH_PAGE.home },
    { label: "nav:Tutorials", href: PATH_PAGE.movies },
    {
      label: "nav:PDFPresentation",
      href: PATH_PAGE.fileLng(i18n.language),
      isBlank: true,
    },
  ];
  return (
    <>
      {NAV_ITEMS.map(({ label, href, isBlank }) => (
        <Link
          key={label}
          to={href}
          rel={isBlank ? "noopener noreferrer" : undefined}
          target={isBlank ? "_blank" : "_self"}
          className={`block rounded-lg px-3 ${
            isMobile ? "py-6" : "py-2"
          } text-sm font-semibold ${
            pathname === href
              ? "text-white bg-gray-500/10"
              : "text-gray-50/90 hover:bg-gray-500/5"
          }`}
          onClick={() => isMobile && setMobileMenuOpen?.(false)}
        >
          {t(`${label}`)}
        </Link>
      ))}
    </>
  );
}
