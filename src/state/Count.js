import  React,{ Fragment } from "react";


class Count extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0,
        }
    }

  /*  incrementOne(){
        this.setState({count:this.state.count+1}, () => {              //here arrow function is a callback function                                                                
                console.log(this.state.count)
            });  
    }  */

    increment(){

        this.setState(prevState => ({
            count:prevState.count+1
        }), () => { console.log(this.state.count)})
       console.log(this.state.count);           //this will log the value from the syncronous console log statement.
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
            <Fragment>
            <h2> Count - {this.state.count}</h2>
            <button onClick = {() => this.increment()}>Increment 1</button>


            <button onClick = {() => this.incrementFive()}>Increase 5</button>



            </Fragment>
          
         )
    }
    
}


export default Count;