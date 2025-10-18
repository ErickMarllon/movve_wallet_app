import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface UseVideoPlayerResult {
  currentTime: number;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
}
interface Props {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export const useVideoPlayer = ({ videoRef }: Props): UseVideoPlayerResult => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!isDragging && video.currentTime && video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.duration - video.currentTime);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [isDragging, videoRef]);

  return {
    currentTime,
    progress,
    setProgress,
    isDragging,
    setIsDragging,
  };
};
