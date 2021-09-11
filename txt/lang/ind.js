exports.wait = () => {
  return `Mohon tunggu sebentar...`
}
exports.hours = () => {
  return `Jam`
}
exports.minute = () => {
  return `Menit`
}
exports.second = () => {
  return `Detik`
}
exports.hello = () => {
  return `Halo`
}
exports.welcome = () => {
  return `Selamat datang di`
}
exports.goodbye = () => {
  return `Selamat tinggal`
}
exports.done = () => {
  return `Selesai`
}
exports.onlygroup = () => {
  return `[ ! ] Perintah ini hanya bisa di gunakan di dalam group.`
}
exports.onlyadmin = () => {
  return `[ ! ] Perintah ini hanya bisa di gunakan oleh admin group.`
}
exports.onlybadmin = () => {
  return `[ ! ] Perintah ini hanya bisa di gunakan saat bot menjadi admin group.`
}
exports.onlyowner = () => {
  return `[ ! ] Perintah ini hanya bisa di gunakan oleh owner.`
}
exports.acc = () => {
  return `Perintah diterima.`
}
exports.addedadmin = () => {
  return `Menambahkan menjadi admin group.`
}
exports.demotedadmin = () => {
  return `Menurunkan jabatan dari admin group.`
}
exports.ongroup = () => {
  return `di group`
}
exports.prefixchanged = () => {
  return ` Prefix telah diganti menjadi`
}
exports.needimgcpt = () => {
  return `Kirim gambar dengan caption`
}
exports.needtagimgcpt = () => {
  return `Tag gambar yang telah dikirim`
}
exports.or = () => {
  return `Atau`
}
exports.needtagmember = () => {
  return `Tag member`
}
exports.wrongf = () => {
  return 'Maaf, format yang anda masukan salah'
}
exports.kicked = () => {
  return `Mengeluarkan`
}
exports.succactwelcome = () => {
  return `[BERHASIL] Mengaktifkan fitur welcome di group ini`
}
exports.succnonactwelcome = () => {
  return `[BERHASIL] Menonaktifkan fitur welcome di group ini`
}
exports.succactprivategc = () => {
  return `[BERHASIL] Mengaktifkan fitur privategc di group ini`
}
exports.succnonactprivategc = () => {
  return `[BERHASIL] Menonaktifkan fitur privategc di group ini`
}
exports.enaordisa = () => {
  return `enable untuk mengaktifkan, disable untuk menonaktifkan fitur.`
}
exports.gcclosed = (nomor) => {
  return `Group telah di tutup oleh @${nomor.split("@")[0]}, semua peserta tidak dapat mengirim pesan.`
}
exports.gcopened = (sender) => {
  return `Group telah di buka oleh @${sender.split("@")[0]}, semua peserta dapat mengirim pesan.`
}
exports.pttmodechanged = () => {
  return `Ptt mode telah diubah ke`
}
exports.fail = () => {
 return `Gagal`
}
exports.needtagstickcpt = () => {
  return `Tag stickernya`
}
exports.needtagvidcpt = () => {
  return `Tag videonya`
}
exports.levelingalron = () => {
  return `Leveling telah aktif sebelumnya`
}
exports.levelon = () => {
  return `[BERHASIL] Mengaktifkan fitur leveling`
}
exports.leveloff = () => {
  return `[BERHASIL] Menonaktifkan fitur leveling`
}
exports.levelingon = () => {
  return `Fitur leveling belum diaktifkan di group ini.`
}
exports.levelnol = () => {
  return `Levelmu masih 0`
}
exports.onlybotdel = () => {
  return `Hanya dapat menghapus pesan dari bot`
}
exports.exafakecmd = () => {
  return `Contoh: @tag|texttarget|textbot`
}
exports.namegcchanged = () => {
  return `[BERHASIL] Mengganti nama group ini`
}
exports.goodnight = () => {
  return `Selamat malam🌃`
}
exports.goodafternoon = () => {
  return `Selamat sore🌆`
}
exports.goodafternun = () => {
  return `Selamat siang🌇`
}
exports.goodmorning = () => {
  return `Selamat pagi🌅`
}
exports.nsfwon = () => {
  return `[BERHASIL] Mengaktifkan fitur NSFW`
}
exports.nsfwoff = () => {
  return `[BERHASIL] Menonaktifkan fitur NSFW`
}
exports.nsfwalron = () => {
  return `NSFW telah aktif sebelumnya`
}
expires.nsfwnoton = () => {
  return `Fitur NSFW belum diaktifkan di group ini.`
}
exports.levelview = (sem, userXp, userLevel, pushname) => {
  return `
*[ ${pushname} LEVEL ]*
• *Name* : ${pushname}
• *XP* : ${userXp}
• *Level* : ${userLevel}
`
}
exports.hasverifyed = () => {
  return `Kamu telah daftar sebelumnya`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Nama*: ${sender}
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
Selamat!! 🎉🎉`
}
exports.wame = (sender) => {
  return `[ *WA-ME* ]
• _Diminta Oleh_ : *@${sender.split("@s.whatsapp.net")[0]}*
• _Tautan WhatsApp Anda_ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*
  *Atau ( / )*
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`
}
exports.infobot = (uptime, setting, runbrowser, mcc, mnc, browserversion, runtimebot, oshp, osversion, devicemodel, ramdevice, ramdevicetotal, waversion, speedbot) => {
  return `
• Nama : *${setting.botname}*
• Versi Bot : 0.0.1
• Browser : *${runbrowser}*
• Versi Browser : *${browserversion}*
• Speed : ${speedbot}
• Runtime : *${runtimebot}*

[ *DEVICE* ]
• Device : ${oshp}
• Versi OS : ${osversion}
• Versi Device : ${devicemodel}
• RAM : ${ramdevice}MB / ${ramdevicetotal}MB
• MCC : ${mcc}
• MNC : ${mnc}
• Versi Wa : ${waversion}
`
}
exports.verify = (serialUser, namaUser, sender) => {
  return `
*[VERIFIKASI]*
Serial Kode : *${serialUser}*
• *Nama* : *${namaUser}*
• *Nomor* : *${sender.split("@")[0]}*`
}
exports.notverify = () => {
  return `
Kamu belum terverifikasi.

Verify sekarang yuk!
`
}
exports.verifynowbut = () => {
  return `Verifikasi Sekarang`
}
