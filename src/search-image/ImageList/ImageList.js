import React from "react";
import './image_list.css';
import {Link} from "react-router-dom";


const ImageList = (props) => {



    return (
        <div className="container">
        <div className="row">
          { props.images.map(image => {
            return (
              <div key={image.id} className="col-md-3" style={{ marginBottom:"2rem" }}>
                <div className="imageList-container">
                <img className = "imageList-image" src={image.urls.regular} alt={image.alt_description} />
                </div>
                <div className="image-details">
                    <Link to = {{
                        pathname:`/image/${image.id}`,
                        state: {image}
                    }}>
                      <button>Add Caption</button>
                    </Link>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    );

}

export default ImageList;







