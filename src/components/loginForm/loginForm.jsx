import React from 'react';
import './loginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  login = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { legend, username, password, loginButton } = this.props.labels;

    return (
      <div>
        <p>{legend}</p>

        <form className="loginForm">
          <label>{username}:</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <br />
          <label>{password}:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <button onClick={this.login}>{loginButton}</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
