const express = require('express')
const app = express()

const PORT = 3001

//app.get('/', (req, res)=> res.send("muahahah"))
//app.get('/home', (req, res)=> res.send("Hello form the server whit nodemon"))
app.listen(PORT, ()=> console.log(`Server corriendo en puerto ${PORT}`))

app.use(express.static('public'))
app.get('/', (req, res)=> {

    res.sendFile(__dirname + '/public/index.html')
})

app.get('/home', (req, res)=> {

    res.sendFile(__dirname + '/public/about.html')
})
