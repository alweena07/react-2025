import React, {Fragment, PureComponent} from 'react';

class PureComp extends PureComponent {

    render(){
        console.log("Pure");
        return (
            <Fragment>
               Pure Component : {this.props.userDetails.title}<br/>
               Pure Component : {this.props.userDetails.name}
               {/* Pure Component : {this.props.primitiveProp} */}
            </Fragment>
        )
    }

}

export default PureComp;
