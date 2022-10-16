import React from "react";

const Greet = props => {
    
  return (
    <div id="props-content">
      <h2>Hello {props.name} </h2>
      <p> {props.heroName} </p>
      {props.children}  
    </div>
  );
};

export default Greet;


// props.children is used to get the HTML from parent component with the help of props.
