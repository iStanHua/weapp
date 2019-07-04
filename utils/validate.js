// utils/validate.js

export default {
  /**
   * 密码
   */
  password(value) {
    return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(value)
  },

  /**
   * 手机号
   */
  phoneNumber(value) {
    return /^1[3456789]\d{9}$/.test(value)
  },

  /**
   * 电话
   */
  telephone(value) {
    return /^0\d{2,3}-?\d{7,8}$/.test(value)
  },

  /**
   * 邮箱
   */
  email(value) {
    return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)
  },

  /**
   * 身份证
   */
  idCard(value) {
    return /^\d{15}$|^\d{17}[0-9Xx]$/.test(value)
  },

  /**
   * 邮政编码
   */
  zipcode(value) {
    return /^[1-9][0-9]{5}$/.test(value)
  },

  /**
   * 金额
   */
  money(value) {
    return /^-?\d*(\.\d{0,2})?$/.test(value)
  },

  /**
   * 纯数字
   */
  pureNumber(value) {
    return /^[0-9]*$/.test(value)
  },

  /**
   * 货币格式
   */
  currency(value) {
    return String(value).replace(/\,/g, '').replace(/(?!^)(?=(\d{3})+$)/g, ',')
  },

  /**
   * 手机格式
   */
  phoneFormat(value) {
    return validate.trim(value).replace(/(?!^)(?=(\d{4})+$)/g, ' ')
  },

  /**
   * 清除所有空格
   */
  trim(value) {
    return value.replace(/\s/g, '')
  },

  /**
   * 中文
   */
  chinese(value) {
    return /[\u4E00-\u9FA5]/.test(value)
  }
}