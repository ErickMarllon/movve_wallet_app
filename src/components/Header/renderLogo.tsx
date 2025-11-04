import { PATH_PAGE } from "@/routes/paths";
import { Link } from "react-router-dom";

export default function RenderLogo() {
  return (
    <Link
      to={PATH_PAGE.home}
      className="relative items-center justify-center flex max-w-34"
    >
      <span className="sr-only">Movve Wallet</span>

      <img
        src="/assets/brand/logo.png"
        alt="Movve Wallet Logo"
        className="aspect-[16/9] object-contain"
        loading="eager"
      />
    </Link>
  );
}
