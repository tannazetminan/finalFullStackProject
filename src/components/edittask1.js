import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EditActivity() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const [description, setDescription] = useState(''); // Change to "description" instead of "activity"

  useEffect(() => {
    axios
      .get(`http://localhost:5000/activity/${id}`)
      .then((response) => {
        setDescription(response.data.description); // Set the description in the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedActivity = { description: description }; // Change the field name to "description"
    axios
      .post(`http://localhost:5000/activity/update/${id}`, updatedActivity)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <div className='new'>
        <Link to="/" className="btn btn-info float-right">
          Show Book List
        </Link>
        <h2 className='display-4 text-center'>Book Editing</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Edit The Book Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={description} // Use "description" instead of "activity"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Activity Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
