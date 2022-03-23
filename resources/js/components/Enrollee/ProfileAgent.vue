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
                                Представитель абитуриента
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
                            <div class="my_page_input_label">Кем абитуриенту приходится представитель?</div>
                            <v-select
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-select>
                            </div>

                            <div>
                            <div class="my_page_input_label">Имя представителя</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">Телефон представителя</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
                        </v-col>

                        <v-col cols="6">
                            <div>
                            <div class="my_page_input_label">Фамилия представителя</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">Отчество представителя</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>

                            <div>
                            <div class="my_page_input_label">E-mail представителя</div>
                            <v-text-field
                                outlined
                                dense
                                class="my_page_input_textfield"
                            ></v-text-field>
                            </div>
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
