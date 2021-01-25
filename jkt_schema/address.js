const jkt = require('jkt')

const Address = jkt`
  street_address: String
  city: String
  province: String
  lat: Number
  lng: Number
`

module.exports = Address