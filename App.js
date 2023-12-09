import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement(
  "h1",
  { id: "using Core React" },
  "This is using core React"
);

const JsxHeading = () => (
    <h1>This is using JSX 🚀</h1>
);

const Headingcomponent = () => (
  <div id="container">
    <JsxHeading />
    <h1>🌸 This is the Heading1 Component 🌸</h1>
    <h2>🌸 This is the Heading2 Component 🌸</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);
