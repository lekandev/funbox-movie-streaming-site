import React from "react";
import "./MovieCard.css";

export default function MovieCard({ image, name, title, type, time }) {
  return (
    <div className="MovieCard">
      <img src={image} alt={name} />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__type">{type} 2021</p>
      <p className="movie__time">Time: {time}</p>
    </div>
  );
}
