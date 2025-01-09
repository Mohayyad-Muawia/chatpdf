import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Circle from './Circle'
import Home from './components/Home'
import Upload from './components/Upload'
import Chat from './components/Chat'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import { DocumentProvidedProvider } from './context/UploadedContext' // Adjust the import path accordingly

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-t to-black from-green-950 text-white">
      {/* Conditionally render the NavBar based on the current route */}
      {location.pathname !== '/' && <NavBar />}
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/chat" Component={Chat} />
          <Route path="/about" Component={About} />
          <Route path="/upload" Component={Upload} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Circle />
      </div>
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
