import React, { Component } from 'react';
import withCounter from "./WithCounter";

class HoverCounter extends Component {
    render() {
        const {counter, incrementCount} = this.props;
     

        return (
            <div>
                <h2 onMouseOver = {incrementCount}> Hovered {counter} times</h2> 
            </div>
        );
    }
}

export default withCounter (HoverCounter, 10)

