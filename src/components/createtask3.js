import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const activityData = { title, author, description };

    axios
      .post('http://localhost:5000/activity/add', activityData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div className='new'>
            <Link to="/" className="btn btn-info float-right">
              Show Book List
            </Link>
      <h2 className='display-4 text-center'>Add Book</h2>
      <h4 className='display-16 text-center' style={{fontWeight: 'lighter'}}>Create new book</h4>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input
            type="text"
            required
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            id='submit'
          />
        </div>
      </form>
    </div>
  );
}
