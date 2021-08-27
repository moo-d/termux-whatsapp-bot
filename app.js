const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('fs')
const newinstance = require('./newinstance')
const message = require('./lib/msg/message')
const axios = require('axios')
const { groupart } = require('./lib/function/function')
//function
async function startBot () {
  const MUT = new WAConnection()
  //Calling files
  return newinstance()
  return groupart(MUT)
  return message(MUT)
}

startBot()
.catch (err => console.log("[!] error: " + err) ) // catch any errors
