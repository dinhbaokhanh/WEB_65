import express from "express";
import mongoose from "mongoose";
import restaurantModel from "./database/restaurants.js";

const app = express();


app.get('/', (req, res) => {
    res.send({
        message: 'Kết nối thành công'
    })
})

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find();
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find({
//             "address.zipcode": "11209",
//         });
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find(
//             {"cuisine" : "American "}
//         );
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find(
//             {"borough" : "Brooklyn"}
//         );
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find(
//             { "borough": "Manhattan"}
//         );
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find({
//             "cuisine": "Chicken",
//             "borough": "Manhattan"
//         });
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// app.get('/api/v1/restaurant', async(req, res) => {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
//         const data = await restaurantModel.find({
//             "address.street" : "Wall Street"
//         });
//         console.log(data);
//         res.send({
//             message: data
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

app.get('/api/v1/restaurant', async(req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/WEB_65');
        const data = await restaurantModel.find(
            {}
        );
        console.log(data);
        res.send({
            message: data
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.listen(8000, () => {
    console.log("Server is running");
})