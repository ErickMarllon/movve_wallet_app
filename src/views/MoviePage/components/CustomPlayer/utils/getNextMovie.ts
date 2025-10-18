import { request } from "@/requests/movies";

export function getNextMovie(id?: string) {
  for (const group of request) {
    const index = group.movies.findIndex((m) => m.id === id);
    if (index !== -1) {
      const nextMovie = group.movies[index + 1] ?? null;
      return {
        nextMovie,
        allMovies: group.movies,
        language: group.language,
      };
    }
  }

  return { nextMovie: null, allMovies: [], language: "" };
}
