import React from "react";
import Coinbase from "./Coinbase";
import CoinbaseReverse from "./CoinbaseReverse";

import { connect } from "react-redux";

import { fetchCoinbaseReverse, fetchCoinbase, fetchUsd } from "../actions";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchCoinbaseReverse();
    this.props.fetchCoinbase();
    this.props.fetchUsd();
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <Coinbase />
        </div>
        <div className="col-6">
          <CoinbaseReverse />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchCoinbase, fetchCoinbaseReverse, fetchUsd }
)(MainPage);
