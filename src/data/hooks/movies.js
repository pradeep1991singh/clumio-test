import { useQuery } from "react-query";
import { filterList } from "../../services/utils";
import {
  getPopular,
  getTrending,
  getNewest,
  getTopRated,
} from "../api/movieApi";
import { useGetGenreList } from "./genres";

export const useGetPopularList = (filterType, filter) => {
  const { data: genres } = useGetGenreList();
  return useQuery("popularList", getPopular, {
    select: (data) => filterList(data, filterType, filter, genres), // debounce this
    refetch: true,
  });
};

export const useGetTrendList = (filterType, filter) => {
  const { data: genres } = useGetGenreList();
  return useQuery("trendList", getTrending, {
    select: (data) => filterList(data, filterType, filter, genres), // debounce this
    refetch: true,
  });
};

export const useGetNewestList = (filterType, filter) => {
  const { data: genres } = useGetGenreList();
  return useQuery("newestList", getNewest, {
    select: (data) =>
      filterList({ results: [data] }, filterType, filter, genres), // debounce this
    refetch: true,
  });
};

export const useGetTopRatedList = (filterType, filter) => {
  const { data: genres } = useGetGenreList();
  return useQuery("topRatedList", getTopRated, {
    select: (data) => filterList(data, filterType, filter, genres), // debounce this
    refetch: true,
  });
};
