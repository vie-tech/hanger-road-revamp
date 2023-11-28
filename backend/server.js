const express = require('express');
const app = express();

const {connectToDb, getDb} = require('./server')




connectToDb((err)=>{
  
})
app.listen(3001);