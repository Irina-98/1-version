<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePpermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppermissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description_ru');
            $table->string('description_en');
            $table->bigInteger('prole_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('prole_id')
                ->references('id')
                ->on('proles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ppermissions', function (Blueprint $table) {
            $table->dropForeign('ppermissions_prole_id_foreign');
        });
        Schema::dropIfExists('ppermissions');
    }
}
