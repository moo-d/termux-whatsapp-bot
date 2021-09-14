let express = require('express');
let path = require('path');
let SocketIO = require('socket.io');
let qrcode = require('qrcode');
let app = new express();
let PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')))
