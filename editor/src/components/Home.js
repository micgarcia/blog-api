import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const Home = () => {

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
    <div>
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
      <Link to={'/posts/create'}>
        Create New Post
      </Link>
    </div>
  )
}

export default Home