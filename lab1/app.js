const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, '/index1.html'));
})
app.get('/2', (req, res) => {
    res.sendFile(path.join(__dirname, '/index2.html'));
})
app.get('/3', (req, res) => {
    res.sendFile(path.join(__dirname, '/index3.html'));
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
