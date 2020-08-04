import "./Loader.css";
import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Spinner = (props) => {
  return (
    <div>
      <Segment className=" spinner">
        <Dimmer active>
          <Loader content={props.message} />
        </Dimmer>

        <Image src="/images/wireframe/short-paragraph.png" />
      </Segment>
    </div>
  );
};
//Gives us a default prop message in case we don't pass a message deliberately
Spinner.defaultProps = {
  message: "Loading Now",
};
export default Spinner;
