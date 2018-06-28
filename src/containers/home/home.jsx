import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { actions } from "../../store/homeReducer";
import Spinner from "react-spinkit";
import DataResults from "../../components/data-results";

const mapStateToProps = state => ({
  ...state.home, ...state.global
});

const mapDispatchToProps = dispatch => ({
  asyncAction: () => dispatch(actions.asyncAction())
});

class Home extends Component {
  asyncAction = event => {
    this.props.asyncAction();
  };

  render() {
    let resultData;

    if (this.props.isLoading) {
      resultData = (
        <div>
          <Spinner
            name="chasing-dots"
            color="steelblue"
          />
        </div>
      );
    } else {
      resultData = (<DataResults html={this.props.resultData}/>);
    }
    return (
      <section className="home">
        <h1>Welcome to Hills Vet Demo!</h1>
        <p>
          This is a Demo App to showcase some functionalities to the customer
          using ReactJS.
        </p>
        <span>Current Language: {this.props.currentLanguage}</span>
        <br/>
        <br/>
        <button onClick={this.asyncAction}>Redux async action</button>
        <br/>
        <br/>
        {resultData}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
