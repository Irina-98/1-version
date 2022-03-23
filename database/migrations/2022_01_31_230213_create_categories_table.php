<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name_ru');
            $table->string('name_en');
            $table->string('description_ru');
            $table->string('description_en');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('portals', function (Blueprint $table) {
            $table->bigInteger('category_id')->unsigned()->nullable()->default(null);
            $table->foreign('category_id')
                ->references('id')
                ->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('portals', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropColumn('category_id');
        });
        Schema::dropIfExists('categories');
    }
}
