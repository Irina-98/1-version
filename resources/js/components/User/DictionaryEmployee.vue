<template>
    <v-app light>
        <Menu />
        <v-main>
            <div v-if="dialogUser == true">
                <v-dialog
                v-model="dialogUser"
                persistent
                >
                <v-card>
                    <v-card-title>
                        <span class="text-h1"></span>
                    </v-card-title>
                    <v-card-text>
                        <v-row align="center" justify="center">
                            <v-col md="auto">
                                <v-avatar size="192px">
                                    <v-img :src="user.image"> </v-img>
                                </v-avatar>
                            </v-col>
                            <v-col md="auto">
                                <h1>{{user.fio}}</h1>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row no-gutters>
                            <v-col cols="12" v-if="(user.positions != null) && (user.positions.length != 0)">
                                <h3>{{$t('positions')}}:</h3>
                                <ul>
                                    <li v-for="(p, index) in user.positions" :key="index">
                                        <h5>{{p.department}} - {{p.position}}</h5>
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <h3>{{$t('contacts')}}:</h3>
                                <h5 v-if="(user.place != null) && (user.place != '')">{{$t('working_place')}}: {{user.place}}</h5>
                                <h5 v-if="(user.phone != null) && (user.phone != '')">{{$t('phone')}}: {{user.phone}}</h5>
                                <template v-if="(user.phones != null) && (user.phones.length != 0)">
                                    <h5>{{$t('phones_additional')}}:</h5>
                                    <ul>
                                        <li v-for="(p, index) in user.phones" :key="index">
                                            <h5>{{p.value}}</h5>
                                        </li>
                                    </ul>
                                </template>
                                <h5 v-if="(user.email != null) && (user.email != '')">{{$t('email')}}: {{user.email}}</h5>
                                <template v-if="(user.emails != null) && (user.emails.length != 0)">
                                    <h5>{{$t('emails_additional')}}:</h5>
                                    <ul>
                                        <li v-for="(p, index) in user.emails" :key="index">
                                            <h5>{{p.value}}</h5>
                                        </li>
                                    </ul>
                                </template>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row no-gutters>
                            <v-col cols="12"  v-if="(user.education != null) && (user.education.length != 0)">
                                <h3>{{$t('education')}}:</h3>
                                <ul>
                                    <li v-for="(e, index) in user.education" :key="index">
                                        <h5>{{e.year}}, {{e.description}}</h5>
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <h3>{{$t('additional')}}:</h3>
                                <h5 v-if="(user.gender != null) && (user.gender != '')">{{$t('gender')}}: {{user.gender}}</h5>
                                <h5>{{$t('dob')}}: {{user.dob | formatDate}}</h5>
                                <h5 v-if="(user.info != null) && (user.info != '')">{{$t('information')}}: {{user.info}}</h5>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogUser = false"
                    >
                        {{$t('close')}}
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </div>


            <v-container v-if="items != null">
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field 
                            v-model="search" 
                            :label="$t('search')"
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-treeview
                    :items="items"
                    :search="search"
                >
                    <template v-slot:prepend="{ item, open }">
                        <v-icon v-if="item.type == 'department'">
                            {{ open ? 'mdi-door-open' : 'mdi-door-closed' }}
                        </v-icon>
                        <v-avatar v-else-if="item.type == 'user'" size="24px">
                            <v-img :src="item.image"> </v-img>
                        </v-avatar>
                    </template>
                    <template slot="label" slot-scope="{ item }">
                        <a @click="openDialog(item)">
                            <div style="width: 100%; /*color: #3f51b5!important;*/">
                                {{ item['name_' + $i18n.locale] }}
                            </div>
                        </a>
                    </template>
                </v-treeview>
            </v-container>
        </v-main>
        <ConfirmDlg ref="confirm" />
        <InformationDlg ref="information" />
        <ErrorDlg ref="error" />
    </v-app>
