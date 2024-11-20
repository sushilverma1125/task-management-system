import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !deadline) {
      alert("Please fill out all fields!");
      return;
    }

    // Pass the new task to the parent component
    onAddTask({ id: Date.now(), name, description, deadline });

    // Clear the form
    setName("");
    setDescription("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Add New Task</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Task Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Deadline:
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
