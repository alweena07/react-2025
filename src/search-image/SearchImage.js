import React, {useState} from 'react';
import "./styles/search-image.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageList from "./ImageList/ImageList";

function SearchImage(){

    const [value, setValue] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    

    const fetchImages = ()  => {
        fetch(`https://api.unsplash.com/search/photos?client_id=TIerNFHXdVIu5hI7NZMaZkNuVfCRuG2xTZes2_KOQcI&query=${value}&orientation=squarish&per_page=16`)
            .then(response => response.json())
            .then(data => {
                if(!value){
                  setError('Please provide a value')
                }
                else{
                  setImages(data.results);
                  setError(null)
                 
                }
            })
    }

    return (
      <div>
        <div className="body-content">
          <div className="user-info">
            <p>Name: Alweena Iqbal</p>
            <p>Email: alweenaiqbal.07@gmail.com</p>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter your search term"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <FontAwesomeIcon onClick={fetchImages} icon={faSearch} id="icon" />
          </div>
        </div><br/>
       {
         error!== null ?  
         <div style = {{color:"white", textAlign:"center"}}> {error} </div> :
         <ImageList images = {images} /> 
       } 
      </div>
    );
}


export default SearchImage; 

