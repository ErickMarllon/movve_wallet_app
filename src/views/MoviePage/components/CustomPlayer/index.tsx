import { useIsMobile } from "@/hooks/useIsMobile";
import { type IMovie } from "@/requests/movies";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useVideoPlayer } from "./utils/useVideoPlayer";
import { useHandleSkip } from "./utils/useHandleSkip";
import { togglePlay } from "./utils/togglePlay";
import { getNextMovie } from "./utils/getNextMovie";
import { MdArrowBack } from "react-icons/md";
import Play from "@/assets/icons/Play";
import { formatTime } from "@/utils/formatTime";
import Pause from "@/assets/icons/Pause";
import Replay10 from "@/assets/icons/Replay10";
import Forward10 from "@/assets/icons/Forward10";
import Volume from "@/assets/icons/Volume";
import SkipForward from "@/assets/icons/SkipForward";
import NextVideoCard from "../NextVideoCard";
import MediaLibrary from "@/assets/icons/MediaLibrary";
import { toggleFullscreen } from "./utils/toggleFullscreen";
import Fullscreen from "@/assets/icons/Fullscreen";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "@/routes/paths";

interface Props {
  movie?: Partial<IMovie>;
}

export default function CustomPlayer({ movie }: Props) {
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showNextMovie, setShowNextMovie] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVolume, setShowVolume] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const isMobile = useIsMobile();

  const debouncedNextMovie = useDebouncedCallback(
    () => setShowNextMovie(false),
    500
  );
  const debouncedMediaLibrary = useDebouncedCallback(
    () => setShowMediaLibrary(false),
    isMobile ? 1500 : 500
  );
  const debouncedVolume = useDebouncedCallback(() => setShowVolume(false), 500);
  const debouncedHideControls = useDebouncedCallback(() => {
    setShowControls(false);
    setShowMediaLibrary(false);
    setShowNextMovie(false);
    setShowVolume(false);
  }, 3000);

  const { currentTime, progress, setProgress, setIsDragging } = useVideoPlayer({
    videoRef,
  });

  const { skipBackward, skipForward, handleSeek } = useHandleSkip({ videoRef });
  const handleTogglePlay = () => togglePlay(videoRef.current, setIsPlaying);

  const { nextMovie, allMovies } = useMemo(
    () => getNextMovie(movie?.id),
    [movie?.id]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    // const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    // video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      // video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  // useEffect(() => {
  //   if (showControls && !showNextMovie && !showMediaLibrary && !showVolume) {
  //     debouncedHideControls();
  //   }
  // }, [
  //   isPlaying,
  //   showControls,
  //   showNextMovie,
  //   showMediaLibrary,
  //   showVolume,
  //   debouncedHideControls,
  // ]);

  const handleVideoClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isLoading) return;
    e.stopPropagation();
    if (isPlaying) {
      setShowControls((prev) => !prev);
      debouncedHideControls();
      setShowNextMovie(false);
      setShowMediaLibrary(false);
    }
    handleTogglePlay();
  };

  const handleVideoTouch = (e: React.TouchEvent) => {
    if (isLoading) return;

    e.stopPropagation();

    setShowControls((prev) => !prev);
    debouncedHideControls();
  };

  const isControl =
    showControls ||
    showNextMovie ||
    showMediaLibrary ||
    showVolume ||
    showControls;

  const shouldShowControls = (isPlaying && currentTime !== 0) || isControl;

  if (!videoRef) return null;

  return (
    <div className={`${shouldShowControls ? "group" : ""}`}>
      {isLoading && <LoadingSpinner />}

      <MdArrowBack
        onClick={() => navigate(PATH_PAGE.movies)}
        className="z-70 text-foreground rounded-full top-6 left-6 absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-250 cursor-pointer"
        size={40}
      />

      {!isLoading && (!isPlaying || currentTime === 0) && (
        <div className="flex justify-center items-center absolute w-full h-full z-70 bg-black/50 group/bg">
          <button
            onClick={handleVideoClick}
            className="relative flex justify-center items-center p-3 sm:p-5 rounded-full bg-black/70 hover:bg-black/90 transition-colors duration-200 cursor-pointer"
          >
            <Play className="z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </button>
        </div>
      )}

      <video
        ref={videoRef}
        id="Video player"
        aria-label="Video player"
        src={movie?.url}
        preload="metadata"
        poster={movie?.thumbnail}
        controls={false}
        autoPlay
        playsInline
        className="w-full z-50 h-full absolute cursor-pointer"
        onClick={handleVideoClick}
        onTouchStart={handleVideoTouch}
        // onLoadedData={() => setIsLoading(false)}
        // onWaiting={() => setIsLoading(true)}
        onError={() => navigate("/not-found")}
      >
        <source src={movie?.url} type={movie?.mimeType} />
      </video>
      <div
        className={`absolute z-70 w-full bottom-0 px-4 py-6 flex flex-col items-center gap-4 transition-opacity duration-250 ${
          isMobile
            ? showControls
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        }`}
      >
        <div className="w-full rounded-xl flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={100}
            step={0.01}
            value={progress}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onChange={(e) => handleSeek(e.target?.value, setProgress)}
            className="accent-red-500 h-1 w-full relative cursor-pointer  hover:h-2 transition-all duration-250"
          />

          <div className="relative text-white text-sm">
            {formatTime(currentTime)}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-full rounded-xl flex items-center sm:gap-1 md:gap-3">
            <button
              onClick={handleVideoClick}
              className="flex justify-center items-center text-white text-2xl hover:scale-110 transition cursor-pointer p-2"
            >
              {shouldShowControls ? <Pause size={26} /> : <Play size={26} />}
            </button>

            <div className="flex relative justify-center">
              <button
                onClick={() => skipBackward()}
                className="flex justify-center items-center text-white text-2xl hover:scale-110 transition cursor-pointer p-2"
              >
                <Replay10 size={26} />
              </button>
              <button
                onClick={() => skipForward()}
                className="flex justify-center items-center text-white text-2xl hover:scale-110 transition cursor-pointer p-2"
              >
                <Forward10 size={26} />
              </button>
            </div>

            {!isMobile && (
              <span className="relative">
                <Volume
                  onMouseEnter={() => {
                    debouncedVolume.cancel();
                    setShowVolume(true);
                  }}
                  onMouseLeave={debouncedVolume}
                  onClick={() => {
                    const v = 0;
                    if (videoRef.current) {
                      setVolume(v);
                      videoRef.current.volume = v;
                    }
                  }}
                  size={36}
                  percent={volume}
                  className="text-white text-xl cursor-pointer hover:scale-110 transition"
                />
                {showVolume && (
                  <span
                    onMouseEnter={() => {
                      debouncedVolume.cancel();
                      setShowVolume(true);
                    }}
                  >
                    <span className="flex z-70 justify-center items-center absolute px-2 py-3 bottom-28 -right-10 rotate-[-90deg] bg-background rounded-md">
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          if (videoRef.current) {
                            setVolume(v);
                            videoRef.current.volume = v;
                          }
                        }}
                        className="accent-red-500 h-2 w-24 cursor-pointer border-none"
                      />
                    </span>
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="w-full cursor-pointer rounded-xl flex justify-end sm:gap-1 md:gap-3">
            <span>
              <button
                className="flex justify-center items-center text-white text-2xl hover:scale-110 transition p-2 cursor-pointer"
                {...(!isMobile
                  ? {
                      onMouseEnter: () => {
                        debouncedNextMovie.cancel();
                        setShowNextMovie(true);
                        setShowMediaLibrary(false);
                        setShowVolume(false);
                      },
                      onMouseLeave: debouncedNextMovie,
                      onClick: () => {
                        navigate(`/movie/watch/${nextMovie?.id}`);
                      },
                    }
                  : {
                      onClick: () => {
                        debouncedNextMovie.cancel();
                        setShowNextMovie(true);
                        setShowMediaLibrary(false);
                        setShowVolume(false);
                      },
                    })}
                disabled={!nextMovie?.id}
              >
                <SkipForward
                  size={26}
                  className="text-white text-xl hover:scale-110 transition"
                />
              </button>

              {nextMovie && showNextMovie && (
                <div
                  {...(!isMobile
                    ? {
                        onMouseEnter: () => {
                          debouncedNextMovie.cancel();
                          setShowNextMovie((prev) => !prev);
                          setShowNextMovie(true);
                          setShowMediaLibrary(false);
                          setShowVolume(false);
                        },
                        onMouseLeave: debouncedNextMovie,
                      }
                    : {
                        onClick: () => {
                          debouncedNextMovie.cancel();
                          setShowNextMovie((prev) => !prev);
                          setShowMediaLibrary(false);
                          setShowVolume(false);
                        },
                      })}
                  className="absolute py-6 pl-4 bottom-18 right-0 transition-all duration-200"
                >
                  <div className="flex flex-col max-w-3xl rounded-[6px] overflow-hidden bg-zinc-900">
                    <h2 className="text-base sm:text-lg md:text-2xl rounded-t-[6px] py-4 px-4 sm:px-6 md:px-8 font-[600] hover:bg-zinc-700">
                      Próximo vídeo
                    </h2>
                    <NextVideoCard {...nextMovie} />
                  </div>
                </div>
              )}
            </span>

            <span>
              <button
                {...(!isMobile
                  ? {
                      onMouseEnter: () => {
                        debouncedMediaLibrary.cancel();
                        setShowMediaLibrary(true);
                        setShowNextMovie(false);
                        setShowVolume(false);
                      },
                      onMouseLeave: debouncedNextMovie,
                    }
                  : {
                      onClick: () => {
                        debouncedMediaLibrary.cancel();
                        setShowMediaLibrary((prev) => !prev);
                        setShowNextMovie(false);
                        setShowVolume(false);
                      },
                    })}
                className="flex cursor-pointer relative justify-center items-center text-white text-2xl hover:scale-110 transition p-2"
              >
                <MediaLibrary
                  size={26}
                  className="text-white text-xl  hover:scale-110 transition"
                />
              </button>
              {showMediaLibrary && allMovies && (
                <span
                  {...(!isMobile
                    ? {
                        onMouseEnter: () => {
                          debouncedMediaLibrary.cancel();
                          setShowMediaLibrary(true);
                          setShowNextMovie(false);
                          setShowVolume(false);
                        },
                        onMouseLeave: debouncedNextMovie,
                      }
                    : {
                        onClick: () => {
                          setShowMediaLibrary((prev) => !prev);
                          setShowNextMovie(false);
                          setShowVolume(false);
                        },
                      })}
                  className="absolute py-6 pl-4 bottom-18 right-0 transition-all duration-200"
                >
                  <span>
                    <h2 className="text-base sm:text-lg md:text-2xl rounded-t-[6px] py-4  px-4 sm:px-6 md:px-8 font-[600] bg-zinc-900 hover:bg-zinc-700">
                      Próximo vídeo
                    </h2>
                    {allMovies.map((m, index) => (
                      <div
                        key={m.id}
                        className={`flex group/next flex-col max-w-3xl overflow-hidden bg-zinc-900 ${
                          index === allMovies.length - 1
                            ? "rounded-b-[6px]"
                            : ""
                        }`}
                      >
                        {m.id === movie?.id ? (
                          <NextVideoCard {...m} disabled />
                        ) : (
                          <span
                            onClick={() =>
                              m?.id && navigate(`/movie/watch/${m.id}`)
                            }
                            className="text-xs py-4  px-4 sm:px-6 md:px-8  flex gap-4 font-[600] sm:text-base md:text-lg hover:bg-zinc-700"
                          >
                            {m.position}
                            <h3 className="whitespace-nowrap">{m.title}</h3>
                          </span>
                        )}
                      </div>
                    ))}
                  </span>
                </span>
              )}
            </span>

            <button
              onClick={() => toggleFullscreen(videoRef)}
              className="flex justify-center items-center text-white text-2xl hover:scale-110 transition cursor-pointer p-2"
            >
              <Fullscreen size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
