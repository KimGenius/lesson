const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function (req, res) {
  res.send('Hello World!!asfasdfsadfasfs!')
})

app.post('/', function (req, res) {
  // 회원가입~~
  if (req.body.pw && req.body.id) {
    res.status(200).end()
  } else {
    res.status(400).end()
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
