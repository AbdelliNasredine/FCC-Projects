import React, { Component } from "react";
import MDTextArea from "./MDTextArea";
import MDPreview from "./MDPreview";
import marked from "marked";
import "../styles/md_app.scss";

class MDApp extends Component {
  state = {
    mdText: "",
    renderedHTML: "",
  };

  onTextChange = (text) => {
    console.log("text has been change", text);
    const html = marked(text);
    this.setState({ renderedHTML: html });
  };
  render() {
    return (
      <div className="app">
        <header className="app--header">MarkDown Previewer</header>
        <div className="app-container">
          <MDTextArea onChangeHandler={this.onTextChange} />
          <MDPreview html={this.state.renderedHTML} />
        </div>
      </div>
    );
  }
}

export default MDApp;
