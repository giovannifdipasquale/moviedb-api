import React from "react";

function MovieForm({ handleSubmit, handleChange }) {
  return (
    <div className="d-flex justify-content-center p-5">
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
