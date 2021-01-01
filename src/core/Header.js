import React, { useState, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import './Header.css';




const isActive = (history, path) => {
  if (history.location.pathname === path) {
      return { color: "#ff9900" };
  } else {
      return { color: "#333" };
  }

};




const Header = ({ history }) => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">

          <div
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <p className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
     
          <a className="header-nav-item">
          
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
                
            </a>
          
            <a className="header-nav-item">
            
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
                
            </a>
         
            <a className="header-nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </a>
       
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <a className="header-nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dash
                    </Link>
                </a>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <a className="header-nav-item">
             
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                 
                </a>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <a className="header-nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </a>

                    <a className="header-nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </a>
                </Fragment>
            )}

            {isAuthenticated() && (
                <a className="header-nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </a>
            )}








            {/*
              HEADER_LIST.map((data) =>
                <li
                  key={data.id}
                  className="header-nav-item">
                  <span className="header-list-name">
                    <i className={data.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              )
           */ }

          </p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);