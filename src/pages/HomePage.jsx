import React, { useState } from "react";
import useMovie from "../hooks/useMovie";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
const HomePage = () => {
  const [url, setUrl] = useState(
    "https://www.omdbapi.com/?i=tt3896198&apikey=6f956ef3"
  );
  const { movie, loading, error } = useMovie(url);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://www.omdbapi.com/?t=${input}&apikey=6f956ef3`);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <MovieForm handleSubmit={handleSubmit} handleChange={handleChange} />
      {input}
      <MovieCard movie={movie} />
    </div>
  );
};

export default HomePage;
