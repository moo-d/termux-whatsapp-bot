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
exports.needtagmember = () => {
  return `عضو العلامة`
}
exports.wrongf = () => {
  return `عذرا ، الصيغة التي أدخلتها خاطئة`
}
exports.kicked = () => {
  return `طرد`
}
exports.succactwelcome = () => {
  return `[ناجح] تمكين ميزة welcome في هذه المجموعة`
}
exports.succnonactwelcome = () => {
  return `[تم بنجاح] تعطيل ميزة welcome في هذه المجموعة`
}
exports.succactprivategc = () => {
  return `[ناجح] تمكين ميزة privategc في هذه المجموعة`
}
exports.succnonactprivategc = () => {
  return `[تم بنجاح] تعطيل ميزة privategc في هذه المجموعة`
}
exports.enaordisa = () => {
  return `تمكين لتمكين ، تعطيل لتعطيل الميزات`
}
exports.gcclosed = (nomor) => {
  return `تم إغلاق المجموعة بواسطة @${number.split("@")[0]} ، لا يمكن لجميع المشاركين إرسال الرسائل.`
}
exports.gcopened = (sender) => {
  return `تم فتح المجموعة بواسطة @${number.split("@")[0]} ، يمكن لجميع المشاركين إرسال الرسائل.`
}
exports.pttmodechanged = () => {
  return `تم تغيير Ptt mode إلى`
}
exports.fail = () => {
 return `باءت بالفشل`
}
exports.needtagstickcpt = () => {
  return `الرد على الملصق`
}
exports.needtagvidcpt = () => {
  return `الرد على الفيديو`
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
• _رابط WhatsApp الخاص بك_ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*
  *أو ( / )*
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`
}
