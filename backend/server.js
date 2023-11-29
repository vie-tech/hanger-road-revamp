const express = require("express");
const app = express();
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
require('dotenv').config();

//middleware
app.use(express.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(process.env.PORT_NUM);
    db = getDb();
  }
});

app.get('/database', (req, res) => {
  let result = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => result.push(book))
    .then(() => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get("/database/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((books) => {
        res.status(200).json(books);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.status(500).json({ mssg: "ObjectId is not valid" });
  }
});

app.post('/database', (req, res)=>{
  const data = req.body

  db.collection('books')
  .insertOne({data}) 
  .then((mssg)=>{
    res.status(201).json({message: mssg})
  })
  .catch((err)=>{
    res.status(500).json({mssg: err})
  })
})

app.delete('/database/:id', (req, res)=>{
  db.collection('books')
  .deleteOne({_id: new ObjectId(req.params.id)})
  .then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(500).json(err)
  })
})

app.patch('/database/:id', (req, res)=>{
  const updates = req.body
  db.collection('books')
  .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
  .then((result)=>{
    res.status(200).json(result)
  })
  .catch((err)=>{
    res.status(500).json(err)
  })

})