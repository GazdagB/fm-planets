import React, { useEffect, useState } from "react";
import data from "../data.json";
import Button from "./Button";
import DataCard from "./DataCard";
import "./PlanetPage.css";

const PlanetPage = ({ planetNumber }) => {

    useEffect(()=>{
        setActive("OVERVIEW");
    },[planetNumber])

    const [active, setActive] = useState("OVERVIEW");
    let planet = data[planetNumber];
    return (
        <main className="mercury page-container wrapper">
            <div className="hero">
                <img className="img-mercury" src={active === "OVERVIEW" ? planet.images.planet
                : active === "INTERNAL STRUCTURE" ? planet.images.internal
                : active === "SURFACE GEOLOGY" ? planet.images.geology
                : null} alt="" />
                <div className="info-container">
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
                        {active === "INTERNAL STRUCTURE" && planet.structure.source && (
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
    );
};

export default PlanetPage;
