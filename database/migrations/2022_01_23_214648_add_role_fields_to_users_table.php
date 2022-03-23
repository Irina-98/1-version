<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRoleFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('employee_place')->nullable();
            $table->bigInteger('employee_education_id')->unsigned()->nullable();
            $table->foreign('employee_education_id')
                ->references('id')
                ->on('education')->onDelete('cascade');

            $table->string('parent_passport')->nullable();
            $table->string('parent_address_register')->nullable();
            $table->string('parent_address_living')->nullable();
            $table->string('parent_address_postal')->nullable();
            $table->integer('parent_timezone')->nullable();
            $table->string('parent_snils')->nullable();
            $table->string('parent_inn')->nullable();
            
            $table->string('student_zoom')->nullable();
            $table->integer('student_year_addmission')->nullable();
            $table->bigInteger('student_profile_id')->unsigned()->nullable();
            $table->foreign('student_profile_id')
                ->references('id')
                ->on('profiles')->onDelete('cascade');
            $table->bigInteger('student_pension_id')->unsigned()->nullable();
            $table->foreign('student_pension_id')
                ->references('id')
                ->on('pensions')->onDelete('cascade');
            $table->string('student_address_campus')->nullable();
            $table->string('student_address_register')->nullable();
            $table->string('student_address_living')->nullable();
            $table->string('student_address_additional')->nullable();
            $table->string('student_number_pass')->nullable();
            $table->string('student_number_food')->nullable();
            $table->string('student_number_table')->nullable();
            $table->string('student_number_locker_academic')->nullable();
            $table->string('student_number_locker_wardrobe')->nullable();
            $table->string('student_number_locker_art')->nullable();

            $table->bigInteger('enrollee_country_id')->unsigned()->nullable();
            $table->foreign('enrollee_country_id')
                ->references('id')
                ->on('countries')->onDelete('cascade');
            $table->bigInteger('enrollee_region_id')->unsigned()->nullable();
            $table->foreign('enrollee_region_id')
                ->references('id')
                ->on('regions')->onDelete('cascade');
                $table->bigInteger('enrollee_city_id')->unsigned()->nullable();
            $table->foreign('enrollee_city_id')
                ->references('id')
                ->on('cities')->onDelete('cascade');
            $table->string('enrollee_school_current')->nullable();
            $table->integer('enrollee_class_addmission')->nullable();
            $table->string('enrollee_address_register')->nullable();
            $table->string('enrollee_vk')->nullable();
            $table->bigInteger('enrollee_profile_id')->unsigned()->nullable();
            $table->foreign('enrollee_profile_id')
                ->references('id')
                ->on('profiles')->onDelete('cascade');
            $table->bigInteger('enrollee_lesson_first_id')->unsigned()->nullable();
            $table->foreign('enrollee_lesson_first_id')
                ->references('id')
                ->on('lessons')->onDelete('cascade');
            $table->bigInteger('enrollee_lesson_second_id')->unsigned()->nullable();
            $table->foreign('enrollee_lesson_second_id')
                ->references('id')
                ->on('lessons')->onDelete('cascade');
            $table->bigInteger('enrollee_lesson_third_id')->unsigned()->nullable();
            $table->foreign('enrollee_lesson_third_id')
                ->references('id')
                ->on('lessons')->onDelete('cascade');
            $table->bigInteger('enrollee_direction_id')->unsigned()->nullable();
            $table->foreign('enrollee_direction_id')
                ->references('id')
                ->on('directions')->onDelete('cascade');
            $table->string('enrollee_agent_fio')->nullable();
            $table->bigInteger('enrollee_agent_relationship_id')->unsigned()->nullable();
            $table->foreign('enrollee_agent_relationship_id')
                ->references('id')
                ->on('relationships')->onDelete('cascade');
            $table->string('enrollee_agent_phone')->nullable();
            $table->string('enrollee_agent_email')->nullable();
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
            $table->dropColumn('employee_place');
            $table->dropForeign(['employee_education_id']);
            $table->dropColumn('employee_education_id');

            $table->dropColumn('parent_passport');
            $table->dropColumn('parent_address_register');
            $table->dropColumn('parent_address_living');
            $table->dropColumn('parent_address_postal');
            $table->dropColumn('parent_timezone');
            $table->dropColumn('parent_snils');
            $table->dropColumn('parent_inn');
            
            $table->dropColumn('student_zoom');
            $table->dropColumn('student_year_addmission');
            $table->dropForeign(['student_profile_id']);
            $table->dropColumn('student_profile_id');
            $table->dropForeign(['student_pension_id']);
            $table->dropColumn('student_pension_id');
            $table->dropColumn('student_address_campus');
            $table->dropColumn('student_address_register');
            $table->dropColumn('student_address_living');
            $table->dropColumn('student_address_additional');
            $table->dropColumn('student_number_pass');
            $table->dropColumn('student_number_food');
            $table->dropColumn('student_number_table');
            $table->dropColumn('student_number_locker_academic');
            $table->dropColumn('student_number_locker_wardrobe');
            $table->dropColumn('student_number_locker_art');

            $table->dropForeign(['enrollee_country_id']);
            $table->dropColumn('enrollee_country_id');
            $table->dropForeign(['enrollee_region_id']);
            $table->dropColumn('enrollee_region_id');
            $table->dropForeign(['enrollee_city_id']);
            $table->dropColumn('enrollee_city_id');
            $table->dropColumn('enrollee_school_current');
            $table->dropColumn('enrollee_class_addmission');
            $table->dropColumn('enrollee_address_register');
            $table->dropColumn('enrollee_vk');
            $table->dropForeign(['enrollee_profile_id']);
            $table->dropColumn('enrollee_profile_id');
            $table->dropForeign(['enrollee_lesson_first_id']);
            $table->dropColumn('enrollee_lesson_first_id');
            $table->dropForeign(['enrollee_lesson_second_id']);
            $table->dropColumn('enrollee_lesson_second_id');
            $table->dropForeign(['enrollee_lesson_third_id']);
            $table->dropColumn('enrollee_lesson_third_id');
            $table->dropForeign(['enrollee_direction_id']);
            $table->dropColumn('enrollee_direction_id');
            $table->dropColumn('enrollee_agent_fio');
            $table->dropForeign(['enrollee_agent_relationship_id']);
            $table->dropColumn('enrollee_agent_relationship_id');
            $table->dropColumn('enrollee_agent_phone');
            $table->dropColumn('enrollee_agent_email');
        });
    }
}
