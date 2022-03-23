<template>
    <v-container>
        <v-row align="center"
      justify="center">
            <v-col cols="3">
                <v-img src="/images/logo_enrollee.png" style="width: 200px;" /> 
            </v-col>
            <v-col cols="6" align="center" class="d-flex justify-space-around">
                    <div class="my_menu_bold">Главная</div>
                    <div class="my_menu_simple">Летово Онлайн</div>
                    <div class="my_menu_simple">Вопросы и ответы</div>
            </v-col>
            <v-col cols="3" class="d-flex justify-center align-center">
                <v-spacer></v-spacer>
                <v-badge color="#C4C4C4">
                    <span slot="badge">2</span>
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
                <v-spacer></v-spacer>
                <v-icon large style="padding-right: 3px;">mdi-account-circle</v-icon>
                <div class="my_menu_fio">Вареникова Ю.К.</div>
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
    .my_menu_simple {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */
        color: #000000;
        float: left;
    }

    .my_menu_bold {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */
        float: left;
        color: #000000;
    }

    .my_menu_fio {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */
        float: right;
        color: #000000;
    }
</style>