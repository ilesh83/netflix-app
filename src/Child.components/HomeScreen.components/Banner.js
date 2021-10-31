import axios from '../../localaxios'
import React,{useEffect,useState} from 'react'
import '../../Css/Banner.css'
import userrequests from '../../Request'
function Banner() {
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(userrequests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
       //the above code is for corousel slide for random ones displays there
        }fetchData()
    },[])
    return (
    <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className="banner-content">
             <h1  className="banner-title">{movie?.title || movie?.original_name || movie?.name}</h1> {/*To get the movie title from the database */}
            <div className="banner-buttons">
                <button>PLAY</button>
                <button>My List</button>
            </div>
            <div className="description">
                <p>{movie?.overview}</p></div>
         </div>
         <div className="banner-fade"></div>
     </div>
    )
}

export default Banner
