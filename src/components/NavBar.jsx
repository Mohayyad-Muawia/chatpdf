import React from "react";

const NavBar = () => {
  return (
    <div className="text-white py-5">
      <nav>
        <ul className="flex justify-center gap-20 ">
          <li>
            <a href="/" className="navBarItem">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navBarItem">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="navBarItem">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
