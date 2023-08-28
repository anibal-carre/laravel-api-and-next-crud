"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Edit = () => {
  const router = useRouter();
  const id = router.query.id;

  const [alumno, setAlumno] = useState({});
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    if (id) {
      // Verifica si id está definido
      async function fetchAlumno() {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/alumnos/${id}`
          );
          setAlumno(response.data);
          setNombre(response.data.nombre);
          setApellido(response.data.apellido);
          setCorreo(response.data.correo);
        } catch (error) {
          console.error("Error fetching alumno:", error);
        }
      }

      fetchAlumno();
    }
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/alumnos/${id}`,
        {
          nombre,
          apellido,
          correo,
        }
      );

      console.log("Alumno actualizado:", response.data);
      // Realizar alguna acción de redireccionamiento o actualización de la lista
    } catch (error) {
      console.error("Error actualizando alumno:", error);
    }
  }

  return (
    <div>
      <h1>Actualizar Alumno</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default Edit;
