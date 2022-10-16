import React from 'react';
import { Fragment } from 'react';

class LifecycleB extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Alweena",
        }
        console.log('B Lifecycle constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log("B getDerivedStateFromProps method:");
       return null;
    }

    componentDidMount(){
        console.log("B ComponentDidMount:");
        this.setState({name:"Anusha"})
     
    }

    render(){
        console.log("B Render method:");
        return (
            <Fragment>
                <div>LifeCycle B</div>
                {this.state.name}
              

            </Fragment>
          
        )
    }
}


export default LifecycleB;