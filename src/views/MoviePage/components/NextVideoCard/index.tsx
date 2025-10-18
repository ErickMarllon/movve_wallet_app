import Play from "@/assets/icons/Play";
import { type IMovie } from "@/requests/movies";
import { useNavigate } from "react-router-dom";

interface Props extends IMovie {
  disabled?: boolean;
}
export default function NextVideoCard({ disabled, ...props }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => !disabled && navigate(`/movie/watch/${props?.id}`)}
      className="relative grid bg-zinc-950 min-w-[360px] grid-cols-[1rf_auto] overflow-hidden p-4 sm:p-6 md:p-8   group/next"
    >
      <div className="relative flex flex-col">
        <span className="relative text-xs pb-2 flex gap-4 font-[600] sm:text-base md:text-lg -mt-3">
          {props.position}
          <h3 className="relative whitespace-nowrap">{props.title}</h3>
        </span>
        <div className="flex gap-4 relative">
          <div className="relative flex justify-center min-w-[120px] max-w-[250px] w-full items-center aspect-video">
            <img
              src={props.thumbnail}
              alt={props.title}
              className="absolute inset-0 w-full h-full object-cover object-top-left"
              loading="lazy"
            />
            {!disabled && (
              <span className="absolute bg-black/70 group-hover/next:bg-black/90 p-2 sm:p-4  rounded-full transition-colors duration-200">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
            )}
          </div>
          <p className="flex text-xs font-[400] line-clamp-3 sm:text-base md:text-base overflow-hidden">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
