<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['role_id', 'menu_id', 'can_create', 'can_view', 'can_update', 'can_delete'])]
class Permission extends Model
{
    use HasFactory;

    // permission tidak menggunakan timestamps
    public $timestamps = false;

    // relasi permission dengan role - permission dimiliki oleh 1 role
    public function role() : BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    // relasi permission dengan menu - permission dimiliki oleh 1 menu
    public function menu() : BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }
}
