<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('notification_roles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('notification_id')->unsigned();
            $table->foreign('notification_id')
                ->references('id')
                ->on('notifications')->onDelete('cascade');
            $table->bigInteger('role_id')->unsigned();
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
        Schema::table('notification_roles', function (Blueprint $table) {
            $table->dropForeign(['notification_id']);
            $table->dropForeign(['role_id']);
        });
        Schema::dropIfExists('notification_roles');
        Schema::dropIfExists('notifications');
    }
}
