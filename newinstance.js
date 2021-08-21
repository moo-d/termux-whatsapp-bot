let {
  WAConnection
} = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')

const newinstance = async () => {
  let { start, info, success, close } = require('./lib/instance')
  const MUT = new WAConnection()
  let attempts = 0
  MUT.on('qr', qr => {
    console.log('[server] scan the qr code')
  })
  MUT.on('credentials-updated', () => {
    fs.writeFileSync('./auth_info/auth.json', JSON.stringify(MUT.base64EncodedAuthInfo(), null, '\t'))
    info('2', 'Login Info Updated')
  })
  fs.existsSync('./auth_info/auth.json') && MUT.loadAuthInfo('./auth_info/auth.json')
  MUT.on('connecting', () => {
    start('2', 'Connecting...')
  })
  MUT.on('open', () => {
    success('2', 'Connected')
  })
  MUT.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
  })
  MUT.on('received-pong', () => {
    console.log('received-pong')
    MUT.close()
  })
  MUT.connect()
}

module.exports = newinstance
