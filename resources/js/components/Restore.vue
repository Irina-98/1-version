<template>
   <v-app id="login">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary" height="60">
                        <v-toolbar-title style="width: 100%; font-size: 1.2rem;">
                            <v-row align="center" justify="center">
                                <v-col cols="3">
                            <v-img 
                                v-if="(predetermined != null) && (predetermined.image_thumbnail)"
                                :src="predetermined.image_thumbnail"
                                height="60" 
                                width="60"
                                contain 
                                style="margin-right: 6px; float: left;">
                            </v-img>
                                </v-col>
                                <v-col cols="9">
                            <template v-if="predetermined != null">{{app_text}}</template> {{$t('password')}}
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
                        <v-form ref="form">
                           <v-text-field
                              id="password"
                              prepend-icon="mdi-lock"
                              name="password"
                              :rules="[v => !!v || $t('item_is_required')]"
                              :label="$t('password')"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                           <v-text-field
                              id="password_confirm"
                              prepend-icon="mdi-lock"
                              name="password_confirm"
                              :label="$t('password_confirm')"
                              :rules="[v => !!v || $t('item_is_required')]"
                              type="password"
                              v-model="password_confirm"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="savePassword()">{{$t('save')}}</v-btn>
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
                token: "",
                password: "",
                password_confirm: "",
                predetermined: null,
                app_text: "",
            }
        },
        beforeCreate() {
            this.$i18n.locale = 'ru';

            this.axios.post('/api/predetermined/get_for_auth').then(response=>{
                this.predetermined = response.data;
                this.app_text = this.predetermined.ru_text;
            });
        },
        mounted() {
            this.token = this.$route.params.token;
        },
        methods: {
            async savePassword() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                if (this.password != this.password_confirm) {
                    this.$refs.error.open(
                        this.$t('password_mismatch'),
                    )
                    return;
                }

                await this.axios.post('/api/change_password', {token: this.token, password: this.password}).then(response=> {
                    if (response.data.success) {
                        this.$router.push({ name: "Login" });
                    } else {
                        this.$refs.error.open(
                            this.$t(response.data.msg_type),
                        );
                    }
                }).catch(error=>{
                    this.$refs.error.open(
                        this.$t('unexpected_error'),
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