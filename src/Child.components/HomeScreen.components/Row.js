import axios from '../../localaxios';
import React,{useState,useEffect} from 'react'
import'../../Css/Row.css';

function Row({title,isLargeRow,fetchURL}) {

    const [movies,setMovie]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchURL);
            setMovie(request.data.results);
            return request
        }
        fetchData();
    },[fetchURL])
    return (
        <div className="row">
         <h2>{title}</h2>
         <div className="row-poster">
             {
             movies.map(movie=>{
                 return <img src={`${base_url}${isLargeRow?movie.backdrop_path:movie.poster_path}`} className={`rowposter ${isLargeRow && "largeImage"}`} key={movie.id}/>
            })
            }
         </div>
        </div>
    )
}

export default Row
