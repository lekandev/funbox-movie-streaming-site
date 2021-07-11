import React from "react";
import MovieCard from './MovieCard';
import "./MovieCategory.css";

export default function MovieCategory() {
  return (
    <div className="MovieCategory">
      <h2 className="category__title">{}</h2>
      <p className="category__desc">New block buster releases await you</p>
      <MovieCard />
    </div>
  );
}

 const apikey = '6273fc33520cd8a5805a302aa50e02de'
