import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomQuot } from "../actions/quotActions";

class Quote extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRandomQuot());
  }

  render() {
    return (
      <div>
        <b>The quot is</b>: {this.props.quote.text} <br />
        <b>The author is</b>: {this.props.quote.author} <br />
        <b>Loading status</b>: {this.props.isLoading ? "true" : "false"}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Quote);
