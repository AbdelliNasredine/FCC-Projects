import React, { Component } from "react";
import "../styles/md_textaria.scss";

class MDTextArea extends Component {
  render() {
    return (
      <div className="md-textaria-panel">
        <div className="header">Editor</div>
        <textarea
          className="textaria"
          onChange={(e) => this.props.onChangeHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default MDTextArea;
