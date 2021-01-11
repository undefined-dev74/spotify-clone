import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login__head">
        <img
          className="spotify-logo"
          src="https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg"
          alt="Spotify-logo"
        />
      </div>
      <div className="login__container">
        <div className="login__container-content">
          <div className="row">
            <a
              style={{
                backgroundColor: '#3b5998',
                color: '#fff',
                borderColor: '#3b5998',
                borderWidth: '0',
              }}
              className="btn"
              href="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg"
            >
              Login With Facebook
            </a>
          </div>
          <div className="row">
            <a
              style={{
                backgroundColor: '#000',
                color: '#fff',
                borderWidth: '0',
              }}
              className="btn"
              href="https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg"
            >
              Continue with Apple
            </a>
          </div>
          <div className="row">
            <a
              style={{
                backgroundColor: '#fff',
                color: '#333',
                borderColor: '#ccc',
              }}
              className="btn"
              href="https://www.flaticon.com/svg/vstatic/svg/300/300221.svg?token=exp=1610393992~hmac=42b5dfa0c8139296e2e846c7ff0d5ddc"
            >
              continue with Google
            </a>
          </div>
          <div className="row">
            <a
              style={{
                backgroundColor: '#fff',
                color: '#333',
                borderColor: '#ccc',
              }}
              className="btn"
              href="#"
            >
              Continue with Phone Number
            </a>
          </div>
        </div>
        <button
          style={{ backgroundColor: '#15883e', color: '#fff' }}
          className="btn-cta"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
