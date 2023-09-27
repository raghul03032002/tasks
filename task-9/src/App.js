import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [todo, settodo] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        settodo(data);
      });
  }, []);

  const addTodo = () => {
    if (task.trim() !== "") {
      const newTask = {
        userId: 1,
        id: todo.length + 1,
        title: task,
        completed: false,
      };
      settodo([...todo, newTask]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    const newtodo = todo.filter((todo) => todo.id !== id);
    settodo(newtodo);
  };

  return (
    <div className='content'>
      <div className="container ">
      <h1 className="container mt-3 mx-5 px-5 text-light"><u>Todo List</u></h1>
      <div className="row">
        <div className="col">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className='form-control container m-3 mx-5 input'
      /></div>
      <div className="col">
      <button onClick={addTodo} className="btn btn-primary m-3 mx-5 px-5">Add</button>
      </div>
      </div>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} className="list-group-item list-group-item-action ">
            <div className="row m-2 area bg-light p-2 text-dark bg-opacity-10">
            <div className="col m-3">
            <p className='text'>{todo.title}</p></div>
            <div className="col ">
            <button onClick={() => deleteTodo(todo.id) } className="btn btn-danger m-3">Delete</button>
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
