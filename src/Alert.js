import React from "react";
export default function alertMessage(Component) {
  //   console.log("Component inside alert", Component);
  return function AlertMessage(props) {
    const handleClick = message => {
      console.log(props.message, props);
      alert(props.message);
    };
    return <Component {...props} click={handleClick} />;
  };
}
