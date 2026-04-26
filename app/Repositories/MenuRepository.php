<?php

namespace App\Repositories;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\Contracts\MenuRepositoryInterface;

class MenuRepository implements MenuRepositoryInterface
{
    // method - ambil semua data menu
    public function getAll(): Collection
    {
        return Menu::all();
    }

    // method - ambil data menu berdasarkan id
    public function findById(int $id): Menu
    {
        return Menu::findOrFail($id);
    }

    // method - buat data menu baru
    public function create(array $data): Menu
    {
        return Menu::create($data);
    }

    // method - update data menu yang sudah ada
    public function update(Menu $menu, array $data): Menu
    {
        $menu->update($data);
        return $menu;
    }

    // method - hapus data menu
    public function delete(Menu $menu): void
    {
        $menu->delete();
    }
}