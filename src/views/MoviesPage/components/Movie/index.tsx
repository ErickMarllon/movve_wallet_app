import { type IMovie } from "@/requests/movies";
import { PATH_PAGE } from "@/routes/paths";
import { Link } from "react-router-dom";

interface Props {
  movie: IMovie;
}
export default function Movie({ movie }: Props) {
  if (!movie?.id) return null;

  return (
    <Link
      className="min-w-[160px] w-full max-w-[280px]
      inline-block cursor-pointer relative p-2 aspect-[16/9]"
      to={PATH_PAGE.movieWatchId(movie.id)}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        sizes="280px"
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
