const lessParse = require('less')
const fs = require('fs')
const less = require('less')
const LessInput = fs.readFileSync('./src/component/Nav.less', 'utf8')
less.render(LessInput).then((outPut) => {
  console.log('outPut:', outPut)
})
