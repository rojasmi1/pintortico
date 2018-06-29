import React from 'react';
import './dataResults.css';

const DataResults = (props) => (
  <div className='dataResults'>
    <div dangerouslySetInnerHTML={{__html: props.html}} />
  </div>
);

export default DataResults;
