var jpeg = require('jpeg-js');
var fs = require('fs');

function decodeJpegFile() {
    let jpegFile = fs.readFileSync('jpg.jpg');
    return jpeg.decode(jpegFile);
}

function encodeJpegFile(file)  {
    if (file) {
        return jpeg.encode(file);
    }
}


// What you export here is what would be available for importing when the package is installed
module.exports = decodeJpegFile;


