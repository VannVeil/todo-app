import React, { useState } from "react";

function TodoInput({ addTask, clearTasks }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
      <button
        onClick={clearTasks}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Clear All
      </button>
    </div>
  );
}

export default TodoInput;
