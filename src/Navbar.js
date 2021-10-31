import firebase from 'firebase'
import React,{useState,useEffect} from 'react'
import './Css/Nav.css'
function Navbar() {

    const [show,handleShow]=useState(false);
    const transitionNavbar=()=>{
        if(window.scrollY>100)
        {
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }
    })
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="Nav-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-netflix_2015_logo.svg.png" className="logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" onClick={()=>firebase.auth().signOut()} className="avatar"/>
            </div>
        </div>
    )

}

export default Navbar
