import React from "react";
import Grid from "../core/Grid";
import SkeletonList from "../core/SkeletonList";
import { useGetTopRatedList } from "../data/hooks/movies";
import Error from "../core/Error";

const TopRatedList = ({ filterType, filter }) => {
  const { isLoading, error, data } = useGetTopRatedList(filterType, filter);

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
          Top Rated
        </div>
        <Grid items={data} />
      </>
    );
  }
  return null;
};

export default TopRatedList;
