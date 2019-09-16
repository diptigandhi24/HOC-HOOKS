import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <Button btnType="primary" name="Primary button" message="I am Primary" />
      <Button
        btnType="secondary"
        name="Secondary button"
        message="I am secondary"
      />
      <Button btnType="success" name="Success button" message="I am success" />
      <Button btnType="warning" name="Warning button" message="I am warning" />
    </div>
  );
}

export default App;
