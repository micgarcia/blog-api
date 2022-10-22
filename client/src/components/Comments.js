import {react, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';


const Comments = () => {
  const params = useParams();
  const [commentsData, setCommentsData] = useState([]);
  const [postData, setPostData] = useState({});

  const callApi = () => {

    fetch('/posts/' + params.id + '/comments')
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        setCommentsData(response);
        setPostData(response[0].post);
      })
  }

  useEffect(() => {
    callApi();
  }, [])

  return (
    <div className="commentsCont">
      <h1>Comments for: '{postData.title}'</h1>
      {commentsData.map((comment, index) => {
        return (
          <div key={index}>
            <h3>Name: {comment.name}</h3>
            <p>{comment.text}</p>
            <p>{comment.timestamp}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments;