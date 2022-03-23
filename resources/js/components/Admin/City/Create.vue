<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('country')}}</label>
                                    <select class="form-control" v-model="country_id" @change="countryChange">
                                        <option disabled value="">{{$t('choose_one_item')}}</option>
                                        <option v-for="it in countries" :key="it.id" :value="it.id">
                                            {{it['name_' + $i18n.locale]}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('region')}}</label>
                                    <select class="form-control" v-model="item.region_id">
                                        <option disabled value="">{{$t('choose_one_item')}}</option>
                                        <option v-for="it in regions" :key="it.id" :value="it.id">
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
                                <button type="button" class="btn btn-primary" @click="create()">{{$t('save')}}</button>
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
            axios.post('/api/admin/country/list_all').then(function(response){
                this.countries = response.data;
            }.bind(this));
        },
        data(){
            return {
                item: {
                    name_ru: "",
                    name_en: "",
                    region_id: null,
                },
                country_id: null,
                countries: [],
                regions: [],
            }
        },
        methods:{
            async create() {
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('confirm_record_create'),
                        'create'
                    )
                ) {
                    const config = {
                        headers: { 'content-type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) }
                    }
                    let fd = new FormData();
                    for ( var key in this.item ) {
                        fd.append(key, this.item[key]);
                    }
                    axios.post('/api/admin/city/create', fd, config).then(function(response){
                        this.$router.push({name:"AdminCityList"})
                    }.bind(this));
                }
            },

            countryChange: function() {
                this.regions = [];
                if (this.country_id != null) {
                    axios.post('/api/admin/region/list_all_by_country/' + this.country_id).then(function(response){
                        this.regions = response.data;
                    }.bind(this));
                }
            }
        },
        created: function() {
        }
    }
</script>