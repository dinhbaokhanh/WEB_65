import express from "express";
const studentRouter = express.Router();

const listStudents = [
    {
        id: 1,
        name: "Klee",
        age: 5
    },
    {
        id: 2,
        name: "Mona",
        age: 5
    },
    {
        id: 3,
        name: "Albedo",
        age: 8
    }
]

studentRouter.get('', (req, res) => {
    res.send(listStudents);
})

studentRouter.post('/', (req, res) => {



    res.send({
        message: 'Post'
    })
})

export default studentRouter;