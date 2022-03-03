
const express = require('express');
const path = require('path');
const app = express()
 
//definir pasta public
app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

//definir as routas
app.use('/contactos',require('./routes/contactosRoutes'))  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

const port = 3002


app.listen(port, () => {
    console.log('Listenning...')
})