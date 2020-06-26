import React, { Component } from "react";
import marked from "marked";
import "../styles/md_preview.scss";

const testMD = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
`;

class MDPreview extends Component {
  state = {
    html: testMD,
  };

  constructor(props) {
    super(props);
    this.domElement = null;
  }

  componentDidMount() {
    this.domElement.innerHTML = marked(this.state.html);
  }

  render() {
    return (
      <div className="md-preview-panel">
        <div className="header">Preview</div>
        <div className="view">
          <div ref={(domElement) => (this.domElement = domElement)}></div>
        </div>
      </div>
    );
  }
}

export default MDPreview;
