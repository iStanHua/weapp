// log.js
const app = getApp()

Page({
  data: {
    list: []
  },
  onReady() {
    this.setData({
      list: wx.getStorageSync('logs') || []
    })
  },
  onUnload() {

  }
})
