import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import Button from "./Button";
import DataCard from "./DataCard";
import "./PlanetPage.css";
import "./Responsive.css";
import { CSSTransition } from "react-transition-group";

import arrowRight from "../assets/arrow-right.svg";

const PlanetPage = ({ planetNumber, mobileIsOpen, setMobileIsOpen }) => {
  useEffect(() => {
    setActive("OVERVIEW");
  }, [planetNumber]);

  const [active, setActive] = useState("OVERVIEW");

  let planet = data[planetNumber];
  return (
    <>
        <CSSTransition
        in={mobileIsOpen}
        timeout={300}
        classNames="mobile-menu"
        unmountOnExit
        mountOnEnter
        >

        
        <div className="mobile-menu">
          <div className="link-row">
            <div className="planet-link-container">
              <div className="dot dot-1"></div>
              <Link
                onClick={() => {
                  setMobileIsOpen(false);
                }}
                className="li"
                to="/"
              >
                mercury
              </Link>
            </div>
            <img src={arrowRight} alt="" />
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/venus"
            >
              venus
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/earth"
            >
              earth
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/mars"
            >
              mars
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/jupiter"
            >
              jupiter
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/saturn"
            >
              saturn
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/uranus"
            >
              uranus
            </Link>
          </div>
          <div className="link-row">
          <div className="dot dot-1"></div>
            <Link
              onClick={() => {
                setMobileIsOpen(false);
              }}
              className="li"
              to="/neptune"
            >
              neptune
            </Link>
          </div>
        </div>
        </CSSTransition>

        <CSSTransition  
        in={!mobileIsOpen}
        timeout={600}
        classNames="page-container"
        unmountOnExit
        mountOnEnter
        >
        <main className="mercury page-container wrapper">
          <div className="mobile-buttons">
            <p
              onClick={() => {
                setActive("OVERVIEW");
              }}
            >
              OVERVIEW
            </p>
            <p
              onClick={() => {
                setActive("INTERNAL STRUCTURE");
              }}
            >
              STRUCTURE
            </p>
            <p
              onClick={() => {
                setActive("SURFACE GEOLOGY");
              }}
            >
              SURFACE
            </p>
          </div>
          <div className="hero">
            <div className="img-container">
              <img
                className="img-mercury"
                src={
                  active === "OVERVIEW"
                    ? planet.images.planet
                    : active === "INTERNAL STRUCTURE"
                    ? planet.images.internal
                    : active === "SURFACE GEOLOGY"
                    ? planet.images.geology
                    : null
                }
                alt=""
              />
            </div>
            <div className="info-container">
              <div className="text-container">
                <h1>{planet.name}</h1>
                <p className="content">
                  {active === "OVERVIEW"
                    ? planet.overview.content
                    : active === "INTERNAL STRUCTURE"
                    ? planet.structure.content
                    : active === "SURFACE GEOLOGY"
                    ? planet.geology.content
                    : null}
                </p>
                <p>
                  Source:{" "}
                  {active === "OVERVIEW" && planet.overview.source && (
                    <a
                      href={planet.overview.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wikipedia
                    </a>
                  )}
                  {active === "INTERNAL STRUCTURE" &&
                    planet.structure.source && (
                      <a
                        href={planet.structure.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Wikipedia
                      </a>
                    )}
                  {active === "SURFACE GEOLOGY" && planet.geology.source && (
                    <a
                      href={planet.geology.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wikipedia
                    </a>
                  )}
                </p>
              </div>
              <div className="buttons">
                <Button
                  number={1}
                  text={"OVERVIEW"}
                  active={active}
                  onClick={() => {
                    setActive("OVERVIEW");
                  }}
                  color={planet.color}
                />
                <Button
                  number={2}
                  text={"INTERNAL STRUCTURE"}
                  active={active}
                  onClick={() => {
                    setActive("INTERNAL STRUCTURE");
                  }}
                  color={planet.color}
                />
                <Button
                  number={3}
                  text={"SURFACE GEOLOGY"}
                  active={active}
                  onClick={() => {
                    setActive("SURFACE GEOLOGY");
                  }}
                  color={planet.color}
                />
              </div>
            </div>
          </div>
          <div className="data-container">
            <DataCard title="rotation time" data={planet.rotation} />
            <DataCard title="revolution time" data={planet.revolution} />
            <DataCard title="radius" data={planet.radius} />
            <DataCard title="average temp." data={planet.temperature} />
          </div>
        </main>
        </CSSTransition>
    </>
  );
};

export default PlanetPage;
