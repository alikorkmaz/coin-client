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
      <div className="container">
        <p className="text-center">Kur: {this.props.usd}</p>
        <div className="row">
          <div className="col-md-6">
            <Coinbase />
          </div>
          <div className="col-md-6">
            <CoinbaseReverse />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usd: state.usd
  };
};

export default connect(
  mapStateToProps,
  { fetchCoinbase, fetchCoinbaseReverse, fetchUsd }
)(MainPage);
