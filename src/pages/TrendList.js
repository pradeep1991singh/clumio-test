import React from "react";
import Grid from "../core/Grid";
import SkeletonList from "../core/SkeletonList";
import { useGetTrendList } from "../data/hooks/movies";
import Error from "../core/Error";

const TrendList = ({ filterType, filter }) => {
  const { isLoading, error, data } = useGetTrendList(filterType, filter);

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
          Trending
        </div>
        <Grid items={data} />
      </>
    );
  }
  return null;
};

export default TrendList;
