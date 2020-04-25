import React from "react";
import Button from "../Button";
import "./ConnError.css";

const Error = (props) => {
  return (
    <div className="noconnection">
      <h1>Ups, not connected!</h1>
      <p>Maybe you lost your connection</p>
      <p>
        <Button to="/">Retry</Button>
      </p>
    </div>
  );
};
export default Error;
