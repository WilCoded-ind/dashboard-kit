<?php

namespace App\Repositories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\Contracts\RoleRepositoryInterface;

class RoleRepository implements RoleRepositoryInterface
{
    // method - ambil semua data role
    public function getAll(): Collection
    {
        return Role::all();
    }

    // method - ambil data role berdasarkan id
    public function findById(int $id): Role
    {
        return Role::findOrFail($id);
    }

    // method - buat data role baru
    public function create(array $data): Role
    {
        return Role::create($data);
    }

    // method - update data role yang sudah ada
    public function update(Role $role, array $data): Role
    {
        $role->update($data);
        return $role;
    }

    // method - hapus data role
    public function delete(Role $role): void
    {
        $role->delete();
    }
}