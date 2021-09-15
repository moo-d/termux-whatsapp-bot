exports.wait = () => {
  return `Wait...`
}
exports.hours = () => {
  return `Hours`
}
exports.minute = () => {
  return `Minute`
}
exports.second = () => {
  return `Second`
}
exports.hello = () => {
  return `Hello`
}
exports.welcome = () => {
  return `Welcome to`
}
exports.goodbye = () => {
  return `GoodBye`
}
exports.done = () => {
  return `Done`
}
exports.onlygroup = () => {
  return `[ ! ] This command can only be used in groups.`
}
exports.onlyadmin = () => {
  return `[ ! ] This command can only be used by group admins.`
}
exports.onlybadmin = () => {
  return `[ ! ] This command can only be used when the bot is an admin group.`
}
exports.onlyowner = () => {
  return `[ ! ] This command can only be used by owner.`

}
exports.acc = () => {
  return `Order accepted.`
}
exports.addedadmin = () => {
  return `add to be admin group.`
}
exports.demotedadmin = () => {
  return `Get down from the admin group.`
}
exports.ongroup = () => {
  return `on group`
}
exports.prefixchanged = () => {
  return ` Prefix has been changed  to`
}
exports.needimgcpt = () => {
  return `Send a picture with a caption`
}
exports.needtagimgcpt = () => {
  return `Image tags that have been sent`
}
exports.or = () => {
  return `Or`
}
exports.needtagmember = () => {
  return `Tag member`
}
exports.wrongf = () => {
  return 'Sorry, the format you entered is wrong'
}
exports.kicked = () => {
  return `Ejected`
}
exports.succactwelcome = () => {
  return `[SUCCESSFUL] Enable the welcome feature in this group`
}
exports.succnonactwelcome = () => {
  return `[SUCCESSFUL] Disable the welcome feature in this group`
}
exports.succactprivategc = () => {
  return `[SUCCESSFUL] Enable the privategc feature in this group`
}
exports.succnonactprivategc = () => {
  return `[SUCCESSFUL] Disable the privategc feature in this group`
}
exports.enaordisa = () => {
  return `enable to enable, disable to disable features.`
}
exports.gcclosed = (nomor) => {
  return `The group has been closed by @${nomor.split("@")[0]}, all participants cannot send messages.`
}
exports.gcopened = (sender) => {
  return `The group has been opened by @${number.split("@")[0]}, all participants can send messages.`
}
exports.pttmodechanged = () => {
  return `Ptt mode has changed to`
}
exports.fail = () => {
 return `Failed`
}
exports.needtagstickcpt = () => {
  return `Tag the sticker`
}
exports.needtagvidcpt = () => {
  return `Tag the video`
}
exports.levelingalron = () => {
  return `Leveling has been active before`
}
exports.levelon = () => {
  return `[SUCCES] Enable leveling feature`
}
exports.leveloff = () => {
  return `[SUCCESS] Disable leveling feature`
}
exports.levelingon = () => {
  return `The leveling feature has not been activated in this group.`
}
exports.levelnol = () => {
  return `Your level is still 0`
}
exports.onlybotdel = () => {
  return `Can only delete messages from bots`
}
exports.exafakecmd = () => {
  return `Example: @tag|texttarget|textbot`
}
exports.namegcchanged = () => {
  return `[SUCCESS] Renaming this group`
}
exports.goodnight = () => {
  return `Good night🌃`
}
exports.goodafternoon = () => {
  return `Good afternoon🌆`
}
exports.goodafternun = () => {
  return `Good afternoon🌇`
}
exports.goodmorning = () => {
  return `Good morning🌅`
}
exports.hasverifyed = () => {
  return `You have registered before`
}
exports.nsfwon = () => {
  return `[SUCCESS] Enable NSFW feature`
}
exports.nsfwoff = () => {
  return `[SUCCESS] Disable NSFW feature`
}
exports.nsfwalron = () => {
  return `NSFW has been active before`
}
exports.nsfwnotact = () => {
  return `The NSFW feature has not been activated in this group.`
}
exports.levelview = (sem, userXp, userLevel, pushname) => {
  return `
*[ ${pushname} LEVEL ]*
• *Name* : ${pushname}
• *XP* : ${userXp}
• *Level* : ${userLevel}
`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Selamat!! 🎉🎉`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Congrats!! 🎉🎉`
}
exports.wame = (sender) => {
  return `[ *WA-ME* ]
• _Request by_ : *@${sender.split("@s.whatsapp.net")[0]}*
• _Your link WhatsApp_ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*
  *Or ( / )*
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`
}
exports.infobot = (uptime, setting, runbrowser, mcc, mnc, browserversion, runtimebot, oshp, osversion, devicemodel, ramdevice, ramdevicetotal, waversion, speedbot) => {
  return `
• Name : *${setting.botname}*
• Bot Version : 0.0.1
• Browser : *${runbrowser}*
• Browser Version : *${browserversion}*
• Speed : ${speedbot}
• Runtime : *${runtimebot}*

[ *DEVICE* ]
• Device : ${oshp}
• OS Version : ${osversion}
• Device Version : ${devicemodel}
• RAM : ${ramdevice}MB / ${ramdevicetotal}MB
• MCC : ${mcc}
• MNC : ${mnc}
• WA Version : ${waversion}
`
}
exports.verify = (serialUser, namaUser, sender) => {
return `
*[VERIFY]*
Serial Code : *${serialUser}*
• *Name* : *${namaUser}*
• *Number* : *${sender.split("@")[0]}*`
}
exports.notverify = () => {
  return `
You haven't verified.

Verify now!
`
}

exports.verifynowbut = () => {
  return `Verify Now`
}
exports.parcountry = () => {
  return `Enter country name`
}
exports.brainlyview = (br_quest, br_answer) => {
  return `
*[BRAINLY]*

*Question* : ${br_quest}
*Answer* : ${br_answer}\n\n`
}
exports.needquest = () => {
  return `what's the question?`
}
