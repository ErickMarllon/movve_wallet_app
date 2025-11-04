import { useI18n } from "@/context/context";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useIsMobile } from "@/hooks/useIsMobile";
import { allLangs } from "@/i18n/config-lang";
import { useRef, useState } from "react";

interface Props {
  isMobile?: boolean;
}
export default function LanguageSelector({ isMobile }: Props) {
  const { lang, changeLang } = useI18n();
  const [openDropdown, setOpenDropdown] = useState<boolean>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMoble = useIsMobile();
  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  useClickOutside(dropdownRef, () => setOpenDropdown(false));

  return (
    <div className="flex flex-col relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`cursor-pointer gap-2 z-10 transition-all duration-200 inline-flex items-center justify-start  ${
          isMobile ? "py-6 px-2" : "p-2 "
        }  border-none rounded-lg hover:bg-gray-600/20 overflow-hidden`}
        type="button"
      >
        <span className="cursor-pointer w-full max-w-min gap-2 z-10 transition-all duration-200 inline-flex items-center justify-center p-2 border-none rounded-full overflow-hidden">
          <span className="whitespace-nowrap text-gray-50/90 ">
            {lang.value.toUpperCase()}
          </span>
          <span className="w-6 h-6 inline-flex relative overflow-hidden items-center justify-center rounded-full">
            <img
              src={lang.icon}
              alt={lang.label}
              className="absolute object-cover w-full h-full"
            />
          </span>
        </span>
      </button>

      <div
        className={`absolute ${
          isMoble ? "left-0 top-10" : "right-0 top-8"
        }  z-50 divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-700 transform transition-all duration-200
    ${
      openDropdown
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
      >
        <ul className="p-2 text-sm text-gray-200 z-50">
          {allLangs.map((l, index) => (
            <li key={`${index} - ${l.value}`} value={l.value}>
              <button
                onClick={() => {
                  changeLang(l.value);
                  setOpenDropdown(false);
                }}
                type="button"
                className="inline-flex gap-2 items-center w-full pl-4 py-2 text-sm rounded-2xl text-gray-400 hover:bg-gray-600 cursor-pointer"
              >
                <span className="w-5 h-5 p-1 z-10 inline-flex relative overflow-hidden items-center justify-center rounded-full">
                  <img
                    src={`${l.icon}`}
                    alt={l.label}
                    className="absolute object-cover w-full h-full"
                  />
                </span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
