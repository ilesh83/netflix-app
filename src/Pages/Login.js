import React,{useState} from 'react'
import "../Css/Login.css";
import Signup from './Signup';



function Login() {
const [signin,SetSignin]=useState(false);

    const showSignUp=(e)=>{
        e.preventDefault();
        SetSignin(true);
    }

    return (
        <div className="Login">
            <div className="Login-Header">
              
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-netflix_2015_logo.svg.png" alt="logo" className="Logo"/>
                
            <button className="Login-button">Login</button>
            </div>
            <div className="Login-body ">
                {             
                    signin ? (<Signup/>):(
                        <>
                    <h1 >Unlimited films,TV <br/> programmes and more</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter Your email to create or restart your membership</h3>
                <form className="Login-form" onSubmit={showSignUp}>
                    <input type="text" placeholder="EmailAddress"></input>
                    <button >Get Started </button>
                </form>
                </>
                    )
                }
            </div>
      </div>
    )
}

export default Login
