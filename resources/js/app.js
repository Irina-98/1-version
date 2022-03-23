require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import moment from 'moment-timezone'
import vuetify from './vuetify';
import VueI18n from 'vue-i18n';
import {messages} from './messages'

Vue.use(VueI18n);

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
    }
});

Vue.filter('formatDateTime', function(value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
    }
});

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

require("@/css/style.css");

const i18n = new VueI18n({
    locale: 'en',
    messages
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    vuetify,
    i18n
});