import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            <a className="nav-link" aria-current="page">
              <h2>React Store</h2>
            </a>
          </div>
          <div>
            <a className="nav-link btn btn-success login-btn-header p-3">
              <Link to={"/login"}>LOGIN</Link>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
