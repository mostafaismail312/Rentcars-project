import React, { useState } from "react";
function NavbarComponent({ style }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const styleObject = style || {};

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        styleObject.nav || ""
      } bg-white border-b shadow-sm`}
    >
      <div className="container px-4">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png" alt="logo" className="w-75" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNavDropdown"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center lg:text-left">
            <li className="nav-item">
              <a
                className="nav-link text-indigo-600 font-semibold"
                href="/home"
              >
                Become a rental
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-gray-700 hover:text-indigo-600"
                href="/home"
              >
                Renatal deals
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-gray-700 hover:text-indigo-600"
                href="/home"
              >
                How it work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-gray-700 hover:text-indigo-600"
                href="/home"
              >
                Why choose us
              </a>
            </li>

            <li className="nav-item d-lg-none mt-4 border-t pt-3">
              <button
                type="button"
                className="btn btn-outline-primary px-4 w-full border-indigo-500 text-indigo-500 hover:bg-indigo-50"
              >
                Sign in
              </button>
            </li>
            <li className="nav-item d-lg-none mt-2">
              <button
                type="button"
                className="btn btn-primary text-white px-4 w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </button>
            </li>
          </ul>

          <ul className="d-none d-lg-flex align-items-center list-unstyled gap-3 ml-auto">
            <li className="nav-item">
              <button
                type="button"
                className="btn px-4 text-gray-700 hover:text-indigo-600"
              >
                Sign in
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary text-white px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition duration-300"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
