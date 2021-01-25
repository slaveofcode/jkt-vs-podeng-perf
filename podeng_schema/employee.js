const { blueprint, types } = require('podeng')
const address = require('./address')

const createMasker = require('../masker')

const maskerEmployeeID = createMasker('EmployeeID')

const Employee = blueprint.object({
    id: types.transform(id => maskerEmployeeID.mask(id)),
    name: types.string,
    age: types.number,
    locations: blueprint.array(address)
})

module.exports = Employee