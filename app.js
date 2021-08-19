const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('express')
const newinstance = require('./newinstance')

//function
async function startBot () {
  const MUT = new WAConnection()
  return newinstance()
}

startBot()
.catch (err => console.log("[!] error: " + err) ) // catch any errors
