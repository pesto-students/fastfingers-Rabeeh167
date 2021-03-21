import React from "react";
import RouteConfig from "./RouteConfig";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app-bg" />
      <div className="app-bg-pattern" />
      <div id="toast" />
      <RouteConfig />
    </>
  );
}

export default App;
