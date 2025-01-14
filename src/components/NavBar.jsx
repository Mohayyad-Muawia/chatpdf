import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  return (
    <div className="text-white py-5">
      <nav>
        <ul className="flex justify-center md:gap-10 lg:gap-14">
          <li>
            <Link to="/" className="navBarItem">
              Home
            </Link>
          </li>
          <li>
            {/* if location is upload page, show chat. And if chat show upload*/}
            {location.pathname === "/upload" ? (
              <Link to="/chat" className="navBarItem">
                Chat
              </Link>
            ) : (
              <Link to="/upload" className="navBarItem">
                Upload
              </Link>
            )}
          </li>
          <li>
            <Link to="/about" className="navBarItem">
              About
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
