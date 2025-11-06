import Row from "@/components/Row";
import { useI18n } from "@/context/context";
import { defaultLang } from "@/i18n/config-lang";
import { request } from "@/mock_videos";
import { PATH_PAGE } from "@/routes/paths";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function ListMovie() {
  const { lang } = useI18n();

  const { t } = useTranslation();

  const sortedRequest = [...request.filter((r) => r.code === lang.value)];
  const movies = sortedRequest?.length
    ? sortedRequest
    : [...request.filter((r) => r.code === defaultLang.value)];

  if (!movies || !movies?.length) return null;

  return (
    <>
      <section className="flex gap-6 flex-col w-full pt-6 col-span-10 col-start-2 md:col-span-8 md:col-start-3 relative">
        <h3 className="z-40 text-[clamp(1.25rem,4vw,1.875rem)] font-semibold text-center">
          {t("index:listMovie.tutorialVideos")}
        </h3>
      </section>

      <section className="flex gap-6 flex-col w-full pb-6 col-span-12 text col-start-2 md:col-start-3 relative">
        <div className="relative flex flex-col w-full z-40">
          <Link
            to={PATH_PAGE.movies}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-50 right-[2%] -top-3 py-2 px-8 max-w-max text-center border-none rounded-md font-bold text-white transition duration-200 bg-gradient-to-r from-[#00FF19] to-[#00990F]"
          >
            <span className="relative font-inter font-bold text-sm">
              {t("actions:seeMore")}
            </span>
          </Link>
          {movies.map((category, index) => (
            <Row
              key={`${index} - ${category.language}`}
              rowID={`${index}`}
              movies={category.movies}
              disableScroll
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ListMovie;
