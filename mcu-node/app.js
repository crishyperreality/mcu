const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const connection = require('./config/connectionDB')

var indexRouter = require('./routes/index')

app.use(cors());
app.use('/', indexRouter)

app.get('/', (req, res) => {
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})