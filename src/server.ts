const express = require('express')
const app = express()

app.get('/', (req:any,res:any)=> res.send('helo world'))

app.listen(3000,()=> console.log('runningg . .'))