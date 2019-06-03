import React from "react";

class TableItem extends React.Component {
  state = {};
  changeRatio = 0.001;
  profitMargin = 0.05;
  profitMarginCross = 0.05;

  componentDidMount() {
    this.setState({
      title: this.props.pair.title,
      commission: this.props.pair.commission,
      buy: this.props.pair.buy,
      sell: this.props.pair.sell,
      result: this.props.pair.result,
      isSelected: this.props.shouldAlert
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props)
      this.setState({
        title: this.props.pair.title,
        commission: this.props.pair.commission,
        buy: this.props.pair.buy,
        sell: this.props.pair.sell,
        result: this.props.pair.result
      });
  }

  increaseBuy = () => {
    this.setState(prevState => ({
      buy: prevState.buy + prevState.buy * this.changeRatio,
      result: prevState.result - prevState.result * this.changeRatio
    }));
  };

  decreaseBuy = () => {
    this.setState(prevState => ({
      buy: prevState.buy - prevState.buy * this.changeRatio,
      result: prevState.result + prevState.result * this.changeRatio
    }));
  };

  increaseSell = () => {
    this.setState(prevState => ({
      sell: prevState.sell + prevState.sell * this.changeRatio,
      result: prevState.result + prevState.result * this.changeRatio
    }));
  };

  decreaseSell = () => {
    this.setState(prevState => ({
      sell: prevState.sell - prevState.sell * this.changeRatio,
      result: prevState.result - prevState.result * this.changeRatio
    }));
  };

  renderClasses() {
    if (this.state.result > +this.props.usd + this.profitMargin)
      return "positive";
    if (this.props.topKoineks) {
      if (
        this.state.title.indexOf("PARIBU") > 0 &&
        this.state.result >
          +this.props.topParibu.result + this.profitMarginCross
      )
        return "paribu";
      if (
        this.state.title.indexOf("BTCTURK") > 0 &&
        this.state.result >
          +this.props.topBtcturk.result + this.profitMarginCross
      )
        return "btcturk";
      if (
        this.state.title.indexOf("KOINEKS") > 0 &&
        this.state.result >
          +this.props.topKoineks.result + this.profitMarginCross
      )
        return "koineks";
    }
  }

  handleCheckboxClick = () => {
    if (!this.state.isSelected) {
      this.props.addTitle(this.state.title);
      this.setState({ isSelected: true });
    } else {
      this.props.removeTitle(this.state.title);
      this.setState({ isSelected: false });
    }
  };

  render() {
    if (this.state.buy === undefined) return <tr />;

    return (
      <tr className={this.renderClasses()}>
        <th scope="row">
          <input
            type="checkbox"
            checked={this.state.isSelected}
            onChange={this.handleCheckboxClick}
          />
          &nbsp;
          {this.state.title}
        </th>
        <td>
          <button className="btn btn-sm btn-danger" onClick={this.decreaseBuy}>
            -
          </button>
        </td>
        <td>${this.state.buy.toString().substring(0, 8)}</td>
        <td>
          <button className="btn btn-sm btn-success" onClick={this.increaseBuy}>
            +
          </button>
        </td>
        <td>
          <button className="btn btn-sm btn-danger" onClick={this.decreaseSell}>
            -
          </button>
        </td>
        <td>₺{this.state.sell.toString().substring(0, 8)}</td>
        <td>
          <button
            className="btn btn-sm btn-success"
            onClick={this.increaseSell}
          >
            +
          </button>
        </td>
        <td>{this.state.result.toFixed(3)}</td>
      </tr>
    );
  }
}

export default TableItem;
