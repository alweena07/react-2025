import React from 'react';


function PersonList({person}){
    return (
        <div>

           {/*  <p style = {styles} >Alweena</p> */}

       
        <h2>
          <div>
              <ul key = {person.id}>
                  <li>{person.skill} </li>

              </ul>
              </div>
              <div>
            I am {person.name}. I Know {person.skill} 

         </div> 
       
       </h2>

       </div>

    
       );
   
}


export default PersonList;