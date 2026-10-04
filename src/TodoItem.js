import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 mb-2 rounded">
      <span
        className={`flex-1 ${
          task.done ? "line-through text-green-600" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => toggleTask(task.id)}
        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 mr-2"
      >
        {task.done ? "Not Done" : "Done"}
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
