"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const EditPageCurso = ({ params }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const router = useRouter();

  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cursos/${id}`)
      .then((response) => {
        const data = response.data;
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleCursoChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/cursos/${id}`,
        {
          nombre,
          descripcion,
        }
      );

      if (response.status === 200) {
        router.push("/curso");
      } else {
        console.error("Error al actualizar los datos del curso");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <button className="self-start ml-5 mt-4">
        <BiArrowBack
          onClick={() => {
            router.push("/curso");
          }}
          className="text-zinc-500 text-lg"
        />
      </button>
      <h1 className="text-2xl text-zinc-600 font-bold mt-10 mb-10">
        Editar Curso
      </h1>
      <form
        className="w-[500px] h-[500px] flex flex-col items-center border p-10 shadow-sm shadow-black"
        onSubmit={handleSubmit}
      >
        <div className="w-[90%] h-auto flex flex-col gap-2 mb-6">
          <label className="font-semibold text-zinc-600" htmlFor="nombre">
            Nombre del Curso
          </label>
          <input
            className="w-full border h-12 rounded-sm p-2"
            type="text"
            id="curso"
            value={nombre}
            onChange={handleCursoChange}
          />
        </div>
        <div className="w-[90%] h-auto flex flex-col gap-2 mb-6">
          <label className="font-semibold text-zinc-600" htmlFor="apellido">
            Descripción
          </label>
          <input
            className="w-full border h-12 rounded-sm p-2"
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
        </div>

        <button
          className="bg-blue-950 text-white font-semibold px-4 py-2 rounded-md self-end mt-10"
          type="submit"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditPageCurso;
