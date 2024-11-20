import React from "react";

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "5px" }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <button onClick={() => onEdit(task)} style={{ marginRight: "10px" }}>Edit</button>
      <button onClick={() => onDelete(task.id)} style={{ backgroundColor: "red", color: "white" }}>Delete</button>
    </div>
  );
};

export default Task;
