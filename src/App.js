import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import React, { useState } from "react";

function App() {

  const [mobileIsOpen,setMobileIsOpen] = useState(false);

 
  return (
    <div className="App">
      <Router>
        <Header mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} />
        <Routes>
          <Route path="/" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={0}/>} />
          <Route path="/venus" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={1}/>}></Route>
          <Route path="/earth" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={2}/>} />
          <Route path="/mars" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={3}/>} />
          <Route path="/jupiter" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={4}/>} />
          <Route path="/saturn" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={5}/>} />
          <Route path="/uranus" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={6}/>} />
          <Route path="/neptune" element={<PlanetPage mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} planetNumber={7}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
