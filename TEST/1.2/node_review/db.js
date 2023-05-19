const { MongoClient } = require("mongodb");

const db = {};

const connectToDb =  () => {
  const client = new MongoClient("mongodb://localhost:27017");
  client.connect(() => {
    const database = client.db("TEST");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
  
  // B1.
  //   try {
  //     const inventory = [
  //       {
  //         "_id": 1,
  //         "sku": "almonds",
  //         "description": "product 1",
  //         "instock": 120
  //       },
  //       {
  //         "_id": 2,
  //         "sku": "bread",
  //         "description": "product 2",
  //         "instock": 80
  //       },
  //       {
  //         "_id": 3,
  //         "sku": "cashews",
  //         "description": "product 3",
  //         "instock": 60
  //       },
  //       {
  //         "_id": 4,
  //         "sku": "pecans",
  //         "description": "product 4",
  //         "instock": 70
  //       }
  //     ];
  //     const order = [
  //       {
  //         "_id": 1,
  //         "item": "almonds",
  //         "price": 12,
  //         "quantity": 2
  //       },
  //       {
  //         "_id": 2,
  //         "item": "pecans",
  //         "price": 20,
  //         "quantity": 1
  //       },
  //       {
  //         "_id": 3,
  //         "item": "pecans",
  //         "price": 20,
  //         "quantity": 3
  //       }
  //     ];
  //     const user = [
  //       {
  //         "username": "admin",
  //         "password": "MindX@2022"
  //       },
  //       {
  //         "username": "alice",
  //         "password": "MindX@2022"
  //       }
  //     ];
  
  //     // Insert data into the collections
  //     db.inventories.insertMany(inventory);
  //     db.orders.insertMany(order);
  //     db.users.insertMany(user);
  //   } catch (error) {
  //     console.error(error);
  //   } 
  });
};

module.exports = { connectToDb, db };
