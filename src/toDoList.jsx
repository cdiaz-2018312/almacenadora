import React, { useState } from 'react';
import './toDoList.css';

function ToDoList() {
  const [tarea, setTarea] = useState([]);
  const [agregarTarea, setAgregarTarea] = useState({ name: '', description: '', startDate: '', endDate: '', addedBy: '' });
  const [index, setIndex] = useState(-1);

  const handleChange = e => {
    const { name, value } = e.target;
    setAgregarTarea(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (index === -1) {
      setTarea([...tarea, agregarTarea]);
    } else {
      const newTasks = [...tarea];
      newTasks[index] = agregarTarea;
      setTarea(newTasks);
      setIndex(-1);
    }
    setAgregarTarea({ name: '', description: '', startDate: '', endDate: '', addedBy: '' });
  };

  const handleEdit = (index, task) => {
    setIndex(index);
    setAgregarTarea(task);
  };

  const handleDelete = index => {
    setTarea(tarea.filter((task, i) => i !== index));
  };
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Tarea:
          <input type="text" name="name" value={agregarTarea.name} onChange={handleChange} />
        </label>
        <label>
          Descripcion:
          <input type="text" name="description" value={agregarTarea.description} onChange={handleChange} />
        </label>
        <label>
          inicio:
          <input type="date" name="startDate" value={agregarTarea.startDate} onChange={handleChange} />
        </label>
        <label>
          Fin:
          <input type="date" name="endDate" value={agregarTarea.endDate} onChange={handleChange} />
        </label>
        <label>
          Creada por:
          <input type="text" name="addedBy" value={agregarTarea.addedBy} onChange={handleChange} />
        </label>
        <button type="submit">{index === -1 ? 'Agregar' : 'Guardar'}</button>
      </form>

      <ul>
        {tarea.map((task, index) => (


          <li key={index} className="task-item">
            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" className="btn-check" id={`btncheck${index}`} autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor={`btncheck${index}`}>lista!</label>
            </div>
            <div className="task-details">
              <p className="task-name">Tarea: {task.name}</p>
              <p className="task-description">Descripcion: {task.description}</p>
              <p className="task-startDate">inicio: {task.startDate}</p>
              <p className="task-endDate">Fin: {task.endDate}</p>
              <p className="task-addedBy">Creada por: {task.addedBy}</p>
            </div>
            <div className="task-actions">
              <button onClick={() => handleDelete(index)}>Eliminar</button>
              <button onClick={() => handleEdit(index, task)}>Editar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;