const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const Crypto = require('crypto')

const simih = async (text) => {
  try {
    const sami = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
    const res = await sami.json()
    return res.simsimi_talk_set.answers[0].sentence
  } catch {
    return 'Simi ga tau kak'
  }
}
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
module.exports = { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom }
