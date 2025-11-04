import { request } from "@/mock_videos";
import { Suspense } from "react";
import { useI18n } from "@/context/context";
import LoadingSpinner from "@/components/LoadingSpinner";
import Hero from "./components/Hero";
import Row from "@/components/Row";

export default function MoviesPage() {
  const { lang } = useI18n();

  const sortedRequest = [
    ...request.filter((r) => r.code === lang.value),
    ...request
      .filter((r) => r.code !== lang.value)
      .sort((a, b) => a.language.localeCompare(b.language)),
  ];
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Hero movies={sortedRequest} />
      <div className="relative flex flex-col overflow-hidden w-full -mt-10 sm:-mt-16 md:-mt-14 z-40 pl-4 md:pl-8 gap-6">
        {sortedRequest.map((category, index) => (
          <Row
            key={`${index} - ${category.language}`}
            rowID={`${index}`}
            movies={category.movies}
            title={category.language}
          />
        ))}
      </div>
    </Suspense>
  );
}
