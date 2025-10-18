export const togglePlay = (
  video: HTMLVideoElement | null,
  setIsPlaying: (value: boolean) => void
) => {
  if (!video) return;

  if (video.paused) {
    video.play();
    setIsPlaying(true);
  } else {
    video.pause();
    setIsPlaying(false);
  }
};
