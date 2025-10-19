import { PATH_PAGE } from "@/routes/paths";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

type Pattern = string;
export const ACTIVE_COMPONENTS = {
  navbar: [PATH_PAGE.home, PATH_PAGE.movies],
  footer: [PATH_PAGE.home, PATH_PAGE.movies],
};

export default function useShowOnlyOnRoutes(patterns: Pattern[] = []) {
  const { pathname } = useLocation();

  return useMemo(() => {
    if (!pathname) return false;

    if (!patterns || patterns.length === 0) return true;

    return patterns.some((pattern) => matchPattern(pattern, pathname));
  }, [patterns, pathname]);
}

function matchPattern(pattern: Pattern, pathname: string) {
  const trimmed = pattern.trim();

  if (trimmed.startsWith("regex:")) {
    try {
      const rx = new RegExp(trimmed.slice(6));
      return rx.test(pathname);
    } catch {
      return false;
    }
  }

  if (trimmed.endsWith("/*")) {
    const base = trimmed.slice(0, -2);
    return pathname === base || pathname.startsWith(base + "/");
  }

  if (trimmed.startsWith("*")) {
    const suffix = trimmed.slice(1);
    return pathname.endsWith(suffix);
  }

  return pathname === trimmed;
}
