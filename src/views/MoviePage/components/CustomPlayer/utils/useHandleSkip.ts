interface Props {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export const useHandleSkip = ({ videoRef }: Props) => {
  const video = videoRef.current;

  const skipForward = (seconds = 10) => {
    if (!video) return;

    const newTime = Math.min(video.currentTime + seconds, video.duration);

    video.currentTime = newTime;
  };

  const skipBackward = (seconds = 10) => {
    if (!video) return;

    const newTime = Math.max(video.currentTime - seconds, 0);
    video.currentTime = newTime;
  };

  const handleSeek = (
    NewValue: string,
    setProgress: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!video) return;
    const value = Number(NewValue);
    const newTime = (value / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(value);
  };

  return { skipForward, skipBackward, handleSeek };
};
