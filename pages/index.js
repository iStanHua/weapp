// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    sys: '',
    loading: true,
    list: ['部门', '共享', '数据元', '公开', '标签', '敏感数据', '标准关联', '资源类型'],
    list1: ['首页', '标签', '发现', '我的'],
    list2: [
      { id: 1, name: '部门' },
      { id: 2, name: '共享' },
      { id: 3, name: '数据元' },
      { id: 4, name: '公开' },
      { id: 5, name: '标签' },
      { id: 6, name: '敏感数据' },
      { id: 7, name: '标准关联' },
      { id: 8, name: '资源类型' },
      { id: 9, name: '加密' },
      { id: 10, name: '解密' }
    ]
  },
  onLoad() {
    setTimeout(() => {
      const sys = wx.getSystemInfoSync()
      this.setData({
        sys: JSON.stringify(sys),
        loading: false
      })
    }, 1000)
  }
})
