require('dotenv').config();
const express = require('express')

require('./src/modules/geocode')()
console.log(process.env.MAP_KEY)