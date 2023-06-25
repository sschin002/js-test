const PDFDocument = require("pdfkit");
const fs = require("fs");
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc
  .font("fonts/PalatinoBold.ttf")
  .fontSize(25)
  .text("Some text with an embedded font!", 100, 100);

doc.end();
writeStream.on('finish', () => {
    console.log('PDF file has been written successfully.');
  });
