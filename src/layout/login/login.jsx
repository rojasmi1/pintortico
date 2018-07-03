import React, { Component } from 'react';
import './login.css';
import Spinner from 'react-spinkit';
import LoginForm from '../../components/loginForm';
import Logout from '../../components/logout';

class Login extends Component {
  login = (email, password) => {
    this.props.login(email, password);
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <section className="login">
        {!this.props.isAuthenticated ? (
          <section>
            <h1>Login!</h1>
            <LoginForm login={this.login} />
          </section>
        ) : (
          <section>
            <h1>Logout!</h1>
            <Logout logout={this.logout} />
          </section>
        )}
        {this.props.isLoading ? (
          <Spinner name="chasing-dots" color="steelblue" />
        ) : null}
      </section>
    );
  }
}

export default Login;
