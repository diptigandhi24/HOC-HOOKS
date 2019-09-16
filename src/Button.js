import React from "react";
import "./Button.css";
export default function Button() {
  return (
    <div>
      <button className={"btn btn-primary"}>Primary Button</button>
      <button className={"btn btn-secondary"}>Secondary Button</button>
      <button className={"btn btn-success"}>Success Button</button>
      <button className={"btn btn-warning"}>Warning Button</button>
    </div>
  );
}
