import React from 'react';
import { Fragment } from 'react';
import LifecycleB from "./LifeCycleB";

class LifecycleA extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Alweena",
        }
        console.log('A Lifecycle constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log("A getDerivedStateFromProps method");
       return null;
    }

    componentDidMount(){
        console.log("A ComponentDidMount");
        this.setState({name:"Anushha"})
     
    }

    render() {
        console.log("A Render method");
        return (
            <Fragment>
                <div>LifeCycle A</div>
                <LifecycleB />
                {this.state.name}
            </Fragment>  
        )
    }
}


export default LifecycleA;