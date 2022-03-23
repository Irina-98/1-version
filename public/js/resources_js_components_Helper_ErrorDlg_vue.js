"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Helper_ErrorDlg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ErrorDlg",
  data: function data() {
    return {
      dialog: false,
      message: null,
      options: {
        color: "grey lighten-3",
        width: 400,
        zIndex: 201,
        noconfirm: true
      }
    };
  },
  methods: {
    open: function open(message, options) {
      this.dialog = true;
      this.message = message;
      this.options = Object.assign(this.options, options); //return new Promise();
    },
    agree: function agree() {
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Helper/ErrorDlg.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Helper/ErrorDlg.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorDlg.vue?vue&type=template&id=56845106& */ "./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106&");
/* harmony import */ var _ErrorDlg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorDlg.vue?vue&type=script&lang=js& */ "./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorDlg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__.render,
  _ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Helper/ErrorDlg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorDlg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorDlg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorDlg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorDlg_vue_vue_type_template_id_56845106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorDlg.vue?vue&type=template&id=56845106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Helper/ErrorDlg.vue?vue&type=template&id=56845106& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      style: { zIndex: _vm.options.zIndex },
      attrs: { "max-width": _vm.options.width, persistent: "" },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "rgba(208, 76, 72, 0.5)", dense: "", flat: "" } },
            [
              _c(
                "v-toolbar-title",
                {
                  staticClass: "text-body-2 font-weight-bold",
                  staticStyle: { width: "100%" },
                },
                [
                  _vm._v("\n        " + _vm._s(_vm.$t("error")) + "\n        "),
                  _c(
                    "v-icon",
                    {
                      staticStyle: { float: "right" },
                      nativeOn: {
                        click: function ($event) {
                          return _vm.agree.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("mdi-close-circle")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !!_vm.message,
                expression: "!!message",
              },
            ],
            staticClass: "pa-4 black--text",
            domProps: { innerHTML: _vm._s(_vm.message) },
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pt-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "body-2 font-weight-bold",
                  attrs: { color: "primary", outlined: "" },
                  nativeOn: {
                    click: function ($event) {
                      return _vm.agree.apply(null, arguments)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("close")))]
              ),
              _vm._v(" "),
              _c("v-spacer"),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);