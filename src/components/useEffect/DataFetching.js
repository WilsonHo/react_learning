import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = pros => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data)
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);
  
  return (
    //https://jsonplaceholder.typicode.com/posts
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  );
};

export default DataFetching;
