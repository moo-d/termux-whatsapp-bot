const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const Crypto = require('crypto')

const h2k = (number) => {
  var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
  var tier = Math.log10(Math.abs(number)) / 3 | 0
  if(tier == 0) return number
  var postfix = SI_POSTFIXES[tier]
  var scale = Math.pow(10, tier * 3)
  var scaled = number / scale
  var formatted = scaled.toFixed(1) + ''
  if (/\.0$/.test(formatted))
  formatted = formatted.substr(0, formatted.length - 2)
  return formatted + postfix
}
const getBuffer = async (url, options) => {
  try {
    options ? options : {}
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}
const randomBytes = (length) => {
  return Crypto.randomBytes(length)
}
const generateMessageID = () => {
  return randomBytes(10).toString('hex').toUpperCase()
}
const getGroupAdmins = (participants) => {
  admins = []
  for (let i of participants) {
    i.isAdmin ? admins.push(i.jid) : ''
  }
  return admins
}
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom }
