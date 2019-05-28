import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";

class Coinbase extends React.Component {
  getTopParibu = () =>
    this.props.coinbaseReverse.find(item => item.title.indexOf("PARIBU") > 0);

  getTopBtcturk = () =>
    this.props.coinbaseReverse.find(item => item.title.indexOf("BTCTURK") > 0);

  getTopKoineks = () =>
    this.props.coinbaseReverse.find(item => item.title.indexOf("KOINEKS") > 0);

  render() {
    return (
      <div>
        <Table
          pairs={this.props.coinbase}
          topParibu={this.getTopParibu()}
          topBtcturk={this.getTopBtcturk()}
          topKoineks={this.getTopKoineks()}
          usd={this.props.usd}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coinbase: Object.values(state.coinbase),
    coinbaseReverse: Object.values(state.coinbaseReverse),
    usd: state.usd
  };
};

export default connect(
  mapStateToProps,
  null
)(Coinbase);
