import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import LoginForm from '../../components/loginForm';
import Logout from '../../components/logout';

class Login extends Component {
  login = (email, password) => {
    const currentLocale = this.props.currentLocale;
    const previousPage = this.props.location.state
      ? this.props.location.state.from
      : '/';
    this.props.login(email, password, currentLocale, previousPage);
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
        {!this.props.isAuthenticated ? (
          <section>
            <h1>{navigationSettings.login}</h1>
            {this.props.hasErrors ? (
              <div>
                <span style={{ color: 'red', fontSize: '20px' }}>
                  {this.props.errorMessage}
                </span>
              </div>
            ) : null}
            <LoginForm login={this.login} labels={labels} />
          </section>
        ) : (
          <section>
            <h1>{navigationSettings.logout}</h1>
            <Logout
              logout={this.logout}
              user={this.props.user}
              labels={labels}
            />
          </section>
        )}
        {this.props.isLoading ? (
          <Spinner name="chasing-dots" color="steelblue" className="spinner" />
        ) : null}
      </section>
    );
  }
}

export default Login;
