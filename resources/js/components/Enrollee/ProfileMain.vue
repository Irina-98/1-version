<template>
    <v-app>
        <MenuTop />
        <v-container>
            <v-row>
                <v-col cols="3">
                    <MenuLeft />
                </v-col>
                <v-col cols="9">
                    <v-row>
                        <v-col class="my_page_title">
                                Мой профиль
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_sub_subtitle">
                                Основная информация
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_simple_text">
                            Все поля обязательны для заполнения.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Фамилия абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">Имя абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">Отчество абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">Дата рождения</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                                append-icon="mdi-calendar-blank"
                            ></v-text-field>
                            </div>
                        </v-col>

                        <v-col cols="6">
                            <center><v-icon style="font-size: 196px; padding-right: 3px;">mdi-account-circle</v-icon></center>
                            <br />
                            <center><v-btn color="#C4C4C4" style="border-radius: 10px;">Загрузить фото</v-btn></center>
                            <br />
                            <center><div class="my_page_photo_desc">Размер файла не более 10 Мб, формат: jpg, png, bmp, gif.</div></center>
                        </v-col>
                    </v-row>
                    
                    <v-row dense>
                        <v-col cols="6">
                            <div>
                                <div class="my_page_input_label">Пол абитуриента</div>
                                <div class="my_page_radio_group">
                                <v-radio-group
                                row
                                >
                                <v-radio
                                    label="Мальчик"
                                    value="radio-1"
                                ></v-radio>
                                <v-radio
                                    label="Девочка"
                                    value="radio-2"
                                ></v-radio>
                                </v-radio-group>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                <div class="my_page_input_label">Страна проживания абитуриента</div>
                                <div class="my_page_radio_group">
                                <v-radio-group
                                row
                                >
                                <v-radio
                                    label="Россия"
                                    value="radio-1"
                                ></v-radio>
                                <v-radio
                                    label="Другая страна"
                                    value="radio-2"
                                ></v-radio>
                                </v-radio-group>
                                </div>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row dense>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Регион проживания абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Город проживания абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Текущая школа абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Текущий класс обучения абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <div class="my_page_input_label">E-mail абитуриента</div>
                            <div class="my_page_input_textfield"><strong>mymail@mail.ru</strong></div>
                        </v-col>
                        <v-col cols="4">
                            <div class="my_page_input_label">Телефон абитуриента</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <div class="my_page_input_label">Ссылка на профиль в ВКонтакте</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div style="float: left; padding-right: 15px;"><v-btn color="#FFFFFF" style="border-radius: 10px;">Сохранить</v-btn></div>
                            <div style="float: left;"><v-btn color="#C4C4C4" style="border-radius: 10px;">Сохранить и перейти к следующему шагу</v-btn></div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

                    
        </v-container>

    </v-app>
</template>

<script>
    import MenuTop from './MenuTop';
    import MenuLeft from './MenuLeft';
    
    export default {
        components: { 
            MenuTop,
            MenuLeft,
        },
        data() {
            return {
            }
        },
    }
</script>
