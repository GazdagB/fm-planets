import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PlanetPage planetNumber={0}/>} />
          <Route path="/venus" element={<PlanetPage planetNumber={1}/>}></Route>
          <Route path="/earth" element={<PlanetPage planetNumber={2}/>} />
          <Route path="/mars" element={<PlanetPage planetNumber={3}/>} />
          <Route path="/jupiter" element={<PlanetPage planetNumber={4}/>} />
          <Route path="/saturn" element={<PlanetPage planetNumber={5}/>} />
          <Route path="/uranus" element={<PlanetPage planetNumber={6}/>} />
          <Route path="/neptune" element={<PlanetPage planetNumber={7}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
