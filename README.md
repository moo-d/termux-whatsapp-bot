# Baileys Wabot

<p style="text-align:center">
  <img src="./.github/rm/20210821_110622.jpg">
</p>

# How to Install

## How to install in Termux

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

## Ubuntu
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

## Windows

### Installing Package

#### Installing Git
- Download the file [here](https://git-scm.com/download/win)
- After that, run downloaded file as Administrator.
- Complete the installation.
- Check `git`
- Now that you've Tesseract installed, verify that it's working by running this command to see version number:

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

## Group
* <a href="https://chat.whatsapp.com/Kr17kaCJQZQ0oiaU1q240y"><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
