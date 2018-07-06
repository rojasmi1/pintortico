import React from 'react';
import './banner.css';

const Banner = props => {
  if (props.img) {
    return (
      <div className="banner">
        <img src={props.img.src} alt={props.img.alt} />
        <p>{props.description}</p>
      </div>
    );
  } else {
    return <span>Loading</span>;
  }
};

export default Banner;