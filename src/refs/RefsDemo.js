import React, {Component, Fragment} from 'react';

class RefsDemo extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();  
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    inputHandler = () => {
        alert(this.inputRef.current.value);

    }

    render() {
        return (
            <Fragment>
                <input type = 'text' ref = {this.inputRef} />
                <button onClick = {this.inputHandler}>click</button>  
            </Fragment>

        );
    }
}

export default RefsDemo;