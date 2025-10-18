import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(check);
  }, []);

  return isMobile;
}
