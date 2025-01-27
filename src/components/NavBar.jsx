import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const location = useLocation()
  const [menuOpened, setMenuOpened] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    setMenuOpened(false)
    navigate(path)
  }

  const isAuthenticated = !!localStorage.getItem('token')

  const handleLogout = () => {
    setMenuOpened(false)
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="container mx-auto">
      <div className="relative text-white h-[70px] flex justify-end items-center">
        {/* Logo */}
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="max-h-full cursor-pointer me-auto"
          onClick={() => handleNavigation('/')}
        />

        {/* Navigation Menu */}
        <nav>
          <ul
            className={`${
              menuOpened ? 'scale-y-100' : 'scale-y-0'
            } md:scale-100 transition-transform origin-top max-md:absolute left-1/2 bottom-0 max-md:-translate-x-1/2 max-md:translate-y-full max-md:backdrop-blur max-md:w-full z-20 text-center md:flex justify-center md:gap-10 lg:gap-14`}
          >
            {[
              { path: '/', label: 'Home' },
              {
                path: location.pathname === '/upload' ? '/chat' : '/upload',
                label: location.pathname === '/upload' ? 'Chat' : 'Upload',
              },
              { path: '/about', label: 'About' },
            ].map((item) => (
              <li key={item.path} className="py-2">
                <Link
                  to={item.path}
                  className="navBarItem"
                  onClick={() => setMenuOpened(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Button */}
        <button
          onClick={
            isAuthenticated ? handleLogout : () => handleNavigation('/login')
          }
          className="border py-1 max-md:mx-3 border-white transition-colors hover:bg-white hover:text-green-950 font-bold text-white px-2 rounded-md"
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Separator */}
      <div className="separator h-[1px] bg-white"></div>
    </header>
  )
}

export default NavBar
