// components/common/tabScroll/index.js

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    list: Array,
    // 唯一标识
    key: {
      type: Number,
      value: 0
    },
    nameKey: String,
    idKey: String
  },
  data: {
    windowWidth: 0,
    currentIndex: 0,
    scrollLeft: 0
  },
  attached() {

  },
  ready() {
    this.setData({
      windowWidth: wx.getSystemInfoSync().windowWidth
    })
  },
  methods: {
    onTabItem(e) {
      let index = e.currentTarget.dataset.index
      let offsetLeft = e.currentTarget.offsetLeft
      let clientWidth = this.data.windowWidth / 2

      this.setData({
        currentIndex: index
      })

      this.triggerEvent('change', { index: index, item: this.data.list })

      wx.createSelectorQuery()
        .in(this)
        .select(`#tab-item-${this.data.key}-${index}`)
        .boundingClientRect(res => {
          if (offsetLeft > clientWidth) {
            this.setData({ scrollLeft: offsetLeft + res.width / 2 - clientWidth })
          } else {
            this.setData({ scrollLeft: 0 })
          }
        }).exec()
    }
  }
})