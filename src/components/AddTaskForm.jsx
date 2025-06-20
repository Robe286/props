import { useState } from "react";


function AddTaskForm ({onAdd}) {
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        onAdd(text)
        setText('')
    }
    // Si el input esta vacio o tiene espacios en blanco, no crea la tarea

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Introduce la tarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default AddTaskForm;