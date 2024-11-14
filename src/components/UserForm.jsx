import React, { useState } from "react";

const UserForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    taskName: "",
    taskDescription: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" }); // Clear error if corrected
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.taskName.trim())
      newErrors.taskName = "Task Name is required.";
    if (!formData.taskDescription.trim())
      newErrors.taskDescription = "Task Description is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      addTodo(formData); // Only add the task if validation passes
      setFormData({ name: "", email: "", taskName: "", taskDescription: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2 className="font-bold">Add Task</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={formData.taskName}
        onChange={handleChange}
      />
      {errors.taskName && <p className="error">{errors.taskName}</p>}

      <textarea
        name="taskDescription"
        placeholder="Task Description"
        value={formData.taskDescription}
        onChange={handleChange}
      />
      {errors.taskDescription && (
        <p className="error">{errors.taskDescription}</p>
      )}

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default UserForm;
