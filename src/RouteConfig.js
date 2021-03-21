import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { HomePage, GamePage, ResultPage } from "./pages";

const RouteConfiguration = () => {
  return (
    <HashRouter>
      <Route exact={true} path={"/"} component={HomePage} />
      <Route exact={true} path={"/game"} component={GamePage} />
      <Route exact={true} path={"/results/:id"} component={ResultPage} />
    </HashRouter>
  );
};

export default RouteConfiguration;