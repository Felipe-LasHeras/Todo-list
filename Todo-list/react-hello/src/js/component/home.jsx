import React, { useState } from "react";

const Home = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTareas([...tareas, e.target.value]);
      e.target.value = "";
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">TO DO's</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea"
          onKeyPress={agregarTarea}
        />
      </div>
      {tareas.length > 0 ? (
        <ul className="list-group">
          {tareas.map((tarea, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {tarea}
              <span
                className="badge bg-danger rounded-pill cursor-pointer"
                onClick={() => eliminarTarea(index)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas, añadir tareas</p>
      )}
    </div>
  );
};

export default Home;
