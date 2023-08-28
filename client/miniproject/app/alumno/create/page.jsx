"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/alumnos", {
        nombre,
        apellido,
        correo,
      });

      console.log("Alumno creado:", response.data);
      router.push("/alumno");
    } catch (error) {
      console.error("Error creando alumno:", error);
    }
  }
  return (
    <div>
      {" "}
      <h1>Crear Alumno</h1>
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
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Create;
