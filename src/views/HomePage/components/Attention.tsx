import { Trans, useTranslation } from "react-i18next";
function Attention() {
  const { t } = useTranslation();

  return (
    <section className="grid w-full py-6 col-span-10 text col-start-2 md:col-span-8 md:col-start-3 relative">
      <div className="px-6 py-10 flex flex-col text-center gap-4 border border-accent-green/50 rounded-4xl bg-[#011e04]/50 backdrop-blur-[3px] z-10">
        <h1 className="text-[clamp(18px,4vw,3rem)] font-bold text-[#00FF19]">
          {t("index:notice.title")}
        </h1>
        <p className="text-[clamp(12px,1.5vw,1.5rem)] ">
          <Trans
            ns="index"
            i18nKey="notice.text"
            components={{
              strong: <strong className="text-[#00FF19]" />,
            }}
          />
        </p>
        <p className="text-[clamp(12px,1.5vw,1.5rem)]">
          <Trans
            ns="index"
            i18nKey="notice.obs"
            components={{
              strong: <strong className="text-[#00FF19]" />,
            }}
          />
        </p>
      </div>

      <span className="shadow-green before:w-[409px] before:h-[350px] absolute bottom-[1%] md:bottom-[30%] left-[0%] sm:left-[38%] z-0" />
    </section>
  );
}

export default Attention;
