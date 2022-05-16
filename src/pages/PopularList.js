import React from "react";
import Error from "../core/Error";
import Grid from "../core/Grid";
import SkeletonList from "../core/SkeletonList";
import { useGetPopularList } from "../data/hooks/movies";

const PopularList = ({ filterType, filter }) => {
  const { isLoading, error, data } = useGetPopularList(filterType, filter);

  if (isLoading) {
    return <SkeletonList />;
  }

  if (error) {
    return <Error message="Page Errored" />;
  }

  if (data) {
    return (
      <>
        <div className="font-semibold text-xl tracking-tight dark:text-gray-300 p-10">
          Popular
        </div>
        <Grid items={data} />
      </>
    );
  }
  return null;
};

export default PopularList;
