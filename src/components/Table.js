import React from "react";
import TableItem from "./TableItem";

import { connect } from "react-redux";

import { addSelections, removeSelections, fetchSelections } from "../actions";

class Table extends React.Component {
  componentDidMount() {
    this.props.fetchSelections();
  }

  shouldAlert(title) {
    return this.props.titles.some(titleInTitles => title === titleInTitles);
  }

  addTitle(title) {
    let tmp = [];
    tmp.push(title);
    this.props.addSelections(tmp);
  }

  removeTitle(title) {
    let tmp = [];
    tmp.push(title);
    this.props.removeSelections(tmp);
  }

  addTitleAll = () => {
    let tmp = [];
    this.props.pairs.forEach(pair => {
      tmp.push(pair.title);
    });
    this.props.addSelections(tmp);
  };

  removeTitleAll = () => {
    let tmp = [];
    this.props.pairs.forEach(pair => {
      tmp.push(pair.title);
    });
    this.props.removeSelections(tmp);
  };

  render() {
    return (
      <div>
        {" "}
        <button onClick={this.addTitleAll}>Add All</button>{" "}
        <button onClick={this.removeTitleAll}>Remove All</button>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-custom">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col" />
                <th scope="col">Buy</th>
                <th scope="col" />
                <th scope="col" />
                <th scope="col">Sell</th>
                <th scope="col" />
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              {this.props.pairs.map((pair, index) => (
                <TableItem
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
    titles: state.selections
  };
};

export default connect(
  mapStateToProps,
  { addSelections, removeSelections, fetchSelections }
)(Table);
