import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
        temperature: '',
        }
    }

    handleChange(e){
        this.setState ({temperature:e.target.value});

    }

    

    render(){
        const temperature = this.state.temperature;
        return (
            <fieldset>
              <legend>Enter temperature in Celsius:</legend>
                <input 
                 value={temperature}
                 onChange =  {(e) => this.handleChange(e)} />
                <BoilingVerdict celsius = {parseFloat(temperature)}  />
            </fieldset>
         )
    }

}

export default LifeCycle;


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }