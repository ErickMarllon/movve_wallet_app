import LoadingSpinner from "@/components/LoadingSpinner";

export default function LoadingPage() {
  return (
    <div className="w-full h-full top-0 left-0 absolute z-[999] bg-background">
      <LoadingSpinner />
    </div>
  );
}
