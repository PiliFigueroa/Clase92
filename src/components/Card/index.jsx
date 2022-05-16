import React from 'react';
import './Card.css'

const Card = ({ personaje }) => {
    const { image, name, gender, species, status, location, episode } = personaje

    return(
        <div className={`card-container ${status === "Dead" && "opacity"}`}>
            <img src={image} alt={name} />
            <div className="description">
                <h3>{name}</h3>
                <ul>
                    <li><b>Genre:</b> {gender}</li>
                    <li><b>Species:</b> {species}</li>
                    <li><b>Status:</b> {status}</li>
                    <li><b>Location:</b> {location.name}</li>
                    <li><b>Popularity: </b>{episode.map((element, index) => <i key={index} className='fa-solid fa-star'></i>)}</li>
                </ul>
            </div>
        </div>
    )
}

export { Card }