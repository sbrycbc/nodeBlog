const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use('/test', (req, res, next) => {
    console.log('ich bin Middleware!!')
    next()
})

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})









app.listen(port, hostname, () => {
    console.log(` Server läuft auf, http://${hostname}:${port}/`)
})


/* const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')


const server = http.createServer((req, res) => {
    /* console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello NODE.JS') */

    /* if (req.url === '/') {
        return res.end(indexPage)
    }else if (req.url === '/about'){
        return res.end(aboutPage)
    }else if (req.url === '/contact'){
        return res.end(contactPage)
    }else {
        res.statusCode = 404
        res.end('NOT FOUND')
    }
})

server.listen(port, hostname, () => {
    console.log(` Server läuft auf, http://${hostname}:${port}/`)
}) */ 




// mongodb+srv://sabriyecbc:hvqEncsFDWgAtOjP@sabriye.i22pwid.mongodb.net/