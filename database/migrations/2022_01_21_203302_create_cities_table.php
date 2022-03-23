<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name_ru');
            $table->string('name_en');
            $table->bigInteger('region_id')->unsigned();
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('region_id')
                ->references('id')
                ->on('regions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cities', function (Blueprint $table) {
            $table->dropForeign(['region_id']);
        });
        Schema::dropIfExists('cities');
    }
}
