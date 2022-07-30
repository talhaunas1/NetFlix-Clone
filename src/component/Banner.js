import React, { useEffect, useState } from "react";
import axios from "../axiox";
import requests from "../request";
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
  console.log(movie);
  return (
    <header className="banner" style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
}}>
      <div className="banner_content">
        {/* {title} */}   
        <h1>
            { 
                movie?.title|| movie?.name || movie?.original_name 
            }
        </h1>
      {/* {div(button) } */}
      {/* {discripition} */}
      </div>
    </header>
  );
}

export default Banner;
