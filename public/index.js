const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname);
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  let fileNumber = 0;

  files.forEach((file) => {
    if (path.extname(file).match(/\.(jpg|jpeg|png|gif)$/)) {
      const filePath = path.join(directoryPath, file);
      const newFileName = file.replace(/(\.[\w\d_-]+)$/i, '-adventure$1');
      sharp(filePath)
        .resize({ width: 764 }) // Resize with a maximum width of 764 pixels
        .jpeg({ quality: 80 }) // Convert to JPEG with 80% quality
        .toFile(path.join(directoryPath, newFileName), (err, info) => {
          if (err) {
            throw err;
          }
          console.log(`${file} was resized, compressed, and renamed to ${newFileName}`);
        });
    }
  });
});
