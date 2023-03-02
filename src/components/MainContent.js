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
      <h3>Results:</h3>
      <div className="article-container">
        {movies?.map(function (movie, index) {
          if (movies.indexOf(movie) < 10) {
            return (
              <MovieCard
                key={index}
                image={movie.image}
                title={movie.title}
                description={movie.description}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

/* KILDER

Popeye for StackOverflow(8. september, 2017). Is it possible to map only a portion of an array? (Array.map())
https://stackoverflow.com/questions/39455224/is-it-possible-to-map-only-a-portion-of-an-array-array-map

*/
