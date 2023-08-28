<?php

namespace App\Http\Controllers;

use App\Http\Requests\CursoRequest;
use App\Models\Curso;
use Illuminate\Http\JsonResponse;

class CursoController extends Controller
{
    public function index(): JsonResponse
    {
        $cursos = Curso::all();
        return response()->json($cursos);
    }

    public function store(CursoRequest $request): JsonResponse
    {
        $curso = new Curso([
            'nombre' => $request->input('nombre'),
            'descripcion' => $request->input('descripcion'),

        ]);
        $curso->save();
        return response()->json($curso, 201);
    }

    public function show($id): JsonResponse
    {
        $curso = Curso::findOrFail($id);
        return response()->json($curso);
    }

    public function update(CursoRequest $request, $id): JsonResponse
    {
        $curso = Curso::findOrFail($id);
        $curso->update($request->all());
        return response()->json($curso);
    }

    public function destroy($id): JsonResponse
    {
        $curso = Curso::findOrFail($id);
        $curso->delete();
        return response()->json(null, 204);
    }
}
