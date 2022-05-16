import { getFullYear } from "./date";

export const transformMoviesData = (movies, genres = {}) => {
  return movies.map((movie) => {
    movie.posterPath = movie.poster_path
      ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
      : "https://via.placeholder.com/150";
    movie.releaseYear = getFullYear(movie.release_date);
    movie.genreList =
      (movie.genre_ids || movie.genres)
        .map((genreId) => genres[genreId] && genres[genreId].name)
        .join(", ") || "";
    return movie;
  });
};

export const delayFn = async (fn, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn), ms);
  });
};

export const generatePastYear = (limit, fromYear) => {
  let yearNow = fromYear || parseInt(new Date().getFullYear());
  let yearsOptions = [];
  for (var i = limit; i > 0; i--) {
    yearsOptions.push({ id: yearNow, name: yearNow });
    yearNow = yearNow - 1;
  }
  return yearsOptions;
};

export const filterList = (data, filterType, filter, genres) => {
  let items = data.results;
  if (filter) {
    items = items.filter((item) => {
      if (filterType === "title") {
        return (
          item[filterType].toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );
      } else if (filterType === "genreList") {
        if (item[filterType]) {
          let genreList = item[filterType].split(",");
          return genreList.indexOf(filter) >= 0;
        } else {
          return true;
        }
      } else if (filterType === "releaseYear") {
        // todo: fix this
        // console.log(filterType);
        // const [startDate, endDate] = filter.split("-");
        const releaseYear = item[filterType];
        // console.log(filterType, startDate, releaseYear);
        return parseInt(filter) === releaseYear;
        // return (
        //   parseInt(startDate) <= releaseYear && releaseYear <= parseInt(endDate)
        // );
      } else if (filterType === "vote_average") {
        const rating = Math.floor(item[filterType] / 2);
        return rating >= filter;
      } else {
        return true;
      }
    });
  }
  return transformMoviesData(items, genres);
};
