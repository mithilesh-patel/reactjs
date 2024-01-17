import { useState } from "react";
import logo from "../../assests/logo.jpg"

const Header = () => {

  const [btnName,setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            setbtnName("Logout");
            console.log(btnName);
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;  