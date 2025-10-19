import { useI18n } from "@/context/context";
import { parseBold } from "@/utils/parseBold";
import { BsDownload } from "react-icons/bs";
import { downloadPdf } from "@/utils/downloadPdf";
import { PDFViewer } from "@/components/PDFViewer";
import { PATH_PAGE } from "@/routes/paths";
import { Link } from "react-router-dom";

function Home() {
  const { i18n } = useI18n();
  const pdfFile = i18n.language
    ? `/pdf/APN_MOVVE_${i18n.language?.toUpperCase()}.pdf`
    : "";

  return (
    <div className="flex flex-col pt-22 gap-10 justify-center">
      <div className="flex flex-col w-full justify-center items-center relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-screen before:h-full before:bg-green/90 before:-z-10">
        <div className="z-10 px-6 py-8 w-full max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider whitespace-nowrap">
            {i18n.t("header.welcome")}
          </h1>
          <p className="font-bold tracking-wider whitespace-nowrap">
            {i18n.t("header.subtitle")}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-10 max-w-6xl">
          <div className="flex flex-col justify-center">
            <div className="px-6 py-8">
              <PDFViewer pdfUrl={pdfFile} />
            </div>
          </div>

          <div className="flex justify-center px-6">
            <div className="px-6 py-4 tracking-wider flex flex-col text-center gap-4 border-2 border-greendark rounded-4xl">
              <h1 className="text-[clamp(18px,4vw,36px)] font-bold">
                {i18n.t("notice.title")}
              </h1>
              <p className="text-[clamp(12px,1.5vw,18px)]">
                {parseBold(i18n.t("notice.text"))}
              </p>
              <p className="text-[clamp(12px,1.5vw,18px)]">
                {parseBold(i18n.t("notice.obs"))}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="px-6 py-4 tracking-wider flex flex-col text-left gap-4">
              <h1 className="text-[clamp(16px,4vw,24px)] font-bold">
                {i18n.t("tutorials.title")}
              </h1>

              <Link
                to={PATH_PAGE.movies}
                target="_top"
                rel="noopener noreferrer"
                className="py-2 max-w-[400px] tracking-wider text-center border-2 border-green rounded-md font-bold bg-green hover:bg-greendark hover:border-greendark hover:text-white transition duration-200"
              >
                {i18n.t("tutorials.clickHere")}
              </Link>
            </div>

            <div className="px-6 py-4 tracking-wider flex flex-col text-left gap-4">
              <h1 className="text-[clamp(16px,4vw,24px)] font-bold">
                {i18n.t("ApnSection.presentationTitle")}
              </h1>

              <Link
                to={PATH_PAGE.fileLng(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 max-w-[400px] tracking-wider text-center border-2 border-green rounded-md font-bold bg-green hover:bg-greendark hover:border-greendark hover:text-white transition duration-200"
              >
                {i18n.t("ApnSection.pdfButton")}
              </Link>

              <button
                onClick={() => downloadPdf(pdfFile)}
                className="inline-flex justify-center gap-2 py-2 max-w-[400px] tracking-wider text-center border-2 border-green rounded-md font-bold bg-green hover:bg-greendark hover:border-greendark hover:text-white transition duration-200"
              >
                <span className="relative flex items-center justify-center">
                  {i18n.t("ApnSection.pdfDownload")}
                  <BsDownload className="absolute -right-6 top-0.5 " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
