"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Asistencia = () => {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    async function fetchAsistencias() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/asistencia/asistencias"
        );
        setAsistencias(response.data);
      } catch (error) {
        console.error("Error fetching asistencia:", error);
      }
    }

    fetchAsistencias();
  }, []);

  let contador = 1;
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-[90%] h-[600px] flex flex-col justify-center items-center gap-8 ">
        <h1 className="font-bold text-2xl text-zinc-600 mt-6">Asistencias</h1>

        <div className="w-full overflow-y-auto max-h-[480px]">
          <table className="min-w-full ">
            <thead className="bg-blue-950 text-gray-200 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Alumno</th>
                <th className="py-3 px-6 text-left">Tipo</th>
                <th className="py-3 px-6 text-left">Curso</th>
                <th className="py-3 px-6 text-left">Fecha</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light scrollable-container  ">
              {asistencias.map((asistencia) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100 "
                  key={asistencia.id}
                >
                  <td className="py-3 px-6 text-left">{contador++}</td>
                  <td className="py-3 px-6 text-left">
                    {asistencia.alumno.nombre}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {asistencia.tipo_asistencia}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {asistencia.curso.nombre}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {asistencia.fecha_asistencia}
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

export default Asistencia;
