import React from 'react';
import './tiles.css';

const Tiles = props => {
  if (props.images) {
    return (
      <div className="tiles">
        {props.images.map((image, index) => {
          return (
            <div className="tile" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <span>Loading</span>;
  }
};

export default Tiles;
