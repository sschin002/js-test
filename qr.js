var qrCode = require('qrcode');
qrCode.toString('My first qr code generation',{type:'terminal'}, function (err, url) {
    console.log(url)
})
  