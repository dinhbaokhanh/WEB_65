import express from "express";

const app = express();

app.get('/', (req, res) => {
    try {
        
    } catch (error) {
        res.status(401).send({
            message: "Failed"
        })
    }
})

app.listen(8000, () => {
    console.log("Server is running");
})