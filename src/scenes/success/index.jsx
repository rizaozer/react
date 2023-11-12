import React, { useState } from 'react';
import "./index.css";
import { useNavigate } from 'react-router-dom';


function Success() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <div className="forgot-password-img">

                </div>
                <h2>Success!</h2>
                <p>Email was successfully sent!</p>
                <button className="back-to-login"
                onClick={handleLogin}>Back to Login</button>
            </div>
            {/* <footer>Created with 💙 by PAMER, Copyright © 2023</footer> */}
        </div>
    );
}

export default Success;
