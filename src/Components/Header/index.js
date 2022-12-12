import React from "react";
import "./header.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Header({ children }) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Backend
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/node" className="nav-link">
                    Node.js
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/json" className="nav-link">
                    JSON
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/server" className="nav-link">
                    Server Architectures
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/api" className="nav-link">
                    What is API?
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <Outlet />
    </>
  );
}
