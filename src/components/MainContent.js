import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MainContent() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await fetch(
      "https://imdb-api.com/API/SearchTitle/k_qwuodg9k/jamesbond"
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
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
          description={movie.description}
        />
      ))}
    </>
  );
}
