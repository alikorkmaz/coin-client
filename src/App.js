import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Kraken from "./pages/Kraken";
import MainPage from "./pages/MainPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/coin-client" exact component={MainPage} />
        <Route path="/coin-client/kraken" exact component={Kraken} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
