import { type IMovie } from "@/mock_videos";
import { filterMovieById } from "./filterMovieById";
import { PATH_PAGE } from "@/routes/paths";

export const getMovie = (id?: string): Partial<IMovie> => {
  const movie = filterMovieById(id);
  return { ...movie, url: PATH_PAGE.videoMp4(id) };
};
