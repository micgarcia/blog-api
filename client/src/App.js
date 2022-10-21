import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch('/posts');
      const body = await response.json()
      console.log(body);
      setData(body);
    }
    callApi();
  }, [])



  return (
    <div className="App">
      <h1>React App</h1>
      <p>{data.title ? data : ''}</p>
    </div>
  );
}

export default App;
