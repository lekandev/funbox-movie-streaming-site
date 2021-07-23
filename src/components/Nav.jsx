import React from "react";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div class="logo">
        <h1>FUNBOX</h1>
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/">Theatre</a>
        </li>
        <li>
          <a href="/">Hollywood</a>
        </li>
        <li>
          <a href="/">Nollywood</a>
        </li>
        <li>
          <a href="/">Bollywood</a>
        </li>
      </ul>
    </div>
  );
}
