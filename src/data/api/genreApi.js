import http from "../http";

const apiKey = "6e9f58b0553fbdda81bcbf45e2b3ff1f"; // move to environment variable

export const getMovieGenres = () => {
  return http.get({
    url: `/genre/movie/list?api_key=${apiKey}&language=en-US`,
  });
};

export const getTvGenres = () => {
  return http.get({
    url: `/genre/tv/list?api_key=${apiKey}&language=en-US`,
  });
};
