import React, {Component, Fragment} from 'react';


class ChildComponent extends Component{

    render(){

        const {greetParent} =  this.props;
        return (
            <Fragment>

           <button onClick = { () => greetParent("Child")}>Click me</button>

            </Fragment>
        )
    }

}

export default ChildComponent;