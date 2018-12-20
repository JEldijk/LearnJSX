// import creat and reactdom libs
import ReactDOM from "react-dom";
import React from "react";

/* function te set text
function getButtonText () {
  return "Click on me!";
}
*/

/* javaScribt objects are not allowed and will give an error: "object are not valid as a react child"

you can refernce it by calling its text parts object.text
You can use a java object inside the style JSX 
style = {
  backgroundColor: "blue",
  color: "white"
}
*/
// create a react component
const App = () => {
  const buttonText = 'Submit';
  const labelText = 'Enter name';

  return <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />><button
        style={{ backgroundColor: "blue", color: "white" }}
      >
        {buttonText}
      </button>
    </div>;
};

// take the react component and place it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
