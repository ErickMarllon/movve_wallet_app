import { type IMovie } from "@/mock_videos";
import { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "../Movie";

interface Props {
  title?: string;
  movies: IMovie[];
  rowID: string;
  disableScroll?: boolean;
}

export default function Row({
  title,
  movies,
  rowID,
  disableScroll = false,
}: Props) {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (disableScroll) return;

    const slider = sliderRef.current;
    if (!slider) return;

    setShowLeftBtn(slider.scrollLeft > 0);

    setShowRightBtn(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1
    );
  };

  const sliderLeft = () => {
    if (disableScroll) return;

    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft -= 500;
      setTimeout(checkScrollButtons, 100);
    }
  };

  const sliderRight = () => {
    if (disableScroll) return;

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
        {!disableScroll && showLeftBtn && (
          <MdChevronLeft
            onClick={sliderLeft}
            className="opacity-0 group-hover/scroll:block bg-white text-background rounded-full left-0 absolute group-hover/scroll:opacity-40 hover:opacity-80 cursor-pointer z-10 transition-all duration-200"
            size={40}
          />
        )}
        <div
          ref={sliderRef}
          id={"slider" + rowID}
          className={`grid grid-flow-col auto-cols-[180px] sm:auto-cols-[220px] md:auto-cols-[240px] lg:auto-cols-[280px] scrollbar-hide whitespace-nowrap scroll-smooth gap-6 ${
            disableScroll
              ? "overflow-x-hidden touch-pan-x"
              : "overflow-x-scroll"
          }`}
          onScroll={disableScroll ? undefined : checkScrollButtons}
          onLoad={disableScroll ? undefined : checkScrollButtons}
          style={{
            scrollBehavior: disableScroll ? "auto" : "smooth",
          }}
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        {!disableScroll && showRightBtn && (
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
