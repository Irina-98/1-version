<?php
namespace App\Helpers;

use DateTime;
use DatePeriod;
use DateInterval;

class Utilities {
    public function getUserFieldsInt() {
        return array(
            'gender',
            'parent_timezone',
            'student_year_addmission',
            'student_teacher_id',
            'student_profile_id',
            'student_pension_id',
            'enrollee_country_id',
            'enrollee_region_id',
            'enrollee_city_id',
            'enrollee_class_addmission',
            'enrollee_profile_id',
            'enrollee_lesson_first_id',
            'enrollee_lesson_second_id',
            'enrollee_lesson_third_id',
            'enrollee_direction_id',
            'enrollee_agent_relationship_id',
        );
    }

    public function setUserNullValuesOutOfRoles($req) {
        $res = $req;
        $roles = explode(",", $req['role']);
        $fields = self::getUserFieldsOutOfRoles($roles);
        foreach($fields as $f) {
            $res[$f] = null;
        }
        if (!in_array("employee", $roles)) {
            $res["departments_positions_users"] = "[]";
        }
        return $res;
    }

    public function getUserFieldsOutOfRoles($roles) {
        $array = array();
        $fields = self::getUserFieldsByRole();
        foreach($fields as $key => $values) {
            if (!in_array($key, $roles)) {
                $array = array_merge($array, $values);
            }
        }
        return $array;
    }

    public function getUserFieldsByRole() {
        return array(
            'employee' => array(
                'employee_place',
            ),
            'parent' => array(
                'parent_passport',
                'parent_address_register',
                'parent_address_living',
                'parent_address_postal',
                'parent_timezone',
                'parent_snils',
                'parent_inn',
            ),
            'student' => array(
                'student_zoom',
                'student_year_addmission',
                'student_teacher_id',
                'student_profile_id',
                'student_pension_id',
                'student_address_campus',
                'student_address_register',
                'student_address_living',
                'student_address_additional',
                'student_number_pass',
                'student_number_food',
                'student_number_table',
                'student_number_locker_academic',
                'student_number_locker_wardrobe',
                'student_number_locker_art',
            ),
            'enrollee' => array(
                'enrollee_crm_lead_id',
                'enrollee_country_id',
                'enrollee_country_other',
                'enrollee_region_id',
                'enrollee_region_other',
                'enrollee_city_id',
                'enrollee_city_other',
                'enrollee_school_current',
                'enrollee_class_addmission',
                'enrollee_address_register',
                'enrollee_vk',
                'enrollee_profile_id',
                'enrollee_lesson_first_id',
                'enrollee_lesson_second_id',
                'enrollee_lesson_third_id',
                'enrollee_direction_id',
                'enrollee_agent_fio',
                'enrollee_agent_relationship_id',
                'enrollee_agent_phone',
                'enrollee_agent_email',
            ),
        );
    }

    public static function getNullInteger($value) {
        if ($value == 'null') {
            return null;
        }
        return $value;
    }

    public static function getBoolean($value) {
        if ($value === 'true') {return true;}
        else if ($value === 'false') {return false;}
        else if ($value === 1) {return true;}
        else if ($value === 0) {return false;}
        else if ($value === '1') {return true;}
        else if ($value === '0') {return false;}
        else if ($value === true) {return true;}
        else if ($value === false) {return false;}
        return null;
    }

    public static function getJsonIdsFromString($string) {
        if ($string == null) {return array();}
        $string = trim($string);
        if (strstr($string, "[") == 0) {$string = substr($string, strlen("["), strlen($string) - strlen("[]"));}
        if (trim($string) == "") {return array();}
        $string = trim($string);
        $arr = explode(",", $string);
        foreach($arr as $k => $v) {
            $arr[$k] = intval($v);
        }
        return $arr;
    }

    public static function getCurrentDate() {
        return date("Y-m-d");
    }

    public static function getCurrentTime() {
        return date("H:i:s");
    }

    public static function getCurrentDateTime() {
        return date("Y-m-d H:i:s");
    }

    public static function getTodayStart() {
        return date("Y-m-d") . " 00:00:00";
    }

    public static function getTodayEnd() {
        return date("Y-m-d") . " 23:59:59";
    }

    public static function getDateStart($date) {
        if (strlen($date) >= 10) {$date = substr($date, 0, 10); }
        return $date . " 00:00:00";
    }

    public static function getDateEnd($date) {
        if (strlen($date) >= 10) {$date = substr($date, 0, 10); }
        return $date . " 23:59:59";
    }

    public static function getDatePeriodBetweenByDayOfWeek($d1, $d2, $dayOfWeek) {
        $period = new DatePeriod(
            new DateTime(self::getDateStart($d1)),
            new DateInterval('P1D'),
            new DateTime(self::getDateEnd($d2))
        );
        $result = array();
        foreach ($period as $key => $value) {
            if ($value->format('N') == $dayOfWeek) {
                $result[] = $value->format('Y-m-d');
            }
        }
        return $result;
    }

    public static function removeContactsFromUser($user) {
        $arr = array('email', 'last_name', 'first_name', 'middle_name', 
            'phone', 'phone_additional', 'address', 'post_index', 'city');
        foreach($arr as $a) {
            $i = 'is_' . $a . '_show';
            if (!$user->$i) {
                unset($user->$a);
            }
        }
        return $user;
    }

    public static function generateRandomString($length = 128) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public static function getRuRoleNames($names) {
        $arr = explode(",", $names);
        $rarr = array();
        foreach($arr as $a) {
            $rarr[] = self::getRuRoleName($a);
        }
        return implode(", ", $rarr);
    }

    public static function getRuRoleName($name) {
        $res = "";
        switch($name) {
            case "admin":
                $res = "Администратор";
                break;
            case "employee":
                $res = "Сотрудник";
                break;
            case "parent":
                $res = "Родитель";
                break;
            case "student":
                $res = "Ученик";
                break;
            case "enrollee":
                $res = "Абитуриент";
                break;
            default: 
                $res = "";
        }
        return $res;
    }

    public static function getThingStatusByNum($num) {
        $res = "";
        switch($num) {
            case 1:
                $res = "Достаточно";
                break;
            case 2:
                $res = "Заканчивается";
                break;
            case 3:
                $res = "Не достаточно";
                break;
            default:
                $res = "";
        }
        return $res;
    }
}