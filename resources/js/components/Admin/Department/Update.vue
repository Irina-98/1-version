<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('parent')}}</label>
                                    <select class="form-control" v-model="item.parent_id">
                                        <option disabled value="">{{$t('choose_one_item')}}</option>
                                        <option v-for="it in departments" :key="it.id" :value="it.id">
                                            {{it['name_' + $i18n.locale]}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('name')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="item.name_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('name')}}. {{$t('en')}}</label>
                                    <input type="text" class="form-control" v-model="item.name_en">
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
                                    <label>{{$t('phone')}}</label>
                                    <input type="text" class="form-control" v-model="item.phone">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('email')}}</label>
                                    <input type="text" class="form-control" v-model="item.email">
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
        mounted() {
            this.show();
        },
        data(){
            return {
                item: {
                    name_ru: "",
                    name_en: "",
                    description_ru: "",
                    description_en: "",
                    phone: "",
                    email: "",
                    parent_id: null,
                },
                departments: [],
            }
        },
        methods:{
            show: function() {
                axios.post('/api/admin/department/list_all', this.item).then(function(response){
                    this.departments = response.data;
                }.bind(this));

                axios.post(`/api/admin/department/get/${this.$route.params.id}`).then(function(response) {
                    this.item = response.data;
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
                    axios.post(`/api/admin/department/update/${this.$route.params.id}`, this.item).then(function(response){
                        this.$router.push({name:"AdminDepartmentList"})
                    }.bind(this));
                }
            },
        },
        created: function() {
        }
    }
</script>