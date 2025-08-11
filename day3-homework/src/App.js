// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    setTasks(tasks.concat({ text: newTask }));
    setNewTask("");
  };
  const deleteTask = (index) => {
    const newTasks = tasks;
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Nhập công việc..."
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button className="delete-btn" onClick={() => deleteTask(index)}>Xóa</button>
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
