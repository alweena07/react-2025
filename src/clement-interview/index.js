import React, { Component } from 'react';


class Interview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            items:''

        }

    }

    handleIncrement = () => {
       this.setState((prevState) => ({counter:prevState.counter+2}))
       console.log(this.state.counter)
     
    }

    componentDidMount(){
        this.getData()
       
        
    }

    getData = () => {
        fetch('http://www.json-generator.com/api/json/get/coDnUFpSUO?indent=2')
        .then(response =>response.json())
        .then(data => {
            this.setState({items:data})
        })

    }


    render() {
        let items;

         items =  this.state.items.map((item) => {

            return (
                <ul key = {item.id}> 
                    <li> {item.brandTwo}</li>
                     <li >{item.sellingPrice} </li>
                </ul>
              

            )
            })
       
        return (
            <div>
                {this.state.counter}<br/><br/>
                <button onClick = {this.handleIncrement}>Increment</button><br/><br/>
                <button onClick = {this.showItems}>Get Data</button>

                {items}
            </div>

        );
    }
}



export default Interview;