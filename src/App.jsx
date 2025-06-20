import './App.css'
import { useState } from 'react';
import Task from './components/Task.jsx'
import AddTaskForm from './components/AddTaskForm.jsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {id: tasks.length + 1, text, completed: false};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
      ? {...task, completed: true}
      : task
    ))
  }
  
  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm onAdd={addTask}/>
      {tasks.map(task => (
        <Task
          key={task.id} // Debes darle a cada elemento de la matriz key una cadena o un número que
          // lo identifique de forma única entre otros elementos de esa matriz
          // Los elementos JSX directamente dentro de una map()llamada siempre necesitan claves
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />

      ))}
    </>
  );
};

export default App;


// Este es el componente principal de la aplicación donde
// se maneja el estado de las tareas
// y se definen las funciones para agregar, eliminar y marcar tareas
// como completadas



/*
const addTask = (text) => {
  const newTask = {
    id: tasks.length + 1,
    text,
    completed: false 
  };
  setTasks([...tasks, newTask]);
}

const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId))
}

const taskComplete = (id) => {
  setTasks(
    tasks.map(task =>
      task.id == id ? {...task, completed: !task.completed} : task
    )
  );
};
*/