import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Node.js
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  JSON
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Server Architecture
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What is API?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
