import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const location = useLocation()
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <header className="container mx-auto">
      <div className="relative text-white h-[15vh] flex justify-between items-center">
        <img className="max-h-full" src="/assets/logo.svg" alt="logo" />
        <nav className={``}>
          <ul
            className={`${menuOpened ? 'scale-y-100' : 'scale-y-0'} md:scale-100 transition-transform origin-top max-md:absolute left-1/2 bottom-0 max-md:-translate-x-1/2 max-md:translate-y-full max-md:backdrop-blur max-md:w-full z-20 text-center md:flex justify-center md:gap-10 lg:gap-14`}
          >
            <li className="py-2">
              <Link
                onClick={() => setMenuOpened(false)}
                to="/"
                className="navBarItem"
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              {/* if location is upload page, show chat. And if chat show upload*/}
              {location.pathname === '/upload' ? (
                <Link
                  onClick={() => setMenuOpened(false)}
                  to="/chat"
                  className="navBarItem"
                >
                  Chat
                </Link>
              ) : (
                <Link
                  onClick={() => setMenuOpened(false)}
                  to="/upload"
                  className="navBarItem"
                >
                  Upload
                </Link>
              )}
            </li>
            <li className="py-2">
              <Link
                onClick={() => setMenuOpened(false)}
                to="/about"
                className="navBarItem"
              >
                About
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <button
          className="md:hidden "
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <div className="separator h-[1px] bg-white"></div>
    </header>
  )
}

export default NavBar
