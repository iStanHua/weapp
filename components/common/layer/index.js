// components/common/layer/index.js

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    // 是否显示
    show: Boolean,
    // 点击遮罩层关闭
    maskClose: {
      type: Boolean,
      default: false
    },
    // 是否为全屏
    fullscreen: Boolean,
    // 宽度
    width: String,
    // 宽度
    height: String,
    // 标题
    title: String,
    // 是否显示关闭图标
    showClose: {
      type: Boolean,
      default: true
    },
    // 动画名称
    animate: {
      type: String,
      default: 'fade'
    }
  },
  data: {
    zIndex: 1000,
    style: ''
  },
  attached() {

  },
  ready() {
    let styles = []
    if (this.data.width) {
      styles.push(`width:${this.data.width}px`)
    }
    if (this.data.height) {
      styles.push(`height:${this.data.height}px`)
    }

    if (styles.length) {
      this.setData({
        style: styles.join(';')
      })
    }
  },
  methods: {
    clickLayer() {
      if (this.data.maskClose) {
        this.closeLayer()
      }
    },
    closeLayer() {
      this.setData({
        show: false
      })
      this.triggerEvent('close', false)
    }
  }
})