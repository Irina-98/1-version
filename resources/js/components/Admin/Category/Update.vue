<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>{{$t('image')}}</label>
                                    <div v-if="item.image.middle">
                                        <img :src="item.image.middle" />
                                        <br />
                                        <button type="button" @click="deleteImage()" class="btn btn-danger my_btn_fonts">{{$t('delete')}}</button>
                                    </div>
                                    <div v-else>
                                        <input type="file" class="form-control" v-on:change="onFileChange" accept="image/*;capture=camera">
                                    </div>
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
                    tooltip_ru: "",
                    tooltip_en: "",
                    url: "",
                    image: {
                        thumbnail: null,
                        middle: null
                    },
                }
            }
        },
        methods:{
            show: function() {
                axios.post(`/api/admin/category/get/${this.$route.params.id}`).then(function(response) {
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

                    axios.post(`/api/admin/category/update/${this.$route.params.id}`, fd, config).then(function(response){
                        this.$router.push({name:"AdminCategoryList"})
                    }.bind(this));
                }
            },
            deleteImage() {
                axios.post(`/api/admin/category/image/delete/${this.$route.params.id}`).then(function(response){
                    this.item.image.thumbnail = null;
                    this.item.image.middle = null;
                }.bind(this));
            },
            onFileChange(e){
                this.item.image = e.target.files[0];
            },
        },
        created: function() {
        }
    }
</script>