// components/common/richParser/index.js

import parser from './lib/parser'

Component({
  options: {

  },
  properties: {
    // html字符串
    html: {
      type: String,
      observer(val) {
        this.setNodes(val)
      }
    },
    // 是否美化(去除空白行)
    prettify: Boolean
  },
  data: {
    // html节点列表
    nodes: [],
    // 图片列表
    imgList: [],
    // 查看图片索引
    imgIndex: 0
  },
  attached() { },
  ready() { },
  methods: {
    setNodes(html) {
      let nodes = this.handleNode(parser.getRichTextJson(html).children)
      this.setData({
        nodes,
        imgList: this.data.imgList
      })
    },

    handleNode(list) {
      let _this = this
      return list.map(l => {
        if (l.name) l.isBlock = !!_this.isBlock(l.name)
        if (l.name === 'img') {
          _this.data.imgList.push(l.attrs.src)
        }

        if (l.children && l.children.length) {
          l.children = _this.handleNode(l.children)
        }

        return l
      })
    },

    /**
     * 块级元素
     * @param {String} name 标签
     */
    isBlock(name) {
      console.log(name)
      if (!name) return false
      return ['address', 'blockquote', 'center', 'dir', 'article', 'figcaption', 'ol', 'aside',
        'figure', 'output', 'audio', 'footer', 'p', 'form', 'pre', 'canvas', 'menu',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'dd', 'header', 'table', 'tr', 'td', 'div', 'hgroup',
        'tfoot', 'dl', 'hr', 'ul', 'fieldset', 'noscript', 'video'].includes(name)
    },
    /**
     * 行内元素
     * @param {String} name 标签
     */
    isInline(name) {
      if (!name) return false
      return ['b', 'big', 'i', 'small', 'abbr', 'acronym', 'cite', 'code', 'dfn', 'em',
        'kbd', 'strong', 'samp', 'var', 'a', 'bdo', 'br', 'img', 'map', 'object', 'q',
        'script', 'span', 'sub', 'sup', 'button', 'input', 'label', 'select', 'textarea'].includes(name)
    },
    // 浏览图片
    onPreviewImg(e) {
      wx.previewImage({
        current: e.detail,
        urls: this.data.imgList
      })
    }
  }
})