<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['name', 'slug', 'parent_id', 'order', 'icon'])]
class Menu extends Model
{
    use HasFactory;

    // relasi menu dengan parent menu  - menu bisa memiliki 1 parent menu
    public function parent() : BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    // relasi menu dengan child menu - menu bisa memiliki lebih dari 1 child menu
    public function children() : HasMany
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    // relasi menu dengan permission - menu bisa memiliki lebih dari 1 permission
    public function permissions() : HasMany
    {
        return $this->hasMany(Permission::class, 'menu_id');
    }
}
