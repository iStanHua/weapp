// components/common/swipeAction/index.js

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    disabled: {
      type: Boolean,
      value: false
    },
  },
  data: {
    windowWidth: 0,
    // movable-view x轴方向的偏移
    x: 0,
    // 超过可移动区域后，movable-view是否还可以移动
    isOut: false
  },
  attached() {

  },
  ready() {
    this.setData({
      windowWidth: wx.getSystemInfoSync().windowWidth
    })

    // wx.createSelectorQuery().in(this).select('.movable-action').boundingClientRect((res) => {
    //   that._slideWidth = res.width
    //   that._threshold = res.width / 2
    //   that._viewWidth = that.data.width + res.width * (750 / _windowWidth)
    // }).exec()
  },
  methods: {
    onChange(e) {
      this.setData({
        x: e.detail.x
      })
      console.log(e)
      if (!this.data.isOut && e.detail.x < -this._threshold) {
        this.setData({
          isOut: true
        })
      } else if (this.data.isOut && e.detail.x >= -this._threshold) {
        this.setData({
          isOut: false
        })
      }
    }
  }
})
