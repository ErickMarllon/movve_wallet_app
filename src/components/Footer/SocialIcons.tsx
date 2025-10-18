import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-gray-500">
      <a href="#" target="_blank">
        <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
      </a>
      <a href="#" target="_blank">
        <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
      </a>
      <a href="#" target="_blank">
        <FaTwitter className="w-6 h-6 hover:text-sky-400 transition-colors" />
      </a>
    </div>
  );
}
