<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeFieldsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['employee_education_id']);
            $table->dropColumn('employee_education_id');

            $table->json('employee_education')->nullable();
            $table->bigInteger('student_teacher_id')->unsigned()->nullable();
            $table->foreign('student_teacher_id')
                ->references('id')
                ->on('users')->onDelete('cascade');

            $table->string('enrollee_crm_lead_id')->nullable();
            $table->string('enrollee_country_other')->nullable();
            $table->string('enrollee_region_other')->nullable();
            $table->string('enrollee_city_other')->nullable();
        });

        Schema::create('parents_students', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('parent_id')->unsigned();
            $table->foreign('parent_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->bigInteger('student_id')->unsigned();
            $table->foreign('student_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->bigInteger('relationship_id')->unsigned();
            $table->foreign('relationship_id')
                ->references('id')
                ->on('relationships')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('employees_students', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('employee_id')->unsigned();
            $table->foreign('employee_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->bigInteger('student_id')->unsigned();
            $table->foreign('student_id')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->integer('type_id')->default(1);
            $table->softDeletes();
            $table->timestamps();
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
            $table->bigInteger('employee_education_id')->unsigned()->nullable();
            $table->foreign('employee_education_id')
                ->references('id')
                ->on('education')->onDelete('cascade');

            $table->dropColumn('employee_education');
            $table->dropForeign(['student_teacher_id']);
            $table->dropColumn('student_teacher_id');
            $table->dropColumn('enrollee_crm_lead_id');
            $table->dropColumn('enrollee_country_other');
            $table->dropColumn('enrollee_region_other');
            $table->dropColumn('enrollee_city_other');
        });

        Schema::table('parents_students', function (Blueprint $table) {
            $table->dropForeign(['parent_id']);
            $table->dropForeign(['student_id']);
            $table->dropForeign(['relationship_id']);
        });
        Schema::dropIfExists('parents_students');

        Schema::table('employees_students', function (Blueprint $table) {
            $table->dropForeign(['employee_id']);
            $table->dropForeign(['student_id']);
        });
        Schema::dropIfExists('employees_students');
    }
}
