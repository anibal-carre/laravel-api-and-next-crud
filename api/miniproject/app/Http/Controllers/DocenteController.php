<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocenteRequest;
use App\Models\Docente;
use Illuminate\Http\JsonResponse;

class DocenteController extends Controller
{
    public function index(): JsonResponse
    {
        $docentes = Docente::all();
        return response()->json($docentes);
    }

    public function store(DocenteRequest $request): JsonResponse
    {
        $docente = new Docente([
            'nombre' => $request->input('nombre'),
            'correo' => $request->input('correo'),
            // Otros campos
        ]);
        $docente->save();
        return response()->json($docente, 201);
    }

    public function show($id): JsonResponse
    {
        $docente = Docente::findOrFail($id);
        return response()->json($docente);
    }

    public function update(DocenteRequest $request, $id): JsonResponse
    {
        $docente = Docente::findOrFail($id);
        $docente->update($request->all());
        return response()->json($docente);
    }

    public function destroy($id): JsonResponse
    {
        $docente = Docente::findOrFail($id);
        $docente->delete();
        return response()->json(null, 204);
    }
}
