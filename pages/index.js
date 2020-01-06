// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    sys: '',
    loading: true,
    windowWidth: 0,
    currentIndex: 0,
    list: ['部门', '共享', '数据元', '公开', '标签', '敏感数据', '标准关联', '资源类型'],
    offsetLeft: 0
  },
  onLoad() {
    setTimeout(() => {
      const sys = wx.getSystemInfoSync()
      this.setData({
        sys: JSON.stringify(sys),
        windowWidth: sys.windowWidth,
        loading: false
      })
    }, 1000)
  },
  onItem(e) {
    console.log(e)
    let index = e.currentTarget.dataset.i
    let width = e.currentTarget.offsetLeft
    // 当大于屏幕一半的宽度则滚动，否则就设置位置为0
    let clientWidth = this.data.windowWidth / 2

    this.setData({
      currentIndex: index
    })

    wx.createSelectorQuery()
      .in(this)
      .select('#scroll-item-'+index)
      .boundingClientRect(res => {
        // let width = 0
        // // 循环获取计算当前点击的标签项距离左侧的距离
        // for (let i = 0; i < index; i++) {
        //   width += res[i].width
        // }

        if (width > clientWidth) {
          this.setData({
            offsetLeft: width + res.width / 2 - clientWidth
          })
        } else {
          this.setData({
            offsetLeft: 0
          })
        }
      }).exec()
  }
})
