import React from "react";
import CardComponent from "./CardComponent";
function SearchMovies() {
  //states- input query,movies
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    // const query = "Jurassic Park";
    console.log("qQUERY", query);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=2e13f0f8d91d8a119902a225b1e6be9b&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="ie jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <CardComponent key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
