import BrandIcon3d from "@/assets/brand/3D_MOVVE_ICON.svg";
import Attention from "./components/Attention";
import BusinessPlan from "./components/BusinessPlan";
import Hero from "./components/Hero";
import OnboardingFlow from "./components/OnboardingFlow";
import ListMovie from "./components/ListMovie";

function Home() {
  return (
    <div className="container-grid gap-y-16 pb-16 pt-40 relative overflow-hidden">
      <BrandIcon3d className="absolute right-0 top-4 h-auto w-[calc(100%-10rem)] min-w-[320px] max-w-[512.47px]" />
      <Hero />
      <OnboardingFlow />
      <BusinessPlan />
      <Attention />
      <ListMovie />
    </div>
  );
}

export default Home;
