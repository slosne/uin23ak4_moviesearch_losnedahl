import React from "react";

export default function MovieCard({ image, title, plot }) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{plot}</h4>
      <button>Read more</button>
    </article>
  );
}
