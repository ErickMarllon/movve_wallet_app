import SocialIcons from "./SocialIcons";
import { useI18n } from "@/context/context";
import { FOOTER_SECTIONS } from "./const/footerSections";
import { Link } from "react-router-dom";
import { scrollToTopSmooth } from "@/utils/scrollToTopSmooth";
import { PATH_PAGE } from "@/routes/paths";

export default function Footer() {
  const { i18n } = useI18n();
  return (
    <footer className="bg-background-alt flex flex-col justify-center mt-16 py-10">
      <div>
        <div className="mx-auto px-6 max-w-6xl">
          <div className="relative grid w-full grid-cols-[repeat(2,160px)] gap-2 sm:gap-6">
            <div className="absolute z-0 flex w-full h-full aspect-square  ">
              <img
                src="/assets/brand/selo-green-dark.png"
                alt="Movve Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                className="object-contain object-center w-full h-full opacity-25"
              />
            </div>
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.titleKey} className="z-10 ">
                <h2 className="mb-2 text-sm font-semibold uppercase text-gray-200">
                  {i18n.t(`footer:${section.titleKey}.title`)}
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.labelKey}>
                      <Link
                        to={link.href}
                        className="hover:underline whitespace-nowrap"
                        onClick={() => link.href === "#" && scrollToTopSmooth()}
                      >
                        {i18n.t(`footer:${section.titleKey}.${link.labelKey}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="mx-auto max-w-6xl">
          <div className="flex relative flex-col items-center gap-2 justify-between max-w-6xl">
            <Link
              to={PATH_PAGE.home}
              className="relative  max-w-2xs w-full h-10 md:16"
              onClick={() => scrollToTopSmooth()}
            >
              <img
                src={"/assets/brand/brand-gradient.png"}
                alt="brand Movve Wallet"
                className="absolute w-full h-full object-contain"
              />
            </Link>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {i18n.t(`footer:copyright`)}
            </span>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
