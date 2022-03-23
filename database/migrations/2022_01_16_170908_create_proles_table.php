<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description_ru');
            $table->string('description_en');
            $table->bigInteger('portal_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('portal_id')
                ->references('id')
                ->on('portals')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proles', function (Blueprint $table) {
            $table->dropForeign('proles_portal_id_foreign');
        });
        Schema::dropIfExists('proles');
    }
}
