<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('portal')}}</label>
                                    <select class="form-control" v-model="item.portal_id">
                                        <option disabled value="">{{$t('choose_one_item')}}</option>
                                        <option v-for="it in portals" :key="it.id" :value="it.id">
                                            {{it['name_' + $i18n.locale]}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('name')}}</label>
                                    <input type="text" class="form-control" v-model="item.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('description')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="item.description_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('description')}}. {{$t('en')}}</label>
                                    <input type="text" class="form-control" v-model="item.description_en">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <v-list shaped>
                                        <v-list-item-group
                                            v-model="item.roles"
                                            multiple
                                        >
                                            <template v-for="(item) in roles">
                                                <v-list-item
                                                    :key="item.id"
                                                    :value="item.id"
                                                    active-class="deep-purple--text text--accent-4"
                                                >
                                                    <template v-slot:default="{ active }">
                                                        <v-list-item-content>
                                                            <v-list-item-title >
                                                                <template>{{$t(item.name)}}</template>
                                                            </v-list-item-title>
                                                        </v-list-item-content>

                                                        <v-list-item-action>
                                                            <v-checkbox
                                                            :input-value="active"
                                                            color="deep-purple accent-4"
                                                            ></v-checkbox>
                                                        </v-list-item-action>
                                                    </template>
                                                </v-list-item>
                                            </template>
                                        </v-list-item-group>
                                    </v-list>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-primary" @click="update()">{{$t('update')}}</button>
                            </div>
                        </div>                        
            </form>
        </div>
        <ConfirmDlg ref="confirm" />
        <InformationDlg ref="information" />
        <ErrorDlg ref="error" />
    </v-app>
</template>

<script>
    import Menu from '../Menu';

    export default {
        components: { 
            Menu,
            ConfirmDlg: () => import("../../Helper/ConfirmDlg"),
            InformationDlg: () => import("../../Helper/InformationDlg"),
            ErrorDlg: () => import("../../Helper/ErrorDlg"),
        },
        async mounted() {
            await axios.post('/api/admin/user/list_all_roles').then(function(response){
                this.roles = response.data;
            }.bind(this));
            this.show();
        },
        data(){
            return {
                item: {
                    name: "",
                    description_ru: "",
                    description_en: "",
                    portal_id: null,
                    roles: [],
                },
                portals: [],
                roles: [],
            }
        },
        methods:{
            show: function() {
                axios.post('/api/admin/portal/list_all').then(function(response){
                    this.portals = response.data;
                }.bind(this));

                axios.post(`/api/admin/prole/get/${this.$route.params.id}`).then(function(response) {
                    let rs = [];
                    for(let i in response.data.roles) {
                        rs.push(response.data.roles[i].id);
                    }
                    this.item = response.data;
                    this.item.roles = rs;
                }.bind(this));
            },
            async update() {
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('confirm_record_update'),
                        'update'
                    )
                ) {
                    axios.post(`/api/admin/prole/update/${this.$route.params.id}`, this.item).then(function(response){
                        this.$router.push({name:"AdminProleList"})
                    }.bind(this));
                }
            },
        },
        created: function() {
        }
    }
</script>