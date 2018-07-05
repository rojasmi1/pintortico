import React, { Component } from 'react';
import './professional.css';

const flexLayout = {
  display: 'flex',
  justifyItems: 'center',
  flexDirection: 'column',
  alignItems: 'center'
};

class Professional extends Component {
  loadContent = () => {
    this.props.loadContent(this.props.currentLocale);
  };

  componentDidMount() {
    this.loadContent();
  }

  render() {
    const gallery = this.props.content ? this.props.content.gallery : {};

    return (
      <section className="home">
        <h1>Professional Page!</h1>
        <p>
          This content is only shown to authenticated users with the role
          'PROFESSIONAL'.
        </p>
        <div style={flexLayout} />
      </section>
    );
  }
}

export default Professional;
