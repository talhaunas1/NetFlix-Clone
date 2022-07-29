import React from 'react'
import {useState,useEffect} from 'react'
import axios from '../axiox'


function Row({title,fetchUrl}) {

    const [movies, setMovies] = useState([])
    useEffect(()=>{
      //if [],run once when the rows loads,and dont run again
     async function fetchData(){
      const request =await axios.get(fetchUrl)
      console.log("request",request); 
     return request
     }
     fetchData()
    }, [movies])
    //on movies the page loads
    
  return (
    <div>
      <h2>{title}</h2>

    </div>
  )
}

export default Row