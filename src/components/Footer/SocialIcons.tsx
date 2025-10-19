import { scrollToTopSmooth } from "@/utils/scrollToTopSmooth";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-gray-500">
      <Link to="#" onClick={() => scrollToTopSmooth()}>
        <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
      </Link>
      <Link to="#" onClick={() => scrollToTopSmooth()}>
        <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
      </Link>
      <Link to="#" onClick={() => scrollToTopSmooth()}>
        <FaTwitter className="w-6 h-6 hover:text-sky-400 transition-colors" />
      </Link>
    </div>
  );
}
