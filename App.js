// const heading = React.createElement("h1", {}, "Hello Mithilesh from React");

{
  /* <div id="parent">
    <div id="child">
        <h1>This is a h1 tag</h1>
        <h2>This is a h2 tag</h2>
    </div>
</div> */
}

// The three arguments of createElement are tagname, attributes and children
// So in the children if we want to give any child elements we can create using createElement

// React.createElement is a object and when we render sing the render function, it --> it is then only when it is converted to a html 


const heading = React.createElement("div",{ key: "parent" },React.createElement("div",{ key: "child" },[React.createElement("h1", {key : "child no. 1"}, "This is a h1 tag"),React.createElement("h2", { key: "child no. 2"}, "This is a h2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);