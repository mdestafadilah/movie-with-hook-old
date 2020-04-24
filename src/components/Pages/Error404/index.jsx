import React from "react";
import Button from "../../../components/Button/index";
import "./Error404.css";

export default function Error404() {
  return (
    <div className="error404">
      <h1>Ups, Wrong Pages!</h1>
      <p>
        <Button to="/">Home</Button>
      </p>
    </div>
  );
}
