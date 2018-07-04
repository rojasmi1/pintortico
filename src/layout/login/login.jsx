import React, { Component } from 'react';
import './login.css';
import Spinner from 'react-spinkit';
import LoginForm from '../../components/loginForm';
import Logout from '../../components/logout';

class Login extends Component {
  login = (email, password) => {
    const currentLocale = this.props.currentLocale;
    this.props.login(email, password, currentLocale);
  };

  logout = () => {
    const currentLocale = this.props.currentLocale;
    this.props.logout(currentLocale);
  };

  render() {
    const labels = this.props.settings ? this.props.settings.loginForm : {};
    const navigationSettings = this.props.settings
      ? this.props.settings.navigation
      : {};

    return (
      <section className="login">
        {this.props.hasErrors ? (
          <div>
            <span style={{ color: 'red', fontSize: '20px' }}>
              {this.props.errorMessage}
            </span>
          </div>
        ) : null}
        {!this.props.isAuthenticated ? (
          <section>
            <h1>{navigationSettings.login}</h1>
            <LoginForm login={this.login} labels={labels} />
          </section>
        ) : (
          <section>
            <h1>{navigationSettings.logout}</h1>
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
