import React, { Component } from "react";
import "./professional-page.css";
import DataResults from "../../components/data-results";
import { API_CONFIG } from "../../constants";
import Spinner from "react-spinkit";

const flexLayout = {
  display: "flex",
  justifyItems: "center",
  flexDirection: "column",
  alignItems: "center"
};

class ProfessionalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.loadViewData = this.loadViewData.bind(this);
  }

  componentDidMount() {
    this.loadViewData();
  }

  render() {
    let dataResult;
    if (!this.state.isLoading) {
      const html = "<div>This is the inner HTL</div>";
      dataResult = <DataResults html={html} />;
    } else {
      dataResult = (
        <div>
          <Spinner
            name="chasing-dots"
            color="steelblue"
            className="professional-page__spinner"
          />
        </div>
      );
    }

    return (
      <section className="home">
        <h1>Professional Page!</h1>
        <p>
          This content is only shown to authenticated users with the role
          "PROFESSIONAL".
        </p>
        <div style={flexLayout}>{dataResult}</div>
      </section>
    );
  }

  async loadViewData() {
    this.setState({ isLoading: true });
    let url = new URL(`${API_CONFIG.BASE_URL}?key=${API_CONFIG.KEY}`);
    const data = await this.requestData(url);
    this.setState({
      isLoading: false
    });
  }

  // TODO: Request real data from the customer's API
  async requestData(url) {
    return new Promise((resolve, reject) => {
      // Do some async work here
      setTimeout(() => {
        if (url) {
          resolve(true);
        }
        reject("Please provide a valid URL!");
      }, 5000);
    });
  }
}

export default ProfessionalPage;
