import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // To prevent adding an empty task
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i != index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];

      [updateTasks[index - 1], updateTasks[index]] = [
        updateTasks[index],
        updateTasks[index - 1],
      ];

      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];

      [updateTasks[index + 1], updateTasks[index]] = [
        updateTasks[index],
        updateTasks[index + 1],
      ];

      setTasks(updateTasks);
    }
  }

  return (
    <>
      <div className="To-Do-List">
        <input
          type="text"
          id="newTask"
          value={newTask}
          placeholder="Enter A Task"
          onChange={handleInputChange}
        />
        <button id="addButton" onClick={addTask}>
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="task">{task}</span>
              <button id="deleteButton" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button id="moveButton" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button id="moveButton" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
