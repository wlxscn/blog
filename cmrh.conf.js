module.exports = {
  generateScopedName: '[name]__[local]',
  //下面的代码在本项目中暂时用不到，但是以下配置在我另一个项目中有用到，我来讲一下他的配置
  //扩展名
  extensions: ['.scss','.css'],
  //钩子，这里主要做一些预处理的scss或者less文件
  preprocessCss: (content, filename) => {
    return require('node-sass').renderSync({
      content,
      file: filename
    }).css
  },

  processCss: (content, filename) => {

  }
}