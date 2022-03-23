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
                        <v-col class="my_page_simple_text">
                            Внимательно проверьте данные в заявке и нажмите на кнопку «Отправить заявку на поступление».
                            <br /><br />
                            Если вы хотите внести правки нажмите на кнопку «Изменить данные» рядом с соответствующим блоком информации.
                            <br /><br />
                            Если у вас возникли сложности при заполнении заявки на поступление в школу, ознакомьтесь с нашими <u>рекомендациями</u>.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                                <div class="my_page_sub_subtitle" style="float: left; margin-right: 10px;">Профиль обучения</div>
                                <div style="float: left;"><v-btn color="#C4C4C4" style="border-radius: 10px;">Изменить</v-btn></div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <center><v-icon style="font-size: 196px; padding-right: 3px;">mdi-account-circle</v-icon></center>
                        </v-col>
                        <v-col cols="6">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <div class="my_page_alert_text">Фамилия</div>
                            <div class="my_page_container_simple_head">Вареникова</div>
                            <br />
                            <div class="my_page_alert_text">Имя</div>
                            <div class="my_page_container_simple_head">Юлия</div>
                            <br />
                            <div class="my_page_alert_text">Отчество</div>
                            <div class="my_page_container_simple_head">Константиновна</div>
                            <br />
                            <div class="my_page_alert_text">Дата рождения</div>
                            <div class="my_page_container_simple_head">27.10.1996</div>
                            <br />
                            <div class="my_page_alert_text">Пол</div>
                            <div class="my_page_container_simple_head">Женский</div>
                            <br />
                            <div class="my_page_sub3_title">Место проживания</div>
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
