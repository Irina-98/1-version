<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name_ru');
            $table->string('name_en');
            $table->string('description_ru');
            $table->string('description_en');
            $table->string('phone');
            $table->string('email');
            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('parent_id')
                ->references('id')
                ->on('departments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('departments', function (Blueprint $table) {
            $table->dropForeign(['parent_id']);
        });
        Schema::dropIfExists('departments');
    }
}
