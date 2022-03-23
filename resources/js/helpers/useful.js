import moment from '@/js/helpers/momentTZ.js';

var useful = {
  getTimezones() {
    return [
      {id: -1200, name: "UTC-12"},
      {id: -1100, name: "UTC-11"},
      {id: -1000, name: "UTC-10"},
      {id: -930, name: "UTC-9:30"},
      {id: -900, name: "UTC-9"},
      {id: -800, name: "UTC-8"},
      {id: -700, name: "UTC-7"},
      {id: -600, name: "UTC-6"},
      {id: -500, name: "UTC-5"},
      {id: -400, name: "UTC-4"},
      {id: -330, name: "UTC-3:30"},
      {id: -300, name: "UTC-3"},
      {id: -200, name: "UTC-2"},
      {id: -100, name: "UTC-1"},
      {id: 0, name: "UTC+0"},
      {id: 100, name: "UTC+1"},
      {id: 200, name: "UTC+2"},
      {id: 300, name: "UTC+3"},
      {id: 330, name: "UTC+3:30"},
      {id: 400, name: "UTC+4"},
      {id: 430, name: "UTC+4:30"},
      {id: 500, name: "UTC+5"},
      {id: 530, name: "UTC+5:30"},
      {id: 545, name: "UTC+5:45"},
      {id: 600, name: "UTC+6"},
      {id: 630, name: "UTC+6:30"},
      {id: 700, name: "UTC+7"},
      {id: 800, name: "UTC+8"},
      {id: 845, name: "UTC+8:45"},
      {id: 900, name: "UTC+9"},
      {id: 930, name: "UTC+9:30"},
      {id: 1000, name: "UTC+10"},
      {id: 1030, name: "UTC+10:30"},
      {id: 1100, name: "UTC+11"},
      {id: 1200, name: "UTC+12"},
      {id: 1245, name: "UTC+12:45"},
      {id: 1300, name: "UTC+13"},
      {id: 1400, name: "UTC+14"}
    ];
  },
  getAvatarDateClass (d) { 
    let it = moment(d).format('d');
    return "my_avatar_usmall my_avatar_" + it; 
  },
  getDateDay(d) {
    return moment(d).format('DD');
  },
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  getMonthName(d) {
    moment.locale('ru');
    return this.capitalizeFirstLetter(moment(d).format('MMMM')).substring(0, 3);
  },
  getDayOfWeek(d) {
    moment.locale('ru');
    return this.capitalizeFirstLetter(moment(d).format('dd'));
  },
  getCurrentDate() {
    return moment(new Date()).format('YYYY-MM-DD');
  },
  computedDateFormatted(d) {
    moment.locale('ru');
    if (d == null) {return "";}
    return this.capitalizeFirstLetter(moment(d).format('DD.MM.YYYY'));
  },
  getPlusOrMinusWeek(d, b) {
    if (b) {
        return moment(d).add(7, 'days');
    } else {
        return moment(d).add(-7, 'days');
    }
  },
  getScheduleDaysOfWeek(d) {
    return [
      {id: 1, name: "Понедельник", show: false, rows: [], schedule_date: moment(d).add(0, 'days')},
      {id: 2, name: "Вторник", show: false, rows: [], schedule_date: moment(d).add(1, 'days')},
      {id: 3, name: "Среда", show: false, rows: [], schedule_date: moment(d).add(2, 'days')},
      {id: 4, name: "Четверг", show: false, rows: [], schedule_date: moment(d).add(3, 'days')},
      {id: 5, name: "Пятница", show: false, rows: [], schedule_date: moment(d).add(4, 'days')},
      {id: 6, name: "Суббота", show: false, rows: [], schedule_date: moment(d).add(5, 'days')},
      {id: 7, name: "Воскресенье", show: false, rows: [], schedule_date: moment(d).add(6, 'days')},
    ];
  },

  documentListToTree(list) {
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      node.is_purpose = false;
      if (node.is_file) {
          if (node.purposes != null) {
              for (let ii in node.purposes) {
                  let o = {};
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

  getPhoneLink(p) {
    return "tel:" + p;
  },

  getMailLink(p) {
    return "mailto:" + p;
  }

}
export default useful