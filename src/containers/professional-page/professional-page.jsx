import React, { Component } from "react";
import "./professional-page.css";

const flexLayout = {
  display: "flex",
  justifyItems: "center",
  flexDirection: "column",
  alignItems: "center"
};

class ProfessionalPage extends Component {
  render() {
    return (
      <section className="home">
        <h1>Professional Page!</h1>
        <p>
          This content is only shown to authenticated users with the role
          "PROFESSIONAL".
        </p>
      </section>
    );
  }
}

export default ProfessionalPage;
