const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())
app.use(cors())
app.use(express.static)

app.get('/', (req, res)=>{
    res.sendFile(path.join(_dirname, '..public/index.html'))
})

app.listen(SERVER_PORT, ()=>console.log(`server running on ${SERVER_PORT}`))