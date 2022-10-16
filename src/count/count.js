import React, {useState} from 'react';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import {Button,}  from 'react-bootstrap/';


const Count = () => {

  const [count, setCount ] = useState(0);
  

  const incrementCount = () => {

    setCount(count+1);

  }

  const decrementCount = () => {
    setCount(count-1);
  }


  return (
    <div className="main-div">
      <div className="center-div">
        <b>Count : {count} </b>
        <div className="button-group">
          <Button id = "btn-add"
          onClick = {incrementCount}
          >+
          </Button>
          <Button variant="danger"
          id ="btn-dlt"
          onClick = {decrementCount}
          >
            <span class="fa fa-trash"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Count;