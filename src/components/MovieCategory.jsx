import React from "react";
import MovieCard from "./MovieCard";
import "./css/MovieCategory.css";

export default function MovieCategory(props) {
  return (
    <div className="movieCategory">
      <h2 className="category__title">
        <span>{props.firstWord}</span>
        {props.secondWord}
      </h2>
      <p className="category__desc">New block buster releases await you</p>
      <MovieCard
        image="./assets/movie-card-pic.jpg"
        title="Black Widow"
        type="Animation"
        time="2 hrs"
      />
    </div>
  );
}

const apikey = "6273fc33520cd8a5805a302aa50e02de";
