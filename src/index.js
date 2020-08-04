import "semantic-ui-css/semantic.min.css";

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    console.log(" My componended mount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState! This comes from extending React.Component
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log(" did something change");
  }

  //React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <>
          <SeasonDisplay lat={this.state.lat} />
        </>
      );
    }

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
