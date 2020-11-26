// components/common/richParser/node.js

Component({
  options: {
    // styleIsolation: 'shared'
    addGlobalClass: true
  },
  properties: {
    // node对象
    item: Object,
    key: Number
  },
  data: {},
  attached() { },
  ready() { },
  methods: {
    // 浏览图片
    onPreviewImg(e) {
      this.triggerEvent('preview', e.currentTarget.dataset.src, { bubbles: true, composed: true })
    }
  }
})