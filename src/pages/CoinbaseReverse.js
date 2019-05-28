import React from "react";
import { connect } from "react-redux";

import TableReverse from "../components/TableReverse";

class Coinbase extends React.Component {
  getTopParibu = () =>
    this.props.coinbase.find(item => item.title.indexOf("PARIBU") > 0);

  getTopBtcturk = () =>
    this.props.coinbase.find(item => item.title.indexOf("BTCTURK") > 0);

  getTopKoineks = () =>
    this.props.coinbase.find(item => item.title.indexOf("KOINEKS") > 0);

  render() {
    return (
      <div>
        <TableReverse
          pairs={this.props.coinbaseReverse}
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
    coinbaseReverse: Object.values(state.coinbaseReverse),
    coinbase: Object.values(state.coinbase),
    usd: state.usd
  };
};

export default connect(
  mapStateToProps,
  null
)(Coinbase);
