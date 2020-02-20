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

/**
 * 数字分级（numberLevel([200, 7, 19, 25, 26, 32, 55, 95, 88, 38])）
 * @param {Array} list 数字数据
 */
export function numberLevel(list) {
  if (!Array.isArray(list)) return list

  list = list.sort((x, y) => x - y)

  /**
   * 长度
   */
  let len = list.length
  /**
   * 平均值
   */
  let avg = 0
  /**
   * 差值
   */
  let diff = 0
  /**
   * 求和值
   */
  let sum = 0

  diff = (list[len - 1] - list[0]) / len
  diff = parseInt(diff)

  list.forEach(l => {
    sum += l
  })

  avg = parseInt(sum / len)
  let diffLen = String(diff).length - 1

  let levels = [
    { name: '', color: '#eec265', min: 0, max: 0 },
    { name: '', color: '#ffb54b', min: 0, max: 0 },
    { name: '', color: '#d37434', min: 0, max: 0 },
    { name: '', color: '#bd5032', min: 0, max: 0 },
    { name: '', color: '#8a1e09', min: 0, max: Infinity }
  ]

  let lLen = levels.length
  let valFirst = endLevelValue(list[0], diffLen)
  let valLast = startLevelValue(list[len - 1], diffLen, true)
  if (valLast === list[len - 1]) {
    valLast -= Math.pow(10, diffLen)
  }
  // 分级累加（*1，*2，*3）
  let diffLevel = parseInt((valLast - valFirst) / 6)

  levels.forEach((l, i) => {
    if (i === 0) {
      l.name = valFirst ? `0-${valFirst}` : '0'
      l.max = valFirst
    }
    else if (i === lLen - 1) {
      l.name = `${valLast}以上`
      l.min = valLast
    }
    else {
      l.min = levels[i - 1].max + 1
      if (i === lLen - 2) {
        l.max = valLast
      }
      else {
        l.max = endLevelValue(levels[i - 1].max + diffLevel * i, diffLen)
      }
      l.name = `${l.min}-${l.max}`
    }
  })
  return levels
}

function startLevelValue(num, diffLen, isLast = false) {
  if (!num) return 0
  let zeroStr = ''
  for (let i = 0; i < diffLen; i++) {
    zeroStr += '0'
  }
  if (isLast) {
    return parseInt(Math.floor(num / Math.pow(10, diffLen)) + zeroStr)
  }
  else {
    return parseInt(Math.ceil(num / Math.pow(10, diffLen)) + zeroStr)
  }
}

function endLevelValue(num, diffLen) {
  if (!num) return 0
  let zeroStr = ''
  for (let i = 0; i < diffLen; i++) {
    zeroStr += '9'
  }
  return parseInt(parseInt(num / Math.pow(10, diffLen)) + zeroStr)
}


