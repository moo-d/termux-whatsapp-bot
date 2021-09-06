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
  return `ثانيا`
}
exports.hello = () => {
  return `أهلا`
}
exports.welcome = () => {
  return `مرحبا بك في`
}
exports.goodbye = () => {
  return `مع السلامة`
}
exports.done = () => {
  return `منتهي`
}
exports.onlygroup = () => {
  return `[ ! ] لا يمكن استخدام هذا الأمر إلا في مجموعات.`
}
exports.onlyadmin = () => {
  return `[ ! ] لا يمكن استخدام هذا الأمر إلا من قبل مسؤولي المجموعة.`
}
exports.onlybadmin = () => {
  return `[ ! ] لا يمكن استخدام هذا الأمر إلا عندما يكون الروبوت مجموعة مشرف.`
}
exports.onlyowner = () => {
  return `[ ! ] لا يمكن استخدام هذا الأمر إلا من قبل المالك.`
}
exports.acc = () => {
  return `تم قبول الطلب.`
}
exports.addedadmin = () => {
  return `أضف لتكون مجموعة الإدارة.`
}
exports.demotedadmin = () => {
  return `النزول من مجموعة الإدارة.`
}
exports.ongroup = () => {
  return `في المجموعة`
}
exports.prefixchanged = () => {
  return ` تم تغيير البادئة إلى`
}
exports.needimgcpt = () => {
  return `أرسل صورة مع شرح`
}
exports.needtagimgcpt = () => {
  return `علامات الصور التي تم إرسالها`
}
exports.or = () => {
  return `أو`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ يصل المستوى ]*
• *اسم*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *مستوى*: ${getLevel} ~> ${getLevelingLevel(sender)}
تهاني!! 🎉🎉`
}
exports.wame = (sender) => {
  return `[ *WA-ME* ]
• _طلب عن طريق_ : *@${sender.split("@s.whatsapp.net")[0]}*
• _Your link WhatsApp_ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*
  *Or ( / )*
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
}
