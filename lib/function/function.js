let {
  WAConnection,
  MessageType,
  MessageOptions,
  Mimetype
} = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')

const groupart = (MUT) => {
  MUT.on('group-participants-update', async (anu) => {
    if (!welkom.includes(anu.jid)) return
    try {
      let gcind = require('./../msg/lang/ind')
      let gceng = require('./../msg/lang/eng')
      let gcset = JSON.parse(fs.readFileSync('./../setting.json'))
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
	teks = gclang.sayhello + `@${num.split('@')[0]}\n` + gclang.gcwelcome + `*${mdata.subject}*`
	let buff = await getBuffer(ppimg)
	MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      } else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	  ppimg = await MUT.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
          ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = gclang.saygoodbye + `@${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
        MUT.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      }
    } catch (e) {
      console.log('Error : %s', color(e, 'red'))
    }
  })
}
const getImg = async (url, options) => {
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

module.exports = { groupart, getImg }