</template>
<script>
    import useful from '@/js/helpers/useful.js';
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
                dialogUser: false,
                tree: [],
                items: null,
                data: null,
                user: null,
                department: null,
                search: null,
                caseSensitive: false,
                //departments: null,
            }
        },
        computed: {
            fileText() {
                return this.item.avatar ? this.item.avatar.name : '';
            },
            filter () {
                return this.caseSensitive
                ? (item, search, textKey) => item[textKey].indexOf(search) > -1
                : undefined
            },
        },
        beforeCreate() {
        },
        mounted() {
            axios.post('/api/department/list_all_with_employee').then(function(response){
                //this.departments = response.data;
                let ls = [];
                for(let i in response.data) {
                    let item = response.data[i];
                    let o = {};
                    o.id = 'd_' + item.id;
                    if (item.parent_id == null) {
                        o.parent_id = null;
                    } else {
                        o.parent_id = 'd_' + item.parent_id;
                    }
                    o.name_ru = item.name_ru;
                    o.name_en = item.name_en;
                    o.name = o['name_' + this.$i18n.locale];
                    o.type = 'department';
                    ls.push(o);
                }
                for(let i in response.data) {
                    let item = response.data[i];
                    for(let j in item.departments_positions_users) {
                        let it = item.departments_positions_users[j];
                        let ot = {};
                        ot.parent_id = 'd_' + item.id;
                        ot.id = 'u_' + it.id;
                        ot.name_ru = it.user.lastname_ru + ' ' + it.user.firstname_ru + ' ' + 
                            it.user.middlename_ru + ' - ' + it.position.name_ru;
                        ot.name_en = it.user.lastname_en + ' ' + it.user.firstname_en + ' ' + 
                            it.user.middlename_en + ' - ' + it.position.name_en;
                        ot.name = ot['name_' + this.$i18n.locale];
                        ot.type = 'user';
                        if ((it.user.image != null) && (it.user.image.thumbnail != null)) {
                            ot.image = it.user.image.thumbnail;
                        } else {
                            ot.image = '/images/nophoto.jpg';
                        }
                        ls.push(ot);
                    }
                }
                this.items = this.listToTree(ls);
                this.data = response.data;
            }.bind(this));
        },
        methods: {
            logoutUser() {
                localStorage.removeItem('user-token');
                this.$router.push({ name: "Login" });
            },
            openDialog(item) {
                let type = item.type, id = parseInt(item.id.substring(2)), user_id = null;
                if (type == 'user') {
                    this.user = {};
                    for(let i in this.data) {
                        let item = this.data[i];
                        for(let j in item.departments_positions_users) {
                            let it = item.departments_positions_users[j];
                            if (it.id == id) {
                                user_id = it.user_id;
                            }
                        }
                    }
                    if (user_id == null) {
                        return;
                    }
                    this.user.positions = [];
                    for(let i in this.data) {
                        let item = this.data[i];
                        for(let j in item.departments_positions_users) {
                            let it = item.departments_positions_users[j];
                            if (it.user_id == user_id) {
                                this.user['id'] = it.user.id;
                                this.user['dob'] = it.user.dob;
                                this.user['email'] = it.user.email;
                                this.user['emails'] = it.user.emails;
                                this.user['phone'] = it.user.phone;
                                this.user['phones'] = it.user.phones;
                                this.user['education'] = it.user.employee_education;
                                this.user['place'] = it.user.employee_place;
                                this.user['info'] = it.user.info;
                                if ((it.user.image != null) && (it.user.image.middle != null)) {
                                    this.user.image = it.user.image.middle;
                                } else {
                                    this.user.image = '/images/nophoto.jpg';
                                }
                                
                                if (it.user.gender == 1) {
                                    this.user.gender = this.$t('male');
                                } else if (it.user.gender == 2) {
                                    this.user.gender = this.$t('female');
                                } else {
                                    this.user.gender = '';
                                }
                                this.user.fio = it.user['lastname_' + this.$i18n.locale] + ' '
                                    + it.user['firstname_' + this.$i18n.locale] + ' '
                                    + it.user['middlename_' + this.$i18n.locale];
                                this.user.positions.push({position: it.position['name_' + this.$i18n.locale], 
                                    department: item['name_' + this.$i18n.locale]});
                            }
                        }
                    }
                    this.dialogUser = true;
                }

                //this.dialog = true;
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
            listToTree(list) {
                return useful.documentListToTree(list);
            },
        }
    }
</script>