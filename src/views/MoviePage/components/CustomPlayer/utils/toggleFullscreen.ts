export const toggleFullscreen = (
  videoRef: React.RefObject<HTMLVideoElement | null>
) => {
  if (!videoRef.current) return;

  const video = videoRef.current;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc: any = document;

  if (doc.fullscreenElement || doc.webkitFullscreenElement) {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    }
    return;
  }

  if (video.requestFullscreen) {
    video.requestFullscreen();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } else if ((video as any).webkitRequestFullscreen) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (video as any).webkitRequestFullscreen();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } else if ((video as any).msRequestFullscreen) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (video as any).msRequestFullscreen();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } else if ((video as any).webkitEnterFullscreen) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (video as any).webkitEnterFullscreen();
  }
};
