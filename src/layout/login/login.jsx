import React, { Component } from 'react';
import './login.css';
import Spinner from 'react-spinkit';

class Login extends Component {
  authenticateUser = event => {
    this.props.authenticateUser('rojasmi1', 'mypass');
  };

  render() {
    return (
      <section className="login">
        <h1>Login!</h1>
        <p>Please enter your credentials to log in!</p>
        {this.props.isLoading ? (
          <Spinner name="chasing-dots" color="steelblue" />
        ) : null}
        <button onClick={this.authenticateUser}>{`${
          !this.props.isAuthenticated ? 'Log in' : 'Log out'
        }`}</button>
      </section>
    );
  }
}

export default Login;
