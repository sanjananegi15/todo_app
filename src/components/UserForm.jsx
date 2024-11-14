
import React, { useState } from 'react';

const UserForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({ name: '', email: '', task: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = `${name} is required`;
     } else if (name === 'email' && (!value.includes('@') || !value.includes('.'))) {
      error = 'Invalid email format';
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = !Object.values(errors).some(error => error) && 
                    Object.values(formData).every(value => value);
    if (isValid) {
      addTodo(formData);
      setFormData({ name: '', email: '', task: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Add Task</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}
      <input type="text" name="task" placeholder="Task" value={formData.task} onChange={handleChange} />
      {errors.task && <p className="error">{errors.task}</p>}
      <button type="submit" disabled={Object.values(errors).some(error => error)}>Add Todo</button>
    </form>
  );
};

export default UserForm;

