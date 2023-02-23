import React, { useState } from 'react';

class Home extends React.Component {
    render() {
    return (

        <div className="container" >
          <form className="login-form" onSubmit={alert("onSubmit ln:7")}>
            <h1 className="login-heading">Home Page</h1>
        
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Join the Empire</button>
          </form>
        </div>
    );
    }
}

export default Home;