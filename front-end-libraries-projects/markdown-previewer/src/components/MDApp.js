import React from "react";
import MDTextArea from "./MDTextArea";
import MDPreview from "./MDPreview";
import "../styles/md_app.scss";

function MDApp() {
  return (
    <div className="app">
      <header className="app--header">MarkDown Previewer</header>
      <div className="app-container">
        <MDTextArea />
        <MDPreview />
      </div>
    </div>
  );
}

export default MDApp;
