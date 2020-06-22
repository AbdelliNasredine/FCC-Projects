import React, { Component } from "react";
import { connect } from "react-redux";

class Quote extends Component {
  render() {
    return (
      <div>
        <b>The quot is</b>: {this.props.quote} <br />
        <b>Loading status</b>: {this.props.isLoading ? "true" : "false"}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Quote);
