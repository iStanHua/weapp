// find.js
const app = getApp()

Page({
  data: {
    loading: true,
    list: []
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 1000)
  },
  onUnload() {

  },
  chooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'none',
          duration: 2000
        })
      },
      fail: (error) => {
        wx.showToast({
          title: JSON.stringify(error),
          icon: 'none',
          duration: 2000
        });
      },
    })
  },
  scanCode() {
    wx.scanCode({
      success: (res) => {
        my.showToast({
          title: JSON.stringify(res),
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
