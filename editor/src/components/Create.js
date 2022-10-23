import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const Create = (prop) => {

  return (
    <div className="postCont">
      <form method="POST" action={`/posts/create`}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title"/>
        <hr />
        <label htmlFor="name">By:</label>
        <input type="text" name="name"/>
        <hr />
        <label htmlFor="text">Text:</label>
        <textarea type="textarea" name="text"/>
        <hr />
        <button type='submit'>Submit</button>
        <hr />
      </form>
    </div>
  )
}

export default Create;