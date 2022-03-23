<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('country')}}</label>
                                    <select class="form-control" v-model="item.country_id">
                                        <option disabled value="">{{$t('choose_one_item')}}</option>
                                        <option v-for="it in countries" :key="it.id" :value="it.id">
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
                    country_id: null,
                },
                countries: [],
            }
        },
        methods:{
            show: function() {
                axios.post('/api/admin/country/list_all').then(function(response){
                    this.countries = response.data;
                }.bind(this));
                
                axios.post(`/api/admin/region/get/${this.$route.params.id}`).then(function(response) {
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
                    const config = {
                        headers: { 'content-type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) }
                    }
                    let fd = new FormData();
                    for ( var key in this.item ) {
                        fd.append(key, this.item[key]);
                    }

                    axios.post(`/api/admin/region/update/${this.$route.params.id}`, fd, config).then(function(response){
                        this.$router.push({name:"AdminRegionList"})
                    }.bind(this));
                }
            },
        },
        created: function() {
        }
    }
</script>