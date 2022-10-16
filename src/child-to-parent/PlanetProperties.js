import React, {Component} from 'react';


class PlanetProperties extends Component {
   
    render(){
        return ( 
        
        <div>
               <h1> {this.props.name} </h1>
               <button onClick = {this.props.triggerParentUpdate}>update parent</button>

        </div>
       
        )
    }
}

export default PlanetProperties;