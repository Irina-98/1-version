<template>
    <v-app light>
        <Menu />
        <v-main>
            <v-container fluid>
            <v-row dense>
                <v-col
                v-for="r in categories"
                :key="r.id"
                md="6"
                >
                <v-card>
                    <router-link :to="`/user/category/${r.id}`">
                    <v-img
                    :src="r.image.middle"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    >
                    <v-card-title v-text="`${r['name_' + $i18n.locale]}`"></v-card-title>
                    <v-card-subtitle v-text="`${r['description_' + $i18n.locale]}`"></v-card-subtitle>
                    </v-img>
                    </router-link>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Menu from './Menu';
    export default {
        components: { Menu },
        mounted() {
            this.gets()
        },
        data(){
            return {
                categories: [],
            }
        },
        methods:{
            gets: function() {
                axios.post('/api/user/get_my_categories').then(function(response){
                    this.categories = response.data;
                }.bind(this));
            },
        },
        created: function(){
        }
    }
</script>