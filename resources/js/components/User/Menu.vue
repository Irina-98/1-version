<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"
            color="#80B1F3"
            dark
        >
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">{{$t('appname')}}</router-link>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/home"
                        >
                        {{$t('portals')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/portal/bookmark"
                        >
                        {{$t('bookmarks')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/categories"
                        >
                        {{$t('categories')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer v-if="(me != null) && (me.user.notification_type >= 2)"></v-spacer>
                <v-menu offset-y v-if="(me != null) && (me.user.notification_type >= 2)">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/notification"
                        >
                        {{$t('notifications')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/dictionary_employee"
                        >
                        {{$t('dictionary_employee')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        to="/user/profile"
                        >
                        {{$t('profile_my')}}
                        </v-btn>
                    </template>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="logoutUser()"
                        >
                        {{$t('logout')}}
                        </v-btn>
                    </template>
                </v-menu>
            </div>
        </nav>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                me: null,
            }
        },
        async beforeCreate() {
            let token = localStorage.getItem('user-token');
            if (token == null) {
                this.$router.push({ name: "Login" });
            } else {
                await this.axios.post('/api/me').then(response=>{
                    if (!response.data.isUser) {
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
            },

            getMe() {
                return this.me;
            }
        },
    }
</script>