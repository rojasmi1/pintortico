import React, { Component } from 'react';
import Spinner from 'react-spinkit';

class Home extends Component {
  render() {
    let resultData;
    let bioImage = this.props.baseImages
      ? this.props.baseImages.bio_image
      : null;

    if (this.props.isLoading) {
      resultData = (
        <div>
          <Spinner name="chasing-dots" color="steelblue" />
        </div>
      );
    } else {
      resultData = (
        <div>
          {bioImage ? <img src={bioImage.src} alt={bioImage.meta.alt} /> : null}
        </div>
      );
    }
    return (
      <section className="home">
        {<h1>Home Page</h1>}
        {resultData}
      </section>
    );
  }
}

export default Home;
