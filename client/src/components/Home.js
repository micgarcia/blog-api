import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='homeCont'>
      <h1>Blog API Project</h1>
      <Link to="/posts">View Posts</Link>
    </div>
  )
}

export default Home;