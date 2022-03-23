<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">{{$t('appname')}}</router-link>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        {{$t('users')}}
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/user/list" class="nav-item nav-link">{{$t('users')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/notification/list" class="nav-item nav-link">{{$t('notifications')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        {{$t('portals')}}
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/category/list" class="nav-item nav-link">{{$t('categories')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/portal/list" class="nav-item nav-link">{{$t('portals')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/prole/list" class="nav-item nav-link">{{$t('roles')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/ppermission/list" class="nav-item nav-link">{{$t('permissions')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        {{$t('dictionaries')}}
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/department/list" class="nav-item nav-link">{{$t('departments')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/position/list" class="nav-item nav-link">{{$t('positions')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/education/list" class="nav-item nav-link">{{$t('education')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/profile/list" class="nav-item nav-link">{{$t('education_profiles')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/pension/list" class="nav-item nav-link">{{$t('pension_types')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/lesson/list" class="nav-item nav-link">{{$t('subjects')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/direction/list" class="nav-item nav-link">{{$t('education_directions')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/status/list" class="nav-item nav-link">{{$t('Статусы')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/relationship/list" class="nav-item nav-link">{{$t('roles_to_enrollee')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/country/list" class="nav-item nav-link">{{$t('countries')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/region/list" class="nav-item nav-link">{{$t('regions')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                        <v-list-item>
                            <v-list-item-title>
                                <router-link exact-active-class="active" to="/admin/city/list" class="nav-item nav-link">{{$t('cities')}}</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
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
                    if (!response.data.isAdmin) {
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