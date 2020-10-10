const Mock = require('mockjs')

// let id = Mock.mock('@id')
let obj = Mock.mock({
  id: '@id()',
  username: '@cnmae()',
  date: '@date()',
  description: '@paragraph()',
  ip: '@ip()',
  email: '@email()'
})
console.log(obj)
