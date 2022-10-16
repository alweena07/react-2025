import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FetchData = () => {

    console.log("Hi")

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);


    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response);
            setPosts(response.data)
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [idFromButtonClick])

    return (
        
        <div>
            <input type = "text" value = {id} onChange = {e => setId(e.target.value)} /><br />
            <button onClick = {handleClick}>Fetch Data</button>
             {/*  <ul>
              {posts.map((post) => (
                        <div>
                             <li key = {post.id}>{post.email}</li>
                        </div>
                    ))}
                </ul> */}

               <p>{posts.title}</p> 
           
        </div>)




}

export default FetchData;