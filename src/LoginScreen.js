import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css'; 

function LoginScreen() {
  let navigate = useNavigate();
  return (
    <div className="login-container">
      <h1>LitDiversity</h1>
      <p className="slogan">Empowering Students with Diverse Reads</p>
      <h2>Login as:</h2>
      <button className="login-button" onClick={() => navigate('/student')}>Student</button>
      <button className="login-button" onClick={() => navigate('/educator')}>Educator</button>
    </div>
  );
}

export default LoginScreen;
