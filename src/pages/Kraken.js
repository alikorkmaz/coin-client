import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";
import { fetchKraken, fetchUsd } from "../actions";

class Kraken extends React.Component {
  componentDidMount() {
    this.props.fetchUsd();
    this.props.fetchKraken();
  }
  render() {
    return (
      <div>
        <Table pairs={this.props.kraken} usd={6.77} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kraken: Object.values(state.kraken),
    usd: state.usd
  };
};

export default connect(
  mapStateToProps,
  { fetchKraken, fetchUsd }
)(Kraken);
