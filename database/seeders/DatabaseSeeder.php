<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\District;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Ward;
use Http;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => '123456',
            'phone' => '0935684690',
        ]);

        $adminRole = Role::create(['name' => 'admin']);
        $user->assignRole($adminRole);


        $cities = Http::get('https://provinces.open-api.vn/api/?depth=3')->json();

        foreach ($cities as $city) {
            $user = User::create([
                'first_name' => 'Delivery',
                'last_name' => $city['code'],
                'email' => 'delivery' . $city['code'] . '@gmail.com',
                'password' => '123456',
                'phone' => $city['phone_code']
            ]);

            $adminRole = Role::create(['name' => 'delivery,' . $city['name']]);
            $user->assignRole($adminRole);

            City::create([
                "id" => $city['code'],
                "name" => $city['name'],
                "code_name" => $city['codename'],
                "division_type" => $city['division_type'],
                "phone_code" => $city['phone_code']
            ]);

            $districts = $city['districts'];
            foreach ($districts as $district) {
                District::create([
                    "id" => $district['code'],
                    "name" => $district['name'],
                    "code_name" => $district['codename'],
                    "division_type" => $district['division_type'],
                    "city_id" => $city['code']
                ]);

                $wards = $district['wards'];
                foreach ($wards as $ward) {
                    Ward::create([
                        "id" => $ward['code'],
                        "name" => $ward['name'],
                        "code_name" => $ward['codename'],
                        "division_type" => $ward['division_type'],
                        "district_id" => $district['code'],
                    ]);
                }
            }
        }
    }
}
