import React from 'react';


const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                counter:0,
            }
        }
    
      incrementCount = () => {
    
        this.setState(prevState => {
            return {
                counter: prevState.counter+incrementNumber
            }
        })
      }  
        render(){
            console.log(this.props.name)
            return (
            <WrappedComponent 
               counter = {this.state.counter}
               incrementCount = {this.incrementCount}
               {...this.props}
            />
            )
        }

    }
    return WithCounter;

}

export default withCounter;
