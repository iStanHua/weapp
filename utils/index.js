// utils/index.js

/**
 * 日期格式化
 * @param {string} date 日期
 * @param {string} format 日期格式
 */
export function dateFormat(date, format) {
  if (!date) return '';
  var _date = new Date(date);
  var o = {
    'M+': _date.getMonth() + 1, //month 
    'd+': _date.getDate(), //day 
    'h+': _date.getHours(), //hour 
    'm+': _date.getMinutes(), //minute 
    's+': _date.getSeconds(), //second 
    'q+': Math.floor((_date.getMonth() + 3) / 3), //quarter 
    'S': _date.getMilliseconds() //millisecond 
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}
