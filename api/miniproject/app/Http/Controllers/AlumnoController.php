<?php

namespace App\Http\Controllers;

use App\Http\Requests\AlumnoRequest;
use App\Models\Alumno;
use Illuminate\Http\JsonResponse;


class AlumnoController extends Controller
{
    public function index(): JsonResponse
    {
        $alumnos = Alumno::all();
        return response()->json($alumnos);
    }

    public function store(AlumnoRequest $request): JsonResponse
    {
        $alumno = new Alumno([
            'nombre' => $request->input('nombre'),
            'apellido' => $request->input('apellido'),
            'correo' => $request->input('correo'),

        ]);
        $alumno->save();
        return response()->json($alumno, 201);
    }


    public function show($id): JsonResponse
    {
        $alumno = Alumno::findOrFail($id);
        return response()->json($alumno);
    }

    public function update(AlumnoRequest $request, $id): JsonResponse
    {
        $alumno = Alumno::findOrFail($id);
        $alumno->update($request->all());
        return response()->json($alumno);
    }


    public function destroy($id): JsonResponse
    {
        $alumno = Alumno::findOrFail($id);
        $alumno->delete();
        return response()->json(null, 204);
    }
}
