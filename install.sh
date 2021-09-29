#!/usr/bin/bash

apt-get update
apt-get upgrade -y
echo "[Installing Package]"
apt-get install -y nodejs libwebp ffmpeg wget tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
echo "[Installing Dependencies]"
npm install
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
