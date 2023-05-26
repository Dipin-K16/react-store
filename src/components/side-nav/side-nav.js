import React from "react";
import "./side-nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <nav>
      <div className="sidebar">
        <div className="list-group">
          <a className="list-group-item py-2" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>
              <b>Main dashboard</b>
            </span>
          </a>

          <a className="list-group-item py-2">
            <i className="fa fa-home me-3"></i>
            <span>
              <Link to={"/"}>HOME </Link>{" "}
            </span>
          </a>

          <a className="list-group-item py-2">
            <i className="fa fa-info-circle me-3"></i>
            <span>
              <Link to={"/new-deals"}> NEW DEALS </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <i className="fa fa-cart-arrow-down me-3"></i>
            <span>
              <Link to={"/cart"}>CART</Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <i className="	fa fa-plus fa-fw me-3"></i>
            <span>
              <Link to={"/add-product"}>ADD PRODUCT</Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <i className="fa fa-address-book fa-fw me-3"></i>
            <span>
              <Link to={"/login"}> LOGIN</Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <i className="fa fa-heart me-3"></i>
            <span>WISHLIST</span>
          </a>
          <a className="list-group-item py-2">
            <i className="fa fa-send me-3"></i>
            <span>ORDERS</span>
          </a>

          <a className="list-group-item py-2">
            <i className="fa fa-users fa-fw me-3"></i>
            <span>USERS</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
