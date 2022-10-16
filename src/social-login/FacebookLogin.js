import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

 class Facebook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false,
            userID:'',
            name:"",
            picture:''
             
        }
    }

    componentClicked = () => console.log('clicked')

    responseFacebook = response => {
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
          
        })
    }
    
    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style = {{
                    width:'400px',
                    marginLeft:'500px',
                    background:'#f4f4f4',
                    padding:'20px'
                }}>
                    <h2> Welcome: {this.state.name} </h2>
                    ID: {this.state.userID}
                </div>
            )

        }


        return (
            <div>
               
                    <div> 
               <FacebookLogin
                        appId="488281878961890"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook} />
            
            </div>
            <div>{fbContent}</div>


            </div>
            
        )
    }
}

export default Facebook;
