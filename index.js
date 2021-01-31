//step 1
//import express from 'express'
const express = require("express")
const app = express()

//step 3
const importData = require("./data.json")
//import importData from './data.json'
//step 1
let port = process.env.port || 3000

//step 2
app.get("/", (req, res) => {
    res.send("Hello World")
}) 

//step 3
app.get("/players", (req, res) => { 
    res.send(importData)
})

app.listen(port, () => {
    console.log('Example app is listening on http://localhost:${port}')
})

//step 4:  download and install heroku close folder and reopen.  login
//setp 5: create Procfile
//step 6:  in terminal heroku create my-app and start pushing changes using git commit 
//step 7: 1) git add .  2) git commit -m "first commit"  3) git push heroku master