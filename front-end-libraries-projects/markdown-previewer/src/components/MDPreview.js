import React, { Component } from "react";
import "../styles/md_preview.scss";

class MDPreview extends Component {
  render() {
    return (
      <div className="md-preview-panel">
        <div className="header">Preview</div>
        <div className="view"></div>
      </div>
    );
  }
}

export default MDPreview;
