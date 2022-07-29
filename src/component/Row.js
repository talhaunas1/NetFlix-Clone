import React from "react";
import { useState, useEffect } from "react";
import axios from "../axiox";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"; //dont know from where this url is getting
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //if [],run once when the rows loads,and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log("request",request.data.results);
      setMovies(request.data.results); //setting state function
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //the page loads on fetchUrl

  console.log("movies", movies);

  return (
    <div className="row">

      <h2>{title}</h2>

      <div className="row_posters">

      {movies.map((movie) => (
        <img
          className="rowposter"
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
        />
      ))}

      </div>
    </div>
  );
}

export default Row;
