import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsPersonFill, BsLockFill, BsEnvelopeFill } from 'react-icons/bs'; // Import Bootstrap icons
import './Login.css'; // Import custom CSS for styling

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
    mail: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Login:', data);
        // Reset the form
        setLoginData({
          name: '',
          password: '',
          mail: '',
        });
        // Redirect to the home page
        navigate('/home');
      } else {
        console.error('Error inserting login:', response.status);
      }
    } catch (error) {
      console.error('Error inserting login:', error);
    }
  };

  return (
    <div className="login-container" style={{alignItems:'center',alignContent:'center',justifyContent:'center'}}> 
    <div className="image-container">
        <img src="https://kms.kongu.edu/student/images/klogo.png" style={{ width: '80px', height: '80px' }} alt="Logo" />
      </div>
      <h2 className="login-title">LOGIN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            <BsPersonFill className="form-icon" /> NAME
          </label>
          <input
            type="text"
            name="name"
            value={loginData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            <BsLockFill className="form-icon" /> PASSWORD:
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            <BsEnvelopeFill className="form-icon" /> MAIL:
          </label>
          <input
            type="text"
            name="mail"
            value={loginData.mail}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <button type="submit" className="login-button"> <Link to="/sign" style={{textDecoration:'none',textDecorationColor:'white',color:'white'}} >
          SIGNUP</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
