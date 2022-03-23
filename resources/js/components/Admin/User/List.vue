<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <router-link exact-active-class="active" to="/admin/user/create" class="btn btn-success my_btn_fonts">{{$t('create_item')}}</router-link>
            <br />
            <br />
            <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>{{$t('image')}}</th>
                                    <th>{{$t('role')}}</th>
                                    <th>{{$t('login')}} / {{$t('email')}}</th>
                                    <th>{{$t('last_name')}}</th>
                                    <th>{{$t('first_name')}}</th>
                                    <th>{{$t('middle_name')}}</th>
                                    <th>{{$t('actions')}}</th>
                                </tr>
                            </thead>
                            <tbody v-if="rows.length > 0">
                                <tr v-for="(r,key) in rows" :key="key">
                                    <td>{{ r.id }}</td>
                                    <td>
                                        <div v-if="r.image.thumbnail">
                                            <img :src="r.image.thumbnail" />
                                        </div>
                                        <div v-else>
                                            <img src="/images/nophoto.jpg" style="width: 100px;"/>
                                        </div>
                                    </td>
                                    <td>{{ getRoleNames(r.roles) }}</td>
                                    <td>{{ r.email }}</td>
                                    <td>{{ r['lastname_' + $i18n.locale] }}</td>
                                    <td>{{ r['firstname_' + $i18n.locale] }}</td>
                                    <td>{{ r['middlename_' + $i18n.locale] }}</td>
                                    <td>
                                        <router-link :to='{name:"AdminUserUpdate",params:{id:r.id}}' class="btn btn-success my_btn_fonts">{{$t('edit')}}</router-link>
                                        <button type="button" @click="deleteUser(r.id)" class="btn btn-danger my_btn_fonts">{{$t('delete')}}</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="8" align="center">{{$t('items_empty')}}</td>
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
                axios.post('/api/admin/user/list?page=' + this.pagination.current).then(function(response){
                    this.rows = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                }.bind(this));
            },
            async deleteUser(id){
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        this.$t('delete_confirm'),
                        'delete'
                    )
                ) {
                    this.axios.post(`/api/admin/user/delete/${id}`).then(response=>{
                        this.gets();
                    }).catch(error=>{
                        console.log(error);
                    })
                }
            },
            getRoleNames(roles) {
                let s = '';
                for(let i in roles) {
                    if (s != '') {
                        s += ', ';
                    }
                    s += this.$t(roles[i].name);
                }
                return s;
            },
        },
        created: function(){
            this.gets()
        }
    }
</script>