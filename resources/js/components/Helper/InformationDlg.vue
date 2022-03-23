<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    persistent
  >
    <v-card>
      <v-toolbar :color="options.color" dense flat>
        <v-toolbar-title class="text-body-2 font-weight-bold" style="width: 100%;">
          {{$t('information')}}
          <v-icon style="float: right;" @click.native="agree">mdi-close-circle</v-icon>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text
        v-show="!!message"
        class="pa-4 black--text"
        v-html="message"
      ></v-card-text>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="body-2 font-weight-bold"
          outlined
          @click.native="agree"
          >Ok</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "InformationDlg",
    data() {
      return {
        dialog: false,
        message: null,
        options: {
          color: "grey lighten-3",
          width: 400,
          zIndex: 201,
          noconfirm: true,
        },
      };
    },

    methods: {
      open(message, options) {
        this.dialog = true;
        this.message = message;
        this.options = Object.assign(this.options, options);
        //return new Promise();
      },
      agree() {
        this.dialog = false;
      }
    },
  };
</script>