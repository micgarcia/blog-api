import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  const [postData, setPostData] = useState([]);

  const callApi = async () => {
    const response = await fetch('/posts');
    const body = await response.json()
    console.log(body);
    setPostData(body);
  }

  useEffect(() => {
    callApi();
  }, [])

  return (
    <div className='postsCont'>
      {postData.map((post, index) => {
        return (
          <Link to={`/posts/${post._id}`} key={index}>
            <div>
              <h3>Title: {post.title}</h3>
              <p>By: {post.author.name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Post;