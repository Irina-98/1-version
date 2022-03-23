<template>
    <v-app light>
        <Menu />
        <v-main>
            <div v-if="dialog == true">
                <v-dialog
                v-model="dialog"
                persistent
                >
                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{$t('password_change')}}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form_password">
                        <v-text-field :label="$t('password_new')" v-model="password"
                            :append-icon="showP ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showP ? 'text' : 'password'"
                            @click:append="showP = !showP"
                            :rules="[v => !!v || $t('item_is_required')]"
                        ></v-text-field>
                        <v-text-field :label="$t('password_confirm')" v-model="password_confirm"
                            :append-icon="showPC ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPC ? 'text' : 'password'"
                            @click:append="showPC = !showPC"
                            :rules="[v => !!v || $t('item_is_required')]"
                        ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="saveDialogData"
                    >
                        {{$t('save')}}
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        {{$t('close')}}
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </div>


            <v-container v-if="item != null">
                <v-form ref="form">
                        <div v-if="item.avatar != null">
                            <v-row>
                                <v-col cols="12" v-if="item.avatar.thumbnail != null" >
                                    <center><img :src="item.avatar.thumbnail" /></center>
                                </v-col>
                                <v-col cols="12" v-if="item.avatar.thumbnail == null" >
                                    <center><img src="/images/nophoto.jpg" /></center>
                                </v-col>
                            </v-row>
                        </div>
                        <v-btn
                            tile
                            color="success"
                            text
                            @click="openDialogData"
                            style="padding: 0;"
                        >
                            <v-icon left>
                                mdi-lock
                            </v-icon>
                            {{$t('password_change')}}
                        </v-btn>
                        <!--v-text-field readonly disabled :label="$t('email')" v-model="item.email"></v-text-field>
                        <v-text-field readonly disabled :label="$t('last_name')" v-model="item.last_name"></v-text-field>
                        <v-text-field readonly disabled :label="$t('first_name')" v-model="item.first_name"></v-text-field>
                        <v-text-field readonly disabled :label="$t('middle_name')" v-model="item.middle_name"></v-text-field>
                        <v-text-field :label="$t('phone')" v-model="item.phone" :rules="[v => !!v || $t('item_is_required')]"></v-text-field>
                        <v-text-field :label="$t('phone_additional')" v-model="item.phone_additional" :rules="[v => !!v || $t('item_is_required')]"></v-text-field>
                        <v-text-field :label="$t('address')" v-model="item.address" :rules="[v => !!v || $t('item_is_required')]"></v-text-field>
                        <v-text-field :label="$t('post_index')" v-model="item.post_index" :rules="[v => !!v || $t('item_is_required')]"></v-text-field>
                        <v-text-field :label="$t('city')" v-model="item.city" :rules="[v => !!v || $t('item_is_required')]"></v-text-field>
                        <v-checkbox :label="$t('contacts_show')" v-model="item.is_contacts_show"></v-checkbox-->
                        <v-radio-group v-model="item.language" :label="$t('language')">
                            <v-radio
                                :label="$t('ru')"
                                value="ru"
                            ></v-radio>
                            <v-radio
                                :label="$t('en')"
                                value="en"
                            ></v-radio>
                        </v-radio-group>
                        <v-select 
                            v-model="item.notification_type"
                            :items="notification_types"
                            :label="$t('notification_type_show')"
                            item-text="name"
                            item-value="id"
                        >
                        </v-select>
                        <v-textarea :label="$t('info_additional')" v-model="item.info"></v-textarea>
                        <center>
                        <v-btn
                            tile
                            color="primary"
                            @click="saveData"
                        >
                            <v-icon left>
                                mdi-content-save
                            </v-icon>
                                {{$t('save')}}
                            </v-btn>
                        </center>
                </v-form>
            </v-container>
        </v-main>
        <ConfirmDlg ref="confirm" />
        <InformationDlg ref="information" />
        <ErrorDlg ref="error" />
    </v-app>
</template>
<script>
    import Menu from './Menu';
    export default {
        components: {
            Menu,
            ConfirmDlg: () => import("../Helper/ConfirmDlg"),
            InformationDlg: () => import("../Helper/InformationDlg"),
            ErrorDlg: () => import("../Helper/ErrorDlg"),
        },
        data() {
            return {
                item: null,
                password_confirm: null,
                password: null,
                dialog: false,
                showP: false,
                showPC: false,
                notification_types: [],
            }
        },
        computed: {
            fileText() {
                return this.item.avatar ? this.item.avatar.name : '';
            }
        },
        beforeCreate() {
            let token = localStorage.getItem('user-token');
            if (token == null) {
                this.$router.push({ name: "Login" });
            } else {
                this.axios.post('/api/me').then(response=>{
                    if (!response.data.isUser) {
                        this.$router.push({ name: "Login" });
                    } else {
                        this.me = response.data;
                        this.item = response.data.user;
                        this.$i18n.locale = response.data.user.language;

                        this.notification_types = [{id: 1, name: this.$t('notification_type_1')},
                            {id: 2, name: this.$t('notification_type_2')},
                            {id: 3, name: this.$t('notification_type_3')},
                        ];
                    }
                })
                .catch(error=>{
                    this.$router.push({ name: "Login" });
                });
            }
        },
        mounted() {
        },
        methods: {
            logoutUser() {
                localStorage.removeItem('user-token');
                this.$router.push({ name: "Login" });
            },
            openDialogData() {
                this.password_confirm = null;
                this.password = null;
                this.dialog = true;
            },

            async saveData() {
                if (!this.$refs.form.validate()) {
                    return;
                }
                let d = {};
                d.language = this.item.language;
                d.info = this.item.info;
                d.notification_type = this.item.notification_type;
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('confirm_me_update'),
                        'update'
                    )
                ) {
                    this.axios.post('/api/user/me/update', d).then(response=>{
                        this.$refs.information.open(this.$t('information_data_saved'),);
                    }).catch(error=>{
                        console.log(error);
                    });
                }
            },

            async saveDialogData() {
                if (!this.$refs.form_password.validate()) {
                    return;
                }
                if (this.password == this.password_confirm) {
                    if (
                        await this.$refs.confirm.open(
                            this.$t('confirm'),
                            this.$t('confirm_password'),
                            'update'
                        )
                    ) {
                        this.axios.post('/api/user/me/password', {password: this.password}).then(response=>{
                            this.dialog = false;
                            this.$refs.information.open(this.$t('information_data_saved'),);
                        }).catch(error=>{
                            console.log(error);
                        })
                    }
                } else {
                    this.$refs.error.open(
                        this.$t('password_mismatch'),
                    )
                }                
            },
        }
    }
</script>