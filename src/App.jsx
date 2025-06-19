import './App.css'
import { useState } from 'react';
import Task from './components/Task.jsx'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false 
    };
    setTasks([...tasks, newTask]);
  }
  //console.log(addTask)

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const taskComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id == id ? {...task, completed: !task.completed} : task
      )
    );
  };

  return (
    <>
      <h1>Lista de tareas</h1>
    </>
  );
};

export default App;
