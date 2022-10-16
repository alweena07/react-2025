import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userID:'',
            title:'',
            body:'',
             
        }
    }

   onChangehandler = e => {
       this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res =>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
      

    }
    
    render() {
        const {userID, title, body} = this.state;

        return (
            <div>
                <form onSubmit ={this.submitHandler}>
                    <div>
                        <input type = "text" name = "userID" value = {userID} onChange = {this.onChangehandler} />
                    </div>
                    <div>
                        <input type = "text" name = "title" value = {title}  onChange = {this.onChangehandler}/>
                    </div>
                    <div>
                        <input type = "text" name = "body" value = {body}  onChange = {this.onChangehandler}/>
                    </div>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default PostForm;