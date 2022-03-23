const Login = () => import('./components/Login.vue')
const Token = () => import('./components/Token.vue')
const Forgot = () => import('./components/Forgot.vue')
const Restore = () => import('./components/Restore.vue')

const AdminUserList = () => import('./components/Admin/User/List.vue')
const AdminUserCreate = () => import('./components/Admin/User/Create.vue')
const AdminUserUpdate = () => import('./components/Admin/User/Update.vue')

const AdminCategoryList = () => import('./components/Admin/Category/List.vue')
const AdminCategoryCreate = () => import('./components/Admin/Category/Create.vue')
const AdminCategoryUpdate = () => import('./components/Admin/Category/Update.vue')

const AdminPortalList = () => import('./components/Admin/Portal/List.vue')
const AdminPortalCreate = () => import('./components/Admin/Portal/Create.vue')
const AdminPortalUpdate = () => import('./components/Admin/Portal/Update.vue')

const AdminProleList = () => import('./components/Admin/Prole/List.vue')
const AdminProleCreate = () => import('./components/Admin/Prole/Create.vue')
const AdminProleUpdate = () => import('./components/Admin/Prole/Update.vue')

const AdminPpermissionList = () => import('./components/Admin/Ppermission/List.vue')
const AdminPpermissionCreate = () => import('./components/Admin/Ppermission/Create.vue')
const AdminPpermissionUpdate = () => import('./components/Admin/Ppermission/Update.vue')

const AdminDepartmentList = () => import('./components/Admin/Department/List.vue')
const AdminDepartmentCreate = () => import('./components/Admin/Department/Create.vue')
const AdminDepartmentUpdate = () => import('./components/Admin/Department/Update.vue')

const AdminPositionList = () => import('./components/Admin/Position/List.vue')
const AdminPositionCreate = () => import('./components/Admin/Position/Create.vue')
const AdminPositionUpdate = () => import('./components/Admin/Position/Update.vue')

const AdminEducationList = () => import('./components/Admin/Education/List.vue')
const AdminEducationCreate = () => import('./components/Admin/Education/Create.vue')
const AdminEducationUpdate = () => import('./components/Admin/Education/Update.vue')

const AdminProfileList = () => import('./components/Admin/Profile/List.vue')
const AdminProfileCreate = () => import('./components/Admin/Profile/Create.vue')
const AdminProfileUpdate = () => import('./components/Admin/Profile/Update.vue')

const AdminPensionList = () => import('./components/Admin/Pension/List.vue')
const AdminPensionCreate = () => import('./components/Admin/Pension/Create.vue')
const AdminPensionUpdate = () => import('./components/Admin/Pension/Update.vue')

const AdminLessonList = () => import('./components/Admin/Lesson/List.vue')
const AdminLessonCreate = () => import('./components/Admin/Lesson/Create.vue')
const AdminLessonUpdate = () => import('./components/Admin/Lesson/Update.vue')

const AdminDirectionList = () => import('./components/Admin/Direction/List.vue')
const AdminDirectionCreate = () => import('./components/Admin/Direction/Create.vue')
const AdminDirectionUpdate = () => import('./components/Admin/Direction/Update.vue')


const AdminStatusList = () => import('./components/Admin/Status/List.vue')
const AdminStatusCreate = () => import('./components/Admin/Status/Create.vue')
const AdminStatusUpdate = () => import('./components/Admin/Status/Update.vue')


const AdminRelationshipList = () => import('./components/Admin/Relationship/List.vue')
const AdminRelationshipCreate = () => import('./components/Admin/Relationship/Create.vue')
const AdminRelationshipUpdate = () => import('./components/Admin/Relationship/Update.vue')

const AdminCountryList = () => import('./components/Admin/Country/List.vue')
const AdminCountryCreate = () => import('./components/Admin/Country/Create.vue')
const AdminCountryUpdate = () => import('./components/Admin/Country/Update.vue')

const AdminRegionList = () => import('./components/Admin/Region/List.vue')
const AdminRegionCreate = () => import('./components/Admin/Region/Create.vue')
const AdminRegionUpdate = () => import('./components/Admin/Region/Update.vue')

const AdminCityList = () => import('./components/Admin/City/List.vue')
const AdminCityCreate = () => import('./components/Admin/City/Create.vue')
const AdminCityUpdate = () => import('./components/Admin/City/Update.vue')

const AdminNotificationList = () => import('./components/Admin/Notification/List.vue')
const AdminNotificationCreate = () => import('./components/Admin/Notification/Create.vue')


const UserHome = () => import('./components/User/Home.vue')
const UserPortalBookmark = () => import('./components/User/PortalBookmark.vue')
const UserCategoryList = () => import('./components/User/CategoryList.vue')
const UserCategoryAlone = () => import('./components/User/CategoryAlone.vue')
const UserProfile = () => import('./components/User/Profile.vue')
const UserDictionaryEmployee = () => import('./components/User/DictionaryEmployee.vue')
const UserNotification = () => import('./components/User/Notification.vue')


const EnrolleeHome = () => import('./components/Enrollee/Home.vue')
const EnrolleeProfileMain = () => import('./components/Enrollee/ProfileMain.vue')
const EnrolleeProfileAgent = () => import('./components/Enrollee/ProfileAgent.vue')
const EnrolleeProfileEducation = () => import('./components/Enrollee/ProfileEducation.vue')
const EnrolleeProfileLearning = () => import('./components/Enrollee/ProfileLearning.vue')
const EnrolleeProfileSend = () => import('./components/Enrollee/ProfileSend.vue')

export const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login
    },
    {
        name: 'Token',
        path: '/token/:token',
        component: Token
    },
    {
        name: 'Restore',
        path: '/restore/:token',
        component: Restore
    },
    {
        name: 'Forgot',
        path: '/forgot_password',
        component: Forgot
    },

    {
        name: 'AdminUserList',
        path: '/admin/user/list',
        component: AdminUserList
    },
    {
        name: 'AdminUserCreate',
        path: '/admin/user/create',
        component: AdminUserCreate
    },
    {
        name: 'AdminUserUpdate',
        path: '/admin/user/update/:id',
        component: AdminUserUpdate
    },

    {
        name: 'AdminCategoryList',
        path: '/admin/category/list',
        component: AdminCategoryList
    },
    {
        name: 'AdminCategoryCreate',
        path: '/admin/category/create',
        component: AdminCategoryCreate
    },
    {
        name: 'AdminCategoryUpdate',
        path: '/admin/category/update/:id',
        component: AdminCategoryUpdate
    },

    {
        name: 'AdminPortalList',
        path: '/admin/portal/list',
        component: AdminPortalList
    },
    {
        name: 'AdminPortalCreate',
        path: '/admin/portal/create',
        component: AdminPortalCreate
    },
    {
        name: 'AdminPortalUpdate',
        path: '/admin/portal/update/:id',
        component: AdminPortalUpdate
    },

    {
        name: 'AdminProleList',
        path: '/admin/prole/list',
        component: AdminProleList
    },
    {
        name: 'AdminProleCreate',
        path: '/admin/prole/create',
        component: AdminProleCreate
    },
    {
        name: 'AdminProleUpdate',
        path: '/admin/prole/update/:id',
        component: AdminProleUpdate
    },

    {
        name: 'AdminPpermissionList',
        path: '/admin/ppermission/list',
        component: AdminPpermissionList
    },
    {
        name: 'AdminPpermissionCreate',
        path: '/admin/ppermission/create',
        component: AdminPpermissionCreate
    },
    {
        name: 'AdminPpermissionUpdate',
        path: '/admin/ppermission/update/:id',
        component: AdminPpermissionUpdate
    },

    {
        name: 'AdminDepartmentList',
        path: '/admin/department/list',
        component: AdminDepartmentList
    },
    {
        name: 'AdminDepartmentCreate',
        path: '/admin/department/create',
        component: AdminDepartmentCreate
    },
    {
        name: 'AdminDepartmentUpdate',
        path: '/admin/department/update/:id',
        component: AdminDepartmentUpdate
    },

    {
        name: 'AdminPositionList',
        path: '/admin/position/list',
        component: AdminPositionList
    },
    {
        name: 'AdminPositionCreate',
        path: '/admin/position/create',
        component: AdminPositionCreate
    },
    {
        name: 'AdminPositionUpdate',
        path: '/admin/position/update/:id',
        component: AdminPositionUpdate
    },

    {
        name: 'AdminEducationList',
        path: '/admin/education/list',
        component: AdminEducationList
    },
    {
        name: 'AdminEducationCreate',
        path: '/admin/education/create',
        component: AdminEducationCreate
    },
    {
        name: 'AdminEducationUpdate',
        path: '/admin/education/update/:id',
        component: AdminEducationUpdate
    },

    {
        name: 'AdminProfileList',
        path: '/admin/profile/list',
        component: AdminProfileList
    },
    {
        name: 'AdminProfileCreate',
        path: '/admin/profile/create',
        component: AdminProfileCreate
    },
    {
        name: 'AdminProfileUpdate',
        path: '/admin/profile/update/:id',
        component: AdminProfileUpdate
    },

    {
        name: 'AdminPensionList',
        path: '/admin/pension/list',
        component: AdminPensionList
    },
    {
        name: 'AdminPensionCreate',
        path: '/admin/pension/create',
        component: AdminPensionCreate
    },
    {
        name: 'AdminPensionUpdate',
        path: '/admin/pension/update/:id',
        component: AdminPensionUpdate
    },

    {
        name: 'AdminLessonList',
        path: '/admin/lesson/list',
        component: AdminLessonList
    },
    {
        name: 'AdminLessonCreate',
        path: '/admin/lesson/create',
        component: AdminLessonCreate
    },
    {
        name: 'AdminLessonUpdate',
        path: '/admin/lesson/update/:id',
        component: AdminLessonUpdate
    },

    {
        name: 'AdminDirectionList',
        path: '/admin/direction/list',
        component: AdminDirectionList
    },
    {
        name: 'AdminDirectionCreate',
        path: '/admin/direction/create',
        component: AdminDirectionCreate
    },
    {
        name: 'AdminDirectionUpdate',
        path: '/admin/direction/update/:id',
        component: AdminDirectionUpdate
    },

    
    {
        name: 'AdminStatusList',
        path: '/admin/status/list',
        component: AdminStatusList
    },
    
    {
        name: 'AdminStatusCreate',
        path: '/admin/status/create',
        component: AdminStatusCreate
    },
    {
        name: 'AdminStatusUpdate',
        path: '/admin/status/update/:id',
        component: AdminStatusUpdate
    },
    

    {
        name: 'AdminRelationshipList',
        path: '/admin/relationship/list',
        component: AdminRelationshipList
    },
    {
        name: 'AdminRelationshipCreate',
        path: '/admin/relationship/create',
        component: AdminRelationshipCreate
    },
    {
        name: 'AdminRelationshipUpdate',
        path: '/admin/relationship/update/:id',
        component: AdminRelationshipUpdate
    },

    {
        name: 'AdminCountryList',
        path: '/admin/country/list',
        component: AdminCountryList
    },
    {
        name: 'AdminCountryCreate',
        path: '/admin/country/create',
        component: AdminCountryCreate
    },
    {
        name: 'AdminCountryUpdate',
        path: '/admin/country/update/:id',
        component: AdminCountryUpdate
    },

    {
        name: 'AdminRegionList',
        path: '/admin/region/list',
        component: AdminRegionList
    },
    {
        name: 'AdminRegionCreate',
        path: '/admin/region/create',
        component: AdminRegionCreate
    },
    {
        name: 'AdminRegionUpdate',
        path: '/admin/region/update/:id',
        component: AdminRegionUpdate
    },

    {
        name: 'AdminCityList',
        path: '/admin/city/list',
        component: AdminCityList
    },
    {
        name: 'AdminCityCreate',
        path: '/admin/city/create',
        component: AdminCityCreate
    },
    {
        name: 'AdminCityUpdate',
        path: '/admin/city/update/:id',
        component: AdminCityUpdate
    },

    {
        name: 'AdminNotificationList',
        path: '/admin/notification/list',
        component: AdminNotificationList
    },
    {
        name: 'AdminNotificationCreate',
        path: '/admin/notification/create',
        component: AdminNotificationCreate
    },


    {
        name: 'UserHome',
        path: '/user/home',
        component: UserHome
    },
    {
        name: 'UserPortalBookmark',
        path: '/user/portal/bookmark',
        component: UserPortalBookmark
    },
    {
        name: 'UserCategoryList',
        path: '/user/categories',
        component: UserCategoryList
    },
    {
        name: 'UserCategoryAlone',
        path: '/user/category/:id',
        component: UserCategoryAlone
    },
    {
        name: 'UserProfile',
        path: '/user/profile',
        component: UserProfile
    },
    {
        name: 'UserDictionaryEmployee',
        path: '/user/dictionary_employee',
        component: UserDictionaryEmployee
    },
    {
        name: 'UserNotification',
        path: '/user/notification',
        component: UserNotification
    },


    {
        name: 'EnrolleeHome',
        path: '/enrollee/home',
        component: EnrolleeHome
    },

    {
        name: 'EnrolleeProfileMain',
        path: '/enrollee/profile/main',
        component: EnrolleeProfileMain
    },

    {
        name: 'EnrolleeProfileAgent',
        path: '/enrollee/profile/agent',
        component: EnrolleeProfileAgent
    },
    
    {
        name: 'EnrolleeProfileEducation',
        path: '/enrollee/profile/education',
        component: EnrolleeProfileEducation
    },

    {
        name: 'EnrolleeProfileLearning',
        path: '/enrollee/profile/learning',
        component: EnrolleeProfileLearning
    },

    {
        name: 'EnrolleeProfileSend',
        path: '/enrollee/profile/send',
        component: EnrolleeProfileSend
    },
];