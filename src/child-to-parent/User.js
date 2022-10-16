import React from 'react';

class User extends React.Component {

    constructor(){
        console.log("constructor")
        super();
        this.state = {
            data:"Alweena Iqbal Khan"
        }
    }

    componentDidMount(){
        console.log("Mount")
    }


    render(){
        console.log("render")

        const {data} = this.state;
        
        return (
            <div>
                <h1>Child Component</h1>
                <button onClick = {() => this.props.handleClick(data)}>Click me</button>
            </div>
           
        )
    }

} 

/* 
function User(props){

    const data = {
        id:1,
        firstName:"Alweena",
        lastName:"Khan"
    };

    let i = 5;
    for (let i = 1; i <= 10; i++) {
      // some statements
    }

    console.log(i)


    return (
        <div>
            <h2>Hello from {props.name}</h2>
            <button onClick = {() => props.handleClick(data)}>Click me</button>
        </div>
    )

} */

export default User;