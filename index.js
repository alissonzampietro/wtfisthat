require('dotenv').config();


require('./src/modules/geocode')()
console.log(process.env.MAP_KEY)