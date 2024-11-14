
import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (index, todo) => {
    setIsEditing(index);
    setEditData(todo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (index) => {
    updateTodo(index, editData);
    setIsEditing(null);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {isEditing === index ? (
            <>
              <input type="text" name="name" value={editData.name} onChange={handleChange} />
              <input type="email" name="email" value={editData.email} onChange={handleChange} />
              <input type="text" name="task" value={editData.task} onChange={handleChange} />
              <button onClick={() => handleSave(index)}>Save</button>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {todo.name}</p>
              <p><strong>Email:</strong> {todo.email}</p>
              <p><strong>Task:</strong> {todo.task}</p>
              <button onClick={() => handleEdit(index, todo)}>Edit</button>
              <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
