import React, { Component } from 'react';
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

 class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"Alweena",
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Alweena"
            })
        }, 2000)
    }


    render() {
        console.log("Parent");
        return (
            <div>
              Parent Component  
              <RegularComponent name = {this.state.name} />
              <PureComponent name = {this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
