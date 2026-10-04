import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">My To-Do List</h1>
      <TodoInput addTask={addTask} clearTasks={clearTasks} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <div className="mt-10 p-4 bg-white shadow rounded w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Type a task and click <b>Add Task</b>.</li>
          <li>Click <b>Done/Not Done</b> to toggle status.</li>
          <li>Click <b>Delete</b> to remove a task.</li>
          <li>Click <b>Clear All</b> to reset the list.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
