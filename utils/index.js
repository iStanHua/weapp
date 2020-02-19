// utils/index.js

/**
 * 日期格式化
 * @param {String} time 日期
 * @param {String} reg  日期格式
 */
export function dateFormat(time, reg) {
  const date = (typeof time === 'string' || typeof time === 'number') ? new Date(time) : time
  const map = {}
  map.yyyy = date.getFullYear()
  map.yy = ('' + map.yyyy).substr(2)
  map.M = date.getMonth() + 1
  map.MM = (map.M < 10 ? '0' : '') + map.M
  map.d = date.getDate()
  map.dd = (map.d < 10 ? '0' : '') + map.d
  map.H = date.getHours()
  map.HH = (map.H < 10 ? '0' : '') + map.H
  map.m = date.getMinutes()
  map.mm = (map.m < 10 ? '0' : '') + map.m
  map.s = date.getSeconds()
  map.ss = (map.s < 10 ? '0' : '') + map.s

  return reg.replace(/\byyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s\b/g, $1 => map[$1])
}

/**
 * 函数去抖
 * @param {Function} fn   实际要执行的函数
 * @param {Number}   wait 延迟时间，也就是阈值，单位是毫秒（ms）
 */
export function debounce(fn, wait) {
  let timeout
  return function () {
    let ctx = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fn.apply(ctx, args)
    }, wait)
  }
}
