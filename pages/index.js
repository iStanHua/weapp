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
    indicatorLeft: 0,
    richHtml: `<p><span>编辑导读：</span>如今，提到“网红产品”你会想到什么？</p>
    <p><b>用户画像：</b>56%乘客使用Robotaxi日常通勤</p>
    <div><img src="https://tse1-mm.cn.bing.net/th?id=OIP.Ld62iU2qGusDHueol0yJOwHaHa&w=171&h=160&c=8&rs=1&qlt=90&dpr=1.75&pid=3.1&rm=2"></div>
    <p><img src="https://tse1-mm.cn.bing.net/th/id/OET.187d962efe0c4586a4dcfc83767537bd?w=272&h=272&c=7&rs=1&o=5&dpr=1.75&pid=1.9"></p>
    <div><img src="https://tse1-mm.cn.bing.net/th/id/OET.ad727354f9ba4957ada619723c32c56e?w=272&h=272&c=7&rs=1&o=5&dpr=1.75&pid=1.9"></div>`
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
