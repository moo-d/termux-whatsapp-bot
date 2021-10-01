


<p align="center">
<a href="https://github.com/mrfzvx12"><img title="mrfzvx12" src="https://img.shields.io/badge/github-Mrfzvx12-orange.svg?style=social&logo=github"></a>
</p>
<p align="center">
<img src="https://gpvc.arturio.dev/mrfzvx12" />
<a href="https://github.com/mrfzvx12"><img title="Author" src="https://img.shields.io/badge/Termux Whatsapp Bot-V4-orange?style=for-the-badge&logo=github"></a>
<p/>
<p align="center">
<a href="https://github.com/mrfzvx12/followers"><img title="Followers" src="https://img.shields.io/github/followers/mrfzvx12?label=Followers&style=social"></a>
<a href="https://github.com/mrfzvx12/lexa-v4/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/mrfzvx12/lexa-v4?&style=social"></a>
<a href="https://github.com/mrfzvx12/lexa-v4/network/members"><img title="Fork" src="https://img.shields.io/github/forks/mrfzvx12/lexa-v4?style=social"></a>
<a href="https://github.com/mrfzvx12/lexa-v4/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/mrfzvx12/lexa-v4?label=Watching&style=social"></a>
<a href="https://github.com/mrfzvx12/lexa-v4/watchers"><img title="Contributor" src="https://img.shields.io/github/contributors/mrfzvx12/lexa-v4?logo=github&style=social"></a>
</p>
<p align="center">
<a href="https://github.com/mrfzvx12/lexa-v4"><img src="https://img.shields.io/github/repo-size/mrfzvx12/lexa-v4?label=Repo%20size&style=plastic"></a>
<a href="https://github.com/mrfzvx12/lexa-v4"><img src="https://img.shields.io/github/search/mrfzvx12/mrfzvx12/whatsapp?label=Search&style=plastic"></a>
</p>

<h3 align="center">What New ?</h3>

In this version I will recode the bot from [**WABOT-AQ**](https://github.com/Nurutomo/wabot-aq) and try to make it run without the **REST API** which uses **APIKEY**, so bots can run without fear **APIKEY** runs out"


#### Simple WhatsApp Bot
- [x] Original Script [**WABOT-AQ**](https://github.com/Nurutomo/wabot-aq)

- [ ] Deploy On heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrfzvx12/lexa-v4)

***

<h3 align="center">FOR TERMUX/UBUNTU/SSH USER</h3>
<details close="close">
  <summary>Click</summary>

#### FOR TERMUX/UBUNTU/SSH USER

```sh
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/Nurutomo/wabot-aq
cd wabot-aq
npm install
npm update
```

#### INSTALL ON TERMUX WITH UBUNTU

* INSTALLING UBUNTU

```sh
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```

* INSTALLING REQUIRED PACKAGES

```sh
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

* INSTALLING NODEJS & WABOT-AQ

```sh
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Nurutomo/wabot-aq
cd wabot-aq
npm install
npm update
```
</details>

***

<h3 align="center">FOR WINDOWS/VPS/RDP USER</h3>
<details close="close">
  <summary>Click</summary>

#### FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Nurutomo/wabot-aq
cd wabot-aq
npm install
npm update
```

#### Run

```bash
node .
```

***

#### Arguments `node . [--options] [<session name>]`

#### `--self`

> Activate self mode (Ignores other)

#### `--pconly`

> If that chat not from private bot, bot will ignore

#### `--gconly`

> If that chat not from group, bot will ignore

#### `--swonly`

> If that chat not from status, bot will ignore

#### `--prefix <prefixes>`

> * `prefixes` are seperated by each character
Set prefix

#### `--server`

> Used for [heroku](https://heroku.com/) or scan through website

#### `--db <json-server-url>`

> Use external db instead of local db
Example Server

`https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

> The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

#### `--big-qr`

> If small qr unicode doesn't support

#### `--restrict`

> Enables restricted plugins (which can lead your number to be **banned** if used too often)

> * Group Administration `add, kick`

#### `--img`

> Enable image inspector through terminal

#### `--autoread`

> If enabled, all incoming messages will be marked as read

#### `--nyimak`

> No bot, just print received messages and add users to database

#### `--test`

> **Development** Testing Mode

#### `--trace`

```js
conn.logger.level = 'trace'
```

#### `--debug`

```js
conn.logger.level = 'debug'
```

</details>

***

### Join WhatsApp Group
If in doubt, before installing, try the bot here first
<p>
<a href="https://chat.whatsapp.com/LH3NMQUCwaVAumBt0WMyAg" target="blank"><img src="https://img.shields.io/badge/Im Lexa-30302f?style=flat&logo=whatsapp" /></a>
</p>

***

### Let's connect with me
For more detailed information, please contact me via social media below:

<p>
<a href="http://wa.me/6282223014661" target="blank"><img src="https://img.shields.io/badge/Whatsapp-30302f?style=flat&logo=whatsapp" /></a>
<a href="http://www.instagram.com/mrf.zvx/" target="blank"><img src="https://img.shields.io/badge/Instagram-30302f?style=flat&logo=instagram" /></a>
<a href="https://www.facebook.com/profile.php?id=100028409167054" target="blank"><img src="https://img.shields.io/badge/Facebook-30302f?style=flat&logo=facebook" /></a>
</p>

***

### Thank To
* <a href="https://github.com/adiwajshing/Baileys"><img src="https://img.shields.io/github/followers/adiwajshing?color=orange&label=Adiwajshing&logo=github&logoColor=orange&style=plastic"></a>
* <a href="https://github.com/Nurutomo/wabot-aq"><img src="https://img.shields.io/github/followers/nurutomo?color=orange&label=Nurutomo&logo=github&logoColor=orange&style=plastic"></a>

***

### Tamplate Readme
Thank to
https://img.shields.io

***