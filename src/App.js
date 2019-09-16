import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <Button btnType="primary" name="Primary button" />
      <Button btnType="secondary" name="Secondary button" />
      <Button btnType="success" name="Success button" />
      <Button btnType="warning" name="Warning button" />
    </div>
  );
}

export default App;
