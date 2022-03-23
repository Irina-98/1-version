<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMainFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('lastname_ru')->nullable();
            $table->string('lastname_en')->nullable();
            $table->string('firstname_ru')->nullable();
            $table->string('firstname_en')->nullable();
            $table->string('middlename_ru')->nullable();
            $table->string('middlename_en')->nullable();
            $table->integer('gender')->nullable();//1 - male, 2 - female
            $table->date('dob')->nullable();
            $table->string('phone')->nullable();
            $table->softDeletes();

            $table->dropColumn('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('lastname_ru');
            $table->dropColumn('lastname_en');
            $table->dropColumn('firstname_ru');
            $table->dropColumn('firstname_en');
            $table->dropColumn('middlename_ru');
            $table->dropColumn('middlename_en');
            $table->dropColumn('gender');
            $table->dropColumn('dob');
            $table->dropColumn('phone');
            $table->dropSoftDeletes();
            $table->string('name')->default('');
        });
    }
}
