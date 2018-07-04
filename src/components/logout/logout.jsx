import React from 'react';
import './logout.css';

class Logout extends React.Component {
  render() {
    const { username } = this.props.labels;

    return (
      <div>
        <span>
          {username}: {this.props.user.email}
        </span>
        <br />
        <br />
        <button onClick={this.props.logout}>Log out</button>
      </div>
    );
  }
}

export default Logout;
