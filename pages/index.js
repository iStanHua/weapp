// index.js
import { debounce } from '../utils/index'
// 获取应用实例
const app = getApp()

Page({
  data: {
    sys: '',
    loading: true,
    list: [
      { id: 1, name: '指南' },
      { id: 2, name: '框架' },
      { id: 3, name: '组件' },
      { id: 4, name: 'API' },
      { id: 5, name: '服务端' }
    ],
    list1: [
      { id: 1, name: '指南' },
      { id: 2, name: '框架' },
      { id: 3, name: '组件' },
      { id: 4, name: 'API' }
    ],
    list2: [
      { id: 1, name: '指南' },
      { id: 2, name: '框架' },
      { id: 3, name: '组件' },
      { id: 4, name: 'API' },
      { id: 5, name: '服务端' },
      { id: 6, name: '工具' },
      { id: 7, name: '云开发' },
      { id: 8, name: '扩展能力' },
      { id: 9, name: '更新日志' }
    ],
    indicatorLeft: 0
  },
  onLoad() {
    setTimeout(() => {
      const sys = wx.getSystemInfoSync()
      this.setData({
        sys: JSON.stringify(sys),
        loading: false
      })
    }, 1000)

    this.onScroll = debounce(this.onScroll, 10)
  },
  onScroll(e) {
    const detail = e.detail
    console.log(detail)
    let ratio = (detail.scrollLeft - detail.deltaX) / e.detail.scrollWidth
    console.log(ratio)
    ratio = Math.ceil(60 * ratio) + 1
    if (ratio < 0) {
      ratio = 0
    }
    else if (ratio > 30) {
      ratio = 30
    }
    this.setData({
      indicatorLeft: ratio
    })
  }
})
