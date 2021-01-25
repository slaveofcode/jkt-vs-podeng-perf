const jkt = require('jkt')
const createMasker = require('../masker')

const maskerEmployeeID = createMasker('EmployeeID')

const address = require('./address')

const Employee = jkt`
  id: ${jkt.trans.custom(id => maskerEmployeeID.mask(id))}
  name: String
  age: Number
  locations: ${jkt.c.array(address)}
`

module.exports = Employee