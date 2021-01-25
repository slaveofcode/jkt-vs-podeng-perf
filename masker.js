const Hashids = require('hashids')

const SALT = 'jdjhfkbdkjfbku7ih784ew3uyhb76frgi78hod89h38y'

const getInstance = (salt, minLength = 5) => {
  return new Hashids(salt, minLength)
}

const mask = hasher => (...params) => {
  return hasher.encode(...params)
}

const read = hasher => (mask) => {
  const decoded = hasher.decode(mask)
  if (decoded.length === 0) {
    return null
  }

  return decoded.length === 1 ? decoded[0] : decoded
}

const createMask = (prefix) => {
  const hasher = getInstance(prefix + SALT)
  return {
    mask: mask(hasher),
    read: read(hasher),
  }
}

module.exports = createMask