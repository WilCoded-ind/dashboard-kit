<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

#[Fillable(['name', 'initials'])]
class Role extends Model
{
    use HasFactory;

    // relasi role dengan user - role bisa dimiliki banyak user
    public function users()
    {
        return $this->hasMany(User::class, 'role_id');
    }

    // relasi role dengan permission - role bisa memiliki lebih dari 1 permission
    public function permissions()
    {
        return $this->hasMany(Permission::class, 'role_id');
    }
}
