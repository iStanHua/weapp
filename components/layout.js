// components/layout.js

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    isFooter: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    }
  },
  data: {
    paddingTop: 20,
    height: 46,
    isBack: false,
    footerList: [
      { icon: 'home', name: '首页', route: 'pages/index', active: false },
      { icon: 'find', name: '发现', route: 'pages/find', active: false },
      { icon: 'my', name: '我的', route: 'pages/my/index', active: false }
    ],
    currentPage: null
  },
  attached() {
    this.setSystemInfo()
    this.setFooterActive()
  },
  ready() {
  },
  methods: {
    setSystemInfo() {
      if (getCurrentPages().length > 1) {
        this.setData({
          isBack: true
        })
      }
      else {
        this.setData({
          isBack: false
        })
      }
      const sys = wx.getSystemInfoSync()
      this.setData({
        paddingTop: sys.statusBarHeight,
        currentPage: getCurrentPages()[0]
      })
      console.log(sys)
      if (sys.system.indexOf('iOS') > -1) {
        this.setData({
          height: 40
        })
      }
      else {
        this.setData({
          height: 46
        })
      }
    },
    goBack() {
      if (this.data.currentPage) {
        wx.navigateBack({
          delta: 1
        })
      }
      else {
        wx.redirectTo({
          url: '/pages/index'
        })
      }
    },
    setFooterActive() {
      if (!this.data.isFooter) return
      for (let i = 0; i < this.data.footerList.length; i++) {
        let data = this.data.footerList[i]
        if (data.route === this.data.currentPage.route) {
          data.active = true
        }
        else {
          data.active = false
        }
        data = null
      }
      this.setData({
        footerList: this.data.footerList
      })
    },
    footerTap(e) {
      let route = e.currentTarget.dataset.route
      if (route === this.data.currentPage.route) return
      wx.redirectTo({
        url: `/${route}`
      })
    }
  }
})