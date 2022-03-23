<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <v-tabs 
                v-model="tab" fixed-tabs
                background-color="indigo"
                dark
            >
                <v-tab href="#tab-1">{{$t('profile')}}</v-tab>
                <v-tab href="#tab-1-1">{{$t('additional')}}</v-tab>
                <v-tab href="#tab-2">{{$t('portals')}}</v-tab>
                <v-tab href="#tab-3">{{$t('roles')}}</v-tab>
                <v-tab href="#tab-4">{{$t('permissions')}}</v-tab>
            </v-tabs>
            <form @submit.prevent="update">
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1">
                    <br />
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('image')}}</label>
                                    <div v-if="user.image && user.image.middle">
                                        <img :src="user.image.middle" />
                                        <br />
                                        <button type="button" @click="deleteImage()" class="btn btn-danger my_btn_fonts">{{$t('delete')}}</button>
                                    </div>
                                    <div v-else>
                                        <input type="file" class="form-control" v-on:change="onFileChange" accept="image/*;capture=camera">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('role')}}</label>
                                    <select multiple class="form-control" v-model="user.role">
                                        <option disabled value="">{{$t('choose_items')}}</option>
                                        <option value="admin">{{$t('admin')}}</option>
                                        <option value="employee">{{$t('employee')}}</option>
                                        <option value="parent">{{$t('parent')}}</option>
                                        <option value="student">{{$t('student')}}</option>
                                        <option value="enrollee">{{$t('enrollee')}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('login')}} / {{$t('email')}}</label>
                                    <input type="text" class="form-control" v-model="user.email">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('password')}}</label>
                                    <input type="text" class="form-control" v-model="user.password">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('last_name')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="user.lastname_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('first_name')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="user.firstname_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('middle_name')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="user.middlename_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('last_name')}}. {{$t('en')}}</label>
                                    <input type="text" class="form-control" v-model="user.lastname_en">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('first_name')}}. {{$t('en')}}</label>
                                    <input type="text" class="form-control" v-model="user.firstname_en">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('middle_name')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="user.middlename_en">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('gender')}}</label>
                                    <select class="form-control" v-model="user.gender">
                                        <option value="1" selected>{{$t('male')}}</option>
                                        <option value="2">{{$t('female')}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('dob')}}</label>
                                    <v-menu
                                        :close-on-content-click="true"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                :value="computedDateFormatted(user.dob)"
                                                :label="`${$t('dob')}`"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="user.dob"
                                            no-title
                                            scrollable
                                            :first-day-of-week="1"
                                            locale="ru"
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('phone')}}</label>
                                    <input type="text" class="form-control" v-model="user.phone">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('phones_additional')}}</label>
                                    <div id="id_phones">
                                        <template v-for="(item, i) in this.phones">
                                            <div :key="`add-phone-${i}`" class="row">
                                                <div class="col-9">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="item.value" />
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteAdditionalPhone(i)">{{$t('delete')}}</button>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addAdditionalPhone()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('emails_additional')}}</label>
                                    <div id="id_emails">
                                        <template v-for="(item, i) in this.emails">
                                            <div :key="`add-email-${i}`" class="row">
                                                <div class="col-9">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="item.value" />
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteAdditionalEmail(i)">{{$t('delete')}}</button>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addAdditionalEmail()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                </v-tab-item>
            </v-tabs-items>
                <v-tabs-items v-model="tab">
                    <v-tab-item value="tab-1-1">
                        <div class="row" v-if="user.role.indexOf('employee') !== -1">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label><strong>{{$t('employee')}}</strong></label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('working_place')}}</label>
                                    <input type="text" class="form-control" v-model="user.employee_place">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('positions')}}</label>
                                    <template v-for="(item, i) in departments_positions_users">
                                        <div :key="`department-position-user-${i}`" class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <v-select 
                                                        v-model="item.department_id"
                                                        :items="departments"
                                                        :label="`${$t('department')}`"
                                                        :item-text="`${'name_' + $i18n.locale}`"
                                                        item-value="id"
                                                    >
                                                    </v-select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <v-select 
                                                        v-model="item.position_id"
                                                        :items="positions"
                                                        :label="`${$t('position')}`"
                                                        :item-text="`${'name_' + $i18n.locale}`"
                                                        item-value="id"
                                                    >
                                                    </v-select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteAdditionalDepartmentUserPosition(i)">{{$t('delete')}}</button>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addAdditionalDepartmentUserPosition()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('education')}}</label>
                                    <template v-for="(item, i) in this.employee_education">
                                        <div :key="`employee_education-${i}`" class="row">
                                            <div class="col-9">
                                                <div class="form-group">
                                                    <label>{{$t('year')}}</label>
                                                    <input type="text" class="form-control" v-model="item.year" />
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteEmployeeEducation(i)">{{$t('delete')}}</button>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>{{$t('description')}}</label>
                                                    <input type="text" class="form-control" v-model="item.description" />
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addEmployeeEducation()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" v-if="user.role.indexOf('parent') !== -1">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label><strong>{{$t('parent')}}</strong></label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('passport_data')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_passport">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_register')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_address_register">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_living')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_address_living">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_delivery')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_address_postal">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('timezone')}}</label>
                                    <v-select 
                                        v-model="user.parent_timezone"
                                        :items="timezones"
                                        :label="`${$t('timezone')}`"
                                        item-text="name"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('snils')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_snils">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('inn')}}</label>
                                    <input type="text" class="form-control" v-model="user.parent_inn">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('kids')}}</label>
                                    <template v-for="(it, i) in parents_students">
                                        <div :key="`parent_student-${i}`" class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <v-select 
                                                        v-model="it.student_id"
                                                        :items="students"
                                                        :label="`${$t('kid')}`"
                                                        item-value="id"
                                                    >
                                                        <template v-slot:selection="{ item }">
                                                            {{ getUserFio(item) }}
                                                        </template>
                                                        <template v-slot:item="{ item }">
                                                            {{ getUserFio(item) }}
                                                        </template>
                                                    </v-select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <v-select 
                                                        v-model="it.relationship_id"
                                                        :items="relationships"
                                                        :label="`${$t('relationship')}`"
                                                        :item-text="`${'name_' + $i18n.locale}`"
                                                        item-value="id"
                                                    >
                                                    </v-select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteParentStudent(i)">{{$t('delete')}}</button>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addParentStudent()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" v-if="user.role.indexOf('student') !== -1">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label><strong>{{$t('student')}}</strong></label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('zoom_account')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_zoom">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('year_admission')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_year_addmission">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('master_current')}}</label>
                                    <v-select 
                                        v-model="user.student_teacher_id"
                                        :items="teachers"
                                        :label="`${$t('master_current')}`"
                                        item-value="id"
                                    >
                                        <template v-slot:selection="{ item }">
                                            {{ getUserFio(item) }}
                                        </template>
                                        <template v-slot:item="{ item }">
                                            {{ getUserFio(item) }}
                                        </template>
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('education_profile_current')}}</label>
                                    <v-select 
                                        v-model="user.student_profile_id"
                                        :items="profiles"
                                        :label="`${$t('education_profile_current')}`"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('pension_type_current')}}</label>
                                    <v-select 
                                        v-model="user.student_pension_id"
                                        :items="pensions"
                                        :label="`${$t('pension_type_current')}`"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_living_campus_current')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_address_campus">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('housemasters_current')}}</label>
                                    <template v-for="(it, i) in employees_students">
                                        <div :key="`employees-students-${i}`" class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <v-select 
                                                        v-model="it.employee_id"
                                                        :items="teachers"
                                                        :label="$t('housemaster')"
                                                        item-value="id"
                                                    >
                                                        <template v-slot:selection="{ item }">
                                                            {{ getUserFio(item) }}
                                                        </template>
                                                        <template v-slot:item="{ item }">
                                                            {{ getUserFio(item) }}
                                                        </template>
                                                    </v-select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="button" class="btn btn-primary my_btn_fonts" @click="deleteEmployeeStudent(i)">{{$t('delete')}}</button>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <button type="button" class="btn btn-primary my_btn_fonts" @click="addEmployeeStudent()">{{$t('add')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_register')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_address_register">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_living')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_address_living">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_living_additional')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_address_additional">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_pass')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_pass">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_food_order')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_food">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_food_table')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_table">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_locker_academic')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_locker_academic">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_locker_wardrobe')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_locker_wardrobe">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('number_locker_art')}}</label>
                                    <input type="text" class="form-control" v-model="user.student_number_locker_art">
                                </div>
                            </div>
                        </div>

                        <div class="row" v-if="user.role.indexOf('enrollee') !== -1">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label><strong>{{$t('enrollee')}}</strong></label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('crm_lead_id')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_crm_lead_id">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('country')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_country_id"
                                        :items="countries"
                                        :label="$t('country')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                        @change="countryChange"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('country_another')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_country_other">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('region')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_region_id"
                                        :items="regions"
                                        :label="$t('region')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                        @change="regionChange"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('region_another')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_region_other">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('city')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_city_id"
                                        :items="cities"
                                        :label="$t('city')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('city_another')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_city_other">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('school_current')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_school_current">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('class_admission')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_class_addmission">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('address_register')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_address_register">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('vk_link')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_vk">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('education_profile')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_profile_id"
                                        :items="profiles"
                                        :label="$t('education_profile')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('subject_intresting_first')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_lesson_first_id"
                                        :items="lessons"
                                        :label="$t('subject_intresting_first')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('subject_intresting_second')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_lesson_second_id"
                                        :items="lessons"
                                        :label="$t('subject_intresting_second')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('subject_intresting_third')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_lesson_third_id"
                                        :items="lessons"
                                        :label="$t('education_direction_preferable')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('education_direction_preferable')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_direction_id"
                                        :items="directions"
                                        :label="$t('education_direction_preferable')"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('representative')}}: {{$t('fio')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_agent_fio">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('representative')}}: {{$t('roles_to_enrollee')}}</label>
                                    <v-select 
                                        v-model="user.enrollee_agent_relationship_id"
                                        :items="relationships"
                                        :label="`${$t('representative') + ':' + $t('roles_to_enrollee')}`"
                                        :item-text="`${'name_' + $i18n.locale}`"
                                        item-value="id"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('representative')}}: {{$t('phone')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_agent_phone">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('representative')}}: {{$t('email')}}</label>
                                    <input type="text" class="form-control" v-model="user.enrollee_agent_email">
                                </div>
                            </div>
                        </div>
                </v-tab-item>
            </v-tabs-items>

            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-2">
                    <v-list shaped>
                        <v-list-item-group
                            v-model="user.portals"
                            multiple
                        >
                            <template v-for="(item, i) in portals">
                            <v-divider
                                v-if="!item"
                                :key="`divider-${i}`"
                            ></v-divider>

                            <v-list-item
                                v-else
                                :key="`portal-${i}`"
                                :value="item"
                                active-class="deep-purple--text text--accent-4"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <template>{{item['name_' + $i18n.locale]}}</template>
                                        </v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-checkbox
                                            :input-value="active"
                                            color="deep-purple accent-4"
                                            @click="showHelp"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-tab-item>
            </v-tabs-items>
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-3">
                    <v-list shaped>
                        <v-list-item-group
                            v-model="user.proles"
                            multiple
                        >
                            <template v-for="(item, i) in user.portals">
                                {{item['name_' + $i18n.locale]}}
                                <template v-for="(prole, j) in item.proles">
                            <v-list-item
                                :key="`prole-${i}-${j}`"
                                :value="prole"
                                active-class="deep-purple--text text--accent-4"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="prole.name"></v-list-item-title>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-checkbox
                                        :input-value="active"
                                        color="deep-purple accent-4"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                                </template>
                                <v-divider
                                :key="`divider-${i}`"
                            ></v-divider>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-tab-item>
            </v-tabs-items>
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-4">
                    <v-list shaped>
                        <v-list-item-group
                            v-model="user.ppermissions"
                            multiple
                        >
                            <template v-for="(item, i) in user.portals">
                                <div :key="`div-${i}`" >{{item['name_' + $i18n.locale]}}</div>
                                <template v-for="(prole, j) in user.proles">
                                    <template v-if="item.id == prole.portal_id">
                                        <div :key="`div-${i}-${j}`" style="margin-left: 10px;">{{prole.name}}</div>
                                        <template v-for="(ppermission, k) in prole.ppermissions">
                                        <v-list-item
                                            :key="`ppermission-${i}-${j}-${k}`"
                                            :value="ppermission"
                                            active-class="deep-purple--text text--accent-4"
                                        >
                                            <template v-slot:default="{ active }">
                                                <v-list-item-content>
                                                    <v-list-item-title v-text="ppermission.name"></v-list-item-title>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-checkbox
                                                        :input-value="active"
                                                        color="deep-purple accent-4"
                                                    ></v-checkbox>
                                                </v-list-item-action>
                                            </template>
                                        </v-list-item>
                                        </template>
                                        <!--v-divider
                                            :key="`divider-${i}-${j}`"
                                        ></v-divider-->
                                    </template>
                                </template>
                                <v-divider
                                :key="`divider-${i}`"
                            ></v-divider>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-tab-item>
            </v-tabs-items>
            </form>
            <div class="row">
                <div class="col-12">
                    <button type="button" class="btn btn-primary my_btn_fonts" @click="update()">{{$t('update')}}</button>
                </div>
            </div>
        </div>
        <ConfirmDlg ref="confirm" />
        <InformationDlg ref="information" />
        <ErrorDlg ref="error" />
    </v-app>
</template>
   
<script>
    import useful from '@/js/helpers/useful.js';
    import moment from 'moment';
    import Menu from '../Menu';

    export default {
        components: { 
            Menu,
            ConfirmDlg: () => import("../../Helper/ConfirmDlg"),
            InformationDlg: () => import("../../Helper/InformationDlg"),
            ErrorDlg: () => import("../../Helper/ErrorDlg"),
        },
        mounted() {
            this.timezones = useful.getTimezones();
            axios.post('/api/admin/portal/list_all').then(function(response){
                this.portals = response.data;
            }.bind(this));
            axios.post('/api/admin/education/list_all').then(function(response){
                this.educations = response.data;
            }.bind(this));
            axios.post('/api/admin/profile/list_all').then(function(response){
                this.profiles = response.data;
            }.bind(this));
            axios.post('/api/admin/pension/list_all').then(function(response){
                this.pensions = response.data;
            }.bind(this));
            axios.post('/api/admin/lesson/list_all').then(function(response){
                this.lessons = response.data;
            }.bind(this));
            axios.post('/api/admin/relationship/list_all').then(function(response){
                this.relationships = response.data;
            }.bind(this));
            axios.post('/api/admin/direction/list_all').then(function(response){
                this.directions = response.data;
            }.bind(this));
            axios.post('/api/admin/country/list_all').then(function(response){
                this.countries = response.data;
            }.bind(this));
            axios.post('/api/admin/department/list_all').then(function(response){
                this.departments = response.data;
            }.bind(this));
            axios.post('/api/admin/position/list_all').then(function(response){
                this.positions = response.data;
            }.bind(this));
            axios.post('/api/admin/user/list_by_role_simple/student').then(function(response){
                this.students = response.data;
            }.bind(this));
            axios.post('/api/admin/user/list_by_role_simple/employee').then(function(response){
                this.teachers = response.data;
            }.bind(this));
            axios.post(`/api/admin/user/get/${this.$route.params.id}`).then(function(response) {
                let portals = JSON.parse(JSON.stringify(response.data.portals));
                let proles = JSON.parse(JSON.stringify(response.data.proles));
                let ppermissions = JSON.parse(JSON.stringify(response.data.ppermissions));
                this.user = response.data;
                this.user.role = [];
                this.user.portals = [];
                this.user.proles = [];
                this.user.ppermissions = [];
                for(let j in this.portals) {
                    for(let i in portals) {
                        if (portals[i].id == this.portals[j].id) {
                            this.user.portals.push(this.portals[j]);
                        }
                    }
                }
                for(let i in this.portals) {
                    for(let j in this.portals[i].proles) {
                        for(let k in proles) {
                            if (this.portals[i].proles[j].id == proles[k].id) {
                                this.user.proles.push(this.portals[i].proles[j]);
                            }
                        }
                    }
                }
                for(let i in this.portals) {
                    for(let j in this.portals[i].proles) {
                        for(let k in this.portals[i].proles[j].ppermissions) {
                            for(let l in ppermissions) {
                                if (this.portals[i].proles[j].ppermissions[k].id == ppermissions[l].id) {
                                    this.user.ppermissions.push(this.portals[i].proles[j].ppermissions[k]);
                                }
                            }
                        }
                    }
                }
                for(let i in response.data.roles) {
                    this.user.role.push(response.data.roles[i].name);
                }
                if (response.data.phones != null) {
                    this.phones = response.data.phones;
                } else {
                    this.phones = [];
                }
                if (response.data.emails != null) {
                    this.emails = response.data.emails;
                } else {
                    this.emails = [];
                }
                if (response.data.employee_education != null) {
                    this.employee_education = response.data.employee_education;
                } else {
                    this.employee_education = [];
                }

                if (response.data.departments_positions_users != null) {
                    this.departments_positions_users = response.data.departments_positions_users;
                } else {
                    this.departments_positions_users = [];
                }

                if (response.data.parents_students != null) {
                    this.parents_students = response.data.parents_students;
                } else {
                    this.parents_students = [];
                }

                if (response.data.employees_students != null) {
                    this.employees_students = response.data.employees_students;
                } else {
                    this.employees_students = [];
                }
                this.countryChange();
                this.regionChange();

            }.bind(this));
        },
        data(){
            return {
                tab: '', 
                menu: false,
                user: {
                    email:"",
                    password: "",
                    portals: [],
                    proles: [],
                    ppermissions: [],
                    role: [],
                    image: null,
                },
                portals: [],
                vportals: [],
                phones: [],
                emails: [],
                educations: [],
                timezones: [],
                profiles: [],
                pensions: [],
                directions: [],
                lessons: [],
                relationships: [],
                countries: [],
                regions: [],
                cities: [],
                departments: [],
                positions: [],
                departments_positions_users: [],
                employee_education: [],
                students: [],
                teachers: [],
                parents_students: [],
                employees_students: [],
            }
        },
        methods:{
            async update() {
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('confirm_record_update'),
                        'update'
                    )
                ) {
                    const config = {
                        headers: { 'content-type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) }
                    }
                    let fd = new FormData();
                    let hs = {portals: [], proles: [], ppermissions: []};//hportals = [], hproles = [], hppermissions = [];
                    for ( var key in this.user ) {
                        if ((key != 'portals') && (key != 'proles') && (key != 'ppermissions')) {
                            if (this.user[key] != null) {
                                fd.append(key, this.user[key]);
                            }
                        } else {
                            for(let j in this.user[key]) {
                                hs[key].push(this.user[key][j].id);
                            }
                        }
                    }
                    for ( var key in hs ) {
                        fd.append(key, JSON.stringify(hs[key]));
                    }

                    fd.delete("phones");
                    fd.append("phones", JSON.stringify(this.phones));
                    fd.delete("emails");
                    fd.append("emails", JSON.stringify(this.emails));
                    fd.delete("departments_positions_users");
                    fd.append("departments_positions_users", JSON.stringify(this.departments_positions_users));
                    fd.delete("employee_education");
                    fd.append("employee_education", JSON.stringify(this.employee_education));
                    fd.delete("employees_students");
                    fd.append("employees_students", JSON.stringify(this.employees_students));
                    fd.delete("parents_students");
                    fd.append("parents_students", JSON.stringify(this.parents_students));

                    //fd.append("avatar", this.avatar);
                    axios.post(`/api/admin/user/update/${this.$route.params.id}`, fd, config).then(function(response){
                        this.$router.push({name:"AdminUserList"})
                    }.bind(this));
                }
            },
            onFileChange(e){
                this.user.image = e.target.files[0];
            },
            computedDateFormatted(d) {
                moment.locale('ru');
                if (d == null) {return "";}
                return moment(d).format('DD.MM.YYYY');
            },
            addAdditionalPhone() {
                this.phones.push({value: ""});
            },
            deleteAdditionalPhone(i) {
                this.phones.splice(i, 1);
            },
            addAdditionalEmail() {
                this.emails.push({value: ""});
            },
            deleteAdditionalEmail(i) {
                this.emails.splice(i, 1);
            },
            addAdditionalDepartmentUserPosition() {
                this.departments_positions_users.push({department_id: null, position_id: null});
            },
            deleteAdditionalDepartmentUserPosition(i) {
                this.departments_positions_users.splice(i, 1);
            },
            addEmployeeEducation() {
                this.employee_education.push({year: "", description: ""});
            },
            deleteEmployeeEducation(i) {
                this.employee_education.splice(i, 1);
            },
            addParentStudent() {
                this.parents_students.push({student_id: null, relationship_id: null});
            },
            deleteParentStudent(i) {
                this.parents_students.splice(i, 1);
            },
            addEmployeeStudent() {
                this.employees_students.push({employee_id: null, type_id: 1});
            },
            deleteEmployeeStudent(i) {
                this.employees_students.splice(i, 1);
            },
            countryChange() {
                this.regions = [];
                this.cities = [];
                if (this.user.enrollee_country_id != null) {
                    axios.post('/api/admin/region/list_all_by_country/' + this.user.enrollee_country_id).then(function(response){
                        this.regions = response.data;
                    }.bind(this));
                }
            },
            regionChange() {
                this.cities = [];
                if (this.user.enrollee_region_id != null) {
                    axios.post('/api/admin/city/list_all_by_region/' + this.user.enrollee_region_id).then(function(response){
                        this.cities = response.data;
                    }.bind(this));
                }
            },
            deleteImage() {
                axios.post(`/api/admin/user/image/delete/${this.$route.params.id}`).then(function(response){
                    this.user.image = null;
                }.bind(this));
            },
            showHelp() {
                console.log(JSON.stringify(this.user.portals));
            },
            getUserFio(item) {
                return item['lastname_' + this.$i18n.locale] + ' ' + 
                item['firstname_' + this.$i18n.locale] + ' ' + item['middlename_' + this.$i18n.locale];
            }
        },
        created: function() {
        }
    }
</script>