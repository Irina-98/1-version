<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFields3 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('notification_type')->default(1); //1 - Не получать; 2 - Получать только в ЕЛК; 3 - Получать по электронной почте и в ЕЛК.
        });

        Schema::table('portals', function (Blueprint $table) {
            $table->boolean('is_bookmark')->default(false);
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
            $table->dropColumn('is_bookmark');
        });
        
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('notification_type');
        });
    }
}
