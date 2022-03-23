<template>
    <v-app light>
        <Menu />
        <v-main>
            <v-container fluid>
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field 
                            v-model="search" 
                            :label="$t('search')"
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            <v-row dense>
                <template
                v-for="r in portals"
                >
                <v-col
                md="6"
                :key="r.id"
                v-if="(search == null) || (search == '') || (r.portal['name_' + $i18n.locale].toLowerCase().indexOf(search.toLowerCase()) != -1)"
                >
                <v-card>
                    <a :href="r.portal.url" target="_blank">
                    <v-img
                    :src="r.portal.image.middle"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    >
                    <v-card-title v-text="`${r.portal['name_' + $i18n.locale]}`"></v-card-title>
                    <v-card-subtitle v-text="`${r.portal['description_' + $i18n.locale]}`"></v-card-subtitle>
                    </v-img>
                    </a>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon @click="showTooltip(r.portal)">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-btn>

                    <v-btn icon @click="addToBookmark(r)">
                        <v-icon v-if="r.is_bookmark" color="primary">mdi-bookmark</v-icon>
                        <v-icon v-else>mdi-bookmark</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
                </template>
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
                portals: [],
                search: "",
            }
        },
        methods:{
            gets: function() {
                axios.post('/api/user/get_my_portals_by_category/' + this.$route.params.id).then(function(response){
                    this.portals = response.data;
                }.bind(this));
            },
            async addToBookmark(p) {
                let s = this.$t('confirm_add_to_bookmark');
                if (p.is_bookmark) {
                    s = this.$t('confirm_remove_from_bookmark');
                }
                if (
                    await this.$refs.confirm.open(
                        this.$t('confirm'),
                        s,
                        'save'
                    )
                ) {
                    let d = {};
                    d.id = p.id;
                    d.is_bookmark = !p.is_bookmark;
                    axios.post('/api/portal/change_is_bookmark', d).then(function(response){
                        this.gets();
                        this.$refs.information.open(
                            this.$t('information_data_saved'),
                        );
                    }.bind(this));
                }
            },
            showTooltip(p) {
                this.$refs.information.open(p['tooltip_' + this.$i18n.locale],);
            },
        },
        created: function(){
        }
    }
</script>