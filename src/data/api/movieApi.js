import http from "../http";

const apiKey = "6e9f58b0553fbdda81bcbf45e2b3ff1f"; // move to environment variable

export const getPopular = () => {
  return http.get({
    url: `/movie/popular?api_key=${apiKey}`,
  });
};

export const getTrending = () => {
  return http.get({
    url: `/trending/all/week?api_key=${apiKey}`,
  });
};

export const getNewest = () => {
  return http.get({
    url: `/movie/latest?api_key=${apiKey}`,
  });
};

export const getTopRated = () => {
  return http.get({
    url: `/movie/top_rated?api_key=${apiKey}`,
  });
};
