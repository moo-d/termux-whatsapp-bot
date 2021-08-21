const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const Crypto = require('crypto')
const spin = require('spinnies')

const start = (id, text) => {
  spin.add(id, {text: text})
}
const info = (id, text) => {
  spin.update(id, {text: text})
}
const success = (id, text) => {
  spin.succeed(id, {text: text})
}
const close = (id, text) => {
  spin.fail(id, {text: text})
}
module.exports = { start, info, success, close }
