let {
  WAConnection
} = require('@adiwajshing/baileys')

async function connectToWhatsApp () {
  const mut = new WAConnection()
  mut.on('chats-received', async ({ hasNewChats }) => {
    console.log(`You have ${mut.chats.length} chats, Chats available: ${hasNewChats}`)

    const unread = await mut.loadAllUnreadMessages ()
    console.log ("you have " + unread.length + " unread messages")
  })
  mut.on('contacts-received', () => {
    console.log('you have ' + Object.keys(mut.contacts).length + ' contacts')
  })
}
