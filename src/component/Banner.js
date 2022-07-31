import React, { useEffect, useState } from "react";
import axios from "../axiox";
import requests from "../request";
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log("request",request.data.results)

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log( "movies" ,movie);

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+ "..." : str; //for ... dots for over text in description
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="content">
         {/* ? is optional chaining */}
        {/* {title} */}
        <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="buttons_div">
          <button className="button">play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
            {truncate(movie?.overview, 150)}
        </h1>
        {/* {div(button) } */}
        {/* {discripition} */}
      </div>
      <div className="fade_bottom"/>
    </header>
  );
}

export default Banner;
