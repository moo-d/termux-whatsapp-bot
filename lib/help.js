const help = (prefix, packagejson) => {
  return `
GitHub : ${packagejson.homepage}
[Main]
=> ${prefix}help
=> ${prefix}menu

[About]
=> ${prefix}info
=> ${prefix}github
=> ${prefix}author
=> ${prefix}owner

[Sticker]
=> ${prefix}sticker
=> ${prefix}stiker
=> ${prefix}toimg

[News/Information]
=> ${prefix}corohelp [country]

[Fun]
=> ${prefix}meme

[Anime/Manga]
=> ${prefix}anime
=> ${prefix}randomanime

[Group]
=> ${prefix}listadmins
=> ${prefix}listadmin
=> ${prefix}adminslist
=> ${prefix}adminlist
=> ${prefix}linkgroup
=> ${prefix}level
=> ${prefix}fitnah @tag|texttarget|textbot
=> ${prefix}fake @tag|texttarget|textbot

[Group Admin]
=> ${prefix}promote @tag
=> ${prefix}demote @tag
=> ${prefix}add [62888xxx]
=> ${prefix}kick @tag
=> ${prefix}welcome [enable/disable]
=> ${prefix}privategc [enable/disable]
=> ${prefix}leave
=> ${prefix}closegc
=> ${prefix}opengc
=> ${prefix}leveling [enable/disable]
=> ${prefix}delete
=> ${prefix}del
=> ${prefix}setname [text]
=> ${prefix}setdesc [text]
=> ${prefix}nsfw [enable/disable]

[Owner]
=> ${prefix}setprefix [prefix]
=> ${prefix}setppbot
=> ${prefix}bc [text]
=> ${prefix}bcgc [text]
=> ${prefix}setpttmode [false/true]


[Other]
=> ${prefix}wame
=> ${prefix}wa.me
=> ${prefix}blocklist
=> ${prefix}tomp3`
}

module.exports = help
