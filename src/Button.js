import React from "react";
import "./Button.css";
export default function Button(props) {
  console.log(props.message);
  const handleClick = message => {
    console.log(message, props.message);
    alert(message);
  };
  return (
    <button
      className={`btn btn-${props.btnType}`}
      onClick={() => handleClick(props.message)}
    >
      {props.name}
    </button>
  );
}
