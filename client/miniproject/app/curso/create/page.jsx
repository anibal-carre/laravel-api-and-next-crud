"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const CreateCurso = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/cursos", {
        nombre,
        descripcion,
      });

      console.log("Curso creado:", response.data);
      router.push("/curso");
    } catch (error) {
      console.error("Error creando curso:", error);
    }
  }
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
        Crear Curso
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] h-[500px] flex flex-col items-center border p-10 shadow-sm shadow-black"
      >
        <div className="w-[90%] h-auto flex flex-col gap-2 mb-6">
          <label className="font-semibold text-zinc-600" htmlFor="nombre">
            Nombre del curso
          </label>
          <input
            className="w-full border h-12 rounded-sm p-2"
            type="text"
            placeholder="Ingrese el nombre del curso"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="w-[90%] h-auto flex flex-col gap-2 mb-6">
          <label className="font-semibold text-zinc-600" htmlFor="apellido">
            Descripción
          </label>
          <input
            className="w-full border h-12 rounded-sm p-2"
            type="text"
            placeholder="Ingrese la descripción del curso"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-950 text-white font-semibold px-4 py-2 rounded-md self-end mt-10"
          type="submit"
        >
          Crear curso
        </button>
      </form>
    </div>
  );
};

export default CreateCurso;
