import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts.js';
import Home from './components/Home.js';
import Post from './components/Post.js';
import Comments from './components/Comments.js';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/posts/:id' element={<Post />}></Route>
          <Route path='/posts/:id/comments' element={<Comments />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
