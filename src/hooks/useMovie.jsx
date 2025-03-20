import { useState, useEffect } from "react";

function useMovie(url) {
  const [movie, setMovie] = useState(null); // Stores API response
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Stores error message
  // https://www.omdbapi.com/?i=tt3896198&apikey=6f956ef3
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMovie(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [url]); // Runs when the URL changes

  return { movie, loading, error };
}

export default useMovie;
