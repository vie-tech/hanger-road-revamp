const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./dbSchema')
//middleware
app.use(express.json());
mongoose.connect(process.env.DB_STRING)
app.listen(process.env.PORT_NUM, ()=>{
  console.log("server is listening")
})



app.post('/food', (req, res) =>{
  const body = req.body
  Food.create(body)
  .then((result)=>{
    res.status(200).json(result)
  })
})

app.get('/food', (req, res) =>{
  Food.find()
  .then((mssg)=>{
   res.status(200).json(mssg)
  })
})

app.get('/food/:id', (req, res) =>{
  Food.findOne({_id: req.params.id})
  .then((mssg)=>{
    res.status(200).json(mssg)
  })
})

app.patch('/food/:id', (req, res)=>{
  const updates = req.body
  Food.updateOne({_id: req.params.id}, {$set: updates})
  .then((mssg)=>{
    res.status(200).json(mssg)
  })
})