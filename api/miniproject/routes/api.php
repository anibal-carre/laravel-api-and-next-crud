<?php

use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\AsistenciaController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\MatriculaController;
use Illuminate\Support\Facades\Route;


//Todas las rutas para los CRUD Alumno, Docente y Curso
Route::resource('docentes', DocenteController::class);
Route::resource('alumnos', AlumnoController::class);
Route::resource('cursos', CursoController::class);



Route::prefix('matricula')->group(function () {
    Route::get('matriculas', [MatriculaController::class, 'index']);
    Route::post('alumnos/{alumno}/curso/{curso}', [MatriculaController::class, 'matricularAlumno']);
});
/* Para registrar la maticula :
POST http://127.0.0.1:8000/api/matricula/alumnos/{id_alumno}/curso/{id_curso}

Para ver todas las mariculas:
GET http://127.0.0.1:8000/api/matricula/matriculas
*/


Route::prefix('asistencia')->group(function () {
    Route::get('asistencias', [AsistenciaController::class, 'index']);
    Route::post('registrar', [AsistenciaController::class, 'registrarAsistencia']);

    /* Para registrar la asistencia : 
   POST  http://127.0.0.1:8000/api/asistencia/registrar
    
   body:
    {
        "alumno_id": 1,
        "curso_id": 2,
        "fecha_asistencia": "2023-08-01",
        "tipo_asistencia": "A"
}

    Para mostrar todas las asistencias :
    GET http://127.0.0.1:8000/api/asistencia/asistencias
    */
});
