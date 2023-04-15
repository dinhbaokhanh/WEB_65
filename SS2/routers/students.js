//  All about students
import express from "express"

const router = express.Router();
const students = [
    { id : 1, name : "Klee"},
    { id : 2, name : "Bob"},
    { id : 3, name : "Alice"},
]

router.get('/', (req, res) => {
    res.send("Hello students");
})
router.get('/create', (req, res) => {});
router.get('/read', (req, res) => {
    res.send("Read students");
});
router.get('/edit', (req, res) => {});
router.get('/delete', (req, res) => {});

export default router;
