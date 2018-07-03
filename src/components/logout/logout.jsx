import React from 'react';
import './logout.css';

class Logout extends React.Component {
  render() {
    return <button onClick={this.props.logout}>Log out</button>;
  }
}

export default Logout;
