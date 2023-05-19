const express = require("express");
const { connectToDb, db } = require("./db");
const app = express();
const jwt = require("jsonwebtoken");

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
// B2.
// app.get("/inventories", async (req, res) => {
//   try {
//     const inventories = await db.inventories.find().toArray();
//     res.json(inventories);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Error" 
//     });
//   }
// });

// B3.
// app.get("/inventories", async (req, res) => {
//   try {
//     const query = req.query.lowQuantity ? { instock: { $lt: 100 } } : {};
//     const inventories = await db.inventories.find(query).toArray(); 
//     res.json(inventories);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Error" 
//     });
//   }
// });

// B4 + B5
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: "Missing token" });
//   }
//   try {
//     const decoded = jwt.verify(token, "key");
//     req.userId = decoded.userId;
//     next();
//   } catch (err) {
//     res.status(401).json({ 
//       message: "Invalid token" 
//     });
//   }
// };

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   db.users.findOne({ username, password }, (err, user) => {
//     if (user) {
//       const token = jwt.sign({ userId: user._id }, "key");
//       res.json({ token });
//     } else {
//       res.status(401).json({ 
//         message: "Invalid" 
//       });
//     }
//   });
// });

// app.get("/inventory", verifyToken, (req, res) => {
//   db.inventories.find().toArray((err, inventories) => {
//     res.json(inventories);
//   });
// });

// B6
// app.get('/orders', async (req, res) => {
//   try {
//     const orders = await db.collection('orders').find().toArray();
//     const result = [];
//     for (let order of orders) {
//       const product = await db.collection('inventories').findOne({ item: order.item });
//       result.push({
//         ...order,
//         description: product.description,
//       });
//     }
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ 
//       message: 'Error' 
//     });
//   }
// });