import React, { Component } from 'react'
import axios from 'axios';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {refreshTokenSetup} from "../utils/RefreshTokenSetup";

 class SocialLogin extends Component {
     constructor(props) {
         super(props)
         this.state = {
            clientID:'536241344066-p1p30qt8cpromkcrboiks5q0sev2aq7l.apps.googleusercontent.com',
            nData:"",
            txtData:{
                userName:'',
                passWord:''
            }
         }
     }

     handleInput = (e) => {
        this.setState({txtData:{...this.state.txtData, [e.target.name]:e.target.value}})
    }


    componentDidMount(){
       axios.get('http://www.json-generator.com/api/json/get/bVSqCWlKXm?indent=2')
        .then(response => { 
            //console.log(response.data)
            this.setState({nData:response.data}) 
        }) 

    }

    onSuccess = (res) => {
        console.log(`Login Successful : ${res.profileObj.name}`)
        refreshTokenSetup(res)

    }

    logout = res => {
        console.log(`Logout : ${res}`)

    }

    onFailure = res => {
        console.log('[Login Unsuccessful] res: ' + res)

    }
     
    render() {
        const {clientID} = this.state;
        return (
            <div>
            <h1> {this.state.txtData.userName} {this.state.txtData.passWord} </h1>
            <label>Username</label>&ensp;
            <input name = "userName"  type = "text" value = {this.state.txtData.userName} onChange = {this.handleInput}
            
            /><br/><br/>
            <label>Password</label>&ensp;
            <input name = "passWord" type = "text" value = {this.state.txtData.passWord} onChange = {this.handleInput}
            
            /><br/><br/>

            <button onClick = {() => this.props.handleLogin(this.state.txtData)}>Submit</button>&ensp;&ensp;

            <GoogleLogin
            clientId = {clientID}
            buttonText = 'Login'
            onSuccess = {this.onSuccess}
            onFailure = {this.onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
            />&ensp;&ensp;

            <GoogleLogout
             clientId = {clientID}
             buttonText = 'Logout'
             onLogoutSuccess = {this.logout}
             />
        </div>
           
        )
    }
}

export default SocialLogin;
