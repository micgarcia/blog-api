import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const Update = (prop) => {
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
      <form method="POST" action={`/posts/${params.id}/update`}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" defaultValue={postData.title || ''}/>
        <hr />
        <label htmlFor="name">By:</label>
        <input type="text" name="name" defaultValue={authorData.name || ''}/>
        <hr />
        <label htmlFor="text">Text:</label>
        <textarea type="textarea" name="text" defaultValue={postData.text || ''}/>
        <hr />
        <button type='submit'>Submit</button>
        <hr />
      </form>

      <hr />
      <Link to={`/posts/${params.id}/comments`}> View Comments</Link>
    </div>
  )
}

export default Update;