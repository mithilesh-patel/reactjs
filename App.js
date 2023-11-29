// const heading = React.createElement("h1", {}, "Hello Mithilesh from React");

{
  /* <div id="parent">
    <div id="child">
        <h1>This is a h1 tag</h1>
    </div>
</div> */
}

// The three arguments of createElement are tagname, attributes and children
// So in the children if we want to give any child elements we can create using createElement

const heading = React.createElement("div",{ id: "parent" },React.createElement("div",{ id: "child" },React.createElement("h1", {}, "This is a h1 tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);