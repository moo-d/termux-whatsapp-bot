exports.help = (prefix) => {
  return `
[Main]
=> ${prefix}help
=> ${prefix}menu

[Fun]
=> ${prefix}meme
`
}
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
