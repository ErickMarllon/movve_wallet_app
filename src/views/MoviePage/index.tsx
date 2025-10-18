import LoadingSpinner from "@/components/LoadingSpinner";
import { PATH_PAGE } from "@/routes/paths";
import { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomPlayer from "./components/CustomPlayer";
import { filterMovieById } from "./components/CustomPlayer/utils/filterMovieById";

export default function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = filterMovieById(id);

  if (!movie || !movie.id) {
    navigate(PATH_PAGE.notfound);
    return;
  }

  return (
    <div className="w-full bg-black h-full top-0 left-0 absolute">
      <Suspense fallback={<LoadingSpinner />}>
        <CustomPlayer movie={movie} />
      </Suspense>
    </div>
  );
}
