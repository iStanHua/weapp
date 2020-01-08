// components/common/tabScroll/index.js

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    list: Array,
    index: {
      type: Number,
      value: 0
    },
    idKey: {
      type: String,
      value: 'id'
    },
    nameKey: {
      type: String,
      value: 'name'
    },
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
    if (this.data.index > 1)
      this.setScrollLeft(this.data.index)
  },
  methods: {
    onTabItem(e) {
      let index = e.currentTarget.dataset.index

      this.triggerEvent('change', { index: index, item: this.data.list[index] })
      this.setScrollLeft(index)

    },
    setScrollLeft(index) {
      this.setData({
        currentIndex: index
      })

      let clientWidth = this.data.windowWidth / 2
      wx.createSelectorQuery()
        .in(this)
        .selectAll('.tab-item')
        .boundingClientRect(res => {
          let width = 0
          for (let i = 0; i < index; i++) {
            width += res[i].width
          }
          if (width > clientWidth) {
            this.setData({ scrollLeft: width + res[index].width / 2 - clientWidth })
          } else {
            this.setData({ scrollLeft: 0 })
          }
        }).exec()
    }
  }
})
