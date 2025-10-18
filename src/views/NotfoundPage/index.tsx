import { useI18n } from "@/context/context";
import { useNavigate } from "react-router-dom";

export default function NotfoundPage() {
  const { i18n } = useI18n();
  const navigate = useNavigate();

  if (!i18n) return null;
  return (
    <div
      className="flex overflow-hidden min-w-full min-h-dvh justify-center items-center relative select-none  
    before:content-[''] before:absolute before:bg-[url('/assets/bg-lost-in-space.png')] 
    before:bg-cover before:bg-center before:opacity-50 before:-z-10
    before:min-w-dvw before:min-h-dvh"
    >
      <div className="flex flex-col items-center justify-center text-center gap-6 max-w-[21.8rem] w-full">
        <h2 className="text-4xl sm:text-5xl font-bold">
          {i18n.t(`notFound:title.${i18n.language}`)}
        </h2>
        <p>{i18n.t(`notFound:description.${i18n.language}`)}</p>
        <button
          className="border rounded-[4px] flex gap-3 items-center justify-center font-bold
          bg-gray-100 text-black border-none hover:bg-gray-300 transition-all duration-200
          w-[clamp(250px,10vw,180px)] h-[clamp(32px,4vw,44px)]
          text-[clamp(12px,1.5vw,16px)] py-2 px-3 md:py-0 sm:px-2 whitespace-nowrap"
          onClick={() => navigate("/", { replace: true })}
        >
          {i18n.t(`notFound:homeLink.${i18n.language}`)}
        </button>
      </div>
    </div>
  );
}
