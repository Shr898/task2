const express = require('express');
const app = express()
const port = 3000

app.get('/home' , (req, res) => {
    res.send('Hello visitor. THIS IS FROM task2!!!!!!')
})

app.get('/more-information' , (req , res) =>{
    res.send('This is more information on task2!!!!!!')
})

app.listen(port , () => {
    console.log("The task2 express app has started!!!!!!")
})