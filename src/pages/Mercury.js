import React from 'react';
import './Mercury.css';
import data from '../data.json';
import DataCard from '../components/DataCard';
import Button from '../components/Button';


export default function Mercury() {
    let planet = data[0];

    return (
            <main className='mercury page-container wrapper'>
                <div className="hero">
                    <img className='img-mercury' src={planet.images.planet} alt="" />
                    <div className="info-container">
                        <h1>{planet.name}</h1>
                        <p className='content' >{planet.overview.content}</p>
                        <p>Source: <a href={planet.overview.source} target='_blank' rel="noreferrer">Wikipedia</a></p>
                        <div className="buttons">
                            <Button number={1} text={"OVERVIEW"} />
                            <Button number={2} text={"INTERNAL STRUCTURE"} />
                            <Button number={3} text={"SURFACE GEOLOGY"} />
                        </div>
                    </div>
                </div>
                <div className="data-container">
                    <DataCard title='rotation time' data={planet.rotation} />
                    <DataCard title='revolution time' data={planet.revolution} />
                    <DataCard title='radius' data={planet.radius} />
                    <DataCard title='average temp.' data={planet.temperature} />
                </div>
            </main>
    );
};