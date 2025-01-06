import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white py-5">
      <nav>
        <ul className="flex justify-center gap-14 ">
          <li>
            <Link to="/" className="navBarItem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navBarItem">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navBarItem">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
