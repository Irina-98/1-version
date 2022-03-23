import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#696969',
                accent: '#80B1F3',
                error: '#b71c1c',

                /*primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#FF0000',
  success: '#00FF00',
  warning: '#0000FF',*/
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
})