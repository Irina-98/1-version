<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_first')->default(true);
            $table->string('token')->default("");
            $table->timestamp('token_date')->nullable();
            $table->boolean('is_forgot_password')->default(false);
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
            $table->dropColumn('is_first');
            $table->dropColumn('token');
            $table->dropColumn('token_date');
            $table->dropColumn('is_forgot_password');
        });
    }
}
