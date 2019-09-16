import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import alertMessage from "./Alert";
const ButtonPrimary = alertMessage(Button);
const ButtonSecondary = alertMessage(Button);
const ButtonSuccess = alertMessage(Button);
const ButtonWarning = alertMessage(Button);

function App() {
  return (
    <div className="App">
      <ButtonPrimary
        btnType="primary"
        name="Primary button"
        message="I am Primary"
      />
      <ButtonSecondary
        btnType="secondary"
        name="Secondary button"
        message="I am secondary"
      />
      <ButtonSuccess
        btnType="success"
        name="Success button"
        message="I am success"
      />
      <ButtonWarning
        btnType="warning"
        name="Warning button"
        message="I am warning"
      />
    </div>
  );
}

export default App;
