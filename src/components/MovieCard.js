import React from "react";

export default function MovieCard({ image, title, description }) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h4>{title}</h4>
        <h5>{description}</h5>
        <button className="more-btn">Read more</button>
      </div>
    </article>
  );
}
