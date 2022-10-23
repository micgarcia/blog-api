import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js';
import Post from './components/Post.js';
import Update from './components/Update.js';
import Create from './components/Create.js';



function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts/:id' element={<Post />}></Route>
          <Route path='/posts/:id/update' element={<Update />}></Route>
          <Route path='/posts/create' element={<Create />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
