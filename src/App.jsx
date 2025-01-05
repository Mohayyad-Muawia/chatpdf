import Circle from './Circle'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Upload from './components/Upload'
import Chat from './components/Chat'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-t from-green-900 via-black to-green-950'>
      <Router>
        <div className=''>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/upload' Component={Upload} />
            <Route path='/chat' Component={Chat} />
          </Routes>
          <Circle />
        </div>
      </Router>
    </div>
  )
}

export default App
