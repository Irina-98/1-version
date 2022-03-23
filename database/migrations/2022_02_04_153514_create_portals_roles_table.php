<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortalsRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portal_roles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('portal_id')->unsigned()->nullable()->default(null);
            $table->foreign('portal_id')
                ->references('id')
                ->on('portals')->onDelete('cascade');
            $table->bigInteger('role_id')->unsigned()->nullable()->default(null);
            $table->foreign('role_id')
                ->references('id')
                ->on('roles')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('prole_roles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('prole_id')->unsigned()->nullable()->default(null);
            $table->foreign('prole_id')
                ->references('id')
                ->on('proles')->onDelete('cascade');
            $table->bigInteger('role_id')->unsigned()->nullable()->default(null);
            $table->foreign('role_id')
                ->references('id')
                ->on('roles')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('ppermission_roles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ppermission_id')->unsigned()->nullable()->default(null);
            $table->foreign('ppermission_id')
                ->references('id')
                ->on('ppermissions')->onDelete('cascade');
            $table->bigInteger('role_id')->unsigned()->nullable()->default(null);
            $table->foreign('role_id')
                ->references('id')
                ->on('roles')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ppermission_roles', function (Blueprint $table) {
            $table->dropForeign(['ppermission_id']);
            $table->dropColumn('ppermission_id');
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
        Schema::dropIfExists('ppermission_roles');

        Schema::table('prole_roles', function (Blueprint $table) {
            $table->dropForeign(['prole_id']);
            $table->dropColumn('prole_id');
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
        Schema::dropIfExists('prole_roles');
        
        Schema::table('portal_roles', function (Blueprint $table) {
            $table->dropForeign(['portal_id']);
            $table->dropColumn('portal_id');
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
        Schema::dropIfExists('portal_roles');
    }
}
