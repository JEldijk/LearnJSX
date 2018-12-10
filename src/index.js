// import creat and reactdom libs
import ReactDOM from "react-dom";
import React from "react";

// create a react component
const App = () => {
  return <div>Hi there!</div>;
};

// take the react component and place it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
