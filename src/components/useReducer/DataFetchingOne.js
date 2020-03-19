import React, {useState, useEffect} from 'react';
import axios from 'axios'

const DataFetchingOne = pros => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch(error => {
        setLoading(false);
        setPost({});
        setError(`Something went wrong :: ${error}`);
      })
  }, [postId])
  
  const handleOnChange = e =>{
    console.log("Hello")
    setPostId(e.target.value)
  };
  
  return (
    <div>
      <input type="text" value={postId} onChange={handleOnChange}/>
      {/*<button onClick={() => }>Get Post</button>*/}
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingOne;
