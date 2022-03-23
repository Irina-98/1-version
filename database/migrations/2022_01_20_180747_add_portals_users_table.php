<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPortalsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portals_users', function (Blueprint $table) {
            $table->id('id');
            $table->bigInteger('portal_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('portal_id')
                  ->references('id')
                  ->on('portals')->onDelete('cascade');
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')->onDelete('cascade');
        });

        Schema::create('proles_users', function (Blueprint $table) {
            $table->id('id');
            $table->bigInteger('prole_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('prole_id')
                  ->references('id')
                  ->on('proles')->onDelete('cascade');
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')->onDelete('cascade');
        });

        Schema::create('ppermissions_users', function (Blueprint $table) {
            $table->id('id');
            $table->bigInteger('ppermission_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('ppermission_id')
                  ->references('id')
                  ->on('ppermissions')->onDelete('cascade');
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('portals_users', function (Blueprint $table) {
            $table->dropForeign(['portal_id']);
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('portals_users');

        Schema::table('proles_users', function (Blueprint $table) {
            $table->dropForeign(['prole_id']);
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('proles_users');

        Schema::table('ppermissions_users', function (Blueprint $table) {
            $table->dropForeign(['ppermission_id']);
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('ppermissions_users');
    }
}
