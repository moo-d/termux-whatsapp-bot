let {
  WAConnection
} = require('@adiwajshing/baileys')
let fs = require('fs')

//Function
async function startBot () {
  const MUT = new WAConnection()
  let attempts = 0
  MUT.on('qr', qr => {
    attempts += 1
    body: JSON.stringify({ type: 'qr', qr, attempts })
  })
  MUT.on('blocklist-update', () => {
    console.log('blocklist-update')
    const number = MUT.user.jid.split('@s.whatsapp.net')[0]
    fs.writeFileSync(`auth_info/${number}.json`, JSON.stringify(MUT.base64EncodedAuthInfo(), null, 2))
  })

  MUT.on('received-pong', () => {
    console.log('received-pong')
    MUT.close()
  })
  MUT.connect()
  MUT.on('chat-update', chatUpdate => {
    if (chatUpdate.messages && chatUpdate.count) {
        const message = chatUpdate.messages.all()[0]
        console.log(message)
    } else console.log(chatUpdate)
  })
}

//Run-Bot
startBot ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors
