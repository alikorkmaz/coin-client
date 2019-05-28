import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Kraken from "./pages/Kraken";
import MainPage from "./pages/MainPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/kraken" exact component={Kraken} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
