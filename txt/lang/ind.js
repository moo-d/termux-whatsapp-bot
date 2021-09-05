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
exports.acc = () => {
  return `Perintah diterima.`
}
exports.addedadmin = () => {
  return `Menambahkan menjadi admin group.`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Congrats!! 🎉🎉`
}
