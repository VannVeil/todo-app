import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="w-full max-w-lg">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
