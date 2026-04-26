<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'Admin', 'initials' => 'ADM'],
            ['name' => 'HR', 'initials' => 'HR'],
            ['name' => 'Finance', 'initials' => 'FIN'],
            ['name' => 'Marketing', 'initials' => 'MKT'],
            ['name' => 'Staff', 'initials' => 'STF'],
        ];

        foreach ($roles as $role) {
            Role::query()->updateOrCreate(
                ['name' => $role['name']],
                ['initials' => $role['initials']],
            );
        }
    }
}
