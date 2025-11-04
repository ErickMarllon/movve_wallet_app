import { type IMovie } from "@/mock_videos";
import { PATH_PAGE } from "@/routes/paths";
import { Link } from "react-router-dom";

interface Props {
  movie: IMovie;
}
export default function Movie({ movie }: Props) {
  if (!movie?.id) return null;

  return (
    <Link
      className="min-w-[160px] w-full max-w-[395px] max-h-[570px]
      inline-block cursor-pointer relative aspect-[9/16] rounded-3xl overflow-hidden border border-accent-green/50"
      to={PATH_PAGE.movieWatchId(movie.id)}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        width={395}
        height={570}
        className="absolute inset-0 w-full h-full object-cover object-top-left"
      />

      <div
        className="absolute top-0 left-0 w-full h-full hover:bg-black/80
        opacity-0 hover:opacity-100  text-white"
      >
        <p
          className="whitespace-normal text-xs md:text-sm
            capitalize font-bold flex justify-center items-center h-full text-white"
        >
          {movie?.title?.toLowerCase()}
        </p>
      </div>
    </Link>
  );
}
