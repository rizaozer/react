import React, { useState } from 'react';
import "./index.css";
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (email === "rizaozer@gmail.com") {
            navigate("/Success");
        } else {
            setError("We cannot find your email.");
        }
    };

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="forgot-password-container">
            {/* <h1>Password Reset</h1> */}
            <div className="forgot-password-card">
                <div className="forgot-password-icon">
                    <span>!</span>
                </div>
                <h2>Forgot Password</h2>
                <p>Enter your email and we'll send you a link to reset your password.</p>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                {error && <div className="error-message">{error}</div>}
                <br/>
                <button className="submit-buton1" onClick={handleSubmit}>Submit</button>
                <div className="back-to-login"
                onClick={handleLogin}>Back to Login</div>
            </div>
            {/* <footer>Created with 💙 by PAMER, Copyright © 2023</footer> */}
        </div>
    );
}

export default ForgotPassword;
