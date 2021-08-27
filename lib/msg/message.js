let {
  WAConnection,
  MessageType,
  MessageOptions,
  Mimetype
} = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')

const message = async(MUT) => {
  let setting = JSON.parse(fs.readFileSync('./../setting.json'))
  let { prefix } = setting.prefix
  let ind = require('./lang/ind')
  let eng = require('./lang/eng')
  const lang = setting.language
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
      let apilink = JSON.parse(fs.readFileSync('./../apilink.json'))
      const botNumber = client.user.jid
      const ownerNumber = [setting.ownernum] // replace this with your number
      const isGroup = from.endsWith('@g.us')
      const sender = isGroup ? mek.participant : mek.key.remoteJid
      const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isNsfw = isGroup ? nsfw.includes(from) : false
      const isOwner = ownerNumber.includes(sender)
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
      }
      const reply = (teks) => {
	client.sendMessage(from, teks, text, {quoted:mek})
      }
      const sendMess = (hehe, teks) => {
	client.sendMessage(hehe, teks, text)
      }
      const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
      }
      colors = ['red','white','black','blue','yellow','green']
      const isMedia = (type === 'imageMessage' || type === 'videoMessage')
      const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
      const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
      const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      if (!isGroup && isCmd) console.log('[MUT] ->', time, command, 'from', sender.split('@')[0], 'args :', args.length)
      if (!isGroup && !isCmd) console.log('[RECV] ->', time, 'Message', 'from', sender.split('@')[0], 'args :', args.length)
      if (isCmd && isGroup) console.log('[MUT] ->', time, command, 'from', sender.split('@')[0], 'in', groupName, 'args :', args.length)
      if (!isCmd && isGroup) console.log('[RECV] ->' time, 'Message', 'from', sender.split('@')[0], 'in', groupName, 'args :', args.length)
      switch(command) {
        case 'test':
          MUT.sendMessage('test')
        break
        case 'meme':
          getImg = {
	    try {
	      options ? options : {}
	      const res = await axios({
	        method: "get",
		apilink.mycodeit + 'darkjokes',
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
          MUT.sendMessage(from, getImg, image, {quoted: mek, caption: '...'})
        break
      }
    } catch (e) {
      console.log('Error : %s', e)
    }
  })
}

module.exports = message
