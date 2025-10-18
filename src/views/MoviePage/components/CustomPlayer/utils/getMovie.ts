import { type IMovie } from "@/requests/movies";
import { filterMovieById } from "./filterMovieById";

export const getMovie = (id?: string): Partial<IMovie> => {
  const movie = filterMovieById(id);
  return { ...movie, url: `/movies/${id}.mp4` };
};
