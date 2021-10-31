import React from 'react'
import "../Css/HomeScreen.css"
import Navbar from '../Navbar'
import Banner from '../Child.components/HomeScreen.components/Banner'
import Row from '../Child.components/HomeScreen.components/Row'
import userrequests from '../Request'

function HomeScreen() {
    return (
        <div className="Home-Screen">
            <Navbar/>
            <Banner/>
            <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
            <Row title="Top-Rated" fetchURL={userrequests.fetchTopRated}/>
            <Row title="Action-Movies" fetchURL={userrequests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
            <Row title="HorrorMovies" fetchURL={userrequests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={userrequests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries}/>

        </div>
    )
}

export default HomeScreen
