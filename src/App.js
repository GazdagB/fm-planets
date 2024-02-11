import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import React, { useState } from "react";

function App() {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(0);

  return (
    <div className="App">

      <Router>
        <Header mobileIsOpen={mobileIsOpen} setMobileIsOpen={setMobileIsOpen} currentPlanet={currentPlanet} />
        <Routes>
          <Route
            path="/mercury"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={0} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />

          <Route
            path="/venus"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={1} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          ></Route>


          <Route
            path="/earth"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={2} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />
          <Route
            path="/mars"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={3} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />
          <Route
            path="/jupiter"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={4} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />


          <Route
            path="/saturn"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={5} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />


          <Route
            path="/uranus"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={6} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />


          <Route
            path="/neptune"
            element={
              <PlanetPage
                mobileIsOpen={mobileIsOpen}
                setMobileIsOpen={setMobileIsOpen}
                planetNumber={7} 
                setCurrentPlanet={setCurrentPlanet}
              />
            }
            
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
