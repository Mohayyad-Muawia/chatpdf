import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const NavBar = () => {
  const { pathname } = useLocation()
  const [menuOpened, setMenuOpened] = useState(false)
  const navigate = useNavigate()

  const routes = [
    { path: '/', label: 'Home' },
    {
      path: pathname === '/upload' ? '/chat' : '/upload',
      label: pathname === '/upload' ? 'Chat' : 'Upload',
    },
    { path: '/about', label: 'About' },
  ]

  const handleNavigation = (path) => {
    setMenuOpened(false)
    navigate(path)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    handleNavigation('/login')
  }

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !e.target.closest('nav') &&
        !e.target.closest('button[aria-label="Toggle navigation menu"]')
      ) {
        setMenuOpened(false)
      }
    }

    if (menuOpened) {
      document.addEventListener('click', closeMenu)
    }
    return () => document.removeEventListener('click', closeMenu)
  }, [menuOpened])

  return (
    <header className="container mx-auto">
      <div className="relative h-[70px] flex justify-between items-center px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavigation('/')}
          className="hover:opacity-80 transition-opacity z-60"
          aria-label="Home"
        >
          <img
            src="/assets/logo.svg"
            alt="ChatPDF Logo"
            className="h-12 md:h-14"
          />
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {routes.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`navBarItem ${pathname === path ? 'text-green-300' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Authentication */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <button className='border rounded px-2 py-1 hover:bg-white hover:text-[#087C4C] transition-colors font-bold'>
              <SignInButton forceRedirectUrl={"/"} />
            </button>
          </SignedOut>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:text-green-300 z-50"
            onClick={() => {setMenuOpened(true)}}
            aria-label="Toggle navigation menu"
          >
            <FaBars size={24} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <ul
          className={`fixed inset-0 pt-20 bg-black/95 backdrop-blur-sm
            md:hidden z-50 overflow-hidden transition-all duration-300
            ${menuOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="container mx-auto px-4">
            <button
              className="p-2 absolute top-5 right-5"
              onClick={() => setMenuOpened(false)}
            >
              <FaTimes size={24} />
            </button>
            {routes.map(({ path, label }) => (
              <li key={path} className="border-b border-white/10">
                <Link
                  to={path}
                  onClick={() => setMenuOpened(false)}
                  className="block py-4 hover:bg-white/5 transition-colors text-xl"
                >
                  {label}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>

      {/* Separator */}
      <div className="h-px bg-white/20 mx-4" />
    </header>
  )
}

export default NavBar
