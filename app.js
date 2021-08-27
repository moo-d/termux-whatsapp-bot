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
  MUT.on('group-participants-update', async (anu) => {
    //if (!welkom.includes(anu.jid)) return
    try {
      let gcind = require('./lib/lang/ind')
      let gceng = require('./lib/lang/eng')
      let gcset = JSON.parse(fs.readFileSync('./lib/setting.json'))
      let gclang = 'gc' + gcset.language
      const mdata = await MUT.groupMetadata(anu.jid)
      console.log(anu)
      if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	  ppimg = await MUT.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = gclang(sayhello()) + `@${num.split('@')[0]}\n` + gclang(gcwelcome()) + `*${mdata.subject}*`
	let buff = await getBuffer(ppimg)
	MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      } else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	  ppimg = await MUT.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
          ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = gclang(saygoodbye()) + `@${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
        MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      }
    } catch (e) {
      console.log('Error : %s', color(e, 'red'))
    }
  })
  MUT.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
  })
  await  MUT.connect(MUT)
  //Calling files
  return message()
}

startBot()
.catch (err => console.log("[!] error: " + err) ) // catch any errors
