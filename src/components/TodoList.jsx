// src/components/TodoList.js
import React, { useState } from "react";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    taskName: "",
    taskDescription: "",
  });

  // Enter edit mode for a specific todo item
  const handleEdit = (index, todo) => {
    setIsEditing(index); // Set the index of the todo item being edited
    setEditData(todo); // Set the current todo data to be edited
  };

  // Handle changes in the edit input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value }); // Update only the specific field in editData
  };

  // Save changes and exit edit mode
  const handleSave = (index) => {
    updateTodo(index, editData); // Update the todo item in the main todo list
    setIsEditing(null); // Exit edit mode
    setEditData({ name: "", email: "", taskName: "", taskDescription: "" }); // Clear editData
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {todos.length ? (
        todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {isEditing === index ? (
              // Edit mode for the specific todo item
              <>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="edit-form-style"
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="edit-form-style"
                />
                <input
                  type="text"
                  name="taskName"
                  value={editData.taskName}
                  onChange={handleChange}
                  placeholder="Task Name"
                  className="edit-form-style"
                />
                <input
                  type="text"
                  name="taskDescription"
                  value={editData.taskDescription}
                  onChange={handleChange}
                  placeholder="Task Description"
                  className="edit-form-style"
                />
                <div className="flex gap-2 w-full items-center justify-center">
                  <button
                    onClick={() => handleSave(index)}
                    className=" !flex-1 text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className=" !flex-1 text-white"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              // Display mode for the todo item
              <>
                <p>
                  <strong>Name:</strong> {todo.name}
                </p>
                <p>
                  <strong>Email:</strong> {todo.email}
                </p>
                <p>
                  <strong>Task Name:</strong> {todo.taskName}
                </p>
                <p>
                  <strong>Task Description:</strong> {todo.taskDescription}
                </p>
                <div className="flex gap-2 w-full items-center justify-center">
                  <button
                    className="flex-1 text-white "
                    onClick={() => handleEdit(index, todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete flex-1"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <div>Add your todo's for today!</div>
      )}
    </div>
  );
};

export default TodoList;
