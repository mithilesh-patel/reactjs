import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement(
  "h1",
  { id: "using Core React" },
  "This is using core React "
);

const JsxHeading = () => (
    <h1>This is using JSX 🚀</h1>
);

const Body = ()=> (
    <h1>This is Body 💪😎 Component</h1>
)

const naam= "Mithilesh";

const Headingcomponent = () => (
  <div id="container">
    <JsxHeading />
    {Heading}
    {100+300}
    {console.log("This is inside console")}
    <Body />
    <h1>🌸 This is the Heading1 Component 🌸</h1>
    <h2>🌸 This is the Heading2 Component 🌸</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);
