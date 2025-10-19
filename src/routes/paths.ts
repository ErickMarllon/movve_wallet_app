function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const PATH_PAGE = {
  home: "/",
  movies: "/movies",
  movieWatch: "/movie/watch/:id",
  file: "/file/:lng",
  notfound: "/notfound",

  fileLng: (lng: string) => path(`/file`, `/${lng}`),
  movieWatchId: (id?: string) => path(`/movie/watch`, `/${id}`),
  videoMp4: (id?: string) => path(`/videos`, `/${id}.mp4`),
};
