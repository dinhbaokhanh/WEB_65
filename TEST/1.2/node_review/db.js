const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  client.connect(() => {
    const database = client.db("TEST");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
  });
};

module.export = { connectToDb, db };
