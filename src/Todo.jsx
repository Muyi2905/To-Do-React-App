import React, { useState } from "react";
import benten from "./assets/benten.jpg";

const Todo = () => {
  const [tasks, setTasks] = useState([
    "sleep",
    "play fifa",
    "read manwha",
  ]);
  const [newTasks, setnewTasks] = useState("");

  const handleTask = (event) => {
    setnewTasks(event.target.value);
  };

  const addTask = () => {

    if(newTasks.trim() !==""){
    setTasks(t=>[...t, newTasks])
    setnewTasks('')
  };
  }
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i)=>i !==index)
    setTasks(updatedTasks)
  };

  const movetaskup = (index) => {
    
  };

  const movetaskdown = () => {};
  return (
    <div className="to-do-list">
      <img className="img" src={benten}></img>
      <h1> To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="enter a task..."
          onChange={handleTask}
          value={newTasks}
        />{" "}
        <br></br>
        <button onClick={addTask} onclassName="add-button">Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-button" onClick={() => movetaskup(index)}>
              ☝️
            </button>
            <button className="move-button" onClick={() => movetaskdown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
