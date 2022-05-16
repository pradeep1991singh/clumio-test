import React from "react";
import Grid from "../core/Grid";
import SkeletonList from "../core/SkeletonList";
import { useGetNewestList } from "../data/hooks/movies";
import Error from "../core/Error";

const NewestList = ({ filterType, filter }) => {
  const { isLoading, error, data } = useGetNewestList(filterType, filter);

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
          Newest
        </div>
        <Grid items={data} />
      </>
    );
  }
  return null;
};

export default NewestList;
