import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            data:{
                userName:"",
                passWord:"",
            }  ,
            email:'',
        }
    }

    handleInput = (e) => {
        this.setState({data:{...this.state.data, [e.target.name]:e.target.value}})
    }

    componentDidMount(){
     /*    axios.get('http://www.json-generator.com/api/json/get/cfNevtRJBu?indent=2')
        .then(response => {
            this.setState({email:response.data})
            //console.log(this.state.email.map(d => console.log(d.email)))
        }) */

        this.fetchData()


    }

    fetchData = async () => {
        const result = await axios.get('http://www.json-generator.com/api/json/get/cfNevtRJBu?indent=2')
        this.setState({email:result.data})
        console.log(this.state.email.map(d => console.log(d.email)))

    }


    render(){

        return (
            <div>
                <h1> {this.state.data.userName} {this.state.data.passWord} </h1>
                <label>Username</label>&ensp;
                <input name = "userName"  type = "text" value = {this.state.data.userName} onChange = {this.handleInput}
                
                /><br/><br/>
                <label>Password</label>&ensp;
                <input name = "passWord" type = "text" value = {this.state.data.passWord} onChange = {this.handleInput}
                
                /><br/><br/>

                <button onClick = {() => this.props.handleLogin(this.state.data)}>Submit</button>
            </div>
        )
    }

}


export default Login;