<template>
   <v-app id="login">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title style="width: 100%; font-size: 1.2rem;">
                            <v-row align="center" justify="center">
                                <v-col cols="3">
                            <!--v-img 
                                v-if="(predetermined != null) && (predetermined.image_thumbnail)"
                                :src="predetermined.image_thumbnail"
                                height="75" 
                                width="75"
                                contain 
                                style="margin-right: 6px; float: left;">
                            </v-img-->
                                </v-col>
                                <v-col cols="9">
                            <!--template v-if="predetermined != null">{{app_text}}</template--> {{$t('authorization')}}
                            </v-col>
                            </v-row>
                            
                        </v-toolbar-title>
                        <v-select 
                                        class="my_select_autowidth"
                                        v-model="$i18n.locale"
                                        :items="langs"
                                        item-text="name"
                                        item-value="value"
                                        hide-details="true"
                                        v-on:change="changeLang()"
                                    >
                        </v-select>
                     </v-toolbar>
                     <v-card-text>
                        <v-form
                        ref="form">
                           <v-text-field
                              prepend-icon="mdi-account"
                              name="email"
                              :label="$t('email')"
                              type="text"
                              v-model="email"
                              :rules="[v => !!v || $t('item_is_required')]"
                              required
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="mdi-lock"
                              name="password"
                              :label="$t('password')"
                              :rules="[v => !!v || $t('item_is_required')]"
                              type="password"
                              v-model="password"
                              required
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <a style="text-decoration: none; font-size: medium; margin-left: 10px;" href="/forgot_password">{{$t('password_forgot')}}</a>
                        <v-spacer></v-spacer>
                        <v-btn style="margin-right: 10px;" color="primary" @click="loginUser()">{{$t('login')}}</v-btn>
                         
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
      <ErrorDlg ref="error" />
   </v-app>
</template>

<script>
    export default {
        components: {
            ErrorDlg: () => import("./Helper/ErrorDlg"),
        },
        data() {
            return {
                langs: [{value: 'ru', name: 'Ру'}, {value: 'en', name: 'En'}],
                email: "",
                password: "",
                predetermined: null,
                app_text: "",
            }
        },
        beforeCreate() {
            this.$i18n.locale = 'ru';
            let token = localStorage.getItem('user-token');
            if (token != null) {
                this.axios.post('/api/me').then(response=>{
                    if (response.data.isAdmin) {
                        this.$router.push({ name: "AdminUserList" });
                    } else if (response.data.isUser) {
                        this.$router.push({ name: "UserHome" });
                    }
                })
                .catch(error=>{
                    console.log(error)
                });
            } /*else {
                this.axios.post('/api/predetermined/get_for_auth').then(response=>{
                    this.predetermined = response.data;
                    this.app_text = this.predetermined.ru_text;
                });
            }*/
        },
        methods: {
            async loginUser() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                localStorage.removeItem('user-token');
                await this.axios.post('/api/login', {email: this.email, password: this.password}).then(response=> {
                    let token = response.data.token_type + " " + response.data.access_token;
                    localStorage.setItem('user-token', token);
                    if (response.data.isAdmin) {
                        this.$router.push({ name: "AdminUserList" });
                    } else if (response.data.isUser) {
                        this.$router.push({ name: "UserHome" });
                    }
                })
                .catch(error=>{
                    this.$refs.error.open(
                        this.$t('error_credentials'),
                    )
                });
            },
            changeLang() {
                if (this.predetermined != null) {
                    if(this.$i18n.locale == 'en') {
                        this.app_text = this.predetermined.en_text;
                    } else if (this.$i18n.locale == 'ru') {
                        this.app_text = this.predetermined.ru_text;
                    }
                }
            }
        }
    }
</script>