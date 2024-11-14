import React, { useState } from 'react';

const UserForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    taskName: '',
    taskDescription: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData({ name: '', email: '', taskName: '', taskDescription: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Add Task</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={formData.taskName}
        onChange={handleChange}
      />
      <textarea
        name="taskDescription"
        placeholder="Task Description"
        value={formData.taskDescription}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default UserForm;


