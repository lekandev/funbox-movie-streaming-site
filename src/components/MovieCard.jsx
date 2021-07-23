import React from "react";
import "./css/MovieCard.css";

export default function MovieCard({ image, title, type, time }) {
  return (
    <div className="movieCard">
      <img src={image} alt={title} />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__type">{type} 2021</p>
      <p className="movie__time">Time: {time}</p>
    </div>
  );
}
