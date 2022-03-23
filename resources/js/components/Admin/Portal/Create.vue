<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('image')}}</label>
                                    <input type="file" class="form-control" v-on:change="onFileChange">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('category')}}</label>
                                    <v-select 
                                    class="form-control"
                                    v-model="item.category_id"
                                    :items="categories"
                                    :item-text="`${'name_' + $i18n.locale}`"
                                    item-value="id"
                                    :label="`${$t('category')}`"
                                    :clearable=true>
                                    </v-select>
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
                                    <label>{{$t('tooltip')}}. {{$t('ru')}}</label>
                                    <input type="text" class="form-control" v-model="item.tooltip_ru">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('tooltip')}}. {{$t('en')}}</label>
                                    <input type="text" class="form-control" v-model="item.tooltip_en">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('url_to_go')}}</label>
                                    <input type="text" class="form-control" v-model="item.url">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('link_external_login')}}</label>
                                    <input type="text" class="form-control" v-model="item.link_external_login">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <v-checkbox
                                        v-model="item.is_bookmark"
                                        class="form-control"
                                        :label="$t('bookmark_default')"
                                    ></v-checkbox>
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
            axios.post('/api/admin/category/list_all').then(function(response){
                this.categories = response.data;
            }.bind(this));
            axios.post('/api/admin/user/list_all_roles').then(function(response){
                this.roles = response.data;
            }.bind(this));
        },
        data(){
            return {
                item: {
                    name_ru: "",
                    name_en: "",
                    description_ru: "",
                    description_en: "",
                    tooltip_ru: "",
                    tooltip_en: "",
                    url: "",
                    image: null,
                    category_id: null,
                    is_bookmark: false,
                    roles: [],
                },
                categories: [],
                roles: [],
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
                        if (key != 'roles') {
                            if (this.item[key] != null) {
                                fd.append(key, this.item[key]);
                            } else if (key == 'category_id') {
                                fd.append(key, null);
                            }
                        }
                    }
                    fd.append('roles', JSON.stringify(this.item.roles));
                    axios.post('/api/admin/portal/create', fd, config).then(function(response){
                        this.$router.push({name:"AdminPortalList"})
                    }.bind(this));
                }
            },
            onFileChange(e){
                this.item.image = e.target.files[0];
            },
        },
        created: function() {
        }
    }
</script>