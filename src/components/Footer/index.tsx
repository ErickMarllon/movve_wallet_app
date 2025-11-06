import { useI18n } from "@/context/context";
import { PATH_PAGE } from "@/routes/paths";
import { scrollToTopSmooth } from "@/utils/scrollToTopSmooth";
import { Link } from "react-router-dom";

export default function Footer() {
  const { i18n } = useI18n();
  return (
    <footer className="bg-background/82 backdrop-blur-[10px] flex flex-col justify-center mt-16 py-10">
      <div className="flex relative flex-col items-center gap-2 justify-center">
        <Link
          to={PATH_PAGE.home}
          className="relative w-full flex items-center justify-center"
          onClick={() => scrollToTopSmooth()}
        >
          <img
            src="/assets/brand/logo.svg"
            alt="Logo"
            className="w-32 h-auto"
          />
        </Link>
        <span className="text-xs sm:text-sm text-gray-400 sm:text-center">
          {i18n.t(`footer:copyright`)}
        </span>
      </div>
    </footer>
  );
}
