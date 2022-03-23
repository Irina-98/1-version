<template>
    <v-app light>
        <Menu ref="menu"/>
        <v-main>
            <v-container fluid>
            <v-row dense v-if="(notifications != null) && (notifications.length != 0)">
                <template v-for="(n, index) in notifications">
                <v-list-item :key="`letter-${index}`">
                    <v-list-item-content>
                        <v-list-item-title><b><i>{{n.created_at | formatDateTime}}</i></b>, {{n.title}}</v-list-item-title>
                        <v-list-item-subtitle>
                            {{changeText(n.description)}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-row>
            <v-row dense v-else>
                <center>{{$t('items_empty')}}</center>
            </v-row>
            </v-container>
        </v-main>
        <ConfirmDlg ref="confirm" />
        <InformationDlg ref="information" />
        <ErrorDlg ref="error" />
    </v-app>
</template>

<script>
    import Menu from './Menu';
    export default {
        components: { 
            Menu,
            ConfirmDlg: () => import("../Helper/ConfirmDlg"),
            InformationDlg: () => import("../Helper/InformationDlg"),
            ErrorDlg: () => import("../Helper/ErrorDlg"),
        },
        mounted() {
            this.gets()
        },
        data(){
            return {
                notifications: [],
                values: [],
            }
        },
        methods:{
            gets: function() {
                //var ref = this;
                //this.$nextTick(function () {
                    //alert(JSON.stringify(ref.$refs.menu.data));
                    //if (ref.$refs.menu != 'undefined') {
                        axios.post('/api/user/notification/list_my').then(function(response){
                            this.notifications = response.data.notifications;
                            this.values = response.data.values;
                        }.bind(this));
                    //}
                //});
            },
            changeText(t) {
                let s = t;
                for(let i in this.values) {
                    s = s.replace('#' + i + '#', this.values[i]);
                }
                return s;
            }
        },
        created: function(){
        }
    }
</script>