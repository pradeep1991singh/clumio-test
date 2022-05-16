import React from "react";
const PopularList = React.lazy(() => import("../pages/PopularList"));
const NewestList = React.lazy(() => import("../pages/NewestList"));
const TopRatedList = React.lazy(() => import("../pages/TopRatedList"));
const TrendList = React.lazy(() => import("../pages/TrendList"));

export const routesList = [
  {
    key: "trend",
    path: "/trend",
    name: "TREND",
    exact: false,
    component: PopularList,
  },
  {
    key: "newest",
    path: "/newest",
    name: "NEWEST",
    exact: false,
    component: PopularList,
  },
  {
    key: "top-rated",
    path: "/top-rated",
    name: "TOP RATED",
    exact: false,
    component: PopularList,
  },
  {
    key: "popular",
    path: "/",
    name: "POPULAR",
    exact: true,
    component: PopularList,
  },
];
