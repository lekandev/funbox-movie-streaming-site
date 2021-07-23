import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Filter from "./components/Filter"
import MovieCategory from "./components/MovieCategory"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Filter />
      <MovieCategory firstWord="Trending" secondWord=" Now" />
    </div>
  );
}

export default App;
