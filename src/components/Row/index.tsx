import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { type IMovie } from "@/mock_videos";
import Movie from "../Movie";
import { useState, useRef, useCallback } from "react";

interface Props {
  title?: string;
  movies: IMovie[];
  rowID: string;
}

export default function Row({ title, movies, rowID }: Props) {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    setShowLeftBtn(slider.scrollLeft > 0);

    setShowRightBtn(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1
    );
  }, []);

  const sliderLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft -= 500;
      setTimeout(checkScrollButtons, 100);
    }
  };

  const sliderRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft += 500;
      setTimeout(checkScrollButtons, 100);
    }
  };

  return (
    <section>
      <h2 className="text-white font-bold md:text-xl px-4 py-1 capitalize">
        {title?.toLowerCase()}
      </h2>
      <div className="flex items-center group/scroll relative">
        {showLeftBtn && (
          <MdChevronLeft
            onClick={sliderLeft}
            className="opacity-0 group-hover/scroll:block bg-white text-background rounded-full left-0 absolute group-hover/scroll:opacity-40 hover:opacity-80 cursor-pointer z-10 transition-all duration-200"
            size={40}
          />
        )}
        <div
          ref={sliderRef}
          id={"slider" + rowID}
          className="grid grid-flow-col auto-cols-[180px] sm:auto-cols-[220px] md:auto-cols-[240px] lg:auto-cols-[280px] scrollbar-hide overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-6"
          onScroll={checkScrollButtons}
          onLoad={checkScrollButtons}
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        {showRightBtn && (
          <MdChevronRight
            onClick={sliderRight}
            className="opacity-0 group-hover/scroll:block bg-white text-background rounded-full right-0 absolute group-hover/scroll:opacity-40 hover:opacity-80 cursor-pointer z-10 transition-all duration-200"
            size={40}
          />
        )}
      </div>
    </section>
  );
}
