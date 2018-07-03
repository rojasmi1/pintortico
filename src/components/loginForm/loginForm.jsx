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
    return (
      <form>
        <p>Please enter your credentials to log in!</p>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.login}>Log in</button>
      </form>
    );
  }
}

export default LoginForm;
