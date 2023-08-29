"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TfiPencil } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";

const Docente = () => {
  const [docentes, setDocentes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchDocentes() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/docentes");
        setDocentes(response.data);
      } catch (error) {
        console.error("Error fetching alumnos:", error);
      }
    }

    fetchDocentes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/docentes/${id}`);
      setDocentes((prevDocentes) =>
        prevDocentes.filter((docente) => docente.id !== id)
      );
    } catch (error) {
      console.error("Error deleting alumno:", error);
    }
  };

  let contador = 1;
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[90%] h-[600px] flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-2xl text-zinc-600 mt-6">
          Lista de Docentes
        </h1>
        <button
          onClick={() => {
            router.push("/docente/create");
          }}
          className="text-sm text-white self-end bg-blue-950 px-4 py-2 rounded-md"
        >
          Crear Nuevo Docente
        </button>

        <div className="w-full overflow-y-auto max-h-[480px]">
          <table className="min-w-full table-auto ">
            <thead className="bg-blue-950 text-gray-200 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Docente</th>
                <th className="py-3 px-6 text-left">Correo</th>
                <th className="py-3 px-6 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light ">
              {docentes.map((docente) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100"
                  key={docente.id}
                >
                  <td className="py-3 px-6 text-left">{contador++}</td>
                  <td className="py-3 px-6 text-left">{docente.nombre}</td>
                  <td className="py-3 px-6 text-left">{docente.correo}</td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center gap-3">
                      <TfiPencil
                        className="text-blue-500 text-base cursor-pointer"
                        onClick={() => router.push(`/docente/${docente.id}`)}
                      />
                      <MdDelete
                        className="text-red-600 text-base cursor-pointer"
                        onClick={() => handleDelete(docente.id)}
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

export default Docente;
