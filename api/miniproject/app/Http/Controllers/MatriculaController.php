<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Curso;
use App\Models\Matricula;


class MatriculaController extends Controller
{

    public function index()
    {
        $matriculas = Matricula::with('alumno', 'curso')->get();
        return response()->json($matriculas);
    }
    public function matricularAlumno(Alumno $alumno_nombre, Curso $curso_nombre)
    {
        $alumno = Alumno::where('nombre', $alumno_nombre)->first();
        $curso = Curso::where('nombre', $curso_nombre)->first();

        if (!$alumno || !$curso) {
            return response()->json(['message' => 'Alumno o curso no encontrado'], 404);
        }
        $matricula = new Matricula([
            'alumno_id' => $alumno->id,
            'curso_id' => $curso->id,
            'fecha_matricula' => now(),
        ]);
        $matricula->save();
        return response()->json($matricula, 201);
    }
}
