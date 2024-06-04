import React, { useState } from "react";
import benten from './assets/benten.jpg'

const Todo = () => {
  let [tasks, setTasks] = useState(['take a shower', 'play fifa', 'read manwha']);
  let [newTasks, setnewTasks] = useState("");

  const handleTask = (event) => {
    setnewTasks(event.target.value);
  };

  const addTask = () => {};

  const deleteTask = () => {};

  const movetaskup = () => {};

  const movetaskdown = () => {};
  return (
    <div className="to-do">
      <img className="img" src={benten}></img>
      <h1> To-Do List</h1>
      
      <div>
        <input
          type="text"
          placeholder="enter a task..."
          onChange={handleTask}
          value={newTasks}
        /> <br></br>
        <button className="add-button">Add</button>
      </div>
      <ol>
        {tasks.map((task, index)=>
        <li key={index}>
        <span className="text">{task}</span>
        <button className="delete-buuton" onClick={deleteTask}>❌</button>
        </li>)}
      </ol>
    </div>
  );
};

export default Todo;
