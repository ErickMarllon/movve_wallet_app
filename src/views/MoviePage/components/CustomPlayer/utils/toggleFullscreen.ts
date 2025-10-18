export const toggleFullscreen = (
  videoRef: React.RefObject<HTMLVideoElement | null>
) => {
  if (!videoRef.current) return;

  const video = videoRef.current;
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
  } else if ((video as any).webkitRequestFullscreen) {
    (video as any).webkitRequestFullscreen();
  } else if ((video as any).msRequestFullscreen) {
    (video as any).msRequestFullscreen();
  } else if ((video as any).webkitEnterFullscreen) {
    (video as any).webkitEnterFullscreen();
  }
};
