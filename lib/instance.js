const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const Crypto = require('crypto')
const spin = require('spinnies')

const start = (id, text) => {
  spins.add(id, {text: text})
}
const info = (id, text) => {
  spins.update(id, {text: text})
}
const success = (id, text) => {
  spins.succeed(id, {text: text})
}
const close = (id, text) => {
  spins.fail(id, {text: text})
}
module.exports = { start, info, success, close }
