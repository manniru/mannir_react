const routes = require('express').Router();

var dd = require("./remita_receipt.js");

routes.get('/', (req, res) => {
    var fs = require('fs');
  
    var fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
      }
    };
  
    var PdfPrinter = require('pdfmake/src/printer');
    var printer = new PdfPrinter(fonts);
  
    //var printer = new pdfMakePrinter(fonts)
    //var doc = printer.createPdfKitDocument(definition)
  
  
    /*
    var dd = {
    content: [
        'Alhamdulillah',
        'Bismillahir Rahamanir Rahim',
        'Developed by: Muhammad Mannir Ahmad'
    ]
    }
    */

    // playground requires you to assign document definition to a variable called dd


    var pdfDoc = printer.createPdfKitDocument(dd);
  
    //pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish',function(){ });
    //pdfDoc.end();
  
  
    var chunks = []
    var result
  
    pdfDoc.on('data', function (chunk) { chunks.push(chunk) });
    pdfDoc.on('end', function () {
          result = Buffer.concat(chunks)
          res.contentType('application/pdf')
          res.send(result)
        });
        pdfDoc.end()
  });  

module.exports = routes;