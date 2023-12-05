import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "div",
  { key: "parent" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "This is a h1 tag"),
    React.createElement("h2", {}, "This is a h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
