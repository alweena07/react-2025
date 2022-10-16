import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
        }
    }

    componentDidMount(){
        console.log("componentDidMount called:");
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts:res.data})
           
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    
    render() {
        console.log("render called:");
        const {posts} = this.state;
        return (
            <div>
                {
                    posts.length ? 
                    posts.map(post =>  <li key = {post.id}> {post.title}</li>
                        
                    ) : null
                }
                
            </div>
        );
    }
}

export default PostList;