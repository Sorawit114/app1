import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./navlink.css";

export default function Router2() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Home
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Products
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Member
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Contact Us
        </NavLink>
      </nav>
      <div class = "content">
        <Route path = "/" element = {<h2> Welcome to my website </h2>}/>

        <Route path = "/product" element = {<Products/>}/>

        <Route path = "/member" element = {<h2> Member</h2>}/>

        <Route path = "/contact" element = {<h2> Contact Us </h2>}/>
      </div>
    </BrowserRouter>
  );
}
