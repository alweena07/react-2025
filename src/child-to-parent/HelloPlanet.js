import React, {Component} from 'react';
import PlanetProperties from "./PlanetProperties";

class HelloPlanet extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }

    updateCounter = () => {
        this.setState({counter:this.state.counter+1})
    }

    render(){
        return ( 
            <div>
                <p> Counter: {this.state.counter}  </p>
                <PlanetProperties triggerParentUpdate = {this.updateCounter }
                name = "Alweena" />
                  
            </div>
        )
    }

}


export default HelloPlanet;