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
                                Заявка на поступление
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_sub_subtitle">
                                Профиль обучения
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="my_page_simple_text">
                            Формирование учебной траектории в 9 классе происходит в соответствии с выбранным профилем обучения. Для того, чтобы поступить на выбранное направление, нужно сдать профильный экзамен, помимо основных предметов.
                            <br /><br />
                            Перед выбором экзамена ознакомьтесь с процессом поступления по выбранному предмету на странице <u>«Рекомендации по подготовке к тестированию»</u>.
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="6">
                            <div>
                            <v-select
                                outlined
                                dense
                                class="my_page_input_textfield"
                                label="Желаемое направление обучения"
                            ></v-select>
                            </div>

                            <div>
                            <v-select
                                outlined
                                dense
                                class="my_page_input_textfield"
                                label="Выбор экзамена"
                            ></v-select>
                            </div>
                        </v-col>
                        <v-col cols="6">
                        </v-col>
                    </v-row>                    
                    <v-row>
                        <v-col>
                            <div style="float: left; padding-right: 15px;"><v-btn color="#FFFFFF" style="border-radius: 10px;">Сохранить черновик</v-btn></div>
                            <div style="float: left;"><v-btn color="#C4C4C4" style="border-radius: 10px;">Отправить заявку на поступление</v-btn></div>
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
