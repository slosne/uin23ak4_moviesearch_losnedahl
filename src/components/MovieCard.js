import React from "react";

export default function MovieCard({
  image,
  title,
  actors,
  rating,
  releaseYear,
}) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Released: {releaseYear}</p>
      <p>Rating: {rating}</p>
      <h4>Featuring: {actors}</h4>
      <button>Read more</button>
    </article>
  );
}
