import { keyBy } from "lodash";
import { useQuery } from "react-query";
import { getMovieGenres, getTvGenres } from "../api/genreApi";

export const useGetGenreList = () => {
  const getAllGenres = () => {
    return Promise.all([getMovieGenres(), getTvGenres()]);
  };
  return useQuery("genres", getAllGenres, {
    enabled: true,
    refetchOnMount: true,
    select: (data) => {
      if (data && data[0] && data[0].genres && data[1] && data[1].genres) {
        const items = data[0].genres.concat(data[1].genres);
        return keyBy(items, "id");
      }
    },
  });
};
