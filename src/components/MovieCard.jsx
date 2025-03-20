import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "800px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie?.Poster}
            className="img-fluid rounded-start"
            alt={movie?.Title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie?.Title}</h5>
            <p className="card-text">{movie?.Plot}</p>
            <p className="card-text">
              <small className="text-muted">Released: {movie?.Released}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">Runtime: {movie?.Runtime}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">Language: {movie?.Language}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
