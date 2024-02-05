import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Header from "./components/Header";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
