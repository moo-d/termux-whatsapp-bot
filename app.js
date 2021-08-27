const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('fs')
const message = require('./lib/msg/message')
const axios = require('axios')

blocked = []

//function
async function startBot () {
  const MUT = new WAConnection()
  let { start, info, success, close } = require('./lib/instance')
  const MUT = new WAConnection()
  MUT.logger.level = 'warn'
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
  await  MUT.connect()
  //Calling files
}

startBot()
.catch (err => console.log("[!] error: " + err) ) // catch any errors
