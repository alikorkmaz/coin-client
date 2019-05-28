import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coinbase from "./pages/Coinbase";
import CoinbaseReverse from "./pages/CoinbaseReverse";
import MainPage from "./pages/MainPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/coinbase" exact component={Coinbase} />
        <Route path="/coinbaseReverse" exact component={CoinbaseReverse} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
