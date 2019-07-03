// my/canvas.js
const app = getApp()

Page({
  data: {
    showShareImg: false,
    shareImgSrc: '',
    ctxWidth: 0,
    ctxHeight: 0
  },
  onLoad() {
    const sys = wx.getSystemInfoSync()
    this.setData({
      ctxWidth: sys.windowWidth,
      ctxHeight: sys.windowHeight
    })
    this.drawPoster()
  },
  drawPoster() {
    const ctx = wx.createCanvasContext('posterCanvas')

    let bgImgPath = '../../images/bg.jpg'
    let logoImgPath = '../../images/logo.jpg'
    let qrImgPath = '../../images/qr.jpg'

    let halfHeight = this.data.ctxHeight / 2

    ctx.save()
    ctx.beginPath()
    ctx.drawImage(bgImgPath, 0, 0, this.data.ctxWidth, halfHeight)

    ctx.setFillStyle('#f8f8f9')
    ctx.fillRect(0, halfHeight, this.data.ctxWidth, halfHeight)

    ctx.arc(45, halfHeight + 45, 25, 0, 2 * Math.PI)
    ctx.setFillStyle('#EEEEEE')
    // ctx.fill()
    ctx.clip()
    ctx.drawImage(logoImgPath, 20, halfHeight + 20, 50, 50)
    ctx.restore()

    ctx.setFontSize(20)
    ctx.setFillStyle('#333333')
    ctx.fillText('stanhua', 80, halfHeight + 45)

    ctx.setFontSize(22)
    ctx.setFillStyle('#000000')
    ctx.fillText('宠友们快来围观萌宠靓照', 20, halfHeight + 135)
    ctx.fillText('我在萌爪幼稚园', 20, halfHeight + 165)

    ctx.setFontSize(21)
    ctx.setFillStyle('#666666')
    ctx.fillText('长按识别小程序码', 20, this.data.ctxHeight - 20)

    ctx.drawImage(qrImgPath, this.data.ctxWidth - 100, this.data.ctxHeight - 140, 80, 80)

    ctx.draw()
  },
  showLayer() {
    let $this = this
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: this.data.ctxWidth,
      height: this.data.ctxHeight,
      destWidth: this.data.ctxWidth,
      destHeight: this.data.ctxHeight,
      canvasId: 'posterCanvas',
      success(res) {
        console.log(res.tempFilePath)
        $this.setData({
          showShareImg: true,
          shareImgSrc: res.tempFilePath
        })
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  savePoster() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImgSrc,
      success() {
        wx.showToast({
          title: '图片保存成功，快去分享到朋友圈吧~',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
