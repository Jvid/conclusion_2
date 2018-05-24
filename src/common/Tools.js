import marked from 'marked'

var _public = {
  markedFn: function (mdStr) {
    var rendererMD = new marked.Renderer();
    //基本设置
    marked.setOptions({
      renderer: rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    return marked(mdStr)
  }
}
export default _public