import LanguageSelector from "../LanguageSelector";

export default function Navbar() {
  // const { i18n } = useI18n();
  // const pathname = usePathname();

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderLogo = () => (
    <a href="/" className="relative w-32 h-8">
      <span className="sr-only">Movve Wallet</span>
      <img
        src="/logo.png"
        alt="Movve Wallet Logo"
        className="absolute inset-0 w-full h-full object-contain object-left"
        loading="eager"
      />
    </a>
  );

  // const renderNavLinks = (isMobile = false) =>
  //   NAV_ITEMS.map(({ label, href }) => (
  //     <a
  //       key={label}
  //       href={href}
  //       className={` block rounded-lg px-3 py-2 text-sm font-semibold ${
  //         pathname === href
  //           ? "text-white"
  //           : "text-gray-50/90  hover:bg-gray-500/10"
  //       }`}
  //       onClick={() => isMobile && setMobileMenuOpen(false)}
  //     >
  //       {i18n.t(`nav:${label}`)}
  //     </a>
  //   ));

  return (
    <header className="absolute w-full bg-background/25 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8"
        aria-label="Global Navigation"
      >
        <div className="flex lg:flex-1">{renderLogo()}</div>

        {/* <button
          type="button"
          className="flex lg:hidden -m-2.5 p-2.5 text-gray-50/90 rounded-md"
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
        </button> */}

        {/* <div className="hidden lg:flex lg:gap-x-4">{renderNavLinks()}</div> */}

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSelector />
        </div> */}
        <div className="flex flex-1 justify-end">
          <LanguageSelector />
        </div>
      </nav>

      {/* {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background-alt p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            {renderLogo()} */}

      {/* <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-gray-50/90"
              aria-label="Close main menu"
            >
              <svg
                className="h-6 w-6"
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
            </button> */}
      {/* </div> */}

      {/* <div className="mt-6 space-y-6">
            {renderNavLinks(true)}
            <LanguageSelector isMoble />
          </div> */}
      {/* </div> */}
      {/* )} */}
    </header>
  );
}
