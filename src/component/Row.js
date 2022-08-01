import React from "react";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axiox";
import "./Row.css";
// import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original"; //dont know from where this url is getting
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState('')

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

  // console.log("movies", movies);
  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handlerClick =(movie) =>{
    if(trailer)
    {
      //if already open then close it
      setTrailer('')
    }else{
      movieTrailer(movie?.name || "")
      //movie trailer react pakge
      .then(url =>{
        const urlParams =new URLSearchParams( new URL(url).search);
        // urlParams.get('v');
        setTrailer(urlParams.get('v'))

      }).catch(error => console.log(error))
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handlerClick(movie)}
            className={`rowposter ${isLargeRow && "rowposterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path }`}
            alt={movie.name}
          />
        ))}
      </div>
      {
        trailer &&  <YouTube videoId={trailer} opts={opts} />
      }
    </div>
  );
}

export default Row;
