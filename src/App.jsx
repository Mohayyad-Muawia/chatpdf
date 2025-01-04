import Circle from "./Circle";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/upload" Component={Upload} />
          <Route path="/chat" Component={Chat} />
        </Routes>
        <Circle />
      </div>
    </Router>
  );
}

export default App;
