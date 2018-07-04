import React, { Component } from 'react';
import './home.css';
import Spinner from 'react-spinkit';
import Banner from '../../components/banner';

class Home extends Component {
  loadContent = event => {
    this.props.loadContent(this.props.currentLocale);
  };

  componentDidMount() {
    this.loadContent();
  }

  render() {
    let resultData;
    const banner = this.props.content ? this.props.content.banner : {};
    const meta = this.props.content
      ? this.props.content.meta
      : { title: '', description: '', tags: '' };

    if (this.props.isLoading) {
      resultData = (
        <div>
          <Spinner name="chasing-dots" color="steelblue" />
        </div>
      );
    } else {
      resultData = <Banner {...banner} />;
    }
    return (
      <section className="home">
        <h1>{meta.title}</h1>
        {resultData}
      </section>
    );
  }
}

export default Home;
