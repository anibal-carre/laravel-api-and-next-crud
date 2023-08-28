"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TfiPencil } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";

const Alumno = () => {
  const [alumnos, setAlumnos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchAlumnos() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/alumnos");
        setAlumnos(response.data);
      } catch (error) {
        console.error("Error fetching alumnos:", error);
      }
    }

    fetchAlumnos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/alumnos/${id}`);
      setAlumnos((prevAlumnos) =>
        prevAlumnos.filter((alumno) => alumno.id !== id)
      );
    } catch (error) {
      console.error("Error deleting alumno:", error);
    }
  };

  let contador = 1;
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[90%] h-[600px] flex flex-col justify-center items-center gap-8 ">
        <h1 className="font-bold text-2xl text-zinc-600 mt-6">
          Lista de Alumnos
        </h1>

        <button
          onClick={() => {
            router.push("/alumno/create");
          }}
          className="text-sm text-white self-end bg-blue-950 px-4 py-2 rounded-md"
        >
          Crear Nuevo Alumno
        </button>

        <div className="w-full overflow-y-auto max-h-[480px]">
          <table className="min-w-full ">
            <thead className="bg-blue-950 text-gray-200 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Alumno</th>
                <th className="py-3 px-6 text-left">Apellido</th>
                <th className="py-3 px-6 text-left">Correo</th>
                <th className="py-3 px-6 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light scrollable-container  ">
              {alumnos.map((alumno) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100 "
                  key={alumno.id}
                >
                  <td className="py-3 px-6 text-left">{contador++}</td>
                  <td className="py-3 px-6 text-left">{alumno.nombre}</td>
                  <td className="py-3 px-6 text-left">{alumno.apellido}</td>
                  <td className="py-3 px-6 text-left">{alumno.correo}</td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center gap-3">
                      <TfiPencil
                        className="text-blue-500 text-base cursor-pointer"
                        onClick={() => router.push(`/alumno/${alumno.id}`)}
                      />
                      <MdDelete
                        onClick={() => handleDelete(alumno.id)}
                        className="text-red-600 text-base cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alumno;
