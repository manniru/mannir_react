const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const pdf = require('./pdf/pdf');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('i am get')

    res.sendStatus(200)
  })

app.use('/pdf', pdf);

app.get('/pdf1', (req, res) => {
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


  var dd = {
  content: [
      'Alhamdulillah',
      'Bismillahir Rahamanir Rahim',
      'Developed by: Muhammad Mannir Ahmad'
  ]
  }
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


    //res.sendStatus(200)
})

app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

app.post('/login', (req, res) => {
    store
      .authenticate({
        username: req.body.username,
        password: req.body.password
      })
      .then(({ success }) => {
        if (success) res.sendStatus(200)
        else res.sendStatus(401)
      })
  })

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})