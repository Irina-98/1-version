<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <router-link :to='{name:"AdminCategoryCreate"}' class="btn btn-success">{{$t('create_item')}}</router-link>
            <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>{{$t('image')}}</th>
                                    <th>{{$t('name')}}</th>
                                    <th>{{$t('actions')}}</th>
                                </tr>
                            </thead>
                            <tbody v-if="rows.length > 0">
                                <tr v-for="(r,key) in rows" :key="key">
                                    <td>{{ r.id }}</td>
                                    <td>
                                        <img v-if="r.image.thumbnail != null" :src="r.image.thumbnail" />
                                    </td>
                                    <td>{{ r['name_' + $i18n.locale] }}</td>
                                    <td>
                                        <router-link :to='{name:"AdminCategoryUpdate", params:{id:r.id}}' class="btn btn-success">{{$t('edit')}}</router-link>
                                        <button type="button" @click="deleteCategory(r.id)" class="btn btn-danger">{{$t('delete')}}</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">{{$t('items_empty')}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <v-pagination
                            v-model="pagination.current"
                            :length="pagination.total"
                            @input="gets"
                        ></v-pagination>
                    </div>
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
            this.gets()
        },
        data(){
            return {
                rows: [],
                pagination: {
                    current: 1,
                    total: 0
                }
            }
        },
        methods:{
            gets: function() {
                axios.post('/api/admin/category/list?page=' + this.pagination.current).then(function(response){
                    this.rows = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                }.bind(this));
            },
            async deleteCategory(id){
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('delete_confirm'),
                        'delete'
                    )
                ) {
                    this.axios.post(`/api/admin/category/delete/${id}`).then(response=>{
                        this.gets();
                    }).catch(error=>{
                        console.log(error);
                    })
                }
            },
        },
        created: function(){
        }
    }
</script>