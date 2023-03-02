import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MainContent() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await fetch(
      "https://imdb-api.com/en/API/MostPopularMovies/k_qwuodg9k"
    );
    const data = await response.json();
    setMovies(data.items);
    console.log(data.items);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h3>Result:</h3>
      {movies?.map((movie, index) => (
        <MovieCard
          key={index}
          image={movie.image}
          title={movie.title}
          actors={movie.crew}
          rating={movie.imDbRating}
          releaseYear={movie.year}
        />
      ))}
    </>
  );
}
