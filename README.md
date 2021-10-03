# Baileys Wabot
<p style="text-align:center">
  <img src="./.github/rm/20210821_110622.jpg">
</p>

# How to Install

<details>
<summary>How to install in Termux</summary>

### Cloning
Type command :

```sh
> apt-get update && apt-get install upgrade -y
> apt-get install git
> git clone https://github.com/moo-d/baileys-wabot
```

### Installing Package & Dependencies
Type command :

```sh
> cd baileys-wabot
> bash install.sh
```

### Start
Type command :

```sh
> npm start
```

</details>

<details>
<summary>How to install in Ubuntu</summary>
Type command :

```sh
> apt-get update
> apt-get install sudo -y
> sudo apt-get install git
> sudo git clone https://github.com/moo-d/baileys-wabot
> cd baileys-wabot
```

### Installing Package & Dependencies

```sh
> sudo apt-get install nodejs -y
> sudo apt-get install wget -y
> sudo apt-get install libwebp-dev -y
> sudo apt-get install tesseract-ocr -y
> npm install && echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
```

#### Alternative
This is an alternative command to install Package & Dependencies

```sh
sudo apt-get install nodejs wget libwebp-dev tesseract-ocr -y && npm install && echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
```

### Start
Type command :

```sh
> npm start
```

</details>

<details>
<summary>How to install in Windows</summary>

#### Installing Git
- Download the file [here](https://git-scm.com/download/win)
- After that, run downloaded file as Administrator.
- Complete the installation.
- Check `git`
- Now that you've Git installed, verify that it's working by running this command to see version number:

```cmd
> git --version
```

#### Installing Libwebp
- Download the file [here](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.2.1-windows-x64.zip).
- Extract the file to `C:\` path.
- Rename the extracted folder to `libwebp`.
- Run Command Prompt as Administrator.
- Run this command:

```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```

#### Installing Tesseract
- Download the file x64 [here](https://s.id/vftesseract).
- After that, run downloaded file as Administrator.
- Complete the installation.
- Run Command Prompt as Administrator.
- Run this command:
```cmd
> setx /m PATH "C:\Program Files\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
- Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```
> tesseract -version
```

#### Installing FFmpeg
- Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
- Extract the file to `C:\` path.
- Rename the extracted folder to `ffmpeg`.
- Run Command Prompt as Administrator.
- Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.

</details>

# Editing File 📝

## Editing [setting.json](https://github.com/moo-d/baileys-wabot/blob/main/lib/setting.json)
```json
{
  "prefix":".",
  "ownernum": "62888xxx",
  "removebgApiKey": "Your-ApiKey",
  "botname": "BAILEYS-WABOT",
  "ownername": "moo-d",
  "pttmode": "false",
  "groupminact": "false",
  "grouplimit": 5
}
```

- `prefix`: if you wan't to change prefix, you can change it as you want Example: `"prefix": "#"`.
- `ownernum`: your WhatsApp number.
- `removebgApiKey`: RemoveBg ApiKey. You have to login/signup first [here](https://www.remove.bg/upload). Then you can get it [here](https://www.remove.bg/api)
- `botname`: your bot name
- `ownername`: your name
- `pttmode`: If you want use `pttmode`,change it to `true`
- `groupminact`: `true`(enable)/`false`(disable) Leave group if number of group members is 
- `grouplimit`: minimal group members (this will active if groupminact is `true`.)

## Editing Language Bot
If you want to change the language to English or Arabic, replace `const txtlang = ind` to `eng` or `arab`.

Example:

```js
const txtlang = ind
```

To:
```js
const txtlang = eng
```

<!--# How To Run Bot 24 Hours 🕓
You can run bot 24 hours with website [Replit](replit.com)

Read Replit [README.md](https://github.com/moo-d/baileys-wabot/blob/main/replit/README.md) for How to activating Replit Keep Alive & other.
-->
# Features

|      Sticker     | Yes |
|:----------------:|:---:|
| Sticker Maker    | ✔️  |
| Sticker To Image | ✔️  |

| News/Information | Yes |
|:----------------:|:---:|
| Covid-19 Help    | ✔️  |

|   Fun       | Yes |
|:-----------:|:---:|
| Meme (Indo) | ✔️  |

| Education | Yes |
|:---------:|:---:|
| Brainly   | ✔️  |

|     Anime/Manga     | Yes |
|:-------------------:|:---:|
| Random Anime (NSFW) | ✔️  |

|           Group           | Yes |
|:-------------------------:|:---:|
| See List Admin Group      | ✔️  |
| Get Invitation Link Group | ✔️  |
| Reply Fake Message        | ✔️  |
| Check Level               | ✔️  |
| TicTacToe                 | Testing |

|         Admin Group              | Yes |
|:--------------------------------:|:---:|
| Promote Members                  | ✔️  |
| Demote Members                   | ✔️  |
| Add Members                      | ✔️  |
| Kick Members                     | ✔️  |
| Say Welcome to new members       | ✔️  |
| Private Group Info               | ✔️  |
| Ordering Bots to leave the group | ✔️  |
| Close Group                      | ✔️  |
| Open Group                       | ✔️  |
| Delete Bot Message               | ✔️  |
| Change Name Group                | ✔️  |
| Change Description Group         | ✔️  |
| Set Permission Nsfw on Group     | ✔️  |
| Activating Leveling              | ✔️  |

|             Owner           | Yes |
|:---------------------------:|:---:|
| Change Bot Prefix           | ✔️  |
| Change Photo Profile Bot    | ✔️  |
| Broadcast                   | ✔️  |
| Group Broadcast             | ✔️  |
| Change MSG Mode to Ptt Mode | ✔️  |

|          No Category         | Yes |
|:-----------------------------:|:---:|
| WA-ME Link                    | ✔️  |
| Check Block List              | ✔️  |
| Video To MP 3                 | ✔️  |
| Set Command to Private/Public | ✔️  |

</details>

# Social Media 📱

## Discord
- Coming soon

## Group
* <a href="https://chat.whatsapp.com/Kr17kaCJQZQ0oiaU1q240y"><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>

# Thanks To:
- [`@adiwajshing/Baileys`](https://github.com/adiwajshing/Baileys)
