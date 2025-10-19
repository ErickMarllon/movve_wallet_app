import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { type IMovie } from "@/mock_videos";
import Movie from "../Movie";

interface Props {
  title?: string;
  movies: IMovie[];
  rowID: string;
}

export default function Row({ title, movies, rowID }: Props) {
  const sliderLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    if (slider) slider.scrollLeft -= 500;
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider" + rowID);
    if (slider) slider.scrollLeft += 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl px-4 py-1 capitalize">
        {title?.toLowerCase()}
      </h2>
      <div className="flex items-center group/scroll relative">
        <MdChevronLeft
          onClick={sliderLeft}
          className="opacity-0 group-hover/scroll:block bg-white text-background rounded-full left-0 absolute group-hover/scroll:opacity-40 hover:opacity-80 cursor-pointer z-10 transition-all duration-200"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="grid grid-flow-col auto-cols-[180px] sm:auto-cols-[220px] md:auto-cols-[240px] lg:auto-cols-[280px] scrollbar-hide overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-1.5"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="opacity-0 group-hover/scroll:block bg-white text-background rounded-full right-0 absolute group-hover/scroll:opacity-40 hover:opacity-80 cursor-pointer z-10 transition-all duration-200"
          size={40}
        />
      </div>
    </div>
  );
}
