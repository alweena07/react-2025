import React from "react";
import { Button } from "react-bootstrap";
import "./image_view.css";
//import {fabric} from "react-fabricjs";



const ImageView = (props) => {
  console.log(props)
  const id = props.location.state.image.id;

  const url = ` https://unsplash.com/photos/${id}/download?force=true`;

  return (
    <div className="imageView-img">
      <img
        src={props.location.state.image.urls.regular}
        alt={props.location.state.image.alt_description}
      />
      <div className="download-btn">
        <Button> Add Captions </Button>&ensp;
        <a href= {url}>
          <Button> Download </Button>
        </a>
      </div>
    </div>
  );
};

export default ImageView;
