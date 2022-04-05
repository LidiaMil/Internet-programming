const express = require('express')
const path = require('path');
const { check, validationResult } = require('express-validator')
const app = express()
const port = 3000

const HTML_DIR = path.join(__dirname, '/public/')
app.use(express.static(HTML_DIR))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index3.html'));
})

app.post('/', (req, res) => {
  console.log('1111start')
})

app.post('/my',[
  check('email', 'email некорректен').isEmail(),
  check('password', 'пароль от 3 до 12').isLength({ options: { min: 5, max: 200 } })
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log('некорректный запрос')
    // return res.status(400).json({ message: 'некорректный запрос', errors })
  }
  try {
    console.log('start')
    console.log(req.body)
  }
  catch (e) {
    res.send({ message: "Server error" })
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
