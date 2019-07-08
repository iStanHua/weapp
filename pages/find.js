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

  }
})
