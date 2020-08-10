import React, { Component } from "react";
import "../styles/md_preview.scss";

const testMD = `Marked - Markdown Parse`;

class MDPreview extends Component {
  constructor(props) {
    super(props);
    this.domElement = null;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.html !== newProps.html) {
      this.domElement.innerHTML = newProps.html;
    }
  }

  render() {
    return (
      <div className="md-preview-panel">
        <div className="header">Preview</div>
        <div className="view">
          <div ref={(ref) => (this.domElement = ref)}></div>
        </div>
      </div>
    );
  }
}

export default MDPreview;
