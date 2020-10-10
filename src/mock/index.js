const fs = require('fs')
const path = require('path')
const Mock = require('mock')
const JSON5 = require('json5')

function getjsonFile (filepath) {
  var json = fs.readFileSync(path.join(__dirname, './userInfo.json5'), 'utf-8')
  return JSON5.parse(json)
}

module.exports = function (app) {
  app.get('/user/userinfo', function (rep, res) {
    var json = getjsonFile('./userInfo.json5')
    res.json(Mock.mock(json))
  })
}
