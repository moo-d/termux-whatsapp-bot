const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel } = require('./lib/function/leveling')
const { color, bgcolor } = require('./lib/color')
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom } = require('./lib/msgf')
const { start, info, success, close } = require('./lib/instance')
const { fetchJson } = require('./lib/fetcher')
const fs = require('fs')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const setting = JSON.parse(fs.readFileSync('./lib/setting.json'))
const apilink = JSON.parse(fs.readFileSync('./lib/apilink.json'))
const { eng, ind, arab } = require('./txt/lang/')
const txtlang = ind
const welcomejson = JSON.parse(fs.readFileSync('./src/welcome.json'))
const nsfwjson = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const simijson = JSON.parse(fs.readFileSync('./src/simi.json'))
//const user = JSON.parse(fs.readFileSync('./src/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const privategc_ = JSON.parse(fs.readFileSync('./src/privategc.json'))

prefix = setting.prefix
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} ` + txtlang.hours() + ` ${pad(minutes)} ` + txtlang.minute() + ` ${pad(seconds)} ` + txtlang.second()
}

async function startsBaileysBot() {
  const MUT = new WAConnection()
  MUT.logger.level = 'warn'
  MUT.on('qr', () => {
    console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
  })
  fs.existsSync('./auth_info/auth.json') && MUT.loadAuthInfo('./auth_info/auth.json')
  MUT.on('connecting', () => {
    start('2', 'Connecting...')
  })
  MUT.on('open', () => {
    success('2', 'Connected')
  })
  await MUT.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./auth_info/auth.json', JSON.stringify(MUT.base64EncodedAuthInfo(), null, '\t'))
  MUT.on('group-participants-update', async (anu) => {
    if (!welcomejson.includes(anu.jid)) return
    try {
      const mdata = await MUT.groupMetadata(anu.jid)
      console.log(anu)
      if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	  ppimg = await MUT.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = txtlang.hello() + ` @${num.split('@')[0]}\n` + txtlang.welcome() + ` *${mdata.subject}*`
	let buff = await getBuffer(ppimg)
	MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      } else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	  ppimg = await MUT.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = txtlang.goodbye() + ` @${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
	MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      }
    } catch (e) {
      console.log('Error : ', e)
    }
  })
  MUT.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
  })
  MUT.on('chat-update', async (mek) => {
    try {
      if (!mek.hasNewMessage) return
      mek = mek.messages.all()[0]
      if (!mek.message) return
      if (mek.key && mek.key.remoteJid == 'status@broadcast') return
      if (mek.key.fromMe) return
      global.prefix
      global.blocked
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      const type = Object.keys(mek.message)[0]
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
      const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      const botNumber = MUT.user.jid
      const ownerNumber = [setting.ownernum] // replace this with your number
      const isGroup = from.endsWith('@g.us')
      const sender = isGroup ? mek.participant : mek.key.remoteJid
      const groupMetadata = isGroup ? await MUT.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isWelcome = isGroup ? welcomejson.includes(from) : false
      const isNsfw = isGroup ? nsfwjson.includes(from) : false
      const isSimi = isGroup ? simijson.includes(from) : false
      const isOwner = ownerNumber.includes(sender)
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
      }
      const reply = (teks) => {
	MUT.sendMessage(from, teks, text, {quoted:mek})
      }
      const sendMess = (hehe, teks) => {
	MUT.sendMessage(hehe, teks, text)
      }
      const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? MUT.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : MUT.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
      }
      if (isGroup && isLevelingOn) {
        const currentLevel = getLevelingLevel(sender)
        const checkId = getLevelingId(sender)
        try {
          if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
          const amountXp = Math.floor(Math.random() * 10) + 500
          const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
          const getLevel = getLevelingLevel(sender)
          addLevelingXp(sender, amountXp)
          if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            await reply(txtlang.levelup(sender, getLevelingXp, getLevel, getLevelingLevel))
          }
        } catch (err) {
          console.error(err)
        }
      }
      colors = ['red','white','black','blue','yellow','green']
      const isMedia = (type === 'imageMessage' || type === 'videoMessage')
      const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
      const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
      const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      if (!isGroup && isCmd) console.log('[MUT]', time, command, 'from', sender.split('@')[0], 'args :', args.length)
      if (!isGroup && !isCmd) console.log('[RECV]', time, 'Message', 'from', sender.split('@')[0], 'args :', args.length)
      if (isCmd && isGroup) console.log('[MUT]', time, command, 'from', sender.split('@')[0], 'in', groupName, 'args :', args.length)
      if (!isCmd && isGroup) console.log('[RECV]', time, 'Message', 'from', sender.split('@')[0], 'in', groupName, 'args :', args.length)
      switch(command) {
	case 'help':
	case 'menu':
	  MUT.sendMessage(from, txtlang.help(prefix), text)
	break
        case 'meme':
          reply(txtlang.wait())
          try {
            memeilink = await fetchJson(`${mycodeit}darkjokes`, { method: 'get'})
            memeimg = await getBuffer(memeilink.result)
            MUT.sendMessage(from, memeimg, image, { quoted:mek, caption:txtlang.done()})
          } catch(e) {
            reply('[ ! ] Error')
            console.log('Error : ' + e)
          }
        break
        case 'promote': 
          if (!isGroup) return reply(txtlang.onlygroup())
	  if (!isGroupAdmins) return reply(txtlang.onlyadmin())
	  if (!isBotGroupAdmins) return reply(txtlang.onlybadmin())
	  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(txtlang.tagcmd())
	  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	  if (mentioned.length > 1) {
	    txtacc = txtlang.acc()
	    for (let _ of mentioned) {
	      teks += `@${_.split('@')[0]}\n`
	    }
	    mentions(teks, mentioned, true)
	    MUT.groupMakeAdmin(from, mentioned)
	  } else {
	    mentions(`${txtlang.acc()}, ${txtlang.addedadmin()} : @${mentioned[0].split('@')[0]}`, mentioned, true)
	    MUT.groupMakeAdmin(from, mentioned)
	  }
	break
        case 'demote':
          if (!isGroup) return reply(txtlang.onlygroup())
	  if (!isGroupAdmins) return reply(txtlangonlyadmin())
          if (!isBotGroupAdmins) return reply(txtlang.onlybdmin())
	  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝐓𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐭𝐮𝐫𝐮𝐧𝐤𝐚𝐧 𝐚𝐝𝐦𝐢𝐧')
	  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	  if (mentioned.length > 1) {
	    teks = ''
	    for (let _ of mentioned) {
	      teks += `${txtlang.acc()}, ${txtlang.demotedadmin()} :\n`
	      teks += `@_.split('@')[0]`
	    }
	    mentions(teks, mentioned, true)
	    MUT.groupDemoteAdmin(from, mentioned)
	  } else {
	    mentions(`${txtlang.acc()}, ${txtlang.demotedadmin()} @${mentioned[0].split('@')[0]}\n ${txtlang.ongroup()} _*${groupMetadata.subject}*_`, mentioned, true)
	    MUT.groupDemoteAdmin(from, mentioned)
	  }
	break
        case 'wa.me':
	case 'wame':
          try {
            ppimg = await MUT.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
          } catch {
            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
          }
          ppimgbuf = await getBuffer(ppimg)
          teks = `${txtlang.wame(sender)}`
          MUT.sendMessage(from, ppimgbuf, image, { quoted:mek, caption: teks, contextInfo: { mentionedJid: [sender] } } )
	break
        case 'blocklist':
          teks = 'This is list of blocked number :\n'
          for (let block of blocked) {
            teks += `~> @${block.split('@')[0]}\n`
          }
          teks += `Total : ${blocked.length}`
          MUT.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
        break
        case 'listadmins':
        case 'listadmin':
        case 'adminslist':
        case 'adminlist':
          if (!isGroup) return reply(mess.only.group)
          teks = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
          no = 0
          for (let admon of groupAdmins) {
            no += 1                                                                                                                                      teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
          }
          mentions(teks, groupAdmins, true)
        break
        case 'setprefix':
          if (args.length < 1) return
          if (!isOwner) return reply(txtlang.onlyowner())
          prefix = args[0]
          reply(txtlang.prefixchanged() + ` : ${prefix}`)
          console.log(color('[INFO]', 'green'), color(`${txtlang.prefixchanged()} : ${prefix}`, 'yellow'));
        break
        case 'setppbot':
          if (!isQuotedImage) return reply(`${txtlang.needimgcpt()} ${txtlang.or()} ${txtlang.needtagimgcpt()}`)
          if (!isOwner) return reply(txtlang.onlyowner())
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
          media = await MUT.downloadAndSaveMediaMessage(enmedia)
          await MUT.updateProfilePicture(botNumber, media)
          reply(txtlang.done())
        break
        case 'bc':
          if (!isOwner) return reply(txtlang.onlyowner())
          if (args.length < 1) return reply('.......')
          anu = await MUT.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            buff = await MUT.downloadMediaMessage(encmedia)
            for (let _ of anu) {
              MUT.sendMessage(_.jid, buff, image, {caption: `*[ BROADCAST ]*\n\n${body.slice(4)}`})
            }
            reply('')
          } else {
            for (let _ of anu) {
              sendMess(_.jid, `*[ BROADCAST ]*\n\n${body.slice(4)}`)
            }
            reply('Broadcast' + txtlang.done())
          }
        break
        case 'bcgc':
          if (!isOwner) return reply(txtlang.onlyowner())                              
          if (args.length < 1) return reply('.......')
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            buff = await MUT.downloadMediaMessage(encmedia)
            for (let _ of groupMembers) {
              MUT.sendMessage(_.jid, buff, image, {caption: `*[ BC GROUP ]*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
            }
            reply('')
          } else {
            for (let _ of groupMembers) {
              sendMess(_.jid, `*[ BC GROUP ]*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
            }
            reply('Broadcast Group' + txtlang.done())
          }
        break
        case 'add':
          if (!isGroup) return reply(txtlang.onlygroup())
          if (!isGroupAdmins) return reply(txtlang.onlyadmin())
          if (!isBotGroupAdmins) return reply(txtlang.onlybadmin())
          if (args.length < 1) return reply('.....')
          if (args[0].startsWith('08')) return reply(txtlang.countrynum())
          try {                                                                                                  num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
            MUT.groupAdd(from, [num])
            reply(txtlang.done())
          } catch (e) {
            console.log('Error :', e)                                                                            reply(txtlang.fail())
          }
        break
        break
        case 'kick':
          if (!isGroup) return reply(txtlang.onlygroup())                                                                                              if (!isGroupAdmins) return reply(txtlang.onlyadmin())
          if (!isBotGroupAdmins) return reply(txtlang.onlybadmin())
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(txtlang.needtagmember())
	default:
        if (isGroup && isSimi && budy != undefined) {
	  console.log(budy)
	  muehe = await simih(budy)
          console.log(muehe)
          reply(muehe)
        } else {
          console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
        }
      }
    } catch (e) {
      console.log('Error : %s', color(e, 'red'))
    }
  })
}
startsBaileysBot()
