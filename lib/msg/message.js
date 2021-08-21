let {
  WAConnection,
  MessageType,
  MessageOptions,
  Mimetype
} = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')

const message = async() => {
  let setting = JSON.parse(fs.readFileSync('./../setting.json'))
  let { prefix } = setting.prefix
  let ind = require('./lang/ind')
  let eng = require('./lang/eng')
  const lang = setting.language
  let MUT = new WAConnection()
  MUT.on('chat-update', async (mek) => {
    try {
      if (!mek.hasNewMessage) return
      mek = mek.messages.all()[0]
      if (mek.key && mek.key.remoteJid == 'status@broadcast') return
      global.prefix
      global.blocked
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      const { id, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
      const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      switch(command) {
        case 'test':
        MUT.sendMessage('test')
        break
      }
    } catch (e) {
      console.log('Error : %s', e)
    }
  })
}

module.exports = message
