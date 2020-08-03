import "./SeasonDisplay.css";
import React from "react";
import { Icon } from "semantic-ui-react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brrr! It is cold!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season]; //{text, iconName}
  console.log(text, iconName);
  return (
    <div className={`season-display ${season}`}>
      <Icon className="icon-left" name={iconName} size="massive" />
      tis' the Season!!
      <br />
      <Icon name={iconName} size="massive" />
      <h1> {text}</h1>
      <Icon className="icon-right" name={iconName} size="massive" />
    </div>
  );
};
export default SeasonDisplay;
