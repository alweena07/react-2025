import React, {Fragment, PureComponent} from 'react';

class PureComp extends PureComponent {

    render(){
        console.log("Pure");
        return (
            <Fragment>
               Pure Component {this.props.name}
            </Fragment>
        )
    }

}

export default PureComp;
