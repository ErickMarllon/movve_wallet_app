import { downloadPdf } from "@/utils/downloadPdf";
import { useTranslation } from "react-i18next";
import { BsDownload } from "react-icons/bs";
import { PDFViewer } from "./PDFViewer";
import PadlockIcon from "@/assets/icons/home/padlock.svg";

function BusinessPlan() {
  const { t, i18n } = useTranslation();

  const pdfFile = i18n.language
    ? `/pdf/APN_MOVVE_${i18n.language?.toUpperCase()}.pdf`
    : `/pdf/APN_MOVVE_EN.pdf`;

  return (
    <section className="flex flex-col w-full py-6 col-span-10 col-start-2 md:col-span-8 md:col-start-3 relative">
      <div className="flex  flex-col items-center gap-8">
        <div className="inline-flex w-full justify-center items-center relative">
          <span className="shadow-green before:w-[409px] before:h-[350px] absolute flex h-full -left-10   md:top-0 before:-top-10 before:-left-40">
            <PadlockIcon className="absolute z-20 h-auto w-[calc(100%-10rem)] min-w-[240px] max-w-[360px] -top-30 sm:-top-24 md:-top-36 lg:-top-30 opacity-60 md:opacity-100" />
          </span>
          <h3 className=" z-40 text-[clamp(1.25rem,4vw,1.875rem)] font-semibold text-center">
            {t("index:ApnSection.businessPlan")}
          </h3>
        </div>
        <PDFViewer pdfUrl={pdfFile} />

        <button
          onClick={() => downloadPdf(pdfFile)}
          className="inline-flex justify-center gap-2 py-3 px-20 min-w-max max-w-max text-center rounded-md font-bold bg-green hover:text-white transition duration-200"
        >
          <span className="relative flex items-center justify-center text-sm">
            {t("actions:pdfDownload")}
            <BsDownload className="absolute -right-6 top-0.5 " />
          </span>
        </button>
      </div>
      <span className="flex w-full justify-center items-center relative">
        <span className="shadow-green before:w-[409px] before:h-[350px] absolute flex h-full -right-10   md:bottom-0 before:-bottom-10 before:-right-40" />
      </span>
    </section>
  );
}

export default BusinessPlan;
