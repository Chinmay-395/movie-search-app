import React from "react";

function searchMovie() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="ie jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default searchMovie;
