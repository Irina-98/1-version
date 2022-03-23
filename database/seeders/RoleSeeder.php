<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Role::updateOrCreate(['name' => 'admin'])->givePermissionTo(Permission::all());
        Role::updateOrCreate(['name' => 'employee'])->givePermissionTo(Permission::all());
        Role::updateOrCreate(['name' => 'parent'])->givePermissionTo(Permission::all());
        Role::updateOrCreate(['name' => 'student'])->givePermissionTo(Permission::all());
        Role::updateOrCreate(['name' => 'enrollee'])->givePermissionTo(Permission::all());
    }
}
