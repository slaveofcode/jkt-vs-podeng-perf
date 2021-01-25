const { blueprint, types } = require('podeng')

const Address = blueprint.object({
    street_address: types.string,
    city: types.string,
    province: types.string,
    lat: types.number,
    lng: types.number,
})

module.exports = Address