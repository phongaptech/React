// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(setTasks);
  };
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <input type="text" value={newTask} placeholder="Nhập công việc..." onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={{ index }} style={{ textDecoration: task.completed ? "line-through" : "none", }}>
            <span onClick={() => toggleTask(index)} style={{ cursor: "pointer "}}>
              {task.text}
            </span>
            <button className="DltBtn" onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>Xóa</button>
          </li>
        ))}
      </ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
