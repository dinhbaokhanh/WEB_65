const express = require('express');
const jwt = require('jsonwebtoken')
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://127.0.0.1:27017/TEST';

app.use(express.json());
// Câu 1 em import thủ công ạ :>>

app.get('/products', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db('TEST');
    const inventories = db.collection('inventories');
    try {
      inventories.find().toArray((err, result) => {
      res.send(result);
      client.close();
    });
    } catch (error) {
      res.status(500).send({
        message: error.message
      })
    }
  });
});

app.get('/products/:quantity', (req, res) => {
  const db = client.db('TEST');
  const inventories = db.collection('inventories');
  const quantity = Number(req.params.quantity);
  const query = {quantity: {$lt: quantity}};
  MongoClient.connect(url, (err, client) => {
    try {
      if (err) throw err;
      inventories.find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        client.close();
      });
    } catch (error) {
      res.status(500).send({
        message: error.message
      })
    }
  });
});


app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
