import express from "express";
import router from "./routes/index.js";

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Connected',
    })
})

app.use(router);

app.listen(8000, (err) => {
    try {
        if(err) throw new Error('Server error');
        console.log('Server working');
    } catch (error) {
        console.log(error.message);
    };
})