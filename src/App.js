import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React project", description: "Complete the Task Management System", deadline: "2024-11-30" },
    { id: 2, name: "Study Redux", description: "Learn state management using Redux", deadline: "2024-12-05" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    const updatedName = prompt("Edit Task Name", task.name);
    const updatedDescription = prompt("Edit Description", task.description);
    const updatedDeadline = prompt("Edit Deadline", task.deadline);

    if (updatedName && updatedDescription && updatedDeadline) {
      const updatedTask = { ...task, name: updatedName, description: updatedDescription, deadline: updatedDeadline };
      setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
    }
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
