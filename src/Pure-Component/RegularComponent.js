import React, { Component } from 'react';

class RegularComponent extends Component {
    render() {
        console.log("Regular");
        return (
            <div>
                Regular Component :  {this.props.primitiveProp}
            </div>
        );
    }
}

export default RegularComponent;
