import React from 'react'
import './css/Filter.css'

export default function Filter() {
    return (
        <div className="filter">
            <button className="filter__button">Movies</button>
            <button className="filter__button">Series</button>
            <button className="filter__button">Animations</button>
            <button className="filter__button">Musicals</button>
        </div>
    )
}
