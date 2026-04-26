<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roleIds = Role::query()->pluck('id')->all();

        $users = [
            'Budi Santoso',
            'Siti Aminah',
            'Agus Pratama',
            'Dewi Lestari',
            'Eko Saputra',
            'Fitri Handayani',
            'Galih Ramadhan',
            'Hani Maulida',
            'Indra Gunawan',
            'Joko Susilo',
            'Kartika Sari',
            'Lukman Hakim',
            'Maya Putri',
            'Nanda Permata',
            'Oki Setiawan',
            'Putri Maharani',
            'Qori Anisa',
            'Rizky Kurniawan',
            'Teguh Wibowo',
            'Yuni Astuti',
        ];

        foreach ($users as $fullName) {
            $firstName = strtolower(strtok($fullName, ' '));

            User::query()->updateOrCreate(
                ['email' => $firstName . '@gmail.com'],
                [
                    'name' => $fullName,
                    'username' => $firstName,
                    'password' => bcrypt('123456'),
                    'roles_id' => fake()->randomElement($roleIds),
                ],
            );
        }
    }
}
