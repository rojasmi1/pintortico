import React from "react";
import "./data-results.css";

const DataResults = (props) => (
  <div className="dataResults">
    <div dangerouslySetInnerHTML={{__html: props.html}} />
  </div>
);

export default DataResults;
