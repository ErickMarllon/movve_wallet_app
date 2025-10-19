import { Link } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";
import { PATH_PAGE } from "@/routes/paths";

export default function Navbar() {
  const renderLogo = () => (
    <Link to={PATH_PAGE.home} className="relative w-32 h-8">
      <span className="sr-only">Movve Wallet</span>
      <img
        src="/logo.png"
        alt="Movve Wallet Logo"
        className="absolute inset-0 w-full h-full object-contain object-left"
        loading="eager"
      />
    </Link>
  );

  return (
    <header className="absolute w-full bg-background/25 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8"
        aria-label="Global Navigation"
      >
        <div className="flex lg:flex-1">{renderLogo()}</div>

        <div className="flex flex-1 justify-end">
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}
