import { request } from "@/mock_videos";
import { Suspense } from "react";
import { useI18n } from "@/context/context";
import LoadingSpinner from "@/components/LoadingSpinner";
import Row from "./components/Row";
import Hero from "./components/Hero";

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
      <div className="relative flex flex-col overflow-hidden w-full -mt-10 sm:-mt-16 md:-mt-14  z-40">
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
