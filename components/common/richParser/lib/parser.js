import ParseJson from './html2json'

/**
 * 解析
 */
class Parser extends ParseJson {
  getRichTextJson(html) {
    return super.getHtmlJson(html)
  }

  definedCustomTag(options) {
    const newOptions = {}
    for (let i in options) {
      newOptions[i] = options[i] ? options[i] : 'div'
    }
    super.definedCustomTag(newOptions)
  }
}

export default new Parser()