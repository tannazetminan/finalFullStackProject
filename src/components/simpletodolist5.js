import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Todo = (props) => (
        <div class="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div class="desc">
      <h2><a href="/get:id">{props.todo.title}</a></h2>
      <h3> {props.todo.author}</h3>
      <p> {props.todo.description}</p>
      </div>
    <td className="col-2" style={{ textAlign: 'right' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => {
            props.editTodo(props.keyt);
          }}
          style={{ marginRight: '5px', background: 'none', border: 'none' }}
        >
          <span role="img" aria-label="Edit">✏️</span>
        </button>
        <button
          onClick={() => {
            props.deleteTodo(props.keyt);
          }}
          style={{ background: 'none', border: 'none' }}
        >
          <span role="img" aria-label="Delete">❌</span>
        </button>
      </div>
    </td>
    </div>
);


export default function SimpleTodosList() {
  const [todos, setTodoList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/activity/')
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete('http://localhost:5000/activity/delete/' + id)
      .then((response) => {
        console.log(response.data);
      });

    setTodoList(todos.filter((el) => el._id !== id));
  };

  const editTodo = (id) => {
    window.location = '/update/' + id;
  };

  return (
    <div>
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'> 
            <Link to='/create'
            style ={{"margin-left": "auto"}}
         className='btn btn-info float-right' id="rightSide">
          + Add New Book
      </Link>
              <br />
              <br />
              <hr id='hr'/>
            </div>
          </div>
  
          {/* <div className='list'>{bookList}</div> */}


        <div className='list'>
          {todos.map((todo) => {
            return (
              <Todo
              
                todo={todo}
                title={todo.title}
                author={todo.author}
                description={todo.description}
                key={todo._id}
                keyt={todo._id}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            );
          })}
</div>
</div>

    </div>
    </div>

  );
}
