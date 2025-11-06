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
      className="min-w-[160px] max-w-[280px] aspect-[11/16]  w-full  min-h-[240px] max-h-[402px]
      inline-block cursor-pointer relative rounded-3xl overflow-hidden border border-accent-green/50"
      to={PATH_PAGE.movieWatchId(movie.id)}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        width={280}
        height={402}
        className="object-cover object-top-center"
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
