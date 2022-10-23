import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const Post = (prop) => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [authorData, setAuthorData] = useState({});

  const callApi = () => {
    fetch('/posts/' + params.id)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        setPostData(response);
        setAuthorData(response.author);
      })
  };

  useEffect(() => {
    callApi();
  },[])

  return (
    <div className="postCont">
      <h1>{postData.title}</h1>
      <h4>By: {authorData.name}</h4>
      <hr />
      <p>{postData.text}</p>
      <hr />
      <Link to={`/posts/${params.id}/update`}>Update Post</Link>
      <hr />
      <Link to={`/posts/${params.id}/comments`}> View Comments</Link>
    </div>
  )
}

export default Post;