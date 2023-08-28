<?php

namespace App\Models;

use App\Models\Matricula;
use App\Models\Asistencia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;

    protected $fillable = ["nombre", "apellido", "correo"];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];


    public function matriculas()
    {
        return $this->hasMany(Matricula::class);
    }

    public function asistencias()
    {
        return $this->hasMany(Asistencia::class);
    }
}
