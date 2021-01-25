const { blueprint } = require('podeng')
const Employee = require('./employee')

module.exports = blueprint.array(Employee)