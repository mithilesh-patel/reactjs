import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
  return <div className="header">
    <div className="logo-container">

    <img src="https://i.pinimg.com/1200x/eb/4f/74/eb4f749fd1c95eefe5cccbcd325d8299.jpg" className="logo" alt=""/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>

  </div>
}

const AppLayout = () => (
  <div className="app">
    <Header />

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
