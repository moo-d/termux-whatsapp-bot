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
  return `مرحبا بك في
`
}
exports.goodbye = () => {
  return `مع السلامة`
}
exports.done = () => {
  return `منتهي
  `
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
exports.levelingalron = () => {
  return `ميزة Leveling نشطة بالفعل`
}
exports.levelon = () => {
  return `[ينجح] قم بتنشيط ميزة Leveling`
}
exports.leveloff = () => {
  return `[ينجح] قم بتعطيل ميزة Leveling`
}
exports.levelingon = () => {
  return `لم يتم تنشيط ميزة Leveling في هذه المجموعة.`
}
exports.levelnol = () => {
  return `مستواك لا يزال 0`
}
exports.onlybotdel = () => {
  return `يمكن فقط حذف الرسائل من الروبوتات`
}
exports.exafakecmd = () => {
  return `مثال: @tag|texttarget|textbot`
}
exports.namegcchanged = () => {
  return `[ينجح] أعد تسمية هذه المجموعة`
}
exports.goodnight = () => {
  return `مساء الخير🌃`
}
exports.goodafternoon = () => {
  return `طاب يومك🌆`
}
exports.goodafternun = () => {
  return `طاب نهارك🌇`
}
exports.goodmorning = () => {
  return `صباح الخير🌅`
}
exports.hasverifyed = () => {
  return `لقد قمت بالتسجيل من قبل`
}
exports.nsfwon = () => {
  return `[ينجح] قم بتنشيط ميزة NSFW`
}
exports.nsfwoff = () => {
  return `[ينجح] قم بتعطيل ميزة NSFW`
}
exports.nsfwalron = () => {
  return `ميزة NSFW نشطة بالفعل`
}
exports.nsfwnoton = () => {
  return `لم يتم تنشيط ميزة NSFW في هذه المجموعة.`
}
exports.levelview = (sem, userXp, userLevel, pushname) => {
  return `
*[ ${pushname} مستوى ]*
• *اسم* : ${pushname}
• *إكس بي* : ${userXp}
• *مستوى* : ${userLevel}
`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ يصل المستوى ]*
• *اسم*: ${sender}
• *إكس بي*: ${getLevelingXp(sender)}
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
exports.infobot = (uptime, setting, runbrowser, mcc, mnc, browserversion, runtimebot, oshp, osversion, devicemodel, ramdevice, ramdevicetotal, waversion, speedbot) => {
  return `
• اسم : *${setting.botname}*
• نسخة بوت : *0.0.1*
• المتصفح : *${runbrowser}*
• إصدار المستعرض : *${browserversion}*
• سرعة : ${speedbot}
• مدة العرض : *${runtimebot}*

[ *جهاز* ]
• جهاز : ${oshp}
• إصدار نظام التشغيل : ${osversion}
• إصدار الجهاز : ${devicemodel}
• RAM : ${ramdevice}MB / ${ramdevicetotal}MB
• MCC : ${mcc}
• MNC : ${mnc}
• نسخة WhatsApp : ${waversion}
`
}
exports.verify = (serialUser, namaUser, sender) => {
return `
*[تحقق]*
رمز التسلسل : *${serialUser}*
• *اسم* : *${namaUser}*
• *عدد* : *${sender.split("@")[0]}*`
}
exports.notverify = () => {
  return `انت لم توثق

وثق نفسك الان`
}
exports.verifynowbut = () => {
  return `وثق نفسك الان`
}
exports.parcountry = () => {
  return `أدخل اسم الدولة`
}
exports.brainlyview = (br_quest, br_answer) => {
  return `
*[BRAINLY]*

*سؤال*: ${br_quest}
*إجابه* ${br_answer}\n\n`
}
exports.needquest = () => {
  return `ما هو السؤال`
}
