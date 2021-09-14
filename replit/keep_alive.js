let express = require('express');
let path = require('path');
let SocketIO = require('socket.io');
let qrcode = require('qrcode');
let app = new express();
let PORT = process.env.PORT || 3000;
let fs = require('fs');
let setting = JSON.parse(fs.readFileSync('./lib/setting.json'))
let prefix = new setting.prefix

app.use(express.static(path.join(__dirname, 'views')))
