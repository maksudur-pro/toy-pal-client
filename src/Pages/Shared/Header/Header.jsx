import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100 h-24 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }>
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }>
              About
            </NavLink>
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/Tmsy9nm/logo.png"
            className="h-16"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default"
            }
            style={{ marginRight: "10px" }}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default"
            }>
            About
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <FaUserAlt></FaUserAlt>
        <Link to="/login">
          <button className="btn btn-sm btn-ghost">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
