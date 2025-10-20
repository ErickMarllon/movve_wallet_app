import LoadingSpinner from "@/components/LoadingSpinner";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Suspense } from "react";
import DesktopPage from "./components/DesktopPage";
import MobilePage from "./components/MobilePage";

export default function FilePage() {
  // const params = useParams();
  // const { i18n } = useI18n();

  const isMobile = useIsMobile();

  // const lng = params?.lng as string;
  // const language = lng ?? i18n.language;

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black">
      <Suspense fallback={<LoadingSpinner />}>
        {isMobile ? <MobilePage /> : <DesktopPage />}
      </Suspense>
    </div>
  );
}
