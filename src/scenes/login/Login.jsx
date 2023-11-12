import React, { useState } from 'react'
import user from "./Assets/email.png";
import email from "./Assets/person.png";
import password from "./Assets/password.png";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Grid } from '@mui/material';



const Login = ({setLoggedIn}) => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [action, setAction] = useState("Login");
  const [errorMessage, setErrorMessage] = useState("");

   const handleLogin = () => {
    if (username.trim() === "" || passwordValue.trim() === "") {
      setErrorMessage("Username and Password are required.");
    } else if (username === "riza" && passwordValue === "123") {
      setLoggedIn(true);
      navigate('/team');
    } else {
      setErrorMessage("Wrong Username or Password.");
    }
    
  };

  return (
    <Grid item xs={8}>
          <div>
      <header className='login-header'>PAMER</header>
    </div>
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
            <img src={user} alt=""/>
            <input type="text" placeholder='Name'/>
        </div>}
        <div className='input'>
            <img src={email} alt=""/>
            <input type="email" placeholder='Username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='input'>
            <img src={password} alt=""/>
            <input type="password" placeholder='Password'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            />
        </div>
        <br/>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
      <div className='submit-container'>
        {/* <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div> */}
        <div className={action==="Sign Up"?"submit gray":"submit"}
        onClick={handleLogin}
        >Login</div>
      </div>
    </div>
    </Grid>
  )
}

export default Login;
