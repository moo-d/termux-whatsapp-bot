exports.help = (prefix) => {
  return `
[الأساسية]
=> ${prefix}help
=> ${prefix}menu
[مرح]
=> ${prefix}meme
`
}
exports.wait = () => {
  return `انتظر...`
}
exports.hours = () => {
  return `ساعات`
}
exports.minute = () => {
  return `دقيقة`
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
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
}
