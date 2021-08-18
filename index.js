let {
  WAConnection
} = require('@adiwajshing/baileys')
let fs = require('fs')

//Function
async function startBot () {
  const mut = new WAConnection()
  mut.logger.level = 'warn'
  mut.on('qr', () => {
    console.log('[!] Scan the QR code!')
  })
  //Added-Session
  fs.existsSync('./session.json') && mut.loadAuthInfo('./session.json')
  mut.on('connecting', () => {
    start('2', 'Connecting...')
  })
  mut.on('open', () => {
    success('2', 'Connected')
  })
  await mut.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(mut.base64EncodedAuthInfo(), null, '\t'))

  mut.on('chats-received', async ({ hasNewChats }) => {
    console.log(`You have ${mut.chats.length} chats, Chats available: ${hasNewChats}`)

    const unread = await mut.loadAllUnreadMessages ()
    console.log ("you have " + unread.length + " unread messages")
  })
  mut.on('contacts-received', () => {
    console.log('you have ' + Object.keys(mut.contacts).length + ' contacts')
  })
  await mut.connect ()
  mut.on('chat-update', chatUpdate => {
    if (chatUpdate.messages && chatUpdate.count) {
      const message = chatUpdate.messages.all()[0]
      console.log (message)
    } else console.log (chatUpdate)
  })
}

//Run-Bot
startBot ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors
