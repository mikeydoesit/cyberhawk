<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// WindTurbineItems Model is defined here and 
// the database connection is made with the credentials in .env 
class WindTurbineItems extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'item'
    ];
}
