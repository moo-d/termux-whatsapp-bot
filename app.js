const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('express')
const newinstance = require('./newinstance')
const message = require('./lib/msg/message')

//function
async function startBot () {
  const MUT = new WAConnection()
  //Calling files
  return newinstance()
  return message()
}

startBot()
.catch (err => console.log("[!] error: " + err) ) // catch any errors
