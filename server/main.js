const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

import mountCreatePdfApp from 'node-react-pdfmake/node'


app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/createpdf', mountCreatePdfApp())

app.get('/', (req, res) => {
    console.log('i am get')

    res.sendStatus(200)
  })

app.get('/pdf', (req, res) => {
    console.log('i am pdf')

    res.sendStatus(200)
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