<template>
                    <v-container style="background: #EAEAEA; border-radius: 20px;">
                        <v-row>
                            <center><v-icon size="120" color="#8D8D8D">mdi-account-circle</v-icon></center>
                        </v-row>
                        <v-row>
                            <center>
                                <div class="my_left_menu_fio">
                                    Вареникова Юлия Константиновна
                                </div>
                            </center>
                        </v-row>
                        <v-row>
                            <v-col>
                            <div class="my_left_menu_head">Мой профиль</div>
                            <ul class="my_left_menu_subhead">
                                <li>Основная информация</li>
                                <li>Представитель абитуриента</li>
                                <li>Образование</li>
                                <li>Достижения</li>
                            </ul>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <div class="my_left_menu_head">Поступление</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <div class="my_left_menu_head">Развитие</div>
                            <ul class="my_left_menu_subhead">
                                <li>Мероприятия</li>
                                <li>Кружки и курсы</li>
                                <li>Олимпиады Летово</li>
                            </ul>
                            </v-col>
                        </v-row>
                    </v-container>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        beforeCreate() {
            let token = localStorage.getItem('user-token');
            if (token == null) {
                this.$router.push({ name: "Login" });
            } else {
                this.axios.post('/api/me').then(response=>{
                    if (!response.data.isEnrollee) {
                        this.$router.push({ name: "Login" });
                    } else {
                        this.me = response.data;
                        this.$i18n.locale = response.data.user.language;
                    }
                })
                .catch(error=>{
                    this.$router.push({ name: "Login" });
                });
            }
        },
        methods: {
            logoutUser() {
                localStorage.removeItem('user-token');
                this.$router.push({ name: "Login" });
            }
        }
    }
</script>

<style scoped>
    .my_left_menu_fio {
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 130%;
/* or 31px */

text-align: center;

color: #000000;

    }

    .my_left_menu_head {
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color: #000000;
    }

    .my_left_menu_subhead {
        font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
/* identical to box height */


color: #666666;
list-style-type: none;
    }

    .my_left_menu_subhead > li {
        margin-top: 10px;
margin-bottom: 10px;

    }
</style>