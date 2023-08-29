<?php

namespace App\Http\Controllers;

use App\Http\Requests\AsistenciaRequest;
use App\Models\Alumno;
use App\Models\Asistencia;
use App\Models\Curso;

class AsistenciaController extends Controller
{

    public function index()
    {
        $asistencias = Asistencia::with('alumno', 'curso')->get();
        return response()->json($asistencias);
    }
    public function registrarAsistencia(AsistenciaRequest $request)
    {

        $alumno = Alumno::where('nombre', $request->alumno_nombre)->first();
        $curso = Curso::where('nombre', $request->curso_nombre)->first();

        if ($alumno && $curso) {
        } else {
            return response()->json(['message' => 'Alumno o curso no encontrado'], 404);
        }
        $asistencia = new Asistencia([
            'alumno_id' => $request->input('alumno_id'),
            'curso_id' => $request->input('curso_id'),
            'fecha_asistencia' => now(),
            'tipo_asistencia' => $request->input('tipo_asistencia'),
        ]);
        $asistencia->save();
        return response()->json($asistencia, 201);
    }
}
