import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width={100} height={100} />
        <p>Wired Wisdom</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("cpu");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/cpu">
            CPU
          </Link>
          {menu === "cpu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ram");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/ram">
            RAM
          </Link>
          {menu === "ram" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("gpu");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/gpu">
            GPU
          </Link>
          {menu === "gpu" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" width={50} height={50} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
