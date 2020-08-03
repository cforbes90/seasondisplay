import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <div>
      <SeasonDisplay /> Holla if you here me! Woohoo
      <div>Latitude: </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return <div> Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
