import express from "express"

const router = express.Router();

router.get('/login', (req, res) => {
    res.send("Login");
});

router.get('/login', (req, res) => {});

export default router;