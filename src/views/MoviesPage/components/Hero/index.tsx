import { type IMovie, type IMovies, request } from "@/mock_videos";
import { useEffect, useState } from "react";
import { useI18n } from "@/context/context";
import Play from "@/assets/icons/Play";
import { PATH_PAGE } from "@/routes/paths";
import { Link } from "react-router-dom";

interface Props {
  movies: IMovies[];
}
export default function Hero({ movies }: Props) {
  const [movie, setMovie] = useState<IMovie>(request?.[0]?.movies[1]);
  const { i18n } = useI18n();

  useEffect(() => {
    const list = movies;

    const moviePos = list
      .filter((m) => m.code === i18n.language)
      .flatMap((m) => m.movies)
      .find((m) => m.position === 2);

    setMovie(moviePos ?? request?.[0]?.movies[1]);
  }, [i18n.language, movies]);

  return (
    <div className="relative w-full max-h-[633px] aspect-[16/12]  md:aspect-[16/9] h-full text-white">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full z-10  bg-gradient-to-r from-background/100 via-background/10 to-background/0" />
        <div className="absolute w-full h-full z-10 bg-gradient-to-t from-background/100 via-background/10 to-background/0" />
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover object-top-left"
          loading="lazy"
        />
        <div className="absolute w-full z-20 top-[30%] md:top-[20%] p-4 md:p-8">
          <h1 className="text-[clamp(18px,4vw,36px)] font-bold capitalize">
            {movie?.title?.toLowerCase()}
          </h1>
          <p className="text-[clamp(12px,1.5vw,18px)] max-w-[438px] line-clamp-2 xs:line-clamp-3">
            {movie?.description}
          </p>
          <div className="my-4">
            <Link
              to={PATH_PAGE.movieWatchId(movie?.id)}
              className="border rounded-[4px] flex gap-3 items-center justify-center bg-gray-300 text-black border-gray-300
             w-[clamp(100px,10vw,140px)] h-[clamp(32px,4vw,44px)]
             text-[clamp(12px,1.5vw,16px)] py-2 px-3 md:py-0 sm:px-2 cursor-pointer
             "
            >
              <Play size={26} />
              <span className="font-bold ">
                {i18n.t(`watch:watch.${i18n.language}`)}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
