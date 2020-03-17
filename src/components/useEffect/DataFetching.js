import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = pros => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data)
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, [id]);
  
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <div>{post.title}</div>
      {/*<ul>*/}
      {/*  {*/}
      {/*    post.map(post => <li key={post.id}>{post.title}</li>)*/}
      {/*  }*/}
      {/*</ul>*/}
    </div>
  );
};

export default DataFetching;
