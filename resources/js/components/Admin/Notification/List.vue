<template>
    <v-app>
        <Menu />
        <div class="container mt-5">
            <router-link :to='{name:"AdminNotificationCreate"}' class="btn btn-success">{{$t('create_item')}}</router-link>
            <br /><br />
            <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>{{$t('title')}}</th>
                                    <th>{{$t('description')}}</th>
                                    <th>{{$t('roles')}}</th>
                                </tr>
                            </thead>
                            <tbody v-if="rows.length > 0">
                                <tr v-for="(r,key) in rows" :key="key">
                                    <td>{{ r.id }}</td>
                                    <td>{{ r.title }}</td>
                                    <td>{{ r.description }}</td>
                                    <td>{{ getTextRoles(r.roles) }}</td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">{{$t('items_empty')}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <v-pagination
                            v-if="rows.length > 0"
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
                axios.post('/api/admin/notification/list?page=' + this.pagination.current).then(function(response){
                    this.rows = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page;
                }.bind(this));
            },
            getTextRoles(roles) {
                let s = "";
                for(let i in roles) {
                    if (s != "") {s += ", ";}
                    s += this.$t(roles[i]['name']);
                }
                return s;
            },
        },
        created: function(){
        }
    }
</script>