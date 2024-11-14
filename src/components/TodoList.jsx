import React, { useState } from "react";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    taskName: "",
    taskDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleEdit = (index, todo) => {
    setIsEditing(index);
    setEditData(todo);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (index) => {
    updateTodo(index, editData);
    setIsEditing(null);
    setEditData({ name: "", email: "", taskName: "", taskDescription: "" });
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      deleteTodo(index); // Call delete function if confirmed
    }
  };

  return (
    <div className="todo-list">
      <h2 className="font-bold">Todo List</h2>
      {todos.length ? (
        todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {isEditing === index ? (
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
                    className="flex-1 text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className="flex-1 text-white"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
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
                    className="flex-1 text-white"
                    onClick={() => handleEdit(index, todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete flex-1"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <div>Add your todos for today!</div>
      )}
    </div>
  );
};

export default TodoList;
