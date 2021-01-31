const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()
let port = process.env.port || 4000

server.use(middlewares)
server.use(router)

server.listen(port)



//step 1
//import express from 'express'
// const express = require("express")
// const app = express()

// //step 3
// const importData = require("./data.json")
// //import importData from './data.json'
// //step 1
// let port = process.env.port || 4000

// //step 2
// app.get("/", (req, res) => {
//     res.send("Hello World")
// }) 

// //step 3
// app.get("/players", (req, res) => { 
//     res.send(importData)
// })

// app.listen(port)
// app.listen(port, () => {
//     console.log('Example app is listening on http://localhost:${port}')
// })

//step 4: make a new repository exd-api
//step 5: create .gitignore
//setp : create Procfile file - no extention
//step : clone repository:  1) cd exd-api 2) cd exd-api
//step 6: push to Git Hub repository 
//1) git init 2) git add . 3) git commit -m "first commit"  4) 'git push origin main' 
//step 7: push to Heroku server - login 
//step : at the terminal type 1) 'heroku create exd-api' 2) 'git push heroku main' 3) click deploy link