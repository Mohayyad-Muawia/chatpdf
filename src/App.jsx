import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Home from './components/Home'
import Upload from './components/Upload'
import Chat from './components/Chat'
import NavBar from './components/NavBar'
import About from './components/About'
import Login from './components/Login'
import { DocumentProvidedProvider } from './context/UploadedContext' // Adjust the import path accordingly
import { Analytics } from '@vercel/analytics/react'

function App() {
  const location = useLocation()

  useEffect(() => {
    fetch('https://chatpdf-9g4j.onrender.com/z', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'waking the server to reduce cold start',
      }),
    })
  }, [])

  return (
    <div className="min-h-screen ">
      {/* rendering navbar on specific pages */}
      {['/about', '/upload', '/chat'].includes(location.pathname) && <NavBar />}
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/chat" Component={Chat} />
          <Route path="/upload" Component={Upload} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
      <Analytics />
    </div>
  )
}

function AppWithRouter() {
  return (
    <Router>
      <DocumentProvidedProvider>
        <App />
      </DocumentProvidedProvider>
    </Router>
  )
}

export default AppWithRouter
