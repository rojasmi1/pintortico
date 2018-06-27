import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>About us!</h1>
        <p>This page was created as a showcase for how to use React to solve/implement the customer needs!</p>
        <p>
          This was developed by{" "} POSSIBLE.
        </p>
      </section>
    );
  }
}

export default About;
