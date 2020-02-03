require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

require('./src/routes/web')(app)

app.listen(process.env.PORT)