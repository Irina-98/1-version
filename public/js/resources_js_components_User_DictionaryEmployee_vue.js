(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_DictionaryEmployee_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_helpers_useful_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/helpers/useful.js */ "./resources/js/helpers/useful.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./resources/js/components/User/Menu.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  components: {
    Menu: _Menu__WEBPACK_IMPORTED_MODULE_2__["default"],
    ConfirmDlg: function ConfirmDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_ConfirmDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Helper/ConfirmDlg */ "./resources/js/components/Helper/ConfirmDlg.vue"));
    },
    InformationDlg: function InformationDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_InformationDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Helper/InformationDlg */ "./resources/js/components/Helper/InformationDlg.vue"));
    },
    ErrorDlg: function ErrorDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_ErrorDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../Helper/ErrorDlg */ "./resources/js/components/Helper/ErrorDlg.vue"));
    }
  },
  data: function data() {
    return {
      dialogUser: false,
      tree: [],
      items: null,
      data: null,
      user: null,
      department: null,
      search: null,
      caseSensitive: false //departments: null,

    };
  },
  computed: {
    fileText: function fileText() {
      return this.item.avatar ? this.item.avatar.name : '';
    },
    filter: function filter() {
      return this.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    }
  },
  beforeCreate: function beforeCreate() {},
  mounted: function mounted() {
    axios.post('/api/department/list_all_with_employee').then(function (response) {
      //this.departments = response.data;
      var ls = [];

      for (var i in response.data) {
        var item = response.data[i];
        var o = {};
        o.id = 'd_' + item.id;

        if (item.parent_id == null) {
          o.parent_id = null;
        } else {
          o.parent_id = 'd_' + item.parent_id;
        }

        o.name_ru = item.name_ru;
        o.name_en = item.name_en;
        o.name = o['name_' + this.$i18n.locale];
        o.type = 'department';
        ls.push(o);
      }

      for (var _i in response.data) {
        var _item = response.data[_i];

        for (var j in _item.departments_positions_users) {
          var it = _item.departments_positions_users[j];
          var ot = {};
          ot.parent_id = 'd_' + _item.id;
          ot.id = 'u_' + it.id;
          ot.name_ru = it.user.lastname_ru + ' ' + it.user.firstname_ru + ' ' + it.user.middlename_ru + ' - ' + it.position.name_ru;
          ot.name_en = it.user.lastname_en + ' ' + it.user.firstname_en + ' ' + it.user.middlename_en + ' - ' + it.position.name_en;
          ot.name = ot['name_' + this.$i18n.locale];
          ot.type = 'user';

          if (it.user.image != null && it.user.image.thumbnail != null) {
            ot.image = it.user.image.thumbnail;
          } else {
            ot.image = '/images/nophoto.jpg';
          }

          ls.push(ot);
        }
      }

      this.items = this.listToTree(ls);
      this.data = response.data;
    }.bind(this));
  },
  methods: {
    logoutUser: function logoutUser() {
      localStorage.removeItem('user-token');
      this.$router.push({
        name: "Login"
      });
    },
    openDialog: function openDialog(item) {
      var type = item.type,
          id = parseInt(item.id.substring(2)),
          user_id = null;

      if (type == 'user') {
        this.user = {};

        for (var i in this.data) {
          var _item2 = this.data[i];

          for (var j in _item2.departments_positions_users) {
            var it = _item2.departments_positions_users[j];

            if (it.id == id) {
              user_id = it.user_id;
            }
          }
        }

        if (user_id == null) {
          return;
        }

        this.user.positions = [];

        for (var _i2 in this.data) {
          var _item3 = this.data[_i2];

          for (var _j in _item3.departments_positions_users) {
            var _it = _item3.departments_positions_users[_j];

            if (_it.user_id == user_id) {
              this.user['id'] = _it.user.id;
              this.user['dob'] = _it.user.dob;
              this.user['email'] = _it.user.email;
              this.user['emails'] = _it.user.emails;
              this.user['phone'] = _it.user.phone;
              this.user['phones'] = _it.user.phones;
              this.user['education'] = _it.user.employee_education;
              this.user['place'] = _it.user.employee_place;
              this.user['info'] = _it.user.info;

              if (_it.user.image != null && _it.user.image.middle != null) {
                this.user.image = _it.user.image.middle;
              } else {
                this.user.image = '/images/nophoto.jpg';
              }

              if (_it.user.gender == 1) {
                this.user.gender = this.$t('male');
              } else if (_it.user.gender == 2) {
                this.user.gender = this.$t('female');
              } else {
                this.user.gender = '';
              }

              this.user.fio = _it.user['lastname_' + this.$i18n.locale] + ' ' + _it.user['firstname_' + this.$i18n.locale] + ' ' + _it.user['middlename_' + this.$i18n.locale];
              this.user.positions.push({
                position: _it.position['name_' + this.$i18n.locale],
                department: _item3['name_' + this.$i18n.locale]
              });
            }
          }
        }

        this.dialogUser = true;
      } //this.dialog = true;

    },
    saveData: function saveData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var d;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$refs.form.validate()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                d = {};
                d.language = _this.item.language;
                d.info = _this.item.info;
                d.notification_type = _this.item.notification_type;
                _context.next = 8;
                return _this.$refs.confirm.open(_this.$t('confirm'), _this.$t('confirm_me_update'), 'update');

              case 8:
                if (!_context.sent) {
                  _context.next = 10;
                  break;
                }

                _this.axios.post('/api/user/me/update', d).then(function (response) {
                  _this.$refs.information.open(_this.$t('information_data_saved'));
                })["catch"](function (error) {
                  console.log(error);
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveDialogData: function saveDialogData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.$refs.form_password.validate()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (!(_this2.password == _this2.password_confirm)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return _this2.$refs.confirm.open(_this2.$t('confirm'), _this2.$t('confirm_password'), 'update');

              case 5:
                if (!_context2.sent) {
                  _context2.next = 7;
                  break;
                }

                _this2.axios.post('/api/user/me/password', {
                  password: _this2.password
                }).then(function (response) {
                  _this2.dialog = false;

                  _this2.$refs.information.open(_this2.$t('information_data_saved'));
                })["catch"](function (error) {
                  console.log(error);
                });

              case 7:
                _context2.next = 10;
                break;

              case 9:
                _this2.$refs.error.open(_this2.$t('password_mismatch'));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    listToTree: function listToTree(list) {
      return _js_helpers_useful_js__WEBPACK_IMPORTED_MODULE_1__["default"].documentListToTree(list);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Menu",
  data: function data() {
    return {
      me: null
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = localStorage.getItem('user-token');

              if (!(token == null)) {
                _context.next = 5;
                break;
              }

              _this.$router.push({
                name: "Login"
              });

              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return _this.axios.post('/api/me').then(function (response) {
                if (!response.data.isUser) {
                  _this.$router.push({
                    name: "Login"
                  });
                } else {
                  _this.me = response.data;
                  _this.$i18n.locale = response.data.user.language;
                }
              })["catch"](function (error) {
                _this.$router.push({
                  name: "Login"
                });
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    logoutUser: function logoutUser() {
      localStorage.removeItem('user-token');
      this.$router.push({
        name: "Login"
      });
    },
    getMe: function getMe() {
      return this.me;
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/momentTZ.js":
/*!******************************************!*\
  !*** ./resources/js/helpers/momentTZ.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.setDefault('Europe/Moscow'));

/***/ }),

/***/ "./resources/js/helpers/useful.js":
/*!****************************************!*\
  !*** ./resources/js/helpers/useful.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers/momentTZ.js */ "./resources/js/helpers/momentTZ.js");

var useful = {
  getTimezones: function getTimezones() {
    return [{
      id: -1200,
      name: "UTC-12"
    }, {
      id: -1100,
      name: "UTC-11"
    }, {
      id: -1000,
      name: "UTC-10"
    }, {
      id: -930,
      name: "UTC-9:30"
    }, {
      id: -900,
      name: "UTC-9"
    }, {
      id: -800,
      name: "UTC-8"
    }, {
      id: -700,
      name: "UTC-7"
    }, {
      id: -600,
      name: "UTC-6"
    }, {
      id: -500,
      name: "UTC-5"
    }, {
      id: -400,
      name: "UTC-4"
    }, {
      id: -330,
      name: "UTC-3:30"
    }, {
      id: -300,
      name: "UTC-3"
    }, {
      id: -200,
      name: "UTC-2"
    }, {
      id: -100,
      name: "UTC-1"
    }, {
      id: 0,
      name: "UTC+0"
    }, {
      id: 100,
      name: "UTC+1"
    }, {
      id: 200,
      name: "UTC+2"
    }, {
      id: 300,
      name: "UTC+3"
    }, {
      id: 330,
      name: "UTC+3:30"
    }, {
      id: 400,
      name: "UTC+4"
    }, {
      id: 430,
      name: "UTC+4:30"
    }, {
      id: 500,
      name: "UTC+5"
    }, {
      id: 530,
      name: "UTC+5:30"
    }, {
      id: 545,
      name: "UTC+5:45"
    }, {
      id: 600,
      name: "UTC+6"
    }, {
      id: 630,
      name: "UTC+6:30"
    }, {
      id: 700,
      name: "UTC+7"
    }, {
      id: 800,
      name: "UTC+8"
    }, {
      id: 845,
      name: "UTC+8:45"
    }, {
      id: 900,
      name: "UTC+9"
    }, {
      id: 930,
      name: "UTC+9:30"
    }, {
      id: 1000,
      name: "UTC+10"
    }, {
      id: 1030,
      name: "UTC+10:30"
    }, {
      id: 1100,
      name: "UTC+11"
    }, {
      id: 1200,
      name: "UTC+12"
    }, {
      id: 1245,
      name: "UTC+12:45"
    }, {
      id: 1300,
      name: "UTC+13"
    }, {
      id: 1400,
      name: "UTC+14"
    }];
  },
  getAvatarDateClass: function getAvatarDateClass(d) {
    var it = (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).format('d');
    return "my_avatar_usmall my_avatar_" + it;
  },
  getDateDay: function getDateDay(d) {
    return (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).format('DD');
  },
  capitalizeFirstLetter: function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  getMonthName: function getMonthName(d) {
    _js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"].locale('ru');
    return this.capitalizeFirstLetter((0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).format('MMMM')).substring(0, 3);
  },
  getDayOfWeek: function getDayOfWeek(d) {
    _js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"].locale('ru');
    return this.capitalizeFirstLetter((0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).format('dd'));
  },
  getCurrentDate: function getCurrentDate() {
    return (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()).format('YYYY-MM-DD');
  },
  computedDateFormatted: function computedDateFormatted(d) {
    _js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"].locale('ru');

    if (d == null) {
      return "";
    }

    return this.capitalizeFirstLetter((0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).format('DD.MM.YYYY'));
  },
  getPlusOrMinusWeek: function getPlusOrMinusWeek(d, b) {
    if (b) {
      return (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(7, 'days');
    } else {
      return (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(-7, 'days');
    }
  },
  getScheduleDaysOfWeek: function getScheduleDaysOfWeek(d) {
    return [{
      id: 1,
      name: "Понедельник",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(0, 'days')
    }, {
      id: 2,
      name: "Вторник",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(1, 'days')
    }, {
      id: 3,
      name: "Среда",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(2, 'days')
    }, {
      id: 4,
      name: "Четверг",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(3, 'days')
    }, {
      id: 5,
      name: "Пятница",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(4, 'days')
    }, {
      id: 6,
      name: "Суббота",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(5, 'days')
    }, {
      id: 7,
      name: "Воскресенье",
      show: false,
      rows: [],
      schedule_date: (0,_js_helpers_momentTZ_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d).add(6, 'days')
    }];
  },
  documentListToTree: function documentListToTree(list) {
    var map = {},
        node,
        roots = [],
        i;

    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map

      list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      node.is_purpose = false;

      if (node.is_file) {
        if (node.purposes != null) {
          for (var ii in node.purposes) {
            var o = {};
            o.id = node.id + "_" + node.purposes[ii].id;
            o.purpose_id = node.purposes[ii].id;
            o.name = node.purposes[ii].name;
            o.children = [];
            o.is_file = false;
            o.is_purpose = true;

            if ('is_done' in node.purposes[ii]) {
              o.is_done = node.purposes[ii].is_done;
            }

            node.children.push(o);
          }
        }
      }

      if (node.parent_id !== null) {
        list[map[node.parent_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  },
  getPhoneLink: function getPhoneLink(p) {
    return "tel:" + p;
  },
  getMailLink: function getMailLink(p) {
    return "mailto:" + p;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useful);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/User/DictionaryEmployee.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/User/DictionaryEmployee.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DictionaryEmployee.vue?vue&type=template&id=163331ad& */ "./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad&");
/* harmony import */ var _DictionaryEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DictionaryEmployee.vue?vue&type=script&lang=js& */ "./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DictionaryEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__.render,
  _DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/DictionaryEmployee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Menu.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/User/Menu.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=43c6e5e8& */ "./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DictionaryEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DictionaryEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DictionaryEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Menu.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/User/Menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DictionaryEmployee_vue_vue_type_template_id_163331ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DictionaryEmployee.vue?vue&type=template&id=163331ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad&");


/***/ }),

/***/ "./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_43c6e5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=43c6e5e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/DictionaryEmployee.vue?vue&type=template&id=163331ad& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "v-app",
    { attrs: { light: "" } },
    [
      _c("Menu"),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _vm.dialogUser == true
            ? _c(
                "div",
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "" },
                      model: {
                        value: _vm.dialogUser,
                        callback: function ($$v) {
                          _vm.dialogUser = $$v
                        },
                        expression: "dialogUser",
                      },
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "text-h1" }),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                {
                                  attrs: { align: "center", justify: "center" },
                                },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { md: "auto" } },
                                    [
                                      _c(
                                        "v-avatar",
                                        { attrs: { size: "192px" } },
                                        [
                                          _c("v-img", {
                                            attrs: { src: _vm.user.image },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { md: "auto" } }, [
                                    _c("h1", [_vm._v(_vm._s(_vm.user.fio))]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _vm.user.positions != null &&
                                  _vm.user.positions.length != 0
                                    ? _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("h3", [
                                          _vm._v(
                                            _vm._s(_vm.$t("positions")) + ":"
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          _vm._l(
                                            _vm.user.positions,
                                            function (p, index) {
                                              return _c("li", { key: index }, [
                                                _c("h5", [
                                                  _vm._v(
                                                    _vm._s(p.department) +
                                                      " - " +
                                                      _vm._s(p.position)
                                                  ),
                                                ]),
                                              ])
                                            }
                                          ),
                                          0
                                        ),
                                      ])
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("h3", [
                                        _vm._v(
                                          _vm._s(_vm.$t("contacts")) + ":"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.user.place != null &&
                                      _vm.user.place != ""
                                        ? _c("h5", [
                                            _vm._v(
                                              _vm._s(_vm.$t("working_place")) +
                                                ": " +
                                                _vm._s(_vm.user.place)
                                            ),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.user.phone != null &&
                                      _vm.user.phone != ""
                                        ? _c("h5", [
                                            _vm._v(
                                              _vm._s(_vm.$t("phone")) +
                                                ": " +
                                                _vm._s(_vm.user.phone)
                                            ),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.user.phones != null &&
                                      _vm.user.phones.length != 0
                                        ? [
                                            _c("h5", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("phones_additional")
                                                ) + ":"
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              _vm._l(
                                                _vm.user.phones,
                                                function (p, index) {
                                                  return _c(
                                                    "li",
                                                    { key: index },
                                                    [
                                                      _c("h5", [
                                                        _vm._v(_vm._s(p.value)),
                                                      ]),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            ),
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.user.email != null &&
                                      _vm.user.email != ""
                                        ? _c("h5", [
                                            _vm._v(
                                              _vm._s(_vm.$t("email")) +
                                                ": " +
                                                _vm._s(_vm.user.email)
                                            ),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.user.emails != null &&
                                      _vm.user.emails.length != 0
                                        ? [
                                            _c("h5", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("emails_additional")
                                                ) + ":"
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              _vm._l(
                                                _vm.user.emails,
                                                function (p, index) {
                                                  return _c(
                                                    "li",
                                                    { key: index },
                                                    [
                                                      _c("h5", [
                                                        _vm._v(_vm._s(p.value)),
                                                      ]),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            ),
                                          ]
                                        : _vm._e(),
                                    ],
                                    2
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _vm.user.education != null &&
                                  _vm.user.education.length != 0
                                    ? _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("h3", [
                                          _vm._v(
                                            _vm._s(_vm.$t("education")) + ":"
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          _vm._l(
                                            _vm.user.education,
                                            function (e, index) {
                                              return _c("li", { key: index }, [
                                                _c("h5", [
                                                  _vm._v(
                                                    _vm._s(e.year) +
                                                      ", " +
                                                      _vm._s(e.description)
                                                  ),
                                                ]),
                                              ])
                                            }
                                          ),
                                          0
                                        ),
                                      ])
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(_vm.$t("additional")) + ":"
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.user.gender != null &&
                                    _vm.user.gender != ""
                                      ? _c("h5", [
                                          _vm._v(
                                            _vm._s(_vm.$t("gender")) +
                                              ": " +
                                              _vm._s(_vm.user.gender)
                                          ),
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("h5", [
                                      _vm._v(
                                        _vm._s(_vm.$t("dob")) +
                                          ": " +
                                          _vm._s(
                                            _vm._f("formatDate")(_vm.user.dob)
                                          )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.user.info != null && _vm.user.info != ""
                                      ? _c("h5", [
                                          _vm._v(
                                            _vm._s(_vm.$t("information")) +
                                              ": " +
                                              _vm._s(_vm.user.info)
                                          ),
                                        ])
                                      : _vm._e(),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function ($event) {
                                      _vm.dialogUser = false
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.$t("close")) +
                                      "\n                "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.items != null
            ? _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: _vm.$t("search"), clearable: "" },
                            model: {
                              value: _vm.search,
                              callback: function ($$v) {
                                _vm.search = $$v
                              },
                              expression: "search",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-treeview", {
                    attrs: { items: _vm.items, search: _vm.search },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "prepend",
                          fn: function (ref) {
                            var item = ref.item
                            var open = ref.open
                            return [
                              item.type == "department"
                                ? _c("v-icon", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          open
                                            ? "mdi-door-open"
                                            : "mdi-door-closed"
                                        ) +
                                        "\n                    "
                                    ),
                                  ])
                                : item.type == "user"
                                ? _c(
                                    "v-avatar",
                                    { attrs: { size: "24px" } },
                                    [
                                      _c("v-img", {
                                        attrs: { src: item.image },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]
                          },
                        },
                        {
                          key: "label",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.openDialog(item)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        width: "100%",
                                        "/*color": "#3f51b5!important",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            item["name_" + _vm.$i18n.locale]
                                          ) +
                                          "\n                        "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      4219066150
                    ),
                  }),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("ConfirmDlg", { ref: "confirm" }),
      _vm._v(" "),
      _c("InformationDlg", { ref: "information" }),
      _vm._v(" "),
      _c("ErrorDlg", { ref: "error" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Menu.vue?vue&type=template&id=43c6e5e8& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "nav",
    {
      staticClass: "navbar navbar-expand-lg navbar-dark bg-dark",
      attrs: { color: "#80B1F3", dark: "" },
    },
    [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: "/", href: "#" } },
            [_vm._v(_vm._s(_vm.$t("appname")))]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          { attrs: { dark: "", to: "/user/home" } },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("portals")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          { attrs: { dark: "", to: "/user/portal/bookmark" } },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("bookmarks")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          { attrs: { dark: "", to: "/user/categories" } },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("categories")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _vm.me != null && _vm.me.user.notification_type >= 2
            ? _c("v-spacer")
            : _vm._e(),
          _vm._v(" "),
          _vm.me != null && _vm.me.user.notification_type >= 2
            ? _c("v-menu", {
                attrs: { "offset-y": "" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: { dark: "", to: "/user/notification" },
                                },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("notifications")) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                  ],
                  null,
                  false,
                  3082067734
                ),
              })
            : _vm._e(),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          {
                            attrs: {
                              dark: "",
                              to: "/user/dictionary_employee",
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("dictionary_employee")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          { attrs: { dark: "", to: "/user/profile" } },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("profile_my")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-menu", {
            attrs: { "offset-y": "" },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function (ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _c(
                      "v-btn",
                      _vm._g(
                        _vm._b(
                          {
                            attrs: { dark: "" },
                            on: {
                              click: function ($event) {
                                return _vm.logoutUser()
                              },
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("logout")) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);