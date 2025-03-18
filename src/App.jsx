import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About";
import Events from './Events.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  );
}

export default App;
