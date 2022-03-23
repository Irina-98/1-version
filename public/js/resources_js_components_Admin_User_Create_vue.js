(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_User_Create_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var token = localStorage.getItem('user-token');

    if (token == null) {
      this.$router.push({
        name: "Login"
      });
    } else {
      this.axios.post('/api/me').then(function (response) {
        if (!response.data.isAdmin) {
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
    }
  },
  methods: {
    logoutUser: function logoutUser() {
      localStorage.removeItem('user-token');
      this.$router.push({
        name: "Login"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_helpers_useful_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/helpers/useful.js */ "./resources/js/helpers/useful.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu */ "./resources/js/components/Admin/Menu.vue");


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
    Menu: _Menu__WEBPACK_IMPORTED_MODULE_3__["default"],
    ConfirmDlg: function ConfirmDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_ConfirmDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../Helper/ConfirmDlg */ "./resources/js/components/Helper/ConfirmDlg.vue"));
    },
    InformationDlg: function InformationDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_InformationDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../Helper/InformationDlg */ "./resources/js/components/Helper/InformationDlg.vue"));
    },
    ErrorDlg: function ErrorDlg() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Helper_ErrorDlg_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../Helper/ErrorDlg */ "./resources/js/components/Helper/ErrorDlg.vue"));
    }
  },
  mounted: function mounted() {
    this.timezones = _js_helpers_useful_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTimezones();
    this.roles = [{
      value: 'admin',
      name: this.$t('admin')
    }, {
      value: 'employee',
      name: this.$t('employee')
    }, {
      value: 'parent',
      name: this.$t('parent')
    }, {
      value: 'student',
      name: this.$t('student')
    }, {
      value: 'enrollee',
      name: this.$t('enrollee')
    }];
  },
  data: function data() {
    return {
      tab: '',
      menu: false,
      user: {
        email: "",
        password: "",
        portals: [],
        proles: [],
        ppermissions: [],
        role: [],
        image: null
      },
      portals: [],
      vportals: [],
      phones: [],
      emails: [],
      educations: [],
      timezones: [],
      profiles: [],
      pensions: [],
      directions: [],
      lessons: [],
      relationships: [],
      countries: [],
      regions: [],
      cities: [],
      departments: [],
      positions: [],
      departments_positions_users: [],
      employee_education: [],
      students: [],
      teachers: [],
      parents_students: [],
      employees_students: [],
      default_portal_roles: [],
      roles: []
    };
  },
  methods: {
    create: function create() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var config, fd, hs, key, j;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.confirm.open(_this.$t('confirm'), _this.$t('confirm_record_create'), 'create');

              case 2:
                if (!_context.sent) {
                  _context.next = 15;
                  break;
                }

                config = {
                  headers: {
                    'content-type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
                  }
                };
                fd = new FormData();
                hs = {
                  portals: [],
                  proles: [],
                  ppermissions: []
                }; //hportals = [], hproles = [], hppermissions = [];

                for (key in _this.user) {
                  if (key != 'portals' && key != 'proles' && key != 'ppermissions') {
                    fd.append(key, _this.user[key]);
                  } else {
                    for (j in _this.user[key]) {
                      hs[key].push(_this.user[key][j].id);
                    }
                  }
                }

                for (key in hs) {
                  fd.append(key, JSON.stringify(hs[key]));
                }

                fd.append("phones", JSON.stringify(_this.phones));
                fd.append("emails", JSON.stringify(_this.emails));
                fd.append("departments_positions_users", JSON.stringify(_this.departments_positions_users));
                fd.append("employee_education", JSON.stringify(_this.employee_education));
                fd.append("employees_students", JSON.stringify(_this.employees_students));
                fd.append("parents_students", JSON.stringify(_this.parents_students)); //fd.append("avatar", this.avatar);

                axios.post('/api/admin/user/create', fd, config).then(function (response) {//this.$router.push({name:"AdminUserList"})
                }.bind(_this));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onFileChange: function onFileChange(e) {
      this.user.image = e.target.files[0];
    },
    computedDateFormatted: function computedDateFormatted(d) {
      moment__WEBPACK_IMPORTED_MODULE_2___default().locale('ru');

      if (d == null) {
        return "";
      }

      return moment__WEBPACK_IMPORTED_MODULE_2___default()(d).format('DD.MM.YYYY');
    },
    addAdditionalPhone: function addAdditionalPhone() {
      this.phones.push({
        value: ""
      });
    },
    deleteAdditionalPhone: function deleteAdditionalPhone(i) {
      this.phones.splice(i, 1);
    },
    addAdditionalEmail: function addAdditionalEmail() {
      this.emails.push({
        value: ""
      });
    },
    deleteAdditionalEmail: function deleteAdditionalEmail(i) {
      this.emails.splice(i, 1);
    },
    addEmployeeEducation: function addEmployeeEducation() {
      this.employee_education.push({
        year: "",
        description: ""
      });
    },
    deleteEmployeeEducation: function deleteEmployeeEducation(i) {
      this.employee_education.splice(i, 1);
    },
    addAdditionalDepartmentUserPosition: function addAdditionalDepartmentUserPosition() {
      this.departments_positions_users.push({
        department_id: null,
        position_id: null
      });
    },
    deleteAdditionalDepartmentUserPosition: function deleteAdditionalDepartmentUserPosition(i) {
      this.departments_positions_users.splice(i, 1);
    },
    addParentStudent: function addParentStudent() {
      this.parents_students.push({
        student_id: null,
        relationship_id: null
      });
    },
    deleteParentStudent: function deleteParentStudent(i) {
      this.parents_students.splice(i, 1);
    },
    addEmployeeStudent: function addEmployeeStudent() {
      this.employees_students.push({
        employee_id: null,
        type_id: 1
      });
    },
    deleteEmployeeStudent: function deleteEmployeeStudent(i) {
      this.employees_students.splice(i, 1);
    },
    countryChange: function countryChange() {
      this.regions = [];
      this.cities = [];

      if (this.user.enrollee_country_id != null) {
        axios.post('/api/admin/region/list_all_by_country/' + this.user.enrollee_country_id).then(function (response) {
          this.regions = response.data;
        }.bind(this));
      }
    },
    regionChange: function regionChange() {
      this.cities = [];

      if (this.user.enrollee_region_id != null) {
        axios.post('/api/admin/city/list_all_by_region/' + this.user.enrollee_region_id).then(function (response) {
          this.cities = response.data;
        }.bind(this));
      }
    },
    getUserFio: function getUserFio(item) {
      return item['lastname_' + this.$i18n.locale] + ' ' + item['firstname_' + this.$i18n.locale] + ' ' + item['middlename_' + this.$i18n.locale];
    },
    roleChanged: function roleChanged(r) {
      this.user.portals = [];

      for (var role_i in this.user.role) {
        for (var dpr_i in this.default_portal_roles) {
          if (this.user.role[role_i] == dpr_i) {
            for (var portals_i in this.default_portal_roles[dpr_i]['portals']) {
              for (var p_i in this.portals) {
                if (this.portals[p_i].id == this.default_portal_roles[dpr_i]['portals'][portals_i]) {
                  var isNew = true;

                  for (var pu_i in this.user.portals) {
                    if (this.user.portals[pu_i].id == this.portals[p_i].id) {
                      isNew = false;
                    }
                  }

                  if (isNew) {
                    this.user.portals.push(this.portals[p_i]);
                  }
                }
              }
            }
          }
        }
      }

      this.user.proles = [];

      for (var _role_i in this.user.role) {
        for (var _dpr_i in this.default_portal_roles) {
          if (this.user.role[_role_i] == _dpr_i) {
            for (var proles_i in this.default_portal_roles[_dpr_i]['proles']) {
              for (var _p_i in this.user.portals) {
                for (var pr_i in this.user.portals[_p_i]['proles']) {
                  if (this.user.portals[_p_i]['proles'][pr_i].id == this.default_portal_roles[_dpr_i]['proles'][proles_i]) {
                    var _isNew = true;

                    for (var _pu_i in this.user.proles) {
                      if (this.user.proles[_pu_i].id == this.user.portals[_p_i]['proles'][pr_i].id) {
                        _isNew = false;
                      }
                    }

                    if (_isNew) {
                      this.user.proles.push(this.user.portals[_p_i]['proles'][pr_i]);
                    }
                  }
                }
              }
            }
          }
        }
      }

      this.user.ppermissions = [];

      for (var _role_i2 in this.user.role) {
        for (var _dpr_i2 in this.default_portal_roles) {
          if (this.user.role[_role_i2] == _dpr_i2) {
            for (var ppermission_i in this.default_portal_roles[_dpr_i2]['ppermissions']) {
              for (var _p_i2 in this.user.portals) {
                for (var _pr_i in this.user.portals[_p_i2]['proles']) {
                  for (var pp_i in this.user.portals[_p_i2]['proles'][_pr_i]['ppermissions']) {
                    if (this.user.portals[_p_i2]['proles'][_pr_i]['ppermissions'][pp_i].id == this.default_portal_roles[_dpr_i2]['ppermissions'][ppermission_i]) {
                      var _isNew2 = true;

                      for (var _pu_i2 in this.user.ppermissions) {
                        if (this.user.ppermissions[_pu_i2].id == this.user.portals[_p_i2]['proles'][_pr_i]['ppermissions'][pp_i].id) {
                          _isNew2 = false;
                        }
                      }

                      if (_isNew2) {
                        this.user.ppermissions.push(this.user.portals[_p_i2]['proles'][_pr_i]['ppermissions'][pp_i]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  created: function created() {
    axios.post('/api/admin/portal/list_all').then(function (response) {
      this.portals = response.data;
    }.bind(this));
    axios.post('/api/admin/education/list_all').then(function (response) {
      this.educations = response.data;
    }.bind(this));
    axios.post('/api/admin/profile/list_all').then(function (response) {
      this.profiles = response.data;
    }.bind(this));
    axios.post('/api/admin/pension/list_all').then(function (response) {
      this.pensions = response.data;
    }.bind(this));
    axios.post('/api/admin/lesson/list_all').then(function (response) {
      this.lessons = response.data;
    }.bind(this));
    axios.post('/api/admin/relationship/list_all').then(function (response) {
      this.relationships = response.data;
    }.bind(this));
    axios.post('/api/admin/direction/list_all').then(function (response) {
      this.directions = response.data;
    }.bind(this));
    axios.post('/api/admin/country/list_all').then(function (response) {
      this.countries = response.data;
    }.bind(this));
    axios.post('/api/admin/department/list_all').then(function (response) {
      this.departments = response.data;
    }.bind(this));
    axios.post('/api/admin/position/list_all').then(function (response) {
      this.positions = response.data;
    }.bind(this));
    axios.post('/api/admin/user/list_by_role_simple/student').then(function (response) {
      this.students = response.data;
    }.bind(this));
    axios.post('/api/admin/user/list_by_role_simple/employee').then(function (response) {
      this.teachers = response.data;
    }.bind(this));
    axios.post('/api/admin/user/get_all_default_portal_roles').then(function (response) {
      this.default_portal_roles = response.data;
    }.bind(this));
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

/***/ "./resources/js/components/Admin/Menu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Admin/Menu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=9771f52c& */ "./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Menu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/User/Create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Admin/User/Create.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=5a8c8e25& */ "./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/User/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_9771f52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Menu.vue?vue&type=template&id=9771f52c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c&");


/***/ }),

/***/ "./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_5a8c8e25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=5a8c8e25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Menu.vue?vue&type=template&id=9771f52c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navbar navbar-expand-lg navbar-dark bg-dark" },
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
          _c(
            "v-menu",
            {
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
                            { attrs: { dark: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("users")) +
                              "\n                "
                          ),
                        ]
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/user/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("users")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/notification/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("notifications")))]
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
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
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
                            { attrs: { dark: "" } },
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
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/category/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("categories")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/portal/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("portals")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/prole/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("roles")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/ppermission/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("permissions")))]
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
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
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
                            { attrs: { dark: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("dictionaries")) +
                              "\n                "
                          ),
                        ]
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/department/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("departments")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/position/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("positions")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/education/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("education")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/profile/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("education_profiles")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/pension/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("pension_types")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/lesson/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("subjects")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/direction/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("education_directions")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/status/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("Статусы")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/relationship/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("roles_to_enrollee")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/country/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("countries")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/region/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("regions")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-0" }),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-item nav-link",
                              attrs: {
                                "exact-active-class": "active",
                                to: "/admin/city/list",
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("cities")))]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/Create.vue?vue&type=template&id=5a8c8e25& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    [
      _c("Menu"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mt-5" },
        [
          _c(
            "v-tabs",
            {
              attrs: {
                "fixed-tabs": "",
                "background-color": "indigo",
                dark: "",
              },
              model: {
                value: _vm.tab,
                callback: function ($$v) {
                  _vm.tab = $$v
                },
                expression: "tab",
              },
            },
            [
              _c("v-tab", { attrs: { href: "#tab-1" } }, [
                _vm._v(_vm._s(_vm.$t("profile"))),
              ]),
              _vm._v(" "),
              _c("v-tab", { attrs: { href: "#tab-1-1" } }, [
                _vm._v(_vm._s(_vm.$t("additional"))),
              ]),
              _vm._v(" "),
              _c("v-tab", { attrs: { href: "#tab-2" } }, [
                _vm._v(_vm._s(_vm.$t("portals"))),
              ]),
              _vm._v(" "),
              _c("v-tab", { attrs: { href: "#tab-3" } }, [
                _vm._v(_vm._s(_vm.$t("roles"))),
              ]),
              _vm._v(" "),
              _c("v-tab", { attrs: { href: "#tab-4" } }, [
                _vm._v(_vm._s(_vm.$t("permissions"))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.create.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c("v-tab-item", { attrs: { value: "tab-1" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(_vm._s(_vm.$t("image")))]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "file" },
                            on: { change: _vm.onFileChange },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(_vm._s(_vm.$t("role")))]),
                            _vm._v(" "),
                            _c("v-select", {
                              staticClass: "form-control",
                              attrs: {
                                multiple: "",
                                clearable: "",
                                label: _vm.$t("choose_items"),
                                items: _vm.roles,
                                "item-value": "value",
                                "item-text": "name",
                              },
                              on: { change: _vm.roleChanged },
                              model: {
                                value: _vm.user.role,
                                callback: function ($$v) {
                                  _vm.$set(_vm.user, "role", $$v)
                                },
                                expression: "user.role",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("login")) +
                                " / " +
                                _vm._s(_vm.$t("email"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.email,
                                expression: "user.email",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.email },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "email", $event.target.value)
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(_vm._s(_vm.$t("password")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("last_name")) +
                                ". " +
                                _vm._s(_vm.$t("ru"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.lastname_ru,
                                expression: "user.lastname_ru",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.lastname_ru },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "lastname_ru",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("first_name")) +
                                ". " +
                                _vm._s(_vm.$t("ru"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.firstname_ru,
                                expression: "user.firstname_ru",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.firstname_ru },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "firstname_ru",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("middle_name")) +
                                ". " +
                                _vm._s(_vm.$t("ru"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.middlename_ru,
                                expression: "user.middlename_ru",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.middlename_ru },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "middlename_ru",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("last_name")) +
                                ". " +
                                _vm._s(_vm.$t("en"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.lastname_en,
                                expression: "user.lastname_en",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.lastname_en },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "lastname_en",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("first_name")) +
                                ". " +
                                _vm._s(_vm.$t("en"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.firstname_en,
                                expression: "user.firstname_en",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.firstname_en },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "firstname_en",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(
                              _vm._s(_vm.$t("middle_name")) +
                                ". " +
                                _vm._s(_vm.$t("ru"))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.middlename_en,
                                expression: "user.middlename_en",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.middlename_en },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "middlename_en",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(_vm._s(_vm.$t("gender")))]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.gender,
                                  expression: "user.gender",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.user,
                                    "gender",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "1", selected: "" } },
                                [_vm._v(_vm._s(_vm.$t("male")))]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v(_vm._s(_vm.$t("female"))),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(_vm._s(_vm.$t("dob")))]),
                            _vm._v(" "),
                            _c(
                              "v-menu",
                              {
                                attrs: {
                                  "close-on-content-click": true,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "min-width": "auto",
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function (ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  value:
                                                    _vm.computedDateFormatted(
                                                      _vm.user.dob
                                                    ),
                                                  label: "" + _vm.$t("dob"),
                                                  "prepend-icon":
                                                    "mdi-calendar",
                                                  readonly: "",
                                                },
                                              },
                                              "v-text-field",
                                              attrs,
                                              false
                                            ),
                                            on
                                          )
                                        ),
                                      ]
                                    },
                                  },
                                ]),
                              },
                              [
                                _vm._v(" "),
                                _c("v-date-picker", {
                                  attrs: {
                                    "no-title": "",
                                    scrollable: "",
                                    "first-day-of-week": 1,
                                    locale: "ru",
                                  },
                                  model: {
                                    value: _vm.user.dob,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.user, "dob", $$v)
                                    },
                                    expression: "user.dob",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(_vm._s(_vm.$t("phone")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.phone,
                                expression: "user.phone",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.phone },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "phone", $event.target.value)
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("phones_additional"))),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { id: "id_phones" } },
                            [
                              _vm._l(this.phones, function (item, i) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      key: "add-phone-" + i,
                                      staticClass: "row",
                                    },
                                    [
                                      _c("div", { staticClass: "col-9" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.value,
                                                  expression: "item.value",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: { type: "text" },
                                              domProps: { value: item.value },
                                              on: {
                                                input: function ($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "value",
                                                    $event.target.value
                                                  )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-3" }, [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary my_btn_fonts",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteAdditionalPhone(
                                                  i
                                                )
                                              },
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("delete")))]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 mb-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary my_btn_fonts",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.addAdditionalPhone()
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$t("add")))]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("emails_additional"))),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { id: "id_emails" } },
                            [
                              _vm._l(this.emails, function (item, i) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      key: "add-email-" + i,
                                      staticClass: "row",
                                    },
                                    [
                                      _c("div", { staticClass: "col-9" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.value,
                                                  expression: "item.value",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: { type: "text" },
                                              domProps: { value: item.value },
                                              on: {
                                                input: function ($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "value",
                                                    $event.target.value
                                                  )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-3" }, [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary my_btn_fonts",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteAdditionalEmail(
                                                  i
                                                )
                                              },
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("delete")))]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 mb-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary my_btn_fonts",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.addAdditionalEmail()
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$t("add")))]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c("v-tab-item", { attrs: { value: "tab-1-1" } }, [
                    _vm.user.role.indexOf("employee") !== -1
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.$t("employee"))),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("working_place"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.employee_place,
                                    expression: "user.employee_place",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.employee_place },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "employee_place",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("positions"))),
                                ]),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.departments_positions_users,
                                  function (item, i) {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          key: "department-position-user-" + i,
                                          staticClass: "row",
                                        },
                                        [
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.departments,
                                                    label:
                                                      "" + _vm.$t("department"),
                                                    "item-text":
                                                      "" +
                                                      ("name_" +
                                                        _vm.$i18n.locale),
                                                    "item-value": "id",
                                                  },
                                                  model: {
                                                    value: item.department_id,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "department_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.department_id",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.positions,
                                                    label:
                                                      "" + _vm.$t("position"),
                                                    "item-text":
                                                      "" +
                                                      ("name_" +
                                                        _vm.$i18n.locale),
                                                    "item-value": "id",
                                                  },
                                                  model: {
                                                    value: item.position_id,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "position_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.position_id",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary my_btn_fonts",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.deleteAdditionalDepartmentUserPosition(
                                                      i
                                                    )
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("delete")))]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  }
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12 mb-2" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary my_btn_fonts",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.addAdditionalDepartmentUserPosition()
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("add")))]
                                    ),
                                  ]),
                                ]),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("education"))),
                                ]),
                                _vm._v(" "),
                                _vm._l(
                                  this.employee_education,
                                  function (item, i) {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          key: "employee_education-" + i,
                                          staticClass: "row",
                                        },
                                        [
                                          _c("div", { staticClass: "col-9" }, [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("year"))
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item.year,
                                                      expression: "item.year",
                                                    },
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { type: "text" },
                                                  domProps: {
                                                    value: item.year,
                                                  },
                                                  on: {
                                                    input: function ($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        item,
                                                        "year",
                                                        $event.target.value
                                                      )
                                                    },
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col-3" }, [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary my_btn_fonts",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.deleteEmployeeEducation(
                                                      i
                                                    )
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("delete")))]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("label", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("description")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: item.description,
                                                      expression:
                                                        "item.description",
                                                    },
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: { type: "text" },
                                                  domProps: {
                                                    value: item.description,
                                                  },
                                                  on: {
                                                    input: function ($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        item,
                                                        "description",
                                                        $event.target.value
                                                      )
                                                    },
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  }
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12 mb-2" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary my_btn_fonts",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.addEmployeeEducation()
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("add")))]
                                    ),
                                  ]),
                                ]),
                              ],
                              2
                            ),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.role.indexOf("parent") !== -1
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.$t("parent"))),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("passport_data"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_passport,
                                    expression: "user.parent_passport",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.parent_passport },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_passport",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_register"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_address_register,
                                    expression: "user.parent_address_register",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.parent_address_register,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_address_register",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_living"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_address_living,
                                    expression: "user.parent_address_living",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.parent_address_living,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_address_living",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_delivery"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_address_postal,
                                    expression: "user.parent_address_postal",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.parent_address_postal,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_address_postal",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("timezone"))),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.timezones,
                                    label: "" + _vm.$t("timezone"),
                                    "item-text": "name",
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.parent_timezone,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.user, "parent_timezone", $$v)
                                    },
                                    expression: "user.parent_timezone",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(_vm._s(_vm.$t("snils")))]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_snils,
                                    expression: "user.parent_snils",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.parent_snils },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_snils",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(_vm._s(_vm.$t("inn")))]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.parent_inn,
                                    expression: "user.parent_inn",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.parent_inn },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "parent_inn",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v(_vm._s(_vm.$t("kids")))]),
                                _vm._v(" "),
                                _vm._l(_vm.parents_students, function (it, i) {
                                  return [
                                    _c(
                                      "div",
                                      {
                                        key: "parent_student-" + i,
                                        staticClass: "row",
                                      },
                                      [
                                        _c("div", { staticClass: "col-12" }, [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  items: _vm.students,
                                                  label: "" + _vm.$t("kid"),
                                                  "item-value": "id",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "selection",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _vm._v(
                                                            "\n                                                        " +
                                                              _vm._s(
                                                                _vm.getUserFio(
                                                                  item
                                                                )
                                                              ) +
                                                              "\n                                                    "
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                    {
                                                      key: "item",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _vm._v(
                                                            "\n                                                        " +
                                                              _vm._s(
                                                                _vm.getUserFio(
                                                                  item
                                                                )
                                                              ) +
                                                              "\n                                                    "
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: it.student_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      it,
                                                      "student_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "it.student_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-12" }, [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  items: _vm.relationships,
                                                  label:
                                                    "" + _vm.$t("relationship"),
                                                  "item-text":
                                                    "" +
                                                    ("name_" +
                                                      _vm.$i18n.locale),
                                                  "item-value": "id",
                                                },
                                                model: {
                                                  value: it.relationship_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      it,
                                                      "relationship_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "it.relationship_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-12" }, [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary my_btn_fonts",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.deleteParentStudent(
                                                    i
                                                  )
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(_vm.$t("delete")))]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12 mb-2" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary my_btn_fonts",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.addParentStudent()
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("add")))]
                                    ),
                                  ]),
                                ]),
                              ],
                              2
                            ),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.role.indexOf("student") !== -1
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.$t("student"))),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("zoom_account"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_zoom,
                                    expression: "user.student_zoom",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.student_zoom },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_zoom",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("year_admission"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_year_addmission,
                                    expression: "user.student_year_addmission",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_year_addmission,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_year_addmission",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("master_current"))),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.teachers,
                                    label: "" + _vm.$t("master_current"),
                                    "item-value": "id",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "selection",
                                        fn: function (ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.getUserFio(item)) +
                                                "\n                                    "
                                            ),
                                          ]
                                        },
                                      },
                                      {
                                        key: "item",
                                        fn: function (ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.getUserFio(item)) +
                                                "\n                                    "
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    false,
                                    1642606140
                                  ),
                                  model: {
                                    value: _vm.user.student_teacher_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "student_teacher_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.student_teacher_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("education_profile_current"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.profiles,
                                    label:
                                      "" + _vm.$t("education_profile_current"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.student_profile_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "student_profile_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.student_profile_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("pension_type_current"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.pensions,
                                    label: "" + _vm.$t("pension_type_current"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.student_pension_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "student_pension_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.student_pension_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("address_living_campus_current")
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_address_campus,
                                    expression: "user.student_address_campus",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_address_campus,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_address_campus",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("housemasters_current"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.employees_students,
                                  function (it, i) {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          key: "employees-students-" + i,
                                          staticClass: "row",
                                        },
                                        [
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.teachers,
                                                    label:
                                                      _vm.$t("housemaster"),
                                                    "item-value": "id",
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "selection",
                                                        fn: function (ref) {
                                                          var item = ref.item
                                                          return [
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.getUserFio(
                                                                    item
                                                                  )
                                                                ) +
                                                                "\n                                                    "
                                                            ),
                                                          ]
                                                        },
                                                      },
                                                      {
                                                        key: "item",
                                                        fn: function (ref) {
                                                          var item = ref.item
                                                          return [
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.getUserFio(
                                                                    item
                                                                  )
                                                                ) +
                                                                "\n                                                    "
                                                            ),
                                                          ]
                                                        },
                                                      },
                                                    ],
                                                    null,
                                                    true
                                                  ),
                                                  model: {
                                                    value: it.employee_id,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        it,
                                                        "employee_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "it.employee_id",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "col-12" }, [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary my_btn_fonts",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.deleteEmployeeStudent(
                                                      i
                                                    )
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("delete")))]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  }
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12 mb-2" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary my_btn_fonts",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.addEmployeeStudent()
                                          },
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("add")))]
                                    ),
                                  ]),
                                ]),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_register"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_address_register,
                                    expression: "user.student_address_register",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_address_register,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_address_register",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_living"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_address_living,
                                    expression: "user.student_address_living",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_address_living,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_address_living",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("address_living_additional"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_address_additional,
                                    expression:
                                      "user.student_address_additional",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_address_additional,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_address_additional",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("number_pass"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_number_pass,
                                    expression: "user.student_number_pass",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_number_pass,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_pass",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("number_food_order"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_number_food,
                                    expression: "user.student_number_food",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_number_food,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_food",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("number_food_table"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_number_table,
                                    expression: "user.student_number_table",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_number_table,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_table",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("number_locker_academic"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.user.student_number_locker_academic,
                                    expression:
                                      "user.student_number_locker_academic",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value:
                                    _vm.user.student_number_locker_academic,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_locker_academic",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("number_locker_wardrobe"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.user.student_number_locker_wardrobe,
                                    expression:
                                      "user.student_number_locker_wardrobe",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value:
                                    _vm.user.student_number_locker_wardrobe,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_locker_wardrobe",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("number_locker_art"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.student_number_locker_art,
                                    expression:
                                      "user.student_number_locker_art",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.student_number_locker_art,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "student_number_locker_art",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.role.indexOf("enrollee") !== -1
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.$t("enrollee"))),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("crm_lead_id"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_crm_lead_id,
                                    expression: "user.enrollee_crm_lead_id",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_crm_lead_id,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_crm_lead_id",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("country"))),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.countries,
                                    label: _vm.$t("country"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  on: { change: _vm.countryChange },
                                  model: {
                                    value: _vm.user.enrollee_country_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_country_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_country_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("country_another"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_country_other,
                                    expression: "user.enrollee_country_other",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_country_other,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_country_other",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v(_vm._s(_vm.$t("region")))]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.regions,
                                    label: _vm.$t("region"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  on: { change: _vm.regionChange },
                                  model: {
                                    value: _vm.user.enrollee_region_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_region_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_region_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("region_another"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_region_other,
                                    expression: "user.enrollee_region_other",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_region_other,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_region_other",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [_vm._v(_vm._s(_vm.$t("city")))]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.cities,
                                    label: _vm.$t("city"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_city_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_city_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_city_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("city_another"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_city_other,
                                    expression: "user.enrollee_city_other",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_city_other,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_city_other",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("school_current"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_school_current,
                                    expression: "user.enrollee_school_current",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_school_current,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_school_current",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("class_admission"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_class_addmission,
                                    expression:
                                      "user.enrollee_class_addmission",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_class_addmission,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_class_addmission",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("address_register"))),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_address_register,
                                    expression:
                                      "user.enrollee_address_register",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_address_register,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_address_register",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(_vm._s(_vm.$t("vk_link")))]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_vk,
                                    expression: "user.enrollee_vk",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.user.enrollee_vk },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_vk",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(_vm._s(_vm.$t("education_profile"))),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.profiles,
                                    label: _vm.$t("education_profile"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_profile_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_profile_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_profile_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("subject_intresting_first"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.lessons,
                                    label: _vm.$t("subject_intresting_first"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_lesson_first_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_lesson_first_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_lesson_first_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("subject_intresting_second"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.lessons,
                                    label: _vm.$t("subject_intresting_second"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_lesson_second_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_lesson_second_id",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "user.enrollee_lesson_second_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("subject_intresting_third"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.lessons,
                                    label: _vm.$t("subject_intresting_third"),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_lesson_third_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_lesson_third_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_lesson_third_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("education_direction_preferable")
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.directions,
                                    label: _vm.$t(
                                      "education_direction_preferable"
                                    ),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value: _vm.user.enrollee_direction_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_direction_id",
                                        $$v
                                      )
                                    },
                                    expression: "user.enrollee_direction_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("representative")) +
                                    ": " +
                                    _vm._s(_vm.$t("fio"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_agent_fio,
                                    expression: "user.enrollee_agent_fio",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_agent_fio,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_agent_fio",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(_vm.$t("representative")) +
                                      ": " +
                                      _vm._s(_vm.$t("roles_to_enrollee"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.relationships,
                                    label:
                                      "" +
                                      (_vm.$t("representative") +
                                        ":" +
                                        _vm.$t("roles_to_enrollee")),
                                    "item-text":
                                      "" + ("name_" + _vm.$i18n.locale),
                                    "item-value": "id",
                                  },
                                  model: {
                                    value:
                                      _vm.user.enrollee_agent_relationship_id,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.user,
                                        "enrollee_agent_relationship_id",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "user.enrollee_agent_relationship_id",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("representative")) +
                                    ": " +
                                    _vm._s(_vm.$t("phone"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_agent_phone,
                                    expression: "user.enrollee_agent_phone",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_agent_phone,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_agent_phone",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("representative")) +
                                    ": " +
                                    _vm._s(_vm.$t("email"))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.enrollee_agent_email,
                                    expression: "user.enrollee_agent_email",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.user.enrollee_agent_email,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "enrollee_agent_email",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c(
                    "v-tab-item",
                    { attrs: { value: "tab-2" } },
                    [
                      _c(
                        "v-list",
                        { attrs: { shaped: "" } },
                        [
                          _c(
                            "v-list-item-group",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.user.portals,
                                callback: function ($$v) {
                                  _vm.$set(_vm.user, "portals", $$v)
                                },
                                expression: "user.portals",
                              },
                            },
                            [
                              _vm._l(_vm.portals, function (item, i) {
                                return [
                                  !item
                                    ? _c("v-divider", { key: "divider-" + i })
                                    : _c("v-list-item", {
                                        key: item.id,
                                        attrs: {
                                          value: item,
                                          "active-class":
                                            "deep-purple--text text--accent-4",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var active = ref.active
                                                return [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c(
                                                        "v-list-item-title",
                                                        [
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                item[
                                                                  "name_" +
                                                                    _vm.$i18n
                                                                      .locale
                                                                ]
                                                              )
                                                            ),
                                                          ],
                                                        ],
                                                        2
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        attrs: {
                                                          "input-value": active,
                                                          color:
                                                            "deep-purple accent-4",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                ]
                              }),
                            ],
                            2
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
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c(
                    "v-tab-item",
                    { attrs: { value: "tab-3" } },
                    [
                      _c(
                        "v-list",
                        { attrs: { shaped: "" } },
                        [
                          _c(
                            "v-list-item-group",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.user.proles,
                                callback: function ($$v) {
                                  _vm.$set(_vm.user, "proles", $$v)
                                },
                                expression: "user.proles",
                              },
                            },
                            [
                              _vm._l(_vm.user.portals, function (item, i) {
                                return [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item["name_" + _vm.$i18n.locale]) +
                                      "\n                            "
                                  ),
                                  _vm._l(item.proles, function (prole) {
                                    return [
                                      _c("v-list-item", {
                                        key: prole.id,
                                        attrs: {
                                          value: prole,
                                          "active-class":
                                            "deep-purple--text text--accent-4",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var active = ref.active
                                                return [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          textContent: _vm._s(
                                                            prole.name
                                                          ),
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-action",
                                                    [
                                                      _c("v-checkbox", {
                                                        attrs: {
                                                          "input-value": active,
                                                          color:
                                                            "deep-purple accent-4",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider", { key: "divider-" + i }),
                                ]
                              }),
                            ],
                            2
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
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c(
                    "v-tab-item",
                    { attrs: { value: "tab-4" } },
                    [
                      _c(
                        "v-list",
                        { attrs: { shaped: "" } },
                        [
                          _c(
                            "v-list-item-group",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.user.ppermissions,
                                callback: function ($$v) {
                                  _vm.$set(_vm.user, "ppermissions", $$v)
                                },
                                expression: "user.ppermissions",
                              },
                            },
                            [
                              _vm._l(_vm.user.portals, function (item, i) {
                                return [
                                  _c("div", { key: "div-" + i }, [
                                    _vm._v(
                                      _vm._s(item["name_" + _vm.$i18n.locale])
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.user.proles, function (prole, j) {
                                    return [
                                      item.id == prole.portal_id
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                key: "div-" + i + "-" + j,
                                                staticStyle: {
                                                  "margin-left": "10px",
                                                },
                                              },
                                              [_vm._v(_vm._s(prole.name))]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(
                                              prole.ppermissions,
                                              function (ppermission, k) {
                                                return [
                                                  _c("v-list-item", {
                                                    key:
                                                      "ppermission-" +
                                                      i +
                                                      "-" +
                                                      j +
                                                      "-" +
                                                      k,
                                                    attrs: {
                                                      value: ppermission,
                                                      "active-class":
                                                        "deep-purple--text text--accent-4",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var active =
                                                              ref.active
                                                            return [
                                                              _c(
                                                                "v-list-item-content",
                                                                [
                                                                  _c(
                                                                    "v-list-item-title",
                                                                    {
                                                                      domProps:
                                                                        {
                                                                          textContent:
                                                                            _vm._s(
                                                                              ppermission.name
                                                                            ),
                                                                        },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item-action",
                                                                [
                                                                  _c(
                                                                    "v-checkbox",
                                                                    {
                                                                      attrs: {
                                                                        "input-value":
                                                                          active,
                                                                        color:
                                                                          "deep-purple accent-4",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ]
                                                          },
                                                        },
                                                      ],
                                                      null,
                                                      true
                                                    ),
                                                  }),
                                                ]
                                              }
                                            ),
                                          ]
                                        : _vm._e(),
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider", { key: "divider-" + i }),
                                ]
                              }),
                            ],
                            2
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
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary my_btn_fonts",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.create()
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("save")))]
              ),
            ]),
          ]),
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



/***/ })

}]);