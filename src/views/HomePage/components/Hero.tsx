import StarIcon from "@/assets/icons/home/star.svg";
import Mask_Group from "@/assets/images/Mask_Group.png";
import Rectangle from "@/assets/images/Rectangle.png";
import { PATH_PAGE } from "@/routes/paths";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="contant-grid z-0 relative">
      <div className="flex z-10 relative items-center overflow-hidden border w-full border-accent-green rounded-[40px]">
        <span
          className="w-full h-full absolute"
          style={{
            backgroundImage: `url(${Rectangle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span
          className="w-full h-full absolute -top-25"
          style={{
            backgroundImage: `url(${Mask_Group})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="flex relative flex-col w-full justify-center items-center ">
          <div className="z-10 px-8 py-12 w-full gap-4 flex flex-col">
            <span className="border inline-flex gap-1.5  items-center border-accent-green rounded-4xl max-w-max py-1 px-2 text-xs text-badge-text bg-background/50">
              <StarIcon width={18} height={18} />
              {t("index:hero.badge")}
            </span>
            <h1 className="text-[clamp(1.65rem,3.5vw,3.75rem)] leading-8 sm:leading-14 md:leading-16 font-semibold">
              <Trans
                ns="index"
                i18nKey="hero.welcome"
                components={{
                  strong: (
                    <strong className="bg-gradient-to-r from-[#B1FFB9] to-[#00FF19] bg-clip-text text-transparent font-semibold" />
                  ),
                }}
              />
            </h1>

            <p className="font-normal max-w-2xl">{t("index:hero.subtitle")}</p>
            <Link
              to={PATH_PAGE.movies}
              rel="noopener noreferrer"
              className="relative py-2 px-8 max-w-max text-center border-none rounded-md font-bold text-white transition duration-200 bg-gradient-to-r from-[#00FF19] to-[#00990F]"
            >
              <span className="relative font-inter font-bold text-sm">
                {t("actions:cta")}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <span className="shadow-green before:w-[409px] before:h-[350px] absolute bottom-[1%] md:bottom-[30%] left-[0%] sm:left-[38%] z-0" />
    </section>
  );
}

export default Hero;
