import { type IMovie, request } from "@/requests/movies";

export function filterMovieById(id?: string): IMovie | null {
  if (!id) return null;
  for (const group of request) {
    const index = group.movies.findIndex((m) => m.id === id);
    if (index !== -1) {
      return group.movies[index];
    }
  }
  return null;
}
