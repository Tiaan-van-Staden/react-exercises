import React, { useState } from 'react';
import './App.css';
import Home from './Home';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true);


  const users = {
    firstName: 'Dan',
    lastName: 'the Man',
    password: '12345'
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (users.firstName === username && users.password === password) {
      alert("Welcom brother " + users.firstName + " " + users.lastName)
      setIsVisible(false);
      <Home />
    } else {
      alert("Username and Password does not match")
    }
  }

  return (
    <div className="container" >
      {isVisible &&<form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-heading">Welcome to the Dark Side</h1>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" className="form-control" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Join the Empire</button>
      </form>}
    </div>
  );
}

export default Login;
