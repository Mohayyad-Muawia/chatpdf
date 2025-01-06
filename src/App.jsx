import Circle from "./Circle";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t to-black from-green-950 text-white">
      <Router>
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/upload" Component={Upload} />
            <Route path="/chat" Component={Chat} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Circle />
        </div>
      </Router>
    </div>
  );
}

export default App;
