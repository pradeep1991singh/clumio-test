import React, { Suspense, useCallback, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { routesList } from "./components/Routes";
import Sidebar from "./components/Sidebar";

const PopularList = React.lazy(() => import("./pages/PopularList"));
const NewestList = React.lazy(() => import("./pages/NewestList"));
const TopRatedList = React.lazy(() => import("./pages/TopRatedList"));
const TrendList = React.lazy(() => import("./pages/TrendList"));

function App() {
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");

  const onFilterChange = ({ value, type }) => {
    setFilter(value);
    setFilterType(type);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="lg:flex lg:flex-row-reverse">
          <Sidebar onFilterChange={onFilterChange} />
          <div>
            <NavigationBar onFilterChange={onFilterChange} />
            <Suspense fallback={"Loading..."}>
              <Switch>
                {/* {routesList.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    component={() => (
                      <route.component
                        filter={filter}
                        filterType={filterType}
                      />
                    )}
                  />
                ))} */}
                <Route path="/" exact>
                  <PopularList
                    listType="popular"
                    filter={filter}
                    filterType={filterType}
                  />
                </Route>
                <Route path="/trend">
                  <TrendList
                    listType="trend"
                    filter={filter}
                    filterType={filterType}
                  />
                </Route>
                <Route path="/newest">
                  <NewestList
                    listType="newest"
                    filter={filter}
                    filterType={filterType}
                  />
                </Route>
                <Route path="/top-rated">
                  <TopRatedList
                    listType="top-rated"
                    filter={filter}
                    filterType={filterType}
                  />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
