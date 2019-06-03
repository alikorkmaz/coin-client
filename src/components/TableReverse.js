import React from "react";
import TableItemReverse from "./TableItemReverse";

import { connect } from "react-redux";

import {
  addSelectionsReverse,
  removeSelectionsReverse,
  fetchSelectionsReverse
} from "../actions";

class TableReverse extends React.Component {
  componentDidMount() {
    this.props.fetchSelectionsReverse();
  }

  shouldAlert(title) {
    return this.props.titles.some(titleInTitles => title === titleInTitles);
  }

  addTitle(title) {
    let tmp = [];
    tmp.push(title);
    this.props.addSelectionsReverse(tmp);
  }

  removeTitle(title) {
    let tmp = [];
    tmp.push(title);
    this.props.removeSelectionsReverse(tmp);
  }

  addTitleAll = () => {
    let tmp = [];
    this.props.pairs.forEach(pair => {
      tmp.push(pair.title);
    });
    this.props.addSelectionsReverse(tmp);
  };

  removeTitleAll = () => {
    let tmp = [];
    this.props.pairs.forEach(pair => {
      tmp.push(pair.title);
    });
    this.props.removeSelectionsReverse(tmp);
  };

  render() {
    return (
      <div>
        {" "}
        <div className="text-right">
          <button onClick={this.addTitleAll}>Add All</button>{" "}
          <button onClick={this.removeTitleAll}>Remove All</button>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-custom">
            <thead>
              <tr>
                <th scope="col">Result</th>
                <th scope="col" />
                <th scope="col">Sell</th>
                <th scope="col" />
                <th scope="col" />
                <th scope="col">Buy</th>
                <th scope="col" />
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {this.props.pairs.map((pair, index) => (
                <TableItemReverse
                  pair={pair}
                  key={index}
                  topParibu={this.props.topParibu}
                  topBtcturk={this.props.topBtcturk}
                  topKoineks={this.props.topKoineks}
                  usd={this.props.usd}
                  shouldAlert={this.shouldAlert(pair.title)}
                  addTitle={title => this.addTitle(title)}
                  removeTitle={title => this.removeTitle(title)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    titles: state.selectionsReverse
  };
};

export default connect(
  mapStateToProps,
  { addSelectionsReverse, removeSelectionsReverse, fetchSelectionsReverse }
)(TableReverse);
