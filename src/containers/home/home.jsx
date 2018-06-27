import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => ({
  ...state.simpleReducer
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class Home extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <section className="home">
        <h1>Welcome to Hills Vet Demo!</h1>
        <p>
          This is a Demo App to showcase some functionalities to the customer
          using ReactJS.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
