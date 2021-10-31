import React,{useRef} from 'react'
import "../Css/Signup.css";
import {auth} from '../firebase'

function Signup() {
    const emailref=useRef(null);
    const passwordref=useRef(null);

    const Register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(authUser=>{
            console.log(authUser)
        }).catch(error=>{alert(error.message)})
    }
    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(authUser=>{
            console.log(authUser)
        }).catch(error=>{alert(error.message)})

    }

    return (
        <div className="signup-screen">
            <form>
      
            <input ref={emailref} type="text" placeholder="E mail"/>
            <input ref={passwordref} type="password" placeholder="Password"/>
            <button onClick={signIn}>Sign in</button>
            <h4>New to Netfilx <span onClick={Register}> Register Here</span> </h4>
            </form> 
        </div>
    )
}

export default Signup
