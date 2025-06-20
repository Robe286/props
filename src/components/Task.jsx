function Task ({task, onDelete, onToggle}) {

  const handleClick = () => {
    onToggle(task.id)
  }

  return (
    <>
      <li className="list">
        <p
          style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
          onClick={handleClick}
        >
          {task.id} {task.text}
        </p>
        <button onClick={() => onDelete(task.id)}>Elminiar</button>
      </li>
    </>
  )
}

export default Task;














// Este componente muestra una tarea individual
// y maneja los eventos de clic en la tarea.

//Aquí tendremos cada una de las tareas con las funcionalidades
// de borrar y marcar como completada.